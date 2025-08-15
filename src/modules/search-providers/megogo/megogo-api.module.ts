import { Module } from '@nestjs/common';
import { MegogoApiService } from './megogo-api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [MegogoApiService],
  exports: [MegogoApiService],
})
export class MegogoApiModule {}
