const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const workboxPlugin = require("workbox-webpack-plugin");

const common = require("./webpack.common");

const config = {
  entry: {
    vendor: ["react"],
    index: path.resolve(__dirname, "../src", "client/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    filename: "js/[hash].[name].js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: false,
              publicPath: "/css",
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },

      {
        test: /\.(ttf|eot|otf|svg|png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new workboxPlugin.InjectManifest({
      swSrc: path.resolve(__dirname, "../src", "client/sw.js"),
      swDest: "service-worker.js",
    }),
    new HtmlWebpackPlugin({
      filename: `./index.ejs`,
      template: path.join("public", "template.ejs"),
      favicon: path.join("public", "favicon.ico"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        "theme-color": "#000000",
        "msapplication-navbutton-color": "#000000",
        "apple-mobile-web-app-status-bar-style": "#000000",
      },
    }),
    new MiniCssExtractPlugin({
      filename: "css/[hash].css",
      chunkFilename: "css/[hash].css",
    }),
    new Dotenv({
      path: "./.env.production",
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
  ],
};

module.exports = merge(common, config);
