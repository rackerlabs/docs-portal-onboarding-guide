const path = require('path');
const dotenv = require("dotenv");
const fs = require("fs");
const webpack = require("webpack");

/**
 * Load env vars from .env if available
 */
dotenv.config();
module.exports = {
  entry: [
    path.resolve('_static', 'js', 'main.js')
  ],
  output: {
    path: path.resolve('build/html'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      ALGOLIA_APP_ID: JSON.stringify(process.env.ALGOLIA_APP_ID),
      ALGOLIA_API_KEY: JSON.stringify(process.env.ALGOLIA_API_KEY)
    })],
};