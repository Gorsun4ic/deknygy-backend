import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  API_URL,
  API_FUZZINESS,
  API_MIN_MATCH,
  API_SIZE,
} from './constants/api.params';
import { createYakabooSearchPayload } from './yakaboo-api.factory';
import { YakabooResponseDto } from './dto/reponse.dto';
import { IYakabooResponse } from './interfaces/format.types';
import { mapYakabooResponseToBookInfo } from './lib/formatApiResponse';
import { firstValueFrom, map } from 'rxjs';
import { IBookInfo } from '../../common/interfaces/api/book.info';
import { AxiosError } from 'axios';

@Injectable()
export class YakabooApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {

    const payload = createYakabooSearchPayload(
      query,
      API_FUZZINESS,
      API_MIN_MATCH,
      API_SIZE,
    );

    try {
      const response = await firstValueFrom(
        this.httpService
          .post<IYakabooResponse>(API_URL, payload, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .pipe(map((res) => res.data)),
      );

      const yakabooResponse = YakabooResponseDto.fromPlain(response);
      
      return mapYakabooResponseToBookInfo(yakabooResponse.hits.hits);
    } catch (error: unknown) {
      console.error('Yakaboo API Error:', error);

      if (error instanceof AxiosError) {
        const errorData = error.response?.data as unknown;
        console.error('Axios Error Details:', {
          message: error.message,
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: errorData,
          config: {
            url: error.config?.url,
            method: error.config?.method,
            headers: error.config?.headers,
          },
        });
        throw new Error(
          `Failed to search in Yakaboo API: ${error.message} - Status: ${error.response?.status} - Data: ${JSON.stringify(errorData)}`,
        );
      }

      const errorMessage =
        error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to search in Yakaboo API: ${errorMessage}`);
    }
  }
}
