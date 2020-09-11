/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config();

module.exports = () => {

  return {
    entry: { main: './src/index.jsx' },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: './js/bundle.js'
    },
    devtool: 'source-map',
    devServer: {
      contentBase: path.resolve(__dirname, './public'),
      port: 3000,
      open: true,
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[name]__[local]--[hash:base64:6]',
                },
              }
            }
          ]
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
      new webpack.DefinePlugin({
         'process.env.GRAPHQL_API_KEY': JSON.stringify(process.env.GRAPHQL_API_KEY)
      }),
    ]
  };
}
