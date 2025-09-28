import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UserAnalyticsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findUserById(userId: number) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async updateUserSession(
    userId: number,
    lastActive: Date,
    sessionCount: number,
  ) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { lastActive, sessionCount },
    });
  }
}
