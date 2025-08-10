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
import { mapYakabooResponseToBookInfo } from './lib/formatApiResponse';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class YakabooApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<any> {
    const payload = createYakabooSearchPayload(
      query,
      API_FUZZINESS,
      API_MIN_MATCH,
      API_SIZE,
    );

    try {
      const response = await firstValueFrom(
        this.httpService.post(API_URL, payload),
      );
      const yakabooResponse = YakabooResponseDto.fromPlain(response.data);
      return mapYakabooResponseToBookInfo(yakabooResponse);
    } catch (error) {
      throw new Error(`Failed to search in Yakaboo API: ${error}`);
    }
  }
}
