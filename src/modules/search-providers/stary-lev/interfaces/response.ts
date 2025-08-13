export interface IStaryLevResponse {
  data: IStaryLevBook[];
}

export interface IStaryLevBook {
  id: number;
  name: string;
  type: StaryLevFormat;
  slug: string;
  authors: IStaryLevAuthor[];
}

export interface IStaryLevAuthor {
  id: number;
  name: string;
  slug: string;
  types: Array<{ id: number; lael: string; name: string }>;
}

export enum StaryLevFormat {
  PAPER = 'paper',
  EBOOK = 'ebook',
}
