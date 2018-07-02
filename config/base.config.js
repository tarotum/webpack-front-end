const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: 'js/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		},
		{
			test: /\.(png|jp(e*)g|gif|svg)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: 'images/[name].[ext]'
				}
			}]
		},
		{
			test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]'
				}
			}]
		}
		]
	},
	plugins: [
		new webpack.EnvironmentPlugin(['NODE_ENV']),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			filename: path.resolve(__dirname, '../dist/index.ejs'),
			template: path.resolve(__dirname, '../src/index.html')
		})
	],
	resolve: {
		alias: {
			Assets: path.resolve(__dirname, '../src/assets')
		}
	}
};
