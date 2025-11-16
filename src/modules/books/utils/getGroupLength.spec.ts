import { type IBookGroup } from '../interfaces/book.group';
import { type IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { getGroupLength, getFormatLength } from './getGroupLength';

describe('Book Grouping Utility Functions', () => {
  // Define a reusable empty book info array
  const emptyFormats: IBookGroup['formats'] = {
    1: [],
    2: [],
    3: [],
  };

  // Define a mock book
  const mockBook1: IBookInfo = {
    title: 'The Great Story',
    author: 'John Doe',
    price: 100,
    link: 'https://example.com',
    store: 'example',
    format: 1,
  };
  const mockBook2: IBookInfo = {
    title: 'Epic Journey',
    author: 'John Doe',
    price: 100,
    link: 'https://example.com',
    store: 'example',
    format: 2,
  };
  const mockBook3: IBookInfo = {
    title: 'Final Chapter',
    author: 'John Doe',
    price: 100,
    link: 'https://example.com',
    store: 'example',
    format: 3,
  };

  // Define a complex mock formats object
  const complexFormats: IBookGroup['formats'] = {
    1: [mockBook1, mockBook2], // Length 2 (Print)
    2: [mockBook3], // Length 1 (Ebook)
    3: [], // Length 0 (Audio)
  };

  // Define the mock book group
  const mockGroup: IBookGroup = {
    variants: new Map(), // Unused for these tests
    formats: complexFormats,
  };

  describe('getFormatLength', () => {
    it('should return the correct length for format 1 (Print)', () => {
      expect(getFormatLength(complexFormats, 1)).toBe(2);
    });

    it('should return the correct length for format 2 (Ebook)', () => {
      expect(getFormatLength(complexFormats, 2)).toBe(1);
    });

    it('should return 0 for format 3 (Audio) when the array is empty', () => {
      expect(getFormatLength(complexFormats, 3)).toBe(0);
    });

    it('should return 0 when all format arrays are empty', () => {
      expect(getFormatLength(emptyFormats, 1)).toBe(0);
    });
  });

  describe('getGroupLength', () => {
    it('should calculate the total length when all formats have records', () => {
      // Expected: 2 (Format 1) + 1 (Format 2) + 0 (Format 3) = 3
      expect(getGroupLength(mockGroup)).toBe(3);
    });

    it('should calculate the total length when only one format has records', () => {
      const singleFormatGroup: IBookGroup = {
        variants: new Map(),
        formats: {
          1: [mockBook1],
          2: [],
          3: [],
        },
      };
      // Expected: 1 + 0 + 0 = 1
      expect(getGroupLength(singleFormatGroup)).toBe(1);
    });

    it('should return 0 when the group is completely empty', () => {
      const emptyGroup: IBookGroup = {
        variants: new Map(),
        formats: emptyFormats,
      };
      // Expected: 0 + 0 + 0 = 0
      expect(getGroupLength(emptyGroup)).toBe(0);
    });
  });
});
