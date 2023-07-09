# Create Quote Image

## Description

This is a simple package to create a quote image from a given text. like this:

<img src="assets/quote.png" width="500"/>

## Features

- Random background color

## Usage

Install packages:

```bash
npm i create-quote-image
```

Import the package:

```js
const createQuoteImage = require('create-quote-image').default;

const quote = {
  text: 'This is a quote',
  author: 'Me',
}

createQuoteImage(quote, 'path/to/image.png');
```

