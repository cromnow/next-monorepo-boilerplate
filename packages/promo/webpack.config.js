const HtmlWebpackPlugin = require("html-webpack-plugin");
const CommonConfigWebpackPlugin = require("common-config-webpack-plugin");
const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            rootMode: "upward",
          },
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src", "assets", "index.html"),
    }),
  ],
};
