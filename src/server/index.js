require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-transform-async-to-generator",
    "@babel/plugin-proposal-object-rest-spread",
  ],
  env: {
    debug: {
      sourceMaps: "inline",
      retainLines: true,
    },
  },
});
require("./server");
