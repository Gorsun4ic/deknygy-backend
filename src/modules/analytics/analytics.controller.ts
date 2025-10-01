import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserSessionActivityService } from './services/user/session.service';
import { SearchLogService } from './services/user/search-log.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    private readonly userSessionActivityService: UserSessionActivityService,
    private readonly searchLogService: SearchLogService,
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
  getUserSearchLogs(@Param('telegramId') telegramId: bigint) {
    return this.searchLogService.getUserSearchLogs(telegramId);
  }
}
