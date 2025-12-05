import { Injectable } from '@nestjs/common';
import { StatsRepository } from '../../repository/stats/stats.repository';

@Injectable()
export class StatsService {
  constructor(private readonly statsRepository: StatsRepository) {}

  async getTotalUsers() {
    return await this.statsRepository.getTotalUsers();
  }

  async getTotalUsersWithMultipleSessions() {
    return await this.statsRepository.getTotalUsersWithMultipleSessions();
  }

  async getTotalUsersWithOnlyOneRequest() {
    return await this.statsRepository.getTotalUsersWithOnlyOneRequest();
  }

  async getTotalUsersWithNoRequests() {
    return await this.statsRepository.getTotalUsersWithNoRequests();
  }

  async getTotalUsersWithMultipleRequests() {
    return await this.statsRepository.getTotalUsersWithMultipleRequests();
  }

  async getTotalSearches() {
    return await this.statsRepository.getTotalSearches();
  }

  async getTotalFeedbacks() {
    return await this.statsRepository.getTotalFeedbacks();
  }

  async getUserStats(telegramId: bigint) {
    return await this.statsRepository.getUserStats(telegramId);
  }

  async getTotalStats() {
    const totalUsers = await this.getTotalUsers();
    const totalUsersWithMultipleSessions =
      await this.getTotalUsersWithMultipleSessions();
    const totalUsersWithOnlyOneRequest =
      await this.getTotalUsersWithOnlyOneRequest();
    const totalUsersWithNoRequests = await this.getTotalUsersWithNoRequests();
    const totalUsersWithMultipleRequests =
      await this.getTotalUsersWithMultipleRequests();
    const totalSearches = await this.getTotalSearches();
    const totalFeedbacks = await this.getTotalFeedbacks();
    return {
      totalUsers,
      totalUsersWithMultipleSessions,
      totalUsersWithOnlyOneRequest,
      totalUsersWithNoRequests,
      totalUsersWithMultipleRequests,
      totalSearches,
      totalFeedbacks,
    };
  }

  async getTotalSearchesForADay(date: Date) {
    return await this.statsRepository.getTotalSearchesForADay(date);
  }

  async getTotalFeedbacksForADay(date: Date) {
    return await this.statsRepository.getTotalFeedbacksForADay(date);
  }

  async getUsersRegisteredForADay(date: Date) {
    return await this.statsRepository.getUsersRegisteredForADay(date);
  }

  async getTotalUsersRegisteredForADayCount(date: Date) {
    return await this.statsRepository.getTotalUsersRegisteredForADayCount(date);
  }

  async getDailyNewUsersWhoMadeAQuery(date: Date) {
    return await this.statsRepository.getDailyNewUsersWhoMadeAQuery(date);
  }

  async getTotalStatsForADay(date: Date) {
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

  async getLastNFeedbacks(n: number) {
    return await this.statsRepository.getLastNFeedbacks(n);
  }

  async getTopUsersBySearches(n: number) {
    const logs = await this.statsRepository.getTopUsersBySearches(n);
    return logs.map((log) => {
      return {
        telegramId: log.telegramId,
        username: log.username,
        count: log._count.searchLogs,
      };
    });
  }

  async getUsersBySearchCount() {
    return await this.statsRepository.getUsersBySearchCount();
  }
}
