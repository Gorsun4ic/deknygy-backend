import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { SearchLogRepository } from '../user/search-log.repository';
import { UserFeedbackRepository } from '../../../user/feedback/feedback.repository';

@Injectable()
export class StatsRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly feedbackRepository: UserFeedbackRepository,
    private readonly searchLogRepository: SearchLogRepository,
  ) {}
  private readonly ONE_HOUR = 1 * 60 * 60 * 1000;
  private readonly ONE_DAY = 1 * 24 * 60 * 60 * 1000;
  private readonly ONE_MONTH = 30 * 24 * 60 * 60 * 1000;
  private readonly TODAY = new Date(Date.now() - this.ONE_DAY);

  private getPreviousHourWindow() {
    const end = new Date();
    end.setMinutes(0, 0, 0); // Example: 17:00:00

    const start = new Date(end);
    start.setHours(start.getHours() - 1); // Example: 16:00:00

    return { start, end };
  }

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

  async getTotalQueriesFromUniqueUsers() {
    const uniqueUsers = await this.prisma.searchLog.groupBy({
      by: ['userId'],
    });

    // 2. The count of the array is the count of unique users.
    return uniqueUsers.length;
  }

  async getTotalQueriesFromUniqueUsersForADay(date: Date) {
    // 1. Force the start of the day (00:00:00)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    // 2. Calculate the start of the NEXT day
    const startOfNextDay = new Date(startOfDay);
    startOfNextDay.setDate(startOfNextDay.getDate() + 1);

    const uniqueUsers = await this.prisma.searchLog.groupBy({
      by: ['userId'],
      where: {
        searchedAt: {
          gte: startOfDay, // From 00:00:00
          lt: startOfNextDay, // To 00:00:00 tomorrow (exclusive)
        },
      },
    });
    return uniqueUsers.length;
  }
  async getTotalQueriesFromUniqueUsersForTheLastHour() {
    const { start, end } = this.getPreviousHourWindow();

    const uniqueUsers = await this.prisma.searchLog.groupBy({
      by: ['userId'],
      where: {
        searchedAt: {
          gte: start,
          lt: end,
        },
      },
    });
    return uniqueUsers.length;
  }

  async getTotalQueriesFromUniqueUsersForAMonth(
    startOfMonth: Date,
    endOfMonth: Date,
  ) {
    const uniqueUsers = await this.prisma.searchLog.groupBy({
      by: ['userId'],
      where: {
        searchedAt: {
          gte: startOfMonth,
          lt: endOfMonth,
        },
      },
    });
    return uniqueUsers.length;
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

  async getUserStats(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({
      where: { telegramId },
    });

    if (!user) {
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );
    }

    const feedbacksCount =
      await this.feedbackRepository.getUserFeedbacksCount(telegramId);
    const searchesCount =
      await this.searchLogRepository.getUserSearchCount(telegramId);

    return {
      ...user,
      feedbacks: feedbacksCount,
      searches: searchesCount,
    };
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
    const lastNFeedbacks = await this.prisma.feedback.findMany({
      orderBy: { createdAt: 'desc' },
      take: n,
    });
    const users = await this.prisma.user.findMany({
      where: {
        id: {
          in: lastNFeedbacks.map((feedback) => feedback.userId),
        },
      },
    });
    return lastNFeedbacks.map((feedback) => {
      return {
        ...feedback,
        telegramId: users.find((user) => user.id === feedback.userId)
          ?.telegramId,
        username: users.find((user) => user.id === feedback.userId)?.username,
      };
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
    const totalQueriesFromUniqueUsers =
      await this.getTotalQueriesFromUniqueUsersForADay(date);
    const newUsersWhoMadeAQuery =
      await this.getDailyNewUsersWhoMadeAQuery(date);
    return {
      newUsers,
      searches,
      feedbacks,
      newUsersWhoMadeAQuery,
      totalQueriesFromUniqueUsers,
    };
  }

  async getTotalSearchesForTheLastHour() {
    const { start, end } = this.getPreviousHourWindow();

    return this.prisma.searchLog.count({
      where: {
        searchedAt: {
          gte: start,
          lt: end,
        },
      },
    });
  }

  async getTotalFeedbacksForTheLastHour() {
    const { start, end } = this.getPreviousHourWindow();
    return this.prisma.feedback.count({
      where: {
        createdAt: {
          gte: start,
          lt: end,
        },
      },
    });
  }
  async getTotalUsersRegisteredForTheLastHour() {
    const { start, end } = this.getPreviousHourWindow();
    return this.prisma.user.count({
      where: {
        firstSeen: {
          gte: start,
          lt: end,
        },
      },
    });
  }
  async getStatsForTheLastHour() {
    const searches = await this.getTotalSearchesForTheLastHour();
    const feedbacks = await this.getTotalFeedbacksForTheLastHour();
    const newUsers = await this.getTotalUsersRegisteredForTheLastHour();
    const newUsersWhoMadeAQuery =
      await this.getTotalQueriesFromUniqueUsersForTheLastHour();
    const totalQueriesFromUniqueUsers =
      await this.getTotalQueriesFromUniqueUsersForTheLastHour();
    return {
      searches,
      feedbacks,
      newUsers,
      newUsersWhoMadeAQuery,
      totalQueriesFromUniqueUsers,
    };
  }

  async getTotalSearchesForAMonth(startOfMonth: Date, endOfMonth: Date) {
    return this.prisma.searchLog.count({
      where: {
        searchedAt: {
          gte: startOfMonth,
          lt: endOfMonth,
        },
      },
    });
  }
  async getTotalFeedbacksForAMonth(startOfMonth: Date, endOfMonth: Date) {
    return this.prisma.feedback.count({
      where: {
        createdAt: {
          gte: startOfMonth,
          lt: endOfMonth,
        },
      },
    });
  }
  async getTotalUsersRegisteredForAMonth(startOfMonth: Date, endOfMonth: Date) {
    return this.prisma.user.count({
      where: {
        firstSeen: {
          gte: startOfMonth,
          lt: endOfMonth,
        },
      },
    });
  }

  /**
   * Calculates monthly stats for a specified calendar month.
   * @param targetYear The year (e.g., 2025).
   * @param targetMonth The month index (0 for Jan, 11 for Dec).
   */
  async getMonthlyReport(targetYear: number, targetMonth: number) {
    // 1. Calculate the START of the target month
    // Setting day to 1 ensures it starts at 00:00:00.000 on the 1st.
    const startOfMonth = new Date(targetYear, targetMonth, 1);

    // 2. Calculate the END of the target month
    // To get the last millisecond of the month, we find the 1st day of the
    // *next* month and subtract one millisecond.
    // The month index 'targetMonth + 1' correctly rolls over the year if targetMonth is 11 (December).
    const startOfNextMonth = new Date(targetYear, targetMonth + 1, 1);
    const endOfMonth = new Date(startOfNextMonth.getTime() - 1);

    // 3. Use the calculated start and end dates
    const searches = await this.getTotalSearchesForAMonth(
      startOfMonth,
      endOfMonth,
    );
    const feedbacks = await this.getTotalFeedbacksForAMonth(
      startOfMonth,
      endOfMonth,
    );
    const newUsers = await this.getTotalUsersRegisteredForAMonth(
      startOfMonth,
      endOfMonth,
    );

    const newUsersWhoMadeAQuery =
      await this.getTotalQueriesFromUniqueUsersForAMonth(
        startOfMonth,
        endOfMonth,
      );

    return {
      searches,
      feedbacks,
      newUsers,
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

  /**
   * Get distribution of users by number of searches they made.
   * Returns an array of { searchCount, userCount } where:
   * - searchCount: number of searches made
   * - userCount: number of users who made that many searches
   *
   * Example: [{ searchCount: 1, userCount: 100 }, { searchCount: 2, userCount: 50 }]
   * means 100 users made 1 search, 50 users made 2 searches.
   */
  async getUsersBySearchCount() {
    // Group search logs by userId and count searches per user
    const userSearchCounts = await this.prisma.searchLog.groupBy({
      by: ['userId'],
      _count: {
        id: true,
      },
    });

    // Count how many users made each number of searches
    const distribution: Record<number, number> = {};

    for (const user of userSearchCounts) {
      const searchCount = user._count.id;
      distribution[searchCount] = (distribution[searchCount] || 0) + 1;
    }

    // Convert to array and sort by searchCount
    return Object.entries(distribution)
      .map(([searchCount, userCount]) => ({
        searchCount: parseInt(searchCount, 10),
        userCount,
      }))
      .sort((a, b) => a.searchCount - b.searchCount);
  }
}
