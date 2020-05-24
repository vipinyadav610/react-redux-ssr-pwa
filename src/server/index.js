require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "babel-plugin-transform-require-ignore",
      {
        extensions: [".css", ".sass", ".scss"],
      },
    ],
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-proposal-object-rest-spread",
  ],
});
// require.extensions[".scss"] = () => {};
require("./server");
