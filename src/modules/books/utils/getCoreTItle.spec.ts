import { getCoreTitle } from './getCoreTitle'; // Assuming the utility is in the same directory or properly imported

describe('getCoreTitle', () => {
  // Test Case Group 1: Standard functionality
  describe('Basic Title Extraction', () => {
    it('should return the full title if no period is present', () => {
      const title = 'The Great Gatsby';
      expect(getCoreTitle(title)).toBe(title);
    });

    it('should extract the title before the first period when a subtitle is present', () => {
      const title = 'The Great Gatsby. A Story of the Jazz Age';
      expect(getCoreTitle(title)).toBe('The Great Gatsby');
    });

    it('should handle titles that are only the core title', () => {
      const title = 'The Prince';
      expect(getCoreTitle(title)).toBe('The Prince');
    });
  });

  // Test Case Group 2: Edge cases and formatting
  describe('Edge Cases and Formatting', () => {
    it('should handle a trailing period (empty subtitle)', () => {
      const title = 'Moby Dick.';
      expect(getCoreTitle(title)).toBe('Moby Dick');
    });

    it('should handle multiple periods in the string (e.g., in the subtitle or edition)', () => {
      const title = 'Ulysses. Volume I. 1922 Edition';
      // It should stop at the first period
      expect(getCoreTitle(title)).toBe('Ulysses');
    });

    it('should handle empty input', () => {
      expect(getCoreTitle('')).toBe('');
    });

    it('should handle a title that is just a period', () => {
      expect(getCoreTitle('.')).toBe('');
    });

    it('should retain leading/trailing whitespace if the input had it and the core title is extracted', () => {
      // NOTE: getCoreTitle typically doesn't handle trimming, but we verify it processes the split correctly.
      const title = ' Core Title . Subtitle ';
      expect(getCoreTitle(title)).toBe(' Core Title '); // Note the trailing space is retained from the split part
    });

    it('should handle input that is null or undefined (graceful error handling)', () => {
      // Since the implementation uses .includes() and .split(), null/undefined would throw a runtime error.
      // Assuming your function is robustly typed in TypeScript to prevent this, or handles conversion:
      // If we assume the input is always a string per the function signature:
      expect(() => getCoreTitle(null as unknown as string)).toThrow(); // Should fail if not protected
    });
  });

  // Test Case Group 3: Real-world scenarios (including your merge data)
  describe('Real-World Scenarios (Multilingual/Subtitles)', () => {
    it('should extract the core title from the provided example (Ukrainian)', () => {
      const title =
        'Величні за власним вибором. Невідомість, безлад та успіх - чому деякі процвітають усупереч усьому';
      expect(getCoreTitle(title)).toBe('Величні за власним вибором');
    });

    it('should handle an ISBN/edition number split', () => {
      const title = 'Book Title. ISBN-12345';
      expect(getCoreTitle(title)).toBe('Book Title');
    });
  });
});
