import { type IBookInfo } from '../../common/interfaces/api/book.info';
import { compare2ArraysItemsSimilarity } from '../utils/compare2ArraysItemsSimilarity';
/*  
Task: map all books, find authors in titles, move those from titles, set authors in missing field

Subtasks:
1. Find author in titles

In terms of doing that, we gotta map books, pick a book, and compare it to other books
*/

const arr: IBookInfo[] = [
  {
    title: 'Atomic Habits',
    author: 'James Collins',
    link: '1',
    price: 100,
    publisher: null,
    store: 'Yakaboo',
    available: true,
    format: 1,
  },
  {
    title: 'Atomic Habits James Collins',
    author: null,
    link: '1',
    price: 100,
    publisher: null,
    store: 'Yakaboo',
    available: true,
    format: 1,
  },
  {
    title: 'Atomic Habits Collins',
    author: null,
    link: '1',
    price: 100,
    publisher: null,
    store: 'Yakaboo',
    available: true,
    format: 1,
  },
  {
    title: 'Atomic Habits James',
    author: null,
    link: '1',
    price: 100,
    publisher: null,
    store: 'Yakaboo',
    available: true,
    format: 1,
  },
  {
    title: 'Atomic Habits',
    author: null,
    link: '1',
    price: 100,
    publisher: null,
    store: 'Yakaboo',
    available: true,
    format: 1,
  },
];

// Helper function to extract all unique, valid author names
const getUniqueAuthors = (books: IBookInfo[]): string[] => {
  const authors = books
    .map((book) => book.author?.trim())
    .filter((author): author is string => !!author && author.length > 0);
  return [...new Set(authors)];
};

const MIN_AUTHOR_WORD_MATCH_RATIO = 0.66;

export const findAndCorrectAuthorInTitleByWordMatch = (
  arr: IBookInfo[],
): IBookInfo[] => {
  const uniqueAuthors = getUniqueAuthors(arr);

  return arr.map((currentBook) => {
    if (currentBook.author) {
      return currentBook;
    }

    let foundAuthor: string | null = null;

    const titleWords = currentBook.title
      .split(/\s+/)
      .filter((w) => w.length > 0);

    for (const potentialAuthor of uniqueAuthors) {
      const authorWords = potentialAuthor
        .split(/\s+/)
        .filter((w) => w.length > 0);
      const totalAuthorWords = authorWords.length;

      const matchResults = compare2ArraysItemsSimilarity(
        titleWords,
        authorWords,
        0.8,
      );

      if (matchResults) {
        const matchedAuthorWords = matchResults[1];
        const matchRatio = matchedAuthorWords.length / totalAuthorWords;

        if (matchRatio >= MIN_AUTHOR_WORD_MATCH_RATIO) {
          // No TS error here now, as foundAuthor is string | null
          foundAuthor = potentialAuthor;
          break;
        }
      }
    }

    if (foundAuthor) {
      // FIX: foundAuthor is now guaranteed to be a 'string' here, resolving the TS2339 error.
      const authorRegex = new RegExp(
        `\\b(${foundAuthor.split(/\s+/).join('|')})\\b`,
        'gi',
      );

      const cleanedTitle = currentBook.title.replace(authorRegex, '').trim();

      return {
        ...currentBook,
        title: cleanedTitle.replace(/\s{2,}/g, ' ').trim(),
        author: foundAuthor,
        missingField: foundAuthor,
      };
    }

    return currentBook;
  });
};

console.log(findAndCorrectAuthorInTitleByWordMatch(arr));
