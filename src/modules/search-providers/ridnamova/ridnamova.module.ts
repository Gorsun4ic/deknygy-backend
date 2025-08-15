import { Module } from '@nestjs/common';
import { RidnamovaApiService } from './ridnamova.api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [RidnamovaApiService],
  exports: [RidnamovaApiService],
})
export class RidnamovaApiModule {}