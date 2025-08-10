import { Controller, Get, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('book')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async searchBook(@Query('query') query: string): Promise<any> {
    return this.bookService.searchBook(query);
  }
}
