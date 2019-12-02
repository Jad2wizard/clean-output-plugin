import {rmdirSync} from './utils'

class CleanPlugin {
	constructor(options) {
		this.options = options
	}

	apply(compiler) {
		compiler.hooks.emit.tap('Clean prev output files', compilation => {
			const outputPath = compilation.outputOptions.path
			rmdirSync(outputPath)
		})
	}
}

export default CleanPlugin
