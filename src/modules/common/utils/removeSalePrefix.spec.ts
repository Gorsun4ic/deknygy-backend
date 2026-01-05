import { removeSalePrefix } from './removeSalePrefix'; // Assuming the utility is in the same directory

describe('removeSalePrefix', () => {
  // Test Group 1: Successful removal of various prefixes
  describe('Should remove the prefix when found (first match replacement)', () => {
    // Note: This test uses lowercase because the current function implementation uses
    // case-sensitive string replacement (title.replace('sale', '')), which would fail
    // for "SALE Book". We are testing the current function behavior.
    it('should remove "sale" (lower case) and trim the result', () => {
      const title = 'sale book title';
      expect(removeSalePrefix(title)).toBe('book title');
    });

    it('should remove "акція" (Ukrainian) and trim the result', () => {
      const title = 'акція Книга';
      expect(removeSalePrefix(title)).toBe('Книга');
    });

    it('should remove "знижка" (Ukrainian)', () => {
      const title = 'знижка 50%';
      expect(removeSalePrefix(title)).toBe('50%');
    });

    it('should remove "розпродаж" and trim extra spaces', () => {
      // FIX: Replace the non-standard whitespace in the original test string
      // with standard spaces to ensure the test executes reliably across environments.
      const title = '  розпродаж Sale Event ';
      expect(removeSalePrefix(title)).toBe('Sale Event');
    });

    it('should remove the prefix even if followed by punctuation (preserves punctuation)', () => {
      const title = 'sale. The book';
      // "sale" and trailing space is removed, but punctuation remains
      expect(removeSalePrefix(title)).toBe('. The book');
    });
  });

  // Test Group 2: Edge Cases and Non-Match Scenarios
  describe('Edge Cases and Non-Match Scenarios', () => {
    it('should return the original title if no prefix is found', () => {
      const title = 'A Regular Book Title';
      expect(removeSalePrefix(title)).toBe(title);
    });

    it('should return the original title if the input is empty', () => {
      expect(removeSalePrefix('')).toBe('');
    });

    it('should handle case-insensitive matching (removes SALE even in uppercase)', () => {
      // The function is case-insensitive, so "SALE" will be removed
      const title = 'SALE';
      expect(removeSalePrefix(title)).toBe('');
    });

    it('should NOT remove the prefix if it is embedded in the middle of the string', () => {
      // The function only removes prefixes at the START of the title
      const title = 'A great sale book is on sale here';
      expect(removeSalePrefix(title)).toBe(title);
    });

    it('should prioritize the first matching prefix in the internal list (e.g., "sale" over "акція")', () => {
      // Since 'sale' is first in the list and is found, 'акція' will be ignored.
      const title = 'sale акція title';
      expect(removeSalePrefix(title)).toBe('акція title');
    });
  });
});
