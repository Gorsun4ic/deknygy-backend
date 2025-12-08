import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StatsService } from '../analytics/services/stats/stats.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly statsService: StatsService) {}

  // Daily report
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async sendDailyReport() {
    this.logger.debug('Sending daily report');
    try {
      const stats = await this.statsService.getTotalStatsForADay(new Date());
      this.logger.debug(stats);
    } catch (error) {
      this.logger.error('Error sending daily report', error);
    }
  }

  // Hourly report
  @Cron(CronExpression.EVERY_HOUR)
  async sendHourlyReport() {
    this.logger.debug('Sending hourly report');
    try {
      const stats = await this.statsService.getHourlyStats();
      this.logger.debug(stats);
    } catch (error) {
      this.logger.error('Error sending hourly report', error);
    }
  }

  // Monthly report
  @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT)
  async sendMonthlyReport() {
    this.logger.debug('Sending monthly report');
    try {
      const stats = await this.statsService.getMonthlyReport();
      this.logger.debug(stats);
    } catch (error) {
      this.logger.error('Error sending monthly report', error);
    }
  }
}
