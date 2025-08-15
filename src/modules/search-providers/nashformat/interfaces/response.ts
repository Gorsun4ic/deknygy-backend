export enum NashformatItemTypes {
  PRODUCT = 'product',
  SEARCH = 'search',
  NOT_FOUND = 'not_found',
}

export interface INashformatBook {
  data: {
    name: string;
    url: string;
    price: string;
    author: string;
    type: number;
    stock: boolean;
  };
  type: NashformatItemTypes;
}
