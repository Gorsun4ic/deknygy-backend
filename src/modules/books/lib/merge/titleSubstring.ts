import { type TempMap } from '../../interfaces/temp.map.type';
import { getKeys } from '../../utils/getKeys';
import { stringSimilarity } from 'string-similarity-js';
import { getCoreTitle } from '../../utils/getCoreTitle';
import { removeSalePrefix } from 'src/modules/common/utils/removeSalePrefix';
import { mergeGroups } from './mergeGroups';

export const mergeTitleSubstring = (
  tempMap: TempMap,
  threshold: number = 0.85,
) => {
  const keys = getKeys(tempMap);
  const toProcess = new Set(keys);
  const merges: [string, string][] = [];

  // While there are keys to process, keep merging
  while (toProcess.size > 0) {
    // Step 1: Get the first key from the set and remove it from the set to prevent processing it again
    const sourceKey = [...toProcess][0]; // Get the first key from the set
    toProcess.delete(sourceKey); // Remove the key from the set to prevent processing it again
    const [sourceTitle] = sourceKey.split('___'); // Split the key into title and author parts, sourceAuthor might be undefined
    const sourceTitleWithoutSalePrefix = removeSalePrefix(sourceTitle);

    // Step 2: Iterate over the remaining keys in the set to find potential matches
    for (const destKey of toProcess) {
      const [destTitle] = destKey.split('___'); // Split the key into title and author parts, destAuthor might be undefined
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
      // Only consider it a substring match if lengths are different
      const isSubstring =
        sourceCoreTitle.length !== destCoreTitle.length &&
        longer.startsWith(shorter);

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

      // Calculate similarity for cases where neither is a substring
      const similarity = stringSimilarity(sourceCoreTitle, destCoreTitle);
      const areTitlesTheSame =
        isSubstring || firstWordsMatch || similarity >= threshold;

      if (areTitlesTheSame) {
        merges.push([sourceKey, destKey]);
      }
    }
  }

  // Step 3: Execute all accumulated merges
  mergeGroups(merges, tempMap);
  return merges; // Return for testing purposes
};
