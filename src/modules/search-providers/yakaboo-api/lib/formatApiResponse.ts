import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { YakabooBookSourceDto, YakabooHitDto } from '../dto/reponse.dto';
import { clearIsbn } from 'src/modules/common/utils/clearIsbn';
import { FormatType } from '../interfaces/format.types';
import { BASE_URL } from '../constants/api.params';

/**
 * Maps a single Yakaboo book source DTO to the standard IBookInfo interface.
 * @param source The YakabooBookSourceDto to map.
 * @returns The mapped IBookInfo object.
 */
function formatYakabooResponse(book: YakabooBookSourceDto): IBookInfo {
  const author =
    book.author_label && book.author_label.length > 0
      ? book.author_label[0].label
      : null;

  const publisher =
    book.book_publisher_label && book.book_publisher_label.length > 0
      ? book.book_publisher_label[0].label
      : null;

  const isbn =
    book.book_isbn_label && book.book_isbn_label.length > 0
      ? clearIsbn(book.book_isbn_label[0].label)
      : undefined;

  const available = book.stock && book.stock.some((s) => s.isInStock);

  const optionId =
    book.book_publication_label && book.book_publication_label.length > 0
      ? (book.book_publication_label[0].option_id as unknown as FormatType)
      : undefined;

  let format: 1 | 2 | 3;

  switch (optionId) {
    case FormatType.PHYSICAL:
      format = 1;
      break;
    case FormatType.EBOOK:
      format = 2;
      break;
    case FormatType.AUDIO:
      format = 3;
      break;
    default:
      format = 1;
  }

  const link = `${BASE_URL}${book.slug}.html`;

  return {
    title: book.title,
    author: author,
    price: book.price,
    link,
    store: 'Yakaboo',
    available,
    format: format,
    isbn: isbn,
    publisher: publisher,
  };
}

/**
 * Maps the full Yakaboo API response to a simplified array of IBookInfo.
 * @param response The YakabooResponseDto received from the API.
 * @returns An array of IBookInfo objects.
 */
export function mapYakabooResponseToBookInfo(
  response: YakabooHitDto[],
): IBookInfo[] {
  return response.map((hit) => formatYakabooResponse(hit.source));
}
