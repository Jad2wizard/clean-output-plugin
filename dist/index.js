'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true
})
exports.default = void 0

var _utils = require('./utils')

class CleanPlugin {
	constructor(options) {
		this.options = options
	}

	apply(compiler) {
		compiler.hooks.emit.tap('Clean prev output files', compilation => {
			const outputPath = compilation.outputOptions.path
			;(0, _utils.rmdirSync)(outputPath)
		})
	}
}

var _default = CleanPlugin
exports.default = _default
module.exports = exports.default
//# sourceMappingURL=index.js.map
