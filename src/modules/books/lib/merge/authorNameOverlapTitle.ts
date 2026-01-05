import { type TempMap } from '../../interfaces/temp.map.type';
import { getKeys } from '../../utils/getKeys';
import { normalizeString } from '../../utils/normalizeString';
import { mergeGroups } from './mergeGroups';
import { compare2ArraysItemsSimilarity } from '../../utils/compare2ArraysItemsSimilarity';
/**
 * Merges groups where the author's name might have been mistakenly included in the title,
 * or where one title is a subset of another's title core.
 * @param tempMap The map of temporary book groups.
 * @param threshold The threshold for the author similarity score.
 * @default 0.9
 * @returns void
 */

export const mergeTitleAuthorOverlapGroups = (
  tempMap: TempMap,
  threshold: number = 0.9,
) => {
  const keys = getKeys(tempMap);
  const keysWithAuthor = keys.filter((k) => k.includes('___'));
  const merges: [string, string][] = [];

  for (const destKey of keysWithAuthor) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_destTitleCore, destAuthor] = destKey.split('___');
    const normAuthor = normalizeString(destAuthor).split(' ');
    for (const srcKey of keys) {
      if (srcKey === destKey) continue;
      const [srcTitleCore] = srcKey.split('___');
      const normSrcTitleWords = srcTitleCore.split(' ').map(normalizeString);

      const result = compare2ArraysItemsSimilarity(
        normSrcTitleWords,
        normAuthor,
        threshold,
      );

      if (result) {
        merges.push([srcKey, destKey]);
      }
    }
  }

  // Execute all accumulated merges
  mergeGroups(merges, tempMap);
};
