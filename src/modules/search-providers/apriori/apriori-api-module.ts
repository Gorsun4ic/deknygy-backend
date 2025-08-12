import { Logger, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AprioriApiService } from './apriori-api.service';

@Module({
  imports: [HttpModule],
  providers: [AprioriApiService, Logger],
  exports: [AprioriApiService],
})
export class AprioriApiModule {}
