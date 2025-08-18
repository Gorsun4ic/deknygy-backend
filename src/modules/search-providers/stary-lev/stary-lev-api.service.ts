import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_SPECIFIC_BOOK_URL, API_URL } from './constants/api.params';
import { firstValueFrom, forkJoin, lastValueFrom, map } from 'rxjs';
import {
  StaryLevResponseDto,
  StaryLevSpecificResponseDto,
} from './dto/response.dto';
// import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { AxiosError } from 'axios';
import { IStaryLevResponse } from './interfaces/response';
import { formatStaryLevResponse } from './lib/formatApiResponse';

@Injectable()
export class StaryLevApiService {
  private readonly logger = new Logger(StaryLevApiService.name);

  constructor(private readonly httpService: HttpService) {}

  async search(query: string) {
    try {
      const headers = {
        'User-Agent': 'Mozilla/5.0 (compatible; BookSearch/1.0)',
        Accept: 'application/json',
      };

      const response = await firstValueFrom(
        this.httpService
          .get<IStaryLevResponse>(API_URL, {
            headers,
            params: {
              q: query,
            },
          })
          .pipe(map((res) => res.data.data)),
      );

      const apiResponse = StaryLevResponseDto.fromPlainArray(response);
      const bookSlugs = apiResponse.map((book) => book.link);

      if (bookSlugs.length === 0) {
        this.logger.log('No books found, returning empty array');
        return [];
      }

      const bookDetailsRequest = bookSlugs.map((slug) => {
        const detailUrl = `${API_SPECIFIC_BOOK_URL}/${slug}.json?params=${slug}`;
        return this.httpService
          .get<StaryLevSpecificResponseDto>(detailUrl, { headers })
          .pipe(map((res) => res.data.pageProps.resource));
      });

      const detailedResponse = await lastValueFrom(
        forkJoin(bookDetailsRequest),
      );
      const result = formatStaryLevResponse(detailedResponse);

      return result;
    } catch (error) {
      this.logger.error('Stary Lev API Error:', error);

      if (error instanceof AxiosError) {
        throw new HttpException(
          `Failed to search in Stary Lev API: ${error.message}`,
          error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      throw new HttpException(
        'An unexpected error occurred',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
