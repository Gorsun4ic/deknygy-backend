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
import { fuzzyBooks } from './lib/fuzzyMatch';
import { stringSimilarity } from 'string-similarity-js';
import { groupBooksByTitle } from './lib/groupBooksByTitle';

@Injectable()
export class BooksService {
  private readonly TIMEOUT = 5000;
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

  private isAuthorMatch(query: string, author: string): boolean {
    const similarity = stringSimilarity(author, query);
    const wordCount = query.split(/\s+/).length;

    if (wordCount === 1) return similarity >= 0.4;
    if (wordCount === 2) return similarity >= 0.55;
    return similarity >= 0.75; // 3+ words → more strict
  }

  private withTimeout<T>(
    promise: Promise<T>,
    ms: number,
    name: string,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error(`${name} API timed out after ${ms}ms`));
      }, ms);

      promise
        .then((res) => {
          clearTimeout(timer);
          resolve(res);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  }

  async searchBook(telegramId: bigint, query: string) {
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
        error?.message,
      );
    }

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
    if (cached) {
      this.logger.log('Redis cache hit');
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
    this.logger.log(
      `[CACHE MISS] Key: ${cacheKey}. Starting ${apiCalls.length} API calls.`,
    );

    const results = await Promise.all(
      apiCalls.map(async ({ name, service }) => {
        const timeoutPromise = new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error(`${name} API timed out`)),
            this.TIMEOUT,
          ),
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
    await this.booksRepository.saveBooks(unifiedBooks, queryId);
    await this.redisService.set(
      cacheKey,
      JSON.stringify(unifiedBooks),
      60 * 60 * 24,
    );
    return unifiedBooks;
  }

  async searchBooksTitles(telegramId: bigint, query: string) {
    const formattedQuery = formatQuery(query);
    const startTime = Date.now();
    const queryId =
      await this.booksRepository.getOrCreateQueryId(formattedQuery);
    // const cacheKey = `search:${formattedQuery}`;
    // this.logger.log(`[SEARCH START] Key: ${cacheKey}`);

    // let cached: string | null = null;

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

    // // 3. CHECK CACHED RESULT
    // if (cached) {
    //   this.logger.log('Redis cache hit');
    //   return JSON.parse(cached) as IBookInfo[];
    // }

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
    // this.logger.log(
    //   `[CACHE MISS] Key: ${cacheKey}. Starting ${apiCalls.length} API calls.`,
    // );
    const yakabooAuthorBooks =
      await this.yakabooApiService.searchByAuthor(formattedQuery);

    let matchedAuthor: string | null = null;
    let authorBooks: IBookInfo[] = [];

    for (const book of yakabooAuthorBooks) {
      if (!book.author) continue;

      if (this.isAuthorMatch(formattedQuery, book.author)) {
        matchedAuthor = book.author;
        authorBooks = yakabooAuthorBooks.filter(
          (b) => b.author === matchedAuthor,
        );
        this.logger.log(
          `[AUTHOR DETECTED] ${matchedAuthor} with ${authorBooks.length} books`,
        );
        break; // stop at first strong author match
      }
    }

    const results = await Promise.all(
      apiCalls.map(async ({ name, service }) => {
        try {
          if (matchedAuthor && authorBooks.length > 0) {
            const storeResults = await Promise.all(
              authorBooks.slice(0, 10).map(async (book) => {
                try {
                  const res = await this.withTimeout(
                    service.search(book.title),
                    3000,
                    name,
                  );
                  const filteredMatches = fuzzyBooks(book.title, res);
                  return res.filter((r: any) =>
                    filteredMatches.some((m) => m.title === r.title),
                  );
                } catch {
                  return [];
                }
              }),
            );
            return storeResults.flat();
          } else {
            const res = await this.withTimeout(
              service.search(formattedQuery),
              3000,
              name,
            );
            return fuzzyBooks(formattedQuery, res); // fuzzy match if no author match
          }
        } catch (error) {
          this.logger.error(`Error in ${name}:`, error?.message);
          return [];
        }
      }),
    );

    const endTime = Date.now();
    this.logger.log(`Time taken: ${endTime - startTime}ms`);

    const allBooks = results.flat() as IBookInfo[];
    const unifiedBooks = unifyBooks(allBooks).flat();

    const filtered = matchedAuthor
      ? unifiedBooks.filter((m) => m.author === matchedAuthor)
      : (fuzzyBooks(formattedQuery, unifiedBooks)
          .map((match) =>
            unifiedBooks.find((book) => book.title === match.title),
          )
          .filter(Boolean) as IBookInfo[]);

    const groupedBooks = groupBooksByTitle(filtered);

    return groupedBooks;
  }
}
