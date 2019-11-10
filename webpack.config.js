
const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  devtool: 'source-map',

  watch: true,

  entry: {
    javascript: './index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules')
    },
    extensions: ['.js']
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test:/\.(s*)css$/,
        use:['style-loader','css-loader', 'sass-loader']
      }
    ],
  },
};