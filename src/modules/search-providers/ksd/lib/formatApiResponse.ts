import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { KSDBookDto } from '../dto/response.dto';
import { STORE_NAME } from '../constants/api.params';
import { formatPrice } from 'src/modules/common/utils/formatPrice';

export function formatKSDResponse(response: KSDBookDto[]): IBookInfo[] {
  return response.map((book) => ({
    title: book.title,
    link: book.link,
    price: book.price ? formatPrice(book.price.toString()) : 0,
    available: book.available,
    store: STORE_NAME,
    isbn: null,
    publisher: null,
    format: 1,
    author: null,
  }));
}
