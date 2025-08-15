import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { BookYeResponseDto } from './dto/reponse.dto';
import { API_URL } from './constants/api.params';
import { firstValueFrom, map } from 'rxjs';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { formatBookYeResponse } from './lib/formatApiResponse';

@Injectable()
export class BookYeApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {
    const response = await firstValueFrom(
      this.httpService
        .get<BookYeResponseDto>(API_URL, {
          params: { query: query },
        })
        .pipe(map((res) => res.data)),
    );
    const apiResponse = BookYeResponseDto.arrayToInstance(
      response.results.item_groups.flatMap((item) => item.items),
    );
    return formatBookYeResponse(apiResponse);
  }
}
