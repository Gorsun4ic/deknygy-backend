import { Module, Logger } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserRegistrationService } from './registration/user-registration.service';
import { UserFeedbackService } from './feedback/feedback.service';
import { UserFeedbackRepository } from './feedback/feedback.repository';
import { UserSyncService } from './sync/sync.service';
import { UserSyncRepository } from './sync/sync.repository';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [
    UserRegistrationService,
    Logger,
    UserFeedbackService,
    UserFeedbackRepository,
    UserSyncService,
    UserSyncRepository,
  ],
  exports: [UserSyncService],
})
export class UserModule {}
