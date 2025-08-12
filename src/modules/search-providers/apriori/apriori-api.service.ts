import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_URL, API_LIMIT, API_SORT } from './constants/api.params';
import { firstValueFrom, forkJoin, lastValueFrom } from 'rxjs';
import {
  AprioriSpecificBookDto,
  AprioriResponseDto,
  AprioriBookDto,
} from './dto/response.dto';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { formatAprioriResponse } from './lib/formatApiResponse';
import { AxiosError } from 'axios';

@Injectable()
export class AprioriApiService {
  private readonly logger = new Logger(AprioriApiService.name);

  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[] | []> {
    try {
      const headers = {
        'User-Agent': 'Mozilla/5.0 (compatible; BookSearch/1.0)',
        Accept: 'application/json',
      };

      this.logger.log(`Searching Apriori API for: ${query}`);

      const response = await firstValueFrom(
        this.httpService.get(`${API_URL}/search`, {
          headers,
          params: {
            search: query,
            limit: API_LIMIT,
            sort: API_SORT,
          },
        }),
      );
      const apiResponse = AprioriResponseDto.fromPlainArray([response.data]);
      const books = apiResponse[0]?.result || [];

      this.logger.log(`Parsed books count: ${books.length}`);

      if (books.length === 0) {
        this.logger.log('No books found, returning empty array');
        return [];
      }

      const bookDetailsRequests = books.map((book) => {
        const detailUrl = `${API_URL}/id/${book.id}`;
        this.logger.log(`Requesting details for: ${detailUrl}`);
        return this.httpService.get(detailUrl, { headers });
      });

      const detailsResponses = await lastValueFrom(
        forkJoin(bookDetailsRequests),
      );

      const result = formatAprioriResponse(
        AprioriBookDto.fromPlainArray(books),
        detailsResponses.map((response) =>
          AprioriSpecificBookDto.fromPlain(response.data),
        ),
      );

      this.logger.log(`Formatted result count: ${result.length}`);
      return result;
    } catch (error) {
      this.logger.error('Apriori API Error:', error);

      if (error instanceof AxiosError) {
        throw new HttpException(
          `Failed to search in Apriori API: ${error.message}`,
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
