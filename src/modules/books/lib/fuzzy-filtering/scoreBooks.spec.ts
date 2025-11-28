// --- MOCKING DEPENDENCIES (must be before imports) ---

// 1. Mock normalizeString: Use a simple, predictable mock for testing.
jest.mock('../../utils/normalizeString', () => ({
  normalizeString: jest.fn((str: string) => str.toLowerCase()),
}));

// 2. Mock string-similarity-js
jest.mock('string-similarity-js', () => ({
  stringSimilarity: jest.fn(),
}));

// 3. Mock calculateWordMatchScore
jest.mock('./calculateWordMatchScore', () => ({
  calculateWordMatchScore: jest.fn(),
}));

import { scoreBooks } from './scoreBooks';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { normalizeString } from '../../utils/normalizeString';
import { stringSimilarity } from 'string-similarity-js';
import { calculateWordMatchScore } from './calculateWordMatchScore';

const mocks = {
  stringSimilarity: stringSimilarity as jest.MockedFunction<
    typeof stringSimilarity
  >,
  calculateWordMatchScore: calculateWordMatchScore as jest.MockedFunction<
    typeof calculateWordMatchScore
  >,
};
// Mock Book Data
const mockBookData: Array<{ item: IBookInfo }> = [
  {
    item: { title: 'The Martian', author: 'Andy Weir', isbn: '1' } as IBookInfo,
  },
  {
    item: {
      title: 'The Martian Chronicles',
      author: 'Ray Bradbury',
      isbn: '2',
    } as IBookInfo,
  },
  {
    item: {
      title: 'Foundation',
      author: 'Isaac Asimov',
      isbn: '3',
    } as IBookInfo,
  },
  {
    item: {
      title: 'The Three-Body Problem',
      author: 'Cixin Liu',
      isbn: '4',
    } as IBookInfo,
  },
];

describe('scoreBooks', () => {
  const mockNormalizeStringFn = normalizeString as jest.MockedFunction<
    typeof normalizeString
  >;

  beforeEach(() => {
    // We clear all mocks here, and then set their implementations inside each 'it' block
    mocks.stringSimilarity.mockClear();
    mocks.calculateWordMatchScore.mockClear();
    mockNormalizeStringFn.mockClear();
    // Default implementation: return lowercase string
    mockNormalizeStringFn.mockImplementation((str: string) =>
      str.toLowerCase(),
    );
  });

  // Helper function to assert scores based on IBookInfo.title
  const getScoreByTitle = (
    results: IBookInfo[],
    title: string,
  ): number | undefined => {
    const book = results.find((b) => b.title === title);
    // @ts-expect-error: We know score is added by the function
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return book ? book.score : undefined;
  };

  // --- SCENARIO 1: TITLE-ONLY QUERY (queryAuthor === null) ---
  describe('when using a Title-Only Query (no author split)', () => {
    const normalizedQuery = 'the martian';
    const queryTitle = 'the martian';
    const queryAuthor = null;
    const titleMartian = 'The Martian';
    const titleMartianChronicles = 'The Martian Chronicles';
    const titleFoundation = 'Foundation';
    const titleThreeBody = 'The Three-Body Problem';

    it('should correctly score, filter, and sort books based on title similarity and exact match bonus', () => {
      // Setup Mocks for Title-Only Query (Title-to-Title Similarity)
      // Book 1 (Martian): High Sim (1.0) + includes('the martian'). Expected Score: 1.0 + 0.5 = 1.5
      // Book 2 (Chronicles): Medium Sim (0.8) + NOT includes. Expected Score: 0.8
      // Book 3 (Foundation): Low Sim (0.55) + NOT includes. Expected Score: 0.55 (Should be filtered out, as 0.55 < THRESHOLD_TITLE_ONLY_TOP (0.6))
      // Book 4 (Three-Body): Very Low Sim (0.1). Expected Score: 0.1 (Should be filtered out)
      mocks.stringSimilarity.mockImplementation((q: string, t: string) => {
        if (q === normalizedQuery) {
          if (t === 'the martian') return 1.0;
          if (t === 'the martian chronicles') return 0.8;
          if (t === 'foundation') return 0.55;
          if (t === 'the three-body problem') return 0.1;
        }
        return 0;
      });

      const results = scoreBooks(
        mockBookData,
        normalizedQuery,
        queryTitle,
        queryAuthor,
      );

      // 1. Check Filtering (Book 3 and 4 should be filtered out)
      expect(results.length).toBe(2);
      expect(results.some((b) => b.title === titleFoundation)).toBe(false);
      expect(results.some((b) => b.title === titleThreeBody)).toBe(false);

      // 2. Check Scores (using high tolerance for floating point)
      expect(getScoreByTitle(results, titleMartian)).toBeCloseTo(2); // 1.0 + 0.5 (bonus)
      expect(getScoreByTitle(results, titleMartianChronicles)).toBeCloseTo(0.8); // 0.8

      // 3. Check Sorting (Score 1.5 should be first, 0.8 second)
      expect(results[0].title).toBe(titleMartian);
      expect(results[1].title).toBe(titleMartianChronicles);
    });

    it('should use high similarity threshold (0.95) for bonus when includes() fails (e.g. slight typo)', () => {
      // Query: "the martiam" (typo)
      const typoQuery = 'the martiam';

      // Book 1 (Martian): High Sim (0.96) > 0.95, so bonus applies. Score: 0.96 + 0.5 = 1.46
      // Book 2 (Chronicles): Low Sim (0.5). Score: 0.5 (Filtered)
      mocks.stringSimilarity.mockImplementation((q: string, t: string) => {
        if (q === typoQuery) {
          // Check normalized title directly
          if (t === 'the martian') return 0.96;
          if (t === 'the martian chronicles') return 0.5;
        }
        return 0;
      });

      const results = scoreBooks(
        mockBookData,
        typoQuery,
        typoQuery,
        queryAuthor,
      );

      // Check Scores
      expect(results.length).toBe(1);
      expect(getScoreByTitle(results, titleMartian)).toBeCloseTo(1.96);
    });
  });

  // --- SCENARIO 2: SPLIT QUERY (queryAuthor is present) ---
  describe('when using a Split Query (Title + Author)', () => {
    const normalizedQuery = 'martian andy weir';
    const queryTitle = 'martian';
    const queryAuthor = 'andy weir';
    const titleMartian = 'The Martian';
    const titleMartianChronicles = 'The Martian Chronicles';
    const titleFoundation = 'Foundation';
    const titleThreeBody = 'The Three-Body Problem';

    it('should correctly score and prioritize books with high combined title and author match', () => {
      // Expected Threshold: THRESHOLD_TITLE_ONLY_FAIR (0.5)

      // Book 1 (Martian): Strong combined match. Score: 2.35 (Rank 1)
      // Book 2 (Chronicles): Good title, poor author. Score: 0.8 (Rank 3)
      // Book 3 (Foundation): Moderate match. Score: 1.425 (Rank 2)
      // Book 4 (Three-Body): Low match. Score: 0.35 (Filtered out)

      mocks.stringSimilarity.mockImplementation((q: string, t: string) => {
        if (q === queryTitle) {
          if (t === 'the martian') return 0.9;
          if (t === 'the martian chronicles') return 0.7;
          if (t === 'the three-body problem') return 0.3;
          if (t === 'foundation') return 0.55;
        }
        if (q === queryAuthor) {
          if (t === 'andy weir') return 0.9;
          if (t === 'ray bradbury') return 0.2;
          if (t === 'cixin liu') return 0.1;
          if (t === 'isaac asimov') return 0.55;
        }
        return 0;
      });

      mocks.calculateWordMatchScore.mockImplementation(
        (qWords: string[], t: string) => {
          if (t === 'andy weir') return 0.9;
          if (t === 'ray bradbury') return 0.2;
          if (t === 'cixin liu') return 0.1;
          if (t === 'isaac asimov') return 0.5;
          return 0;
        },
      );

      const results = scoreBooks(
        mockBookData,
        normalizedQuery,
        queryTitle,
        queryAuthor,
      );

      // 1. Check Filtering (Book 4 should be filtered out because score 0.35 < 0.5 threshold)
      expect(results.length).toBe(3);
      expect(results.some((b) => b.title === titleThreeBody)).toBe(false);

      // 2. Check Scores
      expect(getScoreByTitle(results, titleMartian)).toBeCloseTo(2.35);
      expect(getScoreByTitle(results, titleFoundation)).toBeCloseTo(1.425);
      expect(getScoreByTitle(results, titleMartianChronicles)).toBeCloseTo(0.8);

      // 3. Check Sorting
      expect(results[0].title).toBe(titleMartian); // 2.35
      expect(results[1].title).toBe(titleFoundation); // 1.425
      expect(results[2].title).toBe(titleMartianChronicles); // 0.8
    });
  });

  // --- SCENARIO 3: THRESHOLD EDGE CASES ---
  describe('when filtering results', () => {
    it('should use the correct threshold for split and non-split queries', () => {
      const nonSplitQuery = 'title only'; // Threshold: THRESHOLD_TITLE_ONLY_TOP (0.6)
      const splitQuery = 'title by author'; // Threshold: THRESHOLD_TITLE_ONLY_FAIR (0.5)
      const splitTitle = 'title';
      const splitAuthor = 'author';

      // Setup Mocks for non-split (Book 1 scores 0.61, Book 2 scores 0.59)
      mocks.stringSimilarity.mockImplementation((q: string, t: string) => {
        if (q === nonSplitQuery) {
          if (t === 'the martian') return 0.61; // Should Pass (0.61 >= 0.6)
          if (t === 'the martian chronicles') return 0.59; // Should Fail (0.59 < 0.6)
        }
        if (q === splitTitle && t === 'the martian') return 0.49; // Should Fail (0.49 < 0.5)
        if (q === splitTitle && t === 'the martian chronicles') return 0.51; // Should Pass (0.51 >= 0.5)

        if (q === splitAuthor) return 0; // Keep author similarity low
        return 0;
      });
      mocks.calculateWordMatchScore.mockReturnValue(0); // Ensure no bonuses affect filtering

      // Test Non-Split Threshold (0.6)
      const resultsNonSplit = scoreBooks(
        mockBookData.slice(0, 2),
        nonSplitQuery,
        nonSplitQuery,
        null,
      );
      expect(resultsNonSplit.length).toBe(1);
      expect(resultsNonSplit[0].title).toBe('The Martian');

      // Test Split Threshold (0.5)
      const resultsSplit = scoreBooks(
        mockBookData.slice(0, 2),
        splitQuery,
        splitTitle,
        splitAuthor,
      );
      expect(resultsSplit.length).toBe(1);
      expect(resultsSplit[0].title).toBe('The Martian Chronicles');
    });
  });
});
