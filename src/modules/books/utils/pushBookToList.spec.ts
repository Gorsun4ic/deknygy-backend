import { pushBookToList } from './pushBookToList';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';

describe('pushBookToList', () => {
  let list: IBookInfo[];
  let book: IBookInfo;

  beforeEach(() => {
    list = [];
    book = {
      title: 'Test Book',
      link: 'https://example.com/book',
      store: 'example-store',
    } as IBookInfo;
  });

  it('pushes a book into an empty list', () => {
    pushBookToList(list, book);

    expect(list).toHaveLength(1);
    expect(list[0]).toBe(book);
  });

  it('does not push a duplicate book (same title, link, store)', () => {
    list.push(book);

    pushBookToList(list, {
      ...book,
    });

    expect(list).toHaveLength(1);
  });

  it('pushes a book if title differs', () => {
    list.push(book);

    const newBook = { ...book, title: 'Different Title' };

    pushBookToList(list, newBook);

    expect(list).toHaveLength(2);
  });

  it('pushes a book if link differs', () => {
    list.push(book);

    const newBook = { ...book, link: 'https://example.com/other' };

    pushBookToList(list, newBook);

    expect(list).toHaveLength(2);
  });

  it('pushes a book if store differs', () => {
    list.push(book);

    const newBook = { ...book, store: 'another-store' };

    pushBookToList(list, newBook);

    expect(list).toHaveLength(2);
  });

  it('does nothing if list is not an array', () => {
    // @ts-expect-error testing defensive behavior
    pushBookToList(null, book);

    expect(list).toHaveLength(0);
  });

  it('mutates the original array', () => {
    const originalRef = list;

    pushBookToList(list, book);

    expect(list).toBe(originalRef);
    expect(originalRef).toHaveLength(1);
  });
});
