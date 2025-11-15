import { type IBookInfo } from 'src/modules/common/interfaces/api/book.info';

/**
 * Pushes a book to a list if it is not already in the list.
 * This is used to ensure no duplicate entries within the group
 * (A common issue when the same book/link is scraped multiple times).
 * @param list The list to push the book to.
 * @param book The book to push to the list.
 * @returns The list with the book pushed to it.
 */
export const pushBookToList = (list: IBookInfo[], book: IBookInfo) => {
  if (
    Array.isArray(list) &&
    !list.some(
      (b) =>
        b.title === book.title &&
        b.link === book.link &&
        b.store === book.store,
    )
  ) {
    list.push(book);
  }
};
