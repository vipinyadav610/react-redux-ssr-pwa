import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";
import Layout from "../client/containers/Layout/Layout";
import routes from "../client/routes/ServerRoutes";
import configureStore from "../client/redux/store";

const router = express.Router();

const initialRoutesApi = (location, store) => {
  // matchRoutes from 'react-router-config' handles this nicely
  const currentRoute = matchRoutes(routes, location);

  const need = currentRoute.map(({ route, match }) => {
    // once the route is matched, iterate through each component
    // looking for a `static loadData()` method
    // (you'll find these in the data-dependent `/src/views/` components)
    if (route.component) {
      return route.component.loadData
        ? // the following will be passed into each component's `loadData` method:
          route.component.loadData(store, match)
        : Promise.resolve(null);
    }
    // @TODO: return 404
    Promise.resolve(null);
  });

  return Promise.all(need);
};

router.get("*", (req, res) => {
  const { store, history } = configureStore({}, true);
  initialRoutesApi(req.url, store).then((data) => {
    const reactApp = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(routes)}</Layout>
        </StaticRouter>
      </Provider>
    );
    const preloadedState = store.getState();

    res.status(200).render("index", {
      reactApp,
      preloadedState: JSON.stringify(preloadedState),
    });
  });
});

export default router;
