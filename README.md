# Books

That PWA is a simple app to read books.

## Add a book

Copy `public/data/config.dist.json` to `public/data/config.json` and change it according books you wan’t to insert.

To add a book chapter, create a directory in `public/data/books/{book-id}` where `{book-id}` is the id you set in `config.json`.

Then, create [markdown](https://www.markdownguide.org/) files named `chapter-1.md`, `chapter-2.md`, and so on for each chapter defined in `chapters` in the config.json

## Attributions

Icons are from [Piotr Adam Kwiatkowski](http://ikons.piotrkwiatkowski.co.uk/). Thanks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
