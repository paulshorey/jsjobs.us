exports.id = 0;
exports.modules = {

/***/ "./src/components/header/Input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);





var _jsxFileName = "/www/ps-jobs/app/src/components/header/Input.js";


var SearchInput = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SearchInput, _React$Component);

	function SearchInput() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SearchInput);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SearchInput.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(SearchInput)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SearchInput, [{
		key: "handleUsernameSubmission",
		value: function handleUsernameSubmission(e) {
			if (e) {
				e.preventDefault();
			}
			var name = this.refs.skill.value;
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 13
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"form",
					{ onSubmit: this.handleUsernameSubmission, __source: {
							fileName: _jsxFileName,
							lineNumber: 14
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { placeholder: "skill...", ref: "skill", __source: {
							fileName: _jsxFileName,
							lineNumber: 15
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { type: "submit", value: "Search", __source: {
							fileName: _jsxFileName,
							lineNumber: 16
						}
					})
				)
			);
		}
	}]);

	return SearchInput;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchInput);

/***/ })

};
//# sourceMappingURL=0.eb7c938994949ff04875.hot-update.js.map