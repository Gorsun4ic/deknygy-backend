import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { KeyAuthGuard } from '../auth/key-auth.guard';
import { formatQuery } from '../common/utils/formatQuery';

@Controller('book')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @UseGuards(KeyAuthGuard)
  @Get()
  async searchBook(@Query('query') query: string): Promise<any> {
    return this.bookService.searchBook(formatQuery(query));
  }
}
