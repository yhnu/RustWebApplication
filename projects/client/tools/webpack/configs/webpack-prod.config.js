const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');
const webpack = require('webpack');
const buildOptions = require('../build-config-options');

const { BACKEND_HOST_URI, GOOGLE_MAPS_API_KEY } = buildOptions;

const testDirectory = path.join(__dirname, '../../../test');
const sourceDirectory = path.join(__dirname, '../../../src');
const modulesDirectory = path.join(__dirname, '../../../node_modules');
const buildDirectory = path.join(__dirname, '../../../dist');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
	mode: 'production',
	entry: ['react', 'react-dom', './src/assets/common.css', './src/index.tsx'],
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
		// Absolute paths to where modules can be resolved.
		modules: [sourceDirectory, modulesDirectory],
		alias: {
			src: sourceDirectory
		}
	},
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: buildDirectory
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Index',
			template: path.join('src', 'templates', 'index-production.template.html'),
			inlineSource: '.(js|css)$'
		}),
		new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
		new webpack.DefinePlugin({
			__SYS_BACKEND_HOST_URI__: JSON.stringify(BACKEND_HOST_URI),
			__SYS_GOOGLE_MAPS_API_KEY__: JSON.stringify(GOOGLE_MAPS_API_KEY)
		})
	],
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader'
					}
				],
				include: [sourceDirectory, testDirectory]
			},
			{
				// https://webpack.js.org/loaders/style-loader/#injecttype
				test: /\.css$/,
				use: [{ loader: 'style-loader', options: { injectType: 'singletonStyleTag' } }, 'css-loader'],
				include: [sourceDirectory]
			},
			{
				test: /\.(jpe?g|png|ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				use: 'base64-inline-loader?name=[name].[ext]'
			},
			// {
			// 	test: /.*\.(gif|png|jpeg|svg|mp4)$/i,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				name: 'images/[name].[ext]'
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /.*\.svgi$/i,
				use: [
					{
						loader: 'svg-inline-loader'
					}
				]
			}
		]
	}
};
