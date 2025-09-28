# Knygoland API documentation

Knygoland API provides a search endpoint that returns book products through the multisearch.io service. The API can be reached with a GET request and returns structured book information with comprehensive metadata, categories, and advanced filtering options.

## Request

**Endpoint**
`https://api.multisearch.io/`

**Method**
`GET`

**Parameters**

- `id=12313` - Knygoland store identifier
- `uid={UID}` - User identifier (required)
- `categories=0` - Include categories in response
- `query={QUERY}` - Search query (book name)
- `filters=%7B%7D` - URL-encoded JSON filters (default: empty object)
- `fields=true` - Include all fields in response
- `limit=40` - Number of results to return
- `offset=0` - Starting position for pagination
- `lang=uk` - Language (Ukrainian)

**Example**
`https://api.multisearch.io/?id=12313&uid=5e3b989d-6922-47a6-a50e-b5b893f89512&categories=0&query=державець&filters=%7B%7D&fields=true&limit=40&offset=0&lang=uk`

## Response and handling it

### Response

```json
{
  "query": "державець",
  "total": 7,
  "direct": "/derzhavets-341097-item?q=державець",
  "results": {
    "items": [
      {
        "id": "2850888",
        "brand": "Фоліо",
        "name": "Державець",
        "url": "https://knigoland.com.ua/derzhavets-folio-svitova-klasika-item",
        "price": "109",
        "oldprice": "120",
        "picture": "https://knigoland.com.ua/upload/iblock/176/6yryb7y98z48oji3pjeqsbxp7na9lev7.webp",
        "currency": "грн",
        "is_presence": true,
        "presence": null,
        "snippet": null,
        "label": "Новинка",
        "labels": ["Новинка"],
        "created_at": "2025-05-23T04:15:17.000+00:00",
        "params_data": {
          "discountProcent": "9",
          "IN_BASKET": "false",
          "IN_WISHLIST": "false",
          "ID": "2850888",
          "labels": "Новинка"
        }
      }
    ],
    "categories": [
      {
        "url": "https://knigoland.com.ua/knigi",
        "name": "Книги",
        "id": "2546",
        "count": 7
      }
    ],
    "filters": [
      {
        "id": "price",
        "name": "Ціна",
        "range": {
          "from": 55,
          "to": 549,
          "min": 55,
          "max": 549
        }
      }
    ]
  }
}
```

### Information API returns

- ✅ Title
- ✅ Author (available in filters)
- ✅ Price
- ✅ Link
- ✅ Store (Книголенд)
- ✅ Availability
- ❌ Format (not provided)
- ❌ ISBN (not provided)
- ✅ Publisher (brand field)

## Response Structure

### Root level

- `query` - The search query that was sent
- `total` - Total number of results found
- `direct` - Direct link to first result (optional)
- `results` - Object containing items, categories, and filters

### Results object

- `items` - Array of book products
- `categories` - Array of category information
- `filters` - Array of available filters and their values

## Items Array Structure

Each item in the `items` array contains:

- `id` - Product ID
- `brand` - Publisher/brand name
- `name` - Book title/name
- `url` - Direct link to product page
- `price` - Current price
- `oldprice` - Original price (before discount, can be empty string)
- `picture` - Product image URL
- `currency` - Currency code
- `is_presence` - Availability status (boolean)
- `presence` - Availability text (when is_presence is false)
- `snippet` - Product description snippet (usually null)
- `label` - Product label (e.g., "Новинка", "Хіт")
- `labels` - Array of product labels
- `created_at` - Product creation date
- `params_data` - Additional parameters object

### Params Data Structure

The `params_data` object contains:

- `discountProcent` - Discount percentage as string
- `IN_BASKET` - Whether item is in basket
- `IN_WISHLIST` - Whether item is in wishlist
- `ID` - Product ID
- `labels` - Product labels

## Categories Array Structure

Each category contains:

- `url` - Category page URL
- `name` - Category name
- `id` - Category ID
- `count` - Number of products in category

## Filters Array Structure

Each filter contains:

- `id` - Filter identifier
- `name` - Filter display name
- `range` - Price range (for price filter)
- `values` - Array of filter values with counts

## Key Information Extraction

### Title

Source: `name`
Type: string
Example: "Державець"

### Author

Source: `filters` array (filter with name "Автор(и)")
Type: array of author objects
Example: `[{"name": "Нікколо Макіавеллі", "count": 3}]`

**Getting Authors:**

```javascript
const authorFilter = filters.find((filter) => filter.name === 'Автор(и)');
const authors = authorFilter ? authorFilter.values : [];
```

### Price

**Current Price:**
Source: `price`
Type: string
Example: "109"

**Original Price (before discount):**
Source: `oldprice`
Type: string (can be empty string)
Example: "120" or "" (empty string indicates no discount)

**Discount Percentage:**
Source: `params_data.discountProcent`
Type: string
Example: "9"

**Discount Calculation:**

```javascript
const hasDiscount =
  oldprice && oldprice !== '' && parseInt(oldprice) > parseInt(price);
const discount = hasDiscount ? parseInt(oldprice) - parseInt(price) : 0;
const discountPercent = hasDiscount
  ? Math.round((discount / parseInt(oldprice)) * 100)
  : 0;
// Or use the provided discount percentage
const discountPercentFromAPI = parseInt(params_data.discountProcent);
```

### Currency

Source: `currency`
Type: string
Example: "грн"

### Link

Source: `url`
Type: string (full URL)
Example: "https://knigoland.com.ua/derzhavets-folio-svitova-klasika-item"

### Image

Source: `picture`
Type: string (full URL)
Example: "https://knigoland.com.ua/upload/iblock/176/6yryb7y98z48oji3pjeqsbxp7na9lev7.webp"

### Publisher/Brand

Source: `brand`
Type: string
Example: "Фоліо"

### Availability

Source: `is_presence`
Type: boolean
Example: true

**Additional Availability Info:**
Source: `presence` (when `is_presence` is false)
Type: string
Example: "Немає в наявності"

### Product Labels

Source: `labels` array
Type: array of strings
Example: `["Новинка"]`

**Common Labels:**

- "Новинка" - New
- "Хіт" - Hit/Bestseller

### Product ID

Source: `id`
Type: string
Example: "2850888"

### Creation Date

Source: `created_at`
Type: string (ISO 8601 format)
Example: "2025-05-23T04:15:17.000+00:00"

## Usage Examples

### Getting All Books

```javascript
const books = results.items.map((item) => ({
  title: item.name,
  price: parseInt(item.price),
  oldPrice: item.oldprice ? parseInt(item.oldprice) : null,
  currency: item.currency,
  link: item.url,
  image: item.picture,
  availability: item.is_presence,
  publisher: item.brand,
  discountPercent: parseInt(item.params_data.discountProcent),
  labels: item.labels,
  store: 'Книголенд',
}));
```

### Getting Available Books Only

```javascript
const availableBooks = results.items.filter((item) => item.is_presence);
```

### Getting Books with Discount

```javascript
const discountedBooks = results.items.filter(
  (item) =>
    item.oldprice &&
    item.oldprice !== '' &&
    parseInt(item.oldprice) > parseInt(item.price),
);
```

### Getting Books by Label

```javascript
const newBooks = results.items.filter((item) =>
  item.labels.includes('Новинка'),
);

const hitBooks = results.items.filter((item) => item.labels.includes('Хіт'));
```

### Getting Category Information

```javascript
const categories = results.categories.map((category) => ({
  name: category.name,
  url: category.url,
  count: category.count,
  id: category.id,
}));
```

### Getting Author Information

```javascript
const getAuthors = () => {
  const authorFilter = results.filters.find(
    (filter) => filter.name === 'Автор(и)',
  );
  return authorFilter ? authorFilter.values : [];
};

const authors = getAuthors();
```

### Getting Price Range

```javascript
const getPriceRange = () => {
  const priceFilter = results.filters.find((filter) => filter.id === 'price');
  return priceFilter ? priceFilter.range : null;
};

const priceRange = getPriceRange();
// { from: 55, to: 549, min: 55, max: 549 }
```

### Getting Books by Publisher

```javascript
const getPublishers = () => {
  const publisherFilter = results.filters.find(
    (filter) => filter.name === 'Видавництво',
  );
  return publisherFilter ? publisherFilter.values : [];
};

const publishers = getPublishers();
// [{ name: "Фоліо", count: 5 }, { name: "BookChef", count: 1 }]
```

### Processing with All Metadata

```javascript
const processBooks = () => {
  return results.items.map((item) => {
    const hasDiscount =
      item.oldprice &&
      item.oldprice !== '' &&
      parseInt(item.oldprice) > parseInt(item.price);

    return {
      id: item.id,
      title: item.name,
      author:
        getAuthors().find((author) => author.count > 0)?.name || 'Unknown',
      price: parseInt(item.price),
      oldPrice: item.oldprice ? parseInt(item.oldprice) : null,
      currency: item.currency,
      link: item.url,
      image: item.picture,
      availability: item.is_presence,
      availabilityText: item.is_presence
        ? 'В наявності'
        : item.presence || 'Немає в наявності',
      publisher: item.brand,
      discountPercent: parseInt(item.params_data.discountProcent),
      hasDiscount,
      labels: item.labels,
      createdDate: new Date(item.created_at),
      inBasket: item.params_data.IN_BASKET === 'true',
      inWishlist: item.params_data.IN_WISHLIST === 'true',
      store: 'Книголенд',
    };
  });
};
```

## Filter Types

Based on the response, Knygoland provides various filters:

- **Ціна** - Price range filter
- **Бренд** - Brand/Publisher filter
- **Автор(и)** - Author filter
- **Видавництво** - Publisher filter
- **Кількість сторінок** - Page count filter
- **Мова** - Language filter
- **Палітурка** - Binding type filter
- **Серія** - Series filter

## Category Types

Knygoland organizes books into various categories:

- **Книги** - Books (general)
- **Суспільство, держава, філософія** - Society, State, Philosophy
- **Прикладна література** - Applied Literature
- **Non-fiction** - Non-fiction
- **Історія, право** - History, Law
- **Художня література** - Fiction
- **Класична проза** - Classical Prose

## Notes

1. **Price Format**: Prices are returned as strings (need parsing to integers)
2. **Currency**: All prices are in Ukrainian Hryvnia (грн)
3. **Image URLs**: Images are provided as full URLs
4. **Direct Links**: The `url` field provides direct links to product pages
5. **Availability**: Boolean flag with additional text description for unavailable items
6. **Publisher Information**: Available through the `brand` field
7. **Discount Information**: Available through both `oldprice` comparison and `params_data.discountProcent`
8. **Rich Metadata**: Extensive filtering options and category information
9. **Labels System**: Product categorization with labels like "Новинка" and "Хіт"
10. **User State**: Tracks basket and wishlist status

## Base URL

All relative URLs in the response should be prefixed with:
`https://knigoland.com.ua`

However, the API already provides full URLs in the `url` and `picture` fields, so no additional URL construction is needed.

## Error Handling

The API may return empty results when no books are found:

```json
{
  "query": "nonexistent",
  "total": 0,
  "results": {
    "items": [],
    "categories": [],
    "filters": []
  }
}
```

Always check the `total` field to determine if results were found before processing the `items` array.

## Advanced Filtering

The API supports advanced filtering through the `filters` parameter:

```javascript
// Example filters object
const filters = {
  price: { from: 100, to: 200 },
  brand: ['Фоліо', 'BookChef'],
  author: ['Нікколо Макіавеллі'],
};

// URL encode the filters
const encodedFilters = encodeURIComponent(JSON.stringify(filters));
// Result: %7B%22price%22%3A%7B%22from%22%3A100%2C%22to%22%3A200%7D%7D
```

## Pagination

The API supports pagination through the `limit` and `offset` parameters:

- `limit` - Number of results per page (default: 40)
- `offset` - Starting position (0-based)

**Example pagination:**

```javascript
// First page (0-39)
const firstPage =
  'https://api.multisearch.io/?id=12313&uid={UID}&categories=0&query=державець&filters=%7B%7D&fields=true&limit=40&offset=0&lang=uk';

// Second page (40-79)
const secondPage =
  'https://api.multisearch.io/?id=12313&uid={UID}&categories=0&query=державець&filters=%7B%7D&fields=true&limit=40&offset=40&lang=uk';
```
