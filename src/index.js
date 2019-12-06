import {rmdirSync} from './utils'

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
			rmdirSync(outputPath, this.ignoreFiles, this.explicitlyDelFiles)
		})
	}
}

export default CleanPlugin
