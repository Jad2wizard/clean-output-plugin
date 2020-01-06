const path = require('path')
const webpack = require('webpack')
const CleanPlugin = require('./dist/index')

module.exports = {
	entry: ['./test/index.js'],
	output: {
		path: path.resolve(__dirname, './res'),
		filename: 'bundle.js'
	},
	plugins: [
		new CleanPlugin({
			explicitlyDelFiles: ['*.js.map']
		})
	]
}
