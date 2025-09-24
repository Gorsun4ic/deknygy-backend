/*
 * 1 - Physical
 * 2 - E-book
 * 3 - Audio
 */
export type FormatType = 1 | 2 | 3;

export interface IBookInfo {
  title: string;
  author: string | null;
  price: number;
  link: string;
  store: string;
  available?: boolean;
  format: FormatType;
  isbn?: string | null;
  publisher?: string | null;
  optionId?: number;
}
