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

const rmdirSync = dir => {
	const fileinfo = _fs.default.statSync(dir)

	if (fileinfo.isFile()) {
		_fs.default.unlinkSync(dir)
	} else if (fileinfo.isDirectory()) {
		const files = _fs.default.readdirSync(dir)

		for (let i = 0; i < files.length; i++)
			rmdirSync(_path.default.join(dir, files[i]))

		_fs.default.rmdirSync(dir)
	}
}

exports.rmdirSync = rmdirSync
//# sourceMappingURL=utils.js.map
