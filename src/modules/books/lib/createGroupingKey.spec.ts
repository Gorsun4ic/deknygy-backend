import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { createGroupingKey } from './createGroupingKey';

describe('createGroupingKey', () => {
  // Test Case 1: Basic title and author, no special characters or prepositions
  test('should create a basic key with normalized title and author', () => {
    const book: IBookInfo = {
      title: 'Foundation',
      author: 'Isaac Asimov',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
    };
    // normalizeString('Foundation') -> 'foundation'
    // normalizeString('Isaac Asimov') -> 'isaac asimov'
    expect(createGroupingKey(book)).toBe('foundation___isac asimov');
  });

  // Test Case 2: Handling titles with special characters and capitalization
  test('should normalize title and author keys', () => {
    const book: IBookInfo = {
      title: 'Dune: Part One (1965)',
      author: 'Frank Herbert!',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
    };
    // Since 'part' is an indicator, prepositions are NOT removed, and spaces ARE removed.
    // normalizeString('Dune: Part One (1965)') -> 'dune part one 1965'
    // words -> ['dune', 'part', 'one', '1965']
    // isVolume -> true
    expect(createGroupingKey(book)).toBe('dune part one 1965___frank herbert');
  });

  // Test Case 3: Title with Prepositions (Non-Volume) - Prepositions should be removed
  test('should remove prepositions from non-volume titles', () => {
    const book: IBookInfo = {
      title: 'A Tale of Two Cities',
      author: 'Charles Dickens',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
    };
    // normalizeString('A Tale of Two Cities') -> 'a tale of two cities'
    // words -> ['a', 'tale', 'of', 'two', 'cities']
    // filtered (removing 'a') -> ['tale', 'of', 'two', 'cities']
    // Key should be 'taleoftwocities' (assuming 'of' and 'two' are not prepositions in PREPOSITIONS set, which is correct based on the prompt's definition of PREPOSITIONS)
    expect(createGroupingKey(book)).toBe(
      'tale of two cities___charles dickens',
    );
  });

  // Test Case 4: Title is a Volume (Indicator present) - Prepositions should be kept
  test('should keep prepositions and all words in volume titles', () => {
    const book: IBookInfo = {
      title: 'The Lord of the Rings: Book One', // 'book' is an indicator
      author: 'J. R. R. Tolkien',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
    };
    // words -> ['the', 'lord', 'of', 'the', 'rings', 'book', 'one']
    // isVolume -> true (due to 'book')
    // All words are joined without spaces
    expect(createGroupingKey(book)).toBe(
      'the lord of the rings bok one___j r r tolkien',
    );
  });

  // Test Case 5: No Author - Should only include the title part
  test('should create key without author suffix if author is missing', () => {
    const book: IBookInfo = {
      title: 'The Great Gatsby',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
      author: null,
    };
    // words -> ['the', 'great', 'gatsby']
    // filtered (removing 'the') -> ['great', 'gatsby']
    expect(createGroupingKey(book)).toBe('great gatsby');
  });

  // Test Case 6: Empty Title and Missing Author
  test('should return "no_title" if title is empty/null and author is missing', () => {
    const book: IBookInfo = {
      title: '',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
      author: null,
    };
    expect(createGroupingKey(book)).toBe('no_title');
  });

  // Test Case 7: Only Prepositions in Title (Non-Volume)
  test('should return "no_title" when only prepositions remain after filtering', () => {
    const book: IBookInfo = {
      title: 'The A An',
      author: 'Anonymous',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
    };
    // words -> ['the', 'a', 'an']
    // filtered -> []
    // groupingTitle -> ''
    // Final key should use 'no_title' prefix
    expect(createGroupingKey(book)).toBe('no_title___anonymous');
  });

  // Test Case 8: Non-English volume indicator (e.g., 'том')
  test('should treat non-english volume indicators as volumes (keeping prepositions)', () => {
    const book: IBookInfo = {
      title: 'У пошуках втраченого часу: Том 1', // 'У' is a preposition, 'Том' is an indicator
      author: 'Марсель Пруст',
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
    };
    // words -> ['у', 'пошуках', 'втраченого', 'часу', 'том', '1']
    // isVolume -> true (due to 'том')
    expect(createGroupingKey(book)).toBe(
      'у пошукаг втраченого часу том 1___марсел пруст',
    );
  });

  // Test Case 9: Normalization of difficult author name
  test('should normalize difficult author name', () => {
    const book: IBookInfo = {
      title: 'Державець',
      author: "Нікколо Мак'явеллі",
      price: 100,
      link: 'https://example.com',
      store: 'example',
      format: 1,
    };
    // words -> ['державець']
    expect(createGroupingKey(book)).toBe('державец___ніколо макйавелі');
  });
});
