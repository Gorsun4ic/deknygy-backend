import { type TempMap } from '../../interfaces/temp.map.type';
import { addBookToGroup } from '../../utils/addBookToGroup';
import { createGroupingKey } from '../createGroupingKey';
import {
  type IBookInfo,
  type FormatType,
} from 'src/modules/common/interfaces/api/book.info';
import { mergeAuthorTypoGroups } from './authorTypo';
import { selectDisplayTitle } from '../../utils/selectDisplayTitle';
import { mergeTitleAuthorOverlapGroups } from './authorNameOverlapTitle';
import { mergeTitleSubstring } from './titleSubstring';

/**
 * Main function to process a list of book records, group them by normalized title
 * and author, and then merge related groups based on similarity rules.
 * @param books An array of raw IBookInfo objects.
 * @returns An array of final, de-duplicated book groups, keyed by the selected display title.
 */
export function resolveAndGroupBooks(
  books: IBookInfo[],
): Record<
  string,
  { books: Record<Exclude<FormatType, 0>, IBookInfo[]>; similarity: number }
>[] {
  const tempMap: TempMap = {};

  // 1. Initial Grouping Pass
  for (const book of books) {
    // Create a single key for the book (using the full author string)
    const key = createGroupingKey(book);
    const currentBookSimilarity = book._titleSimilarity ?? 0;

    if (!tempMap[key]) {
      tempMap[key] = {
        variants: new Map(),
        formats: { 1: [], 2: [], 3: [] },
        similarity: currentBookSimilarity,
      };
    } else {
      // If the group exists, check if this new book is a better match.
      // If this book has 1.0 and the group currently has 0.72, bump the group to 1.0.
      if (currentBookSimilarity > tempMap[key].similarity) {
        tempMap[key].similarity = currentBookSimilarity;
      }
    }
    // Use format, defaulting to 1 (Print) if missing or invalid.
    let formatType: FormatType = book.format ?? 1;
    if (![1, 2, 3].includes(formatType)) formatType = 1;
    addBookToGroup(tempMap[key], book, formatType);
  }

  // 2. Merging Passes (Addressing typos, missing data, and structural overlaps)
  mergeTitleAuthorOverlapGroups(tempMap);
  mergeAuthorTypoGroups(tempMap);
  mergeTitleSubstring(tempMap);

  // 3. Final Output Generation
  const result: Record<
    string,
    { books: Record<Exclude<FormatType, 0>, IBookInfo[]>; similarity: number }
  >[] = [];
  for (const group of Object.values(tempMap)) {
    // Select the best title variant to use as the key for the final output.
    const displayTitle = selectDisplayTitle(group);

    result.push({
      [displayTitle]: {
        books: group.formats,
        similarity: group.similarity,
      },
    });
  }

  return result.sort((a, b) => {
    const dataA = Object.values(a)[0];
    const dataB = Object.values(b)[0];

    // 1. Sort by Similarity (Descending)
    const simDiff = dataB.similarity - dataA.similarity;
    if (simDiff !== 0) {
      return simDiff;
    }

    // 2. Calculate TOTAL books (sum of lengths of '1', '2', and '3')
    // We use reduce to sum up lengths of all arrays inside the 'books' object
    const countA = Object.values(dataA.books).reduce(
      (sum, arr) => sum + arr.length,
      0,
    );
    const countB = Object.values(dataB.books).reduce(
      (sum, arr) => sum + arr.length,
      0,
    );

    // 3. Sort by Total Count (Descending)
    return countB - countA;
  });
}
