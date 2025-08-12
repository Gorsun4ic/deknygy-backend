# Vivat API documentation

Vivat API can be reached by a simple endpoint with `GET` request

## Request

**Endpoint**
`https://api.multisearch.io/?id=12340&lang=uk&m=1741776093274&q=boae4d&query={QUERY}&s=large&uid=142e7a01-c5b7-45b4-943d-57f3cd4332b3`

**Method**
`GET`

**PARAMETERS**
- `id`: API identifier (12340)
- `lang`: Language code (uk)
- `m`: Timestamp parameter
- `q`: Query identifier
- `query`: Search query (URL encoded)
- `s`: Size parameter (large)
- `uid`: Unique identifier

## Response and additional description

### Response

```json
{
  "query": "державець",
  "total": 4,
  "results": {
    "item_groups": [
      {
        "category": {
          "url": "https://vivat.com.ua/category/filosofiia/",
          "name": "Філософія",
          "id": "8752",
          "count": 1
        },
        "items": [
          {
            "id": "64893",
            "picture": "https://vivat.com.ua/resize_160x160x100/storage/1.d/files/a/c/ac8dcf7a_9786178493035.jpg",
            "url": "https://vivat.com.ua/product/derzhavets-folio-svitova-klasyka/",
            "is_presence": true,
            "name": "Державець (Folio. Світова класика)",
            "presence": "В наявності",
            "label": "Зимова єПідтримка",
            "params_data": {},
            "offer_type": []
          }
        ]
      }
    ],
    "categories": [
      {
        "url": "https://vivat.com.ua/category/filosofiia/",
        "name": "Філософія",
        "id": "8752",
        "count": 1
      }
    ]
  }
}
```

### Information API returns

- ✅ Title
- ❌ Author (Not provided in search results)
- ❌ Price (Not provided in search results)
- ✅ Link (Returns full URL)
- ✅ Availability
- ❌ Format (e-book/physic/audio book) (Not provided)
- ❌ ISBN (Not provided in search results)
- ❌ Publisher (Not provided in search results)

### Books key

To reach book's info, you need to map through `results.item_groups` array and then through each group's `items` array.

So, we do:
```javascript
results.item_groups.flatMap(group => group.items)
```

### Title

Source: `items[].name`
Type: string
Example: "Державець (Folio. Світова класика)"

### Author

Not provided in search results.

### Price

Not provided in search results.

### Link (URL)

Source: `items[].url`
Type: string (full URL)
Example: "https://vivat.com.ua/product/derzhavets-folio-svitova-klasyka/"

### Availability

Source: `items[].is_presence`
Type: boolean
Example: true

Alternative source: `items[].presence`
Type: string
Example: "В наявності" | "Немає в наявності"

### Format

Not provided. Cannot determine if e-book, physical, or audio book.

### ISBN

Not provided in search results.

### Publisher

Not provided in search results.

### Additional information

#### Book ID
Source: `items[].id`
Type: string
Example: "64893"

#### Picture/Image
Source: `items[].picture`
Type: string (full URL)
Example: "https://vivat.com.ua/resize_160x160x100/storage/1.d/files/a/c/ac8dcf7a_9786178493035.jpg"

#### Label
Source: `items[].label`
Type: string
Example: "Зимова єПідтримка", "єКнига"

#### Category information
Source: `item_groups[].category`
Type: object
Contains:
- `url`: Category URL
- `name`: Category name
- `id`: Category ID
- `count`: Number of items in category

#### Total count
Source: `total`
Type: number
Example: 4

#### Search query
Source: `query`
Type: string
Example: "державець"

# Book specific API

Vivat API provides detailed book information by using the book's slug in a specific endpoint.

## Request

**Endpoint**
`https://vivat.com.ua/_next/data/U8HP3rF18sAGVJt4R1RUs/uk/product/{SLUG}.json?code={SLUG}`

**Method**
`GET`

**Example**
`https://vivat.com.ua/_next/data/U8HP3rF18sAGVJt4R1RUs/uk/product/sluzhnytsia.json?code=sluzhnytsia`

## Response and additional description

### Response

```json
{
  "pageProps": {
    "product": {
      "status": 1,
      "statusCode": "active",
      "eBook": "ye-knyha",
      "title": "Служниця",
      "review": 5,
      "id": 14687,
      "code": "sluzhnytsia",
      "stockLevel": 86,
      "price": {
        "retail": 370,
        "promotion": 0,
        "priceRebate": 370,
        "priceWithOutDiscount": 370
      },
      "image": "/storage/1.d/files/3/7/379cb7e5_0118_sluzhnytsya_obl.png",
      "allCharacteristics": [
        {
          "id": 2,
          "code": "author_code_entityelement",
          "label": "Автор",
          "value": [
            {
              "id": 300961,
              "text": "Фріда Мак-Фадден",
              "filterUrl": "/avtory/mak-fadden-frida/"
            }
          ]
        },
        {
          "id": 17,
          "code": "ean_isbn",
          "label": "ISBN",
          "value": [
            {
              "id": 229691,
              "text": "9786171701427",
              "filterUrl": null
            }
          ]
        }
      ],
      "bookType": {
        "currentItem": {
          "bookType": "paper",
          "name": "Служниця",
          "price": "370.00"
        }
      }
    }
  }
}
```

### Information API returns

- ✅ Title
- ✅ Author
- ✅ Price
- ✅ Link (Returns full URL)
- ✅ Availability
- ✅ Format (e-book/physic/audio book)
- ✅ ISBN
- ✅ Publisher

## Keys

### Title

Source: `pageProps.product.title`
Type: string
Example: "Служниця"

### Author

Source: `pageProps.product.allCharacteristics[].value[].text` where `code` is "author_code_entityelement"
Type: string
Example: "Фріда Мак-Фадден"

### Price

Source: `pageProps.product.price.priceRebate`
Type: number
Example: 370

Alternative sources:
- `pageProps.product.price.retail` - Regular price
- `pageProps.product.price.promotion` - Promotional price (if available)

### Link (URL)

Source: `pageProps.product.code`
Type: string
Example: "sluzhnytsia"

Full URL: `https://vivat.com.ua/product/{code}`

### Availability

Source: `pageProps.product.stockLevel`
Type: number
Example: 86

Check if stock is greater than 0 to determine availability.

### Format

Source: `pageProps.product.bookType.currentItem.bookType`
Type: string
Example: "paper" | "ebook"

### ISBN

Source: `pageProps.product.allCharacteristics[].value[].text` where `code` is "ean_isbn"
Type: string
Example: "9786171701427"

### Publisher

Source: `pageProps.product.allCharacteristics[].value[].text` where `code` is "publisher_code_entityelement"
Type: string
Example: "Vivat"

### Additional information

#### Book ID
Source: `pageProps.product.id`
Type: number
Example: 14687

#### Book Code/Slug
Source: `pageProps.product.code`
Type: string
Example: "sluzhnytsia"

#### Stock Level
Source: `pageProps.product.stockLevel`
Type: number
Example: 86

#### Rating
Source: `pageProps.product.review`
Type: number
Example: 5

#### Image
Source: `pageProps.product.image`
Type: string (relative path)
Example: "/storage/1.d/files/3/7/379cb7e5_0118_sluzhnytsya_obl.png"

Full image URL: `https://vivat.com.ua{image}`

#### Status
Source: `pageProps.product.statusCode`
Type: string
Example: "active" | "not_available"

#### Book Type
Source: `pageProps.product.bookType.currentItem.bookType`
Type: string
Example: "paper" | "ebook"

#### Marketing Labels
Source: `pageProps.product.marketing`
Type: object
Contains various marketing labels like "ye-knyha", "ye-pidtrymka", "bestseller", "novynka"