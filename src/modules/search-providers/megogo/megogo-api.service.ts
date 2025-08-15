import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_URL, API_LIMIT } from './contants/api.params';
import { MegogoResponseDto } from './dto/response.dto';
import { firstValueFrom, map } from 'rxjs';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { formatMegogoResponse } from './lib/formatMegogoResponse';

@Injectable()
export class MegogoApiService {
  private readonly logger = new Logger(MegogoApiService.name);

  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {
    try {
      const response = await firstValueFrom(
        this.httpService
          .get<MegogoResponseDto>(`${API_URL}/`, {
            params: {
              query,
              limit: API_LIMIT,
            },
          })
          .pipe(map((response) => response.data)),
      );
      const apiResponse = MegogoResponseDto.fromArrayToInstance(
        response.data.items.books.items,
      );
      return formatMegogoResponse(apiResponse);
    } catch (error) {
      this.logger.error(`Error searching Megogo API: ${error}`);
      throw error;
    }
  }
}
