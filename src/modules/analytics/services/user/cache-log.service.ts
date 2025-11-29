import { Injectable } from '@nestjs/common';
import { CacheLogRepository } from '../../repository/user/cache-log.repository';

@Injectable()
export class CacheLogService {
  constructor(private readonly cacheLogRepository: CacheLogRepository) {}

  async getCacheLogsByQueryId(queryId: number) {
    return await this.cacheLogRepository.getCacheLogsByQueryId(queryId);
  }

  async logCacheLog(queryId: number, bookId: number) {
    return await this.cacheLogRepository.logBookResultForCache(bookId, queryId);
  }
}
