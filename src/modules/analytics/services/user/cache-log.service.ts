import { Injectable, Logger } from '@nestjs/common';
import { CacheLogRepository } from '../../repository/user/cache-log.repository';

@Injectable()
export class CacheLogService {
  constructor(
    private readonly cacheLogRepository: CacheLogRepository,
    private readonly logger: Logger,
  ) {}

  async getCacheLogsByQueryId(queryId: number) {
    return await this.cacheLogRepository.getCacheLogsByQueryId(queryId);
  }

  async logCacheLog(queryId: number, bookId: number, maxRetries = 3) {
    let attempts = 0;
    while (attempts < maxRetries) {
      try {
        // This is the call to your failing repository method
        await this.cacheLogRepository.logBookResultForCache(bookId, queryId);
        return; // Success! Exit the function.
      } catch (error) {
        // Check for the specific unique constraint failure on the composite key
        if (
          (error as Error).message.includes(
            'Unique constraint failed on the fields: (`bookId`,`queryId`)',
          ) &&
          attempts < maxRetries - 1
        ) {
          this.logger.warn(
            `Race condition detected for book ${bookId}, query ${queryId}. Retrying... (Attempt ${attempts + 1})`,
          );

          // Wait briefly to allow the other transaction to commit
          await new Promise((resolve) => setTimeout(resolve, 50));
          attempts++;
        } else {
          // Re-throw if it's a different error or max retries reached
          this.logger.error(
            `Failed to log cache entry after ${attempts + 1} attempts for book ${bookId} and query ${queryId}`,
            error,
          );
          throw error;
        }
      }
    }
  }
}
