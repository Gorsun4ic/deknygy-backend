import { type IBookInfo } from '../../common/interfaces/api/book.info';

type SearchProviderService = {
  search(query: string): Promise<IBookInfo[] | []>;
};

export type ApiCall = {
  name: string;
  service: SearchProviderService;
};
