import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { StatsService } from '../analytics/services/stats/stats.service';
import { GoogleSheetsService } from '../analytics/services/stats/update_csv.service';
import { AnalyticsModule } from '../analytics/analytics.module';
import { TasksController } from './tasks.controller';
import { BotReportsModule } from '../webhooks/bot.reports.module';
import { BotReportsService } from '../webhooks/bot.reports.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AnalyticsModule, BotReportsModule, HttpModule, ConfigModule],
  controllers: [TasksController],
  providers: [
    TasksService,
    StatsService,
    GoogleSheetsService,
    BotReportsService,
  ],
  exports: [TasksService],
})
export class TasksModule {}
