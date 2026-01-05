import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { KnygolandResponseDto } from './dto/response.dto';
import {
  API_LANG,
  API_OFFSET,
  API_CATEGORIES,
  API_FIELDS,
  API_FILTERS,
  API_URL,
  API_LIMIT,
} from './constants/api.params';
import { firstValueFrom, map } from 'rxjs';
import { IBookInfo } from '../../common/interfaces/api/book.info';
import { formatKnygolandResponse } from './lib/formatApiResponse';

@Injectable()
export class KnygolandApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {
    const response = await firstValueFrom(
      this.httpService
        .get<KnygolandResponseDto>(
          `${API_URL}&categories=${API_CATEGORIES}&query=${query}&filters=${API_FILTERS}&fields=${API_FIELDS}&limit=${API_LIMIT}&offset=${API_OFFSET}&lang=${API_LANG}`,
          {},
        )
        .pipe(map((res) => res.data)),
    );
    const apiResponse = KnygolandResponseDto.arrayToInstance(
      response.results.items,
    );
    return formatKnygolandResponse(apiResponse);
  }
}
