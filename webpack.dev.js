const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
  

module.exports = merge(common, {
  mode: "development",
  plugins: [new BundleAnalyzerPlugin()]
});