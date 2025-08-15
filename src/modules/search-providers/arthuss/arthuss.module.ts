import { Module } from '@nestjs/common';
import { ArthussApiService } from './arthuss.api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [ArthussApiService],
  exports: [ArthussApiService],
})
export class ArthussApiModule {}
