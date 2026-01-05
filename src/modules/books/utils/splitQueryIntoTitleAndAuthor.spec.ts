import { splitQueryIntoTitleAndAuthor } from './splitQueryIntoTitleAndAuthor';

describe('splitQueryIntoTitleAndAuthor', () => {
  // --- New Tests: Semantic Splitting ---

  test('should split correctly on the single-word delimiter "by"', () => {
    expect(splitQueryIntoTitleAndAuthor('The Martian by Andy Weir')).toEqual({
      title: 'the martian',
      author: 'Andy Weir',
    });
  });

  test('should handle capitalization differences for "by"', () => {
    expect(splitQueryIntoTitleAndAuthor('Dune BY Frank Herbert')).toEqual({
      title: 'dune',
      author: 'Frank Herbert',
    });
  });

  test('should split correctly on the multi-word delimiter "author of"', () => {
    // Note: This pattern is less common for *splitting* but the delimiter should be skipped.
    expect(
      splitQueryIntoTitleAndAuthor('The Road author of Cormac McCarthy'),
    ).toEqual({
      title: 'the road',
      author: 'Cormac McCarthy',
    });
  });

  test('should split correctly on the single-word delimiter "from"', () => {
    expect(
      splitQueryIntoTitleAndAuthor('The Great Gatsby from F Scott Fitzgerald'),
    ).toEqual({
      title: 'the great gatsby',
      author: 'F Scott Fitzgerald',
    });
  });

  test('should split correctly on "written by"', () => {
    expect(
      splitQueryIntoTitleAndAuthor('Foundation written by Isaac Asimov'),
    ).toEqual({
      title: 'foundation',
      author: 'Isaac Asimov',
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
