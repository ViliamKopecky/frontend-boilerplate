// production config
import merge from 'webpack-merge'
import ManifestPlugin from 'webpack-manifest-plugin'
import { resolve } from 'path'

import common from './common'

export default merge(common('production'), {
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
