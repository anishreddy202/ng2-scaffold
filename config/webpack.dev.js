var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
  	'polyfills': './client/polyfills.ts',
  	'vendor': './client/vendor.ts',
  	'main': './client/main.ts'
  },
  output: {
  	filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
  	loaders: [{
		  test: /\.ts$/,
		  exclude: [
		    './node_modules'
		  ],
		  loaders: ['awesome-typescript-loader', 'angular2-template-loader']
    },{
      test: /\.html$/,
      loader: 'html'
    }, {
            test: /\.(png|jpe?g|jpg|gif|svg|mp4|woff|woff2|ttf|eot|ico)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1000&name=assets/[name].[hash].[ext]'
        }, {
        test: /\.scss$/,
        exclude: helpers.root('client', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css!sass')
    }, {
        test: /\.scss$/,
        include: helpers.root('client', 'app'),
        loaders: ["style", "css", "sass"]
    }]
  },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: helpers.root('client', ''),
        attrs: ['img:src', 'link:href', 'source:src', 'video:poster']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ // this will optimize the common code
            names: ['main', 'vendor', 'polyfills'],
        }),
        new HtmlWebpackPlugin({
          template: 'client/index.html',
          chunksSortMode: helpers.packageSort(['polyfills', 'vendor', 'main'])
        }),
        new webpack.DefinePlugin({
          app: {
            environment: JSON.stringify(process.env.NODE_ENV || 'development')
          }
        }),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
    ],
  devServer: {
  	contentBase: './client',
  	stats: 'minimal',
    historyApiFallback: true,
  	proxy: {
        '/ui/**': {
            target: 'http://localhost:9000'
        }
  	}
  }
};
