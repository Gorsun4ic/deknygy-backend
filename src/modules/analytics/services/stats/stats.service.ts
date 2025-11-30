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

  async getUserStats(userId: number) {
    return await this.statsRepository.getUserStats(userId);
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

  async getTotalUsersRegisteredToday() {
    return await this.statsRepository.getTotalUsersRegisteredToday();
  }

  async getTotalSearchesToday() {
    return await this.statsRepository.getTotalSearchesToday();
  }

  async getTotalFeedbacksToday() {
    return await this.statsRepository.getTotalFeedbacksToday();
  }
  async getTotalStatsToday() {
    const totalUsersRegisteredToday = await this.getTotalUsersRegisteredToday();
    const totalSearches = await this.getTotalSearchesToday();
    const totalFeedbacks = await this.getTotalFeedbacksToday();
    return {
      totalUsersRegisteredToday,
      totalSearches,
      totalFeedbacks,
    };
  }

  async getLastNFeedbacks(n: number) {
    return await this.statsRepository.getLastNFeedbacks(n);
  }
}
