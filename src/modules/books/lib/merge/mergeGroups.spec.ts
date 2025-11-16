import { type IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { type TempMap } from '../../interfaces/temp.map.type';
import { mergeGroups } from './mergeGroups';
import { cleanEbookIndicator } from 'src/modules/common/utils/cleanEbookTitle';

jest.mock('src/modules/common/utils/cleanEbookTitle');

describe('mergeGroups', () => {
  const mockCleanEbookIndicator = cleanEbookIndicator as jest.MockedFunction<
    typeof cleanEbookIndicator
  >;

  beforeEach(() => {
    // Mock cleanEbookIndicator to return the title as-is
    mockCleanEbookIndicator.mockImplementation((title: string) => title);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const book1: IBookInfo = {
    title: 'Book A',
    link: 'linkA',
    store: 'StoreX',
    format: 1,
    author: 'Author A',
    price: 100,
  };
  const book2: IBookInfo = {
    title: 'Book B',
    link: 'linkB',
    store: 'StoreX',
    format: 1,
    author: 'Author B',
    price: 100,
  };
  const book3: IBookInfo = {
    title: 'Book C',
    link: 'linkC',
    store: 'StoreY',
    format: 1,
    author: 'Author C',
    price: 100,
  };

  let tempMap: TempMap;

  // Setup initial state before each test
  beforeEach(() => {
    tempMap = {
      GroupA: {
        formats: {
          1: [book1],
          2: [],
          3: [book2],
        },
        variants: new Map([
          ['var1', 5],
          ['var2', 2],
        ]),
      },
      GroupB: {
        formats: {
          1: [book3],
          2: [],
          3: [],
        },
        variants: new Map([
          ['var1', 3],
          ['var3', 10],
        ]),
      },
      GroupC: {
        formats: { 1: [], 2: [], 3: [] },
        variants: new Map(),
      },
    };
  });

  // Test Case 1: Basic merge (no duplicates)
  test('should correctly merge formats and variants from source to destination', () => {
    const merges: [string, string][] = [['GroupA', 'GroupB']];

    mergeGroups(merges, tempMap);

    // 1. Check if GroupA was deleted
    expect(tempMap['GroupA']).toBeUndefined();

    // 2. Check merged GroupB formats
    const mergedFormats = tempMap['GroupB'].formats;
    expect(mergedFormats[1]).toHaveLength(2); // book3 (original) + book1 (merged)
    expect(mergedFormats[1]).toContain(book1);
    expect(mergedFormats[1]).toContain(book3);
    expect(mergedFormats[2]).toHaveLength(0);
    expect(mergedFormats[3]).toHaveLength(1); // book2 (merged)
    expect(mergedFormats[3]).toContain(book2);

    // 3. Check merged GroupB variants (var1: 3+5=8, var2: 2, var3: 10)
    const mergedVariants = tempMap['GroupB'].variants;
    expect(mergedVariants.get('var1')).toBe(8);
    expect(mergedVariants.get('var2')).toBe(2);
    expect(mergedVariants.get('var3')).toBe(10);
  });

  // Test Case 2: Duplicate prevention for formats
  test('should prevent adding duplicate books to the destination group formats', () => {
    // Modify GroupC to contain a duplicate of book1
    tempMap['GroupC'].formats[1].push(book1);

    // GroupA has book1, GroupC has book1
    const merges: [string, string][] = [['GroupA', 'GroupC']];

    mergeGroups(merges, tempMap);

    // Check merged GroupC formats
    const mergedFormats = tempMap['GroupC'].formats;
    expect(mergedFormats[1]).toHaveLength(1); // Should only contain the single instance of book1
    expect(mergedFormats[1][0]).toEqual(book1); // Ensure the content is correct

    // Check merged GroupC variants (var1: 5, var2: 2)
    const mergedVariants = tempMap['GroupC'].variants;
    expect(mergedVariants.get('var1')).toBe(5);
    expect(mergedVariants.get('var2')).toBe(2);
  });

  // Test Case 3: Multiple merges
  test('should handle sequential merges correctly and delete all source groups', () => {
    // Add a fourth group to test a second merge
    tempMap['GroupD'] = {
      formats: { 1: [book3], 2: [], 3: [] },
      variants: new Map([['var4', 7]]),
    };

    const merges: [string, string][] = [
      ['GroupA', 'GroupB'],
      ['GroupD', 'GroupC'],
    ];

    mergeGroups(merges, tempMap);

    // 1. Check deletion
    expect(tempMap['GroupA']).toBeUndefined();
    expect(tempMap['GroupD']).toBeUndefined();

    // 2. Check GroupB merge (from Test Case 1)
    const mergedFormatsB = tempMap['GroupB'].formats;
    expect(mergedFormatsB[1]).toHaveLength(2); // book3 + book1
    expect(mergedFormatsB[3]).toHaveLength(1); // book2
    expect(tempMap['GroupB'].variants.get('var1')).toBe(8);

    // 3. Check GroupC merge (GroupD into GroupC)
    const mergedFormatsC = tempMap['GroupC'].formats;
    expect(mergedFormatsC[1]).toHaveLength(1); // book3
    expect(mergedFormatsC[1]).toContain(book3);

    const mergedVariantsC = tempMap['GroupC'].variants;
    expect(mergedVariantsC.get('var4')).toBe(7);
  });

  // Test Case 4: Handling missing keys (should warn and skip, but not crash)
  test('should skip merge operation if source or destination key is missing', () => {
    const consoleWarnSpy = jest
      .spyOn(console, 'warn')
      .mockImplementation(() => {});

    const merges: [string, string][] = [
      ['GroupA', 'MissingDst'],
      ['MissingSrc', 'GroupB'],
    ];

    const initialMapKeys = Object.keys(tempMap);

    mergeGroups(merges, tempMap);

    // Expect warnings for failed merges
    expect(consoleWarnSpy).toHaveBeenCalledTimes(2);

    // Expect no changes to the map structure (no deletions or additions)
    expect(Object.keys(tempMap)).toEqual(initialMapKeys);
    expect(tempMap['GroupA']).toBeDefined();
    expect(tempMap['GroupB']).toBeDefined();

    consoleWarnSpy.mockRestore();
  });
});
