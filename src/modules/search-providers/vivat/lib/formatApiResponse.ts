import { VivatBookDto, VivatDetailedBookDto } from '../dto/response.dto';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { STORE_NAME } from '../constants/api.params';
import { formatPrice } from 'src/modules/common/utils/formatPrice';
import { clearIsbn } from 'src/modules/common/utils/clearIsbn';

export function formatVivatResponse(
  books: VivatBookDto[],
  details: VivatDetailedBookDto[],
): IBookInfo[] {
  return books.map((book, index) => {
    const detail = details[index];

    // Extract author from characteristics
    const authorCharacteristic = detail?.allCharacteristics?.find(
      (char) => char.code === 'author_code_entityelement',
    );
    const author = authorCharacteristic?.value?.[0]?.text || null;

    // Extract ISBN from characteristics
    const isbnCharacteristic = detail?.allCharacteristics?.find(
      (char) => char.code === 'ean_isbn',
    );
    const isbn = isbnCharacteristic?.value?.[0]?.text || null;

    // Extract publisher from characteristics
    const publisherCharacteristic = detail?.allCharacteristics?.find(
      (char) => char.code === 'publisher_code_entityelement',
    );
    const publisher = publisherCharacteristic?.value?.[0]?.text || STORE_NAME;

    // Determine format based on book type
    const format = detail?.bookType?.currentItem?.bookType === 'ebook' ? 2 : 1;

    return {
      title: book.name,
      author: author,
      price: detail ? +formatPrice(detail.price.priceRebate.toString()) : 0,
      link: book.url,
      store: STORE_NAME,
      available: book.is_presence,
      format: format,
      isbn: isbn ? clearIsbn(isbn) : null,
      publisher: publisher,
    };
  });
}
