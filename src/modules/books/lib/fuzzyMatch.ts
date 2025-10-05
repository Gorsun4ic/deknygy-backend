import Fuse from 'fuse.js';
import { IBookInfo } from '../../common/interfaces/api/book.info';
import { stringSimilarity } from 'string-similarity-js';
import { filterByAuthor } from './filterByAuthor';

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '') // Remove punctuation
    .replace(/\s+/g, ' ') // Collapse spaces
    .trim();

const getTextBetweenDots = (text: string) => {
  return text
    .split('.') // split by dot
    .map((p) => p.trim()) // remove spaces
    .filter((p) => p.length > 0);
};

export const fuzzyBooks = (
  query: string,
  books: IBookInfo[],
): { title: string; score: number }[] => {
  const normalizedQuery = normalize(query);

  const fuse = new Fuse(books, {
    keys: ['title', 'author'],
    threshold: 0.5, // fuzzy tolerance
    ignoreLocation: true,
    minMatchCharLength: 3,
  });

  const results = fuse.search(query);

  const scored = results.map((r) => {
    const bookTitleNorm = normalize(r.item.title);
    let score = 0;
    const queryTitleSimilirity = stringSimilarity(
      normalizedQuery,
      bookTitleNorm,
    );
    score += queryTitleSimilirity; // weight title similarity

    const exactMatch = bookTitleNorm.includes(normalizedQuery);

    if (exactMatch) {
      score += 0.8; // boost for exact match
    }

    const textBetweenDots = getTextBetweenDots(r.item.title);
    const compareBeforeSymbolsTextToQuery = textBetweenDots.map((part) => {
      const partNorm = normalize(part);
      const similarity = stringSimilarity(normalizedQuery, partNorm);
      score += similarity;
    });

    return {
      title: r.item.title,
      score,
    };
  });

  const highMatch = Array.from(
    new Map(
      scored.filter((b) => b.score >= 0.5).map((b) => [b.title, b]),
    ).values(),
  );

  // Sort by best score
  return highMatch.sort((a, b) => b.score - a.score);
};
