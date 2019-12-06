import path from 'path'
import fs from 'fs'

let rootPath = null
let ignoreFiles = null
let explicitlyDelFiles = null

const isSameFile = target => f => path.resolve(rootPath, f) === target

const notNeedRemove = dir => {
	if (!rootPath) return true

	if (rootPath === dir) return false

	if (!!explicitlyDelFiles) {
		const inExplicitlyDelFiles = explicitlyDelFiles.some(isSameFile(dir))

		return !inExplicitlyDelFiles
	}

	const inIgnoreFiles = ignoreFiles.some(isSameFile(dir))

	return inIgnoreFiles
}

const initModuleVars = (dir, _ignoreFiles, _explicitlyDelFiles) => {
	if (!rootPath) rootPath = dir
	if (!ignoreFiles && _ignoreFiles) ignoreFiles = _ignoreFiles
	if (!explicitlyDelFiles && _explicitlyDelFiles)
		explicitlyDelFiles = _explicitlyDelFiles
}

export const rmdirSync = (dir, _ignoreFiles, _explicitlyDelFiles) => {
	initModuleVars(dir, _ignoreFiles, _explicitlyDelFiles)

	if (notNeedRemove(dir)) return

	const fileinfo = fs.statSync(dir)
	if (fileinfo.isFile()) {
		fs.unlinkSync(dir)
	} else if (fileinfo.isDirectory()) {
		const files = fs.readdirSync(dir)
		for (let i = 0; i < files.length; i++)
			rmdirSync(path.join(dir, files[i]))

		dir === rootPath || fs.rmdirSync(dir)
	}
}
