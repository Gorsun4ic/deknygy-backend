import { getEfficientSimilarity } from './getEfficientSimilarity';

describe('getEfficientSimilarity', () => {
  // Scenario 1: No difference (baseline)
  it('should return 1.0 for exact matches', () => {
    expect(getEfficientSimilarity('Apple', 'Apple')).toBe(1.0);
  });

  // Scenario 2: The core use case (single insertion, leading to 1.0)
  it('should compensate for the single internal insertion ("wir" vs "weir") and return 1.0', () => {
    // Base score is 0.4, but the loop finds 'weir' - 'e' = 'wir', which results in 1.0
    expect(getEfficientSimilarity('wir', 'weir')).toBe(1.0);
    expect(getEfficientSimilarity('weir', 'wir')).toBe(1.0);
  });

  // Scenario 3: Single deletion/insertion at the start
  it('should compensate for insertion/deletion at the start ("aple" vs "apple")', () => {
    // The loop finds 'apple' - 'p' = 'aple', resulting in 1.0
    expect(getEfficientSimilarity('aple', 'apple')).toBe(1.0);
  });

  // Scenario 4: Single deletion/insertion at the end
  it('should compensate for insertion/deletion at the end ("car" vs "cars")', () => {
    // The loop finds 'cars' - 's' = 'car', resulting in 1.0
    expect(getEfficientSimilarity('car', 'cars')).toBe(1.0);
  });

  // Scenario 5: Single Substitution (Equal Length Typos)
  it('should apply the substitution boost for equal length typos ("John" vs "Jhon")', () => {
    // The mock returns a base score of 0.6, which is boosted to 0.7 by the floor logic.
    const score = getEfficientSimilarity('John', 'Jhon');
    expect(score).toBeGreaterThanOrEqual(0.7);
    expect(score).toBeLessThan(1.0);
  });

  // Scenario 6: Too large a difference (should still return the low base score)
  it('should return a low score for words that are significantly different', () => {
    // "book" (4) vs "programming" (11). Diff = 7. Loop is skipped.
    // Mock returns 0.0 for large differences.
    expect(getEfficientSimilarity('book', 'programming')).toBe(0.0);
  });

  // Scenario 7: Difference is > 1 (loop is skipped)
  it('should skip the loop when the length difference is greater than 1', () => {
    // "car" (3) vs "cardigan" (8). Diff = 5. Loop is skipped.
    // Mock should return a very low base score.
    expect(getEfficientSimilarity('car', 'cardigan')).toBeLessThan(0.7);
  });
});
