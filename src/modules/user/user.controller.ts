import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserRegistrationService } from './registration/user-registration.service';
import type { IUser } from './interfaces/user.interface';

@Controller('user')
export class UserController {
  constructor(
    private readonly userRegistrationService: UserRegistrationService,
  ) {}

  @Post('register')
  async registerUser(@Body() user: IUser): Promise<any> {
    try {
      const result = await this.userRegistrationService.registerUser(user);
      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to register user';
      throw new HttpException(
        {
          success: false,
          message: errorMessage,
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
