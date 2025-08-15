import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { StaryLevApiService } from './stary-lev-api.service';

@Module({
  imports: [HttpModule],
  providers: [StaryLevApiService],
  exports: [StaryLevApiService],
})
export class StaryLevModule {}
