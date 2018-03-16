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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styled_SearchPlus_js__ = __webpack_require__("./src/components/search/styled/SearchPlus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_actions__ = __webpack_require__("./src/data/actions/index.js");





var _jsxFileName = "/www/jsjobs/app/src/components/search/SearchPlus.js";
/*jshint esversion: 6 */


/* redux */


/* component */

var SearchPlus = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SearchPlus, _Component);

	function SearchPlus() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SearchPlus);

		var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SearchPlus.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(SearchPlus)).call(this));

		_this.handleChange = function (selectedOption) {
			_this.setState({ selectedOption: selectedOption });
		};

		_this.state = {
			selectedOption: { value: 1 }
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SearchPlus, [{
		key: "render",
		value: function render() {
			var options = [{
				value: 100,
				label: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 23
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
							fileName: _jsxFileName,
							lineNumber: 24
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 25
							}
						},
						"100"
					)
				)
			}, {
				value: 10,
				label: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 32
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
							fileName: _jsxFileName,
							lineNumber: 33
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 34
							}
						},
						"10"
					)
				)
			}, {
				value: 5,
				label: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 41
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
							fileName: _jsxFileName,
							lineNumber: 42
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 43
							}
						},
						"5"
					)
				)
			}, {
				value: 1,
				label: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 50
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
							fileName: _jsxFileName,
							lineNumber: 51
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 52
							}
						},
						"1"
					)
				)
			}, {
				value: -1,
				label: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 59
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
							fileName: _jsxFileName,
							lineNumber: 60
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 61
							}
						},
						"-1"
					)
				)
			}, {
				value: -5,
				label: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 68
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
							fileName: _jsxFileName,
							lineNumber: 69
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 70
							}
						},
						"-5"
					)
				)
			}, {
				value: -10,
				label: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 77
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
							fileName: _jsxFileName,
							lineNumber: 78
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 79
							}
						},
						"-10"
					)
				)
			}, {
				value: -100,
				label: __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 86
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
							fileName: _jsxFileName,
							lineNumber: 87
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 88
							}
						},
						"-100"
					)
				)
			}];
			var selectedOption = this.state.selectedOption;

			var value = selectedOption && selectedOption.value;
			var Options = [];
			options.forEach(function (opt) {
				Options.push(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"option",
					{ value: opt.value, __source: {
							fileName: _jsxFileName,
							lineNumber: 97
						}
					},
					opt.label
				));
			});
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_6__styled_SearchPlus_js__["a" /* SearchPlus */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 100
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"select",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 101
						}
					},
					Options
				)
			);
		}
	}]);

	return SearchPlus;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		filters: state.filters
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {
		dispatch_filterRemove: function dispatch_filterRemove(filter) {
			dispatch(__WEBPACK_IMPORTED_MODULE_8__data_actions__["b" /* filterRemove */](filter));
		}
	};
};
var ConnectedSearchPlus = Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(SearchPlus);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedSearchPlus);

/***/ })

};
//# sourceMappingURL=0.c3038d216d821b6d9b9c.hot-update.js.map