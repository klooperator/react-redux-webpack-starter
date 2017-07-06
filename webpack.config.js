const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/main.js',
  output: { path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js' },
  module: {
      rules: [
               { test: /\.css$/,
                 use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"}) },

               { test: /\.(png|svg|jpg|gif)$/,
                 use:['file-loader'] },

               { test: /\.jsx?$/, 
                 exclude: /node_modules/,
                 loader: "babel-loader",
                }
             ]
  },
  plugins: [ new ExtractTextPlugin("main-style.[hash].css") ,
             new HtmlWebpackPlugin({template: 'index-template.ejs', inject: 'body'})
            ],
  devtool: "eval-source-map"
}
