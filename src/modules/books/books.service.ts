import { Injectable, Logger } from '@nestjs/common';
import { YakabooApiService } from '../search-providers/yakaboo-api/yakaboo-api.service';
import { NashformatApiService } from '../search-providers/nashformat/nashformat-api.service';
import { AprioriApiService } from '../search-providers/apriori/apriori-api.service';
import { VivatApiService } from '../search-providers/vivat/vivat-api.service';
import { StaryLevApiService } from '../search-providers/stary-lev/stary-lev-api.service';
import { MegogoApiService } from '../search-providers/megogo/megogo-api.service';
import { LaboratoryService } from '../search-providers/laboratory/laboratory.service';
import { formatQuery } from '../common/utils/formatQuery';
import { KSDService } from '../search-providers/ksd/ksd.service';
import { ReadEatService } from '../search-providers/readeat/readeat.service';
import { BookYeApiService } from '../search-providers/book-ye/book-ye.api.service';
import { KnygolandApiService } from '../search-providers/knygoland/knygoland.api.service';
import { RidnamovaApiService } from '../search-providers/ridnamova/ridnamova.api.service';
import { ArthussApiService } from '../search-providers/arthuss/arthuss.api.service';
import { unifyBooks } from './lib/unuiqifyBooks';
import { IBookInfo } from '../common/interfaces/api/book.info';
import { RedisService } from '../redis/redis.service';
import { BooksRepository } from './books.repository';
import { SearchLogService } from '../analytics/services/user/search-log.service';
import { resolveAndGroupBooks } from './lib/merge/resolveAndGroupBooks';
import { fuzzyMatching } from './lib/fuzzy-filtering/fuzzyMatching';

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

    // try {
    //   cached = await this.redisService.get(cacheKey);
    // } catch (error) {
    //   this.logger.error(
    //     `Failed to retrieve from Redis. Proceeding without cache.`,
    //     error?.message,
    //   );
    // }

    // 2. ATTEMPT TO LOG SEARCH (Must not crash the entire function)
    try {
      // This is the line that was crashing the function:
      await this.searchLogService.logSearch(telegramId, formattedQuery);
    } catch (error) {
      // Log the error but DO NOT return. Let the search continue.
      this.logger.error(`Failed to log search: ${error?.message}.`, error);
      // We know the query is "not found", so we proceed.
    }

    // 3. CHECK CACHED RESULT

    // Search all APIs with error handling
    const apiCalls = [
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

    const results = await Promise.all(
      apiCalls.map(async ({ name, service }) => {
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(() => reject(new Error(`${name} API timed out`)), TIMEOUT),
        );
        try {
          const result = await Promise.race([
            service.search(formattedQuery),
            timeoutPromise,
          ]);
          console.log('Result', result);
          return result;
        } catch (error) {
          this.logger.error(`Error calling ${name} API:`, error?.message);
          return [];
        }
      }),
    );
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
