import path from 'path'
import fs from 'fs'

let rootPath = null
let ignoreFiles = null

const notNeedRemove = dir => {
	if (!rootPath || !dir.startsWith(rootPath)) return true

	const relativePath = dir.replace(rootPath, '')

	const inIgnoreFiles = ignoreFiles.some(
		f =>
			f === relativePath ||
			`/${f}` === relativePath ||
			`/${f}` === `${relativePath}/`
	)

	return inIgnoreFiles
}

export const rmdirSync = (dir, _ignoreFiles) => {
	if (!rootPath) rootPath = dir
	if (!ignoreFiles && _ignoreFiles) ignoreFiles = _ignoreFiles

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
