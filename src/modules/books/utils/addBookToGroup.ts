import { type IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { type IBookGroup } from '../interfaces/book.group';
import { type FormatType } from 'src/modules/common/interfaces/api/book.info';
import { normalizeString } from './normalizeString';
import { pushBookToList } from './pushBookToList';

export const addBookToGroup = (
  group: IBookGroup,
  book: IBookInfo,
  formatType: FormatType,
) => {
  // Store original title variants for later selection of the best display title.
  const normalizedVariantKey = normalizeString(book.title);

  group.variants.set(
    normalizedVariantKey,
    (group.variants.get(normalizedVariantKey) ?? 0) + 1,
  );

  // Add the book to its format list, ensuring no duplicate entries within the group
  // (A common issue when the same book/link is scraped multiple times).
  pushBookToList(group.formats[formatType], book);
};
