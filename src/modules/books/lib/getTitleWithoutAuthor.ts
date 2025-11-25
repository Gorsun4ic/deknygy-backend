import {
  findFuzzyAuthorMatch,
  IFindFuzzyAuthorMatchRes,
} from './findFuzzyAuthorMatch';
import { MIN_AUTHOR_WORD_MATCH_RATIO } from '../constants/fuzzy-thresholds';
import { escapeRegExp } from '../utils/escapeRegExp';

interface ITitleWithoutAuthorRes {
  title: string;
  matchResult: IFindFuzzyAuthorMatchRes;
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

  if (!matchResult)
    return {
      title,
      author: null,
      matchResult: {
        author: null,
        matchedTitleWords: [''],
      },
    };

  const { author, matchedTitleWords } = matchResult;

  // Use the actual words found in the title (matchedTitleWords) to construct
  // the regex for removal, as these might be typos (e.g., 'Sorce' instead of 'Source').
  const authorRegexParts = matchedTitleWords.map((word) => {
    const escapedWord = escapeRegExp(word);
    // If the word ends in a non-word character (like '.'), only require a *preceding* word boundary (\b).
    // The trailing \b would fail for tokens like 'A.' because '.' is a non-word character.
    if (/\W$/.test(word)) {
      return `\\b${escapedWord}`;
    }
    // Otherwise, use full word boundaries.
    return `\\b${escapedWord}\\b`;
  });

  // 3. Combine the parts into the final regex
  const authorRegex = new RegExp(`(${authorRegexParts.join('|')})`, 'gi');

  // Remove the author words from the title and clean up spaces
  const cleanedTitle = title
    .replace(authorRegex, '')
    .trim()
    .replace(/\s{2,}/g, ' ')
    .trim();

  return {
    title: cleanedTitle,
    matchResult,
    author,
  };
};
