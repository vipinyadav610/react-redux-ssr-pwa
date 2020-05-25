import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

const renderApp = (props) => {
  hydrate(<App />, document.getElementById("root"));
};
renderApp();
if (module.hot) {
  module.hot.accept("./App", function () {
    renderApp();
    // Do something with the updated library module...
  });
}
