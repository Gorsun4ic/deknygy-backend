# KSD API documentation

KSD API provides a search endpoint that returns book products through the multisearch.io service. The API can be reached with a GET request and returns structured book information with categories.

## Request

**Endpoint**
`https://api.multisearch.io/`

**Method**
`GET`

**Parameters**

- `id=12529` - KSD store identifier
- `query={QUERY}` - Search query (book name)
- `limit=5` - Number of results to return
- `offset=0` - Starting position for pagination
- `categories=0` - Include categories in response
- `lang=uk` - Language (Ukrainian)
- `fields=true` - Include all fields in response

**Example**
`https://api.multisearch.io/?id=12529&query=державець&limit=5&offset=0&categories=0&lang=uk&fields=true`

## Response and handling it

### Response

```json
{
  "query": "державець",
  "total": 2,
  "results": {
    "items": [
      {
        "id": "5533",
        "brand": null,
        "name": "Державець",
        "url": "https://ksd.ua/product/derjavec",
        "price": 175,
        "oldprice": 180,
        "picture": "https://prod-api.ksd.ua/storage/products/covers/small/OPRLDa6N72V4tyjRnJAne8tCHe1JgS1WHSFSsnOb.jpg.webp?v=1735053596",
        "currency": "грн",
        "is_presence": true,
        "presence": null,
        "snippet": null,
        "label": "*",
        "labels": ["*"],
        "created_at": "2024-12-13T10:32:16.000+00:00",
        "params_data": {
          "author": "Н. Мак'явеллі"
        }
      },
      {
        "id": "941",
        "brand": null,
        "name": "Державець. Флорентійські хроніки",
        "url": "https://ksd.ua/product/derjavec-florentiyski-hroniki-1",
        "price": 549,
        "oldprice": null,
        "picture": "https://prod-api.ksd.ua/storage/products/covers/small/QfmLWI4eKdWjvB3ZwHlEWDMA9qH6LCModAwlKVvA.jpg.webp?v=1733319687",
        "currency": "грн",
        "is_presence": true,
        "presence": null,
        "snippet": null,
        "label": "*",
        "labels": ["*"],
        "created_at": "2024-05-21T14:53:29.000+00:00",
        "params_data": {
          "author": "Ніколло Мак'явеллі"
        }
      }
    ],
    "categories": [
      {
        "url": "https://ksd.ua/books/klasychna-literatura",
        "id": "12",
        "name": "Класична література",
        "count": 2
      }
    ]
  }
}
```

### Information API returns

- ✅ Title
- ✅ Author
- ✅ Price
- ✅ Link
- ✅ Store (KSD)
- ✅ Availability
- ❌ Format (not provided)
- ❌ ISBN (not provided)
- ❌ Publisher (not provided)

## Response Structure

### Root level

- `query` - The search query that was sent
- `total` - Total number of results found
- `results` - Object containing items and categories

### Results object

- `items` - Array of book products
- `categories` - Array of category information

## Items Array Structure

Each item in the `items` array contains:

- `id` - Product ID
- `brand` - Brand information (usually null)
- `name` - Book title/name
- `url` - Direct link to product page
- `price` - Current price
- `oldprice` - Original price (before discount, can be null)
- `picture` - Product image URL
- `currency` - Currency code
- `is_presence` - Availability status
- `presence` - Additional presence info (usually null)
- `snippet` - Product description snippet (usually null)
- `label` - Product label
- `labels` - Array of product labels
- `created_at` - Product creation date
- `params_data` - Additional parameters (contains author)

## Categories Array Structure

Each category contains:

- `url` - Category page URL
- `id` - Category ID
- `name` - Category name
- `count` - Number of products in category

## Key Information Extraction

### Title

Source: `name`
Type: string
Example: "Державець"

### Author

Source: `params_data.author`
Type: string
Example: "Н. Мак'явеллі"

### Price

**Current Price:**
Source: `price`
Type: number
Example: 175

**Original Price (before discount):**
Source: `oldprice`
Type: number | null
Example: 180 (or null if no discount)

**Discount Calculation:**

```javascript
const discount = oldprice ? oldprice - price : 0;
const discountPercent = oldprice ? Math.round((discount / oldprice) * 100) : 0;
```

### Currency

Source: `currency`
Type: string
Example: "грн"

### Link

Source: `url`
Type: string (full URL)
Example: "https://ksd.ua/product/derjavec"

### Image

Source: `picture`
Type: string (full URL)
Example: "https://prod-api.ksd.ua/storage/products/covers/small/OPRLDa6N72V4tyjRnJAne8tCHe1JgS1WHSFSsnOb.jpg.webp?v=1735053596"

### Availability

Source: `is_presence`
Type: boolean
Example: true

### Product ID

Source: `id`
Type: string
Example: "5533"

### Creation Date

Source: `created_at`
Type: string (ISO 8601 format)
Example: "2024-12-13T10:32:16.000+00:00"

### Labels

Source: `labels`
Type: array of strings
Example: ["*"]

## Usage Examples

### Getting All Books

```javascript
const books = results.items.map((item) => ({
  title: item.name,
  author: item.params_data.author,
  price: item.price,
  oldPrice: item.oldprice,
  currency: item.currency,
  link: item.url,
  image: item.picture,
  availability: item.is_presence,
  store: 'KSD',
}));
```

### Filtering Available Books

```javascript
const availableBooks = results.items.filter((item) => item.is_presence);
```

### Getting Books with Discount

```javascript
const discountedBooks = results.items.filter(
  (item) => item.oldprice && item.oldprice > item.price,
);
```

### Getting Category Information

```javascript
const categories = results.categories.map((category) => ({
  name: category.name,
  url: category.url,
  count: category.count,
}));
```

### Calculating Discount Percentage

```javascript
const booksWithDiscount = results.items
  .filter((item) => item.oldprice && item.oldprice > item.price)
  .map((item) => ({
    ...item,
    discount: item.oldprice - item.price,
    discountPercent: Math.round(
      ((item.oldprice - item.price) / item.oldprice) * 100,
    ),
  }));
```

## Pagination

The API supports pagination through the `limit` and `offset` parameters:

- `limit` - Number of results per page (default: 5)
- `offset` - Starting position (0-based)

**Example pagination:**

```javascript
// First page (0-4)
const firstPage =
  'https://api.multisearch.io/?id=12529&query=державець&limit=5&offset=0&categories=0&lang=uk&fields=true';

// Second page (5-9)
const secondPage =
  'https://api.multisearch.io/?id=12529&query=державець&limit=5&offset=5&categories=0&lang=uk&fields=true';
```

## Notes

1. **Price Format**: Prices are returned as numbers (integers)
2. **Currency**: All prices are in Ukrainian Hryvnia (грн)
3. **Image URLs**: Images are provided as full URLs with version parameters
4. **Direct Links**: The `url` field provides direct links to product pages
5. **Availability**: Simple boolean flag indicating if product is available
6. **Author Information**: Stored in `params_data.author` field
7. **Discount Information**: Available through comparison of `price` and `oldprice`
8. **Categories**: Include count of products in each category
9. **Labels**: Products may have special labels (e.g., "\*" for featured items)

## Base URL

All relative URLs in the response should be prefixed with:
`https://ksd.ua`

However, the API already provides full URLs in the `url` field, so no additional URL construction is needed.

## Error Handling

The API may return empty results when no books are found:

```json
{
  "query": "{query}",
  "total": 0,
  "results": {
    "items": [],
    "categories": []
  }
}
```

Always check the `total` field to determine if results were found before processing the `items` array.
