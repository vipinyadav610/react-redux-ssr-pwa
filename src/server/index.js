require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "file-loader",
      {
        name: "[name].[ext]",
        extensions: ["png", "jpg", "jpeg", "gif", "svg"],
        publicPath: "/images",
        outputPath: null,
      },
    ],
    [
      "babel-plugin-transform-require-ignore",
      {
        extensions: [".css", ".sass", ".scss"],
      },
    ],
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-optional-chaining",
  ],
  sourceMaps: "inline",
  retainLines: true,
});
// require.extensions[".scss"] = () => {};
require("./server");
