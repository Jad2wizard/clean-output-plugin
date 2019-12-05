'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true
})
exports.default = void 0

var _utils = require('./utils')

class CleanPlugin {
	constructor(options) {
		this.options = options
		this.ignoreFiles = options.ignoreFiles || []
		this.explicitlyDelFiles = options.explicitlyDelFiles || null
	}

	apply(compiler) {
		compiler.hooks.emit.tap('Clean prev output files', compilation => {
			const outputPath = compilation.outputOptions.path
			;(0, _utils.rmdirSync)(
				outputPath,
				this.ignoreFiles,
				this.explicitlyDelFiles
			)
		})
	}
}

var _default = CleanPlugin
exports.default = _default
module.exports = exports.default
//# sourceMappingURL=index.js.map
