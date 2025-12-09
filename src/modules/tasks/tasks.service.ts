import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StatsService } from '../analytics/services/stats/stats.service';
import { GoogleSheetsService } from '../analytics/services/stats/update_csv.service';
import { BotReportsService } from '../webhooks/bot.reports.service';
import { IDailyStats } from '../common/interfaces/api/stats';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  private readonly SHEET_NAME = process.env.GOOGLE_SHEET_NAME;
  private readonly JSON_KEYFILE = process.env.GOOGLE_SHEET_JSON_KEYFILE;
  private readonly SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
  constructor(
    private readonly statsService: StatsService,
    private readonly googleSheetsService: GoogleSheetsService,
    private readonly botReportsService: BotReportsService,
  ) {}

  private async updateGoogleSheets(stats) {
    if (!this.SHEET_NAME || !this.JSON_KEYFILE || !this.SPREADSHEET_ID) {
      throw new Error('Google sheet credentials are not set');
    }
    await this.googleSheetsService.updateOrAddTableRow(
      this.SPREADSHEET_ID,
      this.SHEET_NAME,
      stats,
      this.JSON_KEYFILE,
    );
  }

  // Daily report
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT, {
    name: 'sendDailyReport',
    timeZone: 'Europe/Kyiv',
  })
  async sendDailyReport() {
    this.logger.log('Sending daily report');
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const yesterdayDateObject = new Date(today);
      yesterdayDateObject.setDate(yesterdayDateObject.getDate() - 1);

      // 2. Format it to YYYY-MM-DD string using local methods
      const year = yesterdayDateObject.getFullYear();
      // month is 0-indexed, so add 1 and pad with '0'
      const month = (yesterdayDateObject.getMonth() + 1)
        .toString()
        .padStart(2, '0');
      // date is 1-indexed, pad with '0'
      const day = yesterdayDateObject.getDate().toString().padStart(2, '0');

      const formattedDateString = `${year}-${month}-${day}`;
      const stats: IDailyStats = await this.statsService.getTotalStatsForADay(
        new Date(formattedDateString),
      );
      this.logger.log(stats);
      try {
        await this.botReportsService.sendDailyReport(stats);
      } catch (error) {
        this.logger.error('Error sending daily report to bot', error);
      }
      try {
        await this.updateGoogleSheets([
          formattedDateString,
          stats.newUsers,
          stats.searches,
          stats.newUsersWhoMadeAQuery,
          0,
          0,
          stats.feedbacks,
        ]);
      } catch (error) {
        this.logger.error('Error updating Google sheets', error);
      }
    } catch (error) {
      this.logger.error('Error sending daily report', error);
    }
  }

  // Hourly report
  @Cron(CronExpression.EVERY_HOUR, {
    name: 'sendHourlyReport',
  })
  async sendHourlyReport() {
    this.logger.log('Sending hourly report');
    try {
      const stats = await this.statsService.getHourlyStats();
      try {
        await this.botReportsService.sendHourlyReport(stats);
      } catch (error) {
        this.logger.error('Error sending hourly report to bot', error);
      }
    } catch (error) {
      this.logger.error('Error sending hourly report', error);
    }
  }

  // Monthly report
  @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT, {
    name: 'sendMonthlyReport',
    timeZone: 'Europe/Kyiv',
  })
  async sendMonthlyReport() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    this.logger.log('Sending monthly report');
    try {
      const stats = await this.statsService.getMonthlyReport(year, month);
      try {
        await this.botReportsService.sendMonthlyReport(stats);
      } catch (error) {
        this.logger.error('Error sending monthly report to bot', error);
      }
    } catch (error) {
      this.logger.error('Error sending monthly report', error);
    }
  }
}
