const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const config = {
  // Entry Point of Our App.
  entry: "./src/client/client.js",
  // Tell Webpack Where To Put The Output File That Is Generated.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
};

module.exports = merge(baseConfig, config);
