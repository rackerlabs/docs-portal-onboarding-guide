const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    theme: ["./src/theme.js", "./src/css/custom.css"]
  },
  output: {
    filename: "js/[name].js?[hash]",
    path: path.resolve(__dirname, "/docs/build")
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
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
  resolve: {
    extensions: ['.jsx', '.scss', '.css', '.js'],
    modules: [
      path.resolve(__dirname, "node_modules"),
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
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
        to: path.resolve(__dirname,'sphinx_rtd_theme/static/js') },
    ]),
  ]
};
