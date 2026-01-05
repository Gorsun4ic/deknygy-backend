import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { BooksService } from './books.service';
import { formatQuery } from '../common/utils/formatQuery';
import { UserSyncInterceptor } from 'src/common/interceptors/usersync.interceptor';
@UseInterceptors(UserSyncInterceptor)
@Controller('book')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async searchBook(
    @Query('query') query: string,
    @Query('telegramId') telegramId: bigint,
  ): Promise<any> {
    return this.bookService.searchBook(telegramId, formatQuery(query));
  }
}
