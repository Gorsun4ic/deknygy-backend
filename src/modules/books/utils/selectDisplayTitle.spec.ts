import { type IBookGroup } from '../interfaces/book.group';
import { selectDisplayTitle } from './selectDisplayTitle';

describe('selectDisplayTitle', () => {
  // Helper to create a mock IBookGroup object
  const createMockGroup = (variants: [string, number][]): IBookGroup => ({
    // formats are not needed for this test, so we provide minimal mock data
    formats: { 1: [], 2: [], 3: [] },
    variants: new Map(variants),
  });

  // Test Case 1: Longest title wins even if its count is lower (Length priority)
  test('should select the longest title variant, regardless of lower count', () => {
    const group = createMockGroup([
      ['The Great Gatsby (abbreviated edition)', 10], // Length 37 (Winner: Longest)
      ['The Great Gatsby', 50], // Length 16 (Higher count, but shorter length)
    ]);
    expect(selectDisplayTitle(group)).toBe(
      'The Great Gatsby (abbreviated edition)',
    );
  });

  // Test Case 2: Highest count wins when lengths are equal (Count tie-breaker)
  test('should select the title variant with the highest count when lengths are equal', () => {
    // Note: All relevant titles must have the same length (18) to test the count tie-breaker.
    const group = createMockGroup([
      ['The Great Gatsby V1', 10], // Length 19, Count 10
      ['A Shorter Title', 50], // Length 17 (Shorter, ignored)
      ['The Great Gatsby V2', 50], // Length 19, Count 50 (Expected Winner: Max length and max count)
      ['The Great Gatsby V3', 40], // Length 19, Count 40
    ]);

    // Expected winner: 'The Great Gatsby V2' (Max length 19, Max count 50)
    expect(selectDisplayTitle(group)).toBe('The Great Gatsby V2');
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
