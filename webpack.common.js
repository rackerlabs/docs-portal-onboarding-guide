const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();
module.exports = {
    entry: [
        path.resolve('_static', 'js', 'index.js'),
        path.resolve('_static', 'css', 'main.css'),
    ],
    output: {
        path: path.resolve('build/html'),
        filename: 'bundle.js',
    },
  externals: {
    jquery: "jQuery"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css?[hash]",
      chunkFilename: "[name].css?[hash]"
    }),
    new webpack.DefinePlugin({
        // Provide enviroment variable defaults
        // from .env
        ALGOLIA_APP_ID: JSON.stringify(process.env.ALGOLIA_APP_ID),
        ALGOLIA_API_KEY: JSON.stringify(process.env.ALGOLIA_API_KEY)
    })
  ]
};
