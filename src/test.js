const textScraping = require('./textScraping');
const path = require('path');

// Acessa a imagem na mesma página desse test.js
const image = path.join(__dirname, 'sample.jpeg');

textScraping(image)
  .then(res => console.log(res))
  .catch(err => console.log(err));
