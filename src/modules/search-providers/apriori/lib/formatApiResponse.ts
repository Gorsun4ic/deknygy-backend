import { AprioriBookDto, AprioriSpecificBookDto } from '../dto/response.dto';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { BASE_URL, STORE_NAME } from '../constants/api.params';
import { formatPrice } from 'src/modules/common/utils/formatPrice';
import { clearIsbn } from 'src/modules/common/utils/clearIsbn';

export function formatAprioriResponse(
  books: AprioriBookDto[],
  details: AprioriSpecificBookDto[],
): IBookInfo[] {
  return books.map((book, index) => {
    const detail = details[index];
    const isbn = detail.isbn || detail.isbnLocal;
    return {
      title: book.name,
      author: book.author || null,
      price: formatPrice(book.price),
      link: `${BASE_URL}/product/${book.id}`,
      store: STORE_NAME,
      availability: book.stock > 0,
      format: 1,
      isbn: isbn ? clearIsbn(isbn) : null,
      publisher: STORE_NAME,
    };
  });
}
