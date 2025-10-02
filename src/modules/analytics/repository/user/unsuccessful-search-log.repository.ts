import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class UnsuccessfulSearchLogRepository {
  constructor(private readonly prisma: PrismaService) {}

  async logUnsuccessfulSearch(telegramId: bigint, query: string) {
    const [user, existingQuery] = await Promise.all([
      this.prisma.user.findUnique({ where: { telegramId } }),
      this.prisma.query.findUnique({ where: { query } }),
    ]);

    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );
    if (!existingQuery)
      throw new NotFoundException(`Query "${query}" not found`);

    return this.prisma.unsuccessfulSearch.create({
      data: {
        user: { connect: { id: user.id } },
        query: { connect: { id: existingQuery.id } },
      },
    });
  }

  async getUserUnsuccessfulSearchLogs(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    return this.prisma.unsuccessfulSearch.findMany({
      where: { userId: user.id },
      include: { query: true },
      orderBy: { searchedAt: 'desc' },
    });
  }

  async getLastUserUnsuccessfulSearchLog(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    return this.prisma.unsuccessfulSearch.findFirst({
      where: { userId: user.id },
      include: { query: true },
      orderBy: { searchedAt: 'desc' },
    });
  }
}
