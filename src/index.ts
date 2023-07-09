import path from 'path';
import appRootPath from 'app-root-path';

import nodeHtmlToImage from 'node-html-to-image';
import { getRandomColor } from './utils/random';

interface Quote {
  text: string
  author: string
}

export  default async function createQuoteImage(quote: Quote, out?: string) {
  const color = getRandomColor();
  const { textColor, background, authorColor } = color;
  const {text, author} = quote;

  const randomImageNameByTime = out || path.join(appRootPath.path, 'images', `image-${Date.now()}.png`);

  await nodeHtmlToImage({
    output: randomImageNameByTime,
    html: `<html>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
          <style>
            body {
              font-family: 'Lato', sans-serif;
              width: 900px;
              height: 1600px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              text-align: center;
              font-weight: 400;
              padding: 2em;
              background-color: ${background};
            }
            h1 {
              font-size: 5em;
              color: ${textColor};
              line-height: 1.5;
              font-weight: 700;
            }
            h2 {
              font-size: 4em;
              font-style: italic;
              color: ${authorColor};
            }
          </style>
        </head>
        <body>
          <div></div>
          <div>
            <h1>${text}</h1>
            <h2>${author}</h2>
          </div>
          <div></div>
        </body>
      </html>
      `,
    puppeteerArgs: {
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
    },
  })
}
