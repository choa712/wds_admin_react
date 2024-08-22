const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: prod ? "production" : "development",
  entry: "./src/entry.tsx",
  output: {
    path: __dirname + "/dist/",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", "jsx", ".json"],
        },
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]?[hash]",
            },
          },
        ],
      },
    ],
  },
  devtool: prod ? undefined : "source-map",
  devServer: { historyApiFallback: true },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
