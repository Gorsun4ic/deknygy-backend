import { IBookInfo } from '../../../common/interfaces/api/book.info';
import { ReadEatBookDto } from '../dto/response';
import { STORE_NAME, BASE_URL } from '../constants/api.params';
import { formatPrice } from '../../../common/utils/formatPrice';

export function formatReadEatResponse(response: ReadEatBookDto[]): IBookInfo[] {
  return response.map((book) => ({
    title: book.title,
    link: `${BASE_URL}${book.link}`,
    price: book.price ? formatPrice(book.price.toString()) : 0,
    store: STORE_NAME,
    available: true,
    isbn: null,
    publisher: null,
    format: 1,
    author: book.author,
  }));
}
