import { IBookInfo } from '../../common/interfaces/api/book.info';

export const unifyBooks = (books: IBookInfo[]): IBookInfo[] => {
  console.log(`🔍 Before deduplication: ${books.length} books`);

  const uniqueBooksMap = new Map<string, IBookInfo>();
  for (const book of books) {
    if (book.link) {
      uniqueBooksMap.set(book.link, book);
    }
  }

  const result = Array.from(uniqueBooksMap.values());
  console.log(`✅ After deduplication: ${result.length} books`);

  return result;
};
