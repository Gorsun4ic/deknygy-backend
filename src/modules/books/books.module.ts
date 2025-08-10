import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { YakabooApiModule } from '../search-providers/yakaboo-api/yakaboo-api.module';

@Module({
  imports: [YakabooApiModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
