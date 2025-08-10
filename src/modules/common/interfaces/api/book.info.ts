/*
 * 1 - Physical
 * 2 - E-book
 * 3 - Audio
 */
type FormatType = 1 | 2 | 3;

export interface IBookInfo {
  title: string;
  author: string;
  price: number;
  link: string;
  store: string;
  availability?: boolean;
  format?: FormatType;
  isbn?: string;
  publisher?: string;
  optionId?: number;
}
