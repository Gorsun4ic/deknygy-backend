import { stringSimilarity } from 'string-similarity-js';

/**
 * Compares two string arrays to find fuzzy matches based on a similarity threshold.
 * It ensures that each item in arr2 (the source array, e.g., author words) is matched only once.
 *
 * @param arr1 The first array of strings (e.g., words from a title).
 * @param arr2 The second array of strings (e.g., words from an author name).
 * @param threshold The minimum similarity ratio required for a match (0 to 1).
 * @returns An array containing two arrays: [matchedItemsInArr1, matchedItemsInArr2].
 * Returns null if no matches are found.
 */
export const compare2ArraysItemsSimilarity = (
  arr1: string[],
  arr2: string[],
  threshold: number = 0.8,
): [string[], string[]] | null => {
  const matchedArr1: string[] = [];
  const matchedArr2: string[] = [];
  // Use a Set to track indices of arr2 that have already been matched to ensure unique matches in arr2.
  const matchedIndices2 = new Set<number>();

  for (const item1 of arr1) {
    for (let i = 0; i < arr2.length; i++) {
      const item2 = arr2[i];
      if (matchedIndices2.has(i)) {
        continue; // Skip items in arr2 that are already matched
      }

      // Assuming 'string-similarity-js' library is used via 'stringSimilarity' import
      const similarity = stringSimilarity(item1, item2);

      if (similarity >= threshold) {
        // Collect the matched items
        matchedArr1.push(item1);
        matchedArr2.push(item2);
        matchedIndices2.add(i);
        break; // Move to the next item in arr1, as we found a match for item1
      }
    }
  }

  if (matchedArr1.length === 0) {
    return null;
  }

  return [matchedArr1, matchedArr2];
};
