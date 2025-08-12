# Nashformat API documentation

Nashformat API can be reached by a simple endpoint with `GET` request

## Request

**Endpoint**
`https://nashformat.ua/ajax/search?term={query}`

**Method**
`GET`

## Response and additional description

### Response

```
[
  {
    "id": 1,
    "query": "державець",
    "price": "28",
    "value": "Державець",
    "data": {
      "name": "Державець",
      "url": "products/ebook-derzhavets-622451",
      "image": "https://nashformat.ua/files/products/ebook-derzhavets-622451.100x100.jpeg",
      "price": "28.00",
      "author": "",
      "type": 2,
      "stock": true
    },
    "currency": "грн",
    "type": "product",
    "end": false
  },
  {
    "id": 2,
    "query": "державець",
    "price": "105",
    "value": "Державець (\"Дитячі подарункові міні\")",
    "data": {
      "name": "Державець (\"Дитячі подарункові міні\")",
      "url": "products/ebook-derzhavets-dytyachi-podarunkovi-mini-629669",
      "image": "https://nashformat.ua/files/products/ebook-derzhavets-dytyachi-podarunkovi-mini-629669.100x100.jpeg",
      "price": "105.00",
      "author": "",
      "type": 2,
      "stock": true
    },
    "currency": "грн",
    "type": "product",
    "end": false
  }
]
```
### Information API returns
- ✅ Title
- ✅❌ Author (Usually, API returns author's name, but in some cases the string may be empty)
- ✅ Price (API returns price, but it is **NECESSARY** to format the price because it comes as a string and with decimal)
- ✅ Link (Returns slug)
- ✅ Availability 
- ✅ Format (e-book/physic/audio book) (returns nums 1 | 2 | 3)
- ❌ ISBN
- ❌ Publisher

### Books key

`type`

/// Type is a key that is placed in root of item. Type tells us is this item either a product, search or not found. When receive an array of books, this is necessary to filter them by type and set it only to product. If book has not type product — skip it.

### Title key

Source: `data.name`
Type: string

### Author

Source: `data.author`
Type: string

### Price

Source: `data.price`
Type: string
Example: "232.00"

### Link (slug)

Source: `data.url`
Type: string
Example: "products/derzhavets.-florentijski-hroniky-918078"

### Availability

Source: `data.stock`
Type: boolean

### Format

Source: `data.type`
Type: number
Example: 1 | 2 | 3

