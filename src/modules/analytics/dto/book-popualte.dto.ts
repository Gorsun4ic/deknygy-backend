import { upFirstLetter } from '../../common/utils/upFirstLetter';
import {
  SearchLog,
  ViewedBook,
  Book,
  Store,
  Format,
  BookPrice,
} from '@prisma/client';
import { resolveAndGroupBooks } from '../../books/lib/merge/resolveAndGroupBooks';
type SearchLogWithRelations = SearchLog & {
  query: {
    query: string;
  };
  viewedBooks: Array<
    ViewedBook & {
      book:
        | (Book & {
            store: Store;
            format: Format;
            prices: BookPrice[];
          })
        | null;
    }
  >;
};

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
