# Stary Lev API documentation

Stary Lev API can be reached by a simple endpoint with `GET` request

## Request

**Endpoint**
`https://api.starylev.com.ua/api/v1.1/global-search?q={query}`

**Method**
`GET`

**Parameters**
— `q`: Query

## Response and additional description

### Response

```
{
  "data": [
    {
      "id": 2729,
      "name": "The Snow Queen",
      "type": "book",
      "slug": "knyzka-the-snow-queen",
      "authors": [
        {
          "id": 23,
          "name": "Ганс Християн Андерсен",
          "slug": "gans-xristiyan-andersen",
          "types": [
            {
              "id": 1,
              "label": "author",
              "name": "Автор"
            }
          ]
        }
      ],
      "image": {
        "id": 37234,
        "name": "the-snow-queen-outer-cover.jpg",
        "url": "2022-10-25/the-snow-queen-outer-cover.jpg"
      }
    }
  ],
  "links": {
    "first": "http://api.starylev.com.ua/api/v1.1/global-search?page=1",
    "last": "http://api.starylev.com.ua/api/v1.1/global-search?page=1",
    "prev": null,
    "next": null
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 1,
    "links": [
      {
        "url": null,
        "label": "&laquo; Назад",
        "active": false
      },
      {
        "url": "http://api.starylev.com.ua/api/v1.1/global-search?page=1",
        "label": "1",
        "active": true
      },
      {
        "url": null,
        "label": "Далі &raquo;",
        "active": false
      }
    ],
    "path": "http://api.starylev.com.ua/api/v1.1/global-search",
    "per_page": 10,
    "to": 1,
    "total": 1
  }
}
```

### Information API returns

- ✅ Title
- ✅ Author
- ❌ Price (In API for a specific book)
- ✅ Link (slug)
- ✅ Availability
- ❌ Format (e-book/physic/audio book) (Provided in specific book API)
- ❌ ISBN (Provided in specific book API)
- ❌ Publisher

There is no need to describe what first API returns, because we will use only the slug to make another API request, so we shall see what another API gives us.

# Book Specific API

## Request

**Endpoint**
`https://starylev.com.ua/_next/data/fLGZxcJkXoI8L5PFZrJRO/{SLUG}.json?params={SLUG}`

**Method**
`GET`

**Example**
`https://starylev.com.ua/_next/data/fLGZxcJkXoI8L5PFZrJRO/knyzka-derzavec-florentiyski-xroniky.json?params=knyzka-derzavec-florentiyski-xroniky`

## Response and additional description

### Response

```json
{
  "pageProps": {
    "pageType": "product",
    "resource": {
      "id": 12174,
      "name": "Державець. Флорентійські хроніки",
      "slug": "knyzka-derzavec-florentiyski-xroniky",
      "qty": 1,
      "length": 220,
      "width": 145,
      "weight": 630,
      "isbn": "978-617-8362-62-1",
      "year": 2024,
      "active": true,
      "qty_pages": 496,
      "price": 550,
      "price_old": 550,
      "has_action_price": false,
      "books_by_book": 55,
      "presale_slug": null,
      "infinity": false,
      "description": "\u003Cp\u003EВсесвітньовідомий план захоплення та утримання влади, що вражає своєю відвертістю.\u003C/p\u003E\r\n\u003Cp\u003EСвіт знаходиться у нескінченному русі: розгораються запеклі війни і завойовуються території, найжорстокіші правителі зазнають успіхів, а потім смертельних невдач, держави змінюються, знищують старих, а потім народжують нових правителів. Стрімкий технологічний прогрес стає правою рукою революцій, по один бік яких розвиток, а по інший &mdash; катастрофічна розруха і хаос. І обирати шлях належить тим, хто має владу.\u003C/p\u003E\r\n\u003Cp\u003EІсторико-політичний трактат &laquo;Державець&raquo; і &laquo;Флорентійські хроніки&raquo; Нікколо Мак&rsquo;явеллі&nbsp; розкривають державотворення ізсередини, оспівуючи велич й критикуючи тиранію правителів світу. Автор аналізує дії і стратегії таких історичних постатей, як Александр Македонський і цар Кір, папа Александр і його син Чезаре Борджіа, Карл VII і Людовик XI, біблійний Давид і давньогрецький Ахіллес та багато інших. Він розмірковує над правильністю й помилками їх правлінь і пропонує рішення, які могли б все виправити.\u003C/p\u003E",
      "type": "book",
      "sub_type": "product",
      "youtube_link": null,
      "payment_link": null,
      "ebook_formats": [],
      "author": [
        {
          "id": 2105,
          "name": "Нікколо Макіавеллі",
          "slug": "nikkolo-makiavelli",
          "types": [
            {
              "id": 1,
              "label": "author",
              "name": "Автор"
            }
          ]
        }
      ],
      "translator": [],
      "designer": [],
      "illustrator": [],
      "category": {
        "id": 4,
        "name": "Паперові книги",
        "slug": "paperovi-knyzhky",
        "description": null,
        "seo": {
          "title": null,
          "h1_text": null,
          "description": null
        }
      },
      "edition": {
        "id": 10,
        "name": "Лабораторія"
      },
      "sub_categories": [
        {
          "id": 161,
          "name": "Самоосвіта (Нон-фікшн)",
          "slug": "samoosvita",
          "fullSlug": "series--non-fiksn_samoosvita",
          "description": "\u003Ch2\u003EСамоосвіта\u003C/h2\u003E\r\n\u003Cp\u003EСамоосвіта &mdash; це процес самостійного здобуття знань і навичок, необхідних для професійної, творчої чи рекреаційної діяльності. У сучасному світі з його шаленою динамікою та високими вимогами до людини нам доводиться постійно тренувати свій мозок, щоб залишатися в тренді та ефективніше працювати, покращуючи своє матеріальне становище. Розповідаємо про те, яку роль у цьому відіграє література.&nbsp;\u003C/p\u003E\r\n\u003Ch2\u003EЩо таке самоосвіта і чому вона важлива?\u003C/h2\u003E\r\n\u003Cp\u003EСамоосвіта без педагога &mdash; це самостійний пошук і вивчення корисних матеріалів. Сьогодні вона стає одним з основних способів освоєння сучасних професій у сфері інтернет-маркетингу, інформаційних технологій. застосування штучного інтелекту та креативного дизайну.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EПричина доволі проста &mdash; світ навколо нас розвивається настільки швидко, що на момент отримання диплома про вищу освіту знання вже втрачають актуальність. Тож навіть після закінчення університету людині доводиться шукати курси чи займатися самоосвітою, щоб отримати бажану посаду та почати працювати за спеціальністю. Перший варіант трохи ефективніше, а другий набагато зручніший і доступніший.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EДля початку самоосвіти вам достатньо мати перед собою книжку. Ви можете самостійно вибирати темп її вивчення та повертатися до найважливіших розділів за необхідності. Єдиним суттєвим мінусом буде практика, але цілеспрямована людина завжди знайде спосіб протестувати отримані знання та навички.&nbsp;\u003C/p\u003E\r\n\u003Ch2\u003EЯкі книги варто вибрати для самоосвіти?\u003C/h2\u003E\r\n\u003Cp\u003EКниги про самоосвіту можна умовно поділити на наступні категорії:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eмотивуюча література. Основна задача таких творів &mdash; змусити читача взяти на себе відповідальність за своє майбутнє та почати будувати кар&rsquo;єру цеглинка за цеглинкою. Вона навчить організовувати справи та не відкладати важливі завдання на потім, правильно ставити цілі та планувати горизонти їх досягнення;\u003C/li\u003E\r\n\u003Cli\u003Eсамовчителі. Докладний розбір певних практичних навичок &mdash; з нуля чи з базового рівня кваліфікації. Покрокове вивчення методик, освоєння інструментів та напрацювання досвіду. Подібні книжки представлені майже в будь-якій сфері &mdash; від програмування й пошукової оптимізації до ремонту автомобілів і складання дронів;\u003C/li\u003E\r\n\u003Cli\u003Eфілософія успіху. Автори творів цього жанру впевнені, що кожна людина може виховати в собі лідера. Достатньо лише&hellip; а далі в кожного свій рецепт успіху. Такі книжки стають бестселерами й очолюють хіт-паради кілька років чи навіть сторічь поспіль &mdash; достатньо згадати хоча б &laquo;Мистецтво війни&raquo; Сунь-Дзи;\u003C/li\u003E\r\n\u003Cli\u003Eособистий приклад. Засновники успішних корпорацій часто пишуть мемуари, в яких діляться секретами процвітання бізнесу. Один з топових прикладів сьогодні &mdash; книга &laquo;Сам собі MBA&raquo; Джека й Сьюзі Велч. У ній вони розглядають свій шлях нагору та дають поради для бізнесменів-початківців. Багато критиків називають її повноцінною альтернативою магістерському ступеню MBA та практичним керівництвом до початку власної справи.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EЯкі письменники та експерти рекомендуються для самоосвіти?\u003C/h2\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003EБодо Шефер. Самоосвіта для цього письменника &mdash; це, перш за все, емоційний інтелект та здатність переконувати самого себе у своїй здатності зрушувати гори з місця. Він упевнений, що успіх починається з внутрішньої перебудови. Ви маєте працювати над нею щоденно, крок за кроком тренуючи моральні сили, витривалість і здатність долати перешкоди. Готові до такої радикальної трансформації? Тоді починайте її разом з комплектом книжок Бодо Шефера!\u003C/li\u003E\r\n\u003Cli\u003EПетра Бок. Одна з найвідоміших коучів Німеччини впевнена в тому, що суспільство не хоче бачити нас успішними. Якщо ви виб&rsquo;єтесь вперед, люди почнуть хапати вас за руки й кидати каміння вам в спину. Суспільство програмує нас бути слухняними та пасивними. Єдиний вихід з такої ситуації &mdash; самоосвіта без вчителя, яка допоможе зламати бар&rsquo;єри в голові.&nbsp;\u003C/li\u003E\r\n\u003Cli\u003EШонда Раймс. Американська продюсерка ділиться особистими рецептами успіху. Вона &mdash; справжня self-made woman, яка змінила свою поведінку й спосіб мислення, побудувала телеімперію та зберегла міцну сім&rsquo;ю, отримала зовнішність своєї мрії та матеріальний достаток. Як саме? Дізнайтесь з її книг, в яких вона розповідає про найдрібніші деталі свого шляху кар&rsquo;єрними сходами.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch3\u003EЯкі інші ресурси корисні для самоосвіти?\u003C/h3\u003E\r\n\u003Cp\u003EКниги про самоосвіту доступні як у паперовому, так і в цифровому форматі. Ви можете завантажувати їх з інтернет-магазину &laquo;Видавництва Старого Лева&raquo;. Це швидко, зручно й доступно, адже електронна копія коштує дешевше за паперову.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EКорисними для самоосвіти також будуть наступні ресурси:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003ECoursera.\u003C/li\u003E\r\n\u003Cli\u003EEdX.&nbsp;\u003C/li\u003E\r\n\u003Cli\u003EUdacity.&nbsp;\u003C/li\u003E\r\n\u003Cli\u003EPrometheus.&nbsp;\u003C/li\u003E\r\n\u003Cli\u003EUdemy та інші.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EКупити книги жанру &laquo;самоосвіта&raquo; в інтернет-магазині &laquo;Видавництва Старого Лева&raquo;\u003C/h2\u003E\r\n\u003Cp\u003EУ нашому каталозі представлені філософські й біографічні твори, підручники й самовчителі, паперові й електронні книжки. Ви можете замовити їх з доставкою в будь-яке місто України &mdash; в тому числі в Київ, Львів, Тернопіль, Хмельницький та інші. Є питання щодо асортименту, цін і наявності товарів? Поставте їх нашим спеціалістам, зв&rsquo;язавшись з ними за телефоном 0(800) 501 508.\u003C/p\u003E"
        }
      ],
      "age_categories": [
        {
          "id": 8,
          "name": "Дорослі"
        }
      ],
      "clone": null,
      "statuses": [
        {
          "id": 13,
          "name": "Є в наявності",
          "label": "available",
          "slug": "available",
          "payment_comment": null,
          "show_payment": false,
          "delivery_comment": null,
          "show_delivery": false,
          "date_from": null,
          "date_to": null
        }
      ],
      "image_product": {
        "id": 55865,
        "name": "946935.800x800.jpg",
        "url": "2024-06-14/946935.800x800.jpg"
      },
      "images_web": [
        {
          "id": 55866,
          "name": "державець 1.jpg",
          "url": "2024-06-14/державець 1.jpg"
        },
        {
          "id": 55867,
          "name": "державець 2.jpg",
          "url": "2024-06-14/державець 2.jpg"
        },
        {
          "id": 55868,
          "name": "державець 3.jpg",
          "url": "2024-06-14/державець 3.jpg"
        },
        {
          "id": 55869,
          "name": "державець 4.jpg",
          "url": "2024-06-14/державець 4.jpg"
        },
        {
          "id": 55870,
          "name": "державець 5.jpg",
          "url": "2024-06-14/державець 5.jpg"
        },
        {
          "id": 55871,
          "name": "державець 6.jpg",
          "url": "2024-06-14/державець 6.jpg"
        },
        {
          "id": 55872,
          "name": "державець 7.jpg",
          "url": "2024-06-14/державець 7.jpg"
        },
        {
          "id": 55873,
          "name": "державець 8.jpg",
          "url": "2024-06-14/державець 8.jpg"
        },
        {
          "id": 55874,
          "name": "державець 9.jpg",
          "url": "2024-06-14/державець 9.jpg"
        },
        {
          "id": 55875,
          "name": "державець 10.jpg",
          "url": "2024-06-14/державець 10.jpg"
        },
        {
          "id": 55876,
          "name": "державець 11.jpg",
          "url": "2024-06-14/державець 11.jpg"
        },
        {
          "id": 55877,
          "name": "державець 12.jpg",
          "url": "2024-06-14/державець 12.jpg"
        },
        {
          "id": 55878,
          "name": "державець 13.jpg",
          "url": "2024-06-14/державець 13.jpg"
        },
        {
          "id": 55879,
          "name": "державець 14.jpg",
          "url": "2024-06-14/державець 14.jpg"
        },
        {
          "id": 55880,
          "name": "державець 15.jpg",
          "url": "2024-06-14/державець 15.jpg"
        }
      ],
      "images_mob": [
        {
          "id": 55882,
          "name": "державець 1.jpg",
          "url": "2024-06-14/державець 1.jpg"
        },
        {
          "id": 55881,
          "name": "державець 2.jpg",
          "url": "2024-06-14/державець 2.jpg"
        },
        {
          "id": 55883,
          "name": "державець 3.jpg",
          "url": "2024-06-14/державець 3.jpg"
        },
        {
          "id": 55884,
          "name": "державець 4.jpg",
          "url": "2024-06-14/державець 4.jpg"
        },
        {
          "id": 55885,
          "name": "державець 5.jpg",
          "url": "2024-06-14/державець 5.jpg"
        },
        {
          "id": 55886,
          "name": "державець 6.jpg",
          "url": "2024-06-14/державець 6.jpg"
        },
        {
          "id": 55887,
          "name": "державець 7.jpg",
          "url": "2024-06-14/державець 7.jpg"
        },
        {
          "id": 55888,
          "name": "державець 8.jpg",
          "url": "2024-06-14/державець 8.jpg"
        },
        {
          "id": 55889,
          "name": "державець 9.jpg",
          "url": "2024-06-14/державець 9.jpg"
        },
        {
          "id": 55890,
          "name": "державець 10.jpg",
          "url": "2024-06-14/державець 10.jpg"
        },
        {
          "id": 55891,
          "name": "державець 11.jpg",
          "url": "2024-06-14/державець 11.jpg"
        },
        {
          "id": 55892,
          "name": "державець 12.jpg",
          "url": "2024-06-14/державець 12.jpg"
        },
        {
          "id": 55893,
          "name": "державець 13.jpg",
          "url": "2024-06-14/державець 13.jpg"
        },
        {
          "id": 55894,
          "name": "державець 14.jpg",
          "url": "2024-06-14/державець 14.jpg"
        },
        {
          "id": 55895,
          "name": "державець 15.jpg",
          "url": "2024-06-14/державець 15.jpg"
        }
      ],
      "similar": [],
      "together": [
        {
          "id": 321,
          "name": "Свято, яке завжди з тобою",
          "slug": "svyato-yake-zavzhdy-z-toboyu",
          "qty": 43,
          "infinity": false,
          "price": 450,
          "price_old": 450,
          "books_by_book": 45,
          "has_action_price": false,
          "type": "book",
          "active": true,
          "sub_type": "product",
          "size_category": null,
          "youtube_link": null,
          "has_edition": true,
          "edition_id": 95,
          "edition_name": "Видавництво Старого Лева",
          "authors": [
            {
              "id": 121,
              "name": "Ернест Гемінґвей",
              "slug": "ernest-gemingvei",
              "types": [
                {
                  "id": 1,
                  "label": "author",
                  "name": "Автор"
                }
              ]
            }
          ],
          "statuses": [
            {
              "id": 13,
              "name": "Є в наявності",
              "label": "available",
              "date_from": null,
              "date_to": null
            }
          ],
          "image": {
            "id": 25662,
            "name": "9786176797821-1.png",
            "url": "2021-10-15/yvott41nqciry9qdxpnk.png"
          },
          "category": {
            "id": 4,
            "name": "Паперові книги",
            "slug": "paperovi-knyzhky",
            "description": null,
            "seo": {
              "title": null,
              "h1_text": null,
              "description": null
            }
          },
          "sub_categories": [
            {
              "id": 152,
              "name": "Класична проза",
              "slug": "klasycna-proza",
              "fullSlug": null,
              "description": "\u003Ch2\u003EКласична проза - %section%\u003C/h2\u003E\r\n\u003Cp\u003EКласичні твори в прозі завжди посідали особливе місце. Адже, класична література &mdash; це світ ритмічної класичної прози, чарівних та проникливих оповідань та глибоких романів, які вважають зразками для світової та української літератури. Читаючи твори класичної літератури, які просякнуті духом тієї чи іншої епохи, можна поринути у минуле та насолодитись досконалим стилем та словоформою, яку автори використовували для написання творів.\u003C/p\u003E\r\n\u003Ch2\u003EКласична література українською мовою\u003C/h2\u003E\r\n\u003Cp\u003EКласична українська література та видатні класичні книги світових авторів, формують особистість читача та важливі життєві цінності, адже література класична це:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eуніверсальна база знань, які допомагають зрозуміти сучасних авторів;\u003C/li\u003E\r\n\u003Cli\u003Eмайстерно опрацьовані тексти, які сприяють розвитку критичного мислення та почуття смаку;\u003C/li\u003E\r\n\u003Cli\u003Eспадщина, яка відображає історичні, культурні та соціальні особливості різних часів;\u003C/li\u003E\r\n\u003Cli\u003Eтвори які допомагають знайти відповіді на важливі питання життя та смерті, кохання та зради, справедливості та самовизначення.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EКласичні твори в прозі, які варто прочитати\u003C/h2\u003E\r\n\u003Cp\u003EСеред великого різноманіття книг української класичної прози, які варто прочитати є твори відомих українських та закордонних класиків є:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eісторія кохання &laquo;Тіні забутих предків&raquo; Михайла Коцюбинського;\u003C/li\u003E\r\n\u003Cli\u003Eроман &laquo;Місто&raquo; Валер&rsquo;яна Підмогильного;\u003C/li\u003E\r\n\u003Cli\u003Eроман &laquo;Сад Гетсиманський&raquo; Івана Багряного;\u003C/li\u003E\r\n\u003Cli\u003Eзбірка віршів &laquo;Палімпсести&raquo; Василя Стуса;\u003C/li\u003E\r\n\u003Cli\u003Eдобірка оповідань та повістей &laquo;Емансипантка&raquo; Марко Вовчок;\u003C/li\u003E\r\n\u003Cli\u003Eшедевр української літератури &laquo;Катерина&raquo; Тараса Шевченка;\u003C/li\u003E\r\n\u003Cli\u003Eзбірка оповідань &laquo;Забагато щастя&raquo; Еліс Манро\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EКупити класичні твори в прозі категорії \"%section%\" в інтернет-магазині Видавництва Старого Лева\u003C/h2\u003E\r\n\u003Cp\u003EЯкщо ви шукаєте де купити класичні твори в прозі - в інтернет-магазині Видавництво Старого Лева представлений найкращий асортимент української класичної та світової літератури. А зареєструвавшись на нашому сайті ви автоматично станете частинкою спільноти Старого Лева&nbsp; та маєте можливість:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eкупити класичну прозу за спеціальною ціною, адже ми пропонуємо різноманітні акції, промокоди та знижки;\u003C/li\u003E\r\n\u003Cli\u003Eотримати кешбек бонусами купуючи класичну літературу та твори в прозі з доставкою;\u003C/li\u003E\r\n\u003Cli\u003Eотримувати сповіщення про книжкові новинки, акції та знижки від Видавництва;\u003C/li\u003E\r\n\u003Cli\u003Eздійснити оплату у будь-який зручний для вас спосіб: карткою на нашому сайті, готівкою при отриманні на відділенні &laquo;Нової пошти&raquo;.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Cp\u003EОбрану книгу ви можете забрати у книгарнях Старого Лева, які є не лише у Львові, а й у Києві, Одесі та Дніпрі. А також оформити послугу &laquo;Кур'єрська доставка&raquo; чи замовити книги з доставкою по Україні на відділення &laquo;Нової пошти&raquo;, а також доставку за кордон.&nbsp;\u003C/p\u003E"
            },
            {
              "id": 177,
              "name": "Серія Гемінґвей",
              "slug": "seriya-gemingvey",
              "fullSlug": null,
              "description": null
            }
          ],
          "products_qty": [],
          "files_ebook": [],
          "entity": null,
          "attributes": [],
          "is_subscribe_set": false,
          "sets": [
            {
              "id": 1755,
              "name": "Комплект книжок Ернеста Гемінґвея",
              "slug": "komplekt-knizok-ernesta-gemingveya",
              "isbn": null,
              "year": null,
              "qty_pages": null,
              "price": 4550,
              "description": "\u003Cp\u003E\u003Cstrong\u003EУвага! Книга &laquo;Мати і не мати&raquo; відсутня!\u003C/strong\u003E\u003C/p\u003E\r\n\u003Cp\u003EВперше з часів Незалежності&nbsp; твори письменника, лауреата Нобелівської та Пулітцерівської премій Ернеста Гемінґвея, вийшли в Україні українською мовою.\u003C/p\u003E\r\n\u003Cp\u003EКниги, які входять до комплекту:\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/staryy-i-more\" target=\"_blank\" rel=\"noopener\"\u003EСтарий і море\u003C/a\u003E&raquo;\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/fiyesta-i-sonce-shodyt\" target=\"_blank\" rel=\"noopener\"\u003EФієста. І сонце сходить\u003C/a\u003E&raquo;\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/choloviky-bez-zhinok\" target=\"_blank\" rel=\"noopener\"\u003EЧоловіки без жінок\u003C/a\u003E&raquo;\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/po-komu-podzvin\" target=\"_blank\" rel=\"noopener\"\u003EПо кому подзвін\u003C/a\u003E&raquo;\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/proshchavay-zbroye\" target=\"_blank\" rel=\"noopener\"\u003EПрощавай, зброє\u003C/a\u003E&raquo;\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/peremozhcyu-ne-distayetsya-nichogo\" target=\"_blank\" rel=\"noopener\"\u003EПереможцю не дістається нічого\u003C/a\u003E&raquo;\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/maty-i-ne-maty\" target=\"_blank\" rel=\"noopener\"\u003EМати і не мати\u003C/a\u003E&raquo;,\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/ostrovy-pomizh-techiy\" target=\"_blank\" rel=\"noopener\"\u003EОстрови поміж течій\u003C/a\u003E&raquo;\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/svyato-yake-zavzhdy-z-toboyu\" target=\"_blank\" rel=\"noopener\"\u003EСвято, яке завжди з тобою\u003C/a\u003E&raquo;\u003C/p\u003E\r\n\u003Cp\u003E- &laquo;\u003Ca href=\"https://starylev.com.ua/snigi-kilimandzaro\" target=\"_blank\" rel=\"noopener\"\u003EСніги Кіліманджаро\u003C/a\u003E&raquo;\u003C/p\u003E",
              "created_at": "2021-10-18T05:52:18.000000Z",
              "updated_at": "12-08-2025 21:01:48",
              "deleted_at": null,
              "weight": 3478,
              "manually_added": true,
              "product_clone_id": null,
              "type": "book",
              "price_expected": null,
              "qty": 96,
              "bar_code": null,
              "active": true,
              "category_id": 3,
              "articul": null,
              "spl_product_code": null,
              "length": null,
              "width": null,
              "youtube_link": null,
              "sub_type": "set",
              "main": true,
              "infinity": false,
              "sync_slug": false,
              "circulation_is_over": false,
              "id_old": null,
              "order_default_in": 861,
              "order_default_out": 861,
              "order_price_asc_in": 3199,
              "order_price_asc_out": 3198,
              "order_price_desc_in": 3198,
              "order_price_desc_out": 3198,
              "free_delivery": false,
              "free_delivery_type_id": null,
              "payment_link": null,
              "price_fixed": null,
              "is_own_brand": true,
              "ebook_formats": null,
              "rating": 0,
              "edition_id": 95,
              "is_subscribe_set": false,
              "can_compensate_cashback": false,
              "can_buy_at_cashback": false,
              "e_book_program": false,
              "start_timer": null,
              "end_timer": null,
              "active_counter_time": false,
              "is_home_new": false,
              "is_home_book_top_sales": false,
              "is_home_ebook_top_sales": false,
              "is_home_souvenir": false,
              "image_catalog": {
                "id": 27417,
                "model_type": "App\\Models\\Product\\Product",
                "model_id": 1755,
                "uuid": null,
                "collection_name": "image_catalog",
                "name_old": "https://res.cloudinary.com/dj2z3mjiy/image/upload/v1634546616/2021-10-18/m2ebqk6x7c2ovcprcocn.png",
                "file_name": "k3.3.png",
                "mime_type": null,
                "disk": "public",
                "conversions_disk": "public",
                "size": 2493339,
                "manipulations": [],
                "custom_properties": [],
                "generated_conversions": [],
                "responsive_images": [],
                "order_column": 0,
                "created_at": null,
                "updated_at": null,
                "migrated": true,
                "name": "2021-10-18/m2ebqk6x7c2ovcprcocn.png",
                "original_url": "https://api.starylev.com.ua/storage/27417/k3.3.png",
                "preview_url": ""
              },
              "image_product": {
                "id": 27418,
                "model_type": "App\\Models\\Product\\Product",
                "model_id": 1755,
                "uuid": null,
                "collection_name": "image_product",
                "name_old": "https://res.cloudinary.com/dj2z3mjiy/image/upload/v1634546619/2021-10-18/zuyqx1xnbfp6knppgq3u.png",
                "file_name": "k3.3.png",
                "mime_type": null,
                "disk": "public",
                "conversions_disk": "public",
                "size": 2493339,
                "manipulations": [],
                "custom_properties": [],
                "generated_conversions": [],
                "responsive_images": [],
                "order_column": 0,
                "created_at": null,
                "updated_at": null,
                "migrated": true,
                "name": "2021-10-18/zuyqx1xnbfp6knppgq3u.png",
                "original_url": "https://api.starylev.com.ua/storage/27418/k3.3.png",
                "preview_url": ""
              },
              "images_web": [],
              "images_mob": [],
              "pivot": {
                "product_id": 321,
                "set_id": 1755
              },
              "media": [
                {
                  "id": 27417,
                  "model_type": "App\\Models\\Product\\Product",
                  "model_id": 1755,
                  "uuid": null,
                  "collection_name": "image_catalog",
                  "name_old": "https://res.cloudinary.com/dj2z3mjiy/image/upload/v1634546616/2021-10-18/m2ebqk6x7c2ovcprcocn.png",
                  "file_name": "k3.3.png",
                  "mime_type": null,
                  "disk": "public",
                  "conversions_disk": "public",
                  "size": 2493339,
                  "manipulations": [],
                  "custom_properties": [],
                  "generated_conversions": [],
                  "responsive_images": [],
                  "order_column": 0,
                  "created_at": null,
                  "updated_at": null,
                  "migrated": true,
                  "name": "2021-10-18/m2ebqk6x7c2ovcprcocn.png",
                  "original_url": "https://api.starylev.com.ua/storage/27417/k3.3.png",
                  "preview_url": ""
                },
                {
                  "id": 27418,
                  "model_type": "App\\Models\\Product\\Product",
                  "model_id": 1755,
                  "uuid": null,
                  "collection_name": "image_product",
                  "name_old": "https://res.cloudinary.com/dj2z3mjiy/image/upload/v1634546619/2021-10-18/zuyqx1xnbfp6knppgq3u.png",
                  "file_name": "k3.3.png",
                  "mime_type": null,
                  "disk": "public",
                  "conversions_disk": "public",
                  "size": 2493339,
                  "manipulations": [],
                  "custom_properties": [],
                  "generated_conversions": [],
                  "responsive_images": [],
                  "order_column": 0,
                  "created_at": null,
                  "updated_at": null,
                  "migrated": true,
                  "name": "2021-10-18/zuyqx1xnbfp6knppgq3u.png",
                  "original_url": "https://api.starylev.com.ua/storage/27418/k3.3.png",
                  "preview_url": ""
                }
              ]
            }
          ],
          "sets_count": 1,
          "is_set_disabled": true,
          "can_compensate_cashback": true,
          "is_e_book_program": true,
          "expected": false,
          "outOfStock": false,
          "isProjectClose": false,
          "isPreSale": false,
          "isPreSaleDate": true,
          "productTypeName": "Паперова"
        },
        {
          "id": 411,
          "name": "Таємниця старого Лами",
          "slug": "tayemnycya-starogo-lamy",
          "qty": 63,
          "infinity": false,
          "price": 250,
          "price_old": 250,
          "books_by_book": 25,
          "has_action_price": false,
          "type": "book",
          "active": true,
          "sub_type": "product",
          "size_category": null,
          "youtube_link": null,
          "has_edition": true,
          "edition_id": 95,
          "edition_name": "Видавництво Старого Лева",
          "authors": [
            {
              "id": 44,
              "name": "Дорж Бату",
              "slug": "dorz-batu",
              "types": [
                {
                  "id": 1,
                  "label": "author",
                  "name": "Автор"
                }
              ]
            }
          ],
          "statuses": [
            {
              "id": 13,
              "name": "Є в наявності",
              "label": "available",
              "date_from": null,
              "date_to": null
            }
          ],
          "image": {
            "id": 11747,
            "name": "povl1lnr5drru7qtlixz.png",
            "url": "2021-07-22/povl1lnr5drru7qtlixz.png"
          },
          "category": {
            "id": 4,
            "name": "Паперові книги",
            "slug": "paperovi-knyzhky",
            "description": null,
            "seo": {
              "title": null,
              "h1_text": null,
              "description": null
            }
          },
          "sub_categories": [
            {
              "id": 152,
              "name": "Класична проза",
              "slug": "klasycna-proza",
              "fullSlug": null,
              "description": "\u003Ch2\u003EКласична проза - %section%\u003C/h2\u003E\r\n\u003Cp\u003EКласичні твори в прозі завжди посідали особливе місце. Адже, класична література &mdash; це світ ритмічної класичної прози, чарівних та проникливих оповідань та глибоких романів, які вважають зразками для світової та української літератури. Читаючи твори класичної літератури, які просякнуті духом тієї чи іншої епохи, можна поринути у минуле та насолодитись досконалим стилем та словоформою, яку автори використовували для написання творів.\u003C/p\u003E\r\n\u003Ch2\u003EКласична література українською мовою\u003C/h2\u003E\r\n\u003Cp\u003EКласична українська література та видатні класичні книги світових авторів, формують особистість читача та важливі життєві цінності, адже література класична це:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eуніверсальна база знань, які допомагають зрозуміти сучасних авторів;\u003C/li\u003E\r\n\u003Cli\u003Eмайстерно опрацьовані тексти, які сприяють розвитку критичного мислення та почуття смаку;\u003C/li\u003E\r\n\u003Cli\u003Eспадщина, яка відображає історичні, культурні та соціальні особливості різних часів;\u003C/li\u003E\r\n\u003Cli\u003Eтвори які допомагають знайти відповіді на важливі питання життя та смерті, кохання та зради, справедливості та самовизначення.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EКласичні твори в прозі, які варто прочитати\u003C/h2\u003E\r\n\u003Cp\u003EСеред великого різноманіття книг української класичної прози, які варто прочитати є твори відомих українських та закордонних класиків є:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eісторія кохання &laquo;Тіні забутих предків&raquo; Михайла Коцюбинського;\u003C/li\u003E\r\n\u003Cli\u003Eроман &laquo;Місто&raquo; Валер&rsquo;яна Підмогильного;\u003C/li\u003E\r\n\u003Cli\u003Eроман &laquo;Сад Гетсиманський&raquo; Івана Багряного;\u003C/li\u003E\r\n\u003Cli\u003Eзбірка віршів &laquo;Палімпсести&raquo; Василя Стуса;\u003C/li\u003E\r\n\u003Cli\u003Eдобірка оповідань та повістей &laquo;Емансипантка&raquo; Марко Вовчок;\u003C/li\u003E\r\n\u003Cli\u003Eшедевр української літератури &laquo;Катерина&raquo; Тараса Шевченка;\u003C/li\u003E\r\n\u003Cli\u003Eзбірка оповідань &laquo;Забагато щастя&raquo; Еліс Манро\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EКупити класичні твори в прозі категорії \"%section%\" в інтернет-магазині Видавництва Старого Лева\u003C/h2\u003E\r\n\u003Cp\u003EЯкщо ви шукаєте де купити класичні твори в прозі - в інтернет-магазині Видавництво Старого Лева представлений найкращий асортимент української класичної та світової літератури. А зареєструвавшись на нашому сайті ви автоматично станете частинкою спільноти Старого Лева&nbsp; та маєте можливість:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eкупити класичну прозу за спеціальною ціною, адже ми пропонуємо різноманітні акції, промокоди та знижки;\u003C/li\u003E\r\n\u003Cli\u003Eотримати кешбек бонусами купуючи класичну літературу та твори в прозі з доставкою;\u003C/li\u003E\r\n\u003Cli\u003Eотримувати сповіщення про книжкові новинки, акції та знижки від Видавництва;\u003C/li\u003E\r\n\u003Cli\u003Eздійснити оплату у будь-який зручний для вас спосіб: карткою на нашому сайті, готівкою при отриманні на відділенні &laquo;Нової пошти&raquo;.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Cp\u003EОбрану книгу ви можете забрати у книгарнях Старого Лева, які є не лише у Львові, а й у Києві, Одесі та Дніпрі. А також оформити послугу &laquo;Кур'єрська доставка&raquo; чи замовити книги з доставкою по Україні на відділення &laquo;Нової пошти&raquo;, а також доставку за кордон.&nbsp;\u003C/p\u003E"
            },
            {
              "id": 152,
              "name": "Класична проза",
              "slug": "klasycna-proza",
              "fullSlug": null,
              "description": "\u003Ch2\u003EКласична проза - %section%\u003C/h2\u003E\r\n\u003Cp\u003EКласичні твори в прозі завжди посідали особливе місце. Адже, класична література &mdash; це світ ритмічної класичної прози, чарівних та проникливих оповідань та глибоких романів, які вважають зразками для світової та української літератури. Читаючи твори класичної літератури, які просякнуті духом тієї чи іншої епохи, можна поринути у минуле та насолодитись досконалим стилем та словоформою, яку автори використовували для написання творів.\u003C/p\u003E\r\n\u003Ch2\u003EКласична література українською мовою\u003C/h2\u003E\r\n\u003Cp\u003EКласична українська література та видатні класичні книги світових авторів, формують особистість читача та важливі життєві цінності, адже література класична це:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eуніверсальна база знань, які допомагають зрозуміти сучасних авторів;\u003C/li\u003E\r\n\u003Cli\u003Eмайстерно опрацьовані тексти, які сприяють розвитку критичного мислення та почуття смаку;\u003C/li\u003E\r\n\u003Cli\u003Eспадщина, яка відображає історичні, культурні та соціальні особливості різних часів;\u003C/li\u003E\r\n\u003Cli\u003Eтвори які допомагають знайти відповіді на важливі питання життя та смерті, кохання та зради, справедливості та самовизначення.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EКласичні твори в прозі, які варто прочитати\u003C/h2\u003E\r\n\u003Cp\u003EСеред великого різноманіття книг української класичної прози, які варто прочитати є твори відомих українських та закордонних класиків є:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eісторія кохання &laquo;Тіні забутих предків&raquo; Михайла Коцюбинського;\u003C/li\u003E\r\n\u003Cli\u003Eроман &laquo;Місто&raquo; Валер&rsquo;яна Підмогильного;\u003C/li\u003E\r\n\u003Cli\u003Eроман &laquo;Сад Гетсиманський&raquo; Івана Багряного;\u003C/li\u003E\r\n\u003Cli\u003Eзбірка віршів &laquo;Палімпсести&raquo; Василя Стуса;\u003C/li\u003E\r\n\u003Cli\u003Eдобірка оповідань та повістей &laquo;Емансипантка&raquo; Марко Вовчок;\u003C/li\u003E\r\n\u003Cli\u003Eшедевр української літератури &laquo;Катерина&raquo; Тараса Шевченка;\u003C/li\u003E\r\n\u003Cli\u003Eзбірка оповідань &laquo;Забагато щастя&raquo; Еліс Манро\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EКупити класичні твори в прозі категорії \"%section%\" в інтернет-магазині Видавництва Старого Лева\u003C/h2\u003E\r\n\u003Cp\u003EЯкщо ви шукаєте де купити класичні твори в прозі - в інтернет-магазині Видавництво Старого Лева представлений найкращий асортимент української класичної та світової літератури. А зареєструвавшись на нашому сайті ви автоматично станете частинкою спільноти Старого Лева&nbsp; та маєте можливість:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003Eкупити класичну прозу за спеціальною ціною, адже ми пропонуємо різноманітні акції, промокоди та знижки;\u003C/li\u003E\r\n\u003Cli\u003Eотримати кешбек бонусами купуючи класичну літературу та твори в прозі з доставкою;\u003C/li\u003E\r\n\u003Cli\u003Eотримувати сповіщення про книжкові новинки, акції та знижки від Видавництва;\u003C/li\u003E\r\n\u003Cli\u003Eздійснити оплату у будь-який зручний для вас спосіб: карткою на нашому сайті, готівкою при отриманні на відділенні &laquo;Нової пошти&raquo;.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Cp\u003EОбрану книгу ви можете забрати у книгарнях Старого Лева, які є не лише у Львові, а й у Києві, Одесі та Дніпрі. А також оформити послугу &laquo;Кур'єрська доставка&raquo; чи замовити книги з доставкою по Україні на відділення &laquo;Нової пошти&raquo;, а також доставку за кордон.&nbsp;\u003C/p\u003E"
            }
          ],
          "products_qty": [],
          "files_ebook": [],
          "entity": null,
          "attributes": [],
          "is_subscribe_set": false,
          "sets": [],
          "sets_count": 0,
          "is_set_disabled": true,
          "can_compensate_cashback": true,
          "is_e_book_program": true,
          "expected": false,
          "outOfStock": false,
          "isProjectClose": false,
          "isPreSale": false,
          "isPreSaleDate": true,
          "productTypeName": "Паперова"
        },
        {
          "id": 1455,
          "name": "Мистецтво війни",
          "slug": "mystectvo-viyny",
          "qty": 65,
          "infinity": true,
          "price": 250,
          "price_old": 250,
          "books_by_book": 25,
          "has_action_price": false,
          "type": "book",
          "active": true,
          "sub_type": "product",
          "size_category": null,
          "youtube_link": null,
          "has_edition": true,
          "edition_id": 95,
          "edition_name": "Видавництво Старого Лева",
          "authors": [
            {
              "id": 460,
              "name": "Сунь-дзи",
              "slug": "sun-dzi",
              "types": [
                {
                  "id": 1,
                  "label": "author",
                  "name": "Автор"
                }
              ]
            }
          ],
          "statuses": [
            {
              "id": 13,
              "name": "Є в наявності",
              "label": "available",
              "date_from": null,
              "date_to": null
            },
            {
              "id": 8,
              "name": "Лише поштою",
              "label": "only_by_post",
              "date_from": null,
              "date_to": null
            }
          ],
          "image": {
            "id": 21195,
            "name": "ujblz5hlrusglhnaj86i.png",
            "url": "2021-10-09/ujblz5hlrusglhnaj86i.png"
          },
          "category": {
            "id": 4,
            "name": "Паперові книги",
            "slug": "paperovi-knyzhky",
            "description": null,
            "seo": {
              "title": null,
              "h1_text": null,
              "description": null
            }
          },
          "sub_categories": [
            {
              "id": 160,
              "name": "Мотивація і саморозвиток",
              "slug": "motyvaciya-i-samorozvytok",
              "fullSlug": null,
              "description": "\u003Ch2\u003EКниги для саморозвитку та мотивації\u003C/h2\u003E\r\n\u003Cp\u003EКниги про саморозвиток вчать нас тому, що всередині кожної людини є безмежний потенціал. Щоб вивільнити його, необхідно лише підібрати відповідний ключик &mdash; знайти підхід до самого себе. Мотиваційні книги українською допоможуть вам змінити життя &mdash; знайти нові цілі, впорядкувати свій розклад, почати вчитися чогось нового та досягти успіху.&nbsp;\u003C/p\u003E\r\n\u003Ch2\u003EТоп книг для саморозвитку та мотивації, які варто прочитати\u003C/h2\u003E\r\n\u003Cp\u003EУ нашому інтернет-магазині ви можете купити книжки українських і закордонних авторів, мовою оригіналу та в перекладі. Серед них слід особливо виділити наступні книги для саморозвитку та мотивації:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003EРаян Голідей. &laquo;Відвага кличе. Доля допомагає хоробрим&raquo;. Одна з найкращих книг для саморозвитку, яка зробить вас справжнім лідером. Її головна ідея полягає в тому, що великі особистості насправді є звичайними людьми, які перемогли власний страх. Як саме? Читайте в цій мотиваційній книзі.&nbsp;\u003C/li\u003E\r\n\u003Cli\u003EБодо Шефер. &laquo;Закони переможців. Як здійснити свої мрії&raquo;. Ідеальна книга для саморозвитку чоловіків, які прагнуть стати видатними бізнесменами та створити свою спадщину. Її автор сам пройшов весь цей непростий шлях &mdash; збанкрутувавши у 26 років, до 30 він зміг побудувати успішну компанію.&nbsp;\u003C/li\u003E\r\n\u003Cli\u003EДжейн Бурка, Ленора Юен &laquo;Прокрастинація&raquo;. Якщо ви шукаєте легкі книги для саморозвитку на українській мові, вам варто прочитати це видання. Його автори досліджують, чому саме людям хочеться відкладати важливі справи на потім, і як з цим можна боротися. Це цікава книга для саморозвитку жінки й чоловіка, студента й фінансиста, продавця чи фермера. Вона написана легкою жвавою мовою, з гумором і без складних термінів.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EМотиваційні книги: поради вибору\u003C/h2\u003E\r\n\u003Cp\u003EХоча література по саморозвитку зібрана в одну категорію на нашому сайті, насправді вона може бути дуже різноманітною. Щоб правильно вибрати її, варто поставити просте, але дуже важливе питання &mdash; чого саме ви хочете досягти?&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EЯкщо ваша ціль &mdash; гроші, влада й визнання, вам потрібні книги по саморозвитку, які розглядають поняття лідерства та методи впливу на інших людей. Вони допоможуть побудувати власний бізнес чи успішну кар&rsquo;єру в перспективній галузі економіки.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EАле більшість людей все ж ставить менш амбітні цілі &mdash; вони просто хочуть бути щасливими й мати здорові стосунки. У цьому допоможуть книги для розвитку особистості. Вони дуже схожі на психологічну літературу, але дають більш практичні поради, зрозумілі для кожного. Тому ці видання завжди входять у топ книг для саморозвитку й стають справжніми бестселерами.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EЩе одна популярна ціль &mdash; стати кращою версією себе без кардинальних змін власної особистості. У такому випадку варто купити книги з саморозвитку, які досліджують певні людські риси, типові звички чи проблеми. Зазвичай така література є легким читанням. Мотивуючі книги впливають саме на підсвідомість &mdash; вони не вимагають від вас певних активних дій.&nbsp;\u003C/p\u003E\r\n\u003Ch2\u003EКупити книги для саморозвитку українською мовою в інтернет-магазині Видавництва Старого Лева\u003C/h2\u003E\r\n\u003Cp\u003EВи можете замовити книги для саморозвитку в інтернет-магазині нашого видавництва, відібравши їх за категорією, автором, ціною та іншими параметрами. Ми пропонуємо книги для саморозвитку жінки чи чоловіка, філософську психологічну літературу та розбір конкретних випадків з життя, поради для бізнесменів і людей у стосунках. Ви можете замовити книги про саморозвиток і мотивацію з доставкою по всій території України &mdash; в тому числі в Києві, Львові, Івано-Франківську, Одесі та інших містах. До оплати приймаються онлайн-перекази на сайті й післяплата при отриманні.&nbsp;\u003C/p\u003E"
            }
          ],
          "products_qty": [],
          "files_ebook": [],
          "entity": null,
          "attributes": [],
          "is_subscribe_set": false,
          "sets": [],
          "sets_count": 0,
          "is_set_disabled": true,
          "can_compensate_cashback": true,
          "is_e_book_program": true,
          "expected": false,
          "outOfStock": false,
          "isProjectClose": false,
          "isPreSale": false,
          "isPreSaleDate": true,
          "productTypeName": "Паперова"
        },
        {
          "id": 1665,
          "name": "Wine Folly. Усе, що треба знати про вино",
          "slug": "wine-folly-use-shcho-treba-znaty-pro-vyno",
          "qty": 20,
          "infinity": false,
          "price": 1200,
          "price_old": 1200,
          "books_by_book": 120,
          "has_action_price": false,
          "type": "book",
          "active": true,
          "sub_type": "product",
          "size_category": null,
          "youtube_link": null,
          "has_edition": true,
          "edition_id": 95,
          "edition_name": "Видавництво Старого Лева",
          "authors": [
            {
              "id": 101,
              "name": "Джастін Геммек",
              "slug": "dzastin-gemmek",
              "types": [
                {
                  "id": 1,
                  "label": "author",
                  "name": "Автор"
                }
              ]
            },
            {
              "id": 378,
              "name": "Мадлен Пакетт",
              "slug": "madlen-pakett",
              "types": [
                {
                  "id": 1,
                  "label": "author",
                  "name": "Автор"
                }
              ]
            }
          ],
          "statuses": [
            {
              "id": 13,
              "name": "Є в наявності",
              "label": "available",
              "date_from": null,
              "date_to": null
            },
            {
              "id": 8,
              "name": "Лише поштою",
              "label": "only_by_post",
              "date_from": null,
              "date_to": null
            }
          ],
          "image": {
            "id": 11904,
            "name": "dsqfoeijb4psr68rqufe.png",
            "url": "2021-08-19/dsqfoeijb4psr68rqufe.png"
          },
          "category": {
            "id": 4,
            "name": "Паперові книги",
            "slug": "paperovi-knyzhky",
            "description": null,
            "seo": {
              "title": null,
              "h1_text": null,
              "description": null
            }
          },
          "sub_categories": [
            {
              "id": 29,
              "name": "Кулінарія",
              "slug": "kulinariya",
              "fullSlug": null,
              "description": "\u003Ch2\u003EКулінарні книги &mdash; рецепти\u003C/h2\u003E\r\n\u003Cp\u003EВсі ми любимо смачну їжу. Тому кулінарні книги споконвіку мають великий попит. Їх купують для себе й на подарунок, для щоденного використання та для поповнення колекції. Книги по кулінарії вчать нас, як готувати випічку, десерти й екзотичні страви, як подавати до столу напої, як створювати оригінальні коктейлі з кави та шляхетного алкоголю. Хочете, щоб з вашої домашньої кухні виходили страви, гідні ресторану? Тоді погляньте на популярні книги рецептів!\u003C/p\u003E\r\n\u003Ch2\u003EЯкі критерії вибору кулінарної книги варто враховувати?\u003C/h2\u003E\r\n\u003Cp\u003EНайголовніше &mdash; потрібний рівень навичок. Найпопулярнішими є книги з кулінарії &laquo;для чайників&raquo;, адже найбільша підтримка потрібна людині саме на початковому етапі. Але й досвідчені кухарі часто користуються підручниками чи кулінарними словниками, беручи з них секрети приготування цікавих страв.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EЩоб правильно купити кулінарну книгу, обов&rsquo;язково зверніть увагу на її тематику. Найпростіший варіант &mdash; універсальні збірники рецептів на всі випадки життя, від повсякденного обіду до приймання гостей. Наступний крок &mdash; книги кулінарні, присвячені цікавим рецептам національної кухні чи стравам з певних продуктів. Зазвичай вони мають декілька розділів з різними темами. А на вищому рівні знаходяться книги з кулінарії, які розповідають про тонкощі й секрети професії кухаря.&nbsp;\u003C/p\u003E\r\n\u003Ch2\u003EПопулярні кулінарні книги з найкращими рецептами\u003C/h2\u003E\r\n\u003Cp\u003EЗвичайно, які ж книги про українські страви без Євгена Клопотенка? Завдяки своїй креативності він давно перестав бути звичайним кухарем, ставши шоуменом, блогером, мандрівником, і, звичайно, письменником. Його книги з рецептами й кулінарними секретами часто замовляють не тільки для готування їжі, а й для культурного збагачення чи цікавого читання.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EЩе один популярний автор &mdash; Джеймі Олівер. Ви можете купити кулінарні книги його авторства, щоб зосередитися саме на процесі готування. Він дуже докладно пояснює сутність кожного етапу рецептів, розповідає про окремі спеції та суміші прянощів, а також ділиться власною кулінарною експертизою.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EОднією з кращих книг рецептів також варто назвати працю Ігоря Лильо &laquo;Шляхетна кухня Галичини&raquo;. У ній він розповідає про кулінарію української аристократії середини 19&ndash;початку 20 сторіччя. Списки інгредієнтів і замітки щодо часу приготування розбавлені розповідями про застільні бесіди, шляхетні манери та способи сервірування столів.&nbsp;\u003C/p\u003E\r\n\u003Ch2\u003EКниги рецептів для приготування десертів\u003C/h2\u003E\r\n\u003Cp\u003EСписок найкращих кулінарних книг був би неповним без рубрики солодощів. Зазвичай ці страви потребують більшої майстерності, а тому в початківців з ними бувають труднощі. На допомогу приходять книги кулінарних рецептів, які розповідають про ідеальне співвідношення інгредієнтів, способи контролю якості та методики декорування.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EДля дорослих також доступний особливий розділ кулінарної рубрики. Вони можуть купити книги рецептів, присвячені приготуванню алкогольних коктейлів для вечірок і сімейних вечорів. Ще одна цікава рубрика &mdash; кавові напої, їх різновиди та майстерність бариста.&nbsp;\u003C/p\u003E\r\n\u003Ch2\u003EЩо потрібно знати перед купівлею кулінарної книги?\u003C/h2\u003E\r\n\u003Cp\u003EПерш ніж купити книгу рецептів, зверніть увагу на її розміри й тип палітурки. Якщо ви хочете справді зробити її своїм кухонним помічником, вибирайте невеликі видання з м&rsquo;якою палітуркою &mdash; ними зручніше користуватися на ходу. А для колекції краще купити подарункові кулінарні книги великого формату з жорсткою палітуркою і яскравими кольоровими ілюстраціями.&nbsp;\u003C/p\u003E\r\n\u003Cp\u003EКнижки з кулінарії для початківців часто мають порожні розділи й сторінки. Вони призначені для запису кулінарних рецептів, створених чи вдосконалених самостійно. У них також зручно записувати результати своїх експериментів і спостережень.&nbsp;\u003C/p\u003E\r\n\u003Ch2\u003EКниги з кулінарії для початківців\u003C/h2\u003E\r\n\u003Cp\u003EКниги з кулінарії Євгена Клопотенка та Джеймі Олівера, про які ми розповідали вище, ідеально підходять для тих, хто тільки береться за процес готування. Але в цьому розділі можна купити книги й інших популярних авторів:\u003C/p\u003E\r\n\u003Cul\u003E\r\n\u003Cli\u003EЕнн Баррелл &laquo;Підкори свою кухню. Рецепти, що додають сил і натхнення&raquo;. Кращий доказ того, що смачні ресторанні страви можна приготувати в домашніх умовах, з простих інгредієнтів і без дорогого обладнання;\u003C/li\u003E\r\n\u003Cli\u003EСергій Пожар &laquo;Кухня Карпат. Від простої їжі до делікатесів&raquo;. Кулінарія України в кращому своєму вигляді. Страви з національним колоритом, які можна приготувати без зайвих зусиль у своїй кухні.&nbsp;\u003C/li\u003E\r\n\u003C/ul\u003E\r\n\u003Ch2\u003EКупити кулінарні книги в інтернет-магазині Видавництва Старого Лева\u003C/h2\u003E\r\n\u003Cp\u003EУ нашому інтернет-магазині представлений широкий асортимент кулінарних книг рецептів відомих авторів. Зручні фільтри допоможуть вам відібрати книги за доступною ціною й побачити кращі знижки. Наші клієнти можуть купити кулінарні книги з доставкою по Україні &mdash; в тому числі в Києві, Харкові, Одесі, Ужгороді та інших містах.&nbsp;\u003C/p\u003E"
            }
          ],
          "products_qty": [],
          "files_ebook": [],
          "entity": null,
          "attributes": [],
          "is_subscribe_set": false,
          "sets": [],
          "sets_count": 0,
          "is_set_disabled": true,
          "can_compensate_cashback": true,
          "is_e_book_program": true,
          "expected": false,
          "outOfStock": false,
          "isProjectClose": false,
          "isPreSale": false,
          "isPreSaleDate": true,
          "productTypeName": "Паперова"
        }
      ],
      "comments": [],
      "recommend_sets": [],
      "products_in_set": [],
      "products_qty": [],
      "attributes": [],
      "posts_and_news": [
        {
          "id": 4623,
          "title": "Анна Дьоміна про поетичну книгу Таїсії Наконечної «Керигма»",
          "slug": "anna-dyomina-pro-poetycnu-knygu-tayisiyi-nakonecnoyi-kerygma",
          "content": null,
          "created_at": "06-08-2025 15:00:56",
          "publish_date": "06.08.2025",
          "blog_author": {
            "id": null,
            "name": null,
            "slug": null
          },
          "image": {
            "id": 77187,
            "name": "1400×930_website_1 (2).png",
            "url": "2025-08-06/1400×930_website_1 (2).png"
          },
          "categories": [],
          "entity": "post"
        },
        {
          "id": 3864,
          "title": "Альтернативні Всесвіти, подорожі в часі та порятунок світу: добірка фентезі-новинок для підлітків",
          "slug": "alternatyvni-vsesvity-podorozi-v-casi-ta-poryatunok-svitu-dobirka-fentezi-novynok-dlya-pidlitkiv",
          "content": null,
          "created_at": "03-04-2025 12:34:09",
          "publish_date": "05.08.2025",
          "blog_author": {
            "id": 1017,
            "name": "Владислава Дудник",
            "slug": "dudnyk-vladyslava"
          },
          "image": {
            "id": 70710,
            "name": "1400×930_website (3).png",
            "url": "2025-04-29/1400×930_website (3).png"
          },
          "categories": [],
          "entity": "post"
        },
        {
          "id": 4590,
          "title": "Маруся Щербина про книгу «Я напишу тобі завтра»",
          "slug": "marusya-shherbyna-pro-knygu-ya-napysu-tobi-zavtra",
          "content": null,
          "created_at": "04-08-2025 15:07:58",
          "publish_date": "04.08.2025",
          "blog_author": {
            "id": null,
            "name": null,
            "slug": null
          },
          "image": {
            "id": 76870,
            "name": "1400×930_website (31).png",
            "url": "2025-08-04/1400×930_website (31).png"
          },
          "categories": [],
          "entity": "post"
        },
        {
          "id": 4461,
          "title": "Інструкція з життя без інструкцій у романі Сашка Ушкалова «БЖД»",
          "slug": "instrukciya-z-zyttya-bez-instrukciy-u-romani-saska-uskalova-bzd",
          "content": null,
          "created_at": "21-07-2025 14:25:32",
          "publish_date": "30.07.2025",
          "blog_author": {
            "id": 1026,
            "name": "Анна Бутенко",
            "slug": "butenko-anna"
          },
          "image": {
            "id": 76458,
            "name": "1400×930_website_4.png",
            "url": "2025-07-21/1400×930_website_4.png"
          },
          "categories": [],
          "entity": "post"
        },
        {
          "id": 4557,
          "title": "Андрій Лесів та Романа Романишин про книгу Артура Дроня «Гемінґвей нічого не знає»",
          "slug": "andriy-lesiv-ta-romana-romanysyn-pro-knygu-artura-dronya-gemingvey-nicogo-ne-znaye",
          "content": null,
          "created_at": "28-07-2025 15:19:59",
          "publish_date": "28.07.2025",
          "blog_author": {
            "id": null,
            "name": null,
            "slug": null
          },
          "image": {
            "id": 76667,
            "name": "IMG_2243.JPG",
            "url": "2025-07-28/IMG_2243.JPG"
          },
          "categories": [],
          "entity": "post"
        },
        {
          "id": 4460,
          "title": "Фортепіанні акорди життя у книжці Галини Матвєєвої «Надто коротке»",
          "slug": "fortepianni-akordy-zyttya-u-knyzci-galyny-matvyeyevoyi-nadto-korotke",
          "content": null,
          "created_at": "21-07-2025 14:15:29",
          "publish_date": "26.07.2025",
          "blog_author": {
            "id": 1026,
            "name": "Анна Бутенко",
            "slug": "butenko-anna"
          },
          "image": {
            "id": 76456,
            "name": "1400×930_website_5.png",
            "url": "2025-07-21/1400×930_website_5.png"
          },
          "categories": [],
          "entity": "post"
        },
        {
          "id": 4525,
          "title": "Перекладачка Ліна Мельник про книгу «Хлопчик, який бачив у темряві»",
          "slug": "perekladacka-lina-melnyk-pro-knygu-xlopcyk-yakyy-bacyv-u-temryavi",
          "content": null,
          "created_at": "23-07-2025 16:33:00",
          "publish_date": "25.07.2025",
          "blog_author": {
            "id": null,
            "name": null,
            "slug": null
          },
          "image": {
            "id": 76522,
            "name": "1400×930_website_1 (1) (1).png",
            "url": "2025-07-23/1400×930_website_1 (1) (1).png"
          },
          "categories": [],
          "entity": "post"
        },
        {
          "id": 4459,
          "title": "Старий новий світ та його постійно змінні координати: «Середина світу»",
          "slug": "staryy-novyy-svit-ta-yogo-postiyno-zminni-koordynaty-seredyna-svitu",
          "content": null,
          "created_at": "21-07-2025 13:44:18",
          "publish_date": "24.07.2025",
          "blog_author": {
            "id": 1026,
            "name": "Анна Бутенко",
            "slug": "butenko-anna"
          },
          "image": {
            "id": 76455,
            "name": "1400×930_website_3.png",
            "url": "2025-07-21/1400×930_website_3.png"
          },
          "categories": [],
          "entity": "post"
        },
        {
          "id": 4524,
          "title": "Магія, ірландські вірування та шалені пригоди у  завершальній частині трилогії Керолайн О'Доног'ю",
          "slug": "magiya-irlandski-viruvannya-ta-saleni-prygody-u-zaversalniy-castyni-trylogiyi-kerolayn-odonogyu",
          "content": null,
          "created_at": "23-07-2025 15:14:11",
          "publish_date": "23.07.2025",
          "blog_author": {
            "id": 1017,
            "name": "Владислава Дудник",
            "slug": "dudnyk-vladyslava"
          },
          "image": {
            "id": 76521,
            "name": "1400C397930_website_1.png",
            "url": "2025-07-23/1400C397930_website_1.png"
          },
          "categories": [],
          "entity": "post"
        },
        {
          "id": 4491,
          "title": "Добірка young adult, який читається на одному подиху (дорослим теж сподобається). Частина 1",
          "slug": "dobirka-young-adult-yakyy-cytayetsya-na-odnomu-podyxu-doroslym-tez-spodobayetsya-castyna-1",
          "content": null,
          "created_at": "22-07-2025 15:17:59",
          "publish_date": "22.07.2025",
          "blog_author": {
            "id": 2419,
            "name": "Сулипа Марія",
            "slug": "sulypa-mariya"
          },
          "image": {
            "id": 76488,
            "name": "1400C397930_website_1 (1).png",
            "url": "2025-07-22/1400C397930_website_1 (1).png"
          },
          "categories": [],
          "entity": "post"
        }
      ],
      "is_subscribe_set": false,
      "is_set_disabled": true,
      "can_compensate_cashback": true,
      "is_e_book_program": true,
      "before_start_of_sales": null
    }
  },
  "__N_SSG": true
}
```

### Information API returns

- ✅ Title
- ✅ Author
- ✅ Price
- ✅ Link 
- ✅ Availability
- ✅ Format (e-book/physical)
- ✅ ISBN
- ❌ Publisher

## Keys 

### Title

Source: `pageProps.resource.title`
Type: string
Example: "Служниця"

### Author

Source: `pageProps.resource.author[].name`
Type: string
Example: "Фріда Мак-Фадден"

### Price

Source: `pageProps.resource.price`
Type: number
Example: 370

Alternative sources:
- `pageProps.resource.price_old` - Old price


### Link (URL)

Source: `pageProps.resource.slug`
Type: string
Example: "sluzhnytsia"

Full URL: `https://starylev.com.ua/{SLUG}`

### Availability

Source: `pageProps.resource.qty`
Type: number
Example: 86

Check if stock is greater than 0 to determine availability.

### Format
Source: `pageProps.resource.type`
Type: string
Example: "book" | "ebook"

### ISBN

Source: `pageProps.resource.isbn` 
Type: string
Example: "978-617-8362-62-1"