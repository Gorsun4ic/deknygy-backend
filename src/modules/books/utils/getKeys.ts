import { type TempMap } from '../interfaces/temp.map.type';

/**
 * Gets all the keys from the temporary map that contain '___'.
 * @param tempMap The temporary map.
 * @returns An array of keys.
 */
export const getKeys = (tempMap: TempMap): string[] => {
  return Object.keys(tempMap).filter((k) => k.includes('___'));
};
