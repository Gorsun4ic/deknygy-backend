import { Injectable } from '@nestjs/common';
import { YakabooApiService } from '../search-providers/yakaboo-api/yakaboo-api.service';
import { NashformatApiService } from '../search-providers/nashformat/nashformat-api.service';
import { IBookInfo } from '../common/interfaces/api/book.info';
import { formatQuery } from '../common/utils/formatQuery';

@Injectable()
export class BooksService {
  constructor(
    private readonly yakabooApiService: YakabooApiService,
    private readonly nashformatApiService: NashformatApiService,
  ) {}

  async searchBook(query: string): Promise<IBookInfo[]> {
    const formattedQuery = formatQuery(query);
    const yakabooResult: IBookInfo[] =
      await this.yakabooApiService.search(formattedQuery);
    const nashformatResult: IBookInfo[] =
      await this.nashformatApiService.search(formattedQuery);
    return [...yakabooResult, ...nashformatResult];
  }
}
