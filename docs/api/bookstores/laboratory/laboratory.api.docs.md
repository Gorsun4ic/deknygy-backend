# Laboratory API documentation

Laboratory API provides a search endpoint that returns both book products and blog posts. The API can be reached with a simple GET request and returns suggestions in a structured format.

## Request

**Endpoint**
`https://laboratory.ua/ajax/search`

**Method**
`GET`

**Parameters**
`?query={QUERY}`

**Example**
`https://laboratory.ua/ajax/search?query=державець`

## Response and handling it

### Response

```json
{
  "query": "державець",
  "suggestions": [
    {
      "type": "product",
      "price": "549,00",
      "currency": "грн",
      "value": "Державець. Флорентійські хроніки",
      "data": {
        "id": "1971",
        "name": "Державець. Флорентійські хроніки",
        "url": "https://laboratory.ua/products/derzhavets-florentijski-hroniky",
        "image": "https://laboratory.ua/files/products/makiavelli_cover_2500.70x70.jpg",
        "author": "Нікколо Мак'явеллі",
        "type": ""
      },
      "lang": ""
    },
    {
      "type": "post",
      "price": "",
      "currency": "грн",
      "value": "Правами та свободами одних жінок зрештою пожертвували заради прав інших: 5 цитат із книжки «Патріархи. Витоки нерівності»",
      "data": {
        "id": "1021",
        "name": "Правами та свободами одних жінок зрештою пожертвували заради прав інших: 5 цитат із книжки «Патріархи. Витоки нерівності»",
        "url": "https://laboratory.ua/blog/5-tsytat-patriarhy",
        "image": "https://laboratory.ua/files/blog_resized/5_tsytat_patriarkhy.70x70.jpg",
        "author": "",
        "type": ""
      },
      "lang": ""
    }
  ]
}
```

### Information API returns

- ✅ Title
- ✅ Author (for products)
- ✅ Price (for products)
- ✅ Link
- ✅ Store (Laboratory)
- ❌ Availability (not provided)
- ❌ Format (not provided)
- ❌ ISBN (not provided)
- ❌ Publisher (not provided)

The API returns two types of content:

1. **Products** (`type: "product"`) - actual books available for purchase
2. **Posts** (`type: "post"`) - blog posts and articles

## Response Structure

### Root level

- `query` - The search query that was sent
- `suggestions` - Array of search results (products and posts)

### Suggestions array

Each item in the `suggestions` array contains:

- `type` - Content type: `"product"` or `"post"`
- `price` - Price in local currency (only for products)
- `currency` - Currency code (e.g., "грн")
- `value` - Display title/name
- `data` - Detailed information object
- `lang` - Language code (usually empty)

## Data Object Structure

### For Products (`type: "product"`)

The `data` object contains:

- `id` - Product ID
- `name` - Product name/title
- `url` - Direct link to product page
- `image` - Product image URL
- `author` - Author name
- `type` - Product type (usually empty)

### For Posts (`type: "post"`)

The `data` object contains:

- `id` - Post ID
- `name` - Post title
- `url` - Direct link to blog post
- `image` - Post image URL
- `author` - Author name (usually empty for posts)
- `type` - Post type (usually empty)

## Key Information Extraction

### Title

**For Products:**
Source: `data.name`
Type: string
Example: "Державець. Флорентійські хроніки"

**For Posts:**
Source: `data.name`
Type: string
Example: "Правами та свободами одних жінок зрештою пожертвували заради прав інших: 5 цитат із книжки «Патріархи. Витоки нерівності»"

### Author

**For Products:**
Source: `data.author`
Type: string
Example: "Нікколо Мак'явеллі"

**For Posts:**
Source: `data.author`
Type: string (usually empty)
Example: ""

### Price

**For Products:**
Source: `price`
Type: string
Example: "549,00"

**For Posts:**
Source: `price`
Type: string (usually empty)
Example: ""

### Currency

Source: `currency`
Type: string
Example: "грн"

### Link

Source: `data.url`
Type: string (full URL)
Example: "https://laboratory.ua/products/derzhavets-florentijski-hroniky"

### Image

Source: `data.image`
Type: string (full URL)
Example: "https://laboratory.ua/files/products/makiavelli_cover_2500.70x70.jpg"

### Content Type

Source: `type`
Type: string
Values: `"product"` | `"post"`

## Usage Examples

### Filtering Products Only

```javascript
const products = suggestions.filter((item) => item.type === 'product');
```

### Getting Book Information

```javascript
const books = suggestions
  .filter((item) => item.type === 'product')
  .map((item) => ({
    title: item.data.name,
    author: item.data.author,
    price: item.price,
    currency: item.currency,
    link: item.data.url,
    image: item.data.image,
    store: 'Laboratory',
  }));
```

## Notes

1. **Price Format**: Prices are returned as strings with comma as decimal separator (e.g., "549,00")
2. **Currency**: All prices are in Ukrainian Hryvnia (грн)
3. **Image URLs**: Images are provided as full URLs
4. **Direct Links**: The `data.url` field provides direct links to product pages or blog posts
5. **Mixed Content**: The API returns both products and blog posts in the same response, so filtering by type is necessary
6. **Limited Metadata**: Unlike some other book APIs, Laboratory doesn't provide ISBN, format, or availability information

## Base URL

All relative URLs in the response should be prefixed with:
`https://laboratory.ua`

However, the API already provides full URLs in the `data.url` field, so no additional URL construction is needed.
