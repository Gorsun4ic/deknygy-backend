import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { RidnamovaResponseDto } from './dto/ridnamova.dto';
import { API_URL } from './constants/api.params';
import { firstValueFrom } from 'rxjs';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { formatRidnamovaResponse } from './lib/formatApiResponse';

@Injectable()
export class RidnamovaApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {
    const response = await firstValueFrom(
      this.httpService.get<RidnamovaResponseDto>(API_URL, {
        params: { filter_name: query },
      }),
    );
    const apiResponse = RidnamovaResponseDto.arrayToInstance(
      response.data.products,
    );
    return formatRidnamovaResponse(apiResponse);
  }
}
