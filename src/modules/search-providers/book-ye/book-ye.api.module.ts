import { Module } from '@nestjs/common';
import { BookYeApiService } from './book-ye.api.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [BookYeApiService],
  exports: [BookYeApiService],
})
export class BookYeApiModule {}
