import { normalizeString } from './normalizeString';

/**
 * Attempts to split a query into potential title and author parts.
 * This version prioritizes common semantic markers (like "by") before falling back
 * to a word-count heuristic (prioritizing shorter author names).
 *
 * @param query The normalized search query.
 * @returns An object with potential title and author parts.
 */
export const splitQueryIntoTitleAndAuthor = (
  query: string,
): { title: string; author: string | null } => {
  const normalizedQuery = query.trim();
  const words = normalizedQuery.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  if (wordCount < 2) {
    return { title: normalizedQuery, author: null };
  }

  // --- Step 1: Look for Semantic Markers ---

  for (let i = 1; i < wordCount; i++) {
    const currentWord = words[i].toLowerCase();

    let delimiterLength = 0; // How many words the delimiter takes up

    // 1. Check multi-word delimiters first (e.g., "author of", "written by")
    if (i + 1 < wordCount) {
      const twoWordDelimiter = words
        .slice(i, i + 2)
        .join(' ')
        .toLowerCase();

      if (
        twoWordDelimiter === 'author of' ||
        twoWordDelimiter === 'written by'
      ) {
        delimiterLength = 2;
      }
    }

    // 2. Check single-word delimiters (only if no multi-word delimiter was found starting here)
    if (delimiterLength === 0) {
      if (
        currentWord === 'by' ||
        currentWord === 'from' ||
        currentWord === 'author'
      ) {
        delimiterLength = 1;
      }
    }

    if (delimiterLength > 0) {
      // The title ends at the word *before* the delimiter starts, which is index 'i'
      const titlePart = words.slice(0, i).join(' ');
      // The author starts *after* the entire delimiter phrase
      const authorStartIndex = i + delimiterLength;
      const authorPart = words.slice(authorStartIndex).join(' ');

      // Perform the crucial length check on the final title/author parts
      if (titlePart.length >= 3 && authorPart.length >= 3) {
        return { title: titlePart, author: authorPart };
      }

      // If the semantic split fails the length check (e.g., "Title by A"),
      // we abandon the semantic split attempt and proceed to the heuristic/default.
      break;
    }
  }

  // --- Step 3: Default ---
  return { title: normalizedQuery, author: null };
};
