import { type TempMap } from '../../interfaces/temp.map.type';
import { mergeTitleSubstring } from './titleSubstring';

// --- MOCK EXTERNAL DEPENDENCIES ---
// Mocking the required modules to isolate the function logic.
// The paths here assume they are correctly resolved by the testing framework.
jest.mock('../../utils/getKeys', () => ({
  getKeys: jest.fn(),
}));

jest.mock('string-similarity-js', () => ({
  stringSimilarity: jest.fn(),
}));

jest.mock('../../utils/getCoreTitle', () => ({
  getCoreTitle: jest.fn(),
}));
// ---------------------------------

import { getKeys } from '../../utils/getKeys';
import { stringSimilarity } from 'string-similarity-js';
import { getCoreTitle } from '../../utils/getCoreTitle';

const mockGetKeys = getKeys as jest.Mock;
const mockStringSimilarity = stringSimilarity as jest.Mock;
const mockGetCoreTitle = getCoreTitle as jest.Mock;

describe('mergeTitleSubstring', () => {
  // Define test data keys and their raw titles
  const TITLE_A_FULL = 'Book A (Updated)';
  const TITLE_A_SUBTITLE = 'Book A. Subtitle';
  const TITLE_B = 'Book B. Second Book';

  const KEY_A_SOURCE = `${TITLE_A_FULL}___Author 1`; // Should merge with A_DEST
  const KEY_A_DEST = `${TITLE_A_SUBTITLE}___Author 2`; // Should merge with A_SOURCE
  const KEY_B_CONTROL = `${TITLE_B}___Author 3`; // Control: should NOT merge with A

  const testMap: TempMap = {
    [KEY_A_SOURCE]: { variants: new Map(), formats: { 1: [], 2: [], 3: [] } },
    [KEY_A_DEST]: { variants: new Map(), formats: { 1: [], 2: [], 3: [] } },
    [KEY_B_CONTROL]: { variants: new Map(), formats: { 1: [], 2: [], 3: [] } },
  };

  beforeEach(() => {
    jest.clearAllMocks();

    // 1. Mock getKeys to control the iteration order
    mockGetKeys.mockReturnValue([KEY_A_SOURCE, KEY_A_DEST, KEY_B_CONTROL]);

    // 2. Mock getCoreTitle to define the merge groups
    // Titles that should merge must return the same Core Title result.
    mockGetCoreTitle.mockImplementation((title) => {
      if (title === TITLE_A_FULL || title === TITLE_A_SUBTITLE) {
        return 'Book A Core'; // Same core for merging group
      }
      if (title === TITLE_B) {
        return 'Book B Core'; // Different core for control group
      }
      return title as string; // Fallback
    });
  });

  it('should find and merge keys where core titles are identical and similarity meets the threshold', () => {
    const threshold = 0.85;

    // Mock stringSimilarity to return 1.0 (identical core titles) for merging
    mockStringSimilarity.mockImplementation((coreTitle1, coreTitle2) => {
      if (coreTitle1 === 'Book A Core' && coreTitle2 === 'Book A Core') {
        return 1.0;
      }
      return 0.0; // Assume non-matching core titles have 0 similarity
    });

    const merges = mergeTitleSubstring(testMap, threshold);

    // Expected: KEY_A_SOURCE is processed first and finds KEY_A_DEST as a match.
    // KEY_A_SOURCE vs KEY_A_DEST (1.0 >= 0.85) -> MERGE
    // KEY_A_SOURCE vs KEY_B_CONTROL (0.0 < 0.85) -> SKIP
    expect(merges).toEqual([[KEY_A_SOURCE, KEY_A_DEST]]);
  });

  it('should not merge keys if core titles are dissimilar (similarity < threshold)', () => {
    const threshold = 0.9;

    // Mock stringSimilarity to return a score below the threshold for the intended match
    mockStringSimilarity.mockImplementation((coreTitle1, coreTitle2) => {
      if (coreTitle1 === 'Book A Core' && coreTitle2 === 'Book A Core') {
        return 0.89; // Less than 0.90 threshold
      }
      return 0.0;
    });

    const merges = mergeTitleSubstring(testMap, threshold);

    // Expected: No merges found.
    expect(merges).toEqual([]);
  });

  it('should correctly handle a large group merge (O(N^2) comparison)', () => {
    const TITLE_A_VARIANT = 'Book A (Variant 3)';
    const KEY_A_VARIANT = `${TITLE_A_VARIANT}___Author 3`;

    const largeMap: TempMap = {
      [KEY_A_SOURCE]: { variants: new Map(), formats: { 1: [], 2: [], 3: [] } },
      [KEY_A_DEST]: { variants: new Map(), formats: { 1: [], 2: [], 3: [] } },
      [KEY_A_VARIANT]: {
        variants: new Map(),
        formats: { 1: [], 2: [], 3: [] },
      },
      [KEY_B_CONTROL]: {
        variants: new Map(),
        formats: { 1: [], 2: [], 3: [] },
      },
    };

    // Define the iteration order
    mockGetKeys.mockReturnValue([
      KEY_A_SOURCE,
      KEY_A_DEST,
      KEY_A_VARIANT,
      KEY_B_CONTROL,
    ]);

    // Ensure all three A keys map to 'Book A Core'
    mockGetCoreTitle.mockImplementation((title) => {
      if ([TITLE_A_FULL, TITLE_A_SUBTITLE, TITLE_A_VARIANT].includes(title)) {
        return 'Book A Core';
      }
      return 'Book B Core';
    });

    mockStringSimilarity.mockImplementation((coreTitle1, coreTitle2) => {
      if (coreTitle1 === 'Book A Core' && coreTitle2 === 'Book A Core') {
        return 1.0;
      }
      return 0.0;
    });

    const merges = mergeTitleSubstring(largeMap, 0.85);

    // Iteration 1 (Source: KEY_A_SOURCE):
    // - Merges with KEY_A_DEST and KEY_A_VARIANT.
    // Iteration 2 (Source: KEY_A_DEST):
    // - Merges with KEY_A_VARIANT (KEY_A_SOURCE is already processed).
    // Iteration 3 (Source: KEY_A_VARIANT):
    // - Already processed against all others in the 'A' group.

    expect(merges).toEqual([
      [KEY_A_SOURCE, KEY_A_DEST],
      [KEY_A_SOURCE, KEY_A_VARIANT],
      [KEY_A_DEST, KEY_A_VARIANT],
    ]);
  });
});
