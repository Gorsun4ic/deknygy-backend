import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserSessionActivityService } from './services/user/session.service';
import { SearchLogService } from './services/user/search-log.service';
import { CacheLogService } from '../analytics/services/user/cache-log.service';
import { StatsService } from './services/stats/stats.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    private readonly userSessionActivityService: UserSessionActivityService,
    private readonly searchLogService: SearchLogService,
    private readonly cacheLogService: CacheLogService,
    private readonly statsService: StatsService,
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

  @Get('last-unsuccessful-current-difference-search-count/:telegramId')
  getLastUnsuccessfulCurrentDifferenceSearchCount(
    @Param('telegramId') telegramId: string,
  ) {
    return this.searchLogService.getLastUnsuccessfulCurrentDifferenceSearchCount(
      BigInt(telegramId),
    );
  }

  @Get('cache-logs/:queryId')
  getCacheLogsByQueryId(@Param('queryId') queryId: string) {
    return this.cacheLogService.getCacheLogsByQueryId(Number(queryId));
  }

  @Get('stats')
  getTotalStats() {
    return this.statsService.getTotalStats();
  }

  @Get('stats/day/:date')
  getTotalStatsForADay(@Param('date') dateParam: string) {
    const date = new Date(dateParam);
    date.setHours(0, 0, 0, 0);
    return this.statsService.getTotalStatsForADay(date);
  }

  @Get('stats/today')
  getTotalStatsForToday() {
    return this.statsService.getTotalStatsForADay(new Date(Date.now()));
  }

  @Get('last-queries/:n')
  getLastNQueries(@Param('n') n: string) {
    return this.searchLogService.getLastNQueries(Number(n));
  }

  @Get('top-queries/:n')
  getTopQueries(@Param('n') n: string) {
    return this.searchLogService.getTopQueries(Number(n));
  }

  @Get('last-feedbacks/:n')
  getLastNFeedbacks(@Param('n') n: string) {
    return this.statsService.getLastNFeedbacks(Number(n));
  }
}
