import { compare2ArraysItemsSimilarity } from './compare2ArraysItemsSimilarity';
jest.mock('string-similarity-js', () => ({
  stringSimilarity: jest.fn(),
}));

import { stringSimilarity } from 'string-similarity-js';
const mockStringSimilarity = (stringSimilarity as jest.Mock).mockReturnValue(
  0.9,
);

describe('compare2ArraysItemsSimilarity', () => {
  beforeEach(() => {
    // Clear all mock call history before each test
    jest.clearAllMocks();
  });

  // Test Case 1 (Updated): Asserting the correct behavior of the FIXED function
  it('should return a matched item pair when similarity is high', () => {
    const arrA = ['apple'];
    const arrB = ['apricot'];

    // Arrange: Mock similarity to ensure a match is found (e.g., 0.9)
    mockStringSimilarity.mockReturnValue(0.9);

    const result = compare2ArraysItemsSimilarity(arrA, arrB, 0.8);

    expect(mockStringSimilarity).toHaveBeenCalledWith('apple', 'apricot');
    // The function is now fixed, so we expect the returned match
    expect(result).toEqual(['apple', 'apricot']);
  });

  // Test Case 2: No Match Found
  it('should return null if no similarity is found above the default threshold', () => {
    const arrA = ['cat'];
    const arrB = ['dog', 'house'];

    // Arrange: Mock similarity to ensure no match is found (e.g., 0.5)
    mockStringSimilarity.mockReturnValue(0.5);

    const result = compare2ArraysItemsSimilarity(arrA, arrB);

    // Check that all comparisons were attempted (1*2 = 2 calls)
    expect(mockStringSimilarity).toHaveBeenCalledTimes(2);
    expect(result).toBeNull();
  });

  // Test Case 3: Custom Threshold is Used
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

  // Test Case 4: Testing the intended functionality using the Fixed Version

  // Test Case 4 (Refined): Ensures the multiple-match case works as intended
  it('should return the FIRST matching pair found and stop early', () => {
    const arrA = ['item_1', 'item_2'];
    const arrB = ['match_2', 'match_1'];

    // We set up the mock so that 'item_1' vs 'match_1' is a match, but it's checked last.
    // 'item_2' vs 'match_2' is the first match found (in the 3rd iteration).
    mockStringSimilarity.mockImplementation((a, b) => {
      // 1. item_1 vs match_2 -> 0.1 (No Match)
      if (a === 'item_1' && b === 'match_2') return 0.1;
      // 2. item_1 vs match_1 -> 0.1 (No Match)
      if (a === 'item_1' && b === 'match_1') return 0.1;
      // 3. item_2 vs match_2 -> 0.9 (FIRST Match Found)
      if (a === 'item_2' && b === 'match_2') return 0.9;
      // 4. item_2 vs match_1 -> (This comparison should never happen)
      return 0.1;
    });

    const result = compare2ArraysItemsSimilarity(arrA, arrB, 0.8);

    // Assert the pair that was found first
    expect(result).toEqual(['item_2', 'match_2']);

    // Check that the function only ran 3 comparisons and stopped.
    expect(mockStringSimilarity).toHaveBeenCalledTimes(3);
    expect(mockStringSimilarity).not.toHaveBeenCalledWith('item_2', 'match_1');
  });
});
