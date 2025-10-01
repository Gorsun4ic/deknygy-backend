import { Injectable, Logger } from '@nestjs/common';
import { UserSessionRepository } from '../../repository/user/session.repository';

@Injectable()
export class UserSessionActivityService {
  private readonly SERVICE_NAME = 'TrackUserSessionService';
  private readonly SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes

  constructor(
    private readonly logger: Logger,
    private readonly userSessionRepository: UserSessionRepository,
  ) {}

  async trackUserSession(userId: number) {
    if (!userId) {
      this.logger.error(
        `${this.SERVICE_NAME}: User ID is required to track session`,
      );
      throw new Error(`${this.SERVICE_NAME}: User ID is required`);
    }

    try {
      const now = new Date();
      const user =
        await this.userSessionRepository.findUserByTelegramId(userId);
      if (!user) {
        this.logger.error(`${this.SERVICE_NAME}: User not found: ${userId}`);
        throw new Error(`${this.SERVICE_NAME}: User not found`);
      }
      const isNewSession =
        !user.lastActive ||
        now.getTime() - user.lastActive.getTime() > this.SESSION_TIMEOUT;
      await this.userSessionRepository.updateUserSession(
        userId,
        now,
        isNewSession ? user.sessionCount + 1 : user.sessionCount,
      );
      this.logger.log(
        `${this.SERVICE_NAME}: Successfully updated session for user: ${userId}`,
      );
      return {
        message: `${this.SERVICE_NAME}: User session tracked successfully`,
      };
    } catch (error: any) {
      const errorMessage =
        error && typeof error === 'object' && 'message' in error
          ? (error as { message: string }).message
          : String(error);
      this.logger.error(`Failed to track user session: ${errorMessage}`);
      throw new Error(`${this.SERVICE_NAME} Failed to track user session`);
    }
  }
}
