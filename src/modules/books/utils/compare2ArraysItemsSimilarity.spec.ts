import { compare2ArraysItemsSimilarity } from './compare2ArraysItemsSimilarity';
import { stringSimilarity } from 'string-similarity-js';

// Mock the stringSimilarity function from the imported library
jest.mock('string-similarity-js', () => ({
  stringSimilarity: jest.fn(),
}));

// Cast the mock for easier use in test setup
const mockStringSimilarity = stringSimilarity as jest.Mock;

describe('compare2ArraysItemsSimilarity', () => {
  beforeEach(() => {
    // Clear all mock call history and reset mock return values
    jest.clearAllMocks();
  });

  // Test Case 1: Correctly asserting the returned structure for a single match
  it('should return a matched item pair in the correct [arr1, arr2] array structure when similarity is high', () => {
    const arrA = ['apple'];
    const arrB = ['apricot'];

    // Arrange: Mock similarity to ensure a match is found (e.g., 0.9)
    mockStringSimilarity.mockReturnValue(0.9);

    const result = compare2ArraysItemsSimilarity(arrA, arrB, 0.8);

    expect(mockStringSimilarity).toHaveBeenCalledWith('apple', 'apricot');
    // Corrected: Expect the return value to be the tuple [string[], string[]]
    expect(result).toEqual([['apple'], ['apricot']]);
  });

  // Test Case 2: No Match Found (Below default threshold)
  it('should return null if no similarity is found above the default 0.8 threshold', () => {
    const arrA = ['cat'];
    const arrB = ['dog', 'house'];

    // Arrange: Mock similarity to ensure no match is found (e.g., 0.5)
    mockStringSimilarity.mockReturnValue(0.5);

    const result = compare2ArraysItemsSimilarity(arrA, arrB);

    // Check that all comparisons were attempted (1*2 = 2 calls)
    expect(mockStringSimilarity).toHaveBeenCalledTimes(2);
    expect(result).toBeNull();
  });

  // Test Case 3: Custom Threshold is Used to reject a potential match
  it('should use the provided custom threshold correctly to reject a match', () => {
    const arrA = ['test string'];
    const arrB = ['test str'];
    const CUSTOM_THRESHOLD = 0.95;

    // Arrange: Set similarity (0.9) to fail the custom threshold (0.95)
    mockStringSimilarity.mockReturnValue(0.9);

    const result = compare2ArraysItemsSimilarity(arrA, arrB, CUSTOM_THRESHOLD);

    expect(mockStringSimilarity).toHaveBeenCalledWith(
      'test string',
      'test str',
    );
    expect(result).toBeNull();
  });

  // Test Case 4: Collects All Unique Matches and uses early exit for arr1
  it('should collect all unique matches and stop looking in arr2 once an arr1 item is matched', () => {
    const arr1 = ['item_A', 'item_B'];
    const arr2 = ['match_1', 'match_2', 'match_3'];
    const threshold = 0.8;

    mockStringSimilarity
      // item_A checks:
      .mockReturnValueOnce(0.5) // item_A vs match_1 (fail)
      .mockReturnValueOnce(0.95) // item_A vs match_2 (SUCCESS -> match_2 is used, break)
      // item_B checks (match_2 is skipped):
      .mockReturnValueOnce(0.9) // item_B vs match_1 (SUCCESS -> match_1 is used, break)
      // item_B vs match_3 is never called because item_B matched match_1
      .mockReturnValueOnce(0.95); // (Extra mock values if needed)

    const result = compare2ArraysItemsSimilarity(arr1, arr2, threshold);

    // Total calls should be 3 (for item_A) + 2 (for item_B) = 5
    expect(mockStringSimilarity).toHaveBeenCalledTimes(3);

    // item_A matched match_2; item_B matched match_1
    expect(result).toEqual([
      ['item_A', 'item_B'],
      ['match_2', 'match_1'],
    ]);
  });

  // Test Case 5: Ensures arr2 item is only matched once
  it('should skip an arr2 item if it has already been matched (uniqueness constraint)', () => {
    const arr1 = ['first', 'second'];
    const arr2 = ['unique_match', 'duplicate_match'];
    const threshold = 0.8;

    mockStringSimilarity
      // first checks:
      .mockReturnValueOnce(0.9) // first vs unique_match (SUCCESS -> unique_match is used)
      // second checks:
      .mockReturnValueOnce(0.5) // second vs unique_match (SKIPPED because unique_match is used) -> This mock is NEVER called
      .mockReturnValueOnce(0.9); // second vs duplicate_match (SUCCESS -> duplicate_match is used)

    const result = compare2ArraysItemsSimilarity(arr1, arr2, threshold);

    // item_A vs match_1 (1 call) -> MATCH
    // item_B vs match_1 (SKIPPED in code, 0 calls)
    // item_B vs match_2 (2nd call) -> MATCH
    // Total calls: 2
    expect(mockStringSimilarity).toHaveBeenCalledTimes(2);

    // 'first' matched 'unique_match'. 'second' correctly ignored 'unique_match' and matched 'duplicate_match'.
    expect(result).toEqual([
      ['first', 'second'],
      ['unique_match', 'duplicate_match'],
    ]);
  });
});
