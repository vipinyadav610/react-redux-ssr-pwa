import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

import reducers from "../reducers";

const configureStore = (initialState = {}) => {
  let middleware = composeWithDevTools(applyMiddleware(thunk));
  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    initialState,
    middleware
  );

  return { store };
};

export default configureStore;
