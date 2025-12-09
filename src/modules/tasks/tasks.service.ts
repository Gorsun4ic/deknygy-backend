import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { StatsService } from '../analytics/services/stats/stats.service';
import { GoogleSheetsService } from '../analytics/services/stats/update_csv.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  private readonly SHEET_NAME = process.env.GOOGLE_SHEET_NAME;
  private readonly JSON_KEYFILE = process.env.GOOGLE_SHEET_JSON_KEYFILE;
  private readonly SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
  constructor(
    private readonly statsService: StatsService,
    private readonly googleSheetsService: GoogleSheetsService,
  ) {}

  private async updateGoogleSheets(stats) {
    if (!this.SHEET_NAME || !this.JSON_KEYFILE || !this.SPREADSHEET_ID) {
      this.logger.debug({
        SHEET_NAME: this.SHEET_NAME,
        JSON_KEYFILE: this.JSON_KEYFILE,
        SPREADSHEET_ID: this.SPREADSHEET_ID,
      });
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
  })
  async sendDailyReport() {
    this.logger.debug('Sending daily report');
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
      const stats = await this.statsService.getTotalStatsForADay(
        new Date(formattedDateString),
      );
      await this.updateGoogleSheets([
        formattedDateString,
        stats.newUsers,
        stats.searches,
        stats.newUsersWhoMadeAQuery,
        0,
        0,
        stats.feedbacks,
      ]);
      this.logger.debug(stats);
    } catch (error) {
      this.logger.error('Error sending daily report', error);
    }
  }

  // Hourly report
  @Cron(CronExpression.EVERY_HOUR, {
    name: 'sendHourlyReport',
  })
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
  @Cron(CronExpression.EVERY_1ST_DAY_OF_MONTH_AT_MIDNIGHT, {
    name: 'sendMonthlyReport',
  })
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
