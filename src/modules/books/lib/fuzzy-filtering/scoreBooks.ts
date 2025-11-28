import { normalizeString } from '../../utils/normalizeString';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { stringSimilarity } from 'string-similarity-js';
import { calculateWordMatchScore } from './calculateWordMatchScore';
import { getCoreTitle } from '../../utils/getCoreTitle';
import {
  THRESHOLD_TITLE_ONLY_EXTRA_HIGH,
  THRESHOLD_TITLE_ONLY_TOP,
  THRESHOLD_TITLE_ONLY_FAIR,
  THRESHOLD_TITLE_ONLY_LOW,
  WEIGHT_AUTHOR_SIMILARITY,
  BONUS_STRONG_COMBINED,
  BONUS_MODERATE_COMBINED,
  BONUS_SMALL_COMBINED,
  AUTHOR_WORD_SIMILARITY_THRESHOLD,
} from '../../constants/fuzzy-thresholds';

/**
 * Scores a list of books based on query matching.
 * @param results Array of Fuse.js results or manual book items.
 * @param normalizedQuery The normalized search query.
 * @param queryTitle The potential title part of the query.
 * @param queryAuthor The potential author part of the query.
 * @returns A sorted array of scored IBookInfo objects.
 */
export const scoreBooks = (
  results: Array<{ item: IBookInfo }>,
  normalizedQuery: string,
  queryTitle: string,
  queryAuthor: string | null,
): IBookInfo[] => {
  const scored = results.map((r) => {
    const bookTitleNorm = normalizeString(getCoreTitle(r.item.title));
    const bookAuthorNorm = r.item.author ? normalizeString(r.item.author) : '';
    let finalScore = 0; // Renamed 'score' to 'finalScore' for clarity

    // --- 1. Base Title Similarity (always calculated) ---
    // Use queryTitle if split, otherwise use normalizedQuery (they are often the same)
    const titleToCompare = queryAuthor ? queryTitle : normalizedQuery;
    const titleSimilarity = stringSimilarity(titleToCompare, bookTitleNorm);

    // Start the score with Title Similarity (base weight of 1.0)
    finalScore += titleSimilarity;

    // --- 2. Enhanced Scoring for Split Queries (Title + Author) ---
    if (queryAuthor) {
      // Calculate direct Author Similarity
      const authorSimilarity = stringSimilarity(queryAuthor, bookAuthorNorm);

      // Calculate fuzzy Author Word Match Score (for typos/partial matches)
      const queryWords = queryAuthor.split(/\s+/).filter(Boolean); // Use ONLY author words
      const authorWordMatchScore = calculateWordMatchScore(
        queryWords,
        bookAuthorNorm,
      );

      // A. Reward Direct Author Similarity
      finalScore += authorSimilarity * WEIGHT_AUTHOR_SIMILARITY;

      // B. Apply Bonuses based on combined performance
      // Prioritize the better of the two author scores (similarity or fuzzy match)
      const effectiveAuthorScore = Math.max(
        authorSimilarity,
        authorWordMatchScore,
      );

      if (
        titleSimilarity > THRESHOLD_TITLE_ONLY_TOP &&
        effectiveAuthorScore > THRESHOLD_TITLE_ONLY_TOP
      ) {
        finalScore += BONUS_STRONG_COMBINED;
      } else if (
        titleSimilarity > THRESHOLD_TITLE_ONLY_FAIR &&
        effectiveAuthorScore > THRESHOLD_TITLE_ONLY_FAIR
      ) {
        finalScore += BONUS_MODERATE_COMBINED;
      } else if (
        titleSimilarity > THRESHOLD_TITLE_ONLY_LOW &&
        effectiveAuthorScore > THRESHOLD_TITLE_ONLY_LOW
      ) {
        finalScore += BONUS_SMALL_COMBINED;
      }
    }
    // --- 3. Enhanced Scoring for Title-Only Queries ---
    else {
      // Reward exact matches/high similarity more reliably
      if (
        titleSimilarity > THRESHOLD_TITLE_ONLY_EXTRA_HIGH ||
        bookTitleNorm === normalizedQuery
      ) {
        // Use high similarity instead of includes() for robustness
        finalScore += BONUS_STRONG_COMBINED;
      }
    }

    return {
      ...r.item,
      score: finalScore,
      _titleSimilarity: titleSimilarity, // Store for threshold adjustment
    } as IBookInfo & { score: number; _titleSimilarity: number };
  });

  // --- Final Filtering and Sorting ---
  // For split queries (with author), be more lenient with books that have strong title matches
  // even if author doesn't match well, because merge logic will group books with same title
  // but different authors together. This ensures we don't lose relevant books during fuzzy filtering.
  const baseThreshold = queryAuthor
    ? THRESHOLD_TITLE_ONLY_FAIR
    : THRESHOLD_TITLE_ONLY_TOP;

  const highMatch = scored.filter((b) => {
    const score = b.score;
    const titleSim = b._titleSimilarity;

    // If title similarity is very high (>0.7), be more lenient with threshold
    // This accounts for cases where books have same title but different/missing authors
    // which will be merged later in the grouping phase
    if (queryAuthor && titleSim > AUTHOR_WORD_SIMILARITY_THRESHOLD) {
      // Use a lower threshold (0.35) for high title similarity matches
      // This ensures books with strong title matches aren't filtered out
      // even if author doesn't match, since merge logic will handle grouping
      return score >= 0.35;
    }

    return score >= baseThreshold;
  });

  // Sort by best score and remove temporary _titleSimilarity property
  return highMatch
    .sort((a, b) => b.score - a.score)
    .map(({ _titleSimilarity, ...book }) => book);
};
