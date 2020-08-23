const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    filename: "./js/[name].[chunkhash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
    noInfo: true,
    stats: "minimal",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "iRecipe - Resep Dari Sahabat Untuk Sahabat",
      template: "./src/index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        charset: "UTF-8",
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["url-loader"],
      },
    ],
  },
};
