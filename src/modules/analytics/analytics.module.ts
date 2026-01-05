import { Module, Logger } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserSessionActivityService } from './services/user/session.service';
import { UserSessionRepository } from './repository/user/session.repository';
import { SearchLogService } from './services/user/search-log.service';
import { SearchLogRepository } from './repository/user/search-log.repository';
import { AnalyticsController } from './analytics.controller';
import { CacheLogRepository } from './repository/user/cache-log.repository';
import { CacheLogService } from './services/user/cache-log.service';
import { StatsService } from './services/stats/stats.service';
import { StatsRepository } from './repository/stats/stats.repository';
import { UserFeedbackRepository } from '../user/feedback/feedback.repository';
import { UserFeedbackService } from '../user/feedback/feedback.service';

@Module({
  imports: [PrismaModule],
  controllers: [AnalyticsController],
  providers: [
    UserSessionActivityService,
    UserSessionRepository,
    Logger,
    SearchLogService,
    SearchLogRepository,
    CacheLogRepository,
    CacheLogService,
    StatsService,
    StatsRepository,
    UserFeedbackRepository,
    UserFeedbackService,
  ],
  exports: [
    UserSessionActivityService,
    UserSessionRepository,
    SearchLogService,
    SearchLogRepository,
    CacheLogRepository,
    CacheLogService,
    StatsService,
    StatsRepository,
  ],
})
export class AnalyticsModule {}
