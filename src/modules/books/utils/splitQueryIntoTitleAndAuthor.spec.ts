import { splitQueryIntoTitleAndAuthor } from './splitQueryIntoTitleAndAuthor';

describe('splitQueryIntoTitleAndAuthor', () => {
  // --- New Tests: Semantic Splitting ---

  test('should split correctly on the single-word delimiter "by"', () => {
    expect(splitQueryIntoTitleAndAuthor('The Martian by Andy Weir')).toEqual({
      title: 'The Martian',
      author: 'Andy Weir',
    });
  });

  test('should handle capitalization differences for "by"', () => {
    expect(splitQueryIntoTitleAndAuthor('Dune BY Frank Herbert')).toEqual({
      title: 'Dune',
      author: 'Frank Herbert',
    });
  });

  test('should split correctly on the multi-word delimiter "author of"', () => {
    // Note: This pattern is less common for *splitting* but the delimiter should be skipped.
    expect(
      splitQueryIntoTitleAndAuthor('The Road author of Cormac McCarthy'),
    ).toEqual({
      title: 'The Road',
      author: 'Cormac McCarthy',
    });
  });

  test('should split correctly on the single-word delimiter "from"', () => {
    expect(
      splitQueryIntoTitleAndAuthor('The Great Gatsby from F Scott Fitzgerald'),
    ).toEqual({
      title: 'The Great Gatsby',
      author: 'F Scott Fitzgerald',
    });
  });

  test('should split correctly on "written by"', () => {
    expect(
      splitQueryIntoTitleAndAuthor('Foundation written by Isaac Asimov'),
    ).toEqual({
      title: 'Foundation',
      author: 'Isaac Asimov',
    });
  });

  // --- Fallback Heuristic Tests (carried over from previous review) ---

  test('should fall back to heuristic when no delimiter is found (prioritizing short author)', () => {
    // 5-word query: Split 4+1 is preferred over 2+3, 3+2 due to backward iteration.
    expect(
      splitQueryIntoTitleAndAuthor('Word1 Word2 Word3 Word4 Word5'),
    ).toEqual({
      title: 'Word1 Word2 Word3 Word4',
      author: 'Word5',
    });
  });

  test('should fall back correctly for a 3-word query (Split 2+1 preferred)', () => {
    // SplitPoint=2: Title="Moby Dick", Author="Herman"
    expect(splitQueryIntoTitleAndAuthor('Moby Dick Herman')).toEqual({
      title: 'Moby Dick',
      author: 'Herman',
    });
  });

  // --- Edge Cases / Failure to Split ---

  test('should treat query as title if semantic split results in too short an author', () => {
    // Split on 'by': Title='Title', Author='A' (len 1). Fails minimum length check.
    expect(splitQueryIntoTitleAndAuthor('Title by A')).toEqual({
      title: 'Title by A',
      author: null,
    });
  });
});
