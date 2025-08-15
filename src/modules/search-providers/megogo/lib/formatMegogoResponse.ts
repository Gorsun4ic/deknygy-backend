import { STORE_NAME } from '../contants/api.params';
import { MegogoBookDto } from '../dto/response.dto';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { BASE_URL } from '../contants/api.params';
import { formatPrice } from 'src/modules/common/utils/formatPrice';

export function formatMegogoResponse(books: MegogoBookDto[]): IBookInfo[] {
  return books.map((book) => {
    return {
      title: book.title,
      author: book.authors
        .map((author) => author.first_name + ' ' + author.last_name)
        .join(', '),
      price: book.purchases.price
        ? formatPrice(book.purchases.price.toString())
        : 0,
      link: `${BASE_URL}/book/${book.link}`,
      store: STORE_NAME,
      availability: book.available === 'ready_for_order',
      format: 1,
      isbn: null,
      publisher: null,
    };
  });
}
