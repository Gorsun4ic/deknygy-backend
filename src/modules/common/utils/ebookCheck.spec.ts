import { EBOOK_INDICATORS, isEbook } from './ebookCheck';

describe('ebookCheck', () => {
  describe('EBOOK_INDICATORS constant', () => {
    it('should contain all expected ebook indicators', () => {
      const expectedIndicators = [
        'e-book',
        'електронна книга',
        'е-книга',
        'е книга',
        'ebook',
        'e book',
      ];

      expect(EBOOK_INDICATORS).toEqual(expectedIndicators);
    });

    it('should have 6 indicators', () => {
      expect(EBOOK_INDICATORS).toHaveLength(6);
    });
  });

  describe('isEbook function', () => {
    describe('Basic Functionality', () => {
      it('should return false for empty string', () => {
        expect(isEbook('')).toBe(false);
      });

      it('should return false for null/undefined input', () => {
        // @ts-expect-error - Testing runtime behavior with invalid inputs
        expect(isEbook(null)).toBe(false);
        // @ts-expect-error - Testing runtime behavior with invalid inputs
        expect(isEbook(undefined)).toBe(false);
      });

      it('should return false for title without ebook indicators', () => {
        expect(isEbook('Холодний Яр')).toBe(false);
        expect(isEbook('Cold Winter')).toBe(false);
        expect(isEbook('Regular Book Title')).toBe(false);
      });

      it('should return true for title with ebook indicators', () => {
        expect(isEbook('e-book Холодний Яр')).toBe(true);
        expect(isEbook('електронна книга Холодний Яр')).toBe(true);
        expect(isEbook('ebook Cold Winter')).toBe(true);
      });
    });

    describe('English E-book Indicators', () => {
      it('should detect "e-book" indicator', () => {
        expect(isEbook('e-book Холодний Яр')).toBe(true);
        expect(isEbook('E-book Холодний Яр')).toBe(true);
        expect(isEbook('E-BOOK Холодний Яр')).toBe(true);
        expect(isEbook('e-BOOK Холодний Яр')).toBe(true);
      });

      it('should detect "електронна книга" indicator', () => {
        expect(isEbook('електронна книга Холодний Яр')).toBe(true);
        expect(isEbook('ЕЛЕКТРОННА КНИГА Холодний Яр')).toBe(true);
        expect(isEbook('Електронна Книга Холодний Яр')).toBe(true);
      });

      it('should detect "е-книга" indicator', () => {
        expect(isEbook('е-книга Холодний Яр')).toBe(true);
        expect(isEbook('Е-КНИГА Холодний Яр')).toBe(true);
        expect(isEbook('Е-книга Холодний Яр')).toBe(true);
      });

      it('should detect "е книга" indicator', () => {
        expect(isEbook('е книга Холодний Яр')).toBe(true);
        expect(isEbook('Е КНИГА Холодний Яр')).toBe(true);
        expect(isEbook('Е книга Холодний Яр')).toBe(true);
      });

      it('should detect "ebook" indicator', () => {
        expect(isEbook('ebook Холодний Яр')).toBe(true);
        expect(isEbook('EBOOK Холодний Яр')).toBe(true);
        expect(isEbook('Ebook Холодний Яр')).toBe(true);
      });

      it('should detect "e book" indicator', () => {
        expect(isEbook('e book Холодний Яр')).toBe(true);
        expect(isEbook('E BOOK Холодний Яр')).toBe(true);
        expect(isEbook('E Book Холодний Яр')).toBe(true);
      });
    });

    describe('Punctuation Handling', () => {
      it('should handle titles with punctuation around indicators', () => {
        expect(isEbook('e-book: Холодний Яр')).toBe(true);
        expect(isEbook('е-книга. Холодний Яр')).toBe(true);
        expect(isEbook('ebook, Холодний Яр')).toBe(true);
        expect(isEbook('електронна книга; Холодний Яр')).toBe(true);
        expect(isEbook("e book' Холодний Яр")).toBe(true);
        expect(isEbook('е-книга" Холодний Яр')).toBe(true);
        expect(isEbook('ebook( Холодний Яр')).toBe(true);
        expect(isEbook('електронна книга) Холодний Яр')).toBe(true);
        expect(isEbook('e book[ Холодний Яр')).toBe(true);
        expect(isEbook('е-книга] Холодний Яр')).toBe(true);
        expect(isEbook('ebook— Холодний Яр')).toBe(true);
        expect(isEbook('електронна книга– Холодний Яр')).toBe(true);
        expect(isEbook('e book- Холодний Яр')).toBe(true);
      });

      it('should handle multiple punctuation marks', () => {
        expect(isEbook('e-book: "Холодний Яр"')).toBe(true);
        expect(isEbook('е-книга. (Аудіокнига) Холодний Яр')).toBe(true);
        expect(isEbook('ebook, [EPUB] Холодний Яр')).toBe(true);
      });
    });

    describe('Position Independence', () => {
      it('should detect indicators at the beginning', () => {
        expect(isEbook('e-book Холодний Яр')).toBe(true);
        expect(isEbook('електронна книга Холодний Яр')).toBe(true);
        expect(isEbook('ebook Холодний Яр')).toBe(true);
      });

      it('should detect indicators in the middle', () => {
        expect(isEbook('Книга e-book про технології')).toBe(true);
        expect(isEbook('Розділ електронна книга про історію')).toBe(true);
        expect(isEbook('Глава ebook про майбутнє')).toBe(true);
      });

      it('should detect indicators at the end', () => {
        expect(isEbook('Холодний Яр e-book')).toBe(true);
        expect(isEbook('Холодний Яр електронна книга')).toBe(true);
        expect(isEbook('Холодний Яр ebook')).toBe(true);
      });
    });

    describe('Whitespace Handling', () => {
      it('should handle multiple spaces around indicators', () => {
        expect(isEbook('e-book   Холодний Яр')).toBe(true);
        expect(isEbook('  електронна книга  Холодний Яр')).toBe(true);
        expect(isEbook('ebook    Холодний Яр')).toBe(true);
      });

      it('should handle tabs and newlines', () => {
        expect(isEbook('e-book\tХолодний Яр')).toBe(true);
        expect(isEbook('електронна книга\nХолодний Яр')).toBe(true);
        expect(isEbook('ebook\r\nХолодний Яр')).toBe(true);
      });

      it('should handle mixed whitespace', () => {
        expect(isEbook('e-book \t\n Холодний Яр')).toBe(true);
        expect(isEbook('електронна книга  \t  Холодний Яр')).toBe(true);
      });
    });

    describe('Case Sensitivity', () => {
      it('should be case insensitive', () => {
        const testCases = [
          'E-BOOK',
          'E book',
          'EBOOK',
          'Е-КНИГА',
          'Е КНИГА',
          'ЕЛЕКТРОННА КНИГА',
          'e-BOOK',
          'е-книга',
          'електронна книга',
        ];

        testCases.forEach((testCase) => {
          expect(isEbook(`${testCase} Холодний Яр`)).toBe(true);
        });
      });
    });

    describe('Edge Cases', () => {
      it('should handle titles with only the indicator', () => {
        expect(isEbook('e-book')).toBe(true);
        expect(isEbook('електронна книга')).toBe(true);
        expect(isEbook('ebook')).toBe(true);
      });

      it('should handle titles with indicators and only punctuation', () => {
        expect(isEbook('e-book:')).toBe(true);
        expect(isEbook('е-книга.')).toBe(true);
        expect(isEbook('ebook,')).toBe(true);
      });

      it('should handle titles with indicators and only whitespace', () => {
        expect(isEbook('e-book   ')).toBe(true);
        expect(isEbook('  електронна книга  ')).toBe(true);
        expect(isEbook('ebook\t\n')).toBe(true);
      });

      it('should not detect partial matches', () => {
        expect(isEbook('book')).toBe(false);
        expect(isEbook('електронна')).toBe(false);
        expect(isEbook('книга')).toBe(false);
        expect(isEbook('e-')).toBe(false);
        expect(isEbook('-книга')).toBe(false);
      });

      it('should detect indicators even when part of other words', () => {
        // Note: The function uses includes() so it detects substrings
        expect(isEbook('ebookstore')).toBe(true);
        expect(isEbook('myebook')).toBe(true);
        expect(isEbook('електроннакнига')).toBe(false); // No space between words
        expect(isEbook('е-книгаstore')).toBe(true);
      });
    });

    describe('Real-world Scenarios', () => {
      it('should handle common ebook title patterns', () => {
        const testCases = [
          'e-book: Холодний Яр',
          'E-book Холодний Яр',
          'е-книга: Холодний Яр',
          'електронна книга Холодний Яр',
          'E-BOOK: Холодний Яр',
          'е-книга Холодний Яр',
          'ebook Холодний Яр',
          'e book Холодний Яр',
        ];

        testCases.forEach((testCase) => {
          expect(isEbook(testCase)).toBe(true);
        });
      });

      it('should handle titles with additional formatting', () => {
        expect(isEbook('e-book: "Холодний Яр"')).toBe(true);
        expect(isEbook('е-книга: (Аудіокнига) Холодний Яр')).toBe(true);
        expect(isEbook('електронна книга: [EPUB] Холодний Яр')).toBe(true);
        expect(isEbook('ebook: — Холодний Яр —')).toBe(true);
      });

      it('should handle titles with special characters', () => {
        expect(isEbook('e-book: Холодний Яр: Повна версія')).toBe(true);
        expect(isEbook('е-книга: Холодний Яр — Роман')).toBe(true);
        expect(isEbook('ebook: Холодний Яр (2023)')).toBe(true);
      });

      it('should handle mixed language titles', () => {
        expect(isEbook('e-book: Холодний Яр')).toBe(true);
        expect(isEbook('е-книга: Cold Winter')).toBe(true);
        expect(isEbook('ebook: Холодний Яр & Cold Winter')).toBe(true);
      });

      it('should handle titles with numbers and symbols', () => {
        expect(isEbook('e-book: Холодний Яр 2')).toBe(true);
        expect(isEbook('електронна книга: Холодний Яр v1.0')).toBe(true);
        expect(isEbook('ebook: Холодний Яр #1')).toBe(true);
      });
    });

    describe('Performance and Large Inputs', () => {
      it('should handle very long titles', () => {
        const longTitle = 'e-book: ' + 'A'.repeat(1000);
        expect(isEbook(longTitle)).toBe(true);
      });

      it('should handle titles with many indicators', () => {
        const titleWithManyIndicators =
          'e-book електронна книга ebook е-книга e book е книга Холодний Яр';
        expect(isEbook(titleWithManyIndicators)).toBe(true);
      });

      it('should handle titles with repeated indicators', () => {
        expect(isEbook('e-book e-book Холодний Яр')).toBe(true);
        expect(isEbook('електронна книга електронна книга Холодний Яр')).toBe(
          true,
        );
      });
    });

    describe('Unicode and Special Characters', () => {
      it('should handle unicode characters', () => {
        expect(isEbook('e-book: 测试标题')).toBe(true);
        expect(isEbook('електронна книга: 🚀 Книга')).toBe(true);
        expect(isEbook('ebook: 日本語タイトル')).toBe(true);
      });

      it('should handle emojis and symbols', () => {
        expect(isEbook('e-book: 📚 Холодний Яр')).toBe(true);
        expect(isEbook('е-книга: ⭐ Холодний Яр ⭐')).toBe(true);
        expect(isEbook('ebook: 🎯 Холодний Яр 🎯')).toBe(true);
      });
    });

    describe('Normalization Behavior', () => {
      it('should normalize punctuation to spaces before checking', () => {
        expect(isEbook('e.book')).toBe(true); // Period becomes space, 'e book' matches
        expect(isEbook('е,книга')).toBe(true); // Comma becomes space, 'е книга' matches
        expect(isEbook('ebook:')).toBe(true); // Colon becomes space, 'ebook' matches
      });

      it('should handle complex punctuation normalization', () => {
        expect(isEbook('e-book: "Холодний Яр" (2023) [EPUB]')).toBe(true);
        expect(isEbook('електронна книга; Холодний Яр — Роман')).toBe(true);
        expect(isEbook('ebook, Холодний Яр: Повна версія')).toBe(true);
      });
    });
  });
});
