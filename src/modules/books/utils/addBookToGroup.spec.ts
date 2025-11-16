import { addBookToGroup } from './addBookToGroup';
import { pushBookToList } from './pushBookToList';
import { type IBookGroup } from '../interfaces/book.group';
import { type IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { cleanEbookIndicator } from 'src/modules/common/utils/cleanEbookTitle';

jest.mock('./pushBookToList');
jest.mock('src/modules/common/utils/cleanEbookTitle');

describe('addBookToGroup', () => {
  const mockPushBookToList = pushBookToList as jest.MockedFunction<
    typeof pushBookToList
  >;
  const mockCleanEbookIndicator = cleanEbookIndicator as jest.MockedFunction<
    typeof cleanEbookIndicator
  >;

  let group: IBookGroup;
  let book: IBookInfo;

  // Define the expected key based on your working function
  const UNNORMALIZED_KEY = 'Some Book Title';

  beforeEach(() => {
    group = {
      variants: new Map(),
      formats: {
        1: [],
        2: [],
        3: [],
      },
    };

    book = {
      title: UNNORMALIZED_KEY,
      author: 'Some Author',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
    } as IBookInfo;

    // Mock cleanEbookIndicator to return the title as-is
    mockCleanEbookIndicator.mockImplementation((title: string) => title);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('stores the original title variant and increments count', () => {
    addBookToGroup(group, book, 1);

    // Expect the un-normalized title to be used as the key
    expect(group.variants.get(UNNORMALIZED_KEY)).toBe(1);
  });

  it('increments existing variant count if the key already exists', () => {
    // Set the initial count using the un-normalized key
    group.variants.set(UNNORMALIZED_KEY, 2);

    addBookToGroup(group, book, 2);

    // Assert using the un-normalized key
    expect(group.variants.get(UNNORMALIZED_KEY)).toBe(3);
  });

  it('pushes the book to the correct format list', () => {
    addBookToGroup(group, book, 3);

    expect(mockPushBookToList).toHaveBeenCalledWith(group.formats[3], book);
  });

  it('does not break when multiple books with same original title are added', () => {
    const anotherBook: IBookInfo = { ...book, title: UNNORMALIZED_KEY };

    addBookToGroup(group, book, 1);
    addBookToGroup(group, anotherBook, 1);

    // Assert using the un-normalized key
    expect(group.variants.get(UNNORMALIZED_KEY)).toBe(2);
    expect(mockPushBookToList).toHaveBeenCalledTimes(2);
  });

  it('works with a different original title', () => {
    const bookWithDifferentTitle: IBookInfo = {
      ...book,
      title: 'A Different Title',
    };

    addBookToGroup(group, bookWithDifferentTitle, 2);

    // Expect the new, different title to be stored and counted
    expect(group.variants.get('A Different Title')).toBe(1);
  });
});
