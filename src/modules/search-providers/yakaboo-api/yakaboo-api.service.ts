import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import {
  API_URL,
  API_FUZZINESS,
  API_MIN_MATCH,
  API_SIZE,
} from './constants/api.params';

@Injectable()
export class YakabooApiService {
  constructor(private readonly httpService: HttpService) {}

  async search(query: string): Promise<any> {

  }
}
