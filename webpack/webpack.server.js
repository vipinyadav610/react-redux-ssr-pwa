const nodeExternals = require("webpack-node-externals");
const path = require("path");
module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, "..", "src/server/server.js"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/",
    filename: "server.js",
    library: "app",
    libraryTarget: "commonjs2",
  },
  node: {
    __dirname: false,
  },
  mode: "production",
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
        test: /\.(sa|sc|c)ss$/,
        use: ["css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|eot|otf|svg|png|jpe?g|gif)$/,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
          emitFile: false,
        },
      },
    ],
  },
};
