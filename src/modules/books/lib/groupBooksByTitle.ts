import { IBookInfo } from '../../common/interfaces/api/book.info';

export function groupBooksByTitle(
  books: IBookInfo[],
): Record<string, { 1: IBookInfo[]; 2: IBookInfo[]; 3: IBookInfo[] }>[] {
  const tempMap: Record<
    string,
    {
      variants: Map<string, number>;
      formats: {
        1: IBookInfo[];
        2: IBookInfo[];
        3: IBookInfo[];
      };
    }
  > = {};

  for (const book of books) {
    const normalized = book.title.toLowerCase().trim();
    let formatType = book.format ?? 1;

    if (![1, 2, 3].includes(formatType)) {
      formatType = 1;
    }

    if (!tempMap[normalized]) {
      tempMap[normalized] = {
        variants: new Map([[book.title, 1]]),
        formats: { 1: [], 2: [], 3: [] },
      };
    } else {
      const prev = tempMap[normalized].variants.get(book.title) ?? 0;
      tempMap[normalized].variants.set(book.title, prev + 1);
    }

    tempMap[normalized].formats[formatType].push(book);
  }

  const result: Record<
    string,
    { 1: IBookInfo[]; 2: IBookInfo[]; 3: IBookInfo[] }
  >[] = [];

  for (const group of Object.values(tempMap)) {
    let displayTitle = '';
    let maxCount = -1;

    for (const [variant, count] of group.variants.entries()) {
      if (count > maxCount) {
        displayTitle = variant;
        maxCount = count;
      }
    }

    result.push({
      [displayTitle]: group.formats,
    });
  }

  return result;
}
