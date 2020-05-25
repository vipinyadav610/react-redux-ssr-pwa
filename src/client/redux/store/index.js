import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { createBrowserHistory, createMemoryHistory } from "history";

import reducers from "../reducers";

const configureStore = (initialState = {}, isServer) => {
  let history;

  if (isServer) {
    history = createMemoryHistory();
  } else {
    history = createBrowserHistory();
  }

  let middleware;
  if (process.env.NODE_ENV === "development") {
    middleware = composeWithDevTools(
      applyMiddleware(routerMiddleware(history), thunk)
    );
  } else {
    middleware = compose(applyMiddleware(routerMiddleware(history), thunk));
  }

  const store = createStore(
    combineReducers({
      ...reducers,
      router: connectRouter(history),
    }),
    initialState,
    middleware
  );

  return { history, store };
};

export default configureStore;
