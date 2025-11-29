import { IBookInfo } from '../../common/interfaces/api/book.info';

export const uniqifyBooks = (books: IBookInfo[]): IBookInfo[] => {
  const uniqueBooksMap = new Map<string, IBookInfo>();
  for (const book of books) {
    if (book.link) {
      uniqueBooksMap.set(book.link, book);
    }
  }

  const result = Array.from(uniqueBooksMap.values());

  return result;
};
