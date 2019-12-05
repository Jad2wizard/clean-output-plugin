import {rmdirSync} from './utils'

class CleanPlugin {
	constructor(options) {
		this.options = options
		this.ignoreFiles = options.ignoreFiles || []
		this.explicitlyDelFiles = options.explicitlyDelFiles || null
	}

	apply(compiler) {
		compiler.hooks.emit.tap('Clean prev output files', compilation => {
			const outputPath = compilation.outputOptions.path
			rmdirSync(outputPath, this.ignoreFiles, this.explicitlyDelFiles)
		})
	}
}

export default CleanPlugin
