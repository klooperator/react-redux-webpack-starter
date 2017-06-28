const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/app.js',
  output: { path: path.resolve(__dirname, 'dist'),
            filename: '[name].[hash].js' },
  module: {
      rules: [ {test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})},

               {test: /\.(png|svg|jpg|gif)$/,
                use:['file-loader']}  ]
  },
  plugins: [ new ExtractTextPlugin("styling.css") ,
             new HtmlWebpackPlugin()
            ],
  devtool: "inline-source-map"
}
