# Yakaboo API documentation

Yakaboo does not provide a simple GET request endpoint as more of the other APIs. Instead, Yakaboo requires POST request with specific data.

## Request

**Endpoint**
`https://api2.yakaboo.ua/api/catalog/vue_storefront_catalog_2/product/_search`

**Method**
`POST`

**Payload**

```
{
    "query": {
        "bool": {
            "must": {
                "function_score": {
                    "query": {
                        "bool": {
                            "should": [
                                {
                                     "multi_match": {
                                        "fields": [
                                            "name^4",
                                            "sku^5",
                                            "category.name^1",
                                            "author_label.label^2",
                                            "book_publisher_label.label^2",
                                            "gift_brand_label.label^2",
                                            "keywords^3",
                                            "children_brand_label.label^2"
                                        ],
                                        "query": query,
                                        "fuzziness": 1.5,
                                        "minimum_should_match": "75%"
                                    }
                                }
                                ]
                        }
                    },
                    "functions": [
                        {
                            "field_value_factor": {
                                "field": "statistics_visits",
                                "modifier": "log1p",
                                "missing": 1
                            }
                        }
                    ],
                    "boost_mode": "sum",
                    "score_mode": "sum"
                }
            },
            "filter": {
                "bool": {
                     "must": [
                        {
                            "terms": {
                                "visibility": [2, 3, 4]
                            }
                        },
                        {
                            "terms": {
                                "status": [0, 1]
                            }
                        }
                    ]
                }
            }
        }
    },
    "track_total_hits": True,
    "size": 10
}
```

## Response and handling it

### Response

```
{
    'took': 15;
    'timed_out: False,
    '_shards: {
        'total': 1,
        'successful': 1,
        'skipped': 0,
        'failed': 0
    },
    'hits': {
        'total': {
            'value': 18,
            'relation': 'eq'
        },
        'max_score': 67.43507,
        'hits': [
            {
                "_index": "vue_storefront_catalog_2_product_1750401964",
                "_type": "product",
                "_id": "2244902",
                "_score": 67.444695,
                "_source": {
                  "attribute_set_id": 20,
                  "created_at": "2021-01-18 07:49:08",
                  "updated_at": "2025-08-06 23:28:04",
                  "type_id": "simple",
                  "sku": "1266065",
                  "id": 2244902,
                  "name": "Державець",
                  "image": "/3/6/362_1_1.jpg",
                  "small_image": "/3/6/362_1_1.jpg",
                  "thumbnail": "/3/6/362_1_1.jpg",
                  "url_key": "derzhavec-2244902",
                  "author_label": [
                    {
                      "option_id": "375596",
                      "attribute_id": "2942",
                      "attribute_label": "Автор",
                      "label": "Нікколо Макіавеллі",
                      "url_path": "author/view/Nikkolo_Makiavelli",
                      "sort_order": "0",
                      "option_code": "Nikkolo_Makiavelli"
                    }
                  ],
                  "author": [375596],
                  "book_binding_type_label": [
                    {
                      "option_id": "332270",
                      "attribute_id": "2945",
                      "attribute_label": "Тип обкладинки",
                      "label": "М'яка",
                      "url_path": "None",
                      "sort_order": "0",
                      "option_code": "Mjagkij"
                    }
                  ],
                  "book_binding_type": [332270],
                  "book_lang_label": [
                    {
                      "option_id": "332272",
                      "attribute_id": "2957",
                      "attribute_label": "Мова",
                      "label": "Українська",
                      "url_path": "None",
                      "sort_order": "1",
                      "option_code": "Ukrainskij"
                    }
                  ],
                  "book_lang": [332272],
                  "book_page_count_label": [
                    {
                      "attribute_label": "Кількість сторінок",
                      "label": "88"
                    }
                  ],
                  "book_page_count": "88",
                  "book_publisher_label": [
                    {
                      "option_id": "866852",
                      "attribute_id": "2961",
                      "attribute_label": "Видавництво",
                      "label": "Андронум",
                      "url_path": "book_publisher/view/Andronum",
                      "sort_order": "100",
                      "option_code": "Andronum"
                    }
                  ],
                  "book_publisher": [866852],
                  "book_translator_label": [
                    {
                      "option_id": "360679",
                      "attribute_id": "2965",
                      "attribute_label": "Перекладач",
                      "label": "Ярослав Мишанич",
                      "url_path": "book_translator/view/Jaroslav_Mishanich",
                      "sort_order": "100",
                      "option_code": "Jaroslav_Mishanich"
                    }
                  ],
                  "book_translator": [360679],
                  "barcode": "9780880000444",
                  "book_binding_label": [
                    {
                      "attribute_label": "Формат",
                      "label": "145х205 мм"
                    }
                  ],
                  "book_binding": "145х205 мм",
                  "book_isbn_label": [
                    {
                      "attribute_label": "ISBN",
                      "label": "978-088-0000-44-4"
                    }
                  ],
                  "book_isbn": "978-088-0000-44-4",
                  "book_print_label": [
                    {
                      "option_id": "733264",
                      "attribute_id": "3987",
                      "attribute_label": "Папір",
                      "label": "Офсетний",
                      "url_path": "None",
                      "sort_order": "0",
                      "option_code": "Ofsetnaja"
                    }
                  ],
                  "book_print": [733264],
                  "book_illustration_label": [
                    {
                      "option_id": "733254",
                      "attribute_id": "3988",
                      "attribute_label": "Ілюстрації",
                      "label": "Немає ілюстрацій",
                      "url_path": "book_illustration/view/Net_illjustracij",
                      "sort_order": "0",
                      "option_code": "Net_illjustracij"
                    }
                  ],
                  "book_illustration": [733254],
                  "for_filter_is_in_stock": [740596],
                  "marketplace_id": "yakaboo",
                  "book_publication_label": [
                    {
                      "option_id": "781497",
                      "attribute_id": "4153",
                      "attribute_label": "Тип",
                      "label": "Паперова",
                      "url_path": "None",
                      "sort_order": "0",
                      "option_code": "Bumazhnaja"
                    }
                  ],
                  "book_publication": [781497],
                  "status": 1,
                  "visibility": 4,
                  "statistics_visits": 1349,
                  "book_year_label": [
                    {
                      "attribute_label": "Рік видання",
                      "label": 2020
                    }
                  ],
                  "book_year": 2020,
                  "is_top_sale": true,
                  "is_top_sale_count": 80,
                  "description": "<p style=\"text-align: justify;\"><span>Італійський політик, філософ, історик, письменник, поет і комедіограф Нікколо Мак&rsquo;явеллі (1469&ndash;1527) особливої слави зажив своїм знаменитим твором &laquo;Державець&raquo; (1513), в якому він зробив спробу сформулювати загальні закони політичного життя, викласти суть &laquo;ремесла політика&raquo;, а також визначити роль і місце державця в Європі та Італії ХVІ століття. У наші дні ці питання набули надзвичайної гостроти та актуальності.</span></p>",
                  "short_description": "Італійський політик, філософ, історик, письменник, поет і комедіограф Нікколо Мак’явеллі (1469–1527) особливої слави зажив своїм знаменитим твором «Державець» (1513), в якому він зробив спробу сформулювати загальні закони політичного життя, викласти суть «ремесла політика», а також визначити роль і місце державця в Європі та Італії ХVІ століття. У наші дні ці питання набули надзвичайної гостроти та актуальності.",
                  "quote": "{{DELIMETER}}",
                  "keywords": "государь трактат философия политика италия Никколо Макиавелли",
                  "price": 156,
                  "special_price": 156,
                  "weight": 5,
                  "special_from_date": "2021-01-18 00:00:00",
                  "published_at": "2021-01-18 00:00:00",
                  "url_path_1": "derzhavec-2244902.html",
                  "url_path_2": "derzhavec-2244902.html",
                  "url_path": "derzhavec-2244902.html",
                  "url_path_3": "derzhavec-2244902.html",
                  "another_link": [
                    "1237494",
                    "1568011",
                    "1580148",
                    "1876465",
                    "1886653",
                    "1906984",
                    "1906985",
                    "1906986",
                    "1926653",
                    "1935633",
                    "1938906",
                    "1940985",
                    "1948915",
                    "2036815",
                    "2137132",
                    "2137133",
                    "2156699",
                    "2157494",
                    "2210484",
                    "2244364",
                    "2254704",
                    "2301847",
                    "2385744",
                    "2389144",
                    "2569314",
                    "2778291",
                    "2790790",
                    "2798960",
                    "2799139",
                    "2800346",
                    "2843801",
                    "2851075",
                    "2978872",
                    "2982611",
                    "3131282",
                    "3238092",
                    "3352471",
                    "3369198"
                  ],
                  "category": [
                    {
                      "category_id": 2,
                      "name": "Default Category",
                      "position": 10001,
                      "parent_id": "1",
                      "breadcrumb": 0,
                      "url_path": "",
                      "level": "1"
                    },
                    {
                      "category_id": 4723,
                      "name": "Книжки",
                      "position": 10001,
                      "parent_id": "2",
                      "breadcrumb": 1,
                      "url_path": "knigi.html",
                      "level": "2"
                    },
                    {
                      "category_id": 5658,
                      "name": "Суспільство. Держава. Філософія",
                      "position": 10001,
                      "parent_id": "4723",
                      "breadcrumb": 1,
                      "url_path": "knigi/obschestvo-gosudarstvo-filosofija.html",
                      "level": "3"
                    },
                    {
                      "category_id": 5671,
                      "name": "Політика. Держава",
                      "position": 10001,
                      "parent_id": "5658",
                      "breadcrumb": 1,
                      "url_path": "knigi/obschestvo-gosudarstvo-filosofija/politika-gosudarstvo.html",
                      "level": "4"
                    },
                    {
                      "category_id": 5672,
                      "name": "Політологія. Політичні мемуари",
                      "position": 1,
                      "parent_id": "5671",
                      "breadcrumb": 1,
                      "url_path": "knigi/obschestvo-gosudarstvo-filosofija/politika-gosudarstvo/politologija-politicheskie-memuary.html",
                      "level": "5"
                    }
                  ],
                  "category_ids": [2, 4723, 5658, 5671, 5672],
                  "filterable_category_ids": [5658],
                  "default_category": ["4723", "5658", "5671", "5672"],
                  "final_price": 156,
                  "regular_price": 165,
                  "discount_percent": 6,
                  "media_gallery": [
                    {
                      "typ": "image",
                      "image": "/3/6/362_1_1.jpg",
                      "lab": "",
                      "pos": 0
                    },
                    {
                      "typ": "image",
                      "image": "/3/6/362_2_1.jpg",
                      "lab": "",
                      "pos": 1
                    },
                    {
                      "typ": "image",
                      "image": "/3/6/362_5_1.jpg",
                      "lab": "",
                      "pos": 2
                    },
                    {
                      "typ": "image",
                      "image": "/3/6/362_6_1.jpg",
                      "lab": "",
                      "pos": 3
                    },
                    {
                      "typ": "image",
                      "image": "/3/6/362_3_1.jpg",
                      "lab": "",
                      "pos": 4
                    },
                    {
                      "typ": "image",
                      "image": "/3/6/362_4_2.jpg",
                      "lab": "",
                      "pos": 5
                    }
                  ],
                  "mediagallery_image": [
                    {
                      "file": "/0/1/01_6358.png",
                      "sort_order": "1",
                      "entity_id": "2244902",
                      "image_url": "https://static.yakaboo.ua/media/mediagallery/image/0/1/01_6358.png"
                    },
                    {
                      "file": "/0/2/02_6277.png",
                      "sort_order": "2",
                      "entity_id": "2244902",
                      "image_url": "https://static.yakaboo.ua/media/mediagallery/image/0/2/02_6277.png"
                    },
                    {
                      "file": "/0/3/03_6166.png",
                      "sort_order": "3",
                      "entity_id": "2244902",
                      "image_url": "https://static.yakaboo.ua/media/mediagallery/image/0/3/03_6166.png"
                    },
                    {
                      "file": "/0/4/04_6083.png",
                      "sort_order": "4",
                      "entity_id": "2244902",
                      "image_url": "https://static.yakaboo.ua/media/mediagallery/image/0/4/04_6083.png"
                    },
                    {
                      "file": "/0/5/05_5855.png",
                      "sort_order": "5",
                      "entity_id": "2244902",
                      "image_url": "https://static.yakaboo.ua/media/mediagallery/image/0/5/05_5855.png"
                    },
                    {
                      "file": "/0/6/06_5293.png",
                      "sort_order": "6",
                      "entity_id": "2244902",
                      "image_url": "https://static.yakaboo.ua/media/mediagallery/image/0/6/06_5293.png"
                    },
                    {
                      "file": "/0/7/07_4863.png",
                      "sort_order": "7",
                      "entity_id": "2244902",
                      "image_url": "https://static.yakaboo.ua/media/mediagallery/image/0/7/07_4863.png"
                    },
                    {
                      "file": "/0/8/08_4771.png",
                      "sort_order": "8",
                      "entity_id": "2244902",
                      "image_url": "https://static.yakaboo.ua/media/mediagallery/image/0/8/08_4771.png"
                    },
                    {
                      "file": "/0/9/09_4691.png",
                      "sort_order": "9",
                      "entity_id": "2244902",
                      "image_url": "https://static.yakaboo.ua/media/mediagallery/image/0/9/09_4691.png"
                    }
                  ],
                  "product_links": [],
                  "stock": [
                    {
                      "source_code": "default_yakaboo",
                      "product_id": 2244902,
                      "qty": 32,
                      "stock_status": 1,
                      "is_in_stock": true,
                      "is_europe": false
                    },
                    {
                      "source_code": "yakaboo_kyiv",
                      "product_id": 2244902,
                      "qty": 0,
                      "stock_status": 1,
                      "is_in_stock": true,
                      "is_europe": false
                    }
                  ],
                  "promotion_ids": [1409, 550, 1273, 1326],
                  "promotion_promo_type": "1",
                  "promotions": [
                    {
                      "name": "None",
                      "color": "None",
                      "background": "None",
                      "sort": 0,
                      "url_key": "garjachi-litni-znizhki-do-70.html"
                    },
                    {
                      "name": "None",
                      "color": "None",
                      "background": "None",
                      "sort": 0,
                      "url_key": "knigi-na-front.html"
                    },
                    {
                      "name": "None",
                      "color": "None",
                      "background": "None",
                      "sort": 0,
                      "url_key": "zamovlennja-eknigi-na-yakaboo-z-bezplatnoju-dostavkoju.html"
                    },
                    {
                      "name": "None",
                      "color": "None",
                      "background": "None",
                      "sort": 0,
                      "url_key": "bezplatna-dostavka-meest-dlja-zamovlen-vid-600.html"
                    }
                  ],
                  "promotion_ids_visible": [
                    102, 444, 474, 488, 550, 589, 614, 742, 764, 773, 836, 898, 928,
                    1126, 1172, 1198, 1255, 1272, 1273, 1326, 1409, 1421
                  ],
                  "reward_bonus": [
                    {
                      "customer_group_id": 0,
                      "percent": 50,
                      "is_extra_bonus": 0
                    },
                    {
                      "customer_group_id": 1,
                      "percent": 50,
                      "is_extra_bonus": 0
                    }
                  ],
                  "h1": "Книга Державець",
                  "meta_description": "ᐉ Купити книгу «Державець», автор – Нікколо Макіавеллі, в інтернет-магазині YAKABOO 👈. Замовте книгу за найкращою ціною 156 грн. Відгуки та рецензії ✍.",
                  "meta_title": "Книга «Державець» – Нікколо Макіавеллі, купити за ціною 156 на YAKABOO: 978-088-0000-44-4",
                  "free_shipping": 1,
                  "tsk": 1754579527,
                  "original_price": 165,
                  "original_price_tax": 0,
                  "original_price_incl_tax": 165,
                  "original_special_price": 156,
                  "original_final_price": 156,
                  "price_tax": 0,
                  "price_incl_tax": 156,
                  "special_price_tax": 0,
                  "special_price_incl_tax": 0,
                  "final_price_tax": 0,
                  "final_price_incl_tax": 156
                }
            },
        ]
    }
}
```

### Information API returns:

- ✅ Title
- ✅ Author
- ✅ Price
- ✅ Link
- ✅ Availability
- ✅ Format (e-book/physic/audio book)
- ✅ ISBN
- ✅ Publisher

Anyway, there are other useful info as well. For example, Yakaboo API also returns:

- Page count
- Translator
- Type of paper
- Year of publication
- Category
- Stock (how many left)

So, as we see, to get books we need to get hits.hits from response.

### Books key

`hits.hits`

/// Inside hits.hits

### Title key

Source: `_source.name`
Type: Name is just a string as it is
Example: "Державець"

### Author

Source: `_source.author_label`
Type: array
Example:

```
[
    {
      "option_id": "375596",
      "attribute_id": "2942",
      "attribute_label": "Автор",
      "label": "Нікколо Макіавеллі",
      "url_path": "author/view/Nikkolo_Makiavelli",
      "sort_order": "0",
      "option_code": "Nikkolo_Makiavelli"
    }
]
```

```
    array.map(element => element.key)
```

**Author label**

Label is available in an element of array as key named `element.label`

Source: `element.label`
Type: string
Example: "Нікколо Макківеллі"

There might be multiple authors, so it's better to map the whole array and get all labels.

**Author url**

Soruce: `element.url_path`
Type: string; Link
Example: "author/view/Nikkolo_Makiavelli"
Usage: Add this string to yakaboo base url;
`https://yakaboo.ua/author/view/Nikkolo_Makiavelli`

### Price key

The `_source.final_price` is the price the customer pays, which may be lower than the ``_source.regular_price`` if a discount is greater than 0.
Source: `_source.final_price`
Type: number
Example: 60

Book price may be changed with discount.

Source: `_source.discount_percent`
Type: number; Percent of discount
Example: 6

If you want to see what's regular price you should use `_source.regular_price`. Regular price always equal final price or greater than that

`regular_price >= final_price`

Source: `_source.regular_price`
Type: number
Example: 165

`_source.final_price`
`_source.price`
`_source.special_price`
`_source.regular_price`
`_source.original_price`
`original_final_price`

### Link (slug)

Source: `_source.url_key`
Type: string
Example: `"derzhavec-2244902"`

This link is just a slug, so it has to be added to the base url. For yakaboo, it's just:
`https://yakaboo.ua/slug.html`
`https://yakaboo.ua/derzhavec-2244902.html`

It's better to make sure that there isn't .html in slug already, so it won't cause 404 error

### Availability

Source: `_source.stock[index]`
Type: Array of stock objects
Example:

```
[{
    "source_code": "default_yakaboo",
    "product_id": 3131282,
    "qty": 20,
    "stock_status": 1,
    "is_in_stock": true,
    "is_europe": false
},
{
    "source_code": "yakaboo_kyiv",
    "product_id": 3131282,
    "qty": 0,
    "stock_status": 1,
    "is_in_stock": true,
    "is_europe": false
}]
```

So, the best way to get to know if stock is available is to find out if there is is_in_stock in any of array elements.

So, we do:
Source: `array.some(item => item.is_in_stock)`
Type: boolean

### Format

Source: `_source.book_publication_lable`
Type: Array of publication label array
Example:

```
[
    {
      "option_id": "781497",
      "attribute_id": "4153",
      "attribute_label": "Тип",
      "label": "Паперова",
      "url_path": "None",
      "sort_order": "0",
      "option_code": "Bumazhnaja"
    }
]
```

Usually, this array contains only 1 element, so we can access it with array[0].
Source: `array[0].label`
Type: "Паперова" | "Електронна"
Example: "Паперова"

### ISBN

Source: `_source.book_isbn`
Type: string
Example: `"978-088-0000-44-4"`

Source: `_source.book_isbn_label`
Type: array
Example:

```
[
    {
      "attribute_label": "ISBN",
      "label": "978-966-03-8619-8"
    }
]
```

### Publisher

Source: `_source.book_publisher_label`
Type: array
Example:

```
[
    {
      "option_id": "740838",
      "attribute_id": "2961",
      "attribute_label": "Видавництво",
      "label": "BookChef",
      "url_path": "book_publisher/view/bookchef",
      "sort_order": "0",
      "option_code": "BookChef"
    }
],
```

Source: `array[0].label`
Type: string
Example: "Андронум"

### Type

Source; `_source._type`
Type: "product":
Example: "prodoct"

### Page count

Source: `_source.book_page_count`
Type: string
Example: "128"

### Year of publication

**Year of first published version**

Source: `_source.book_first_year`
Type: number
Example: 1532

**Year of last publishing**

Source: `book_year`
Type: number
Examole: 2020
