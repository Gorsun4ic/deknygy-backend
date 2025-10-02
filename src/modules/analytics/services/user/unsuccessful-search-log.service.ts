import { Injectable } from '@nestjs/common';
import { UnsuccessfulSearchLogRepository } from '../../repository/user/unsuccessful-search-log.repository';

@Injectable()
export class UnsuccessfulSearchLogService {
  private readonly SERVICE_NAME = 'UnsuccessfulSearchLogService';
  constructor(
    private readonly unsuccessfulSearchLogRepository: UnsuccessfulSearchLogRepository,
  ) {}

  /**
   * Logs a user's search query
   *
   * @param telegramId - Telegram user ID
   * @param query - Search query text
   * @returns The created UnsuccessfulSearchLog record
   */
  async logUnsuccessfulSearch(telegramId: bigint, query: string) {
    if (!query || query.trim() === '') {
      throw new Error(`${this.SERVICE_NAME}: Query cannot be empty`);
    }

    if (!telegramId) {
      throw new Error(`${this.SERVICE_NAME}: Telegram ID is required`);
    }

    return await this.unsuccessfulSearchLogRepository.logUnsuccessfulSearch(
      telegramId,
      query,
    );
  }

  async getUserUnsuccessfulSearchLogs(telegramId: bigint) {
    if (!telegramId) {
      throw new Error(`${this.SERVICE_NAME}: Telegram ID is required`);
    }

    return await this.unsuccessfulSearchLogRepository.getUserUnsuccessfulSearchLogs(
      telegramId,
    );
  }

  async getUserLastUnsuccessfulSearchLog(telegramId: bigint) {
    if (!telegramId) {
      throw new Error(`${this.SERVICE_NAME}: Telegram ID is required`);
    }

    const lastUnsuccessfulSearch =
      await this.unsuccessfulSearchLogRepository.getLastUserUnsuccessfulSearchLog(
        telegramId,
      );

    if (!lastUnsuccessfulSearch) {
      return {
        isRecent: false,
      };
    }

    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const searchedAt = new Date(lastUnsuccessfulSearch.searchedAt);
    const isRecent = searchedAt >= twentyFourHoursAgo;

    return {
      ...lastUnsuccessfulSearch,
      isRecent,
    };
  }
}
