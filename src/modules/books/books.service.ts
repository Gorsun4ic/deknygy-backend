import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import {
  YakabooApiService,
  NashformatApiService,
  AprioriApiService,
  VivatApiService,
  StaryLevApiService,
  MegogoApiService,
  LaboratoryService,
  KSDService,
  ReadEatService,
  BookYeApiService,
  KnygolandApiService,
  RidnamovaApiService,
  ArthussApiService,
} from '../search-providers';
import { formatQuery } from '../common/utils/formatQuery';
import { CACHE_TTL } from './constants/cacheTTL';
import { IBookInfo } from '../common/interfaces/api/book.info';
import { RedisService } from '../redis/redis.service';
import { BooksRepository } from './books.repository';
import { SearchLogService } from '../analytics/services/user/search-log.service';
import { resolveAndGroupBooks } from './lib/merge/resolveAndGroupBooks';
import { fuzzyMatching } from './lib/fuzzy-filtering/fuzzyMatching';
import { getTitleWithoutAuthor } from './lib/getTitleWithoutAuthor';
import { type ApiCall } from './interfaces/services.type';
import { callMultipleAPIs } from './lib/callMultipleAPIs';
import { uniqifyBooks } from './lib/unuiqifyBooks';
import { CacheLogService } from '../analytics/services/user/cache-log.service';

@Injectable()
export class BooksService {
  constructor(
    private readonly yakabooApiService: YakabooApiService,
    private readonly nashformatApiService: NashformatApiService,
    private readonly aprioriApiService: AprioriApiService,
    private readonly vivatApiService: VivatApiService,
    private readonly staryLevApiService: StaryLevApiService,
    private readonly megogoApiService: MegogoApiService,
    private readonly laboratoryService: LaboratoryService,
    private readonly ksdService: KSDService,
    private readonly readEatService: ReadEatService,
    private readonly bookYeApiService: BookYeApiService,
    private readonly knygolandApiService: KnygolandApiService,
    private readonly ridnamovaApiService: RidnamovaApiService,
    private readonly arthussApiService: ArthussApiService,
    private readonly logger: Logger,
    private readonly redisService: RedisService,
    private readonly booksRepository: BooksRepository,
    private readonly searchLogService: SearchLogService,
    private readonly cacheLogService: CacheLogService,
  ) {}

  // Search all APIs with error handling
  private get apiCalls(): ApiCall[] {
    return [
      { name: 'Yakaboo', service: this.yakabooApiService },
      { name: 'Nashformat', service: this.nashformatApiService },
      { name: 'Apriori', service: this.aprioriApiService },
      { name: 'Vivat', service: this.vivatApiService },
      { name: 'Stary Lev', service: this.staryLevApiService },
      { name: 'Megogo', service: this.megogoApiService },
      { name: 'Laboratory', service: this.laboratoryService },
      { name: 'KSD', service: this.ksdService },
      { name: 'ReadEat', service: this.readEatService },
      { name: 'BookYe', service: this.bookYeApiService },
      { name: 'Knygoland', service: this.knygolandApiService },
      { name: 'Ridnamova', service: this.ridnamovaApiService },
      { name: 'Arthuss', service: this.arthussApiService },
    ];
  }

  private async saveBooks(
    books: IBookInfo[],
    queryId: number,
    cacheKey: string,
  ) {
    const savedBooks = await this.booksRepository.saveBooks(books, queryId);

    // Log each saved book to CacheLog for technical/caching tracking
    // This is done in parallel and errors are caught to not break the search flow
    await Promise.allSettled(
      savedBooks.map(async (book) => {
        try {
          await this.cacheLogService.logCacheLog(queryId, book.id);
        } catch (error) {
          this.logger.error(
            `Failed to log cache entry for book ${book.id} and query ${queryId}: ${
              error instanceof Error ? error.message : String(error)
            }`,
          );
        }
      }),
    );

    const cacheValue = resolveAndGroupBooks(books);
    await this.redisService.set(
      cacheKey,
      JSON.stringify(cacheValue),
      CACHE_TTL,
    );
  }

  private async getAuthorsBooks(authorBooks: IBookInfo[], query: string) {
    const authorsArray = authorBooks
      .map((book) => book.author)
      .filter((author) => typeof author === 'string');

    const { title } = getTitleWithoutAuthor(query, authorsArray);
    // If query was only an author, we loop through all his books and search for each of them
    if (title.length === 0) {
      const bookTitles = authorBooks
        .map((book) => book.title)
        .filter((title) => title.length > 0);

      // Search for each book title and collect all results
      const allBooksArrays = await Promise.all(
        bookTitles.map(async (bookTitle) => {
          const result = await callMultipleAPIs(bookTitle, this.apiCalls);
          const fuzzyBooks = fuzzyMatching(bookTitle, result as IBookInfo[]);
          return fuzzyBooks;
        }),
      );

      // Flatten and deduplicate all books by link
      const allBooks = allBooksArrays.flat();
      return uniqifyBooks(allBooks);
    } else {
      const result = await callMultipleAPIs(title, this.apiCalls);
      const fuzzyBooks = fuzzyMatching(title, result as IBookInfo[]).flat();
      return uniqifyBooks(fuzzyBooks);
    }
  }

  async searchBook(telegramId: bigint, query: string) {
    // Rate limiting: 20 searches per minute
    const rateLimitKey = `search_limit:${telegramId}`;
    const isAllowed = await this.redisService.checkRateLimit(
      rateLimitKey,
      20,
      60, // 60 seconds = 1 minute
    );

    if (!isAllowed) {
      const remaining = await this.redisService.getRemainingRequests(
        rateLimitKey,
        20,
        60,
      );
      this.logger.warn(
        `Rate limit exceeded for user ${telegramId}. Remaining: ${remaining}`,
      );
      throw new HttpException(
        `Rate limit exceeded. Remaining: ${remaining}`,
        HttpStatus.TOO_MANY_REQUESTS,
      );
    }

    const formattedQuery = formatQuery(query);
    const cacheKey = `search:${formattedQuery}`;
    const startTime = Date.now();
    const queryId =
      await this.booksRepository.getOrCreateQueryId(formattedQuery);
    this.logger.log(`[SEARCH START] Key: ${cacheKey}`);

    let cached: string | null = null;

    try {
      cached = await this.redisService.get(cacheKey);
    } catch (error) {
      this.logger.error(
        `Failed to retrieve from Redis. Proceeding without cache.`,
        error instanceof Error ? error.message : String(error),
      );
    }

    // 2. ATTEMPT TO LOG SEARCH
    try {
      await this.searchLogService.logSearch(telegramId, formattedQuery);
    } catch (error) {
      // Log the error but DO NOT return. Let the search continue.
      this.logger.error(
        `Failed to log search: ${error instanceof Error ? error.message : String(error)}.`,
        error,
      );
    }

    // If cached - return cached result
    if (cached) {
      this.logger.log('Redis cache hit');
      return JSON.parse(cached) as IBookInfo[];
    }

    const yakabooAuthorBooks =
      await this.yakabooApiService.searchByAuthor(formattedQuery);

    if (yakabooAuthorBooks.length > 0) {
      const authorsBooks = await this.getAuthorsBooks(
        yakabooAuthorBooks,
        formattedQuery,
      );

      // Only return early if we actually found author books (query was only an author)
      // If authorsBooks is undefined, it means the query had a title, so continue with regular search
      if (authorsBooks && authorsBooks.length > 0) {
        // Save all aggregated and deduplicated books once
        await this.saveBooks(authorsBooks, queryId, cacheKey);
        const endTime = Date.now();
        this.logger.log(`Time taken: ${endTime - startTime}ms`);
        return resolveAndGroupBooks(authorsBooks);
      }
    }

    this.logger.log(
      `[CACHE MISS] Key: ${cacheKey}. Starting ${this.apiCalls.length} API calls.`,
    );

    const results = await callMultipleAPIs(formattedQuery, this.apiCalls);
    const fuzzyBooks = fuzzyMatching(formattedQuery, results as IBookInfo[]);
    const endTime = Date.now();
    this.logger.log(`Time taken: ${endTime - startTime}ms`);

    await this.saveBooks(fuzzyBooks, queryId, cacheKey);
    return resolveAndGroupBooks(fuzzyBooks);
  }
}
