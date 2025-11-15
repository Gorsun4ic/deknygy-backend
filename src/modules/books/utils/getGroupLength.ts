import { IBookGroup } from '../interfaces/book.group';
import { FormatType } from 'src/modules/common/interfaces/api/book.info';

export const getFormatLength = (
  formats: IBookGroup['formats'],
  formatType: FormatType,
): number => {
  if (!formats[formatType]) {
    return 0;
  }
  return formats[formatType].length;
};

/**
 * Gets the length of a book group.
 * @param group The book group.
 * @returns The length of the book group.
 */
export const getGroupLength = (group: IBookGroup): number => {
  return (
    getFormatLength(group.formats, 1) +
    getFormatLength(group.formats, 2) +
    getFormatLength(group.formats, 3)
  );
};
