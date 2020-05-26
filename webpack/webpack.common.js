const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const config = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
        exclude: [/node_modules/],
      },
      {
        test: /\.ejs$/,
        loader: "raw-loader",
      },
    ],
  },
  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     { from: path.resolve(__dirname, "../public/images"), to: "images" },
    //   ],
    // }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"],
  },
};

module.exports = config;
