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
		this.hook = this.initHookType(options.hook)
	}

	initHookType(hook) {
		switch (hook) {
			case 'done':
				return hook

			default:
				return 'emit'
		}
	}

	apply(compiler) {
		compiler.hooks[this.hook].tap('Clean output files', param => {
			const compilation = param.compilation || param
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
