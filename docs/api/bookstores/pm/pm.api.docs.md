# PM (Ridna Mova) API documentation

PM (Ridna Mova) API provides a live search endpoint that returns book products with comprehensive information including author details, pricing, and product descriptions. The API can be reached with a GET request and returns structured book information with HTML-encoded content.

## Request

**Endpoint**
`https://ridna-mova.com/index.php?route=product/live_search`

**Method**
`GET`

**Parameters**

- `filter_name={QUERY}` - Search query (book name)

**Example**
`https://ridna-mova.com/index.php?route=product/live_search&filter_name=тигролови`

## Response and handling it

### Response

```json
{
  "total": 1,
  "authors_count": 0,
  "product_count": 2,
  "blogs_count": 0,
  "products": [
    {
      "product_id": "961",
      "image": "https://ridna-mova.com/image/catalog/vidomitanezvidani/komplekt-serijaukrlit4sht%E2%80%935-8kn_%28300h450%29.png",
      "name": "Комплект з 5-8 книжок серії «Відомі та незвідані» ",
      "extra_info": "До комплекту увійшли чотири книжки серії «Відомі та незвідані»:\r\n\r\n«Місто» Валер'ян Підмогильний\r\n\r\n..",
      "price": "1 650\u003Cspan class=\"currency\"\u003E грн\u003C/span\u003E",
      "special": "1 238\u003Cspan class=\"currency\"\u003E грн\u003C/span\u003E",
      "product_count": 2,
      "url": "http://ridna-mova.com/komplekt-z-shesti-knizhok-serii-vidomi-ta-nezvidani.html",
      "author_name": null,
      "aut_url": "http://ridna-mova.com/index.php?route=product/author/info&amp;author_id=0"
    },
    {
      "product_id": "964",
      "image": "https://ridna-mova.com/image/catalog/vidomitanezvidani/tygrolovy.png",
      "name": "Тигролови",
      "extra_info": "Поки літератори СРСР, вимушені працювати на догоду комуністичній ідеології, продовжували творити міф..",
      "price": "400\u003Cspan class=\"currency\"\u003E грн\u003C/span\u003E",
      "special": false,
      "product_count": 2,
      "url": "http://ridna-mova.com/tigrolovi.html",
      "author_name": "Іван Багряний",
      "aut_url": "http://ridna-mova.com/ivan-bagrjanij.html"
    }
  ]
}
```

### Information API returns

- ✅ Title
- ✅ Author
- ✅ Price
- ✅ Link
- ✅ Store (PM)
- ✅ Availability (always true)
- ✅ Format (always physical - format 1)
- ❌ ISBN (not provided)
- ✅ Publisher (PM)

## Response Structure

### Root level

- `total` - Total number of results found
- `authors_count` - Number of authors found
- `product_count` - Number of products found
- `blogs_count` - Number of blog posts found
- `products` - Array of book products

### Products array

Each product contains comprehensive information:

- `product_id` - Product ID
- `image` - Product image URL
- `name` - Book title/name
- `extra_info` - Product description with HTML entities
- `price` - Regular price with HTML tags
- `special` - Special/discounted price (can be false)
- `product_count` - Number of items in stock
- `url` - Direct link to product page
- `author_name` - Author name (can be null)
- `aut_url` - Author page URL

## Key Information Extraction

### Title

Source: `name`
Type: string
Example: "Тигролови"

### Author

Source: `author_name`
Type: string | null
Example: "Іван Багряний" or null

**Author URL:**
Source: `aut_url`
Type: string
Example: "http://ridna-mova.com/ivan-bagrjanij.html"

### Price

**Regular Price:**
Source: `price`
Type: string (contains HTML tags)
Example: "1 650\u003Cspan class=\"currency\"\u003E грн\u003C/span\u003E"

**Special Price:**
Source: `special`
Type: string | false
Example: "1 238\u003Cspan class=\"currency\"\u003E грн\u003C/span\u003E" or false

**Price Processing:**
The API returns prices with HTML tags that need to be cleaned:

```javascript
function formatPrice(priceString) {
  // Remove HTML tags (e.g., \u003Cspan class="currency"\u003E грн\u003C/span\u003E)
  const withoutHtml = priceString.replace(/\u003C.*?u003E/g, '');

  // Remove spaces and convert to integer
  const withoutSpaces = withoutHtml.replace(/\s/g, '');
  const price = parseInt(withoutSpaces, 10);

  return price;
}

// Usage
const regularPrice = formatPrice(product.price);
const specialPrice = product.special ? formatPrice(product.special) : null;
```

### Currency

All prices are in Ukrainian Hryvnia (грн)

### Link

Source: `url`
Type: string (full URL)
Example: "http://ridna-mova.com/tigrolovi.html"

### Image

Source: `image`
Type: string (full URL)
Example: "https://ridna-mova.com/image/catalog/vidomitanezvidani/tygrolovy.png"

### Product Description

Source: `extra_info`
Type: string (contains HTML entities and line breaks)
Example: "Поки літератори СРСР, вимушені працювати на догоду комуністичній ідеології, продовжували творити міф.."

**Processing HTML Entities:**

```javascript
function decodeHtmlEntities(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

// Or use a library like he.js
const cleanDescription = decodeHtmlEntities(product.extra_info);
```

### Product ID

Source: `product_id`
Type: string
Example: "964"

### Stock Count

Source: `product_count`
Type: number
Example: 2

### Availability

All products are considered available (always true)

### Format

All books are physical format (format: 1)

### Publisher

All books are published by PM (Ridna Mova)

## Usage Examples

### Getting All Books

```javascript
const books = products.map((product) => ({
  title: product.name,
  author: product.author_name,
  price: formatPrice(product.price),
  specialPrice: product.special ? formatPrice(product.special) : null,
  link: product.url,
  image: product.image,
  description: decodeHtmlEntities(product.extra_info),
  stockCount: product.product_count,
  store: 'PM',
  format: 1,
  publisher: 'PM',
}));
```

### Getting Books with Discounts

```javascript
const discountedBooks = products.filter((product) => product.special !== false);
```

### Getting Books by Author

```javascript
const booksByAuthor = (authorName) => {
  return products.filter(
    (product) =>
      product.author_name && product.author_name.includes(authorName),
  );
};

const bagryanyiBooks = booksByAuthor('Багряний');
```

### Getting Books with Stock

```javascript
const inStockBooks = products.filter((product) => product.product_count > 0);
```

### Price Range Filtering

```javascript
const getBooksInPriceRange = (minPrice, maxPrice) => {
  return products.filter((product) => {
    const price = formatPrice(product.price);
    return price >= minPrice && price <= maxPrice;
  });
};

const affordableBooks = getBooksInPriceRange(100, 500);
```

### Processing with All Information

```javascript
const processBooks = () => {
  return products.map((product) => {
    const hasDiscount = product.special !== false;
    const regularPrice = formatPrice(product.price);
    const specialPrice = hasDiscount ? formatPrice(product.special) : null;
    const discount = hasDiscount ? regularPrice - specialPrice : 0;
    const discountPercent = hasDiscount
      ? Math.round((discount / regularPrice) * 100)
      : 0;

    return {
      id: product.product_id,
      title: product.name,
      author: product.author_name || 'Unknown',
      authorUrl: product.aut_url,
      price: regularPrice,
      specialPrice,
      hasDiscount,
      discount,
      discountPercent,
      currency: 'грн',
      link: product.url,
      image: product.image,
      description: decodeHtmlEntities(product.extra_info),
      stockCount: product.product_count,
      available: true,
      format: 1,
      publisher: 'PM',
      store: 'PM',
    };
  });
};
```

### Getting Author Information

```javascript
const getAuthors = () => {
  const authors = products
    .filter((product) => product.author_name)
    .map((product) => ({
      name: product.author_name,
      url: product.aut_url,
      bookCount: products.filter((p) => p.author_name === product.author_name)
        .length,
    }));

  // Remove duplicates
  return authors.filter(
    (author, index, self) =>
      index === self.findIndex((a) => a.name === author.name),
  );
};

const authors = getAuthors();
```

## HTML Entity Decoding

The API returns text with HTML entities that need to be decoded:

**Common HTML Entities:**

- `\u003C` = `<` (less than)
- `\u003E` = `>` (greater than)
- `\u0026` = `&` (ampersand)
- `\u0022` = `"` (quote)
- `\u0027` = `'` (apostrophe)

**Decoding Function:**

```javascript
function decodeHtmlEntities(text) {
  const entities = {
    '\u003C': '<',
    '\u003E': '>',
    '\u0026': '&',
    '\u0022': '"',
    '\u0027': "'",
  };

  return text.replace(
    /[\u003C\u003E\u0026\u0022\u0027]/g,
    (match) => entities[match],
  );
}
```

## Price Processing

Prices contain HTML tags that need to be removed:

```javascript
function cleanPrice(priceString) {
  // Remove HTML tags
  const withoutHtml = priceString.replace(/\u003C.*?u003E/g, '');

  // Remove spaces and non-numeric characters except decimal point
  const cleanPrice = withoutHtml.replace(/[^\d.]/g, '');

  // Convert to number
  return parseFloat(cleanPrice);
}

// Example usage
const price = cleanPrice(
  '1 650\u003Cspan class="currency"\u003E грн\u003C/span\u003E',
);
// Result: 1650
```

## Notes

1. **Price Format**: Prices contain HTML tags and need cleaning
2. **Currency**: All prices are in Ukrainian Hryvnia (грн)
3. **Image URLs**: Images are provided as full URLs
4. **Direct Links**: The `url` field provides direct links to product pages
5. **Availability**: All products are considered available
6. **Author Information**: Available through `author_name` and `aut_url` fields
7. **HTML Content**: Descriptions and prices contain HTML entities that need decoding
8. **Discount System**: Special prices indicate discounts
9. **Stock Information**: Product count indicates available stock
10. **Publisher**: All books are published by PM (Ridna Mova)

## Base URL

All relative URLs in the response should be prefixed with:
`https://ridna-mova.com`

However, the API already provides full URLs in the `url`, `image`, and `aut_url` fields, so no additional URL construction is needed.

## Error Handling

The API may return empty results when no books are found:

```json
{
  "total": 0,
  "authors_count": 0,
  "product_count": 0,
  "blogs_count": 0,
  "products": []
}
```

Always check the `total` and `product_count` fields to determine if results were found before processing the `products` array.

## Special Considerations

### HTML Content Processing

The API returns HTML-encoded content that requires special handling:

```javascript
// For prices
const cleanPrice = price.replace(/\u003C.*?u003E/g, '').replace(/\s/g, '');

// For descriptions
const cleanDescription = description
  .replace(/\r\n/g, '\n') // Convert Windows line breaks
  .replace(/\u003C.*?u003E/g, '') // Remove HTML tags
  .trim();
```

### Author URL Processing

Author URLs may contain HTML entities:

```javascript
const cleanAuthorUrl = authorUrl.replace(/&amp;/g, '&');
```

### Image URL Encoding

Image URLs may contain encoded characters:

```javascript
const cleanImageUrl = decodeURIComponent(imageUrl);
```
