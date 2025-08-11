import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { YakabooBookSourceDto } from '../dto/reponse.dto';
import { clearIsbn } from 'src/modules/common/utils/clearIsbn';
import { FormatType } from '../interfaces/format.types';
import { YakabooResponseDto } from '../dto/reponse.dto';
import { BASE_URL } from '../constants/api.params';

/**
 * Maps a single Yakaboo book source DTO to the standard IBookInfo interface.
 * @param source The YakabooBookSourceDto to map.
 * @returns The mapped IBookInfo object.
 */
function formatYakabooResponse(source: YakabooBookSourceDto): IBookInfo {
  const author =
    source.author_label && source.author_label.length > 0
      ? source.author_label[0].label
      : 'Unknown Author';

  const publisher =
    source.book_publisher_label && source.book_publisher_label.length > 0
      ? source.book_publisher_label[0].label
      : 'Unknown Publisher';

  const isbn =
    source.book_isbn_label && source.book_isbn_label.length > 0
      ? clearIsbn(source.book_isbn_label[0].label)
      : undefined;
  // Determine availability based on stock status
  const availability = source.stock && source.stock.some((s) => s.isInStock);

  const optionId =
    source.book_publication_label && source.book_publication_label.length > 0
      ? (source.book_publication_label[0].option_id as unknown as FormatType)
      : undefined;

  let format: 1 | 2 | 3 | undefined;

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
      format = undefined;
  }

  const link = `${BASE_URL}${source.slug}.html`;

  return {
    title: source.name,
    author: author,
    price: source.price,
    link,
    store: 'Yakaboo',
    availability: availability,
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
  response: YakabooResponseDto,
): IBookInfo[] {
  if (!response || !response.hits || !response.hits.hits) {
    return [];
  }

  return response.hits.hits.map((hit) => formatYakabooResponse(hit.source));
}
