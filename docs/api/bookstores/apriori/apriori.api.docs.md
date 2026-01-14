# Apriori API documentation

Apriori API can be reached by a simple endpoint with `GET` request

## Request

**Endpoint**
`https://apriori-publishing.com/backend/products/search`

**Method**
`GET`

**PARAMETERS**
`?search={QUERY}&limit=10&sort=bestsellers`

## Response and additional description

### Response

```{
  "count": 2
  "result": [
    {
      "id": "mark-avrelej-naodinze-z-sobou1676",
      "name": "Марк Аврелій. Наодинці з собою",
      "authorName": "Марк Аврелій",
      "stock": 1000,
      "type": "singular",
      "paperAvailable": true,
      "paperPrice": "280",
      "paperPriceReal": "280",
      "isPreorder": false,
      "images": {
        "size1080": "/imagecdn/e27f4838-2dc0-4049-985a-6846e7722db4-1080.jpg",
        "size512": "/imagecdn/e27f4838-2dc0-4049-985a-6846e7722db4-512.jpg",
        "size128": "/imagecdn/e27f4838-2dc0-4049-985a-6846e7722db4-128.jpg",
        "url": "https://apriori-publishing.com/imagecdn/e27f4838-2dc0-4049-985a-6846e7722db4-1080.jpg"
      },
      "bundleImages": [],
      "discountUntil": "2025-06-18T21:59:59.000Z",
      "discountPercentReal": 0,
      "isEnabled": true,
      "isTop": true,
      "isNew": false,
      "weightInGrams": 330,
      "seoDescription": "\"Наодинці з собою\" Марка Аврелія – це філософські медитації видатного стоїка та римського імператора, які допомагають усвідомити своє призначення в житті."
    },
    {
      "id": "listuvanna-z-nastavnikom",
      "name": "Листування з наставником",
      "authorName": "Марк Аврелій",
      "stock": 1000,
      "type": "singular",
      "paperAvailable": true,
      "paperPrice": "250",
      "paperPriceReal": "250",
      "isPreorder": false,
      "images": {
        "size1080": "/imagecdn/dc2b7b7e-df4b-4c04-98d1-70e2cc5496e5-1080.jpg",
        "size512": "/imagecdn/dc2b7b7e-df4b-4c04-98d1-70e2cc5496e5-512.jpg",
        "size128": "/imagecdn/dc2b7b7e-df4b-4c04-98d1-70e2cc5496e5-128.jpg",
        "url": "https://apriori-publishing.com/imagecdn/dc2b7b7e-df4b-4c04-98d1-70e2cc5496e5-1080.jpg"
      },
      "bundleImages": [],
      "discountUntil": "2025-06-18T21:59:59.000Z",
      "discountPercentReal": 0,
      "isEnabled": true,
      "isTop": true,
      "isNew": true,
      "weightInGrams": 300,
      "seoDescription": ""
    }
  ]
}
```

### Information API returns

- ✅ Title
- ✅ Author
- ✅ Price
- ✅ Link (Returns slug)
- ✅ Availability
- ✅ Format — Is not provided. Always physical
- ✅❌ ISBN. This API provides ISBN, but it's provided by reaching special API for a particular book.
- ✅ Publisher (Is not provided. Always "Апріорі")

### Books key

To reach book's info, you need to map an array that you can reach by call `result` key.
So, in the root of API answer we have 2 keys:
`count` and `result`.

`count` — Is a number of books that were found by API
`result` — Is an array of books

So, we do:

```
result.map(book => callback)
```

### Title

Source: `name`
Type: string

### Author

Source: `authorName`
Type: string

### Price

It returns a price after discount

Source: `paperPriceReal`
Type: string

`paperPrice` returns price before discount

Source: `paperPrice`
Type: string

So, we could show what's the discount is by simply doing `paperPrice` - `paperPriceReal`

### Link (slug)

Source: `id`
Type: string
Example: `"zatruena-casa"`

We can go to the book page by doing:
`BASE_URL/product/zatruene-casa`

### Availability

Source: `stock`
Type: number

The most safe to understand if book is available is by checking if stock is greater than 0.

### Format

Is not provided. Always physical.

### ISBN

Is not provided directly through searching multiple books, but can be reached by reaching API for the specific book.
[Read more:](#book-specific-api)

### Publisher

Is not provided. Always 'Апріорі'.

### Discount until

Shows when the discount ends.

Source: `discountUntil`
Type: Date
Example: `"2025-08-15T09:10:33.000Z`

### Discount percent

Shows what's the discount in percent

Source: `discountPercentReal`
Type: number
Example: 15

### Weight in grams

Shows how much books weights in grams.

Source: `weightInGrams`
Type: number
Example: 556

# Book specific API

Apriori API provides pretty good API itself by just searching a book by a query, but if we would try to use it's API for getting information for the specific book — we could get the way more generous API.

## Request

**Endpoint**
`https://apriori-publishing.com/backend/products/id/{SLUG}`

As we can see, endpoint looks similar to our default API endpoint, but after products we write /id and after id /SLUG.
Example:
`https://apriori-publishing.com/backend/products/id/nicni-cuvanna-kalejdoskop-u-k`

**Method**
`GET`

## Response and additional description

### Response

```
{
  "id": "nicni-cuvanna-kalejdoskop-u-k",
  "name": "Нічні чування. Калейдоскоп у «К»",
  "description": "\u003Cp style=\"text-align: justify\"\u003EУ романі \u003Cstrong\u003E«Нічні чування»\u003C/strong\u003E шотландського письменника Арчибальда Джозефа Кроніна перед читачем розгортається історія молодої самовідданої медсестри Енн Лі. Прагнучи захистити сестру, вона ризикує власною кар’єрою та майбутнім у професії, яку вважає своїм покликанням. Водночас, попри складні обставини, героїня залишається відданою своїм принципам і цілям, продовжує боротися за пацієнтів, за медсестер і за себе. Через переживання та прикрості героїв автор майстерно відтворює труднощі й несправедливості, з якими стикалося тогочасне медсестринство, у яких нелюдських умовах доводилося подекуди працювати і жити.\u003C/p\u003E\u003Cp style=\"text-align: justify\"\u003EУ повісті \u003Cstrong\u003E«Калейдоскоп у “К”»\u003C/strong\u003E автор змальовує один день у лікарняній палаті «К». Калейдоскоп з пацієнтів, які навряд чи перетнулися б поза стінами палати, з доль, таких не схожих між собою, та з виру несподіваних почуттів. Блискуча старша медсестра Фанні занурена в бурю власних емоцій та переживань, розчарувань, сумнівів і надій. Талановитий хірург Барклі – геній, що кидає виклик традиції та упередженням. Пацієнти та медпрацівники волею випадку перетнулися у стінах «К», створивши незабутній калейдоскоп.\u003C/p\u003E\u003Cp style=\"text-align: justify\"\u003E\u003C/p\u003E\u003Cp style=\"text-align: justify\"\u003E\u003Cem\u003EОбкладинка Марії Гумецької. \u003C/em\u003E\u003C/p\u003E",
  "authorName": "Арчибальд Джозеф Кронін",
  "authorPronouns": "he/him",
  "digitalAvailable": false,
  "paperAvailable": true,
  "paperPrice": "360",
  "digitalPrice": "0",
  "paperPriceReal": "360",
  "digitalPriceReal": "0",
  "isbn": "",
  "specs": [
    {
      "name": "Перекладачки",
      "value": "Юлія Наняк, Надія Марчук"
    },
    {
      "name": "Мова",
      "value": "українська"
    },
    {
      "name": "К-ть сторінок",
      "value": "240"
    },
    {
      "name": "Обкладинка",
      "value": "тверда; авторка - Марія Гумецька"
    }
  ],
  "collectionId": "W9FPl",
  "categoryId": "",
  "publisherId": "jvZ05",
  "isPreorder": false,
  "type": "singular",
  "bundleIds": [],
  "bundleImages": [],
  "bundleAuthors": [],
  "vendorCode": "",
  "images": {
    "size1080": "/imagecdn/d234d6df-524f-4d8f-b47b-34bf729c92ce-1080.jpg",
    "size512": "/imagecdn/d234d6df-524f-4d8f-b47b-34bf729c92ce-512.jpg",
    "size128": "/imagecdn/d234d6df-524f-4d8f-b47b-34bf729c92ce-128.jpg",
    "url": "https://apriori-publishing.com/imagecdn/d234d6df-524f-4d8f-b47b-34bf729c92ce-1080.jpg"
  },
  "previewUrls": [
    "https://apriori-publishing.com/imagecdn/20450374-6974-4f39-a581-4c904eb8645f-1080.jpg",
    "https://apriori-publishing.com/imagecdn/cdc3706e-569c-4bef-8264-12d02b6bc56e-1080.jpg",
    "https://apriori-publishing.com/imagecdn/8b236aaa-66c7-4b16-aff4-0ae1810ab05b-1080.jpg",
    "https://apriori-publishing.com/imagecdn/575257ef-2ff2-4328-95f8-437d57540ff7-1080.jpg",
    "https://apriori-publishing.com/imagecdn/3c759417-5a0a-44b3-8cf7-346738aef5e3-1080.jpg",
    "https://apriori-publishing.com/imagecdn/df2dbdf9-6508-47e2-b4a7-5c7af918e733-1080.jpg",
    "https://apriori-publishing.com/imagecdn/f8e08ad1-d209-486f-b96b-7dd37c5038ff-1080.jpg",
    "https://apriori-publishing.com/imagecdn/31842c7d-21c6-491f-80fe-675d0cd9df81-1080.jpg",
    "https://apriori-publishing.com/imagecdn/24ac4725-252e-4442-8ffe-c4409c486019-1080.jpg"
  ],
  "tags": [
    "UBNo7",
    "dznIe",
    "DJnhd",
    "CdSOA"
  ],
  "tagsV2": [
    "UBNo7",
    "dznIe",
    "DJnhd",
    "CdSOA"
  ],
  "stock": 0,
  "isEnabled": true,
  "goodReadsStats": null,
  "publishingDate": "2025-07-28T15:17:13.147Z",
  "discountUntil": "2025-07-28T15:17:13.147Z",
  "discountPercentReal": 0,
  "weightInGrams": 330,
  "volume": {
    "mmX": "150",
    "mmY": "220",
    "mmZ": "20"
  },
  "seoDescription": "",
  "isTop": true,
  "isNew": true,
  "isbnLocal": "978-617-629-941-7",
  "seoName": "Нічні чування. Калейдоскоп у «К»"
}
```

### Information API returns

- ✅ Title
- ✅ Author
- ✅ Description
- ✅ Language
- ✅ Translator
- ✅ Page count
- ✅ Cover type (soft/hard)
- ✅ Stock
- ✅ Price
- ✅ Link
- ✅ Availability
- ✅ Format (e-book/physic/audio book)
- ✅ ISBN
- ✅ Publisher

## Keys

### Title

Source: `name`
Type: string

### Author

Source: `authorName`
Type: string

### Price

It returns a price after discount

Source: `paperPriceReal`
Type: string

`paperPrice` returns price before discount

Source: `paperPrice`
Type: string

So, we could show what's the discount is by simply doing `paperPrice` - `paperPriceReal`

### Link (slug)

Source: `id`
Type: string
Example: `"zatruena-casa"`

We can go to the book page by doing:
`BASE_URL/product/zatruene-casa`

### Availability

Source: `stock`
Type: number

The most safe to understand if book is available is by checking if stock is greater than 0.

### Format

Is not provided. Always physical.

### ISBN

It is recomended to try to reach both keys, because it's not guaranteed both are provided. If none of them provided — return null.

Source: `isbnLocal`
Type: string
Example: "978-617-629-941-7"

Source: `isbn`
Type: string


### Publisher

Is not provided. Always 'Апріорі'.

### Discount until

Shows when the discount ends.

Source: `discountUntil`
Type: Date
Example: `"2025-08-15T09:10:33.000Z`

### Discount percent

Shows what's the discount in percent

Source: `discountPercentReal`
Type: number
Example: 15

### Weight in grams

Shows how much books weights in grams.

Source: `weightInGrams`
Type: number
Example: 556+
