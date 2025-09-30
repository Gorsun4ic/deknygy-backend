import { Module, Logger } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { UserSessionActivityService } from './services/user/session.service';
import { UserSessionRepository } from './repository/user/session.repository';
import { AnalyticsController } from './analytics.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AnalyticsController],
  providers: [UserSessionActivityService, UserSessionRepository, Logger],
  exports: [UserSessionActivityService, UserSessionRepository],
})
export class AnalyticsModule {}
