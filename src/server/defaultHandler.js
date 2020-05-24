import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";

const router = express.Router();

const { NODE_ENV } = process.env;
const ejsPath = NODE_ENV === "develpment" ? "index" : "../dist/index";

router.get("*", (req, res) => {
  const reactApp = renderToString(<App />);
  res.status(200).render(ejsPath, {
    reactApp,
  });
});

export default router;
