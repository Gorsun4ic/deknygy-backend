import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { PrismaClient } from '@prisma/client';

/*
This repository is used to log each time the API searches for a book.
It's needed, because if a user searches for example, for an author only, e.g. Jim Collins,
the API will search for all books by Jim Collins and log each search.
While for clean analytics, we store only Jim Collins search,
for tech purposes, we store all searches for all books by Jim Collins.
*/

@Injectable()
export class CacheLogRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaService: PrismaService) {
    this.prisma = prismaService;
  }

  /**
   * Logs a successful book result for a specific query.
   * This serves as the technical/caching log.
   * @param bookId The ID of the book that was found.
   * @param queryId The ID of the original query.
   */
  async logBookResultForCache(bookId: number, queryId: number) {
    await this.prisma.cacheLog.upsert({
      where: {
        // This key comes from the @@unique([bookId, queryId]) index you defined
        bookId_queryId: {
          bookId: bookId,
          queryId: queryId,
        },
      },
      update: {
        // When updating (i.e., it already exists), you might want to refresh the timestamp
        createdAt: new Date(),
      },
      create: {
        book: { connect: { id: bookId } },
        query: { connect: { id: queryId } },
      },
    });
  }

  async getCacheLogsByQueryId(queryId: number) {
    return await this.prisma.cacheLog.findMany({
      where: {
        queryId: queryId,
      },
    });
  }
}
