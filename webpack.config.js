const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  context: __dirname,
  entry: {
    bundle: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "babel-polyfill",
      "./index.js"
    ]
  },

  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js",
    publicPath: "/public/"
  },
  devServer: {
    hot: true,
    historyApiFallback: false
  },
  resolve: {
    extensions: [".js", ".jsx", "json"],
    modules: [path.resolve(__dirname), "node_modules"]
  },
  plugins: [new HtmlWebpackPlugin(), new webpack.HotModuleReplacementPlugin()],
  ignoreWarnings: [() => true],
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      }
    ]
  }
};

module.exports = config;
