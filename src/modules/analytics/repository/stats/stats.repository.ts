import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class StatsRepository {
  constructor(private readonly prisma: PrismaService) {}
  private readonly ONE_HOUR = 1 * 60 * 60 * 1000;
  private readonly ONE_DAY = 1 * 24 * 60 * 60 * 1000;

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

  async getTotalSearchesToday() {
    return this.prisma.searchLog.count({
      where: {
        searchedAt: {
          gte: new Date(Date.now() - this.ONE_DAY),
        },
      },
    });
  }

  async getTotalFeedbacksToday() {
    return this.prisma.feedback.count({
      where: {
        createdAt: {
          gte: new Date(Date.now() - this.ONE_DAY),
        },
      },
    });
  }

  async getTotalUsersRegisteredToday() {
    return this.prisma.user.count({
      where: {
        firstSeen: {
          gte: new Date(Date.now() - this.ONE_DAY),
        },
      },
    });
  }
}
