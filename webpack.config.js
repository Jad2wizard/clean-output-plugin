const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('./dist/cleanPlugin')

// prettier-ignore

const externals = _externals()

module.exports = (env, argv) => {
	const isDev = argv.mode === 'development'
	const config = {
		devtool: 'none',
		entry: {
			main: './src/index.js'
		},
		output: {
			filename: 'cleanPlugin.js',
			path: path.resolve(__dirname, 'dist'),
			libraryTarget: 'commonjs2',
			libraryExport: 'default'
		},
		target: 'node',
		externals: externals,
		node: {
			console: true,
			global: true,
			process: true,
			Buffer: true,
			__filename: true,
			__dirname: true,
			setImmediate: true
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx']
		},
		module: {
			rules: [
				{
					test: /\.(js|ts)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader'
					}
				}
			]
		},
		plugins: [new CleanPlugin()]
	}

	return config
}

function _externals() {
	let manifest = require('./package.json')
	let dependencies = manifest.dependencies
	let externals = {}
	for (let p in dependencies) {
		externals[p] = 'commonjs ' + p
	}
	return externals
}
