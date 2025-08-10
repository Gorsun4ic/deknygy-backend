import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { YakabooApiService } from './yakaboo-api.service';

@Module({
  imports: [HttpModule],
  providers: [YakabooApiService],
  exports: [YakabooApiService],
})
export class YakabooApiModule {}
