import { Injectable, Logger } from '@nestjs/common';
import { IDailyStats, IHourlyStats } from '../common/interfaces/api/stats';
import {
  BOT_WEBHOOK_BASE_URL,
  BOT_WEBHOOK_DAILY_REPORT_URL,
  BOT_WEBHOOK_HOURLY_REPORT_URL,
  BOT_WEBHOOK_MONTHLY_REPORT_URL,
  ADMIN_ID,
} from './constants/bot.reports.url.constants';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BotReportsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly logger: Logger,
    private readonly botBaseUrl: string,
    private readonly botDailyReportUrl: string,
    private readonly botHourlyReportUrl: string,
    private readonly botMonthlyReportUrl: string,
    private readonly adminId: string,
  ) {
    this.botBaseUrl = BOT_WEBHOOK_BASE_URL || '';
    this.botDailyReportUrl =
      this.botBaseUrl + BOT_WEBHOOK_DAILY_REPORT_URL || '';
    this.botHourlyReportUrl =
      this.botBaseUrl + BOT_WEBHOOK_HOURLY_REPORT_URL || '';
    this.botMonthlyReportUrl =
      this.botBaseUrl + BOT_WEBHOOK_MONTHLY_REPORT_URL || '';
    this.adminId = ADMIN_ID || '';
  }

  private async sendReport<T>(stats: T, url: string) {
    await firstValueFrom(
      this.httpService.post(url, {
        chat_id: this.adminId,
        value: stats,
      }),
    );

    return { status: 'Request forwarded to bot' };
  }

  async sendDailyReport(stats: IDailyStats) {
    await this.sendReport<IDailyStats>(stats, this.botDailyReportUrl);
  }

  async sendHourlyReport(stats: IHourlyStats) {
    await this.sendReport<IHourlyStats>(stats, this.botHourlyReportUrl);
  }

  async sendMonthlyReport(stats) {
    await this.sendReport(stats, this.botMonthlyReportUrl);
  }
}
