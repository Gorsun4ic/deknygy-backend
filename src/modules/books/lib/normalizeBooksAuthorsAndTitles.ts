import { type IBookInfo } from '../../common/interfaces/api/book.info';
import { stringSimilarity } from 'string-similarity-js';
import { getCoreTitle } from '../utils/getCoreTitle';
import { getUniqueAuthors } from '../utils/genUniqueAuthors';
import { MIN_TITLE_SIMILARITY_THRESHOLD } from '../constants/fuzzy-thresholds';
import { getTitleWithoutAuthor } from './getTitleWithoutAuthor';

/**
 * Maps over books to find and correct missing authors using two strategies:
 * 1. Fuzzy word matching within the title.
 * 2. Title similarity matching against books that already have an author.
 */
export const normalizeBookData = (arr: IBookInfo[]): IBookInfo[] => {
  // Pre-calculate data needed for comparisons
  const uniqueAuthors = getUniqueAuthors(arr);
  // Only need books with authors for the second strategy
  const authorSourceBooks = arr.filter((book) => book.author);

  return arr.map((currentBook) => {
    // 1. Skip books that already have an author (primary goal is to fill missing data)
    if (currentBook.author) {
      return currentBook;
    }

    // --- Strategy 1: Find Author within Title (Fuzzy Match) ---
    const { title, author, matchResult } = getTitleWithoutAuthor(
      currentBook.title,
      uniqueAuthors,
    );

    if (matchResult) {
      return {
        ...currentBook,
        title,
        author, // This is the correctly spelled author
      };
    }

    // --- Strategy 2: Find Author via Title Similarity against known books ---

    // Use Array.prototype.find() instead of forEach to prevent side-effects
    // and make the intent clear: we are looking for the *first* matching book.
    const matchingBook = authorSourceBooks.find((book) => {
      const coreTitleA = getCoreTitle(book.title);
      const coreTitleB = getCoreTitle(currentBook.title);

      return (
        stringSimilarity(coreTitleA, coreTitleB) >=
        MIN_TITLE_SIMILARITY_THRESHOLD
      );
    });

    if (matchingBook) {
      // Return the current book with the author copied from the matching source book
      return {
        ...currentBook,
        author: matchingBook.author,
      };
    }

    // 3. Return the book unchanged if both strategies fail
    return currentBook;
  });
};
