import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { splitQueryIntoTitleAndAuthor } from '../../utils/splitQueryIntoTitleAndAuthor';
import { normalizeString } from '../../utils/normalizeString';
import Fuse from 'fuse.js';
import { scoreBooks } from './scoreBooks';
import { createGroupingKey } from '../createGroupingKey';

/**
 * Performs fuzzy search on the book list and assigns a relevance score.
 * It filters the results to only include strong matches.
 * @param query The user's search query.
 * @param books The flat array of book offers.
 * @returns A sorted array of relevant IBookInfo objects.
 */
export const fuzzyMatching = (
  query: string,
  books: IBookInfo[],
): IBookInfo[] => {
  const normalizedQuery = normalizeString(query);
  const { title: queryTitle, author: queryAuthor } =
    splitQueryIntoTitleAndAuthor(normalizedQuery);

  // Fuse.js is used for initial quick filtering
  const fuse = new Fuse(books, {
    keys: ['title', 'author'],
    threshold: 1.0, // Very lenient - let our enhanced scoring do the work
    ignoreLocation: true,
    minMatchCharLength: 1, // Very permissive
  });

  const results = fuse.search(query);

  // If Fuse.js returns no results but we have a potential split query,
  // try scoring all books manually
  if (results.length === 0 && queryAuthor) {
    console.log(
      'Fuse.js returned no results, trying manual scoring for split query',
    );
    const manualResults = books.map((book) => ({ item: book }));
    return scoreBooks(manualResults, normalizedQuery, queryTitle, queryAuthor);
  }

  // Use the extracted scoring function
  return scoreBooks(results, normalizedQuery, queryTitle, queryAuthor);
};
