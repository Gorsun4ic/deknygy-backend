import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { formatQuery } from '../common/utils/formatQuery';

@Controller('book')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async searchBook(@Query('query') query: string): Promise<any> {
    return this.bookService.searchBook(formatQuery(query));
  }
}
