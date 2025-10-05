import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_URL, API_FUZZINESS, API_MIN_MATCH } from './constants/api.params';
import {
  createYakabooSearchPayload,
  createYakabooAuthorSearchPayload,
} from './yakaboo-api.factory';
import { YakabooResponseDto } from './dto/reponse.dto';
import { IYakabooResponse } from './interfaces/format.types';
import { mapYakabooResponseToBookInfo } from './lib/formatApiResponse';
import { firstValueFrom, map } from 'rxjs';
import { IBookInfo } from '../../common/interfaces/api/book.info';

@Injectable()
export class YakabooApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {
    const clearQuery = query.replace(/"/g, '');

    const payload = createYakabooSearchPayload(
      clearQuery,
      API_FUZZINESS,
      API_MIN_MATCH,
    );
    try {
      const response = await firstValueFrom(
        this.httpService
          .post<IYakabooResponse>(API_URL, payload)
          .pipe(map((res) => res.data)),
      );
      const yakabooResponse = YakabooResponseDto.fromPlain(response);
      return mapYakabooResponseToBookInfo(yakabooResponse.hits.hits);
    } catch (error) {
      throw new Error(`Failed to search in Yakaboo API: ${error}`);
    }
  }

  async searchByAuthor(authorName: string): Promise<IBookInfo[]> {
    const clearAuthorName = authorName.replace(/"/g, '');
    const payload = createYakabooAuthorSearchPayload(
      clearAuthorName,
      API_FUZZINESS,
      API_MIN_MATCH,
    );

    try {
      const response = await firstValueFrom(
        this.httpService
          .post<IYakabooResponse>(API_URL, payload)
          .pipe(map((res) => res.data)),
      );
      const yakabooResponse = YakabooResponseDto.fromPlain(response);
      return mapYakabooResponseToBookInfo(yakabooResponse.hits.hits);
    } catch (error) {
      throw new Error(`Failed to search in Yakaboo API: ${error}`);
    }
  }
}
