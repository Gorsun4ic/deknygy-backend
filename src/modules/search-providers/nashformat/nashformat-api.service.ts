import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_URL } from './constants/api.params';
import { firstValueFrom } from 'rxjs';
import { NashformatProductDto } from './dto/response.dto';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { mapNashformatResponseToBookInfo } from './lib/formatApiResponse';

@Injectable()
export class NashformatApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[] | []> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(API_URL, {
          params: {
            term: query,
          },
        }),
      );
      return mapNashformatResponseToBookInfo(
        NashformatProductDto.fromPlainArray(response.data),
      );
    } catch (error) {
      throw new Error(`Failed to search in Nashformat API: ${error}`);
    }
  }
}
