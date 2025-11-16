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
): Record<string, Record<Exclude<FormatType, 0>, IBookInfo[]>>[] {
  const tempMap: TempMap = {};

  // 1. Initial Grouping Pass
  for (const book of books) {
    // Create a single key for the book (using the full author string)
    const key = createGroupingKey(book);
    if (!tempMap[key]) {
      tempMap[key] = {
        variants: new Map(),
        formats: { 1: [], 2: [], 3: [] },
      };
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
  const result: Record<string, Record<Exclude<FormatType, 0>, IBookInfo[]>>[] =
    [];
  for (const group of Object.values(tempMap)) {
    // Select the best title variant to use as the key for the final output.
    const displayTitle = selectDisplayTitle(group);
    result.push({ [displayTitle]: group.formats });
  }

  return result;
}
