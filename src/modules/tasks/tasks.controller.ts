import { Controller, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post('send-daily-report')
  async sendDailyReport() {
    return this.tasksService.sendDailyReport();
  }

  @Post('send-hourly-report')
  async sendHourlyReport() {
    return this.tasksService.sendHourlyReport();
  }

  @Post('send-monthly-report')
  async sendMonthlyReport() {
    return this.tasksService.sendMonthlyReport();
  }
}
