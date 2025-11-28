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
});
