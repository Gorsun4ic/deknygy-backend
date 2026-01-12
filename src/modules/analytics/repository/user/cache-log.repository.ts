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
    const existing = await this.prisma.cacheLog.findFirst({
      where: { bookId, queryId },
    });

    if (existing) {
      await this.prisma.cacheLog.update({
        where: { id: existing.id },
        data: { updatedAt: new Date() },
      });
    } else {
      await this.prisma.cacheLog.create({ data: { bookId, queryId } });
    }
  }

  async getCacheLogsByQueryId(queryId: number) {
    return await this.prisma.cacheLog.findMany({
      where: {
        queryId: queryId,
      },
    });
  }
}
