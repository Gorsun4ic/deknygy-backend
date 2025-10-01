import { Module, Logger } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserSessionActivityService } from './services/user/session.service';
import { UserSessionRepository } from './repository/user/session.repository';
import { SearchLogService } from './services/user/search-log.service';
import { SearchLogRepository } from './repository/user/search-log.repository';
import { AnalyticsController } from './analytics.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AnalyticsController],
  providers: [
    UserSessionActivityService,
    UserSessionRepository,
    Logger,
    SearchLogService,
    SearchLogRepository,
  ],
  exports: [
    UserSessionActivityService,
    UserSessionRepository,
    SearchLogService,
    SearchLogRepository,
  ],
})
export class AnalyticsModule {}
