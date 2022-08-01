const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  // Inform Webpack That We're Building A Bundle For NodeJS, Rather Than For Browser.
  target: "node",
  // Entry Point of Our App.
  entry: "./src/index.js",
  // Tell Webpack Where To Put The Output File That Is Generated.
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // Node Externals Packages Won't Be Loaded To The Bundle. Minimizing The Bundle Size.
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
