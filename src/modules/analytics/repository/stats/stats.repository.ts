import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class StatsRepository {
  constructor(private readonly prisma: PrismaService) {}
  private readonly ONE_HOUR = 1 * 60 * 60 * 1000;
  private readonly ONE_DAY = 1 * 24 * 60 * 60 * 1000;
  private readonly ONE_MONTH = 30 * 24 * 60 * 60 * 1000;
  private readonly TODAY = new Date(Date.now() - this.ONE_DAY);

  async getTotalUsers() {
    return this.prisma.user.count();
  }

  async getTotalUsersWithMultipleSessions() {
    return this.prisma.user.count({
      where: {
        lastActive: {
          gt: new Date(Date.now() - this.ONE_DAY),
        },
      },
    });
  }

  async getTotalUsersWithOnlyOneRequest() {
    // Group search logs by userId and count them
    const userSearchCounts = await this.prisma.searchLog.groupBy({
      by: ['userId'],
      _count: {
        id: true,
      },
    });

    // Count users who have more than 1 search log entry
    return userSearchCounts.filter((user) => user._count.id === 1).length;
  }

  async getTotalUsersWithNoRequests() {
    return this.prisma.user.count({
      where: {
        searchLogs: {
          none: {},
        },
      },
    });
  }

  async getTotalUsersWithMultipleRequests() {
    // Group search logs by userId and count them
    const userSearchCounts = await this.prisma.searchLog.groupBy({
      by: ['userId'],
      _count: {
        id: true,
      },
    });

    // Count users who have more than 1 search log entry
    return userSearchCounts.filter((user) => user._count.id > 1).length;
  }

  async getTotalSearches() {
    return this.prisma.searchLog.count();
  }

  async getTotalFeedbacks() {
    return this.prisma.feedback.count();
  }

  async getUserStats(userId: number) {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async getTotalSearchesForADay(date: Date) {
    // Set to start of the day (00:00:00)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    // Set to start of the next day (00:00:00)
    const startOfNextDay = new Date(startOfDay);
    startOfNextDay.setDate(startOfNextDay.getDate() + 1);

    return this.prisma.searchLog.count({
      where: {
        searchedAt: {
          gte: startOfDay,
          lt: startOfNextDay,
        },
      },
    });
  }

  async getTotalFeedbacksForADay(date: Date) {
    // Set to start of the day (00:00:00)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    // Set to start of the next day (00:00:00)
    const startOfNextDay = new Date(startOfDay);
    startOfNextDay.setDate(startOfNextDay.getDate() + 1);

    return this.prisma.feedback.count({
      where: {
        createdAt: {
          gte: startOfDay,
          lt: startOfNextDay,
        },
      },
    });
  }

  async getTotalUsersRegisteredForADayCount(date: Date) {
    // Set to start of the day (00:00:00)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    // Set to start of the next day (00:00:00)
    const startOfNextDay = new Date(startOfDay);
    startOfNextDay.setDate(startOfNextDay.getDate() + 1);

    return this.prisma.user.count({
      where: {
        firstSeen: {
          gte: startOfDay,
          lt: startOfNextDay,
        },
      },
    });
  }

  async getUsersRegisteredForADay(date: Date) {
    // Set to start of the day (00:00:00)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    // Set to start of the next day (00:00:00)
    const startOfNextDay = new Date(startOfDay);
    startOfNextDay.setDate(startOfNextDay.getDate() + 1);

    return await this.prisma.user.findMany({
      where: {
        firstSeen: {
          gte: startOfDay,
          lt: startOfNextDay,
        },
      },
    });
  }

  async getLastNFeedbacks(n: number) {
    return this.prisma.feedback.findMany({
      orderBy: { createdAt: 'desc' },
      take: n,
    });
  }

  async getDailyNewUsersWhoMadeAQuery(date: Date) {
    const users = await this.getUsersRegisteredForADay(date);
    if (users.length === 0) {
      return 0;
    }

    // Get distinct user IDs who made at least one search
    const userSearchCounts = await this.prisma.searchLog.groupBy({
      by: ['userId'],
      where: {
        userId: {
          in: users.map((user) => user.id),
        },
      },
    });

    // Return the count of distinct users who made searches
    return userSearchCounts.length;
  }

  async getStatsForADay(date: Date) {
    const newUsers = await this.getTotalUsersRegisteredForADayCount(date);
    const searches = await this.getTotalSearchesForADay(date);
    const feedbacks = await this.getTotalFeedbacksForADay(date);
    const newUsersWhoMadeAQuery =
      await this.getDailyNewUsersWhoMadeAQuery(date);
    return {
      newUsers,
      searches,
      feedbacks,
      newUsersWhoMadeAQuery,
    };
  }

  async getTopUsersBySearches(n: number) {
    return this.prisma.user.findMany({
      orderBy: { searchLogs: { _count: 'desc' } },
      select: {
        id: true,
        telegramId: true,
        username: true,
        _count: {
          select: {
            searchLogs: true,
          },
        },
      },
      take: n,
    });
  }
}
