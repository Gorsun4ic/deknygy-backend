import {
  findFuzzyAuthorMatch,
  type IFindFuzzyAuthorMatchRes,
} from './findFuzzyAuthorMatch'; // The file under test
import { compare2ArraysItemsSimilarity } from '../utils/compare2ArraysItemsSimilarity'; // Dependency 1
import { AUTHOR_WORD_SIMILARITY_THRESHOLD } from '../constants/fuzzy-thresholds'; // Dependency 2

// Mock the dependency function file. We use jest.mock to control what the imported
// compare2ArraysItemsSimilarity returns, allowing us to test the ratio logic reliably.
jest.mock('../utils/compare2ArraysItemsSimilarity', () => ({
  // Mock the function name that is imported
  compare2ArraysItemsSimilarity: jest.fn(),
}));

// Mock the constants file to ensure a consistent threshold is used in tests.
jest.mock('../constants/fuzzy-thresholds', () => ({
  // Mock the constant name that is cimported
  AUTHOR_WORD_SIMILARITY_THRESHOLD: 0.5,
}));

// Cast the mock function for type safety and easy access
const mockCompare = compare2ArraysItemsSimilarity as jest.Mock;

describe('findFuzzyAuthorMatch', () => {
  const TITLE_WORDS = [
    'the',
    'great',
    'gatzby',
    'by',
    'f',
    'scot',
    'fitzgeral',
  ];
  const AUTHORS_LIST = [
    'John Doe', // Author 1 (Will be checked first)
    'F. Scott Fitzgerald', // Author 2 (The expected match)
    'Jane Smith', // Author 3 (Will only be checked if earlier authors fail the ratio check)
  ];

  // Reset the mock implementation and clear call history before each test
  beforeEach(() => {
    mockCompare.mockClear();
    // Default implementation to ensure tests fail if we forget to mock a scenario
    mockCompare.mockImplementation(() => null);
  });

  // Test Case 1: Successful match - Match Ratio meets threshold (default 0.66)
  test('should return author and matched words when match ratio meets the default threshold', () => {
    const authorToMatch = 'F. Scott Fitzgerald';
    // Author has 3 words: ['F.', 'Scott', 'Fitzgerald']

    // Mock result: Matches 3 out of 3 author words. Ratio: 3/3 = 1.0 (>= 0.66)
    const matchedTitleWords = ['f', 'scot', 'fitzgeral'];
    const matchedAuthorWords = ['F.', 'Scott', 'Fitzgerald'];

    // Sequence the mock results to simulate the loop checking authors:
    // We expect the function under test to call compare2ArraysItemsSimilarity twice before returning
    mockCompare.mockImplementationOnce(() => null); // 1. John Doe -> No match
    mockCompare.mockImplementationOnce(() => [
      matchedTitleWords,
      matchedAuthorWords,
    ]); // 2. F. Scott Fitzgerald -> Match found

    const result = findFuzzyAuthorMatch(TITLE_WORDS, AUTHORS_LIST);

    expect(result).toEqual({
      author: authorToMatch,
      matchedTitleWords: matchedTitleWords,
    } as IFindFuzzyAuthorMatchRes);

    // It should stop after finding the first sufficient match
    expect(mockCompare).toHaveBeenCalledTimes(2);
  });

  // Test Case 2: Match Ratio is below the threshold, so it continues searching
  test('should continue checking authors when a match has a ratio below the threshold', () => {
    // Author 2: F. Scott Fitzgerald (3 words)
    // Mock result for Author 2: Matches 1 out of 3 author words. Ratio: 1/3 ≈ 0.33 (Below default 0.66)
    const lowMatchedTitleWords = ['f'];
    const lowMatchedAuthorWords = ['F.'];

    // Author 3: Jane Smith (2 words)
    // Mock result for Author 3: Matches 2 out of 2 author words. Ratio: 2/2 = 1.0 (Meets 0.66)
    const highMatchedTitleWords = ['jane', 'smith'];
    const highMatchedAuthorWords = ['Jane', 'Smith'];

    // Sequence the mock results:
    mockCompare.mockImplementationOnce(() => null); // 1. John Doe -> No match
    mockCompare.mockImplementationOnce(() => [
      lowMatchedTitleWords,
      lowMatchedAuthorWords,
    ]); // 2. F. Scott Fitzgerald -> Low ratio (0.33)
    mockCompare.mockImplementationOnce(() => [
      highMatchedTitleWords,
      highMatchedAuthorWords,
    ]); // 3. Jane Smith -> High ratio (1.0)

    const result = findFuzzyAuthorMatch(TITLE_WORDS, AUTHORS_LIST);

    // Expect the function to return the second successful match (Jane Smith)
    expect(result).not.toBeNull();
    expect(result?.author).toBe('Jane Smith');
    expect(mockCompare).toHaveBeenCalledTimes(3);
  });

  // Test Case 3: Match Ratio exactly meets a custom threshold
  test('should match when ratio exactly meets a custom, lower threshold', () => {
    const customThreshold = 0.5;
    const authorToMatch = 'F. Scott Fitzgerald';
    // Author has 3 words

    // Mock result: Matches 2 out of 3 author words. Ratio: 2/3 ≈ 0.666 (Meets custom threshold 0.5)
    const matchedTitleWords = ['f', 'scot'];
    const matchedAuthorWords = ['F.', 'Scott'];

    mockCompare.mockImplementationOnce(() => null); // 1. John Doe -> No match
    mockCompare.mockImplementationOnce(() => [
      matchedTitleWords,
      matchedAuthorWords,
    ]); // 2. F. Scott Fitzgerald -> Match found

    const result = findFuzzyAuthorMatch(
      TITLE_WORDS,
      AUTHORS_LIST,
      customThreshold,
    );

    expect(result).not.toBeNull();
    expect(result?.author).toBe(authorToMatch);
  });

  // Test Case 4: compare2ArraysItemsSimilarity returns null (no word similarity found)
  test('should return null if compare2ArraysItemsSimilarity returns null for all authors', () => {
    // Mock compare2ArraysItemsSimilarity to always return null
    mockCompare.mockImplementation(() => null);

    const result = findFuzzyAuthorMatch(TITLE_WORDS, AUTHORS_LIST);

    expect(result).toBeNull();
    // It should check all authors if none return a match result
    expect(mockCompare).toHaveBeenCalledTimes(AUTHORS_LIST.length);
  });

  // Test Case 5: Empty uniqueAuthors list
  test('should return null if uniqueAuthors list is empty', () => {
    const result = findFuzzyAuthorMatch(TITLE_WORDS, []);
    expect(result).toBeNull();
    expect(mockCompare).not.toHaveBeenCalled();
  });

  // Test Case 6: Author name word splitting edge case (multiple spaces)
  test('should correctly split author names with irregular spacing', () => {
    // Note: The function under test splits on /\s+/ and filters out empty strings,
    // resulting in ['Author', 'With', 'Spaces']
    const irregularAuthors = [' Author    With   Spaces ']; // 3 author words
    const authorWords = ['Author', 'With', 'Spaces'];

    // Mock result: Full match. Ratio 3/3 = 1.0
    const matchedTitleWords = ['author', 'with', 'spaces'];
    const matchedAuthorWords = authorWords;

    // The test requires the actual AUTHOR_WORD_SIMILARITY_THRESHOLD from the mocked module
    mockCompare.mockImplementationOnce(() => [
      matchedTitleWords,
      matchedAuthorWords,
    ]);

    // The function under test calls the dependency with the mocked threshold
    findFuzzyAuthorMatch(TITLE_WORDS, irregularAuthors);

    // Ensure compare was called with correctly split/trimmed author words
    expect(mockCompare).toHaveBeenCalledWith(
      TITLE_WORDS,
      authorWords,
      AUTHOR_WORD_SIMILARITY_THRESHOLD, // This is the mocked value (0.5)
    );
  });
});
