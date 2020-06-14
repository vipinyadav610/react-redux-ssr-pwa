import React from "react";
import { hydrate } from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Layout from "./containers/Layout/Layout";
import routes from "./routes/ServerRoutes";
import configureStore from "./redux/store";
import { initialize } from "./serviceWorker";

const preloadedState = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

const renderApp = () => {
  const { store } = configureStore(preloadedState);

  hydrate(
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Layout>{renderRoutes(routes)}</Layout>
      </BrowserRouter>
    </ReduxProvider>,
    document.getElementById("root")
  );
};
renderApp();
if (module.hot) {
  module.hot.accept("./containers/Layout/Layout", function () {
    renderApp();
    // Do something with the updated library module...
  });
}

initialize();
