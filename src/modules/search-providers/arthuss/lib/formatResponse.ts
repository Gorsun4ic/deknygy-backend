import { ArthussResponseDto } from '../dto/response.dto';
import { IBookInfo } from '../../../common/interfaces/api/book.info';
import { STORE_NAME } from '../constants/api.params';
import { formatPrice } from '../../../common/utils/formatPrice';

export function formatArthussResponse(
  response: ArthussResponseDto[],
): IBookInfo[] {
  return response
    .filter((book) => book.fields?.name?.name && book.href && book.href !== '')
    .map((book) => {
      // Get price - prefer special price, fallback to regular price
      let price = 0;
      if (book.fields.price) {
        const priceValue = book.fields.price.special || book.fields.price.price;
        if (priceValue) {
          price = formatPrice(priceValue);
        }
      }

      return {
        title: book.fields.name!.name,
        link: book.href!,
        author: book.fields.manufacturer?.manufacturer || null,
        price: price,
        store: STORE_NAME,
        isbn: book.fields.isbn || null,
        publisher: 'Arthuss',
        format: 1, // physical
        available: true,
      };
    });
}
