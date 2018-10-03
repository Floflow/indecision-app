const path = require('path');

module.exports = {
  entry: './src/app.js', // where webpack should start
  output:{
    path: path.join(__dirname, 'public'), // where to put the file where you can find all the js files
    filename:'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
