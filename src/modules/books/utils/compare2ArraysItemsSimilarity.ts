import { stringSimilarity } from 'string-similarity-js';

export const compare2ArraysItemsSimilarity = (
  array1: string[],
  array2: string[],
  threshold: number = 0.8,
) => {
  for (const item of array1) {
    for (const item2 of array2) {
      const similarity = stringSimilarity(item, item2);

      if (similarity >= threshold) {
        return [item, item2]; // Successfully returns and exits the entire function
      }
    }
  }

  return null;
};
