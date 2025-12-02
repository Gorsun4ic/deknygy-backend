import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class SearchLogRepository {
  constructor(private readonly prisma: PrismaService) {}

  async logSearch(telegramId: bigint, query: string, bookLinks: string[] = []) {
    const [user, existingQuery] = await Promise.all([
      this.prisma.user.findUnique({ where: { telegramId } }),
      this.prisma.query.findUnique({ where: { query } }),
    ]);

    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );
    if (!existingQuery)
      throw new NotFoundException(`Query "${query}" not found`);

    // Find existing books by their links
    const existingBooks = await this.prisma.book.findMany({
      where: {
        link: {
          in: bookLinks,
        },
      },
      select: {
        id: true,
        link: true,
      },
    });

    const bookLinkToIdMap = new Map(
      existingBooks.map((book) => [book.link, book.id]),
    );

    // Create search log
    const searchLog = await this.prisma.searchLog.create({
      data: {
        user: { connect: { id: user.id } },
        query: { connect: { id: existingQuery.id } },
        viewedBooks: {
          create: bookLinks.map((link) => {
            const bookId = bookLinkToIdMap.get(link);
            return {
              bookLink: link,
              ...(bookId ? { book: { connect: { id: bookId } } } : {}),
            };
          }),
        },
      },
      include: {
        viewedBooks: {
          include: {
            book: true,
          },
        },
      },
    });

    return searchLog;
  }

  /**
   * Links ViewedBook records to Book records after books are saved
   * @param searchLogId - Search log ID
   * @param bookLinks - Array of book links that were saved
   */
  async linkViewedBooksToSavedBooks(searchLogId: number, bookLinks: string[]) {
    if (bookLinks.length === 0) return;

    console.log(
      `[linkViewedBooksToSavedBooks] SearchLog ${searchLogId}, looking for ${bookLinks.length} books`,
    );

    // Find the books that were just saved (try exact match first)
    const savedBooks = await this.prisma.book.findMany({
      where: {
        link: {
          in: bookLinks,
        },
      },
      select: {
        id: true,
        link: true,
      },
    });

    console.log(
      `[linkViewedBooksToSavedBooks] Found ${savedBooks.length} exact matches out of ${bookLinks.length} links`,
    );

    // Get all books from DB to create comprehensive matching maps
    const allBooks = await this.prisma.book.findMany({
      select: {
        id: true,
        link: true,
      },
    });

    // Create normalization function
    const normalizeLink = (link: string) => {
      try {
        const url = new URL(link);
        return `${url.protocol}//${url.host}${url.pathname}`;
      } catch {
        return link.split('?')[0].split('#')[0];
      }
    };

    // Create maps for exact and normalized matching
    const exactLinkToBookMap = new Map<string, number>();
    const normalizedLinkToBookMap = new Map<string, number>();

    allBooks.forEach((book) => {
      exactLinkToBookMap.set(book.link, book.id);
      const normalized = normalizeLink(book.link);
      if (!normalizedLinkToBookMap.has(normalized)) {
        normalizedLinkToBookMap.set(normalized, book.id);
      }
    });

    // Get all ViewedBook records for this search log that don't have a bookId yet
    const viewedBooks = await this.prisma.viewedBook.findMany({
      where: {
        searchLogId: searchLogId,
        bookId: null,
      },
    });

    console.log(
      `[linkViewedBooksToSavedBooks] Found ${viewedBooks.length} ViewedBook records without bookId for searchLog ${searchLogId}`,
    );

    // Log sample links for debugging if no matches found
    if (viewedBooks.length > 0 && allBooks.length === 0) {
      console.log(
        `[linkViewedBooksToSavedBooks] WARNING: No books in DB! Sample ViewedBook links:`,
        viewedBooks.slice(0, 3).map((vb) => vb.bookLink),
      );
    } else if (viewedBooks.length > 0 && savedBooks.length === 0) {
      console.log(
        `[linkViewedBooksToSavedBooks] No exact matches found. Sample links we're looking for:`,
        viewedBooks.slice(0, 3).map((vb) => vb.bookLink),
      );
      console.log(
        `[linkViewedBooksToSavedBooks] Sample links in DB:`,
        allBooks.slice(0, 3).map((b) => b.link),
      );
    }

    // Update each ViewedBook to link to its Book if found
    const updatePromises = viewedBooks.map(async (vb) => {
      // Try exact match first
      let bookId = exactLinkToBookMap.get(vb.bookLink);

      // If no exact match, try normalized link match
      if (!bookId) {
        const normalized = normalizeLink(vb.bookLink);
        bookId = normalizedLinkToBookMap.get(normalized);
      }

      if (bookId) {
        try {
          await this.prisma.viewedBook.update({
            where: { id: vb.id },
            data: { book: { connect: { id: bookId } } },
          });
          return true;
        } catch (error) {
          console.error(
            `[linkViewedBooksToSavedBooks] Failed to update ViewedBook ${vb.id} with bookId ${bookId}:`,
            error,
          );
          return false;
        }
      } else {
        console.log(
          `[linkViewedBooksToSavedBooks] No match found for ViewedBook ${vb.id} with link: ${vb.bookLink}`,
        );
      }
      return false;
    });

    const results = await Promise.all(updatePromises);
    const linkedCount = results.filter((r) => r).length;

    // Log for debugging
    console.log(
      `[linkViewedBooksToSavedBooks] Linked ${linkedCount} of ${viewedBooks.length} ViewedBook records to Book records for searchLog ${searchLogId}`,
    );
    if (linkedCount < viewedBooks.length) {
      console.log(
        `[linkViewedBooksToSavedBooks] WARNING: ${viewedBooks.length - linkedCount} ViewedBook records could not be linked!`,
      );
    }
  }

  async getUserSearchLogs(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    return this.prisma.searchLog.findMany({
      where: { userId: user.id },
      include: { query: true },
      orderBy: { searchedAt: 'desc' },
    });
  }

  async getUserSearchCount(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    return this.prisma.searchLog.count({ where: { userId: user.id } });
  }

  async logUnsuccessfulSearch(telegramId: bigint, query: string) {
    const [user, existingQuery] = await Promise.all([
      this.prisma.user.findUnique({ where: { telegramId } }),
      this.prisma.query.findUnique({ where: { query } }),
    ]);

    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );
    if (!existingQuery)
      throw new NotFoundException(`Query "${query}" not found`);

    return this.prisma.unsuccessfulSearch.create({
      data: {
        user: { connect: { id: user.id } },
        query: { connect: { id: existingQuery.id } },
      },
    });
  }

  async getUnsuccessfulSearchCount(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    return this.prisma.unsuccessfulSearch.count({ where: { userId: user.id } });
  }

  async getLastUnsuccessfulCurrentDifferenceSearchCount(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    const lastUnsuccessfulSearch =
      await this.prisma.unsuccessfulSearch.findFirst({
        where: { userId: user.id },
        orderBy: { searchedAt: 'desc' },
      });

    // If there's no unsuccessful search, return total search count
    // (all searches happened "since" the last unsuccessful search)
    if (!lastUnsuccessfulSearch) {
      return this.prisma.searchLog.count({
        where: { userId: user.id },
      });
    }

    // Count searches that happened AFTER the last unsuccessful search
    const searchesSinceLastUnsuccessful = await this.prisma.searchLog.count({
      where: {
        userId: user.id,
        searchedAt: {
          gt: lastUnsuccessfulSearch.searchedAt,
        },
      },
    });

    return searchesSinceLastUnsuccessful;
  }

  async getLastNQueries(n: number) {
    return await this.prisma.searchLog.findMany({
      include: { query: true },
      orderBy: { searchedAt: 'desc' },
      take: n,
    });
  }

  async getTopQueries(n: number) {
    return await this.prisma.query.findMany({
      select: {
        query: true,
        _count: {
          select: {
            searchLogs: true,
          },
        },
      },
      orderBy: { searchLogs: { _count: 'desc' } },
      take: n,
    });
  }

  async getUserHistory(
    telegramId: bigint,
    page: number = 1,
    limit: number = 10,
  ) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    // Ensure page is a valid number and at least 1
    const pageNumber = Math.max(1, Number(page) || 1);
    // Ensure limit is a valid number, at least 1 and at most 100
    const pageSize = Math.min(Math.max(1, Number(limit) || 10), 100);
    const skip = (pageNumber - 1) * pageSize;

    const [data, total] = await Promise.all([
      this.prisma.searchLog.findMany({
        where: { userId: user.id },
        include: { query: true },
        orderBy: { searchedAt: 'desc' },
        skip,
        take: pageSize,
      }),
      this.prisma.searchLog.count({
        where: { userId: user.id },
      }),
    ]);

    const totalPages = Math.ceil(total / pageSize);
    const hasNextPage = pageNumber < totalPages;
    const hasPreviousPage = pageNumber > 1;

    return {
      username: user.username,
      data,
      pagination: {
        page: pageNumber,
        limit: pageSize,
        total,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      },
    };
  }

  /**
   * Gets all search log IDs for a user
   * @param telegramId - Telegram user ID
   * @returns Array of search log IDs with basic info (id, query, searchedAt)
   */
  async getUserSearchLogIds(telegramId: bigint) {
    const user = await this.prisma.user.findUnique({ where: { telegramId } });
    if (!user)
      throw new NotFoundException(
        `User with telegramId ${telegramId} not found`,
      );

    return this.prisma.searchLog.findMany({
      where: { userId: user.id },
      select: {
        id: true,
        query: {
          select: {
            query: true,
          },
        },
        searchedAt: true,
      },
      orderBy: { searchedAt: 'desc' },
    });
  }

  /**
   * Gets all viewed books for a specific search log
   * @param searchLogId - Search log ID
   * @returns Array of viewed books with book details if available
   */
  async getViewedBooksBySearchLogId(searchLogId: number) {
    const searchLog = await this.prisma.searchLog.findUnique({
      where: { id: searchLogId },
      include: {
        viewedBooks: {
          include: {
            book: {
              include: {
                store: true,
                format: true,
                prices: {
                  orderBy: { recordedAt: 'desc' },
                  take: 1, // Get the most recent price
                },
              },
            },
          },
          orderBy: { viewedAt: 'asc' },
        },
        query: {
          select: {
            query: true,
          },
        },
      },
    });

    if (!searchLog)
      throw new NotFoundException(
        `Search log with id ${searchLogId} not found`,
      );

    return searchLog;
  }
}
