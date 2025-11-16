import { type TempMap } from '../../interfaces/temp.map.type';
import { stringSimilarity } from 'string-similarity-js';
import { normalizeString } from '../../utils/normalizeString';
import { getKeys } from '../../utils/getKeys';
import { getGroupLength } from '../../utils/getGroupLength';
import { mergeGroups } from './mergeGroups';

/**
 * Merges groups that share the same normalized title but have slightly different
 * normalized author names (e.g., due to minor typos in the source data).
 * @param tempMap The map of temporary book groups.
 * @param threshold The threshold for the author similarity score.
 */
export const mergeAuthorTypoGroups = (
  tempMap: TempMap,
  threshold: number = 0.85,
) => {
  const keys = getKeys(tempMap);
  const toProcess = new Set(keys);
  const merges: [string, string][] = []; // [sourceKey, destinationKey]

  // While there are keys to process, keep merging
  while (toProcess.size > 0) {
    // Step 1: Get the first key from the set and remove it from the set to prevent processing it again
    const sourceKey = [...toProcess][0]; // Get the first key from the set
    toProcess.delete(sourceKey); // Remove the key from the set to prevent processing it again
    const [sourceTitle, sourceAuthor] = sourceKey.split('___'); // Split the key into title and author parts, sourceAuthor might be undefined

    // Step 2: Iterate over the remaining keys in the set to find potential matches
    for (const destKey of toProcess) {
      const [destTitle, destAuthor] = destKey.split('___'); // Split the key into title and author parts, destAuthor might be undefined

      // Calculate author similarity (0 if one or both are missing)
      const areAuthorsPresent = sourceAuthor && destAuthor; // Check if both authors are present
      const authorSimilarity = areAuthorsPresent
        ? stringSimilarity(
            normalizeString(sourceAuthor),
            normalizeString(destAuthor),
          )
        : 0; // Similarity is 0 if either is missing for standard typo checks
      // Step 2.1: Check if the keys should be merged
      // --- MERGE CONDITIONS ---
      const areTitlesTheSame =
        stringSimilarity(sourceTitle, destTitle) >= threshold;

      if (!areTitlesTheSame) {
        continue; // Skip if the core titles are different
      }

      const shouldMerge =
        // Condition A: Standard typo check (same title, similar authors)
        (areTitlesTheSame && authorSimilarity >= threshold) ||
        // Condition B: Title-only into Author-Anchored Check
        // (Title parts are identical, AND one author is missing/empty, and the other is present)
        (areTitlesTheSame && (sourceAuthor || destAuthor)); // Dest is title-only, Source is author-anchored

      // Step 2.2: If the keys should be merged, merge them
      if (shouldMerge) {
        // If the keys should be merged, merge them
        const srcGroup = tempMap[sourceKey]; // Get the source group
        const dstGroup = tempMap[destKey]; // Get the destination group

        // Use the group with the author as the destination to preserve the author key.
        // Preference logic needs to favor the key with the author

        // Rerun the count and length check to decide the final display key.
        const srcCount = getGroupLength(srcGroup);
        const dstCount = getGroupLength(dstGroup);

        // If authors are different/missing, favor the one with an author, or just higher count/longer key
        if (
          (sourceAuthor && !destAuthor) || // Source has author, Dest does not
          srcCount > dstCount ||
          (srcCount === dstCount && sourceAuthor?.length >= destAuthor?.length)
        ) {
          // Merge destKey into sourceKey (keep source)
          merges.push([destKey, sourceKey]);
          toProcess.delete(destKey);
        } else {
          // Merge sourceKey into destKey (keep dest)
          merges.push([sourceKey, destKey]);
          toProcess.delete(sourceKey);
          break;
        }
      }
    }
  }

  // Step 3: Execute all accumulated merges
  mergeGroups(merges, tempMap);
};
