// mergeAuthorTypoGroups.test.ts

import { mergeAuthorTypoGroups } from './authorTypo';
import { mergeGroups } from './mergeGroups';
import { getKeys } from '../../utils/getKeys';
import { getGroupLength } from '../../utils/getGroupLength';
import { normalizeString } from '../../utils/normalizeString';
import { TempMap } from '../../interfaces/temp.map.type';
import { IBookGroup } from '../../interfaces/book.group';
import {
  FormatType,
  IBookInfo,
} from 'src/modules/common/interfaces/api/book.info';

jest.mock('./mergeGroups');
jest.mock('../../utils/getKeys');
jest.mock('../../utils/getGroupLength');
jest.mock('../../utils/normalizeString');
jest.mock('../../../common/utils/cleanEbookTitle');

// Helper: create a valid formatted container
const emptyFormats = (): Record<Exclude<FormatType, 0>, IBookInfo[]> =>
  ({
    1: [],
    2: [],
    3: [],
  }) as Record<Exclude<FormatType, 0>, IBookInfo[]>;

// Factory for test groups
export const mockGroup = (variantKeys: string[]): IBookGroup => ({
  variants: new Map(variantKeys.map((key) => [key, 1])),
  formats: emptyFormats(),
});

describe('mergeAuthorTypoGroups', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const tempMap: TempMap = {
    'Title___John Doe': mockGroup(['Title___John Doe']),
    'Title___Jon Doe': mockGroup(['Title___Jon Doe']),
    Title___: mockGroup(['Title___']),
    Another___Author: mockGroup(['Another___Author']),
  };

  test('merges groups when titles match and authors are similar', () => {
    (getKeys as jest.Mock).mockReturnValue([
      'Title___John Doe',
      'Title___Jon Doe',
    ]);

    (normalizeString as jest.Mock).mockImplementation((a: string) =>
      a.toLowerCase(),
    );

    (getGroupLength as jest.Mock).mockReturnValue(1);

    mergeAuthorTypoGroups(tempMap, 0.85);

    expect(mergeGroups).toHaveBeenCalledWith(
      [['Title___Jon Doe', 'Title___John Doe']],
      tempMap,
    );
  });

  test('merges when title is equal and one author is missing (title-only)', () => {
    (getKeys as jest.Mock).mockReturnValue(['Title___John Doe', 'Title___']);

    (getGroupLength as jest.Mock).mockReturnValue(1);

    mergeAuthorTypoGroups(tempMap);

    expect(mergeGroups).toHaveBeenCalledWith(
      [['Title___', 'Title___John Doe']],
      tempMap,
    );
  });

  test('does NOT merge when titles differ', () => {
    (getKeys as jest.Mock).mockReturnValue([
      'Title___John Doe',
      'Another___Author',
    ]);

    mergeAuthorTypoGroups(tempMap);

    expect(mergeGroups).toHaveBeenCalledWith([], tempMap);
  });

  test('prefers merging into the author-anchored key', () => {
    (getKeys as jest.Mock).mockReturnValue(['Title___', 'Title___John Doe']);

    // title-only has length 1, author group length 2 -> so merge title-only → author
    (getGroupLength as jest.Mock).mockImplementation((g) =>
      g === tempMap['Title___'] ? 1 : 2,
    );

    mergeAuthorTypoGroups(tempMap);

    expect(mergeGroups).toHaveBeenCalledWith(
      [['Title___', 'Title___John Doe']],
      tempMap,
    );
  });

  test('uses group length tiebreaker and merges smaller into larger', () => {
    (getKeys as jest.Mock).mockReturnValue([
      'Title___John Doe',
      'Title___Jon Doe',
    ]);

    // first group smaller
    (getGroupLength as jest.Mock).mockImplementation((g) =>
      g === tempMap['Title___John Doe'] ? 1 : 5,
    );

    mergeAuthorTypoGroups(tempMap);

    expect(mergeGroups).toHaveBeenCalledWith(
      [['Title___John Doe', 'Title___Jon Doe']],
      tempMap,
    );
  });

  test('author length tiebreaker when counts equal', () => {
    (getKeys as jest.Mock).mockReturnValue(['Title___Jo', 'Title___John']);

    (getGroupLength as jest.Mock).mockReturnValue(3);

    mergeAuthorTypoGroups(tempMap);

    // "Jo" should merge → "John" (longer author name)
    expect(mergeGroups).toHaveBeenCalledWith(
      [['Title___Jo', 'Title___John']],
      tempMap,
    );
  });
});
