# Megogo API documentation

Megogo API can be reached by a simple endpoint with `GET` request

## Request

**Endpoint**
`https://api.mbooks.com.ua/api/v1/search/main/?query={QUERY}`

**Method**
`GET`

## Response and additional description

### Response

```
{
  "status": "success",
  "code": 200,
  "data": {
    "items": {
      "books": {
        "items": [
          {
            "uid": "8c1c1704-2438-41a7-b111-9d578116c252",
            "title": "Державець",
            "original_title": null,
            "slug": "324095-derzhavets",
            "cover": {
              "front_cover": "https://i.mbooks.com.ua/media/books/8c1c1704-2438-41a7-b111-9d578116c252/covers/None/a0a15fe4c9c749baa37572c0d89eb809.jpeg",
              "back_cover": "https://i.mbooks.com.ua/media/books/8c1c1704-2438-41a7-b111-9d578116c252/covers/None/b3c822a94c0f40d08952394e92dd090a.jpeg"
            },
            "tags": [],
            "set_of_books": false,
            "specific_book": false,
            "authors": [
              {
                "uid": "1d6de295-7ab9-4d9a-92b0-1382469e821f",
                "first_name": "Нікколо",
                "last_name": "Мак'явеллі",
                "original_name": null,
                "slug": "nikkollo-makiavelli",
                "description": "",
                "image": null,
                "books_quantity": 8
              }
            ],
            "compilers": [],
            "is_favorite": false,
            "status": "ready_for_order",
            "purchases": {
              "price": 180,
              "preorder_price": null,
              "preorder_quantity": null,
              "preorder_date": null,
              "current_price": 180,
              "current_quantity": 6,
              "megogo_price": null,
              "currency": "грн",
              "currency_code": "uah"
            },
            "number_in_series": null,
            "discount": null,
            "national_cashback": true,
            "eknyha": true,
            "colored_edge": false
          },
          {
            "uid": "d58111e2-4106-4b59-aadf-53b03f932e09",
            "title": "Державець",
            "original_title": null,
            "slug": "696486-derzhavets",
            "cover": {
              "front_cover": "https://i.mbooks.com.ua/media/books/d58111e2-4106-4b59-aadf-53b03f932e09/covers/None/311a996bf8f64b59993ba19d24742c34.jpeg",
              "back_cover": "https://i.mbooks.com.ua/media/books/d58111e2-4106-4b59-aadf-53b03f932e09/covers/None/9858b03a4a61429eb8bc3cc63821f109.jpeg"
            },
            "tags": [],
            "set_of_books": false,
            "specific_book": false,
            "authors": [
              {
                "uid": "1d6de295-7ab9-4d9a-92b0-1382469e821f",
                "first_name": "Нікколо",
                "last_name": "Мак'явеллі",
                "original_name": null,
                "slug": "nikkollo-makiavelli",
                "description": "",
                "image": null,
                "books_quantity": 8
              }
            ],
            "compilers": [],
            "is_favorite": false,
            "status": "unavailable",
            "purchases": {
              "price": 120,
              "preorder_price": null,
              "preorder_quantity": null,
              "preorder_date": null,
              "current_price": 120,
              "current_quantity": 0,
              "megogo_price": 108,
              "currency": "грн",
              "currency_code": "uah"
            },
            "number_in_series": null,
            "discount": null,
            "national_cashback": true,
            "eknyha": true,
            "colored_edge": false
          },
          {
            "uid": "d45bae15-69a0-459d-9f98-206a5715ed48",
            "title": "Державець",
            "original_title": null,
            "slug": "716662-derzhavets",
            "cover": {
              "front_cover": "https://i.mbooks.com.ua/media/books/d45bae15-69a0-459d-9f98-206a5715ed48/covers/None/1506f80d69d346598fbd8a372e72fb12.jpeg",
              "back_cover": "https://i.mbooks.com.ua/media/books/d45bae15-69a0-459d-9f98-206a5715ed48/covers/17398/f0a0e7672fd34a5c89aa21ade15095d6.jpeg"
            },
            "tags": [],
            "set_of_books": false,
            "specific_book": false,
            "authors": [
              {
                "uid": "1d6de295-7ab9-4d9a-92b0-1382469e821f",
                "first_name": "Нікколо",
                "last_name": "Мак'явеллі",
                "original_name": null,
                "slug": "nikkollo-makiavelli",
                "description": "",
                "image": null,
                "books_quantity": 8
              }
            ],
            "compilers": [],
            "is_favorite": false,
            "status": "unavailable",
            "purchases": {
              "price": 210,
              "preorder_price": null,
              "preorder_quantity": null,
              "preorder_date": null,
              "current_price": 210,
              "current_quantity": 0,
              "megogo_price": 189,
              "currency": "грн",
              "currency_code": "uah"
            },
            "number_in_series": null,
            "discount": null,
            "national_cashback": false,
            "eknyha": true,
            "colored_edge": false
          },
          {
            "uid": "c4b964e7-2df9-49ac-b46a-efe8d9b1d70b",
            "title": "Державець",
            "original_title": null,
            "slug": "179023-derzhavets",
            "cover": {
              "front_cover": "https://i.mbooks.com.ua/media/books/c4b964e7-2df9-49ac-b46a-efe8d9b1d70b/covers/None/9797c0d58aa043b887e390701bc5903d.jpeg",
              "back_cover": null
            },
            "tags": [],
            "set_of_books": false,
            "specific_book": false,
            "authors": [
              {
                "uid": "1d6de295-7ab9-4d9a-92b0-1382469e821f",
                "first_name": "Нікколо",
                "last_name": "Мак'явеллі",
                "original_name": null,
                "slug": "nikkollo-makiavelli",
                "description": "",
                "image": null,
                "books_quantity": 8
              }
            ],
            "compilers": [],
            "is_favorite": false,
            "status": "ready_for_order",
            "purchases": {
              "price": 165,
              "preorder_price": null,
              "preorder_quantity": null,
              "preorder_date": null,
              "current_price": 165,
              "current_quantity": 3,
              "megogo_price": null,
              "currency": "грн",
              "currency_code": "uah"
            },
            "number_in_series": null,
            "discount": null,
            "national_cashback": false,
            "eknyha": true,
            "colored_edge": false
          },
          {
            "uid": "7a884037-b914-4271-a31b-d8e990c531cd",
            "title": "Державець. Флорентійські хроніки",
            "original_title": "Istorie Fiorentine. II Principe",
            "slug": "889718-derzhavets-florentiiski-khroniky",
            "cover": {
              "front_cover": "https://i.mbooks.com.ua/media/books/7a884037-b914-4271-a31b-d8e990c531cd/covers/None/033d5946bc084d979693872f659a9235.jpeg",
              "back_cover": null
            },
            "tags": [],
            "set_of_books": false,
            "specific_book": false,
            "authors": [
              {
                "uid": "1d6de295-7ab9-4d9a-92b0-1382469e821f",
                "first_name": "Нікколо",
                "last_name": "Мак'явеллі",
                "original_name": null,
                "slug": "nikkollo-makiavelli",
                "description": "",
                "image": null,
                "books_quantity": 8
              }
            ],
            "compilers": [],
            "is_favorite": false,
            "status": "ready_for_order",
            "purchases": {
              "price": 549,
              "preorder_price": null,
              "preorder_quantity": null,
              "preorder_date": null,
              "current_price": 549,
              "current_quantity": 4,
              "megogo_price": null,
              "currency": "грн",
              "currency_code": "uah"
            },
            "number_in_series": null,
            "discount": null,
            "national_cashback": true,
            "eknyha": true,
            "colored_edge": false
          }
        ],
        "total": 5,
        "limit": 24,
        "offset": null
      },
      "authors": {
        "items": [],
        "total": 0,
        "limit": 24,
        "offset": null
      },
      "publishers": {
        "items": [],
        "total": 0,
        "limit": 24,
        "offset": null
      },
      "series": {
        "items": [],
        "total": 0,
        "limit": 24,
        "offset": null
      }
    }
  }
}
```

### Information API returns

- ✅ Title
- ✅ Author
- ✅ Price
- ✅ Link (slug)
- ✅ Availability
- ✅ Format (always physical)
- ❌ ISBN
- ❌ Publisher

### Books key

You can get an array of books by going to:
`data.items.books.items`

### Title key

Source: `title`
Type: string

### Author

Source: `authors`
Type: Array of objects {
    "first_name": string,
    "last_name": string
}

### Price

Source: `purchases.price`
Type: number
Example: 232

### Link (slug)

Source: `slug`
Type: string
Example: "324095-derzhavets"

### Availability

Source: `status`
Type: 'ready_for_order' | 'unavailable'

### Format

Always physical