exports.id = 0;
exports.modules = {

/***/ "./src/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__ = __webpack_require__("@jaredpalmer/after");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__);
var _jsxFileName = "/www/ps-jobs/app/src/routes.js";




/* harmony default export */ __webpack_exports__["a"] = ([{
	path: "/",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/Home.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 11
					}
				},
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "/about",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/About.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 19
					}
				},
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "/search/:search?",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/Search.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 27
					}
				},
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "*",
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/404.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 34
					}
				},
				"...Page Not Found..."
			);
		} // this is optional, just returns null by default
	})
}]);

/***/ }),

/***/ "./src/routes/404.js":
/***/ (function(module, exports) {



/***/ })

};
//# sourceMappingURL=0.9fd2bc01b657920678b3.hot-update.js.map