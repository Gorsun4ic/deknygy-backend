import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll(): string {
    return 'What is up?';
  }
}
