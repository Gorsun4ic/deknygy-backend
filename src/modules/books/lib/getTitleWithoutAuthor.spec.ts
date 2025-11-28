import { getTitleWithoutAuthor } from './getTitleWithoutAuthor'; // The file under test
import {
  findFuzzyAuthorMatch,
  type IFindFuzzyAuthorMatchRes,
} from './findFuzzyAuthorMatch'; // Dependency 1 (mocked)
import { MIN_AUTHOR_WORD_MATCH_RATIO } from '../constants/fuzzy-thresholds'; // Dependency 2 (mocked)
import { escapeRegExp } from '../utils/escapeRegExp'; // Dependency 3 (mocked)

// --- Mocking Dependencies ---

// 1. Mock the fuzzy matching function (crucial for controlling match/no-match scenarios)
// This is the file that defines the findFuzzyAuthorMatch function.
jest.mock('./findFuzzyAuthorMatch', () => ({
  findFuzzyAuthorMatch: jest.fn(),
}));
const mockFindFuzzyAuthorMatch = findFuzzyAuthorMatch as jest.Mock;

// 2. Mock the constant threshold file
jest.mock('../constants/fuzzy-thresholds', () => ({
  MIN_AUTHOR_WORD_MATCH_RATIO: 0.66,
}));

// 3. Mock the regex escape utility file
jest.mock('../utils/escapeRegExp', () => ({
  // Provide the actual utility logic for escaping, as the regex construction relies on it.
  // FIX: Explicitly type 'text' as string to resolve "unsafe member access" error
  escapeRegExp: jest.fn((text: string) =>
    text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  ),
}));
const mockEscapeRegExp = escapeRegExp as jest.Mock;

// --- Test Suite ---

describe('getTitleWithoutAuthor', () => {
  const DUMMY_AUTHORS = ['A. B. C. Author', 'Jane Doe'];

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset mock implementation for fuzzy matching for each test
    mockFindFuzzyAuthorMatch.mockImplementation(() => null);

    // Ensure the escapeRegExp mock is consistent
    // FIX: Explicitly type 'text' as string here as well
    mockEscapeRegExp.mockImplementation((text: string) =>
      text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
    );
  });

  // Test Case 1: No match found
  test('should return original title and null author when fuzzy match returns null', () => {
    const originalTitle = 'The Great Book Title';
    // findFuzzyAuthorMatch is mocked to return null by default

    const result = getTitleWithoutAuthor(originalTitle, DUMMY_AUTHORS);

    expect(result.title).toBe(originalTitle);
    expect(result.author).toBeNull();
    expect(result?.matchResult).toBeNull();

    // Check that findFuzzyAuthorMatch was called with the correct ratio
    expect(mockFindFuzzyAuthorMatch).toHaveBeenCalledWith(
      ['The', 'Great', 'Book', 'Title'],
      DUMMY_AUTHORS,
      MIN_AUTHOR_WORD_MATCH_RATIO,
    );
  });

  // Test Case 2: Simple successful match and removal
  test('should remove author words and clean up single space padding', () => {
    const originalTitle = 'Book Title by John Doe';
    const matchResult: IFindFuzzyAuthorMatchRes = {
      author: 'John Doe',
      matchedTitleWords: ['by', 'John', 'Doe'],
    };

    mockFindFuzzyAuthorMatch.mockReturnValue(matchResult);

    const result = getTitleWithoutAuthor(originalTitle, DUMMY_AUTHORS);

    // Expected title: "Book Title" (single space cleaned up)
    expect(result.title).toBe('bok title');
    expect(result.author).toBe('John Doe');
    expect(result.matchResult).toEqual(matchResult);

    // Should call escapeRegExp for each matched word
    expect(mockEscapeRegExp).toHaveBeenCalledTimes(3);
  });

  // Test Case 3: Removal with double spaces and leading/trailing author words
  test('should correctly handle and clean up resulting double and boundary spaces', () => {
    const originalTitle = ' John Doe - The Best Book Ever ';
    const matchResult: IFindFuzzyAuthorMatchRes = {
      author: 'John Doe',
      matchedTitleWords: ['John', 'Doe', '-'],
    };

    mockFindFuzzyAuthorMatch.mockReturnValue(matchResult);

    const result = getTitleWithoutAuthor(originalTitle, DUMMY_AUTHORS);

    // Expected title: "The Best Book Ever" (leading/trailing spaces removed, double space reduced)
    expect(result.title).toBe('the best bok ever');
    expect(result.author).toBe('John Doe');
  });

  // Test Case 4: Handling Special Characters (e.g., A. B. C.) - verifying conditional boundary logic
  test('should use partial word boundary (\\b) for words ending in non-word chars (e.g., initials)', () => {
    const originalTitle = 'The Novel by A. B. C. Author.'; // Added a trailing dot for robustness
    // Matched words: ['by', 'A.', 'B.', 'C.', 'Author']
    const matchedTitleWords = ['by', 'A.', 'B.', 'C.', 'Author.'];
    const matchResult: IFindFuzzyAuthorMatchRes = {
      author: 'A. B. C. Author',
      matchedTitleWords: matchedTitleWords,
    };

    mockFindFuzzyAuthorMatch.mockReturnValue(matchResult);

    const result = getTitleWithoutAuthor(originalTitle, DUMMY_AUTHORS);

    // The logic should construct a regex that removes all these tokens precisely.
    // 'A.', 'B.', 'C.', 'Author.' all end in '.' (non-word char) and should use the \b${escapedWord} pattern.

    // The original title is 'The Novel by A. B. C. Author.'
    // The cleaned title should be 'The Novel'
    expect(result.title).toBe('the novel');
    expect(result.author).toBe('A. B. C. Author');
  });

  // Test Case 5: Dealing with punctuation where the author name is embedded
  test('should correctly remove words adjacent to punctuation and clean up remaining spaces/punctuation', () => {
    // Note: If the title is split by spaces, punctuation remains attached to words.
    const originalTitle = 'A Masterpiece (by John Doe!)';

    // Assuming fuzzy match found these actual title tokens
    const matchedTitleWords = ['(by', 'John', 'Doe!'];
    const matchResult: IFindFuzzyAuthorMatchRes = {
      author: 'John Doe',
      matchedTitleWords: matchedTitleWords,
    };

    mockFindFuzzyAuthorMatch.mockReturnValue(matchResult);

    const result = getTitleWithoutAuthor(originalTitle, DUMMY_AUTHORS);

    // '(by' and 'Doe!' end in non-word chars ((), !), so they use partial word boundaries.
    // Removal: "A Masterpiece (by John Doe!)" -> "A Masterpiece  " (two spaces remaining)
    // Final cleanup: "A Masterpiece"
    expect(result.title).toBe('a masterpiece');
    expect(result.author).toBe('John Doe');
  });

  // Test Case 6: Author name is the entire title
  test('should result in an empty string if the author words form the entire title', () => {
    const originalTitle = 'F. Scott Fitzgerald';
    const matchResult: IFindFuzzyAuthorMatchRes = {
      author: 'F. Scott Fitzgerald',
      matchedTitleWords: ['F.', 'Scott', 'Fitzgerald'],
    };

    mockFindFuzzyAuthorMatch.mockReturnValue(matchResult);

    const result = getTitleWithoutAuthor(originalTitle, DUMMY_AUTHORS);

    expect(result.title).toBe('');
    expect(result.author).toBe('F. Scott Fitzgerald');
  });
});
