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
}
