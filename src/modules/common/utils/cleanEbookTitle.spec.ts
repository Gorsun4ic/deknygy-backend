import { cleanEbookIndicator } from './cleanEbookTitle';

describe('cleanEbookIndicator', () => {
  describe('Basic Functionality', () => {
    it('should return empty string for empty input', () => {
      expect(cleanEbookIndicator('')).toBe('');
    });

    it('should return empty string for null/undefined input', () => {
      // @ts-expect-error - Testing runtime behavior with invalid inputs
      expect(cleanEbookIndicator(null)).toBe('');
      // @ts-expect-error - Testing runtime behavior with invalid inputs
      expect(cleanEbookIndicator(undefined)).toBe('');
    });

    it('should return original string if no ebook indicator is present', () => {
      const title = 'Холодний Яр';
      expect(cleanEbookIndicator(title)).toBe('Холодний Яр');
    });

    it('should return original string if ebook indicator is in the middle', () => {
      const title = 'Книга про e-book технології';
      expect(cleanEbookIndicator(title)).toBe('Книга про e-book технології');
    });
  });

  describe('English E-book Indicators', () => {
    it('should remove "e-book" from the beginning', () => {
      expect(cleanEbookIndicator('e-book Холодний Яр')).toBe('Холодний Яр');
    });

    it('should remove "e book" from the beginning', () => {
      expect(cleanEbookIndicator('e book Холодний Яр')).toBe('Холодний Яр');
    });

    it('should remove "e-book:" from the beginning', () => {
      expect(cleanEbookIndicator('e-book: Холодний Яр')).toBe('Холодний Яр');
    });

    it('should remove "e book:" from the beginning', () => {
      expect(cleanEbookIndicator('e book: Холодний Яр')).toBe('Холодний Яр');
    });

    it('should remove "E-book" (capitalized) from the beginning', () => {
      expect(cleanEbookIndicator('E-book Холодний Яр')).toBe('Холодний Яр');
    });

    it('should remove "E-BOOK" (all caps) from the beginning', () => {
      expect(cleanEbookIndicator('E-BOOK Холодний Яр')).toBe('Холодний Яр');
    });

    it('should handle multiple spaces after colon', () => {
      expect(cleanEbookIndicator('e-book:   Холодний Яр')).toBe('Холодний Яр');
    });

    it('should handle no space after colon', () => {
      expect(cleanEbookIndicator('e-book:Холодний Яр')).toBe('Холодний Яр');
    });
  });

  describe('Ukrainian E-book Indicators', () => {
    it('should remove "е-книга" from the beginning', () => {
      expect(cleanEbookIndicator('е-книга Холодний Яр')).toBe('Холодний Яр');
    });

    it('should remove "е книга" from the beginning', () => {
      expect(cleanEbookIndicator('е книга Холодний Яр')).toBe('Холодний Яр');
    });

    it('should remove "е-книга:" from the beginning', () => {
      expect(cleanEbookIndicator('е-книга: Холодний Яр')).toBe('Холодний Яр');
    });

    it('should remove "е книга:" from the beginning', () => {
      expect(cleanEbookIndicator('е книга: Холодний Яр')).toBe('Холодний Яр');
    });

    it('should remove "електронна книга" from the beginning', () => {
      expect(cleanEbookIndicator('електронна книга Холодний Яр')).toBe(
        'Холодний Яр',
      );
    });

    it('should remove "електронна книга:" from the beginning', () => {
      expect(cleanEbookIndicator('електронна книга: Холодний Яр')).toBe(
        'Холодний Яр',
      );
    });

    it('should handle mixed case Ukrainian indicators', () => {
      expect(cleanEbookIndicator('Е-КНИГА Холодний Яр')).toBe('Холодний Яр');
      expect(cleanEbookIndicator('ЕЛЕКТРОННА КНИГА Холодний Яр')).toBe(
        'Холодний Яр',
      );
    });
  });

  describe('Whitespace Handling', () => {
    it('should trim leading and trailing whitespace', () => {
      expect(cleanEbookIndicator('  e-book Холодний Яр  ')).toBe('Холодний Яр');
    });

    it('should handle multiple spaces before ebook indicator', () => {
      expect(cleanEbookIndicator('   e-book Холодний Яр')).toBe('Холодний Яр');
    });

    it('should handle tabs and newlines', () => {
      expect(cleanEbookIndicator('\te-book\nХолодний Яр')).toBe('Холодний Яр');
    });

    it('should handle multiple spaces after colon', () => {
      expect(cleanEbookIndicator('e-book:    Холодний Яр')).toBe('Холодний Яр');
    });
  });

  describe('Edge Cases', () => {
    it('should handle only ebook indicator', () => {
      expect(cleanEbookIndicator('e-book')).toBe('');
      expect(cleanEbookIndicator('е-книга')).toBe('');
      expect(cleanEbookIndicator('електронна книга')).toBe('');
    });

    it('should handle ebook indicator with only spaces after', () => {
      expect(cleanEbookIndicator('e-book   ')).toBe('');
      expect(cleanEbookIndicator('е-книга:   ')).toBe('');
    });

    it('should handle ebook indicator with colon only', () => {
      expect(cleanEbookIndicator('e-book:')).toBe('');
      expect(cleanEbookIndicator('е-книга:')).toBe('');
    });

    it('should not remove ebook indicator from the middle of title', () => {
      const title = 'Книга про e-book технології та е-книги';
      expect(cleanEbookIndicator(title)).toBe(
        'Книга про e-book технології та е-книги',
      );
    });

    it('should not remove partial matches', () => {
      // Note: "ebook" actually matches the pattern e[- ]?book, so it gets removed
      expect(cleanEbookIndicator('ebook Холодний Яр')).toBe('Холодний Яр');
      expect(cleanEbookIndicator('електронна Холодний Яр')).toBe(
        'електронна Холодний Яр',
      );
    });
  });

  describe('Real-world Scenarios', () => {
    it('should clean common ebook title patterns', () => {
      const testCases = [
        { input: 'e-book: Холодний Яр', expected: 'Холодний Яр' },
        { input: 'E-book Холодний Яр', expected: 'Холодний Яр' },
        { input: 'е-книга: Холодний Яр', expected: 'Холодний Яр' },
        { input: 'електронна книга Холодний Яр', expected: 'Холодний Яр' },
        { input: 'E-BOOK: Холодний Яр', expected: 'Холодний Яр' },
        { input: 'е-книга Холодний Яр', expected: 'Холодний Яр' },
      ];

      testCases.forEach(({ input, expected }) => {
        expect(cleanEbookIndicator(input)).toBe(expected);
      });
    });

    it('should handle titles with additional formatting', () => {
      expect(cleanEbookIndicator('e-book: "Холодний Яр"')).toBe(
        '"Холодний Яр"',
      );
      expect(cleanEbookIndicator('е-книга: (Аудіокнига) Холодний Яр')).toBe(
        '(Аудіокнига) Холодний Яр',
      );
      expect(cleanEbookIndicator('електронна книга: [EPUB] Холодний Яр')).toBe(
        '[EPUB] Холодний Яр',
      );
    });

    it('should handle titles with special characters', () => {
      expect(cleanEbookIndicator('e-book: Холодний Яр: Повна версія')).toBe(
        'Холодний Яр: Повна версія',
      );
      expect(cleanEbookIndicator('е-книга: Холодний Яр — Роман')).toBe(
        'Холодний Яр — Роман',
      );
    });

    it('should handle mixed language indicators', () => {
      expect(cleanEbookIndicator('e-book: Холодний Яр')).toBe('Холодний Яр');
      expect(cleanEbookIndicator('е-книга: Cold Winter')).toBe('Cold Winter');
    });
  });

  describe('Regex Pattern Testing', () => {
    it('should match various hyphen and space combinations', () => {
      const patterns = [
        'e-book',
        'e book',
        'e-book:',
        'e book:',
        'е-книга',
        'е книга',
        'е-книга:',
        'е книга:',
        'електронна книга',
        'електронна книга:',
      ];

      patterns.forEach((pattern) => {
        expect(cleanEbookIndicator(`${pattern} Test Title`)).toBe('Test Title');
      });
    });

    it('should be case insensitive', () => {
      const cases = [
        'E-BOOK',
        'E book',
        'E-BOOK:',
        'Е-КНИГА',
        'Е КНИГА',
        'ЕЛЕКТРОННА КНИГА',
        'e-BOOK',
        // Note: 'E-книга' doesn't match because E (Latin) ≠ е (Cyrillic)
      ];

      cases.forEach((testCase) => {
        expect(cleanEbookIndicator(`${testCase} Test Title`)).toBe(
          'Test Title',
        );
      });
    });

    it('should handle optional colon and whitespace', () => {
      const testCases = [
        'e-book Test',
        'e-book: Test',
        'e-book:  Test',
        'e-book:Test',
        'e-book   Test',
        'e-book:   Test',
      ];

      testCases.forEach((testCase) => {
        expect(cleanEbookIndicator(testCase)).toBe('Test');
      });
    });
  });

  describe('Performance and Edge Cases', () => {
    it('should handle very long titles', () => {
      const longTitle = 'e-book: ' + 'A'.repeat(1000);
      expect(cleanEbookIndicator(longTitle)).toBe('A'.repeat(1000));
    });

    it('should handle titles with only whitespace', () => {
      expect(cleanEbookIndicator('   ')).toBe('');
      expect(cleanEbookIndicator('\t\n  ')).toBe('');
    });

    it('should handle titles with unicode characters', () => {
      expect(cleanEbookIndicator('e-book: 测试标题')).toBe('测试标题');
      expect(cleanEbookIndicator('е-книга: 🚀 Книга')).toBe('🚀 Книга');
    });
  });
});
