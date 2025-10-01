import { IBookInfo } from '../../../common/interfaces/api/book.info';
import { LaboratoryBookDto } from '../dto/response.dto';
import { formatPrice } from '../../../common/utils/formatPrice';
import { STORE_NAME } from '../constants/api.params';

export function formatLaboratoryResponse(
  response: LaboratoryBookDto[],
): IBookInfo[] {
  return response.map((book) => ({
    title: book.title,
    author: book.data.author,
    price: book.price ? formatPrice(book.price) : 0,
    available: true,
    link: book.data.url,
    store: STORE_NAME,
    isbn: null,
    publisher: null,
    format: 1,
  }));
}
