const path = require('path');
const webpack = require('webpack');
const pkjson = require('./package.json');

//const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const extractSass = new ExtractTextPlugin({
//     filename: "allstyles.css",
//     disable: process.env.NODE_ENV === "development",
// });

module.exports = {
  entry: {
    app: __dirname + "/src/redux/app.js",
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/',
  },
  mode: 'development',
  module: {
    rules: [
      {parser: {amd: false}},
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    //extractSass,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      __DEVTOOLS__: true,  // <-------- DISABLE redux-devtools HERE
      __BASE_URL__: JSON.stringify('http://localhost:7777/'),
      __PUBLIC_PATH__: __dirname + './dist/',
      __APP_VERSION__: JSON.stringify(pkjson.version)
    })
  ],
  devServer: {
    contentBase: './dist/',
    hot: true
  }
};