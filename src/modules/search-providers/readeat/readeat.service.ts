import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ReadEatResponseDto } from './dto/response';
import { API_URL } from './constants/api.params';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { firstValueFrom, map } from 'rxjs';
import { formatReadEatResponse } from './lib/formatApiResponse';

@Injectable()
export class ReadEatService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {
    const response = await firstValueFrom(
      this.httpService
        .get<ReadEatResponseDto>(API_URL, {
          params: { keyword: query },
        })
        .pipe(map((res) => res.data)),
    );
    const apiResponse = ReadEatResponseDto.arrayToInstance(response.products);
    return formatReadEatResponse(apiResponse);
  }
}
