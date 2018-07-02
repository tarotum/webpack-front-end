const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
	module: {
		rules: [{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					options: {
						minimize: true
					}
				},
				'postcss-loader'
				]
			})
		},
		{
			test: /\.sass|scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [{
					loader: 'css-loader',
					options: {
						minimize: true
					}
				},
				'sass-loader',
				'postcss-loader'
				]
			})
		}
		]
	},
	devtool: '#source-map',
	performance: {
		hints: false
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new ExtractTextPlugin({
			filename: 'css/styles.css',
			allChunks: true
		}),
		new UglifyJsPlugin({
			sourceMap: true
		})
	]
});
