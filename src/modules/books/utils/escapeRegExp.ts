/**
 * Escapes regex special characters in a string (e.g., '.' to '\.').
 * This is crucial for correctly matching author initials in titles.
 * @param text - The string containing potential regex characters.
 * @returns The escaped string.
 */
export const escapeRegExp = (text: string): string => {
  // Escapes common regex special characters
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};
