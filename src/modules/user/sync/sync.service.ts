import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from '../../redis/redis.service';
import { UserSyncRepository } from './sync.repository';
import { UserRegistrationService } from '../registration/user-registration.service';
import { IUser } from '../interfaces/user.interface';

// Interface for your User object
export interface CachedUser {
  telegramId: bigint;
  username: string;
}

@Injectable()
export class UserSyncService {
  private readonly logger = new Logger(UserSyncService.name);
  private readonly CACHE_TTL = 60 * 60 * 24; // 24 hours (optional)

  constructor(
    private readonly redisService: RedisService,
    // Inject your actual DB repository here
    private readonly userRepo: UserSyncRepository,
    private readonly userRegistrationService: UserRegistrationService,
  ) {}

  /**
   * Synchronizes User state between Telegram Input, Redis, and DB.
   */
  async syncUser(telegramId: bigint, currentUsername: string): Promise<IUser> {
    this.logger.log(
      `Syncing user: ${telegramId} with username: ${currentUsername}`,
    );
    const redisKey = `user:${telegramId}`;

    // 1. Check Redis
    const cachedUser = await this.redisService.getJson<CachedUser>(redisKey);

    if (cachedUser) {
      // --- SCENARIO 2: Exists in Redis ---

      if (currentUsername && cachedUser.username !== currentUsername) {
        this.logger.log(
          `Username updated for ${telegramId}: ${cachedUser.username} -> ${currentUsername}`,
        );

        // Update DB
        await this.userRepo.updateUsername(telegramId, currentUsername);

        // Update Cache
        cachedUser.username = currentUsername;
        await this.redisService.setJson(`user:${telegramId}`, cachedUser);
      }

      // No change, return cached version
      return cachedUser;
    }

    // --- SCENARIO 1: Does NOT exist in Redis ---

    // Check Database
    const dbUser = await this.userRepo.findUserByTelegramId(telegramId);

    if (dbUser) {
      // Exists in DB -> Check for consistency and Update Redis

      // Edge Case: Logic ensures that if the user changed username while the bot was offline
      // (Redis empty, DB old), we update DB now.
      if (
        dbUser.username &&
        currentUsername &&
        dbUser.username !== currentUsername
      ) {
        await this.userRepo.updateUsername(telegramId, currentUsername);
        dbUser.username = currentUsername;
      }

      const userToCache: IUser = {
        telegramId: dbUser.telegramId,
        username: dbUser.username ?? currentUsername,
        lastActive: dbUser.lastActive,
      };

      await this.redisService.setJson(redisKey, userToCache, this.CACHE_TTL);
      return userToCache;
    } else {
      // Does not exist in DB -> Create in both
      this.logger.log(`Creating new user: ${telegramId}`);

      const response = await this.userRegistrationService.registerUser({
        telegramId,
        username: currentUsername,
      });

      const userToCache: IUser = {
        telegramId: response.user.telegramId,
        username: response.user.username ?? currentUsername,
        lastActive: response.user.lastActive,
      };

      await this.redisService.setJson(redisKey, userToCache, this.CACHE_TTL);

      return userToCache;
    }
  }
}
