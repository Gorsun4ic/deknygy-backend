import { type IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { getUniqueAuthors } from './genUniqueAuthors';

// Helper function to create a basic IBookInfo object with minimal required fields
const createMockBook = (author: string | null): IBookInfo => ({
  title: 'Mock Title',
  author: author,
  price: 9.99,
  link: 'http://example.com',
  store: 'Mock Store',
  format: 1, // Physical
});

describe('getUniqueAuthors', () => {
  // Test Case 1: Standard case with multiple unique authors
  test('should return unique authors from a diverse list of books', () => {
    const books: IBookInfo[] = [
      createMockBook('Author A'),
      createMockBook('Author B'),
      createMockBook('Author C'),
    ];
    const result = getUniqueAuthors(books);
    // The order of elements in a Set conversion is generally insertion order, but we check content regardless of order.
    expect(result).toHaveLength(3);
    expect(result).toEqual(
      expect.arrayContaining(['Author A', 'Author B', 'Author C']),
    );
  });

  // Test Case 2: Duplicate authors
  test('should filter out duplicate author names', () => {
    const books: IBookInfo[] = [
      createMockBook('Author A'),
      createMockBook('Author B'),
      createMockBook('Author A'), // Duplicate
      createMockBook('Author C'),
      createMockBook('Author B'), // Duplicate
    ];
    const result = getUniqueAuthors(books);
    expect(result).toHaveLength(3);
    expect(result).toEqual(
      expect.arrayContaining(['Author A', 'Author B', 'Author C']),
    );
  });

  // Test Case 3: Handle authors with whitespace (should be trimmed and de-duplicated)
  test('should trim whitespace and correctly de-duplicate authors', () => {
    const books: IBookInfo[] = [
      createMockBook(' Author X '), // Leading and trailing space
      createMockBook('Author Y'),
      createMockBook('Author X'), // Duplicate of trimmed author
      createMockBook('Author Z\t'), // Trailing tab
      createMockBook('\nAuthor Z'), // Leading newline
    ];
    const result = getUniqueAuthors(books);
    expect(result).toHaveLength(3);
    expect(result).toEqual(
      expect.arrayContaining(['Author X', 'Author Y', 'Author Z']),
    );
  });

  // Test Case 4: Handle invalid author values (null, undefined, empty string, whitespace only)
  test('should filter out books with null, empty, or whitespace-only authors', () => {
    const books: IBookInfo[] = [
      createMockBook('Valid Author'),
      createMockBook(null),
      createMockBook(undefined as unknown as string), // Mocking potential undefined from a nullable field
      createMockBook(''),
      createMockBook(' '), // Whitespace only
      createMockBook('\t\n'), // Whitespace only
    ];
    const result = getUniqueAuthors(books);
    expect(result).toHaveLength(1);
    expect(result).toEqual(['Valid Author']);
  });

  // Test Case 5: Empty input array
  test('should return an empty array for an empty input array', () => {
    const books: IBookInfo[] = [];
    const result = getUniqueAuthors(books);
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  // Test Case 6: Array with only invalid author values
  test('should return an empty array if all authors are invalid', () => {
    const books: IBookInfo[] = [
      createMockBook(null),
      createMockBook(''),
      createMockBook('  '),
    ];
    const result = getUniqueAuthors(books);
    expect(result).toHaveLength(0);
    expect(result).toEqual([]);
  });

  // Test Case 7: Case sensitivity check (The implementation is case sensitive, which is often desired)
  test('should treat authors with different casing as unique', () => {
    const books: IBookInfo[] = [
      createMockBook('J.K. Rowling'),
      createMockBook('j.k. rowling'),
    ];
    const result = getUniqueAuthors(books);
    expect(result).toHaveLength(2);
    expect(result).toEqual(
      expect.arrayContaining(['J.K. Rowling', 'j.k. rowling']),
    );
  });
});
