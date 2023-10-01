import createImage from '..';

const quote = {
  text: 'The best way to get started is to quit talking and begin doing.',
  author: 'Walt Disney'
}

createImage(quote, 'example.png', createImage.colors[2]);
