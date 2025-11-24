import { type IBookInfo } from '../../common/interfaces/api/book.info';
import { compare2ArraysItemsSimilarity } from '../utils/compare2ArraysItemsSimilarity';
import { stringSimilarity } from 'string-similarity-js';
import { getCoreTitle } from '../utils/getCoreTitle';

// --- Configuration Constants ---
const MIN_AUTHOR_WORD_MATCH_RATIO = 0.66;
const AUTHOR_WORD_SIMILARITY_THRESHOLD = 0.8;
const MIN_TITLE_SIMILARITY_THRESHOLD = 0.9;

// --- Helper Functions ---

/**
 * Extracts a set of unique, valid author names from the array of books.
 */
export const getUniqueAuthors = (books: IBookInfo[]): string[] => {
  const authors = books
    .map((book) => book.author?.trim())
    .filter((author): author is string => !!author && author.length > 0);
  return [...new Set(authors)];
};

/**
 * Escapes regex special characters in a string (e.g., '.' to '\.').
 * This is crucial for correctly matching author initials in titles.
 * @param text - The string containing potential regex characters.
 * @returns The escaped string.
 */
const escapeRegExp = (text: string): string => {
  // Escapes common regex special characters
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

/**
 * Attempts to find and extract an author name from a title based on fuzzy word matching.
 *
 * FIX: This function now returns an object including the words from the title
 * that matched the author, as the title cleanup regex must use the misspelled
 * words from the title for successful removal.
 *
 * @param titleWords - Words from the book title.
 * @param uniqueAuthors - Array of known author names.
 * @returns The best matching author string and the matched title words, or null.
 */
export const findFuzzyAuthorMatch = (
  titleWords: string[],
  uniqueAuthors: string[],
) => {
  for (const potentialAuthor of uniqueAuthors) {
    const authorWords = potentialAuthor
      .split(/\s+/)
      .filter((w) => w.length > 0);
    const totalAuthorWords = authorWords.length;

    // matchResults: [matchedTitleWords[], matchedAuthorWords[]]
    const matchResults = compare2ArraysItemsSimilarity(
      titleWords,
      authorWords,
      AUTHOR_WORD_SIMILARITY_THRESHOLD,
    );

    if (matchResults) {
      const [matchedTitleWords, matchedAuthorWords] = matchResults;
      const matchRatio = matchedAuthorWords.length / totalAuthorWords;

      if (matchRatio >= MIN_AUTHOR_WORD_MATCH_RATIO) {
        // Return the correct author name along with the actual words found in the title
        return {
          author: potentialAuthor,
          matchedTitleWords: matchedTitleWords,
        };
      }
    }
  }
  return null;
};

// --- Main Normalization Function ---

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

    const titleWords = currentBook.title
      .split(/\s+/)
      .filter((w) => w.length > 0);

    const matchResult = findFuzzyAuthorMatch(titleWords, uniqueAuthors);

    if (matchResult) {
      const { author: foundAuthor, matchedTitleWords } = matchResult;

      // FIX: Use the actual words found in the title (matchedTitleWords) to construct
      // the regex for removal, as these might be typos (e.g., 'Sorce' instead of 'Source').
      const authorRegexParts = matchedTitleWords.map((word) => {
        const escapedWord = escapeRegExp(word);
        // If the word ends in a non-word character (like '.'), only require a *preceding* word boundary (\b).
        // The trailing \b would fail for tokens like 'A.' because '.' is a non-word character.
        if (/\W$/.test(word)) {
          return `\\b${escapedWord}`;
        }
        // Otherwise, use full word boundaries.
        return `\\b${escapedWord}\\b`;
      });

      // 3. Combine the parts into the final regex
      const authorRegex = new RegExp(`(${authorRegexParts.join('|')})`, 'gi');

      // Remove the author words from the title and clean up spaces
      const cleanedTitle = currentBook.title
        .replace(authorRegex, '')
        .trim()
        .replace(/\s{2,}/g, ' ')
        .trim();

      return {
        ...currentBook,
        title: cleanedTitle,
        author: foundAuthor, // This is the correctly spelled author
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
