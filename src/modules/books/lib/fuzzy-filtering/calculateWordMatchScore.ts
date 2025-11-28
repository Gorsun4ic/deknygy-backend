import { normalizeString } from '../../utils/normalizeString';
import { stringSimilarity } from 'string-similarity-js';
import { MIN_WORD_MATCH_SCORE } from '../../constants/fuzzy-thresholds';
/**
 * Performs word-by-word matching between query words and author name words.
 * Returns a score indicating how well the query words match the author.
 * @param queryWords Array of words from the query.
 * @param authorName The author's name to match against.
 * @returns A score between 0 and 1 indicating match quality.
 */
export const calculateWordMatchScore = (
  queryWords: string[],
  authorName: string,
  threshold: number = MIN_WORD_MATCH_SCORE,
): number => {
  if (!authorName || queryWords.length === 0) return 0;

  const authorWords = normalizeString(authorName).split(/\s+/).filter(Boolean);
  if (authorWords.length === 0) return 0;

  let totalScore = 0;
  let matchedWords = 0;

  // For each query word, find the best match in author words
  for (const queryWord of queryWords) {
    let bestMatch = 0;

    for (const authorWord of authorWords) {
      const similarity = stringSimilarity(queryWord, authorWord);
      bestMatch = Math.max(bestMatch, similarity);
    }

    // Only count words that have a reasonable match (threshold 0.6)
    if (bestMatch >= threshold) {
      totalScore += bestMatch;
      matchedWords++;
    }
  }

  // Return average score of matched words, but penalize if not all query words matched
  if (matchedWords === 0) return 0;

  const averageScore = totalScore / matchedWords;
  const coveragePenalty = matchedWords / queryWords.length; // Penalty for incomplete matches

  return averageScore * coveragePenalty;
};
