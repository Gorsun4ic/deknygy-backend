import { Injectable } from '@nestjs/common';
import { SearchLogRepository } from '../../repository/user/search-log.repository';
import { upFirstLetter } from '../../../common/utils/upFirstLetter';

@Injectable()
export class SearchLogService {
  private readonly SERVICE_NAME = 'SearchLogService';
  constructor(private readonly searchLogRepository: SearchLogRepository) {}

  /**
   * Logs a user's search query
   *
   * @param telegramId - Telegram user ID
   * @param query - Search query text
   * @returns The created SearchLog record
   */
  async logSearch(telegramId: bigint, query: string) {
    return await this.searchLogRepository.logSearch(telegramId, query);
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
}
