import dotenv from "dotenv";
import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import defaultHandler from "./defaultHandler";

const app = express();
app.use(cors());
let envConfig = {};
if (process.env.NODE_ENV === "development") {
  if (fs.existsSync(".env.development")) {
    envConfig = dotenv.parse(fs.readFileSync(".env.development"));
  } else if (fs.existsSync(".env")) {
    envConfig = dotenv.parse(fs.readFileSync(".env"));
  }

  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
  const webpack = require("webpack");
  const webpackMiddleware = require("webpack-dev-middleware");
  const hotMiddleware = require("webpack-hot-middleware");
  const config = require("../../webpack/webpack.development");
  const compiler = webpack(config);

  app.use(
    hotMiddleware(compiler, {
      log: console.log,
      heartbeat: 10 * 1000,
    })
  );
  app.use(
    webpackMiddleware(compiler, {
      publicPath: config.output.publicPath,
      serverSideRender: true,
    })
  );

  compiler.plugin("done", () => {
    console.log("Clearing /src/ module cache from server");
    Object.keys(require.cache).forEach((id) => {
      if (/[\/\\]src[\/\\]/.test(id)) delete require.cache[id];
    });
  });

  // View engine setup
  app.set("views", path.join(__dirname, "../../", "public"));
  app.set("view engine", "ejs");
} else {
  if (fs.existsSync(".env.production")) {
    envConfig = dotenv.parse(fs.readFileSync(".env.production"));
  } else if (fs.existsSync(".env")) {
    envConfig = dotenv.parse(fs.readFileSync(".env"));
  }

  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
  app.set("views", path.join(__dirname));
  app.set("view engine", "ejs");
}

app.use("/", express.static(path.join(__dirname)));
app.use("/", defaultHandler);

const port = process.env.PORT || 3005;
const host = process.env.HOST || "localhost";

app.listen(port, function listenHandler() {
  console.info(`Running on ${port}`);
});
