import { Injectable } from '@nestjs/common';
import { SearchLogRepository } from '../../repository/user/search-log.repository';
import { upFirstLetter } from '../../../common/utils/upFirstLetter';
import { bookPopulateDto } from '../../dto/book-popualte.dto';

@Injectable()
export class SearchLogService {
  private readonly SERVICE_NAME = 'SearchLogService';
  constructor(private readonly searchLogRepository: SearchLogRepository) {}

  /**
   * Logs a user's search query and the books they viewed
   *
   * @param telegramId - Telegram user ID
   * @param query - Search query text
   * @param bookLinks - Array of book links that were shown to the user
   * @returns The created SearchLog record
   */
  async logSearch(telegramId: bigint, query: string, bookLinks: string[] = []) {
    return await this.searchLogRepository.logSearch(
      telegramId,
      query,
      bookLinks,
    );
  }

  /**
   * Links ViewedBook records to Book records after books are saved
   * @param searchLogId - Search log ID
   * @param bookLinks - Array of book links that were saved
   */
  async linkViewedBooksToSavedBooks(searchLogId: number, bookLinks: string[]) {
    await this.searchLogRepository.linkViewedBooksToSavedBooks(
      searchLogId,
      bookLinks,
    );
  }

  async getUserSearchLogs(telegramId: bigint) {
    return await this.searchLogRepository.getUserSearchLogs(telegramId);
  }

  async getUserSearchCount(telegramId: bigint) {
    return {
      count: await this.searchLogRepository.getUserSearchCount(telegramId),
    };
  }

  async logUnsuccessfulSearch(telegramId: bigint, query: string) {
    return await this.searchLogRepository.logUnsuccessfulSearch(
      telegramId,
      query,
    );
  }

  async getUnsuccessfulSearchCount(telegramId: bigint) {
    return {
      count:
        await this.searchLogRepository.getUnsuccessfulSearchCount(telegramId),
    };
  }

  async getLastUnsuccessfulCurrentDifferenceSearchCount(telegramId: bigint) {
    return {
      count:
        await this.searchLogRepository.getLastUnsuccessfulCurrentDifferenceSearchCount(
          telegramId,
        ),
    };
  }

  async getLastNQueries(n: number) {
    return await this.searchLogRepository.getLastNQueries(n);
  }

  async getTopQueries(n: number) {
    const topQueries = await this.searchLogRepository.getTopQueries(n);
    return topQueries.map((query) => {
      return {
        query: upFirstLetter(query.query),
        count: query._count.searchLogs,
      };
    });
  }

  async getUserHistory(
    telegramId: bigint,
    page: number = 1,
    limit: number = 10,
  ) {
    const userHistory = await this.searchLogRepository.getUserHistory(
      telegramId,
      page,
      limit,
    );
    const formatedUserHistory = userHistory.data.map((searchLog) => {
      return {
        ...searchLog,
        query: upFirstLetter(searchLog.query.query),
      };
    });
    return {
      ...userHistory,
      data: formatedUserHistory,
    };
  }

  /**
   * Gets all search log IDs for a user
   * @param telegramId - Telegram user ID
   * @returns Array of search log IDs with basic info
   */
  async getUserSearchLogIds(telegramId: bigint) {
    const searchLogs =
      await this.searchLogRepository.getUserSearchLogIds(telegramId);
    return searchLogs.map((log) => ({
      id: log.id,
      query: upFirstLetter(log.query.query),
      searchedAt: log.searchedAt,
    }));
  }

  /**
   * Gets all viewed books for a specific search log
   * @param searchLogId - Search log ID
   * @returns Search log with viewed books
   */
  async getViewedBooksBySearchLogId(searchLogId: number) {
    const searchLog =
      await this.searchLogRepository.getViewedBooksBySearchLogId(searchLogId);
    console.log(bookPopulateDto(searchLog));
    return bookPopulateDto(searchLog);
  }
}
