import { getKeys } from './getKeys';
import { TempMap } from '../interfaces/temp.map.type';
import { mockGroup } from '../lib/merge/authorTypo.spec';

describe('getKeys', () => {
  it('returns only keys that include "___"', () => {
    const tempMap: TempMap = {
      book___123: mockGroup(['book___123']),
      author___abc: mockGroup(['author___abc']),
      normalKey: mockGroup(['normalKey']),
      anotherKey: mockGroup(['anotherKey']),
      test___value: mockGroup(['test___value']),
    };

    const result = getKeys(tempMap);

    expect(result).toEqual(['book___123', 'author___abc', 'test___value']);
  });

  it('returns an empty array when no keys include "___"', () => {
    const tempMap: TempMap = {
      a: mockGroup(['a']),
      b: mockGroup(['b']),
      c: mockGroup(['c']),
    };

    const result = getKeys(tempMap);

    expect(result).toEqual([]);
  });

  it('works with an empty map', () => {
    const tempMap: TempMap = {};

    const result = getKeys(tempMap);

    expect(result).toEqual([]);
  });

  it('does not match keys partially containing underscores unless they include "___"', () => {
    const tempMap: TempMap = {
      one__two: mockGroup(['one__two']),
      three_four: mockGroup(['three_four']),
      ___prefix: mockGroup(['___prefix']),
      suffix___: mockGroup(['suffix___']),
    };

    const result = getKeys(tempMap);

    expect(result).toEqual(['___prefix', 'suffix___']);
  });
});
