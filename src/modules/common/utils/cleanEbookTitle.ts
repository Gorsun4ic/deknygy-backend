/**
 * Removes common E-book indicators (like "E-book:", "е-книга:") from the start of a title string.
 * Uses a single regular expression for clean removal.
 * @param rawTitle The raw book title string.
 * @returns The title string with the E-book indicator removed and leading/trailing spaces trimmed.
 */
export const cleanEbookIndicator = (rawTitle: string): string => {
  if (!rawTitle) return '';

  // --- UPDATED REGEX ---
  // The colon (:) and surrounding whitespace are now optional, but will be removed if present.
  const ebookPattern =
    /^\s*(e[- ]?book|е[- ]?книга|електронна книга)[:\s]*\s*/i;

  return rawTitle.trim().replace(ebookPattern, '').trim();
};
