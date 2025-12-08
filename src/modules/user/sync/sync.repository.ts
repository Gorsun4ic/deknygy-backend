import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserSyncRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserByTelegramId(telegramId: bigint) {
    return this.prisma.user.findUnique({ where: { telegramId } });
  }

  async updateUsername(telegramId: bigint, username: string) {
    return this.prisma.user.upsert({
      where: { telegramId },
      update: { username },
      create: { telegramId, username },
    });
  }
}
