/**
 * Removes the sale prefix from the title.
 * @param title The title to remove the sale prefix from.
 * @returns The title without the sale prefix.
 */
export const removeSalePrefix = (title: string): string => {
  if (!title) return title;

  // Define the prefixes in their original form.
  const PREFIXES = ['sale', 'акція', 'розпродаж', 'знижка', 'знижки'];

  for (const prefix of PREFIXES) {
    // Escape special regex characters in the prefix
    const escapedPrefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Regex explained:
    // ^\s* : Matches optional whitespace at the start.
    // (${escapedPrefix}): Matches the prefix (case-insensitively, 'i' flag).
    // \s* : Matches any trailing whitespace (but NOT punctuation - we preserve punctuation).
    const regex = new RegExp(`^\\s*${escapedPrefix}\\s*`, 'i');

    // Test if the prefix exists at the start of the title
    if (regex.test(title)) {
      // Perform the case-insensitive replacement on the ORIGINAL title and trim.
      return title.replace(regex, '').trim();
    }
  }

  // If no matching prefix was found at the start, return the original title.
  return title;
};
