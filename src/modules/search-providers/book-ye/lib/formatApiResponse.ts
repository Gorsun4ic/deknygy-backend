import { BookYeBookDto } from '../dto/reponse.dto';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { STORE_NAME } from '../constants/api.params';
import { formatPrice } from 'src/modules/common/utils/formatPrice';

export function formatBookYeResponse(response: BookYeBookDto[]): IBookInfo[] {
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
