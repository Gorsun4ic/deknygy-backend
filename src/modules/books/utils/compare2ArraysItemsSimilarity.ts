import { stringSimilarity } from 'string-similarity-js';

export const compare2ArraysItemsSimilarity = (
  array1: string[],
  array2: string[],
  threshold: number = 0.8,
) => {
  const array1Matches: string[] = [];
  const array2Matches: string[] = [];
  for (const item of array1) {
    for (const item2 of array2) {
      const similarity = stringSimilarity(item, item2);

      if (similarity >= threshold) {
        array1Matches.push(item);
        array2Matches.push(item2);
      }
    }
  }
  if (array1Matches.length > 0 && array2Matches.length > 0)
    return [array1Matches, array2Matches];

  return null;
};
