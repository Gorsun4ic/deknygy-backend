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
  ) {}

  async searchBook(query: string) {
    const TIMEOUT = 5000;
    const formattedQuery = formatQuery(query);
    const startTime = Date.now();
    const cacheKey = `search:${formattedQuery}`;
    const cached = await this.redisService.get(cacheKey);

    if (cached) {
      console.log('Redis cache hit');
      return JSON.parse(cached) as IBookInfo[];
    }

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
          return result;
        } catch (error) {
          this.logger.error(`Error calling ${name} API:`, error?.message);
          return [];
        }
      }),
    );
    const endTime = Date.now();
    this.logger.log(`Time taken: ${endTime - startTime}ms`);

    const allBooks = results
      .filter((result) => Array.isArray(result))
      .flat() as IBookInfo[];
    const unifiedBooks = unifyBooks(allBooks);
    await this.redisService.set(
      cacheKey,
      JSON.stringify(unifiedBooks),
      60 * 60 * 24,
    );
    return unifiedBooks;
  }
}
