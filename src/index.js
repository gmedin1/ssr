import "babel-polyfill"; // To Make Use Of The Async / Await Syntax.
import proxy from "express-http-proxy";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Routes from "./client/Routes";

import { matchRoutes } from "react-router-config";

const PORT = "3000";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.header["x-forwarded-host"] = "localhost:3000";
      return opts; // This is for the Google Cloud Auth System
    },
  })
);

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  }); // Return an Array of Component That Are Going To Be Rendered.

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
