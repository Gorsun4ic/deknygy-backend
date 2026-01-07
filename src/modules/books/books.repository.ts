import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { IBookInfo } from '../common/interfaces/api/book.info';
import { Logger } from '@nestjs/common';
import { Book } from '@db';

@Injectable()
export class BooksRepository {
  constructor(
    private prisma: PrismaService,
    private logger: Logger,
  ) {}

  async getOrCreateQueryId(query: string): Promise<number> {
    const existingQuery = await this.prisma.query.findUnique({
      where: { query },
    });

    if (existingQuery) {
      return existingQuery.id;
    }

    const newQuery = await this.prisma.query.create({
      data: { query },
    });

    return newQuery.id;
  }

  async saveBooks(unifiedBooks: IBookInfo[], queryId: number) {
    const savedBooks: Book[] = [];

    for (const book of unifiedBooks) {
      try {
        const storeTitle = book.store;
        // Get or create store
        const store = await this.prisma.store.upsert({
          where: { title: storeTitle },
          update: {},
          create: { title: storeTitle },
        });

        // Map format number to format name
        const formatNames = { 1: 'Physical', 2: 'E-book', 3: 'Audio' };
        const formatName = formatNames[book.format] || 'Physical';

        // Get or create format
        const format = await this.prisma.format.upsert({
          where: { title: formatName },
          update: {},
          create: { title: formatName },
        });

        const dbBook = await this.prisma.book.upsert({
          where: { link: book.link },
          update: { available: book.available },
          create: {
            title: book.title,
            link: book.link,
            store: {
              connect: {
                id: store.id,
              },
            },
            format: {
              connect: {
                id: format.id,
              },
            },
            available: book.available,
            query: {
              connect: {
                id: queryId,
              },
            },
          },
        });

        // Only create BookPrice if price is valid (not null, not NaN, and >= 0)
        if (
          book.price != null &&
          !isNaN(book.price) &&
          isFinite(book.price) &&
          book.price >= 0
        ) {
          await this.prisma.bookPrice.create({
            data: { bookId: dbBook.id, price: book.price },
          });
        }

        savedBooks.push(dbBook);
      } catch (error) {
        this.logger.error(`Failed to save book with link: ${book.link}`, error);
      }
    }

    return savedBooks;
  }
}
