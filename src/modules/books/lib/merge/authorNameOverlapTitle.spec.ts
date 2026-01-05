// 1. MOCK DECLARATIONS (Must be at the very top)
const mockGetKeys = jest.fn();
const mockStringSimilarity = jest.fn();
const mockMergeGroups = jest.fn();

// 2. MOCK MODULE IMPORTS (Jest will hoist these calls)
jest.mock('../../utils/getKeys.ts', () => ({
  getKeys: mockGetKeys,
}));
jest.mock('string-similarity-js', () => ({
  stringSimilarity: mockStringSimilarity,
}));
jest.mock('./mergeGroups', () => ({
  mergeGroups: mockMergeGroups,
}));

// 3. IMPORT SYSTEM UNDER TEST (SUT) AND TYPES
import { mergeTitleAuthorOverlapGroups } from './authorNameOverlapTitle';

// Mock TempMap type (for clarity in tests)
type MockTempMap = Record<string, any>;

describe('mergeTitleAuthorOverlapGroups', () => {
  let tempMap: MockTempMap;
  const DEFAULT_THRESHOLD = 0.9;

  beforeEach(() => {
    // Reset the map for each test
    tempMap = {
      'The Great Gatsby___F. Scott Fitzgerald': { id: 1, count: 5 },
      'The Great Gatsby F Scott Fitzgerald': { id: 2, count: 3 },
      'Moby Dick': { id: 3, count: 1 },
      'Moby Dick Herman Melville': { id: 4, count: 2 },
      'A Book Title___Jane Doe': { id: 5, count: 1 },
      'Completely Different Title': { id: 6, count: 1 },
      'Title A___Author B': { id: 7, count: 1 },
    };

    // Reset all mock implementations and call history
    jest.clearAllMocks();

    // Default mock behavior for stringSimilarity (low similarity unless overridden)
    mockStringSimilarity.mockImplementation(() => 0.0);
  });

  // Helper function to set up initial keys and author normalization
  const setupKeys = (keys: string[]) => {
    mockGetKeys.mockReturnValue(keys);
  };

  // --- FIX 1: Correct expectation, the function always calls mergeGroups ---
  it('should call mergeGroups with an empty array if no keys contain the author delimiter (___)', () => {
    setupKeys(['Title A', 'Title B', 'Title C']);
    mergeTitleAuthorOverlapGroups(tempMap);

    // Expected: The function should still call mergeGroups, but with an empty list of merges.
    expect(mockMergeGroups).toHaveBeenCalledWith([], tempMap);
    expect(mockMergeGroups).toHaveBeenCalledTimes(1);
  });

  // --- FIX 2 & 3: Ensure mockGetKeys returns the full set for these tests ---
  it('should correctly identify and merge a simple title/author overlap', () => {
    const keys = Object.keys(tempMap);
    setupKeys(keys); // getKeys returns all 7 keys

    // Dest: 'The Great Gatsby___F. Scott Fitzgerald' -> core: 'the great gatsby', author: 'fscottfitzgerald'
    // Src: 'The Great Gatsby F Scott Fitzgerald' -> normalized: 'thegreatgatsbyfscottfitzgerald'
    // Src without author ('fscottfitzgerald'): 'thegreatgatsby'
    // Similarity check: 'thegreatgatsby' vs 'thegreatgatsby' (1.0)
    mockStringSimilarity.mockImplementation((a: string, b: string) => {
      // We only care about the specific similarity check that should lead to a merge
      // The implementation splits 'The Great Gatsby F Scott Fitzgerald' by spaces
      // and normalizes each word: ['the', 'great', 'gatsby', 'f', 'scott', 'fitzgerald']
      // It compares against author parts from 'F. Scott Fitzgerald': ['f', 'scot', 'fitzgerald']
      if (
        (a === 'f' && b === 'f') ||
        (a === 'scott' && b === 'scot') ||
        (a === 'fitzgerald' && b === 'fitzgerald')
      ) {
        return 1.0;
      }
      return 0.0;
    });

    mergeTitleAuthorOverlapGroups(tempMap, DEFAULT_THRESHOLD);

    // Expect the merge to happen: Source into Destination
    expect(mockMergeGroups).toHaveBeenCalledWith(
      [
        [
          'The Great Gatsby F Scott Fitzgerald',
          'The Great Gatsby___F. Scott Fitzgerald',
        ],
      ],
      tempMap,
    );
  });

  it('should handle a case where the author name is only a partial match (should not merge)', () => {
    tempMap = {
      'Title A B___Author C': {},
      'Title A Author D': {},
    };
    setupKeys(Object.keys(tempMap));

    // normalizeString is implemented to ensure 'authorc' is not a substring of 'titleaauthord' (it shouldn't be)
    mergeTitleAuthorOverlapGroups(tempMap, DEFAULT_THRESHOLD);

    // Expected: No merges found, but mergeGroups is still called with an empty array.
    expect(mockMergeGroups).toHaveBeenCalledWith([], tempMap);
  });

  it('should require similarity above the default threshold (0.9) to merge', () => {
    tempMap = {
      'Title A___Author B': {},
      'Title A Author B': {},
    };
    setupKeys(Object.keys(tempMap));

    // Dest: 'Title A___Author B' -> core: 'titlea', author: 'authorb'
    // Src: 'Title A Author B' -> without author: 'titlea'
    // Similarity check: 'titlea' vs 'titlea'

    // Simulate high similarity (should merge)
    mockStringSimilarity.mockReturnValue(0.95);
    mergeTitleAuthorOverlapGroups(tempMap);
    expect(mockMergeGroups).toHaveBeenCalledTimes(1);
    expect(mockMergeGroups).toHaveBeenCalledWith(
      [['Title A Author B', 'Title A___Author B']],
      tempMap,
    );

    // Clear mocks before the second run
    mockMergeGroups.mockClear();
    mockStringSimilarity.mockClear();

    // Simulate similarity just below the threshold (should not merge)
    mockStringSimilarity.mockReturnValue(0.89);
    mergeTitleAuthorOverlapGroups(tempMap);
    expect(mockMergeGroups).toHaveBeenCalledTimes(1);
    expect(mockMergeGroups).toHaveBeenCalledWith([], tempMap);
  });

  it('should use a custom threshold when provided', () => {
    const CUSTOM_THRESHOLD = 0.75;
    tempMap = {
      'Title A___Author B': {},
      'Title A Author B': {},
    };
    setupKeys(Object.keys(tempMap));

    // Simulate similarity between 0.75 and 0.9 (should merge with custom threshold)
    mockStringSimilarity.mockReturnValue(0.8);
    mergeTitleAuthorOverlapGroups(tempMap, CUSTOM_THRESHOLD);
    expect(mockMergeGroups).toHaveBeenCalledTimes(1);
    expect(mockMergeGroups).toHaveBeenCalledWith(
      [['Title A Author B', 'Title A___Author B']],
      tempMap,
    );

    // Clear mocks before the second run
    mockMergeGroups.mockClear();
    mockStringSimilarity.mockClear();

    // Simulate similarity below custom threshold (should not merge)
    mockStringSimilarity.mockReturnValue(0.7);
    mergeTitleAuthorOverlapGroups(tempMap, CUSTOM_THRESHOLD);
    expect(mockMergeGroups).toHaveBeenCalledTimes(1);
    expect(mockMergeGroups).toHaveBeenCalledWith([], tempMap);
  });

  it('should handle multiple merge candidates simultaneously', () => {
    tempMap = {
      'Dest 1___John Smith': { id: 1 },
      'Src 1 John Smith': { id: 2 },
      'Dest 2___Jane Doe': { id: 3 },
      'Src 2 Jane Doe': { id: 4 },
      'Unrelated Title': { id: 5 },
    };
    setupKeys(Object.keys(tempMap));

    // Mock similarity only for matching words
    // The implementation splits src keys by spaces and normalizes each word
    // Then compares against normalized author name parts
    mockStringSimilarity.mockImplementation((a: string, b: string) => {
      // For 'Src 1 John Smith' vs 'John Smith':
      // normalized words: ['src', '1', 'john', 'smith'] vs ['john', 'smith']
      if ((a === 'john' && b === 'john') || (a === 'smith' && b === 'smith')) {
        return 1.0;
      }
      // For 'Src 2 Jane Doe' vs 'Jane Doe':
      // normalized words: ['src', '2', 'jane', 'doe'] vs ['jane', 'doe']
      if ((a === 'jane' && b === 'jane') || (a === 'doe' && b === 'doe')) {
        return 1.0;
      }
      return 0.0;
    });

    mergeTitleAuthorOverlapGroups(tempMap);

    const expectedMerges = [
      ['Src 1 John Smith', 'Dest 1___John Smith'],
      ['Src 2 Jane Doe', 'Dest 2___Jane Doe'],
    ];

    expect(mockMergeGroups).toHaveBeenCalledWith(
      expect.arrayContaining(expectedMerges),
      tempMap,
    );
    // Ensure only two merges occurred
    expect(
      (mockMergeGroups.mock.calls[0] as [string[], MockTempMap])[0].length,
    ).toBe(2);
  });

  it('should prevent merging a key into itself', () => {
    tempMap = { 'Title A___Author B': {} };
    setupKeys(Object.keys(tempMap));

    mergeTitleAuthorOverlapGroups(tempMap);

    // Expected: No merges found, but mergeGroups is still called with an empty array.
    expect(mockMergeGroups).toHaveBeenCalledWith([], tempMap);
  });
});
