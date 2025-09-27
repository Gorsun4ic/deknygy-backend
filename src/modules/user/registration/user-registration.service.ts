import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import type { IUser } from '../interfaces/user.interface';

@Injectable()
export class UserRegistrationService {
  constructor(
    private readonly logger: Logger,
    private readonly prisma: PrismaService,
  ) {}

  async registerUser(user: IUser) {
    try {
      if (!user.telegramId || !user.username || user.username === '') {
        this.logger.error(`Invalid user data: ${JSON.stringify(user)}`);
        throw new Error(
          'Invalid user data: telegramId and username are required',
        );
      }

      this.logger.log(`Registering user: ${JSON.stringify(user)}`);

      // Check if user already exists
      const existingUser = await this.prisma.user.findUnique({
        where: { telegramId: user.telegramId },
      });

      if (existingUser) {
        this.logger.log(
          `User with telegramId ${user.telegramId} already exists`,
        );
        return {
          success: true,
          message: 'User already exists',
          user: existingUser,
        };
      }

      // Create new user
      const newUser = await this.prisma.user.create({
        data: {
          telegramId: user.telegramId,
          username: user.username,
          lastActive: new Date(),
        },
      });

      this.logger.log(`User registered successfully: ${newUser.id}`);
      return {
        success: true,
        message: 'User registered successfully',
        user: newUser,
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      this.logger.error(`Failed to register user: ${errorMessage}`, error);
      throw error;
    }
  }
}
