import { stringSimilarity } from 'string-similarity-js';

/**
 * Calculates a robust similarity score, specifically compensating for
 * single-character insertion/deletion typos (e.g., 'wir' vs 'weir').
 */
export const getEfficientSimilarity = (
  item1: string,
  item2: string,
): number => {
  // 1. Initial Score (The base Dice Coefficient)
  let maxScore = stringSimilarity(item1, item2); // e.g., 0.4 for 'wir' vs 'weir'

  const len1 = item1.length;
  const len2 = item2.length;
  const diff = Math.abs(len1 - len2);

  // 2. Alignment Check: Only run the expensive loop if length difference is exactly 1.
  if (diff === 1) {
    const shorter = len1 < len2 ? item1 : item2;
    const longer = len1 < len2 ? item2 : item1;

    // Check all possible single-character deletions from the longer string.
    for (let i = 0; i < longer.length; i++) {
      // Create a candidate string by deleting the character at index 'i'
      const candidate = longer.substring(0, i) + longer.substring(i + 1);

      const alignedScore = stringSimilarity(shorter, candidate);

      // The best match (the score of 1.0) will be found when the typo is removed.
      maxScore = Math.max(maxScore, alignedScore);

      // Optional: If you find a perfect match, you can break the loop immediately
      if (maxScore === 1.0) return 1.0;
    }
  }

  return maxScore;
};
