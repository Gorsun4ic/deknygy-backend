import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class SearchLogRepository {
  constructor(private readonly prisma: PrismaService) {}

  async logSearch(telegramId: bigint, query: string) {
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

    return this.prisma.searchLog.create({
      data: {
        user: { connect: { id: user.id } },
        query: { connect: { id: existingQuery.id } },
      },
    });
  }

  async getUserSearchLogs(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    return this.prisma.searchLog.findMany({
      where: { userId: user.id },
      include: { query: true },
      orderBy: { searchedAt: 'desc' },
    });
  }

  async getUserSearchCount(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    return this.prisma.searchLog.count({ where: { userId: user.id } });
  }

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

  async getUnsuccessfulSearchCount(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    return this.prisma.unsuccessfulSearch.count({ where: { userId: user.id } });
  }
}
