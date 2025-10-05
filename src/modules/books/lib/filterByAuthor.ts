import { stringSimilarity } from 'string-similarity-js';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';

export const filterByAuthor = (
  books: IBookInfo[],
): {
  uniqueAuthors: (string | null)[];
  groupedBooks: { title: string; books: IBookInfo[]; highPriority: boolean }[];
} => {
  // Extract unique authors
  const authors = books.map((book) => book.author).filter(Boolean);
  const uniqueAuthors = Array.from(new Set(authors));

  // Group books by normalized title
  const groups = new Map<string, IBookInfo[]>();

  for (const book of books) {
    const normalizedTitle = book.title.trim().toLowerCase();
    if (!groups.has(normalizedTitle)) {
      groups.set(normalizedTitle, []);
    }
    groups.get(normalizedTitle)!.push(book);
  }

  // Build final grouped structure
  const groupedBooks = Array.from(groups.entries()).map(
    ([title, groupBooks]) => {
      const hasAuthor = groupBooks.some((b) => !!b.author);
      return {
        title,
        books: groupBooks,
        highPriority: hasAuthor, // mark group highPriority if at least one has author
      };
    },
  );

  return {
    uniqueAuthors,
    groupedBooks,
  };
};
