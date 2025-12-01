import { type IBookGroup } from '../interfaces/book.group';
import { selectDisplayTitle } from './selectDisplayTitle';

describe('selectDisplayTitle', () => {
  // Helper to create a mock IBookGroup object
  const createMockGroup = (variants: [string, number][]): IBookGroup => ({
    // formats are not needed for this test, so we provide minimal mock data
    formats: { 1: [], 2: [], 3: [] },
    variants: new Map(variants),
    similarity: 0,
  });

  // Test Case 1: Highest count wins even if title is shorter (Count priority)
  test('should select the title variant with the highest count, regardless of length', () => {
    const group = createMockGroup([
      ['The Great Gatsby (abbreviated edition)', 10], // Length 37, Count 10
      ['The Great Gatsby', 50], // Length 16, Count 50 (Winner: Highest count)
    ]);
    expect(selectDisplayTitle(group)).toBe('The Great Gatsby');
  });

  // Test Case 2: Longest title wins when counts are equal (Length tie-breaker)
  test('should select the longest title variant when counts are equal', () => {
    const group = createMockGroup([
      ['The Great Gatsby V1', 50], // Length 19, Count 50 (Winner: Same count, longest)
      ['A Shorter Title', 50], // Length 17, Count 50
      ['The Great Gatsby V2', 50], // Length 19, Count 50
      ['The Great Gatsby V3', 50], // Length 19, Count 50
    ]);

    // Expected winner: 'The Great Gatsby V1' (First one with max count and max length)
    expect(selectDisplayTitle(group)).toBe('The Great Gatsby V1');
  });

  // Test Case 3: Handling leading/trailing whitespace
  test('should trim whitespace when calculating length but return the original variant string', () => {
    // The length comparison uses the trimmed length (16)
    const group = createMockGroup([
      ['The Great Gatsby', 5], // Length 16, Count 5
      [' The Great Gatsby ', 10], // Length 16 (after trim), Count 10 (Expected winner)
    ]);
    // The returned value should include the original whitespace
    expect(selectDisplayTitle(group)).toBe(' The Great Gatsby ');
  });

  // Test Case 4: Empty group
  test('should return an empty string for a group with no variants', () => {
    const group = createMockGroup([]);
    expect(selectDisplayTitle(group)).toBe('');
  });

  // Test Case 5: Single entry
  test('should return the single entry when only one variant exists', () => {
    const group = createMockGroup([['The One True Title', 99]]);
    expect(selectDisplayTitle(group)).toBe('The One True Title');
  });
});
