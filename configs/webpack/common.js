// shared config (dev and prod)
const { resolve } = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (stage) => ({
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.pug'],
	},
	context: resolve(__dirname, '../../src'),
	module: {
		rules: [
			{ test: /\.pug$/, loader: 'pug-loader' },
			{
				test: /\.js$/,
				use: ['babel-loader', 'source-map-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				use: ['babel-loader', 'awesome-typescript-loader'],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader',
				],
			},
			{
				test: /\.m(odule)?\.s(c|a)ss$/,
				loaders: [
					'style-loader',
					{
						loader: 'typings-for-css-modules-loader',
						options: {
							camelCase: true,
							importLoaders: 2,
							localIdentName: '[name]__[local]--[hash:base64:5]',
							minimize: false,
							modules: true,
							namedExport: true,
							sourceMap: true,
						},
					},
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.s(c|a)ss$/,
				exclude: /\.module\.s(c|a)ss$/,
				loaders: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
					'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
				],
			},
		],
	},
	plugins: [
		new CheckerPlugin(),
		new StyleLintPlugin(),
		new HtmlWebpackPlugin({ template: 'index.pug' }),
	],
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	performance: {
		hints: false,
	},
})
