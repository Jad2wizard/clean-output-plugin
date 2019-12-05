'use strict'

Object.defineProperty(exports, '__esModule', {
	value: true
})
exports.rmdirSync = void 0

var _path = _interopRequireDefault(require('path'))

var _fs = _interopRequireDefault(require('fs'))

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : {default: obj}
}

let rootPath = null
let ignoreFiles = null
let explicitlyDelFiles = null

const isSameFile = target => f =>
	f === target || `/${f}` === target || `/${f}` === `${target}/`

const notNeedRemove = dir => {
	if (!rootPath || !dir.startsWith(rootPath)) return true
	const relativePath = dir.replace(rootPath, '')
	if (relativePath === '') return false

	if (!!explicitlyDelFiles) {
		const inExplicitlyDelFiles = explicitlyDelFiles.some(
			isSameFile(relativePath)
		)
		return !inExplicitlyDelFiles
	}

	const inIgnoreFiles = ignoreFiles.some(isSameFile(relativePath))
	return inIgnoreFiles
}

const initModuleVars = (dir, _ignoreFiles, _explicitlyDelFiles) => {
	if (!rootPath) rootPath = dir
	if (!ignoreFiles && _ignoreFiles) ignoreFiles = _ignoreFiles
	if (!explicitlyDelFiles && _explicitlyDelFiles)
		explicitlyDelFiles = _explicitlyDelFiles
}

const rmdirSync = (dir, _ignoreFiles, _explicitlyDelFiles) => {
	initModuleVars(dir, _ignoreFiles, _explicitlyDelFiles)
	if (notNeedRemove(dir)) return

	const fileinfo = _fs.default.statSync(dir)

	if (fileinfo.isFile()) {
		_fs.default.unlinkSync(dir)
	} else if (fileinfo.isDirectory()) {
		const files = _fs.default.readdirSync(dir)

		for (let i = 0; i < files.length; i++)
			rmdirSync(_path.default.join(dir, files[i]))

		dir === rootPath || _fs.default.rmdirSync(dir)
	}
}

exports.rmdirSync = rmdirSync
//# sourceMappingURL=utils.js.map
