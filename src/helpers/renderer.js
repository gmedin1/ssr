import React from "react";
import Routes from "../client/Routes";
import serialize from "serialize-javascript"; // Replaces The Special Characters With UNICODE codes.

import { renderToString } from "react-dom/server";
import { StaticRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <Router context={{}} location={req.path}>
        <div>{renderRoutes(Routes)}</div>
      </Router>
    </Provider>
  );

  return `
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.initialState = ${serialize(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
