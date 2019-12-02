module.exports = /******/ (function(modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/ var installedModules = {} // The require function
	/******/
	/******/ /******/ function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/ if (installedModules[moduleId]) {
			/******/ return installedModules[moduleId].exports
			/******/
		} // Create a new module (and put it into the cache)
		/******/ /******/ var module = (installedModules[moduleId] = {
			/******/ i: moduleId,
			/******/ l: false,
			/******/ exports: {}
			/******/
		}) // Execute the module function
		/******/
		/******/ /******/ modules[moduleId].call(
			module.exports,
			module,
			module.exports,
			__webpack_require__
		) // Flag the module as loaded
		/******/
		/******/ /******/ module.l = true // Return the exports of the module
		/******/
		/******/ /******/ return module.exports
		/******/
	} // expose the modules object (__webpack_modules__)
	/******/
	/******/
	/******/ /******/ __webpack_require__.m = modules // expose the module cache
	/******/
	/******/ /******/ __webpack_require__.c = installedModules // define getter function for harmony exports
	/******/
	/******/ /******/ __webpack_require__.d = function(exports, name, getter) {
		/******/ if (!__webpack_require__.o(exports, name)) {
			/******/ Object.defineProperty(exports, name, {
				enumerable: true,
				get: getter
			})
			/******/
		}
		/******/
	} // define __esModule on exports
	/******/
	/******/ /******/ __webpack_require__.r = function(exports) {
		/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			/******/ Object.defineProperty(exports, Symbol.toStringTag, {
				value: 'Module'
			})
			/******/
		}
		/******/ Object.defineProperty(exports, '__esModule', {value: true})
		/******/
	} // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
	/******/
	/******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
		value,
		mode
	) {
		/******/ if (mode & 1) value = __webpack_require__(value)
		/******/ if (mode & 8) return value
		/******/ if (
			mode & 4 &&
			typeof value === 'object' &&
			value &&
			value.__esModule
		)
			return value
		/******/ var ns = Object.create(null)
		/******/ __webpack_require__.r(ns)
		/******/ Object.defineProperty(ns, 'default', {
			enumerable: true,
			value: value
		})
		/******/ if (mode & 2 && typeof value != 'string')
			for (var key in value)
				__webpack_require__.d(
					ns,
					key,
					function(key) {
						return value[key]
					}.bind(null, key)
				)
		/******/ return ns
		/******/
	} // getDefaultExport function for compatibility with non-harmony modules
	/******/
	/******/ /******/ __webpack_require__.n = function(module) {
		/******/ var getter =
			module && module.__esModule
				? /******/ function getDefault() {
						return module['default']
				  }
				: /******/ function getModuleExports() {
						return module
				  }
		/******/ __webpack_require__.d(getter, 'a', getter)
		/******/ return getter
		/******/
	} // Object.prototype.hasOwnProperty.call
	/******/
	/******/ /******/ __webpack_require__.o = function(object, property) {
		return Object.prototype.hasOwnProperty.call(object, property)
	} // __webpack_public_path__
	/******/
	/******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
	/******/
	/******/
	/******/ /******/ return __webpack_require__(
		(__webpack_require__.s = './src/index.js')
	)
	/******/
})(
	/************************************************************************/
	/******/ {
		/***/ './src/index.js':
			/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
			/*! exports provided: default */
			/***/ function(module, __webpack_exports__, __webpack_require__) {
				'use strict'
				__webpack_require__.r(__webpack_exports__)
				/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ./utils */ './src/utils.js'
				)
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError('Cannot call a class as a function')
					}
				}

				function _defineProperties(target, props) {
					for (var i = 0; i < props.length; i++) {
						var descriptor = props[i]
						descriptor.enumerable = descriptor.enumerable || false
						descriptor.configurable = true
						if ('value' in descriptor) descriptor.writable = true
						Object.defineProperty(
							target,
							descriptor.key,
							descriptor
						)
					}
				}

				function _createClass(Constructor, protoProps, staticProps) {
					if (protoProps)
						_defineProperties(Constructor.prototype, protoProps)
					if (staticProps) _defineProperties(Constructor, staticProps)
					return Constructor
				}

				var CleanPlugin =
					/*#__PURE__*/
					(function() {
						function CleanPlugin(options) {
							_classCallCheck(this, CleanPlugin)

							this.options = options
						}

						_createClass(CleanPlugin, [
							{
								key: 'apply',
								value: function apply(compiler) {
									compiler.hooks.emit.tap(
										'Clean prev output files',
										function(compilation) {
											var outputPath =
												compilation.outputOptions.path
											Object(
												_utils__WEBPACK_IMPORTED_MODULE_0__[
													'rmdirSync'
												]
											)(outputPath)
										}
									)
								}
							}
						])

						return CleanPlugin
					})()

				/* harmony default export */ __webpack_exports__[
					'default'
				] = CleanPlugin

				/***/
			},

		/***/ './src/utils.js':
			/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
			/*! exports provided: rmdirSync */
			/***/ function(module, __webpack_exports__, __webpack_require__) {
				'use strict'
				__webpack_require__.r(__webpack_exports__)
				/* harmony export (binding) */ __webpack_require__.d(
					__webpack_exports__,
					'rmdirSync',
					function() {
						return rmdirSync
					}
				)
				/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! path */ 'path'
				)
				/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
					path__WEBPACK_IMPORTED_MODULE_0__
				)
				/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! fs */ 'fs'
				)
				/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
					fs__WEBPACK_IMPORTED_MODULE_1__
				)

				var rmdirSync = function rmdirSync(dir) {
					var fileinfo = fs__WEBPACK_IMPORTED_MODULE_1___default.a.statSync(
						dir
					)

					if (fileinfo.isFile()) {
						fs__WEBPACK_IMPORTED_MODULE_1___default.a.unlinkSync(
							dir
						)
					} else if (fileinfo.isDirectory()) {
						var files = fs__WEBPACK_IMPORTED_MODULE_1___default.a.readdirSync(
							dir
						)

						for (var i = 0; i < files.length; i++) {
							rmdirSync(
								path__WEBPACK_IMPORTED_MODULE_0___default.a.join(
									dir,
									files[i]
								)
							)
						}

						fs__WEBPACK_IMPORTED_MODULE_1___default.a.rmdirSync(dir)
					}
				}

				/***/
			},

		/***/ fs:
			/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
			/*! no static exports found */
			/***/ function(module, exports) {
				module.exports = require('fs')

				/***/
			},

		/***/ path:
			/*!***********************!*\
  !*** external "path" ***!
  \***********************/
			/*! no static exports found */
			/***/ function(module, exports) {
				module.exports = require('path')

				/***/
			}

		/******/
	}
)['default']
