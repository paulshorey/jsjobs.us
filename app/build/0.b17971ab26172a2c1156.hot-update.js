exports.id = 0;
exports.modules = {

/***/ "./src/components/search/SearchPlus.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_plus__ = __webpack_require__("react-select-plus");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_plus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_select_plus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_SearchPlus_js__ = __webpack_require__("./src/components/search/styled/SearchPlus.js");





var _jsxFileName = "/www/jsjobs/app/src/components/search/SearchPlus.js";
/*jshint esversion: 6 */




var App = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(App, _React$Component);

	function App() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, App);

		var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (App.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(App)).call(this));

		_this.handleChange = function (selectedOption) {
			_this.setState({ selectedOption: selectedOption });
		};

		_this.state = {
			selectedOption: { value: 1 }
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(App, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var Options = [];
			Options.push(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				"span",
				{ optionValue: 100, __source: {
						fileName: _jsxFileName,
						lineNumber: 19
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
						fileName: _jsxFileName,
						lineNumber: 20
					}
				}),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 21
						}
					},
					"100"
				)
			));
			var selectedOption = this.state.selectedOption;

			var value = selectedOption && selectedOption.value;
			// const Options = [];
			// options.forEach(function(opt)){
			// 	Options.push(<span onClick={()=>{this.setState({selectedOption: opt.value})}}>{opt.label}</span>);
			// });

			var Select = __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				"span",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 32
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{ style: { color: "green" }, __source: {
							fileName: _jsxFileName,
							lineNumber: 33
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
							fileName: _jsxFileName,
							lineNumber: 34
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 35
							}
						},
						"1"
					)
				),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-top-select", __source: {
						fileName: _jsxFileName,
						lineNumber: 37
					}
				})
			);
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_SearchPlus_js__["a" /* SearchPlus */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 41
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { type: "text", placeholder: "Search...", __source: {
						fileName: _jsxFileName,
						lineNumber: 42
					}
				}),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						ref: "PlusButton",
						onClick: function onClick(e) {
							console.log("clicked ", _this2.refs.PlusButton);
							e.preventDefault();
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 43
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "dropdown", __source: {
							fileName: _jsxFileName,
							lineNumber: 50
						}
					}),
					Select
				)
			);
		}
	}]);

	return App;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (App);

/***/ })

};
//# sourceMappingURL=0.b17971ab26172a2c1156.hot-update.js.map