import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { splitQueryIntoTitleAndAuthor } from '../../utils/splitQueryIntoTitleAndAuthor';
import Fuse from 'fuse.js';
import { scoreBooks } from './scoreBooks';
import { normalizeBookData } from '../normalizeBooksAuthorsAndTitles';
import { getTitleWithoutAuthor } from '../getTitleWithoutAuthor';
import { getUniqueAuthors } from '../../utils/genUniqueAuthors';
/**
 * Performs fuzzy search on the book list and assigns a relevance score.
 * It filters the results to only include strong matches.
 * @param query The user's search query.
 * @param books The flat array of book offers.
 * @returns A sorted array of relevant IBookInfo objects.
 */
export const fuzzyMatching = (
  query: string,
  booksArr: IBookInfo[],
  author?: string,
): IBookInfo[] => {
  if (!author) {
    author = '';
  } else {
    console.log(author);
  }
  const books = booksArr.filter((result) => Array.isArray(result)).flat();
  const normalizedBooks = normalizeBookData(books);
  const uniqueAuthors = getUniqueAuthors(books);
  const { title: queryWithoutAuthor } = getTitleWithoutAuthor(
    query,
    uniqueAuthors,
  );
  const { title: queryTitle, author: queryAuthor } =
    splitQueryIntoTitleAndAuthor(query);
  // Fuse.js is used for initial quick filtering

  const fuse = new Fuse(normalizedBooks, {
    keys: ['title', 'author'],
    threshold: 0.5, // Very lenient - let our enhanced scoring do the work
    ignoreLocation: true,
    minMatchCharLength: 1, // Very permissive
  });

  const results = fuse.search(queryWithoutAuthor);

  // If Fuse.js returns no results but we have a potential split query,
  // try scoring all books manually

  if (results?.length === 0 && queryAuthor) {
    console.log(
      'Fuse.js returned no results, trying manual scoring for split query',
    );
    const manualResults = normalizedBooks?.map((book) => ({ item: book }));
    return scoreBooks(
      manualResults,
      queryWithoutAuthor,
      queryTitle,
      queryAuthor || author,
    );
  }

  // Use the extracted scoring function
  return scoreBooks(
    results,
    queryWithoutAuthor,
    queryTitle,
    queryAuthor || author,
  );
};
