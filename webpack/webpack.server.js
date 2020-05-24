const nodeExternals = require("webpack-node-externals");
const path = require("path");
module.exports = {
  target: "node",
  externals: [nodeExternals()],
  entry: path.resolve(__dirname, "..", "src/server/index.js"),
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/dist/",
    filename: "server.js",
    library: "app",
    libraryTarget: "commonjs2",
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
        loader: "css-loader/locals",
      },
      {
        test: /\.(ttf|eot|otf|svg|png)$/,
        loader: "file-loader?emitFile=false",
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader?emitFile=false",
      },
    ],
  },
};
