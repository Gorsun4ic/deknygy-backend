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
  const authorWordsToMatch = matchedTitleWords.map(escapeRegExp).join('\\s+');
  const authorRegex = new RegExp(
    `${authorWordsToMatch}`, // Match only the escaped sequence
    'gi',
  );
  const cleanedTitle = title
    .replace(authorRegex, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim();

  return {
    title: cleanedTitle,
    matchResult,
    author,
  };
};
