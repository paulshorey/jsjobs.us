exports.id = 0;
exports.modules = {

/***/ "./src/components/search/Input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = '/www/ps-jobs/app/src/components/search/Input.js';


/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createClass({
	displayName: 'Input',


	handleUsernameSubmission: function handleUsernameSubmission(e) {
		if (e) e.preventDefault();
		var name = this.refs.usernameItem.value;
		console.log('Your name is', name);
	},

	render: function render() {
		return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
			'div',
			{
				__source: {
					fileName: _jsxFileName,
					lineNumber: 13
				}
			},
			__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'form',
				{ onSubmit: this.handleUsernameSubmission, __source: {
						fileName: _jsxFileName,
						lineNumber: 14
					}
				},
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { placeholder: 'enter username', ref: 'usernameItem', __source: {
						fileName: _jsxFileName,
						lineNumber: 15
					}
				}),
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'submit', value: 'Submit username', __source: {
						fileName: _jsxFileName,
						lineNumber: 16
					}
				})
			)
		);
	}

}));

/***/ })

};
//# sourceMappingURL=0.24e636f18c50b22a00e3.hot-update.js.map