import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ArthussResponseDto } from './dto/response.dto';
import { API_URL } from './constants/api.params';
import { lastValueFrom } from 'rxjs';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { formatArthussResponse } from './lib/formatResponse';

@Injectable()
export class ArthussApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[]> {
    const response = await lastValueFrom(
      this.httpService.get<ArthussResponseDto[]>(`${API_URL}&keyword=${query}`),
    );

    if (!response.data || !Array.isArray(response.data)) {
      return [];
    }

    if (
      response.data.length === 1 &&
      response.data[0].fields?.no_results &&
      response.data[0].href === ''
    ) {
      return [];
    }

    const apiResponse = ArthussResponseDto.arrayToInstance(
      response.data,
    ).filter((item) => {
      return (
        item.fields &&
        !item.fields.no_results &&
        item.fields.name?.name &&
        item.href &&
        item.href !== ''
      );
    });

    return formatArthussResponse(apiResponse);
  }
}
