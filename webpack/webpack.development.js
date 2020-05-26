const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

const common = require("./webpack.common");

const config = {
  entry: [
    "babel-polyfill",
    "react-hot-loader/patch",
    "webpack-hot-middleware/client",
    path.resolve(__dirname, "../src", "client/index.js"),
  ],
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    filename: "js/index.js",
    publicPath: "/",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: true,
              publicPath: "/css",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          publicPath: path.resolve(__dirname, "../", "public"),
          outputPath: "images",
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/index.css",
      chunkFilename: "css/index.css",
    }),
    new Dotenv({
      path: "./.env.development",
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
  ],
};

module.exports = merge(common, config);
