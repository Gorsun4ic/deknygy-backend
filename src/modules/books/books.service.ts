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
import { unifyBooks } from './lib/unuiqifyBooks';
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

  async searchBook(telegramId: bigint, query: string) {
    const TIMEOUT = 5000;
    const formattedQuery = formatQuery(query);
    const startTime = Date.now();
    const cacheKey = `search:${formattedQuery}`;
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

    // If cached - return cached result
    // if (cached) {
    //   this.logger.log('Redis cache hit');
    //   return JSON.parse(cached) as IBookInfo[];
    // }

    const yakabooAuthorBooks =
      await this.yakabooApiService.searchByAuthor(formattedQuery);

    if (yakabooAuthorBooks.length > 0) {
      const authorsArray = yakabooAuthorBooks
        .map((book) => book.author)
        .filter((author) => typeof author === 'string');

      const { title } = getTitleWithoutAuthor(formattedQuery, authorsArray);

      if (title.length === 0) console.log('That was the author');
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

    // Search all APIs with error handling
    const apiCalls: ApiCall[] = [
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
    this.logger.log(
      `[CACHE MISS] Key: ${cacheKey}. Starting ${apiCalls.length} API calls.`,
    );

    const results = await callMultipleAPIs(formattedQuery, apiCalls, TIMEOUT);
    const endTime = Date.now();
    this.logger.log(`Time taken: ${endTime - startTime}ms`);

    const allBooks = results.filter((result) => Array.isArray(result)).flat();
    const fuzzyBooks = fuzzyMatching(formattedQuery, allBooks as IBookInfo[]);
    const unifiedBooks = unifyBooks(fuzzyBooks);
    await this.booksRepository.saveBooks(unifiedBooks, queryId);
    const cacheTTL = 60 * 60 * 24;
    const cacheValue = resolveAndGroupBooks(unifiedBooks);
    await this.redisService.set(cacheKey, JSON.stringify(cacheValue), cacheTTL);
    return resolveAndGroupBooks(unifiedBooks);
  }
}
