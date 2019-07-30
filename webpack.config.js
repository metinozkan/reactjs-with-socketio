var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const CompressionPlugin = require('compression-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,

	entry: {
		main: './index.js'
	},
	devtool: 'source-map',
	output: {
		path: path.resolve('./static/bundles/'),
		filename: '[name].bundle.js'
	},
	resolve: {
		extensions: [ '*', '.js', '.jsx' ]
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				test: /\.js(\?.*)?$/i
			}),
			new CompressionPlugin({
				test: /\.js(\?.*)?$/i
			})
		]
	},
	module: {
		rules: [
			{ test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loader' },
			{ test: /\.scss$/, loaders: [ 'style-loader', 'css-loader', 'sass-loader' ] }
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './index.html',
			filename: './index.html'
		})
	]
};
