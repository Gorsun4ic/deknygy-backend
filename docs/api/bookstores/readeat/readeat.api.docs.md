# Readeat API documentation

Readeat API provides a search endpoint that returns book products with comprehensive information including stickers, stock details, and cashback offers. The API can be reached with a GET request and returns structured book information along with author suggestions.

## Request

**Endpoint**
`https://readeat.com/api/products/search`

**Method**
`GET`

**Parameters**

- `keyword={QUERY}` - Search query (book name)

**Example**
`https://readeat.com/api/products/search?keyword=чоловіки%20люблять%20стерв`

## Response and handling it

### Response

```json
{
  "products": [
    {
      "id": 63977,
      "name": "Чоловіки люблять стерв. Посібник для надто хороших жінок",
      "link": "/product/209742-choloviky-liubliat-sterv-posibnyk-dlia-nadto-khoroshykh-zhinok",
      "image": "https://readeat.com/storage/app/uploads/public/67e/514/d3e/thumb_223293_300_480_0_0_crop.jpg",
      "rating": 0,
      "author": "Шеррі Аргов",
      "category": "Популярна психологія",
      "stickers": [
        {
          "slug": "ebook",
          "color": "#F3E7C4",
          "background": "#000000",
          "name": "єКнига",
          "text": "Купуйте книжки з карткою єКнига: обирайте на суму до 1050₴, платіть – 908₴",
          "image": "https://api.readeat.com/storage/app/media/stickers/e-book_4.svg"
        }
      ],
      "price": 490,
      "old_price": 0,
      "stock": {
        "type": "sklad",
        "minimal": 1,
        "maximum": 3,
        "date": "",
        "supplier": ""
      },
      "cashback": 5,
      "cashback_amount": 24
    }
  ],
  "authors": [
    {
      "id": 31521,
      "name": "Святослав Липовецький",
      "link": "/author/svyatoslav-lypovetskyy",
      "image": "https://readeat.com/storage/app/uploads/public/66b/48d/451/66b48d451a00b251754066.jpg"
    }
  ]
}
```

### Information API returns

- ✅ Title
- ✅ Author
- ✅ Price
- ✅ Link
- ✅ Store (ReadEat)
- ✅ Availability (stock information)
- ✅ Format (indicated by stickers)
- ❌ ISBN (not provided)
- ❌ Publisher (not provided)

## Response Structure

### Root level

- `products` - Array of book products
- `authors` - Array of author suggestions

### Products array

Each product contains comprehensive information:

- `id` - Product ID
- `name` - Book title/name
- `link` - Relative link to product page
- `image` - Product image URL
- `rating` - Product rating (usually 0)
- `author` - Author name
- `category` - Book category
- `stickers` - Array of promotional stickers
- `price` - Current price
- `old_price` - Original price (before discount)
- `stock` - Stock information object
- `cashback` - Cashback percentage
- `cashback_amount` - Cashback amount in currency

### Authors array

Each author contains:

- `id` - Author ID
- `name` - Author name
- `link` - Relative link to author page
- `image` - Author image URL (may be empty)

## Key Information Extraction

### Title

Source: `name`
Type: string
Example: "Чоловіки люблять стерв. Посібник для надто хороших жінок"

### Author

Source: `author`
Type: string
Example: "Шеррі Аргов"

### Price

**Current Price:**
Source: `price`
Type: number
Example: 490

**Original Price (before discount):**
Source: `old_price`
Type: number
Example: 0 (0 indicates no discount)

**Discount Calculation:**

```javascript
const hasDiscount = old_price > 0 && old_price > price;
const discount = hasDiscount ? old_price - price : 0;
const discountPercent = hasDiscount
  ? Math.round((discount / old_price) * 100)
  : 0;
```

### Link

Source: `link`
Type: string (relative URL)
Example: "/product/209742-choloviky-liubliat-sterv-posibnyk-dlia-nadto-khoroshykh-zhinok"

**Full URL Construction:**

```javascript
const fullUrl = `https://readeat.com${link}`;
```

### Image

Source: `image`
Type: string (full URL)
Example: "https://readeat.com/storage/app/uploads/public/67e/514/d3e/thumb_223293_300_480_0_0_crop.jpg"

### Category

Source: `category`
Type: string
Example: "Популярна психологія"

### Availability

Source: `stock`
Type: object

**Stock Information:**

```javascript
const stockInfo = {
  type: stock.type, // "sklad" (warehouse)
  minimal: stock.minimal, // Minimum available
  maximum: stock.maximum, // Maximum available
  date: stock.date, // Date info (usually empty)
  supplier: stock.supplier, // Supplier info (usually empty)
};

const isAvailable = stock.minimal > 0;
```

### Format

Source: `stickers` array
Type: array of sticker objects

**Format Detection:**

```javascript
const format = stickers.find((sticker) => sticker.slug === 'ebook')
  ? 'e-book'
  : 'physical';
```

**Common Sticker Types:**

- `ebook` - еКнига (e-book)
- `e_support` - Нацкешбек (National cashback)

### Cashback Information

Source: `cashback` and `cashback_amount`
Type: number

**Cashback Details:**

```javascript
const cashbackInfo = {
  percentage: cashback, // 5%
  amount: cashback_amount, // 24 грн
  finalPrice: price - cashback_amount, // 466 грн
};
```

### Rating

Source: `rating`
Type: number
Example: 0 (usually 0, indicating no ratings yet)

## Usage Examples

### Getting All Books

```javascript
const books = products.map((book) => ({
  title: book.name,
  author: book.author,
  price: book.price,
  oldPrice: book.old_price,
  category: book.category,
  link: `https://readeat.com${book.link}`,
  image: book.image,
  availability: book.stock.minimal > 0,
  format: book.stickers.some((sticker) => sticker.slug === 'ebook')
    ? 'e-book'
    : 'physical',
  cashback: book.cashback,
  cashbackAmount: book.cashback_amount,
  store: 'ReadEat',
}));
```

### Filtering by Category

```javascript
const psychologyBooks = products.filter(
  (book) => book.category === 'Популярна психологія',
);
```

### Getting Books with Cashback

```javascript
const booksWithCashback = products.filter((book) => book.cashback > 0);
```

### Getting E-books Only

```javascript
const ebooks = products.filter((book) =>
  book.stickers.some((sticker) => sticker.slug === 'ebook'),
);
```

### Getting Author Information

```javascript
const authors = authors.map((author) => ({
  name: author.name,
  link: `https://readeat.com${author.link}`,
  image: author.image || null,
}));
```

### Processing Stickers

```javascript
const processStickers = (stickers) => {
  return stickers.map((sticker) => ({
    name: sticker.name,
    slug: sticker.slug,
    color: sticker.color,
    background: sticker.background,
    text: sticker.text,
    image: sticker.image,
  }));
};
```

## Sticker Types and Meanings

### єКнига (e-book)

- **Slug**: `ebook`
- **Purpose**: Indicates the book is available as an e-book
- **Benefits**: Special pricing with єКнига card

### Нацкешбек (National Cashback)

- **Slug**: `e_support`
- **Purpose**: Book participates in national cashback program
- **Benefits**: Additional cashback on purchase

## Stock Types

- **`sklad`** - Warehouse (in stock)
- **`preorder`** - Pre-order (not yet available)
- **`out_of_stock`** - Out of stock

## Notes

1. **Price Format**: Prices are returned as numbers (integers)
2. **Currency**: All prices are in Ukrainian Hryvnia (₴)
3. **Image URLs**: Images are provided as full URLs
4. **Relative Links**: The `link` field provides relative URLs that need base URL prefix
5. **Availability**: Detailed stock information with minimum/maximum quantities
6. **Stickers**: Rich promotional information including colors, backgrounds, and descriptions
7. **Cashback**: Built-in cashback system with percentage and amount
8. **Categories**: Clear categorization for better book organization
9. **Author Suggestions**: Additional author recommendations beyond the search results

## Base URL

All relative URLs in the response should be prefixed with:
`https://readeat.com`

**Example URL Construction:**

```javascript
const BASE_URL = 'https://readeat.com';
const fullProductUrl = `${BASE_URL}${book.link}`;
const fullAuthorUrl = `${BASE_URL}${author.link}`;
```

## Error Handling

The API may return empty results when no books are found:

```json
{
  "products": [],
  "authors": []
}
```

Always check if the arrays are empty before processing the results.

## Rate Limiting

The API may have rate limiting in place. It's recommended to:

- Implement appropriate delays between requests
- Cache results when possible
- Handle HTTP 429 (Too Many Requests) responses gracefully
