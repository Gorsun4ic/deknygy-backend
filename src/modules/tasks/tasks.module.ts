import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { StatsService } from '../analytics/services/stats/stats.service';
import { GoogleSheetsService } from '../analytics/services/stats/update_csv.service';
import { AnalyticsModule } from '../analytics/analytics.module';
import { TasksController } from './tasks.controller';

@Module({
  imports: [AnalyticsModule],
  controllers: [TasksController],
  providers: [TasksService, StatsService, GoogleSheetsService],
  exports: [TasksService],
})
export class TasksModule {}
