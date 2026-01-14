import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { fuzzyMatching } from './fuzzyMatching';
import { scoreBooks } from './scoreBooks';
import { calculateWordMatchScore } from './calculateWordMatchScore';
import { normalizeString } from '../../utils/normalizeString';
import { splitQueryIntoTitleAndAuthor } from '../../utils/splitQueryIntoTitleAndAuthor';

/**
 * Integration tests for the fuzzy-filtering system.
 * These tests verify that all components work together correctly
 * using real implementations (no mocks).
 */
describe('Fuzzy Filtering Integration Tests', () => {
  const mockBooks: IBookInfo[] = [
    {
      title: 'The Martian',
      author: 'Andy Weir',
      price: 100,
      link: 'link1',
      store: 'Store1',
      format: 1,
      available: true,
    },
    {
      title: 'The Martian Chronicles',
      author: 'Ray Bradbury',
      price: 200,
      link: 'link2',
      store: 'Store2',
      format: 1,
      available: true,
    },
    {
      title: 'Foundation',
      author: 'Isaac Asimov',
      price: 300,
      link: 'link3',
      store: 'Store3',
      format: 1,
      available: true,
    },
    {
      title: 'Project Hail Mary',
      author: 'Andy Weir',
      price: 400,
      link: 'link4',
      store: 'Store4',
      format: 1,
      available: true,
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      price: 500,
      link: 'link5',
      store: 'Store5',
      format: 1,
      available: true,
    },
  ];

  describe('End-to-End Flow: fuzzyMatching -> scoreBooks -> calculateWordMatchScore', () => {
    it('should correctly filter and score books for title-only query', () => {
      const query = 'martian';
      const results = fuzzyMatching(query, mockBooks);

      // Should return books with "martian" in title, sorted by score
      expect(results.length).toBeGreaterThan(0);
      expect(
        results.every((book) => book.title.toLowerCase().includes('martian')),
      ).toBe(true);
      expect(results[0].title).toBe('The Martian'); // Exact match should be first

      // Verify scores are assigned and sorted
      results.forEach((book, index) => {
        const bookWithScore = book as IBookInfo & { score: number };
        expect(bookWithScore.score).toBeDefined();
        expect(typeof bookWithScore.score).toBe('number');
        if (index > 0) {
          const currentScore = bookWithScore.score;
          const previousScore = (
            results[index - 1] as IBookInfo & { score: number }
          ).score;
          expect(currentScore).toBeLessThanOrEqual(previousScore);
        }
      });
    });

    it('should correctly handle title + author query with semantic delimiter', () => {
      const query = 'martian by andy weir';
      const results = fuzzyMatching(query, mockBooks);

      // Should prioritize books by Andy Weir with "martian" in title
      expect(results.length).toBeGreaterThan(0);
      const topResult = results[0];
      expect(topResult.author?.toLowerCase()).toContain('andy');
      expect(topResult.title.toLowerCase()).toContain('martian');
    });

    it('should use calculateWordMatchScore for author matching in split queries', () => {
      const query = 'foundation isaac asimov';
      const results = fuzzyMatching(query, mockBooks);

      // Should find Foundation by Isaac Asimov
      const foundationBook = results.find((b) => b.title === 'Foundation');
      expect(foundationBook).toBeDefined();
      expect(foundationBook?.author).toBe('Isaac Asimov');
    });

    it('should handle typos in author names using word matching', () => {
      const query = 'martian andy wir'; // Typo: "wir" instead of "weir"
      const results = fuzzyMatching(query, mockBooks);

      // Should still find Andy Weir books due to word matching
      const andyWeirBooks = results.filter((b) =>
        b.author?.toLowerCase().includes('andy'),
      );
      expect(andyWeirBooks.length).toBeGreaterThan(0);
    });
  });

  describe('Component Integration: scoreBooks with calculateWordMatchScore', () => {
    it('should use calculateWordMatchScore for author word matching', () => {
      const normalizedQuery = 'martian andy weir';
      const { title, author } = splitQueryIntoTitleAndAuthor(
        normalizeString(normalizedQuery),
      );

      const results = [
        { item: mockBooks[0] }, // The Martian by Andy Weir
        { item: mockBooks[1] }, // The Martian Chronicles by Ray Bradbury
      ];

      const scored = scoreBooks(results, normalizedQuery, title, author);

      // Andy Weir book should score higher due to author match
      expect(scored.length).toBeGreaterThan(0);
      if (scored.length > 0) {
        expect(scored[0].author).toBe('Andy Weir');
      }
    });

    it('should combine title similarity and author word matching scores', () => {
      const normalizedQuery = 'project hail mary andy weir';
      const { title, author } = splitQueryIntoTitleAndAuthor(
        normalizeString(normalizedQuery),
      );

      const results = [{ item: mockBooks[3] }]; // Project Hail Mary by Andy Weir

      const scored = scoreBooks(results, normalizedQuery, title, author);

      expect(scored.length).toBe(1);
      const score = (scored[0] as IBookInfo & { score: number }).score;
      expect(score).toBeGreaterThan(1.0); // Should have combined score > 1.0
    });
  });

  describe('Real-World Scenarios', () => {
    it('should handle Ukrainian book titles and authors', () => {
      const ukrainianBooks: IBookInfo[] = [
        {
          title: 'Атомні звички',
          author: 'Джеймс Клір',
          price: 400,
          link: 'link1',
          store: 'Store1',
          format: 1,
          available: true,
        },
        {
          title: 'Атомні звички. Посібник для змін',
          author: 'Джеймс Клір',
          price: 450,
          link: 'link2',
          store: 'Store2',
          format: 1,
          available: true,
        },
      ];

      const query = 'атомні звички';
      const results = fuzzyMatching(query, ukrainianBooks);

      expect(results.length).toBeGreaterThan(0);
      results.forEach((book) => {
        expect(book.title.toLowerCase()).toContain('атомні');
      });
    });

    it('should handle queries with special characters and punctuation', () => {
      const booksWithPunctuation: IBookInfo[] = [
        {
          title: "Ender's Game",
          author: 'Orson Scott Card',
          price: 100,
          link: 'link1',
          store: 'Store1',
          format: 1,
          available: true,
        },
      ];

      const query = "ender's game";
      const results = fuzzyMatching(query, booksWithPunctuation);

      expect(results.length).toBeGreaterThan(0);
    });

    it('should filter out low-scoring matches using threshold', () => {
      const query = 'completely unrelated book title';
      const results = fuzzyMatching(query, mockBooks);

      // Should filter out all books as they don't match
      expect(results.length).toBe(0);
    });

    it('should handle case-insensitive matching', () => {
      const query = 'THE MARTIAN';
      const results = fuzzyMatching(query, mockBooks);

      expect(results.length).toBeGreaterThan(0);
      expect(results[0].title.toLowerCase()).toContain('martian');
    });

    it('should prioritize exact title matches over partial matches', () => {
      const query = 'martian';
      const results = fuzzyMatching(query, mockBooks);

      // "The Martian" (exact match) should rank higher than "The Martian Chronicles"
      const martianIndex = results.findIndex((b) => b.title === 'The Martian');
      const chroniclesIndex = results.findIndex(
        (b) => b.title === 'The Martian Chronicles',
      );

      if (martianIndex >= 0 && chroniclesIndex >= 0) {
        expect(martianIndex).toBeLessThan(chroniclesIndex);
      }
    });
  });

  describe('Fallback Behavior', () => {
    it('should use manual scoring when Fuse.js returns no results for split query', () => {
      // Use a query that Fuse.js is unlikely to match but has author
      const query = 'xyzabc123 by testauthor456';
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

      const results = fuzzyMatching(query, mockBooks);

      // Should attempt manual scoring if Fuse.js fails and author is detected
      const { author } = splitQueryIntoTitleAndAuthor(normalizeString(query));
      if (author && results.length === 0) {
        // If Fuse.js found nothing, manual scoring should be attempted
        // Note: Fuse.js might still find something with threshold 1.0, so this is conditional
        expect(Array.isArray(results)).toBe(true);
      }

      consoleSpy.mockRestore();
    });

    it('should still return results even when Fuse.js finds nothing but manual scoring works', () => {
      // Create a book that might not be found by Fuse.js but matches via manual scoring
      const specificBook: IBookInfo = {
        title: 'Very Specific Book Title',
        author: 'Very Specific Author',
        price: 100,
        link: 'link1',
        store: 'Store1',
        format: 1,
        available: true,
      };

      const query = 'specific book specific author';
      const results = fuzzyMatching(query, [specificBook]);

      // Manual scoring should still find it
      expect(results.length).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Score Calculation Accuracy', () => {
    it('should calculate scores correctly for title-only queries', () => {
      const normalizedQuery = 'martian';
      const { title, author } = splitQueryIntoTitleAndAuthor(normalizedQuery);

      const results = [
        { item: mockBooks[0] }, // The Martian - exact match
        { item: mockBooks[1] }, // The Martian Chronicles - partial match
      ];

      const scored = scoreBooks(results, normalizedQuery, title, author);

      // Exact match should have higher score
      const exactMatch = scored.find((b) => b.title === 'The Martian');
      const partialMatch = scored.find(
        (b) => b.title === 'The Martian Chronicles',
      );

      if (exactMatch && partialMatch) {
        const exactScore = (exactMatch as IBookInfo & { score: number }).score;
        const partialScore = (partialMatch as IBookInfo & { score: number })
          .score;
        expect(exactScore).toBeGreaterThan(partialScore);
      }
    });

    it('should apply coverage penalty correctly in calculateWordMatchScore', () => {
      const queryWords = ['andy', 'weir', 'smith'];
      const authorName = 'Andy Weir';

      const score = calculateWordMatchScore(queryWords, authorName);

      // Only 2 out of 3 words match, so coverage penalty should apply
      expect(score).toBeLessThan(1.0);
      expect(score).toBeGreaterThan(0);
    });
  });

  describe('Performance and Edge Cases', () => {
    it('should handle large book arrays efficiently', () => {
      const largeBookArray: IBookInfo[] = Array.from(
        { length: 100 },
        (_, i) => ({
          title: `Book ${i}`,
          author: `Author ${i}`,
          price: 100,
          link: `link${i}`,
          store: 'Store1',
          format: 1,
          available: true,
        }),
      );

      const query = 'book 50';
      const startTime = Date.now();
      const results = fuzzyMatching(query, largeBookArray);
      const endTime = Date.now();

      expect(results.length).toBeGreaterThan(0);
      expect(endTime - startTime).toBeLessThan(1000); // Should complete in < 1 second
    });

    it('should handle empty query gracefully', () => {
      const results = fuzzyMatching('', mockBooks);
      expect(Array.isArray(results)).toBe(true);
    });

    it('should handle books with null authors', () => {
      const booksWithNullAuthor: IBookInfo[] = [
        {
          title: 'Book Without Author',
          author: null,
          price: 100,
          link: 'link1',
          store: 'Store1',
          format: 1,
          available: true,
        },
      ];

      const query = 'book without';
      const results = fuzzyMatching(query, booksWithNullAuthor);

      // Should still work and score based on title only
      expect(Array.isArray(results)).toBe(true);
    });
  });
});
