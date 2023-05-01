const path = require("path");
const DirectoryTreePlugin = require("directory-tree-webpack-plugin");

module.exports = {
  entry: "./src/content/apagar/index.js",
  output: {
    path: path.resolve(__dirname, "./src/content/apagar/dist"),
    filename: "apagar.js",
  },
  plugins: [
    new DirectoryTreePlugin({
      dir: "./public/banners",
      path: "./src/content/banners.json",
    }),
  ],
};
