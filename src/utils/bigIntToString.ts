export const bigIntToString = <T extends object>(obj: T): T => {
  return JSON.parse(
    JSON.stringify(obj, (key: string, value: unknown): unknown =>
      typeof value === 'bigint' ? value.toString() : value,
    ),
  ) as T;
};
