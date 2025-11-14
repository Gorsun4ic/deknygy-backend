import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { normalizeString } from '../utils/normalizeString';
import { PREPOSITIONS } from '../constants/prepositions';
import { TRILOGY_INDICATORS } from '../constants/trilogy';

// ------------------------------------------------------------------
// Create key for grouping books
// ------------------------------------------------------------------

/**
 * Creates a unique grouping key for a book based on its normalized title and author.
 * This key is used for initial placement in the temporary map.
 * @param book The book information object.
 * @returns A composite key: [normalized_title]___[normalized_author] or just [normalized_title].
 */
export const createGroupingKey = (book: IBookInfo): string => {
  // Create a normalized author key that represents all authors
  const authorKey = book.author ? normalizeString(book.author) : '';
  const rawTitle = book?.title.toLowerCase();

  // Split the normalized title back into words (though normalization has removed non-alphanumeric, so this mainly handles remaining spaces).
  const words = rawTitle.split(/\s+/).filter(Boolean);
  // Check if the title contains any volume indicators.
  const isVolume = words.some((w) => TRILOGY_INDICATORS.has(w));

  // The final title component of the key:
  const groupingTitle = isVolume
    ? words.join('') // For volumes, keep all words (to distinguish V1 from V2, etc.)
    : words.filter((w) => !PREPOSITIONS.has(w)).join(''); // For non-trilogies, remove prepositions for better grouping (e.g., "The Book" vs "A Book").

  // Apply the aggressive normalization to the cleaned title string.
  const fullyNormalizedTitle = normalizeString(groupingTitle);
  // Construct the final key. Includes author if present, separated by '___'.
  return `${fullyNormalizedTitle || 'no_title'}${authorKey ? `___${authorKey}` : ''}`;
};
