import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { YakabooApiModule } from '../search-providers/yakaboo-api/yakaboo-api.module';
import { NashformatApiModule } from '../search-providers/nashformat/nashformat-api.module';

@Module({
  imports: [YakabooApiModule, NashformatApiModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
