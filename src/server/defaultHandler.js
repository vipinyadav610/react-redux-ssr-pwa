import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "../client/App";

const router = express.Router();

router.get("*", (req, res) => {
  const reactApp = renderToString(<App />);
  res.status(200).render("index", {
    reactApp,
  });
});

export default router;
