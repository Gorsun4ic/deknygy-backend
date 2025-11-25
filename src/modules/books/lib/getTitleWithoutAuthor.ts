import {
  findFuzzyAuthorMatch,
  type IFindFuzzyAuthorMatchRes,
} from './findFuzzyAuthorMatch';
import { MIN_AUTHOR_WORD_MATCH_RATIO } from '../constants/fuzzy-thresholds';
import { escapeRegExp } from '../utils/escapeRegExp';

interface ITitleWithoutAuthorRes {
  title: string;
  matchResult: IFindFuzzyAuthorMatchRes | null;
  author: string | null;
}

export const getTitleWithoutAuthor = (
  title: string,
  authors: string[],
): ITitleWithoutAuthorRes => {
  const titleWords = title.split(/\s+/).filter((w) => w.length > 0);
  const matchResult = findFuzzyAuthorMatch(
    titleWords,
    authors,
    MIN_AUTHOR_WORD_MATCH_RATIO,
  );
  if (!matchResult) {
    return {
      title,
      author: null,
      matchResult: null,
    };
  }

  const { author, matchedTitleWords } = matchResult;

  // Use the actual words found in the title (matchedTitleWords) to construct
  // the regex for removal, as these might be typos (e.g., 'Sorce' instead of 'Source').
  const authorRegexParts = matchedTitleWords.map((word) => {
    const escapedWord = escapeRegExp(word);
    // Only apply a word boundary (\b) if the edge of the token is a word character (\w).
    // If the token starts/ends with a symbol (e.g. "(by" or "-"), \b will prevent matching
    // if the adjacent character in the text is also a symbol (like a space).
    const startBoundary = /^\w/.test(word) ? '\\b' : '';
    const endBoundary = /\w$/.test(word) ? '\\b' : '';

    return `${startBoundary}${escapedWord}${endBoundary}`;
  });

  // 3. Combine the parts into the final regex
  const innerAuthorRegex = authorRegexParts.join('|');
  const authorRegex = new RegExp(
    `[\\s\\W]*(${innerAuthorRegex})[\\s\\W]*`,
    'gi',
  );
  const cleanedTitle = title
    .replace(authorRegex, ' ')
    .trim()
    .replace(/\s{2,}/g, ' ')
    .trim();

  return {
    title: cleanedTitle,
    matchResult,
    author,
  };
};
