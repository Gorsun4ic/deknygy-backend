import { calculateWordMatchScore } from './calculateWordMatchScore';

// --- MOCKING DEPENDENCIES ---

jest.mock('../../utils/normalizeString', () => ({
  normalizeString: jest.fn((str: string) => str.toLowerCase()),
}));

jest.mock('string-similarity-js', () => ({
  stringSimilarity: jest.fn(),
}));

import { normalizeString } from '../../utils/normalizeString';
import { stringSimilarity } from 'string-similarity-js';

const mockNormalizeString = normalizeString as jest.MockedFunction<
  typeof normalizeString
>;
const mockStringSimilarity = stringSimilarity as jest.MockedFunction<
  typeof stringSimilarity
>;

describe('calculateWordMatchScore', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockNormalizeString.mockImplementation((str: string) => str.toLowerCase());
  });

  describe('Basic Matching', () => {
    it('should return high score when all query words match author words perfectly', () => {
      const queryWords = ['andy', 'weir'];
      const authorName = 'Andy Weir';

      mockStringSimilarity.mockImplementation((q: string, a: string) => {
        if (q === 'andy' && a === 'andy') return 1.0;
        if (q === 'andy' && a === 'weir') return 0.0;
        if (q === 'weir' && a === 'andy') return 0.0;
        if (q === 'weir' && a === 'weir') return 1.0;
        return 0;
      });

      const score = calculateWordMatchScore(queryWords, authorName);

      // Both words match perfectly (1.0 each), all words matched (coverage = 1.0)
      // Expected: (1.0 + 1.0) / 2 * 1.0 = 1.0
      expect(score).toBeCloseTo(1.0);
      expect(mockStringSimilarity).toHaveBeenCalledTimes(4); // 2 query words * 2 author words
    });

    it('should return lower score for partial matches', () => {
      const queryWords = ['andy', 'weir'];
      const authorName = 'Andy Weir';

      mockStringSimilarity.mockImplementation((q: string, a: string) => {
        if (q === 'andy' && a === 'andy') return 0.8;
        if (q === 'andy' && a === 'weir') return 0.0;
        if (q === 'weir' && a === 'andy') return 0.0;
        if (q === 'weir' && a === 'weir') return 0.9;
        return 0;
      });

      const score = calculateWordMatchScore(queryWords, authorName);

      // Average: (0.8 + 0.9) / 2 = 0.85, coverage: 1.0
      // Expected: 0.85 * 1.0 = 0.85
      expect(score).toBeCloseTo(0.85);
    });

    it('should apply coverage penalty when not all query words match', () => {
      const queryWords = ['andy', 'weir', 'smith'];
      const authorName = 'Andy Weir';

      mockStringSimilarity.mockImplementation((q: string, a: string) => {
        if (q === 'andy' && a === 'andy') return 1.0;
        if (q === 'andy' && a === 'weir') return 0.0;
        if (q === 'weir' && a === 'andy') return 0.0;
        if (q === 'weir' && a === 'weir') return 1.0;
        if (q === 'smith') return 0.5; // Below threshold 0.6, won't match
        return 0;
      });

      const score = calculateWordMatchScore(queryWords, authorName);

      // Only 2 out of 3 words matched
      // Average: (1.0 + 1.0) / 2 = 1.0, coverage: 2/3 = 0.667
      // Expected: 1.0 * 0.667 = 0.667
      expect(score).toBeCloseTo(0.667, 2);
    });
  });

  describe('Threshold Behavior', () => {
    it('should return 0 when all matches are below threshold', () => {
      const queryWords = ['xyz'];
      const authorName = 'Andy Weir';

      mockStringSimilarity.mockImplementation(() => 0.5); // Below default threshold 0.6

      const score = calculateWordMatchScore(queryWords, authorName);

      expect(score).toBe(0);
    });

    it('should use custom threshold when provided', () => {
      const queryWords = ['andy'];
      const authorName = 'Andy Weir';
      const customThreshold = 0.5;

      mockStringSimilarity.mockImplementation((q: string, a: string) => {
        if (q === 'andy' && a === 'andy') return 0.55; // Above 0.5, below 0.6
        return 0;
      });

      const score = calculateWordMatchScore(
        queryWords,
        authorName,
        customThreshold,
      );

      // With threshold 0.5, 0.55 should match
      expect(score).toBeCloseTo(0.55);
    });

    it('should only count matches above threshold', () => {
      const queryWords = ['andy', 'xyz'];
      const authorName = 'Andy Weir';

      mockStringSimilarity.mockImplementation((q: string, a: string) => {
        if (q === 'andy' && a === 'andy') return 0.9; // Above threshold
        if (q === 'xyz') return 0.4; // Below threshold
        return 0;
      });

      const score = calculateWordMatchScore(queryWords, authorName);

      // Only 'andy' matches (0.9), coverage: 1/2 = 0.5
      // Expected: 0.9 * 0.5 = 0.45
      expect(score).toBeCloseTo(0.45);
    });
  });

  describe('Edge Cases', () => {
    it('should return 0 for empty query words', () => {
      const score = calculateWordMatchScore([], 'Andy Weir');
      expect(score).toBe(0);
      expect(mockStringSimilarity).not.toHaveBeenCalled();
    });

    it('should return 0 for empty author name', () => {
      const score = calculateWordMatchScore(['andy'], '');
      expect(score).toBe(0);
      expect(mockStringSimilarity).not.toHaveBeenCalled();
    });

    it('should return 0 for null/undefined author name', () => {
      // @ts-expect-error - Testing runtime behavior with invalid input
      expect(calculateWordMatchScore(['andy'], null)).toBe(0);
      // @ts-expect-error - Testing runtime behavior with invalid input
      expect(calculateWordMatchScore(['andy'], undefined)).toBe(0);
    });

    it('should handle author name with only whitespace', () => {
      mockNormalizeString.mockReturnValue('');
      const score = calculateWordMatchScore(['andy'], '   ');
      expect(score).toBe(0);
    });

    it('should handle single word query and author', () => {
      mockStringSimilarity.mockReturnValue(0.8);

      const score = calculateWordMatchScore(['andy'], 'Andy');

      // Single match: 0.8, coverage: 1.0
      expect(score).toBeCloseTo(0.8);
      expect(mockStringSimilarity).toHaveBeenCalledWith('andy', 'andy');
    });
  });

  describe('Best Match Selection', () => {
    it('should select the best match for each query word from multiple author words', () => {
      const queryWords = ['john'];
      const authorName = 'John Michael Smith';

      mockStringSimilarity.mockImplementation((q: string, a: string) => {
        if (q === 'john' && a === 'john') return 1.0;
        if (q === 'john' && a === 'michael') return 0.2;
        if (q === 'john' && a === 'smith') return 0.3;
        return 0;
      });

      const score = calculateWordMatchScore(queryWords, authorName);

      // Should use best match (1.0) from 'john'
      expect(score).toBeCloseTo(1.0);
    });

    it('should handle multiple query words with multiple author words', () => {
      const queryWords = ['john', 'smith'];
      const authorName = 'John Michael Smith';

      mockStringSimilarity.mockImplementation((q: string, a: string) => {
        if (q === 'john' && a === 'john') return 1.0;
        if (q === 'john' && a === 'michael') return 0.2;
        if (q === 'john' && a === 'smith') return 0.3;
        if (q === 'smith' && a === 'john') return 0.3;
        if (q === 'smith' && a === 'michael') return 0.2;
        if (q === 'smith' && a === 'smith') return 1.0;
        return 0;
      });

      const score = calculateWordMatchScore(queryWords, authorName);

      // Best matches: john->john (1.0), smith->smith (1.0)
      // Average: 1.0, coverage: 1.0
      expect(score).toBeCloseTo(1.0);
    });
  });

  describe('Normalization', () => {
    it('should normalize author name before matching', () => {
      const queryWords = ['andy'];
      const authorName = 'Andy Weir';

      mockNormalizeString.mockReturnValue('andy weir');
      mockStringSimilarity.mockReturnValue(0.8);

      calculateWordMatchScore(queryWords, authorName);

      expect(mockNormalizeString).toHaveBeenCalledWith('Andy Weir');
      expect(mockStringSimilarity).toHaveBeenCalledWith('andy', 'andy');
      expect(mockStringSimilarity).toHaveBeenCalledWith('andy', 'weir');
    });

    it('should handle normalized author name with multiple spaces', () => {
      const queryWords = ['andy'];
      const authorName = 'Andy  Weir';

      mockNormalizeString.mockReturnValue('andy weir');
      mockStringSimilarity.mockReturnValue(0.8);

      const score = calculateWordMatchScore(queryWords, authorName);

      // Should split correctly and match
      expect(score).toBeGreaterThan(0);
      expect(mockStringSimilarity).toHaveBeenCalled();
    });
  });

  describe('Score Calculation', () => {
    it('should calculate correct average and coverage penalty', () => {
      const queryWords = ['a', 'b', 'c'];
      const authorName = 'A B';

      mockStringSimilarity.mockImplementation((q: string, a: string) => {
        if (q === 'a' && a === 'a') return 0.9;
        if (q === 'b' && a === 'b') return 0.8;
        if (q === 'c') return 0.4; // Below threshold
        return 0;
      });

      const score = calculateWordMatchScore(queryWords, authorName);

      // Matched: a (0.9), b (0.8)
      // Average: (0.9 + 0.8) / 2 = 0.85
      // Coverage: 2/3 = 0.667
      // Expected: 0.85 * 0.667 = 0.567
      expect(score).toBeCloseTo(0.567, 2);
    });

    it('should return 0 when no words match above threshold', () => {
      const queryWords = ['xyz', 'abc'];
      const authorName = 'Andy Weir';

      mockStringSimilarity.mockReturnValue(0.5); // Below threshold 0.6

      const score = calculateWordMatchScore(queryWords, authorName);

      expect(score).toBe(0);
    });
  });
});
