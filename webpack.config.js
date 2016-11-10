const webpack = require('webpack');
var HtmlWebpackTemplate = require('html-webpack-template');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    path: './src',
    filename: './build/bundle.js',
    publicPath: '/'
  },
  module: {

    loaders: [
      {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/},
      {
        test: /\.jsx?/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react',
            'stage-0'
          ]
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        exclude: /node_modules/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        loaders: [
          'url'
        ]
      }
    ]
  },
  eslint: {
    configFile: '.eslintrc'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: HtmlWebpackTemplate,
      appMountId: 'app'
    })
  ]
};
