# Arthuss API documentation

Arthuss API provides a search endpoint that returns book suggestions through their search suggestion module. The API can be reached with a GET request and returns results in a structured JSON format.

## Request

**Endpoint**
`https://www.arthuss.com.ua/`

**Method**
`GET`

**Parameters**

- `route=extension/module/search_suggestion/ajax` - Required route parameter for search suggestions
- `keyword={QUERY}` - Search query (book name)

**Headers**

- `User-Agent: Mozilla/5.0` - Browser identification
- `Referer: https://www.arthuss.com.ua/` - Referrer header
- `X-Requested-With: XMLHttpRequest` - AJAX request identifier

**Example**
`https://www.arthuss.com.ua/?route=extension/module/search_suggestion/ajax&keyword=грокаємо алгоритми`

## Response Structure

The API returns an array of objects, each representing either a search result or a "no results" indicator.

### Success Response

```json
[
  {
    "type": "product",
    "href": "https://www.arthuss.com.ua/product-name",
    "fields": {
      "name": {
        "name": "Book Title"
      },
      "price": {
        "price": "450 грн",
        "special": "400 грн"
      },
      "manufacturer": {
        "manufacturer": "Author Name"
      },
      "image": {
        "image": "https://www.arthuss.com.ua/image.jpg"
      },
      "model": {
        "model": "SKU123"
      },
      "isbn": "978-1234567890"
    }
  }
]
```

### No Results Response

```json
[
  {
    "fields": {
      "no_results": {}
    },
    "href": ""
  }
]
```

## Data Extraction

### Title

- **Source**: `fields.name.name`
- **Type**: String
- **Example**: "Грокаємо алгоритми"

### Author

- **Source**: `fields.manufacturer.manufacturer`
- **Type**: String (optional)
- **Fallback**: `null` if not available

### Price

- **Source**: `fields.price.special` (preferred) or `fields.price.price`
- **Type**: String (Ukrainian hryvnia format)
- **Processing**: Extracted and converted to integer (removes non-numeric characters)
- **Fallback**: `0` if not available

### Link

- **Source**: `href`
- **Type**: String (absolute URL)
- **Validation**: Must not be empty string

### Store

- **Value**: "Arthuss"
- **Type**: Constant string

### Availability

- **Value**: `true`
- **Type**: Boolean constant
- **Note**: All returned results are considered available

### Format

- **Value**: `1` (physical)
- **Type**: Integer constant
- **Note**: Arthuss primarily sells physical books

### ISBN

- **Source**: `fields.isbn`
- **Type**: String (optional)
- **Fallback**: `null` if not available

### Publisher

- **Value**: "Arthuss"
- **Type**: Constant string

## Special Considerations

1. **No Results Handling**: When no results are found, the API returns a special object with `no_results` field and empty `href`. This is filtered out during processing.

2. **Price Priority**: Special prices are preferred over regular prices when available.

3. **HTML Encoding**: The API may return HTML-encoded strings that need to be decoded before processing.

4. **Response Filtering**: Only items with valid `name`, `href`, and non-empty `href` are processed.

5. **Data Validation**: Items without proper structure or with `no_results` fields are automatically filtered out.

## Error Handling

- **Empty Response**: Returns empty array if no valid data
- **No Results**: Returns empty array when API indicates no results found
- **Invalid Structure**: Filters out malformed response items
- **Network Errors**: Handles HTTP request failures gracefully

## Integration Notes

The Arthuss API is integrated into the DeKnyhy search system and follows the standard `IBookInfo` interface pattern. All responses are normalized to match the common book information format used across all integrated book store APIs.
