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

  async getLastUnsuccessfulCurrentDifferenceSearchCount(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    const lastUnsuccessfulSearch =
      await this.prisma.unsuccessfulSearch.findFirst({
        where: { userId: user.id },
        orderBy: { searchedAt: 'desc' },
      });

    // If there's no unsuccessful search, return total search count
    // (all searches happened "since" the last unsuccessful search)
    if (!lastUnsuccessfulSearch) {
      return this.prisma.searchLog.count({
        where: { userId: user.id },
      });
    }

    // Count searches that happened AFTER the last unsuccessful search
    const searchesSinceLastUnsuccessful = await this.prisma.searchLog.count({
      where: {
        userId: user.id,
        searchedAt: {
          gt: lastUnsuccessfulSearch.searchedAt,
        },
      },
    });

    return searchesSinceLastUnsuccessful;
  }

  async getLastNQueries(n: number) {
    return await this.prisma.searchLog.findMany({
      include: { query: true },
      orderBy: { searchedAt: 'desc' },
      take: n,
    });
  }

  async getTopQueries(n: number) {
    return await this.prisma.query.findMany({
      select: {
        query: true,
        _count: {
          select: {
            searchLogs: true,
          },
        },
      },
      orderBy: { searchLogs: { _count: 'desc' } },
      take: n,
    });
  }

  async getUserHistory(
    telegramId: bigint,
    page: number = 1,
    limit: number = 10,
  ) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    // Ensure page is a valid number and at least 1
    const pageNumber = Math.max(1, Number(page) || 1);
    // Ensure limit is a valid number, at least 1 and at most 100
    const pageSize = Math.min(Math.max(1, Number(limit) || 10), 100);
    const skip = (pageNumber - 1) * pageSize;

    const [data, total] = await Promise.all([
      this.prisma.searchLog.findMany({
        where: { userId: user.id },
        include: { query: true },
        orderBy: { searchedAt: 'desc' },
        skip,
        take: pageSize,
      }),
      this.prisma.searchLog.count({
        where: { userId: user.id },
      }),
    ]);

    const totalPages = Math.ceil(total / pageSize);
    const hasNextPage = pageNumber < totalPages;
    const hasPreviousPage = pageNumber > 1;

    return {
      username: user.username,
      data,
      pagination: {
        page: pageNumber,
        limit: pageSize,
        total,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      },
    };
  }
}
