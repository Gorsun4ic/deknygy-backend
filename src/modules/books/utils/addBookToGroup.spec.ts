import { addBookToGroup } from './addBookToGroup';
import { normalizeString } from './normalizeString';
import { pushBookToList } from './pushBookToList';
import { type IBookGroup } from '../interfaces/book.group';
import { type IBookInfo } from 'src/modules/common/interfaces/api/book.info';

jest.mock('./normalizeString');
jest.mock('./pushBookToList');

describe('addBookToGroup', () => {
  const mockNormalizeString = normalizeString as jest.MockedFunction<
    typeof normalizeString
  >;
  const mockPushBookToList = pushBookToList as jest.MockedFunction<
    typeof pushBookToList
  >;

  let group: IBookGroup;
  let book: IBookInfo;

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
      title: 'Some Book Title',
      author: 'Some Author',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
    } as IBookInfo;

    mockNormalizeString.mockReturnValue('some-book-title');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('stores a normalized title variant and increments count', () => {
    addBookToGroup(group, book, 1);

    expect(mockNormalizeString).toHaveBeenCalledWith('Some Book Title');
    expect(group.variants.get('some-book-title')).toBe(1);
  });

  it('increments existing variant count if the key already exists', () => {
    group.variants.set('some-book-title', 2);

    addBookToGroup(group, book, 2);

    expect(group.variants.get('some-book-title')).toBe(3);
  });

  it('pushes the book to the correct format list', () => {
    addBookToGroup(group, book, 3);

    expect(mockPushBookToList).toHaveBeenCalledWith(group.formats[3], book);
  });

  it('does not break when multiple books with same normalized title are added', () => {
    const anotherBook: IBookInfo = { ...book, title: 'Some Book Title' };
    mockNormalizeString.mockReturnValue('some-book-title');

    addBookToGroup(group, book, 1);
    addBookToGroup(group, anotherBook, 1);

    expect(group.variants.get('some-book-title')).toBe(2);
    expect(mockPushBookToList).toHaveBeenCalledTimes(2);
  });

  it('works with different normalized output from normalizeString', () => {
    mockNormalizeString.mockReturnValue('normalized-title');

    addBookToGroup(group, book, 2);

    expect(group.variants.get('normalized-title')).toBe(1);
  });
});
