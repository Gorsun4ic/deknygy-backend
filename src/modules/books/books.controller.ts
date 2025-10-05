import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { formatQuery } from '../common/utils/formatQuery';

@Controller('book')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  // @Get()
  // async searchBook(
  //   @Query('query') query: string,
  //   @Query('telegramId') telegramId: bigint,
  // ): Promise<any> {
  //   return this.bookService.searchBook(telegramId, formatQuery(query));
  // }

  @Get()
  async searchBooksTitles(
    @Query('query') query: string,
    @Query('telegramId') telegramId: bigint,
  ): Promise<any> {
    return this.bookService.searchBooksTitles(telegramId, formatQuery(query));
  }
}
