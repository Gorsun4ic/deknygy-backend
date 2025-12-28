import { Injectable } from '@nestjs/common';
import { IDailyStats, IHourlyStats } from '../common/interfaces/api/stats';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class BotReportsService {
  private readonly adminId: string;
  private readonly botDailyReportUrl: string;
  private readonly botHourlyReportUrl: string;
  private readonly botMonthlyReportUrl: string;

  // Constructor now only injects injectable classes (ConfigService and HttpService)
  constructor(
    private readonly configService: ConfigService, // Inject ConfigService
    private readonly httpService: HttpService,
  ) {
    // Retrieve values from ConfigService (or directly from process.env)
    const botBaseUrl =
      this.configService.get<string>('BOT_WEBHOOK_BASE_URL') || '';

    // Assuming your constants are now environment variables or loaded by ConfigModule:
    this.adminId = this.configService.get<string>('ADMIN_ID') || '';
    this.botDailyReportUrl =
      botBaseUrl +
        this.configService.get<string>('BOT_WEBHOOK_DAILY_REPORT_URL') || '';
    this.botHourlyReportUrl =
      botBaseUrl +
        this.configService.get<string>('BOT_WEBHOOK_HOURLY_REPORT_URL') || '';
    this.botMonthlyReportUrl =
      botBaseUrl +
        this.configService.get<string>('BOT_WEBHOOK_MONTHLY_REPORT_URL') || '';
  }

  private async sendReport<T>(stats: T, url: string) {
    try {
      await firstValueFrom(
        this.httpService.post(url, {
          chat_id: this.adminId,
          value: stats,
        }),
      );

      return { status: 'Request forwarded to bot' };
    } catch (error: any) {
      // This logs the ACTUAL error (404, 500, etc)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (error.response) {
        console.error(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          `Bot API returned error ${error.response.status}:`,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          error.response.data,
        );
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        console.error(`Could not reach Bot API at ${url}:`, error.message);
      }

      // Return a clean object instead of crashing
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      return { status: 'Failed', error: error.message };
    }
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
