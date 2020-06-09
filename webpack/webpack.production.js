const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const workboxPlugin = require("workbox-webpack-plugin");

const common = require("./webpack.common");

const config = {
  entry: {
    index: path.resolve(__dirname, "../src", "client/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    filename: "js/[hash].[name].js",
  },
  mode: "production",
  // externals: {
  //   "redux-devtools-extension": "redux-devtools-extension",
  // },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
  plugins: [
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
    new WebpackPwaManifest({
      name: "Hacker news",
      short_name: "HNews",
      description: "My awesome Progressive Web App!",
      background_color: "#fff",
      theme_color: "#ff6600",
      ios: true,
      ios: {
        "apple-mobile-web-app-title": "Hacker news",
        "apple-mobile-web-app-status-bar-style": "#ff6600",
      },
      crossorigin: null,
      icons: [
        {
          src: path.resolve(__dirname, "../public/favicon.ico"),
          sizes: [64, 32, 24, 16],
        },
        {
          src: path.resolve(__dirname, "../public/logo192.png"),
          size: "192x192",
          ios: true,
        },
        {
          src: path.resolve(__dirname, "../public/logo512.png"),
          size: "1024x1024",
        },
      ],
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
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public", "robots.txt"),
        },
      ],
    }),
  ],
};

module.exports = merge(common, config);
