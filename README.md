# Books

That PWA is a simple app to read books.

## Add a book

Change `public/data/config.json` according books you wan’t to add.

Syntax is the following :

```
  {
      "books": [
          {
              "id": "book-id",
              "title": "Book title",
              "author": "Author name",
              "year": "2020",
              "donation": "optional: link to paypal",
              "epub": "optional: link to epub file",
              "chapters": [
                  "chapter 1 name",
                  "chapter 2 name",
                  "chapter 3 name",
                  "etc"
              ]
          }
      ]
  }

```

To add a book chapter, create a directory in `public/data/books/{book-id}` where `{book-id}` is the id you set in `config.json`.

Then, create in that directory [markdown](https://www.markdownguide.org/) files named `chapter-1.md`, `chapter-2.md`, and so on for each chapter defined in `chapters` in the config.json

## Attributions

Icons are from [Piotr Adam Kwiatkowski](http://ikons.piotrkwiatkowski.co.uk/). Thanks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
