import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { KSDResponseDto } from './dto/response.dto';
import {
  API_URL,
  API_LIMIT,
  API_OFFSET,
  API_CATEGORIES,
  API_LANGUAGES,
  API_FIELDS,
} from './constants/api.params';
import { IBookInfo } from '../../common/interfaces/api/book.info';
import { firstValueFrom, map } from 'rxjs';
import { formatKSDResponse } from './lib/formatApiResponse';

@Injectable()
export class KSDService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {
    const response = await firstValueFrom(
      this.httpService
        .get<KSDResponseDto>(API_URL, {
          params: {
            query: query,
            limit: API_LIMIT,
            offset: API_OFFSET,
            categories: API_CATEGORIES,
            languages: API_LANGUAGES,
            fields: API_FIELDS,
          },
        })
        .pipe(map((res) => res.data)),
    );
    const apiResponse = KSDResponseDto.arrayToInstance(response.results.items);
    return formatKSDResponse(apiResponse);
  }
}
