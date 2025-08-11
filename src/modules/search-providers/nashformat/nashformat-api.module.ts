import { Logger, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { NashformatApiService } from './nashformat-api.service';

@Module({
  imports: [HttpModule],
  providers: [NashformatApiService, Logger],
  exports: [NashformatApiService],
})
export class NashformatApiModule {}
