import { type TempMap } from '../../interfaces/temp.map.type';
import { getKeys } from '../../utils/getKeys';
import { stringSimilarity } from 'string-similarity-js';
import { getCoreTitle } from '../../utils/getCoreTitle';
import { removeSalePrefix } from 'src/modules/common/utils/removeSalePrefix';
import { mergeGroups } from './mergeGroups';
import { normalizeString } from '../../utils/normalizeString';
import { MIN_TITLE_SUBSTRING_THRESHOLD } from '../../constants/fuzzy-thresholds';

/*
 * Merges groups that share the same normalized title but have a substring match.
 * @param tempMap The map of temporary book groups.
 * @param threshold The threshold for the title similarity score.
 * @default 0.85
 * @returns void
 */
export const mergeTitleSubstring = (
  tempMap: TempMap,
  threshold: number = MIN_TITLE_SUBSTRING_THRESHOLD,
) => {
  const keys = getKeys(tempMap);
  const toProcess = new Set(keys);
  const merges: [string, string][] = [];

  // While there are keys to process, keep merging
  while (toProcess.size > 0) {
    // Step 1: Get the first key from the set and remove it from the set to prevent processing it again
    const sourceKey = [...toProcess][0]; // Get the first key from the set
    toProcess.delete(sourceKey); // Remove the key from the set to prevent processing it again
    const [sourceTitle, sourceAuthor] = sourceKey.split('___'); // Split the key into title and author parts, sourceAuthor might be undefined
    const sourceTitleWithoutSalePrefix = removeSalePrefix(sourceTitle);

    // Step 2: Iterate over the remaining keys in the set to find potential matches
    for (const destKey of toProcess) {
      const [destTitle, destAuthor] = destKey.split('___'); // Split the key into title and author parts, destAuthor might be undefined
      const destTitleWithoutSalePrefix = removeSalePrefix(destTitle);

      const sourceCoreTitle = getCoreTitle(sourceTitleWithoutSalePrefix);
      const destCoreTitle = getCoreTitle(destTitleWithoutSalePrefix);

      // Check if one title is a substring of the other (for cases like "Title" vs "Title. Subtitle")
      const shorter =
        sourceCoreTitle.length < destCoreTitle.length
          ? sourceCoreTitle
          : destCoreTitle;
      const longer =
        sourceCoreTitle.length < destCoreTitle.length
          ? destCoreTitle
          : sourceCoreTitle;
      const lengthDiff = longer.length - shorter.length;

      // Calculate similarity first (needed for substring validation)
      const similarity = stringSimilarity(sourceCoreTitle, destCoreTitle);

      // Only consider it a substring match if:
      // 1. Lengths are different
      // 2. Longer starts with shorter (in normalized form)
      // 3. Length difference is significant (>= 3 chars)
      // 4. Similarity is high enough (prevents merging different words like "інститут" vs "інститутка")
      //    This ensures substring matches are actually related titles, not just word prefixes
      const isSubstring =
        sourceCoreTitle.length !== destCoreTitle.length &&
        longer.startsWith(shorter) &&
        lengthDiff >= 3 &&
        similarity >= threshold;

      console.log('isSubstring', isSubstring, sourceCoreTitle, destCoreTitle);

      // Also check if first 2 words match (for normalized titles without punctuation)
      // But only if one title is significantly longer (indicating subtitle/description)
      const sourceWords = sourceCoreTitle.trim().split(/\s+/);
      const destWords = destCoreTitle.trim().split(/\s+/);
      const minWords = Math.min(sourceWords.length, destWords.length);
      const maxWords = Math.max(sourceWords.length, destWords.length);
      const hasSignificantLengthDifference = maxWords > minWords * 1.5; // One is 50% longer
      // Check if first 2 words match (core title match)
      const firstWordsMatch =
        minWords >= 2 &&
        hasSignificantLengthDifference &&
        sourceWords[0] === destWords[0] &&
        sourceWords[1] === destWords[1];

      const areTitlesTheSame =
        isSubstring || firstWordsMatch || similarity >= threshold;
      const areAuthorsPresent = sourceAuthor && destAuthor; // Check if both authors are present
      const authorSimilarity = areAuthorsPresent
        ? stringSimilarity(
            normalizeString(sourceAuthor),
            normalizeString(destAuthor),
          )
        : 0;
      const shouldMerge =
        // Condition A: Standard typo check (same title, similar authors)
        (areTitlesTheSame && authorSimilarity >= threshold) ||
        // Condition B: Title-only into Author-Anchored Check
        // (Title parts are identical, AND one author is missing/empty, and the other is present)
        (areTitlesTheSame &&
          (sourceAuthor || destAuthor) &&
          !areAuthorsPresent); // Dest is title-only, Source is author-anchored

      if (shouldMerge) {
        merges.push([sourceKey, destKey]);
      }
    }
  }

  // Step 3: Execute all accumulated merges
  mergeGroups(merges, tempMap);
  return merges; // Return for testing purposes
};
