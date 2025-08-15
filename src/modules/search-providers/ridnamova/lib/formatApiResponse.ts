import { RidnamovaBookDto } from '../dto/ridnamova.dto';
import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { STORE_NAME } from '../constants/api.params';

export function formatRidnamovaResponse(
  response: RidnamovaBookDto[],
): IBookInfo[] {
  return response.map((book) => ({
    title: book.title,
    link: book.link,
    price: book.price ? formatPrice(book.price) : 0,
    store: STORE_NAME,
    isbn: null,
    publisher: 'PM',
    format: 1,
    author: book.author,
    available: true,
  }));
}

function formatPrice(priceString: string) {
  // Use a regular expression to match and remove any HTML tags.
  // The expression /\u003C.*?u003E/g matches any text starting with "<" and ending with ">".
  const withoutHtml = priceString.replace(/\u003C.*?u003E/g, '');

  // Remove any remaining spaces from the string.
  const withoutSpaces = withoutHtml.replace(/\s/g, '');

  // Convert the cleaned string to an integer.
  const price = parseInt(withoutSpaces, 10);

  return price;
}
