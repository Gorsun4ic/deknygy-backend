import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserSessionActivityService } from './services/user/session.service';
import { SearchLogService } from './services/user/search-log.service';
import { UnsuccessfulSearchLogService } from './services/user/unsuccessful-search-log.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    private readonly userSessionActivityService: UserSessionActivityService,
    private readonly unsuccessfulSearchLogService: UnsuccessfulSearchLogService,
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
  getUserSearchLogs(@Param('telegramId') telegramId: string) {
    return this.searchLogService.getUserSearchLogs(BigInt(telegramId));
  }

  @Post('log-unsuccessful-search')
  logUserUnsuccessfulSearch(
    @Body('telegramId') telegramId: bigint,
    @Body('query') query: string,
  ) {
    return this.unsuccessfulSearchLogService.logUnsuccessfulSearch(
      telegramId,
      query,
    );
  }
  @Get('unsuccessful-search-logs/:telegramId')
  getUserUnsuccessfulSearchLogs(@Param('telegramId') telegramId: string) {
    return this.unsuccessfulSearchLogService.getUserUnsuccessfulSearchLogs(
      BigInt(telegramId),
    );
  }
}
