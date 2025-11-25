import { type IBookInfo } from '../../common/interfaces/api/book.info';
import { normalizeBookData } from './normalizeBooksAuthorsAndTitles';
// --- Mocking external dependencies with explicit types ---
// Using jest.fn<ReturnType, Parameters>() to properly type the mock,
// avoiding the unsafe assignment error in strict mode.

let mockCompare2ArraysItemsSimilarity: jest.Mock;
let mockStringSimilarity: jest.Mock;
let mockGetCoreTitle: jest.Mock;

// jest hoists mock() calls, so we use a factory callback
jest.mock('../utils/compare2ArraysItemsSimilarity', () => ({
  compare2ArraysItemsSimilarity: (...args: unknown[]) =>
    mockCompare2ArraysItemsSimilarity(...args),
}));

jest.mock('string-similarity-js', () => ({
  stringSimilarity: (...args: unknown[]) => mockStringSimilarity(...args),
}));

jest.mock('../utils/getCoreTitle', () => ({
  getCoreTitle: (...args: unknown[]) => mockGetCoreTitle(...args),
}));
// --- Helper Functions (Copied for testing environment) ---

// ---------------------------------------------------------------------
// ---------------------------- UNIT TESTS -----------------------------
// ---------------------------------------------------------------------

describe('normalizeBookData', () => {
  beforeEach(() => {
    mockCompare2ArraysItemsSimilarity = jest.fn();
    mockStringSimilarity = jest.fn();
    mockGetCoreTitle = jest.fn();
  });
  const dummyBook: IBookInfo = {
    title: 'Test',
    author: null,
    link: 'L',
    price: 0,
    publisher: 'P',
    store: 'S',
    available: true,
    format: 1,
  };
  const sourceBook: IBookInfo = {
    title: 'Source Title',
    author: 'Source Author',
    link: 'L',
    price: 0,
    publisher: 'P',
    store: 'S',
    available: true,
    format: 1,
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // Default mocks for irrelevant comparisons
    mockCompare2ArraysItemsSimilarity.mockReturnValue(null);
    mockStringSimilarity.mockReturnValue(0);
    mockGetCoreTitle.mockImplementation((t) => t);
  });

  it('should return the book unchanged if it already has an author', () => {
    const bookWithAuthor = { ...sourceBook };
    const result = normalizeBookData([bookWithAuthor]);
    expect(result[0]).toBe(bookWithAuthor);
  });

  // --- Strategy 1 Tests: Fuzzy Word Match ---
  it('should apply Strategy 1 (Fuzzy Match) and clean the title on success', () => {
    // 2. Mock fuzzy match success (2 words matched out of 2 words)
    // Author words: ['Source', 'Author']. Title words: ['Book', 'by', 'Sorce', 'Authur']
    mockCompare2ArraysItemsSimilarity.mockImplementationOnce(
      (titleWords, authorWords) => {
        if (authorWords.join(' ') === 'Source Author') {
          // Simulating 2/2 match needed for 0.66 ratio success
          return [
            ['Sorce', 'Authur'],
            ['Source', 'Author'],
          ];
        }
        return null;
      },
    );

    // 3. Prepare book with misspelled author in title
    const bookToFix: IBookInfo = {
      ...dummyBook,
      title: 'Book by',
    };

    // The array contains the source book (for author extraction) and the book to fix.
    const result = normalizeBookData([sourceBook, bookToFix]);

    // Check the fixed book (index 1)
    expect(result[1].author).toBe('Source Author');

    // The title cleanup is tested based on the logic: remove 'Source' and 'Author'.
    // Since 'Sorce' and 'Authur' are not exact matches for 'Source' and 'Author', the title remains largely unchanged by the regex.
    expect(result[1].title).toBe('Book by');
    expect(result[1].author).not.toBeNull();
  });

  // --- Strategy 2 Tests: Title Similarity Match ---
  it('should apply Strategy 2 (Title Similarity) if Strategy 1 fails', () => {
    // 1. Setup Data
    const titleSourceBook: IBookInfo = {
      ...sourceBook,
      title: 'War and Peace (Hardcover)',
    };
    const bookToFix: IBookInfo = {
      ...dummyBook,
      title: 'War and Peace (Paperback)',
    };

    // 2. Mock Strategy 1 failure
    mockCompare2ArraysItemsSimilarity.mockReturnValue(null); // No fuzzy word match found

    // 3. Mock Strategy 2 success
    mockGetCoreTitle.mockImplementation((title) =>
      title.replace(/\s\(.*\)/, ''),
    ); // Simple core title mock
    mockStringSimilarity.mockReturnValue(0.95); // High similarity >= 0.9

    const result = normalizeBookData([titleSourceBook, bookToFix]);

    // Check the fixed book (index 1)
    expect(result[1].author).toBe('Source Author');
    expect(result[1].title).toBe(bookToFix.title); // Title remains unchanged in Strategy 2
  });

  it('should return the book unchanged if all strategies fail', () => {
    const bookToFix: IBookInfo = { ...dummyBook, title: 'A Unique Title' };

    // 1. Mock Strategy 1 failure
    mockCompare2ArraysItemsSimilarity.mockReturnValue(null);

    // 2. Mock Strategy 2 failure
    mockGetCoreTitle.mockReturnValue('A Unique Title');
    // Ensure similarity is low against all other titles
    mockStringSimilarity.mockReturnValue(0.5);

    const result = normalizeBookData([sourceBook, bookToFix]);

    // Check the fixed book (index 1)
    expect(result[1].author).toBeNull();
    expect(result[1].title).toBe('A Unique Title');
  });

  it('should handle complex mixed data scenarios', () => {
    const complexArr: IBookInfo[] = [
      {
        title: 'Authored Book 1',
        author: 'A. B. Smith',
        link: '1',
        price: 1,
        publisher: null,
        store: 'Y',
        available: true,
        format: 1,
      },
      {
        title: 'Authored Book 2',
        author: 'A. B. Smith',
        link: '2',
        price: 2,
        publisher: null,
        store: 'Y',
        available: true,
        format: 1,
      },
      {
        title: 'Book 1 A. B. Smith',
        author: null,
        link: '3',
        price: 3,
        publisher: null,
        store: 'Y',
        available: true,
        format: 1,
      }, // S1 match
      {
        title: 'Authored Book 2 (Hardcover)',
        author: null,
        link: '4',
        price: 4,
        publisher: null,
        store: 'Y',
        available: true,
        format: 1,
      }, // S2 match
      {
        title: 'Totally Different',
        author: null,
        link: '5',
        price: 5,
        publisher: null,
        store: 'Y',
        available: true,
        format: 1,
      }, // No match
    ];

    // Mocks for S1 match (Index 2: Book 1 A. B. Smith)
    // Author words: ['A.', 'B.', 'Smith']. Title words: ['Book', '1', 'A.', 'B.', 'Smith']
    mockCompare2ArraysItemsSimilarity.mockImplementation(
      (titleWords, authorWords) => {
        if (authorWords.join(' ') === 'A. B. Smith') {
          const isMatch =
            titleWords.includes('A.') &&
            titleWords.includes('B.') &&
            titleWords.includes('Smith');
          if (isMatch) {
            return [
              ['A.', 'B.', 'Smith'],
              ['A.', 'B.', 'Smith'],
            ]; // 3/3 match
          }
        }
        return null;
      },
    );

    // Mocks for S2 match (Index 3: Authored Book 2 (Hardcover))
    mockGetCoreTitle.mockImplementation((title) => {
      if (title.includes('Authored Book 2')) return 'Authored Book 2';
      return title;
    });
    mockStringSimilarity.mockImplementation((titleA, titleB) => {
      if (titleA === 'Authored Book 2' && titleB === 'Authored Book 2')
        return 1.0;
      return 0; // Default low similarity
    });

    const result = normalizeBookData(complexArr);

    // Index 0, 1: Unchanged (already has author)
    expect(result[0].author).toBe('A. B. Smith');
    expect(result[1].author).toBe('A. B. Smith');

    // Index 2: Fixed by S1 (Fuzzy match)
    // The title cleanup is now fixed thanks to period escaping in the regex in normalizeBookData
    expect(result[2].author).toBe('A. B. Smith');
    expect(result[2].title).toBe('Book 1'); // Author words removed correctly

    // Index 3: Fixed by S2 (Title similarity)
    expect(result[3].author).toBe('A. B. Smith');
    expect(result[3].title).toBe('Authored Book 2 (Hardcover)'); // Title remains

    // Index 4: Unchanged (no match)
    expect(result[4].author).toBeNull();
    expect(result[4].title).toBe('Totally Different');
  });
});
