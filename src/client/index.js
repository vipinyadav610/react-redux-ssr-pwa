import React from "react";
import { hydrate } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import Layout from "./containers/Layout/Layout";
import configureStore from "./redux/store";
import { initialize } from "./serviceWorker";

const preloadedState = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

const renderApp = () => {
  const { history, store } = configureStore(preloadedState);

  hydrate(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Layout />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  );
};
renderApp();
// if (module.hot) {
//   module.hot.accept("./Layout", function () {
//     renderApp();
//     // Do something with the updated library module...
//   });
// }

initialize();
