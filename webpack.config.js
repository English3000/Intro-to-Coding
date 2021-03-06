//imports
const path = require("path");
const webpack = require("webpack");

let plugins = [];

let devPlugins = [];
let prodPlugins = [
  new webpack.DefinePlugin({ //DefinePlugin was imported from "webpack"
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  // new webpack.optimize.UglifyJsPlugin({
  //   compress: {
  //     warnings: true
  //   }
  // })
];

plugins = plugins.concat(
  process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
);

module.exports = {
  context: __dirname,
  // Running Webpack executes index.js (in ./frontend).
  // explain babel-polyfill
  entry: ["babel-polyfill", "./frontend/index.js"],
  // Webpack creates (bundles) a tree of files that require one another,
  //  bundle.js (in ./app/assets/javascripts).
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js"
  },
  plugins: plugins,
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    // Webpack will bundle both .js & .jsx files.
    extensions: [".js", ".jsx", "*"]
  }
};
