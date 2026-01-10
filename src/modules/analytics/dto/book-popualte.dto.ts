import { upFirstLetter } from '../../common/utils/upFirstLetter';
import { Prisma } from '../../../generated/prisma/client';

export const searchLogWithRelationsInclude = {
  query: { select: { query: true } },
  viewedBooks: {
    include: {
      book: {
        include: {
          store: true,
          format: true,
          prices: true,
        },
      },
    },
  },
} satisfies Prisma.SearchLogInclude;

// 2. Extract the type from that inclusion
export type SearchLogWithRelations = Prisma.SearchLogGetPayload<{
  include: typeof searchLogWithRelationsInclude;
}>;

export const bookPopulateDto = (searchLog: SearchLogWithRelations) => {
  const { id, query, searchedAt, viewedBooks } = searchLog;
  return {
    id,
    query: upFirstLetter(query.query),
    searchedAt,
    viewedBooks: viewedBooks.map((vb) => {
      return {
        ...vb,
        book: vb.book
          ? {
              ...vb.book,
              store: vb.book.store.title,
              format: vb.book.format.title,
              prices: vb.book.prices[0]?.price || null,
            }
          : null,
      };
    }),
  };
};
