import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk"; // Handle Async Creators.
import reducers from "./reducers";

import Routes from "./Routes";

import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"; // createStore: Create a Redux Store; applyMiddleware: Hook Up Any Middleware We Might Be Using.
import { Provider } from "react-redux"; // Ties Our Store To Our React Component Client.
import { renderRoutes } from "react-router-config";

const store = createStore(
  reducers,
  window.initialState,
  applyMiddleware(thunk)
);

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <div>{renderRoutes(Routes)}</div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
