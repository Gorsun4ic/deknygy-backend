import { Injectable } from '@nestjs/common';
import { YakabooApiService } from '../search-providers/yakaboo-api/yakaboo-api.service';

@Injectable()
export class BooksService {
  constructor(private readonly yakabooApiService: YakabooApiService) {}

  async searchBook(query: string): Promise<any> {
    return this.yakabooApiService.search(query);
  }
}
