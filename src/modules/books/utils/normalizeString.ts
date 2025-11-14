/**
 * Aggressively normalizes a string (title or author) to create a consistent, canonical key.
 * This function is central to matching similar titles/authors despite typos or variations.
 * @param str The input string (title or author).
 * @returns The aggressively normalized, lowercase string with only core alphanumeric characters.
 */
export const normalizeString = (str: string): string => {
  return (
    str
      .normalize('NFC') // Normalize Unicode
      .replace(/['’`ʼ]/g, "'") // Unify apostrophes to a standard single quote
      .replace(/ь/g, '') // Remove soft sign (a common source of variation/error)
      // Aggressive phonetic/typographic normalization for Ukrainian characters:
      .replace(/ґ/g, 'г')
      .replace(/х/g, 'г') // 'х' (kh) and 'г' (h/g) are sometimes confused/used interchangeably in quick-typing/transliteration
      .replace(/я/g, 'йа') // Normalize common vowel/consonant pairs
      .replace(/є/g, 'йе')
      .replace(/[.:,;'"()[\]—–-]/g, ' ') // Remove punctuation marks like :,;'"()[\]—–-
      .replace(/ї/g, 'и')
      .replace(/(.)\1+/g, '$1') // Collapse repeated letters (e.g., 'aa' -> 'a') to handle minor typos
      .replace(/[^a-zа-яєії0-9]/gi, '') // Remove all non-alphanumeric characters (including spaces)
      .toLowerCase()
      .trim()
  );
};
