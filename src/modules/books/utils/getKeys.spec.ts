import { getKeys } from './getKeys';
import { TempMap } from '../interfaces/temp.map.type';

describe('getKeys', () => {
  it('works with an empty map', () => {
    const tempMap: TempMap = {};

    const result = getKeys(tempMap);

    expect(result).toEqual([]);
  });
});
