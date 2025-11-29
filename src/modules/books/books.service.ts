import { Injectable, Logger } from '@nestjs/common';
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
    await this.booksRepository.saveBooks(books, queryId);
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
      return await Promise.all(
        bookTitles.map(async (bookTitle) => {
          const result = await callMultipleAPIs(bookTitle, this.apiCalls);
          const cacheKey = `search:${bookTitle}`;
          const queryId =
            await this.booksRepository.getOrCreateQueryId(bookTitle);

          const fuzzyBooks = fuzzyMatching(bookTitle, result as IBookInfo[]);
          await this.saveBooks(fuzzyBooks, queryId, cacheKey);
          return fuzzyBooks;
        }),
      );
    }
  }

  async searchBook(telegramId: bigint, query: string) {
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

    // 2. ATTEMPT TO LOG SEARCH (Must not crash the entire function)
    try {
      // This is the line that was crashing the function:
      await this.searchLogService.logSearch(telegramId, formattedQuery);
    } catch (error) {
      // Log the error but DO NOT return. Let the search continue.
      this.logger.error(
        `Failed to log search: ${error instanceof Error ? error.message : String(error)}.`,
        error,
      );
      // We know the query is "not found", so we proceed.
    }

    // If cached - return cached result
    // if (cached) {
    //   this.logger.log('Redis cache hit');
    //   return JSON.parse(cached) as IBookInfo[];
    // }

    const yakabooAuthorBooks =
      await this.yakabooApiService.searchByAuthor(formattedQuery);

    if (yakabooAuthorBooks.length > 0) {
      const authorsBooks = await this.getAuthorsBooks(
        yakabooAuthorBooks,
        formattedQuery,
      );

      if (!authorsBooks) {
        return;
      }

      return resolveAndGroupBooks(authorsBooks.flat());
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
