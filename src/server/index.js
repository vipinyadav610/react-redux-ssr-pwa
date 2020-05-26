require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "file-loader",
      {
        name: "[hash].[ext]",
        extensions: ["png", "jpg", "jpeg", "gif", "svg"],
        publicPath: "/public/img",
        outputPath: null,
      },
      "img-file-loader-plugin",
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
