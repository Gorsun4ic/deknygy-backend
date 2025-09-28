import { Controller, Post, Body } from '@nestjs/common';
import { UserSessionActivityService } from './services/user/activity.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(
    private readonly userSessionActivityService: UserSessionActivityService,
  ) {}

  @Post('track-session')
  trackUserSession(@Body('userId') userId: number) {
    return this.userSessionActivityService.trackUserSession(userId);
  }
}
