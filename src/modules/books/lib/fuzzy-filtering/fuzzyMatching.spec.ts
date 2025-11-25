import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { fuzzyMatching } from './fuzzyMatching';

// --- MOCKING DEPENDENCIES ---

jest.mock('../../utils/normalizeString', () => ({
  normalizeString: jest.fn((str: string) => str.toLowerCase()),
}));

jest.mock('../../utils/splitQueryIntoTitleAndAuthor', () => ({
  splitQueryIntoTitleAndAuthor: jest.fn(),
}));

jest.mock('./scoreBooks', () => ({
  scoreBooks: jest.fn(),
}));

jest.mock('fuse.js', () => {
  return jest.fn().mockImplementation(() => ({
    search: jest.fn(),
  }));
});

import { normalizeString } from '../../utils/normalizeString';
import { splitQueryIntoTitleAndAuthor } from '../../utils/splitQueryIntoTitleAndAuthor';
import { scoreBooks } from './scoreBooks';
import Fuse from 'fuse.js';

const mockNormalizeString = normalizeString as jest.MockedFunction<
  typeof normalizeString
>;
const mockSplitQuery = splitQueryIntoTitleAndAuthor as jest.MockedFunction<
  typeof splitQueryIntoTitleAndAuthor
>;
const mockScoreBooks = scoreBooks as jest.MockedFunction<typeof scoreBooks>;
const MockFuse = Fuse as jest.MockedClass<typeof Fuse>;

describe('fuzzyMatching', () => {
  const mockBooks: IBookInfo[] = [
    {
      title: 'The Martian',
      author: 'Andy Weir',
      price: 100,
      link: 'link1',
      store: 'Store1',
      format: 1,
    },
    {
      title: 'Foundation',
      author: 'Isaac Asimov',
      price: 200,
      link: 'link2',
      store: 'Store2',
      format: 1,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    mockNormalizeString.mockImplementation((str: string) => str.toLowerCase());
    MockFuse.mockClear();
  });

  it('should normalize query and split into title and author', () => {
    const query = 'The Martian Andy Weir';
    const normalizedQuery = 'the martian andy weir';
    const queryTitle = 'the martian';
    const queryAuthor = 'andy weir';

    mockNormalizeString.mockReturnValue(normalizedQuery);
    mockSplitQuery.mockReturnValue({ title: queryTitle, author: queryAuthor });

    const mockFuseInstance = {
      search: jest
        .fn()
        .mockReturnValue([{ item: mockBooks[0] }, { item: mockBooks[1] }]),
    };
    MockFuse.mockImplementation(
      () => mockFuseInstance as unknown as Fuse<IBookInfo>,
    );
    mockScoreBooks.mockReturnValue([mockBooks[0]]);

    fuzzyMatching(query, mockBooks);

    expect(mockNormalizeString).toHaveBeenCalledWith(query);
    expect(mockSplitQuery).toHaveBeenCalledWith(normalizedQuery);
  });

  it('should use Fuse.js for initial filtering and pass results to scoreBooks', () => {
    const query = 'martian';
    const normalizedQuery = 'martian';
    const queryTitle = 'martian';
    const queryAuthor = null;

    mockNormalizeString.mockReturnValue(normalizedQuery);
    mockSplitQuery.mockReturnValue({ title: queryTitle, author: queryAuthor });

    const fuseResults = [{ item: mockBooks[0] }];
    const mockFuseInstance = {
      search: jest.fn().mockReturnValue(fuseResults),
    };
    MockFuse.mockImplementation(
      () => mockFuseInstance as unknown as Fuse<IBookInfo>,
    );
    mockScoreBooks.mockReturnValue([mockBooks[0]]);

    const result = fuzzyMatching(query, mockBooks);

    expect(MockFuse).toHaveBeenCalledWith(mockBooks, {
      keys: ['title', 'author'],
      threshold: 1.0,
      ignoreLocation: true,
      minMatchCharLength: 1,
    });
    expect(mockFuseInstance.search).toHaveBeenCalledWith(query);
    expect(mockScoreBooks).toHaveBeenCalledWith(
      fuseResults,
      normalizedQuery,
      queryTitle,
      queryAuthor,
    );
    expect(result).toEqual([mockBooks[0]]);
  });

  it('should use manual scoring when Fuse.js returns no results and queryAuthor exists', () => {
    const query = 'martian andy weir';
    const normalizedQuery = 'martian andy weir';
    const queryTitle = 'martian';
    const queryAuthor = 'andy weir';

    mockNormalizeString.mockReturnValue(normalizedQuery);
    mockSplitQuery.mockReturnValue({ title: queryTitle, author: queryAuthor });

    const mockFuseInstance = {
      search: jest.fn().mockReturnValue([]),
    };
    MockFuse.mockImplementation(
      () => mockFuseInstance as unknown as Fuse<IBookInfo>,
    );
    mockScoreBooks.mockReturnValue([mockBooks[0]]);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const result = fuzzyMatching(query, mockBooks);

    expect(mockFuseInstance.search).toHaveBeenCalledWith(query);
    expect(consoleSpy).toHaveBeenCalledWith(
      'Fuse.js returned no results, trying manual scoring for split query',
    );
    expect(mockScoreBooks).toHaveBeenCalledWith(
      [{ item: mockBooks[0] }, { item: mockBooks[1] }],
      normalizedQuery,
      queryTitle,
      queryAuthor,
    );
    expect(result).toEqual([mockBooks[0]]);

    consoleSpy.mockRestore();
  });

  it('should not use manual scoring when Fuse.js returns no results but queryAuthor is null', () => {
    const query = 'martian';
    const normalizedQuery = 'martian';
    const queryTitle = 'martian';
    const queryAuthor = null;

    mockNormalizeString.mockReturnValue(normalizedQuery);
    mockSplitQuery.mockReturnValue({ title: queryTitle, author: queryAuthor });

    const mockFuseInstance = {
      search: jest.fn().mockReturnValue([]),
    };
    MockFuse.mockImplementation(
      () => mockFuseInstance as unknown as Fuse<IBookInfo>,
    );
    mockScoreBooks.mockReturnValue([]);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

    const result = fuzzyMatching(query, mockBooks);

    expect(mockFuseInstance.search).toHaveBeenCalledWith(query);
    expect(consoleSpy).not.toHaveBeenCalled();
    expect(mockScoreBooks).toHaveBeenCalledWith(
      [],
      normalizedQuery,
      queryTitle,
      queryAuthor,
    );
    expect(result).toEqual([]);

    consoleSpy.mockRestore();
  });

  it('should return empty array when no books match', () => {
    const query = 'nonexistent book';
    const normalizedQuery = 'nonexistent book';
    const queryTitle = 'nonexistent book';
    const queryAuthor = null;

    mockNormalizeString.mockReturnValue(normalizedQuery);
    mockSplitQuery.mockReturnValue({ title: queryTitle, author: queryAuthor });

    const mockFuseInstance = {
      search: jest.fn().mockReturnValue([]),
    };
    MockFuse.mockImplementation(
      () => mockFuseInstance as unknown as Fuse<IBookInfo>,
    );
    mockScoreBooks.mockReturnValue([]);

    const result = fuzzyMatching(query, mockBooks);

    expect(result).toEqual([]);
  });

  it('should handle empty books array', () => {
    const query = 'martian';
    const normalizedQuery = 'martian';
    const queryTitle = 'martian';
    const queryAuthor = null;

    mockNormalizeString.mockReturnValue(normalizedQuery);
    mockSplitQuery.mockReturnValue({ title: queryTitle, author: queryAuthor });

    const mockFuseInstance = {
      search: jest.fn().mockReturnValue([]),
    };
    MockFuse.mockImplementation(
      () => mockFuseInstance as unknown as Fuse<IBookInfo>,
    );
    mockScoreBooks.mockReturnValue([]);

    const result = fuzzyMatching(query, []);

    expect(MockFuse).toHaveBeenCalledWith([], {
      keys: ['title', 'author'],
      threshold: 1.0,
      ignoreLocation: true,
      minMatchCharLength: 1,
    });
    expect(result).toEqual([]);
  });

  it('should pass Fuse.js results directly to scoreBooks when results exist', () => {
    const query = 'foundation';
    const normalizedQuery = 'foundation';
    const queryTitle = 'foundation';
    const queryAuthor = null;

    mockNormalizeString.mockReturnValue(normalizedQuery);
    mockSplitQuery.mockReturnValue({ title: queryTitle, author: queryAuthor });

    const fuseResults = [{ item: mockBooks[1] }];
    const mockFuseInstance = {
      search: jest.fn().mockReturnValue(fuseResults),
    };
    MockFuse.mockImplementation(
      () => mockFuseInstance as unknown as Fuse<IBookInfo>,
    );
    mockScoreBooks.mockReturnValue([mockBooks[1]]);

    const result = fuzzyMatching(query, mockBooks);

    expect(mockScoreBooks).toHaveBeenCalledWith(
      fuseResults,
      normalizedQuery,
      queryTitle,
      queryAuthor,
    );
    expect(result).toEqual([mockBooks[1]]);
  });
});
