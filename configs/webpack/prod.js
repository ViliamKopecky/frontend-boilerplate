// production config
const merge = require('webpack-merge')
const ManifestPlugin = require('webpack-manifest-plugin')
const { resolve } = require('path')

const commonConfig = require('./common')('production')

module.exports = merge(commonConfig, {
	mode: 'production',
	entry: './index.tsx',
	output: {
		filename: 'js/bundle.[hash].min.js',
		path: resolve(__dirname, '../../dist'),
		publicPath: '/',
	},
	devtool: 'source-map',
	plugins: [new ManifestPlugin({ fileName: 'build.json' })],
})
