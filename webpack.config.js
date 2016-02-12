var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: {
    forms:       "./forms.js",
    headings:    "./headings.js",
    images:      "./images.js",
    interactive: "./interactive.js",
    landmarks:   "./landmarks.js",
    lists:       "./lists.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "eslint-loader" }
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel" },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.(jpe?g|png|gif)$/i, loader: "file" }
    ]
  },
  resolve: {
    alias: {
      core: "jquery-ui/core.js",
      widget: "jquery-ui/widget.js",
      position: "jquery-ui/position.js",
      tooltip: "jquery-ui/tooltip.js",
      modules: path.join(__dirname, "node_modules")
    }
  },
  eslint: {
    quiet: true
  }
};
