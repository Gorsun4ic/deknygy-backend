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
import { type IBookInfo } from '../common/interfaces/api/book.info';
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
import { type IBookGroupResult } from './interfaces/book.group';
import { removeSymbolsExceptNumbers } from './utils/getNumbersFromString';
import stringSimilarity from 'string-similarity-js';
import { YAKABOO_AUTHOR_SIMILARITY_THRESHOLD } from './constants/fuzzy-thresholds';
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

  /**
   * Extracts all book links from the grouped search results
   */
  private extractBookLinks(groupedResults: IBookGroupResult[]): string[] {
    const links: string[] = [];
    for (const group of groupedResults) {
      for (const groupData of Object.values(group)) {
        // Iterate through all format types (1, 2, 3)
        for (const formatType of [1, 2, 3] as const) {
          const books = groupData.books[formatType] || [];
          for (const book of books) {
            if (book.link) {
              links.push(book.link);
            }
          }
        }
      }
    }
    return [...new Set(links)]; // Remove duplicates
  }

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
      const author = query.replace(title, '').trim();
      const fuzzyBooks = fuzzyMatching(
        title,
        result as IBookInfo[],
        author,
      ).flat();
      return uniqifyBooks(fuzzyBooks);
    }
  }

  private async handleRawBooksCache(
    cachedResult: IBookGroupResult[],
    queryId: number,
    cacheKey: string,
  ): Promise<string[]> {
    // Extract raw books from grouped cached result to ensure they're saved to DB
    const rawBooksFromCache: IBookInfo[] = [];
    for (const group of cachedResult) {
      for (const groupData of Object.values(group)) {
        for (const formatType of [1, 2, 3] as const) {
          const books = groupData.books[formatType] || [];
          rawBooksFromCache.push(...books);
        }
      }
    }

    // Save books to ensure they exist in DB (upsert will handle duplicates)
    if (rawBooksFromCache.length > 0) {
      await this.saveBooks(rawBooksFromCache, queryId, cacheKey);
    }

    // Extract book links from cached result (it's already grouped)
    return this.extractBookLinks(cachedResult);
  }

  private async handleSearchLog(
    result: IBookGroupResult[],
    telegramId: bigint,
    formattedQuery: string,
    rawBooks: IBookInfo[] | Array<{ link: string; similarity: number }>,
  ) {
    if (result.length === 0) {
      await this.searchLogService.logUnsuccessfulSearch(
        telegramId,
        formattedQuery,
      );
    } else {
      // Extract books with their similarity scores
      let booksWithSimilarity: Array<{ link: string; similarity: number }>;

      if (rawBooks.length > 0 && 'title' in rawBooks[0]) {
        // Raw IBookInfo[] array - extract similarity
        booksWithSimilarity = (rawBooks as IBookInfo[]).map((book) => ({
          link: book.link,
          similarity: book._titleSimilarity || 0.0,
        }));
      } else {
        // Already formatted as { link, similarity }
        booksWithSimilarity = rawBooks as Array<{
          link: string;
          similarity: number;
        }>;
      }

      await this.searchLogService.logSearch(
        telegramId,
        formattedQuery,
        booksWithSimilarity,
        result, // Pass the grouped results that user actually saw
      );
    }
  }

  private getUniqueBookLinks(books: IBookInfo[]): string[] {
    const rawBookLinks = books
      .map((book) => book.link)
      .filter((link): link is string => !!link);
    return [...new Set(rawBookLinks)];
  }

  async searchBook(telegramId: bigint, query: string) {
    // Rate limiting: 20 searches per minute
    const rateLimitKey = `search_limit:${telegramId}`;
    const limitParams = [rateLimitKey, 20, 60] as const;
    const isAllowed = await this.redisService.checkRateLimit(...limitParams);

    if (!isAllowed) {
      const remaining = await this.redisService.getRemainingRequests(
        ...limitParams,
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
    const probablyIsbn = removeSymbolsExceptNumbers(query).length === 13;
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

    // If cached - return cached result and log search
    if (cached) {
      this.logger.log('Redis cache hit');
      const cachedResult = JSON.parse(cached) as IBookGroupResult[];
      const bookLinks = await this.handleRawBooksCache(
        cachedResult,
        queryId,
        cacheKey,
      );
      // Log search with viewed books
      // For cached results, we don't have similarity scores, so use default (0.0)
      const booksFromCache = bookLinks.map((link) => ({
        link,
        similarity: 0.0,
      }));
      try {
        await this.handleSearchLog(
          cachedResult,
          telegramId,
          formattedQuery,
          booksFromCache,
        );
      } catch (error) {
        this.logger.error(
          `Failed to log search: ${error instanceof Error ? error.message : String(error)}.`,
          error,
        );
      }
      return cachedResult;
    }

    if (probablyIsbn) {
      const isbn = removeSymbolsExceptNumbers(query);
      const yakabooIsbnBooks = await this.yakabooApiService.searchByIsbn(isbn);
      const isbnCacheKey = `search:${isbn}`;

      if (yakabooIsbnBooks.length > 0) {
        const title = yakabooIsbnBooks[0].title;
        const books = await callMultipleAPIs(title, this.apiCalls);
        const fuzzyBooks = fuzzyMatching(title, books as IBookInfo[]);
        const endTime = Date.now();
        this.logger.log(`Time taken: ${endTime - startTime}ms`);

        await this.saveBooks(fuzzyBooks, queryId, isbnCacheKey);
        const result = resolveAndGroupBooks(fuzzyBooks);

        // Log search with viewed books
        try {
          await this.handleSearchLog(
            result,
            telegramId,
            formattedQuery,
            fuzzyBooks,
          );
        } catch (error) {
          this.logger.error(
            `Failed to log search: ${error instanceof Error ? error.message : String(error)}.`,
            error,
          );
        }
        return result;
      }
    }

    const yakabooAuthorBooks =
      await this.yakabooApiService.searchByAuthor(formattedQuery);

    if (yakabooAuthorBooks.length > 0) {
      const highAuthorSimilarityBooks = yakabooAuthorBooks.filter((book) => {
        return (
          stringSimilarity(formattedQuery, book?.author || '') >
          YAKABOO_AUTHOR_SIMILARITY_THRESHOLD
        );
      });
      const authorsBooks = await this.getAuthorsBooks(
        highAuthorSimilarityBooks,
        formattedQuery,
      );

      // Only return early if we actually found author books (query was only an author)
      // If authorsBooks is undefined, it means the query had a title, so continue with regular search
      if (authorsBooks && authorsBooks.length > 0) {
        // Save all aggregated and deduplicated books once
        await this.saveBooks(authorsBooks, queryId, cacheKey);
        const endTime = Date.now();
        this.logger.log(`Time taken: ${endTime - startTime}ms`);
        const result = resolveAndGroupBooks(authorsBooks);

        // Log search with viewed books
        try {
          await this.handleSearchLog(
            result,
            telegramId,
            formattedQuery,
            authorsBooks,
          );
        } catch (error) {
          this.logger.error(
            `Failed to log search: ${error instanceof Error ? error.message : String(error)}.`,
            error,
          );
        }
        return result;
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
    // this.logger.log(resolveAndGroupBooks(fuzzyBooks));
    const result = resolveAndGroupBooks(fuzzyBooks);

    // Extract book links from raw books (what was saved to DB) for linking
    const uniqueBookLinks = this.getUniqueBookLinks(fuzzyBooks);

    this.logger.log(
      `Extracted ${uniqueBookLinks.length} unique book links from raw books`,
    );
    try {
      await this.handleSearchLog(
        result,
        telegramId,
        formattedQuery,
        fuzzyBooks,
      );
    } catch (error) {
      this.logger.error(
        `Failed to log search: ${error instanceof Error ? error.message : String(error)}.`,
        error,
      );
    }
    return result;
  }
}
