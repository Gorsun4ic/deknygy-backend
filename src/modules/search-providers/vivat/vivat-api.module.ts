import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { VivatApiService } from './vivat-api.service';

@Module({
  imports: [HttpModule],
  providers: [VivatApiService],
  exports: [VivatApiService],
})
export class VivatApiModule {}
