import { IBookInfo } from 'src/modules/common/interfaces/api/book.info';
import { splitQueryIntoTitleAndAuthor } from '../../utils/splitQueryIntoTitleAndAuthor';
import { normalizeString } from '../../utils/normalizeString';
import Fuse from 'fuse.js';
import { scoreBooks } from './scoreBooks';
import { normalizeBookData } from '../normalizeBooksAuthorsAndTitles';

/**
 * Performs fuzzy search on the book list and assigns a relevance score.
 * It filters the results to only include strong matches.
 * @param query The user's search query.
 * @param books The flat array of book offers.
 * @returns A sorted array of relevant IBookInfo objects.
 */
const query = 'дипломатія генрі кіссінджер';
const arr: IBookInfo[] = [
  {
    title: 'ДИПЛОМАТІЯ',
    link: 'https://knigoland.com.ua/diplomatiya-item',
    price: 941,

    store: 'Книголенд',

    isbn: null,

    publisher: 'Країна Мрій',

    format: 1,

    author: null,

    available: false,
  },
  {
    title: 'Дипломатія',

    link: 'https://book-ye.com.ua/nehudozhnja-literatura/suspilni-nauky/politologija/dyplomatiya/?q=дипломатія',

    price: 1753,

    store: 'Книгарня Є',

    isbn: null,

    publisher: 'Stone Publishing',

    format: 1,

    author: null,

    available: false,
  },
  {
    title: 'Дипломатія',

    author: 'Генрі Кіссінджер',

    price: 1499,

    link: 'https://nashformat.ua/products/dyplomatiya-901373',

    store: 'Наш формат',

    available: false,

    format: 1,

    isbn: undefined,

    publisher: undefined,
  },
  {
    title:
      'Дипломатія і політика. Україна в процесі динамічних геополітичних змін (2-ге вид.,розшир. і допов.)',

    link: 'https://knigoland.com.ua/diplomatiya-i-politika-ukraina-v-protsesi-dinamichnikh-geopolitichnikh-zmin-2-ge-vid-rozshir-i-dopov-item',

    price: 390,

    store: 'Книголенд',

    isbn: null,

    publisher: 'Фоліо',

    format: 1,

    author: null,

    available: false,
  },

  {
    title:
      'Як будувати відносини з країнами Азії. Економіка, дипломатія, культурні особливості',

    link: 'https://knigoland.com.ua/yak-buduvati-vidnosini-z-krainami-azii-ekonomika-diplomatiya-kulturni-osoblivosti-item',

    price: 210,

    store: 'Книголенд',

    isbn: null,

    publisher: 'Vivat',

    format: 1,

    author: null,

    available: false,
  },
  {
    title: 'Останній монолог фашиста',

    link: 'https://readeat.com/product/206817-ostannii-monolog-fasista',

    price: 210,

    store: 'ReadEat',

    available: true,

    isbn: null,

    publisher: null,

    format: 1,

    author: 'Галеаццо Чано',
  },

  {
    title:
      'Народна дипломатія під час війни в Україні. Історія, сучасний стан, основні напрями втілення, реальні приклади',

    link: 'https://readeat.com/product/208597-narodna-dyplomatiia-pid-chas-viiny-v-ukraini-istoriia-suchasnyi-stan-osnovni-napriamy-vtilennia-realni-pryklady',

    price: 380,

    store: 'ReadEat',

    available: true,

    isbn: null,

    publisher: null,

    format: 1,

    author: '',
  },

  {
    title: 'Катанга 2. Дипломатія',

    link: 'https://readeat.com/product/105776-katanga-2-diplomatiia',

    price: 200,

    store: 'ReadEat',

    available: true,

    isbn: null,

    publisher: null,

    format: 1,

    author: "Фаб'єн Нюрі",
  },

  {
    title: 'Настільна гра "Дюна. Гра про війну та дипломатію"',

    link: 'https://readeat.com/product/215359-diuna-gra-pro-viinu-ta-diplomatiiu',

    price: 2390,

    store: 'ReadEat',

    available: true,

    isbn: null,

    publisher: null,

    format: 1,

    author: '',
  },

  {
    title:
      'І сталася тьма. Рузвельт, Гітлер і західна дипломатія напередодні війни',

    link: 'https://readeat.com/product/114819-i-stalasia-tma-ruzvelt-gitler-i-zaxidna-diplomatiia-naperedodni-viini-tverda-paliturka',

    price: 499,

    store: 'ReadEat',

    available: true,

    isbn: null,

    publisher: null,

    format: 1,

    author: 'Девід Маккін',
  },
  {
    title: 'Дипломатія',

    author: 'Генрі Кіссінджер',

    price: 0,

    link: 'https://mbooks.com.ua/book/763397-dyplomatiia',

    store: 'Megogo Books',

    available: false,

    format: 1,

    isbn: null,

    publisher: null,
  },

  {
    title:
      'І сталася тьма. Рузвельт, Гітлер і західна дипломатія напередодні війни',

    author: 'Девід Маккін',

    price: 0,

    link: 'https://mbooks.com.ua/book/946645-i-stalasia-tma-ruzvelt-hitler-i-zakhidna-dyplomatiia-naperedodni-viiny',

    store: 'Megogo Books',

    available: false,

    format: 1,

    isbn: null,

    publisher: null,
  },

  {
    title: 'Григорій Орлик або Козацька нація у французькій дипломатії',

    author: 'Ірина Дмитришин',

    price: 0,

    link: 'https://mbooks.com.ua/book/948839-hryhorii-orlyk-abo-kozatska-natsiia-u-frantsuzkii-dyplomatii',

    store: 'Megogo Books',

    available: false,

    format: 1,

    isbn: null,

    publisher: null,
  },

  {
    title:
      'У лабіринтах української дипломатії. Від князівської доби до початку ХХ століття',

    author: 'Олександр Гуржій, Олександр Реєнт',

    price: 431,

    link: 'https://mbooks.com.ua/book/814272-u-labiryntakh-ukrainskoi-dyplomatii-vid-kniazivskoi-doby-do-pochatku-khkh-stolittia',

    store: 'Megogo Books',

    available: true,

    format: 1,

    isbn: null,

    publisher: null,
  },
  {
    title: 'Закохані Тюдори. Як любили і ненавиділи в середньовічній Англії',

    link: 'https://ksd.ua/product/zakohani-tyudori',

    price: 428,

    available: true,

    store: 'КСД',

    isbn: null,

    publisher: null,

    format: 1,

    author: null,
  },

  {
    title: "П'ятий слон",

    link: 'https://ksd.ua/product/piatyy-slon',

    price: 428,

    available: false,

    store: 'КСД',

    isbn: null,

    publisher: null,

    format: 1,

    author: null,
  },
  {
    title: 'Закохані Тюдори. Як любили і ненавиділи в середньовічній Англії',

    link: 'https://ksd.ua/product/zakohani-tyudori',

    price: 428,

    available: true,

    store: 'КСД',

    isbn: null,

    publisher: null,

    format: 1,

    author: null,
  },

  {
    title: "П'ятий слон",

    link: 'https://ksd.ua/product/piatyy-slon',

    price: 428,

    available: false,

    store: 'КСД',

    isbn: null,

    publisher: null,

    format: 1,

    author: null,
  },
  {
    title: 'ДИПЛОМАТІЯ',

    link: 'https://knigoland.com.ua/diplomatiya-item',

    price: 941,

    store: 'Книголенд',

    isbn: null,

    publisher: 'Країна Мрій',

    format: 1,

    author: null,

    available: false,
  },

  {
    title:
      'Дипломатія і політика. Україна в процесі динамічних геополітичних змін (2-ге вид.,розшир. і допов.)',

    link: 'https://knigoland.com.ua/diplomatiya-i-politika-ukraina-v-protsesi-dinamichnikh-geopolitichnikh-zmin-2-ge-vid-rozshir-i-dopov-item',

    price: 390,

    store: 'Книголенд',

    isbn: null,

    publisher: 'Фоліо',

    format: 1,

    author: null,

    available: false,
  },

  {
    title:
      'Як будувати відносини з країнами Азії. Економіка, дипломатія, культурні особливості',

    link: 'https://knigoland.com.ua/yak-buduvati-vidnosini-z-krainami-azii-ekonomika-diplomatiya-kulturni-osoblivosti-item',

    price: 210,

    store: 'Книголенд',

    isbn: null,

    publisher: 'Vivat',

    format: 1,

    author: null,

    available: false,
  },
];
export const fuzzyMatching = (
  query: string,
  books: IBookInfo[],
): IBookInfo[] => {
  const normalizedQuery = normalizeString(query);
  const normalizedBooks = normalizeBookData(books);
  const { title: queryTitle, author: queryAuthor } =
    splitQueryIntoTitleAndAuthor(normalizedQuery);

  // Fuse.js is used for initial quick filtering
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const fuse = new Fuse(normalizedBooks, {
    keys: ['title', 'author'],
    threshold: 1.0, // Very lenient - let our enhanced scoring do the work
    ignoreLocation: true,
    minMatchCharLength: 1, // Very permissive
  });

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const results = fuse.search(query);

  // If Fuse.js returns no results but we have a potential split query,
  // try scoring all books manually
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (results?.length === 0 && queryAuthor) {
    console.log(
      'Fuse.js returned no results, trying manual scoring for split query',
    );
    const manualResults = normalizedBooks?.map((book) => ({ item: book }));
    return scoreBooks(manualResults, normalizedQuery, queryTitle, queryAuthor);
  }

  // Use the extracted scoring function
  return scoreBooks(results, normalizedQuery, queryTitle, queryAuthor);
};

console.log(fuzzyMatching(query, arr));
