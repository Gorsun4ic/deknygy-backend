import { Injectable } from '@nestjs/common';
import { SearchLogRepository } from '../../repository/user/search-log.repository';

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
    return await this.searchLogRepository.getUserSearchCount(telegramId);
  }

  async logUnsuccessfulSearch(telegramId: bigint, query: string) {
    return await this.searchLogRepository.logUnsuccessfulSearch(
      telegramId,
      query,
    );
  }

  async getUnsuccessfulSearchCount(telegramId: bigint) {
    return await this.searchLogRepository.getUnsuccessfulSearchCount(
      telegramId,
    );
  }
}
