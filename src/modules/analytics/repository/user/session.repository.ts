import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class UserSessionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserById(userId: number) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async findUserByTelegramId(telegramId: number) {
    return this.prisma.user.findUnique({ where: { telegramId: telegramId } });
  }

  async updateUserSession(
    userTelegramId: number,
    lastActive: Date,
    sessionCount: number,
  ) {
    return this.prisma.user.update({
      where: { telegramId: userTelegramId },
      data: { lastActive, sessionCount },
    });
  }
}
