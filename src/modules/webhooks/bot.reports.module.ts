import { Module } from '@nestjs/common';
import { BotReportsService } from './bot.reports.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [BotReportsService],
  exports: [BotReportsService],
})
export class BotReportsModule {}
