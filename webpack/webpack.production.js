const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const merge = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

const common = require("./webpack.common");

const config = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "../", "dist"),
    filename: "js/[hash].[name].js",
  },
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
    ],
  },
  plugins: [
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
    new ManifestPlugin({
      fileName: "asset-manifest.json",
      publicPath: "./",
      generate: (seed, files) => {
        const manifestFiles = files.reduce(function (manifest, file) {
          manifest[file.name] = file.path;
          return manifest;
        }, seed);

        return {
          files: manifestFiles,
        };
      },
    }),
  ],
};

module.exports = merge(common, config);
