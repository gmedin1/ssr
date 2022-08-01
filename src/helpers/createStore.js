import thunk from "redux-thunk";
import reducers from "../client/reducers";

import { createStore, applyMiddleware } from "redux";

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  return store;
};
