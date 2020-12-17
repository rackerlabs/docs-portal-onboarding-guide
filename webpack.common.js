const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    theme: ["./src/theme.js", "./src/css/custom.css"]
  },
  output: {
    filename: "js/[name].js?[hash]",
    path: path.resolve(__dirname, "theme/static")
  },
  externals: {
    jquery: "jQuery"
  },
  module: {
    rules: [
      {
        test: require.resolve("./src/theme.js"),
        use: "imports-loader?this=>window"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false,
              reloadAll: true
            }
          },
          {
            loader: "css-loader"
          },
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
              outputPath: "css/fonts/",
              publicPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css?[hash]",
      chunkFilename: "css/[name].css?[hash]"
    }),
    new CopyPlugin([
      {
        from: 'node_modules/html5shiv/dist/*.min.js',
        flatten: true,
        to: path.resolve(__dirname,'theme/static/js') },
    ]),
  ]
};
