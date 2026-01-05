export const randomItem = (arr: any[]) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  arr[Math.floor(Math.random() * arr.length)];
