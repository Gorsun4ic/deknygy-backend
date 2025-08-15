export enum FormatType {
  PHYSICAL = '781497',
  EBOOK = '781498',
  AUDIO = '781519',
}

export interface ISource {
  name: string;
  url_key: string;
  author_label: Array<{ label: string }>;
  book_publisher_label: Array<{
    label: string;
  }>;
  book_isbn_label: Array<{ label: string }>;
  book_option_id: number[];
  book_publication_label: Array<{ label: string; option_id: number }>;
  price: number;
  stock: Array<{ isInStock: boolean }>;
}

export interface IYakabooResponse {
  hits: {
    hits: Array<{
      _id: string;
      _source: ISource;
    }>;
  };
}
