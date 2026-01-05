import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { LaboratoryResponseDto } from './dto/response.dto';
import { API_URL } from './constants/api.params';
import { firstValueFrom, map } from 'rxjs';
import { formatLaboratoryResponse } from './lib/formatApiResponse';
import { IBookInfo } from '../../common/interfaces/api/book.info';

@Injectable()
export class LaboratoryService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {
    const response = await firstValueFrom(
      this.httpService
        .get<LaboratoryResponseDto>(API_URL, {
          params: { query: query },
        })
        .pipe(map((res) => res.data)),
    );
    const apiResponse = LaboratoryResponseDto.arrayToInstance(
      response.suggestions,
    );
    return formatLaboratoryResponse(apiResponse);
  }
}
