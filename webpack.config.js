const path = require('path');
 
module.exports = {
  entry: './src/home.js', //generator.js
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
};