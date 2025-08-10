# DeKnyhy API documentation

The purpose of this API is to get query (book's name) and return as result an array of information about this book from different book stores.

**Information API returns:**

- Title
- Author
- Price
- Link
- Store
- ? Availability
- ? Format (e-book/physic/audio book)
- ? ISBN
- ? Publisher

Format may be 1 | 2 | 3.
1 - Physical
2 - E-book
3 - Audio

Some APIs have all of mentioned info, some less. Optional (that not all APIs have) parameters are marked with question character.

Each API has docs for it which include payload, output structure etc.

**List of API DeKnyhy works with:**

- KSD
- APRIORI
- MEGOGO
- NASHFORMAT
- READEAT
- PM
- STARY_LEV
- VIVAT
- YAKABOO
- KNYGOLAND
- BOOK_YE

Most of APIs require just query in the URL.

**Example of basic API usage**

We want to find a book named "The Gates of Europe".
We have: API_URL, QUERY.

`API_URL="https://bookstore/api/"`
`QUERY="The Gates of Europe"`

In most cases our API call will look like:
`"https://bookstore/api/query=the%gates%of%europe"`

Usually, API links can get params (our query is a parameter as well) like limit, offset, lang etc.
Query parameter (our book name) often is called as:

- search
- query
- term
- keyword
- filter_name


To learn more about API read detailed docs for each API.
