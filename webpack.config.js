const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    parent: ["./src/index.ts"],
    child: ["./src/child.ts"]
  },
  output: {
    filename: "[name].js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /child.ts$/, loader: "imports-loader?__webpack_require__=>window.top.__parent_webpack_require__" }
    ]
  },
  plugins: [
    new HtmlPlugin({
      filename: 'parent.html',
      template: 'src/parent.html',
      chunks: ['parent']
    }),
    new HtmlPlugin({
      chunks: ['child']
    })
  ]
};
