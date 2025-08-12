import { Injectable } from '@nestjs/common';
import { YakabooApiService } from '../search-providers/yakaboo-api/yakaboo-api.service';
import { NashformatApiService } from '../search-providers/nashformat/nashformat-api.service';
import { AprioriApiService } from '../search-providers/apriori/apriori-api.service';
import { IBookInfo } from '../common/interfaces/api/book.info';
import { formatQuery } from '../common/utils/formatQuery';

@Injectable()
export class BooksService {
  constructor(
    private readonly yakabooApiService: YakabooApiService,
    private readonly nashformatApiService: NashformatApiService,
    private readonly aprioriApiService: AprioriApiService,
  ) {}

  async searchBook(query: string): Promise<IBookInfo[]> {
    const formattedQuery = formatQuery(query);
    const yakabooResult: IBookInfo[] =
      await this.yakabooApiService.search(formattedQuery);
    const nashformatResult: IBookInfo[] =
      await this.nashformatApiService.search(formattedQuery);
    const aprioriResult: IBookInfo[] =
      await this.aprioriApiService.search(formattedQuery);
    return [...yakabooResult, ...nashformatResult, ...aprioriResult];
  }
}
