import { escapeRegExp } from './escapeRegExp';

describe('escapeRegExp', () => {
  // Test Case 1: No special characters
  test('should return the original string if no regex special characters are present', () => {
    const input = 'This is a test string';
    expect(escapeRegExp(input)).toBe(input);
  });

  // Test Case 2: All special characters
  test('should escape all regex special characters', () => {
    const input = '.*+?^${}()|[]\\';
    // The expected output must have a backslash before each character, plus one extra for the existing backslash
    const expected = '\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\';
    expect(escapeRegExp(input)).toBe(expected);
  });

  // Test Case 3: Mixed characters
  test('should correctly escape special characters while leaving others untouched', () => {
    const input = 'Volume 1.0 (Chapter 5) - $100';
    const expected = 'Volume 1\\.0 \\(Chapter 5\\) - \\$100';
    expect(escapeRegExp(input)).toBe(expected);
  });

  // Test Case 4: Empty string
  test('should return an empty string when given an empty string', () => {
    expect(escapeRegExp('')).toBe('');
  });

  // Test Case 5: Complex pattern often seen in data
  test('should handle complex data including question marks and brackets', () => {
    const input = 'Q. & A [2024] / Part 1';
    const expected = 'Q\\. & A \\[2024\\] / Part 1';
    expect(escapeRegExp(input)).toBe(expected);
  });
});
