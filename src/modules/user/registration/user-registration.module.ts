import { Module, Logger } from '@nestjs/common';
import { UserRegistrationService } from './user-registration.service';
import { UserRegistrationController } from './user-registration.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserRegistrationService, Logger],
  controllers: [UserRegistrationController],
})
export class UserRegistrationModule {}
