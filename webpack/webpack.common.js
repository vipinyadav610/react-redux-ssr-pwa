const path = require("path");
const config = {
  entry: {
    vendor: ["react"],
    index: path.resolve(__dirname, "../src", "client/index.js"),
  },
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
  resolve: {
    extensions: [".js", ".jsx", ".json", ".wasm", ".mjs", "*"],
  },
};

module.exports = config;
