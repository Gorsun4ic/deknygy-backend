import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { API_URL, API_PARAMS } from './constants/api.params';
import { firstValueFrom, forkJoin, lastValueFrom } from 'rxjs';
import {
  VivatBookDto,
  VivatDetailedBookDto,
  VivatResponseDto,
  VivatDetailedResponseDto,
} from './dto/response.dto';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { formatVivatResponse } from './lib/formatApiResponse';
import { AxiosError } from 'axios';

@Injectable()
export class VivatApiService {
  private readonly logger = new Logger(VivatApiService.name);

  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<IBookInfo[] | []> {
    try {
      const headers = {
        'User-Agent': 'Mozilla/5.0 (compatible; BookSearch/1.0)',
        Accept: 'application/json',
      };

      this.logger.log(`Searching Vivat API for: ${query}`);

      const response = await firstValueFrom(
        this.httpService.get(API_URL, {
          headers,
          params: {
            ...API_PARAMS,
            query: query,
          },
        }),
      );

      this.logger.log(`Vivat search response status: ${response.status}`);

      const apiResponse = VivatResponseDto.fromPlainArray([response.data]);
      const books = apiResponse[0]?.results || [];

      this.logger.log(`Parsed books count: ${books.item_groups?.length || 0}`);

      if (!books.item_groups || books.item_groups.length === 0) {
        this.logger.log('No books found, returning empty array');
        return [];
      }

      // Extract book codes from URLs for detailed API calls
      const allBooks = books.item_groups.flatMap((group) => group.items);
      this.logger.log(`Total books found: ${allBooks.length}`);

      const bookCodes = allBooks
        .filter((book) => {
          const isValid = book.url && book.url.includes('/product/');
          if (!isValid) {
            this.logger.log(`Skipping book with invalid URL: ${book.url}`);
          }
          return isValid;
        })
        .map((book) => {
          const urlParts = book.url
            .split('/')
            .filter((part) => part.length > 0);
          const code = urlParts[urlParts.length - 1];
          this.logger.log(`Extracted code: ${code} from URL: ${book.url}`);
          return code;
        })
        .filter((code) => code.length > 0);

      this.logger.log(`Valid book codes found: ${bookCodes.length}`);

      if (bookCodes.length === 0) {
        this.logger.log('No valid book codes found, returning empty array');
        return [];
      }

      const bookDetailsRequests = bookCodes.map((code) => {
        const detailUrl = `https://vivat.com.ua/_next/data/U8HP3rF18sAGVJt4R1RUs/uk/product/${code}.json?code=${code}`;
        this.logger.log(`Requesting details for: ${detailUrl}`);
        return this.httpService.get(detailUrl, { headers });
      });

      const detailsResponses = await lastValueFrom(
        forkJoin(bookDetailsRequests),
      );

      this.logger.log(`Received ${detailsResponses.length} detail responses`);

      const result = formatVivatResponse(
        VivatBookDto.fromPlainArray(
          books.item_groups.flatMap((group) => group.items),
        ),
        detailsResponses.map((response) => {
          const detailedResponse = VivatDetailedResponseDto.fromPlain(
            response.data,
          );
          return VivatDetailedBookDto.fromPlain(
            detailedResponse.pageProps.product,
          );
        }),
      );

      this.logger.log(`Formatted result count: ${result.length}`);
      return result;
    } catch (error) {
      this.logger.error('Vivat API Error:', error);

      if (error instanceof AxiosError) {
        throw new HttpException(
          `Failed to search in Vivat API: ${error.message}`,
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
