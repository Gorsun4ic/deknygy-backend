import { StaryLevResourceDto } from '../dto/response.dto';
import { formatPrice } from 'src/modules/common/utils/formatPrice';
import { clearIsbn } from 'src/modules/common/utils/clearIsbn';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { BASE_URL, STORE_NAME } from '../constants/api.params';

export function formatStaryLevResponse(
  books: StaryLevResourceDto[],
): IBookInfo[] {
  return books.map((book) => {
    const format = book.type === 'book' ? 1 : 2;
    return {
      title: book.name,
      author: book.author.map((author) => author.name).join(', '),
      price: formatPrice(book.price.toString()),
      available: book.qty > 0,
      link: `${BASE_URL}/${book.slug}`,
      store: STORE_NAME,
      isbn: book.isbn ? clearIsbn(book.isbn) : null,
      format,
    };
  });
}
