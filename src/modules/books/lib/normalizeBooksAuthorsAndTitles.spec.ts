import { normalizeBookData } from './normalizeBooksAuthorsAndTitles'; // File under test
import {
  type IBookInfo,
  type FormatType,
} from 'src/modules/common/interfaces/api/book.info';
import { stringSimilarity } from 'string-similarity-js'; // Dependency 1
import { getCoreTitle } from '../utils/getCoreTitle'; // Dependency 2
import { getUniqueAuthors } from '../utils/genUniqueAuthors'; // Dependency 3
import { getTitleWithoutAuthor } from './getTitleWithoutAuthor'; // Dependency 5
import { type IFindFuzzyAuthorMatchRes } from './findFuzzyAuthorMatch';

interface IBookInfoWithId extends IBookInfo {
  id: number;
}

// Default data for the new required fields
const DEFAULT_BOOK_DATA = {
  price: 19.99,
  link: 'https://example.com/dummy-link',
  store: 'TestStore',
  available: true,
  format: 1 as FormatType, // Physical
  isbn: '978-0000000000',
};

// --- Mocking Dependencies ---

jest.mock('string-similarity-js', () => ({
  stringSimilarity: jest.fn(),
}));
const mockStringSimilarity = stringSimilarity as jest.Mock;

jest.mock('../utils/getCoreTitle', () => ({
  getCoreTitle: jest.fn(),
}));
const mockGetCoreTitle = getCoreTitle as jest.Mock;

jest.mock('../utils/genUniqueAuthors', () => ({
  getUniqueAuthors: jest.fn(),
}));
const mockGetUniqueAuthors = getUniqueAuthors as jest.Mock;

jest.mock('../constants/fuzzy-thresholds', () => ({
  MIN_TITLE_SIMILARITY_THRESHOLD: 0.8,
}));

jest.mock('./getTitleWithoutAuthor', () => ({
  getTitleWithoutAuthor: jest.fn(),
}));
const mockGetTitleWithoutAuthor = getTitleWithoutAuthor as jest.Mock;

describe('normalizeBookData', () => {
  const AUTHORS = ['John Doe', 'Jane Smith'];
  // Removed: const MIN_THRESHOLD = 0.8;

  // Updated book constants with required fields and IBookInfoWithId
  const AUTHOR_SOURCE_BOOK: IBookInfoWithId = {
    id: 101,
    title: 'The Great Source Book',
    author: 'Source Author',
    ...DEFAULT_BOOK_DATA,
  };
  const BOOK_TO_FIX: IBookInfoWithId = {
    id: 201,
    title: 'The Great Source Book by Source Author',
    author: null,
    ...DEFAULT_BOOK_DATA,
  };
  const UNFIXABLE_BOOK: IBookInfoWithId = {
    id: 301,
    title: 'The Lonely Title',
    author: null,
    ...DEFAULT_BOOK_DATA,
  };
  const ALREADY_GOOD_BOOK: IBookInfoWithId = {
    id: 401,
    title: 'Perfect Book',
    author: 'Known Author',
    ...DEFAULT_BOOK_DATA,
  };

  const INPUT_ARRAY: IBookInfoWithId[] = [
    ALREADY_GOOD_BOOK,
    AUTHOR_SOURCE_BOOK,
    BOOK_TO_FIX,
    UNFIXABLE_BOOK,
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    // Default mocks for all dependencies
    mockGetUniqueAuthors.mockReturnValue(AUTHORS);
    // Explicitly typed mock argument and return
    mockGetCoreTitle.mockImplementation((title: string): string =>
      title.toLowerCase(),
    );

    // Default: Strategy 1 (Fuzzy Match) fails
    // Explicitly typed mock arguments, used underscore for unused 'authors'
    mockGetTitleWithoutAuthor.mockImplementation(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      (title: string, _authors: string[]) => ({
        title,
        author: null as string | null,
        matchResult: null as IFindFuzzyAuthorMatchRes | null,
      }),
    );

    // Default: Strategy 2 (Similarity Match) fails
    mockStringSimilarity.mockReturnValue(0);
  });

  // Test Case 1: Skips books that already have an author
  test('should return books with authors unchanged and skip processing them', () => {
    // The result array should be cast back to IBookInfoWithId[] for find() usage in tests
    const arr = normalizeBookData(INPUT_ARRAY) as IBookInfoWithId[];

    // ALREADY_GOOD_BOOK should be identical to the original
    expect(arr.find((b) => b.id === ALREADY_GOOD_BOOK.id)).toEqual(
      ALREADY_GOOD_BOOK,
    );

    // Ensure getTitleWithoutAuthor was not called for the good book
    // It should only be called for BOOK_TO_FIX and UNFIXABLE_BOOK (2 times)
    expect(mockGetTitleWithoutAuthor).toHaveBeenCalledTimes(2);
  });

  // Test Case 2: Strategy 1 success (Fuzzy Author Match within Title)
  test('should apply Strategy 1 (fuzzy match) when an author is found in the title', () => {
    const FUZZY_MATCH_RESULT: IFindFuzzyAuthorMatchRes = {
      author: 'Found Fuzzy Author',
      matchedTitleWords: ['by', 'fuzzy'],
    };

    const STRATEGY_1_RESPONSE = {
      title: 'Clean Title',
      author: FUZZY_MATCH_RESULT.author,
      matchResult: FUZZY_MATCH_RESULT,
    };

    // Configure mock to simulate Strategy 1 success for BOOK_TO_FIX
    mockGetTitleWithoutAuthor.mockReturnValueOnce(STRATEGY_1_RESPONSE);
    mockGetTitleWithoutAuthor.mockReturnValue(STRATEGY_1_RESPONSE); // Default for others

    const arr = normalizeBookData([BOOK_TO_FIX]) as IBookInfoWithId[];

    // Expect the book to be updated with the cleaned title and found author
    expect(arr[0]).toEqual({
      ...BOOK_TO_FIX,
      title: 'Clean Title',
      author: 'Found Fuzzy Author',
    });

    // Strategy 2 dependencies should not be called
    expect(mockStringSimilarity).not.toHaveBeenCalled();
  });

  // Test Case 3: Strategy 2 success (Title Similarity Match)
  test('should apply Strategy 2 (similarity match) when Strategy 1 fails but a known book matches', () => {
    // Strategy 1 fails (default mock returns null matchResult)

    // Mock core titles for the comparison
    mockGetCoreTitle.mockImplementation((title: string): string => {
      if (title === AUTHOR_SOURCE_BOOK.title) return 'the great source book';
      if (title === BOOK_TO_FIX.title)
        return 'the great source book by source author'; // Slightly different title
      return title.toLowerCase();
    });

    // Mock stringSimilarity to succeed on the comparison
    // Explicitly typed mock arguments
    mockStringSimilarity.mockImplementation(
      (titleA: string, titleB: string): number => {
        if (titleA.includes('source book') && titleB.includes('source book')) {
          return 0.95; // Match! (>= 0.8 threshold)
        }
        return 0;
      },
    );

    const arr = normalizeBookData([
      AUTHOR_SOURCE_BOOK,
      BOOK_TO_FIX,
    ]) as IBookInfoWithId[];
    const fixedBook = arr.find((b) => b.id === BOOK_TO_FIX.id);

    // Expect the author to be copied from AUTHOR_SOURCE_BOOK, while retaining all other data
    expect(fixedBook).toEqual({
      ...BOOK_TO_FIX,
      author: AUTHOR_SOURCE_BOOK.author,
    });

    // Ensure getTitleWithoutAuthor was called (Strategy 1 attempt)
    expect(mockGetTitleWithoutAuthor).toHaveBeenCalledTimes(1);
    // Ensure stringSimilarity was called (Strategy 2 attempt)
    expect(mockStringSimilarity).toHaveBeenCalled();
  });

  // Test Case 4: Both strategies fail
  test('should return book unchanged if both strategies fail', () => {
    // Both mocks are configured to fail by default (getTitleWithoutAuthor: null, stringSimilarity: 0)

    const arr = normalizeBookData([
      AUTHOR_SOURCE_BOOK,
      UNFIXABLE_BOOK,
    ]) as IBookInfoWithId[];

    const unfixableBookResult = arr.find((b) => b.id === UNFIXABLE_BOOK.id);

    // The book should be returned exactly as it was
    expect(unfixableBookResult).toEqual(UNFIXABLE_BOOK);

    // Ensure both strategies were attempted
    expect(mockGetTitleWithoutAuthor).toHaveBeenCalledTimes(1);
    expect(mockStringSimilarity).toHaveBeenCalled();
  });

  // Test Case 5: Empty Input Array
  test('should return an empty array if the input array is empty', () => {
    const arr = normalizeBookData([]);
    expect(arr).toEqual([]);
    expect(mockGetUniqueAuthors).toHaveBeenCalledWith([]);
    // No logic should run inside the map
    expect(mockGetTitleWithoutAuthor).not.toHaveBeenCalled();
    expect(mockStringSimilarity).not.toHaveBeenCalled();
  });

  // Test Case 6: Ensure correct unique authors are generated
  test('should pass the unique authors to getTitleWithoutAuthor', () => {
    const customAuthors = ['Author A', 'Author B'];
    mockGetUniqueAuthors.mockReturnValue(customAuthors);

    normalizeBookData([BOOK_TO_FIX]);

    expect(mockGetUniqueAuthors).toHaveBeenCalled();
    // Check that the custom authors are used in the first strategy call
    expect(mockGetTitleWithoutAuthor).toHaveBeenCalledWith(
      BOOK_TO_FIX.title,
      customAuthors,
    );
  });

  // Test Case 7: Strategy 2 - Only uses books with authors as source
  test('should only filter books with authors into authorSourceBooks', () => {
    const books: IBookInfoWithId[] = [
      { id: 1, title: 'A', author: 'X', ...DEFAULT_BOOK_DATA },
      { id: 2, title: 'B', author: null, ...DEFAULT_BOOK_DATA }, // Should not be in authorSourceBooks
      { id: 3, title: 'C', author: 'Y', ...DEFAULT_BOOK_DATA },
      { id: 4, title: 'D', author: null, ...DEFAULT_BOOK_DATA },
    ];

    // Simulate a match between Book 4 and Book 1
    mockStringSimilarity.mockReturnValue(0.9);

    // We use a custom mock to simulate the filtering inside normalizeBookData
    // Strategy 1 fails for Book 4
    mockGetTitleWithoutAuthor.mockReturnValue({
      title: books[3].title,
      author: null,
      matchResult: null,
    });

    normalizeBookData(books);

    // Book 4 (target) is compared against Book 1 and Book 3 (sources).
    // stringSimilarity is called 2 times for Book 4 (once for X, once for Y).
    expect(mockStringSimilarity).toHaveBeenCalledTimes(2);

    // Check that Book 4 was fixed by Strategy 2 (copied author 'X' from Book 1)
    const fixedBook = normalizeBookData(books).find(
      (b) => (b as IBookInfoWithId).id === 4,
    ) as IBookInfoWithId;

    // Create the expected result object manually to verify all fields are retained
    const expectedFixedBook: IBookInfoWithId = {
      ...books[3],
      author: 'X',
    };

    expect(fixedBook).toEqual(expectedFixedBook);
  });
});
