import { KnygolandBookDto } from '../dto/response.dto';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { STORE_NAME } from '../constants/api.params';
import { formatPrice } from 'src/modules/common/utils/formatPrice';

export function formatKnygolandResponse(
  response: KnygolandBookDto[],
): IBookInfo[] {
  console.log(response);
  return response.map((book) => ({
    title: book.title,
    link: book.link,
    price: book.price ? formatPrice(book.price.toString()) : 0,
    store: STORE_NAME,
    isbn: null,
    publisher: book.publisher,
    format: 1,
    author: null,
    available: book.available,
  }));
}
