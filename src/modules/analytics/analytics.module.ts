import { Module, Logger } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserSessionActivityService } from './services/user/activity.service';
import { UserAnalyticsRepository } from './repository/user/acitvity.repository';
import { AnalyticsController } from './analytics.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AnalyticsController],
  providers: [UserSessionActivityService, UserAnalyticsRepository, Logger],
  exports: [UserSessionActivityService, UserAnalyticsRepository],
})
export class AnalyticsModule {}
