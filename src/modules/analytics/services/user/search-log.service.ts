import { Injectable } from '@nestjs/common';
import { SearchLogRepository } from '../../repository/user/search-log.repository';
import { upFirstLetter } from '../../../common/utils/upFirstLetter';
import { resolveAndGroupBooks } from '../../../books/lib/merge/resolveAndGroupBooks';
import { Prisma } from '@prisma/client';

import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';

type SearchLogWithRelations = Prisma.SearchLogGetPayload<{
  include: {
    query: true;
    viewedBooks: {
      include: {
        book: { include: { store: true; format: true; prices: true } };
      };
    };
  };
}>;

@Injectable()
export class SearchLogService {
  private readonly SERVICE_NAME = 'SearchLogService';
  constructor(private readonly searchLogRepository: SearchLogRepository) {}

  /**
   * Logs a user's search query and the books they viewed
   *
   * @param telegramId - Telegram user ID
   * @param query - Search query text
   * @param books - Array of books with link and similarity score
   * @returns The created SearchLog record
   */
  async logSearch(
    telegramId: bigint,
    query: string,
    books: Array<{ link: string; similarity?: number }> = [],
    groupedResults?: any,
  ) {
    return await this.searchLogRepository.logSearch(
      telegramId,
      query,
      books,
      groupedResults,
    );
  }

  /**
   * Links ViewedBook records to Book records after books are saved
   * @param searchLogId - Search log ID
   * @param bookLinks - Array of book links that were saved
   */
  async linkViewedBooksToSavedBooks(searchLogId: number, bookLinks: string[]) {
    await this.searchLogRepository.linkViewedBooksToSavedBooks(
      searchLogId,
      bookLinks,
    );
  }

  async getUserSearchLogs(telegramId: bigint) {
    return await this.searchLogRepository.getUserSearchLogs(telegramId);
  }

  async getUserSearchCount(telegramId: bigint) {
    return {
      count: await this.searchLogRepository.getUserSearchCount(telegramId),
    };
  }

  async logUnsuccessfulSearch(telegramId: bigint, query: string) {
    return await this.searchLogRepository.logUnsuccessfulSearch(
      telegramId,
      query,
    );
  }

  async getUnsuccessfulSearchCount(telegramId: bigint) {
    return {
      count:
        await this.searchLogRepository.getUnsuccessfulSearchCount(telegramId),
    };
  }

  async getLastUnsuccessfulCurrentDifferenceSearchCount(telegramId: bigint) {
    return {
      count:
        await this.searchLogRepository.getLastUnsuccessfulCurrentDifferenceSearchCount(
          telegramId,
        ),
    };
  }

  async getLastNQueries(n: number) {
    return await this.searchLogRepository.getLastNQueries(n);
  }

  async getTopQueries(n: number) {
    const topQueries = await this.searchLogRepository.getTopQueries(n);
    return topQueries.map((query) => {
      return {
        query: upFirstLetter(query.query),
        count: query._count.searchLogs,
      };
    });
  }

  async getUserHistory(
    telegramId: bigint,
    page: number = 1,
    limit: number = 10,
  ) {
    const userHistory = await this.searchLogRepository.getUserHistory(
      telegramId,
      page,
      limit,
    );
    const formattedUserHistory = userHistory.data.map((searchLog) => {
      return {
        ...searchLog,
        query: upFirstLetter(searchLog.query.query),
      };
    });
    return {
      ...userHistory,
      data: formattedUserHistory,
    };
  }

  /**
   * Gets all search log IDs for a user
   * @param telegramId - Telegram user ID
   * @returns Array of search log IDs with basic info
   */
  async getUserSearchLogIds(telegramId: bigint) {
    const searchLogs =
      await this.searchLogRepository.getUserSearchLogIds(telegramId);
    return searchLogs.map((log) => ({
      id: log.id,
      query: upFirstLetter(log.query.query),
      searchedAt: log.searchedAt,
    }));
  }

  /**
   * Gets all viewed books for a specific search log
   * @param searchLogId - Search log ID
   * @returns Search log with viewed books grouped by title
   */
  async getViewedBooksBySearchLogId(searchLogId: number) {
    const searchLog =
      (await this.searchLogRepository.getViewedBooksBySearchLogId(
        searchLogId,
      )) as unknown as SearchLogWithRelations;

    // If we have stored grouped results, return them directly
    if (searchLog.groupedResults) {
      return {
        id: searchLog.id,
        // Now .query.query is accessible!
        query: upFirstLetter(searchLog.query.query),
        searchedAt: searchLog.searchedAt,
        groupedBooks: searchLog.groupedResults,
      };
    }

    // Fallback: reconstruct from ViewedBook records (for old search logs)
    const formatMap: Record<string, 1 | 2 | 3> = {
      Physical: 1,
      'E-book': 2,
      Audio: 3,
    };

    const booksForGrouping: IBookInfo[] = searchLog.viewedBooks
      .filter((vb) => vb.book)
      .map((vb) => ({
        title: vb.book!.title,
        author: null,
        price: vb.book!.prices[0]?.price || 0,
        link: vb.book!.link,
        store: vb.book!.store.title,
        available: vb.book!.available,
        format: formatMap[vb.book!.format.title] || 1,
        _titleSimilarity: vb.similarity || 0.0,
      }));

    if (booksForGrouping.length === 0) {
      return {
        id: searchLog.id,
        query: upFirstLetter(searchLog.query.query),
        searchedAt: searchLog.searchedAt,
        groupedBooks: [],
      };
    }

    const grouped = resolveAndGroupBooks(booksForGrouping);

    return {
      id: searchLog.id,
      query: upFirstLetter(searchLog.query.query),
      searchedAt: searchLog.searchedAt,
      groupedBooks: grouped,
    };
  }
}
