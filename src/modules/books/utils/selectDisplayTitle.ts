import { type IBookGroup } from '../interfaces/book.group';

/**
 * Selects the best display title for the final group by finding the most common
 * variant. If counts are equal, the longest variant is chosen (assuming longer means less abbreviated).
 * @param group The book group object.
 * @returns The selected display title string.
 */
export const selectDisplayTitle = (group: IBookGroup): string => {
  let displayTitle = '';
  let maxCount = -1;
  let maxLength = -1;

  for (const [variant, count] of group.variants.entries()) {
    const len = variant.trim().length;
    // Selection preference: 1. Max count, 2. Max length
    if (count > maxCount || (count === maxCount && len > maxLength)) {
      displayTitle = variant;
      maxLength = len;
      maxCount = count;
    }
  }
  return displayTitle;
};
