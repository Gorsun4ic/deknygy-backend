import { compare2ArraysItemsSimilarity } from '../utils/compare2ArraysItemsSimilarity';
import { AUTHOR_WORD_SIMILARITY_THRESHOLD } from '../constants/fuzzy-thresholds';

export interface IFindFuzzyAuthorMatchRes {
  author: string | null;
  matchedTitleWords: string[];
}

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
  threshold = 0.66,
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

      if (matchRatio >= threshold) {
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
