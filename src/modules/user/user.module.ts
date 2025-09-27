import { Module, Logger } from '@nestjs/common';
import { UserRegistrationModule } from './registration/user-registration.module';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { UserRegistrationService } from './registration/user-registration.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserRegistrationService, Logger],
})
export class UserModule {}
