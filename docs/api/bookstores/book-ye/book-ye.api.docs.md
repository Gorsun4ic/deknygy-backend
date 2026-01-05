# BookYe API documentation

BookYe API provides a search endpoint that returns book products through the multisearch.io service. The API can be reached with a GET request and returns structured book information organized by categories with comprehensive metadata.

## Request

**Endpoint**
`https://api.multisearch.io/`

**Method**
`GET`

**Parameters**

- `id=11908` - BookYe store identifier
- `lang=uk` - Language (Ukrainian)
- `m=1741176548550` - Timestamp parameter
- `q=llgul8` - Query identifier
- `query={QUERY}` - Search query (book name)
- `s=medium` - Search size/scope
- `uid={UID}` - User identifier (optional)

**Example**
`https://api.multisearch.io/?id=11908&lang=uk&m=1741176548550&q=llgul8&query=державець&s=medium&uid=4c68c35b-7954-4dda-a427-30c5d8390f0f`

## Response and handling it

### Response

```json
{
  "query": "державець",
  "total": 39,
  "results": {
    "item_groups": [
      {
        "category": {
          "url": "https://book-ye.com.ua/nehudozhnja-literatura/suspil-ni-nauki/politologija/?q=державець",
          "name": "Політологія",
          "id": "53994",
          "count": 6
        },
        "items": [
          {
            "id": "ІЛ-00044733",
            "picture": "https://book-ye.com.ua/media/catalog/product/d/a/daa663e3-139b-11f0-81bb-005056857596_73a74a97-139c-11f0-81bb-005056857596.jpg",
            "oldprice": "137",
            "url": "https://book-ye.com.ua/nehudozhnja-literatura/suspilni-nauky/politologija/derzhavets-folio-svitova-klasyka/?q=державець",
            "is_presence": true,
            "name": "Державець (Folio. Світова класика)",
            "brand": "Фоліо",
            "price": "119",
            "currency": "грн",
            "params_data": {},
            "offer_type": []
          }
        ]
      }
    ],
    "categories": [
      {
        "url": "https://book-ye.com.ua/nehudozhnja-literatura/suspil-ni-nauki/politologija/",
        "name": "Політологія",
        "id": "53994",
        "count": 6
      }
    ]
  }
}
```

### Information API returns

- ✅ Title
- ✅ Author (not directly provided, may be in params_data)
- ✅ Price
- ✅ Link
- ✅ Store (Книгарня Є)
- ✅ Availability
- ❌ Format (not provided)
- ❌ ISBN (not provided)
- ✅ Publisher (brand field)

## Response Structure

### Root level

- `query` - The search query that was sent
- `total` - Total number of results found
- `results` - Object containing item_groups and categories

### Results object

- `item_groups` - Array of category groups with items
- `categories` - Array of category information

### Item Groups structure

Each item group contains:

- `category` - Category information object
- `items` - Array of book products in that category

### Category object

- `url` - Category page URL
- `name` - Category name
- `id` - Category ID
- `count` - Number of products in category

## Items Array Structure

Each item in the `items` array contains:

- `id` - Product ID (e.g., "ІЛ-00044733")
- `picture` - Product image URL
- `oldprice` - Original price (before discount, can be empty string)
- `url` - Direct link to product page
- `is_presence` - Availability status (boolean)
- `name` - Book title/name
- `brand` - Publisher/brand name
- `price` - Current price
- `currency` - Currency code
- `params_data` - Additional parameters (usually empty object)
- `offer_type` - Array of offer types (usually empty)
- `presence` - Availability text (when is_presence is false)

## Key Information Extraction

### Title

Source: `name`
Type: string
Example: "Державець (Folio. Світова класика)"

### Author

Source: `params_data` (usually empty)
Type: object
Note: Author information is not directly provided in the standard response

### Price

**Current Price:**
Source: `price`
Type: string
Example: "119"

**Original Price (before discount):**
Source: `oldprice`
Type: string (can be empty string)
Example: "137" or "" (empty string indicates no discount)

**Discount Calculation:**

```javascript
const hasDiscount =
  oldprice && oldprice !== '' && parseInt(oldprice) > parseInt(price);
const discount = hasDiscount ? parseInt(oldprice) - parseInt(price) : 0;
const discountPercent = hasDiscount
  ? Math.round((discount / parseInt(oldprice)) * 100)
  : 0;
```

### Currency

Source: `currency`
Type: string
Example: "грн"

### Link

Source: `url`
Type: string (full URL)
Example: "https://book-ye.com.ua/nehudozhnja-literatura/suspilni-nauky/politologija/derzhavets-folio-svitova-klasyka/?q=державець"

### Image

Source: `picture`
Type: string (full URL)
Example: "https://book-ye.com.ua/media/catalog/product/d/a/daa663e3-139b-11f0-81bb-005056857596_73a74a97-139c-11f0-81bb-005056857596.jpg"

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

### Product ID

Source: `id`
Type: string
Example: "ІЛ-00044733"

## Usage Examples

### Getting All Books from All Categories

```javascript
const allBooks = results.item_groups.flatMap((group) => group.items);
```

### Getting Books by Category

```javascript
const getBooksByCategory = (categoryName) => {
  const group = results.item_groups.find(
    (group) => group.category.name === categoryName,
  );
  return group ? group.items : [];
};

const politicsBooks = getBooksByCategory('Політологія');
```

### Processing All Books

```javascript
const books = results.item_groups.flatMap((group) =>
  group.items.map((item) => ({
    title: item.name,
    price: parseInt(item.price),
    oldPrice: item.oldprice ? parseInt(item.oldprice) : null,
    currency: item.currency,
    link: item.url,
    image: item.picture,
    availability: item.is_presence,
    publisher: item.brand,
    category: group.category.name,
    store: 'Книгарня Є',
  })),
);
```

### Getting Available Books Only

```javascript
const availableBooks = results.item_groups.flatMap((group) =>
  group.items.filter((item) => item.is_presence),
);
```

### Getting Books with Discount

```javascript
const discountedBooks = results.item_groups.flatMap((group) =>
  group.items.filter(
    (item) =>
      item.oldprice &&
      item.oldprice !== '' &&
      parseInt(item.oldprice) > parseInt(item.price),
  ),
);
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

### Calculating Discounts

```javascript
const booksWithDiscounts = results.item_groups.flatMap((group) =>
  group.items
    .filter((item) => item.oldprice && item.oldprice !== '')
    .map((item) => {
      const oldPrice = parseInt(item.oldprice);
      const currentPrice = parseInt(item.price);
      const discount = oldPrice - currentPrice;
      const discountPercent = Math.round((discount / oldPrice) * 100);

      return {
        ...item,
        discount,
        discountPercent,
        savings: discount,
      };
    }),
);
```

## Category Types

Based on the response, BookYe organizes books into various categories:

- **Політологія** - Political Science
- **Філософія** - Philosophy
- **Зимова єПідтримка** - Winter eSupport
- **єКнига** - eBook
- **Історія зарубіжних країн** - History of Foreign Countries
- **Записники** - Notebooks
- **ЄКЛУБ** - EClub
- **Белетризовані біографії** - Fictionalized Biographies
- **Історичні романи** - Historical Novels
- **Сучасна українська проза** - Modern Ukrainian Prose
- **#Політологія** - #Political Science (e-books)
- **#Філософія** - #Philosophy (e-books)

## Notes

1. **Price Format**: Prices are returned as strings (need parsing to integers)
2. **Currency**: All prices are in Ukrainian Hryvnia (грн)
3. **Image URLs**: Images are provided as full URLs
4. **Direct Links**: The `url` field provides direct links to product pages
5. **Availability**: Boolean flag with additional text description for unavailable items
6. **Publisher Information**: Available through the `brand` field
7. **Discount Information**: Available through comparison of `price` and `oldprice`
8. **Categories**: Rich categorization with product counts
9. **Item Groups**: Books are organized by category groups
10. **Empty Fields**: `params_data` and `offer_type` are usually empty objects/arrays

## Base URL

All relative URLs in the response should be prefixed with:
`https://book-ye.com.ua`

However, the API already provides full URLs in the `url` and `picture` fields, so no additional URL construction is needed.

## Error Handling

The API may return empty results when no books are found:

```json
{
  "query": "nonexistent",
  "total": 0,
  "results": {
    "item_groups": [],
    "categories": []
  }
}
```

Always check the `total` field to determine if results were found before processing the `item_groups` array.

## Data Processing Considerations

### Flattening Item Groups

Since books are organized in category groups, you'll need to flatten the structure:

```javascript
// Instead of nested iteration
const allBooks = [];
for (const group of results.item_groups) {
  for (const item of group.items) {
    allBooks.push(item);
  }
}

// Use flatMap for cleaner code
const allBooks = results.item_groups.flatMap((group) => group.items);
```

### Price Parsing

Prices are strings and need to be parsed for calculations:

```javascript
const price = parseInt(item.price);
const oldPrice = item.oldprice ? parseInt(item.oldprice) : null;
```

### Availability Check

Check both boolean and text availability:

```javascript
const isAvailable = item.is_presence;
const availabilityText = item.is_presence
  ? 'В наявності'
  : item.presence || 'Немає в наявності';
```
