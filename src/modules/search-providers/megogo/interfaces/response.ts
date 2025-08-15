import { MegogoBookDto } from '../dto/response.dto';

export interface IMegogoResponse {
  status: string;
  code: number;
  data: {
    items: {
      books: {
        items: Array<MegogoBookDto>;
      };
    };
  };
}
export interface IMegogoBook {
  title: string;
  link: string;
  authors: Array<{
    first_name: string;
    last_name: string;
  }>;
  available: 'ready_for_order' | 'unavailable';
  purchases: {
    price: number;
  };
}
