/**
 * Gets the core title of a book by removing the subtitle if it exists.
 * @param title The title of the book.
 * @returns The core title of the book.
 */
export const getCoreTitle = (title: string): string => {
  const doesStringContainDot = title.includes('.');
  if (doesStringContainDot) {
    return title.split('.')[0];
  }
  return title;
};
