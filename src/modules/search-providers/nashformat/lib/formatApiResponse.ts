import {
  IBookInfo,
  FormatType,
} from 'src/modules/common/interfaces/api/book.info';
import {
  NashformatBookDataDto,
  NashformatProductDto,
} from '../dto/response.dto';
import { BASE_URL, STORE_NAME } from '../constants/api.params';
import { formatPrice } from 'src/modules/common/utils/formatPrice';

/**
 * Maps a single Nashformat book DTO to the standard IBookInfo interface.
 * @param data The NashformatBookDataDto to map.
 * @returns The mapped IBookInfo object.
 */
export function formatNashformatResponse(
  book: NashformatBookDataDto,
): IBookInfo {
  try {
    const title = book?.name ?? undefined;

    const author =
      book?.author && book?.author.length > 0 ? book?.author : null;

    const price = formatPrice(book?.price);

    // Determine availability based on stock status
    const availability = book?.stock ?? false;

    const link = `${BASE_URL}${book?.url}.html`;

    const format = book?.type as FormatType;

    return {
      title,
      author,
      price,
      link,
      store: STORE_NAME,
      availability,
      format,
      isbn: undefined,
      publisher: undefined,
    };
  } catch (e) {
    throw new Error(`Failed to format Nashformat response: ${e}`);
  }
}

/**
 * Maps the full Nashformat API response to a simplified array of IBookInfo.
 * @param response The NashformatResponseDto received from the API.
 * @returns An array of IBookInfo objects.
 */
export function mapNashformatResponseToBookInfo(
  response: NashformatProductDto[],
): IBookInfo[] | [] {
  if (!response) return [];

  return response
    .filter((book) => book.type === 'product')
    .map((book) => formatNashformatResponse(book?.data));
}
