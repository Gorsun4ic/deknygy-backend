import { type IBookInfo } from '../../common/interfaces/api/book.info';

/**
 * Extracts a set of unique, valid author names from the array of books.
 */
export const getUniqueAuthors = (books: IBookInfo[]): string[] => {
  const authors = books
    .map((book) => book.author?.trim())
    .filter((author): author is string => !!author && author.length > 0);
  return [...new Set(authors)];
};
