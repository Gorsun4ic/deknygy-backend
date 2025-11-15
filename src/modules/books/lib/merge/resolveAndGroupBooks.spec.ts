import { jest } from '@jest/globals';
import { type IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { type TempMap } from '../../interfaces/temp.map.type';
import { IBookGroup } from '../../interfaces/book.group';
import { resolveAndGroupBooks } from './resolveAndGroupBooks';

// Variable to capture the map state before the merge mock modifies it
let preMergeKeys: string[] = [];

jest.mock('../createGroupingKey', () => ({
  createGroupingKey: jest.fn(),
}));
jest.mock('../../utils/addBookToGroup', () => ({
  addBookToGroup: jest.fn(),
}));
jest.mock('./authorTypo', () => ({
  mergeAuthorTypoGroups: jest.fn(),
}));
jest.mock('../../utils/selectDisplayTitle', () => ({
  selectDisplayTitle: jest.fn(),
}));

import { createGroupingKey } from '../createGroupingKey';
import { addBookToGroup } from '../../utils/addBookToGroup';
import { mergeAuthorTypoGroups } from './authorTypo';
import { selectDisplayTitle } from '../../utils/selectDisplayTitle';

const mockCreateGroupingKey = createGroupingKey as jest.Mock;
const mockAddBookToGroup = addBookToGroup as jest.Mock;
const mockMergeAuthorTypoGroups = mergeAuthorTypoGroups as jest.Mock;
const mockSelectDisplayTitle = selectDisplayTitle as jest.Mock;

describe('resolveAndGroupBooks', () => {
  const mockBooks: IBookInfo[] = [
    {
      title: 'Book A',
      format: 1,
      link: 'l1',
      store: 's1',
      author: 'a1',
      price: 100,
    },
    {
      title: 'Book B',
      format: 2,
      link: 'l2',
      store: 's2',
      author: 'a2',
      price: 100,
    },
    {
      title: 'Book C',
      format: 3,
      link: 'l3',
      store: 's3',
      author: 'a3',
      price: 100,
    },
  ];

  // Mock group data that *simulates* the state of tempMap AFTER merging
  const mockGroup1: IBookGroup = {
    variants: new Map([['Title 1', 5]]),
    formats: { 1: [mockBooks[0]], 2: [], 3: [] },
  };
  const mockGroup2: IBookGroup = {
    variants: new Map([['Title 2', 10]]),
    formats: { 1: [], 2: [mockBooks[1]], 3: [mockBooks[2]] },
  };

  beforeEach(() => {
    // Reset the capture variable
    preMergeKeys = [];
    jest.clearAllMocks();

    // 2. Mock createGroupingKey to return deterministic keys for initial grouping
    mockCreateGroupingKey
      .mockReturnValueOnce('Key_1') // for Book A
      .mockReturnValueOnce('Key_2') // for Book B
      .mockReturnValueOnce('Key_1'); // for Book C (to test group creation/reuse)

    // 3. Mock the merge function to simulate a merge result.
    mockMergeAuthorTypoGroups.mockImplementation((tempMap: TempMap) => {
      preMergeKeys = Object.keys(tempMap);

      // If input map is empty → do nothing
      if (preMergeKeys.length === 0) return;

      // Otherwise simulate merge
      Object.keys(tempMap).forEach((key) => delete tempMap[key]);
      tempMap['FinalKey1'] = mockGroup1;
      tempMap['FinalKey2'] = mockGroup2;
    });

    // 4. Mock the display title selection for the final output step
    mockSelectDisplayTitle
      .mockReturnValueOnce('The Final Book One') // for mockGroup1
      .mockReturnValueOnce('The Final Book Two'); // for mockGroup2
  });

  test('should correctly orchestrate grouping, merging, and final output generation', () => {
    const result = resolveAndGroupBooks(mockBooks);

    // --- Step 1: Initial Grouping Verification ---
    expect(mockCreateGroupingKey).toHaveBeenCalledTimes(mockBooks.length);
    expect(mockAddBookToGroup).toHaveBeenCalledTimes(mockBooks.length);

    // --- Step 2: Merging Verification ---
    expect(mockMergeAuthorTypoGroups).toHaveBeenCalledTimes(1);

    // Assert the captured keys, which represent the state AFTER initial grouping
    expect(preMergeKeys).toEqual(['Key_1', 'Key_2']);

    // --- Step 3: Final Output Verification ---
    expect(mockSelectDisplayTitle).toHaveBeenCalledTimes(2);

    // Should return the final structured array
    expect(result).toHaveLength(2);
    expect(result).toEqual([
      { 'The Final Book One': mockGroup1.formats },
      { 'The Final Book Two': mockGroup2.formats },
    ]);
  });

  test('should handle an empty input array gracefully', () => {
    const result = resolveAndGroupBooks([] as IBookInfo[]);

    // No processing should occur
    expect(mockCreateGroupingKey).not.toHaveBeenCalled();
    expect(mockAddBookToGroup).not.toHaveBeenCalled();

    // The merge function will be called with an empty map, but we only need to check the outputs
    expect(mockSelectDisplayTitle).not.toHaveBeenCalled();

    // Should return an empty array
    expect(result).toEqual([]);
  });
});
