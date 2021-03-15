const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
    template: './src/index.html'
  }),
    new CleanWebpackPlugin()
  ],
  
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
       {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: '/i/',
          postTransformPublicPath: (p) => `__dirname + ${p}`,
        },
      }
      ]   
  }
};