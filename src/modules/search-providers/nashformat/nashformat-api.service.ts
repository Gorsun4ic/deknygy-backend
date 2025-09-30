import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_URL } from './constants/api.params';
import { firstValueFrom, map } from 'rxjs';
import { NashformatProductDto } from './dto/response.dto';
import { IBookInfo } from '../../common/interfaces/api/book.info';
import { mapNashformatResponseToBookInfo } from './lib/formatApiResponse';
import { INashformatBook, NashformatItemTypes } from './interfaces/response';

@Injectable()
export class NashformatApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[] | []> {
    try {
      const response = await firstValueFrom(
        this.httpService
          .get<INashformatBook[]>(API_URL, {
            params: {
              term: query,
            },
          })
          .pipe(
            map((res) => {
              return res.data.filter(
                (item) => item.type === NashformatItemTypes.PRODUCT,
              );
            }),
          ),
      );
      const apiResponse = NashformatProductDto.fromPlainArray(response);
      return mapNashformatResponseToBookInfo(apiResponse);
    } catch (error) {
      throw new Error(`Failed to search in Nashformat API: ${error}`);
    }
  }
}
