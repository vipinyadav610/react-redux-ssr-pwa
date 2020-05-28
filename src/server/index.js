require("@babel/register")({
  presets: ["@babel/preset-env"],
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
  ],
  sourceMaps: "inline",
  retainLines: true,
});
// require.extensions[".scss"] = () => {};
require("./server");
