import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserSessionActivityService } from './services/user/session.service';
import { SearchLogService } from './services/user/search-log.service';
import { CacheLogService } from '../analytics/services/user/cache-log.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    private readonly userSessionActivityService: UserSessionActivityService,
    private readonly searchLogService: SearchLogService,
    private readonly cacheLogService: CacheLogService,
  ) {}

  @Post('track-session')
  trackUserSession(@Body('userId') userId: number) {
    return this.userSessionActivityService.trackUserSession(userId);
  }

  @Post('log-search')
  logUserSearch(
    @Body('telegramId') telegramId: bigint,
    @Body('query') query: string,
  ) {
    return this.searchLogService.logSearch(telegramId, query);
  }

  @Get('search-logs/:telegramId')
  getUserSearchLogs(@Param('telegramId') telegramId: string) {
    return this.searchLogService.getUserSearchLogs(BigInt(telegramId));
  }

  @Get('search-count/:telegramId')
  getUserSearchCount(@Param('telegramId') telegramId: string) {
    return this.searchLogService.getUserSearchCount(BigInt(telegramId));
  }

  @Post('log-unsuccessful-search')
  logUnsuccessfulSearch(
    @Body('telegramId') telegramId: bigint,
    @Body('query') query: string,
  ) {
    return this.searchLogService.logUnsuccessfulSearch(telegramId, query);
  }

  @Get('unsuccessful-search-count/:telegramId')
  getUnsuccessfulSearchCount(@Param('telegramId') telegramId: string) {
    return this.searchLogService.getUnsuccessfulSearchCount(BigInt(telegramId));
  }

  @Get('cache-logs/:queryId')
  getCacheLogsByQueryId(@Param('queryId') queryId: string) {
    return this.cacheLogService.getCacheLogsByQueryId(Number(queryId));
  }
}
