exports.id = 0;
exports.modules = {

/***/ "./src/components/search/Query.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__styled_Query_js__ = __webpack_require__("./src/components/search/styled/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_actions__ = __webpack_require__("./src/data/actions/index.js");





var _jsxFileName = "/www/jsjobs/app/src/components/search/Query.js";
/*jshint esversion: 6 */


/* redux */


/* custom */
// import UISelect from "components/ui/Select";

/* 
	Component 
*/
var constructInitialState = function constructInitialState(props) {
	return {
		qInput_value: "",
		qInput_multiplier: props.queryProperty === "location" ? 3 : 1
	};
};

var Query = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Query, _React$Component);

	function Query(props) {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Query);

		var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Query.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Query)).call(this, props));

		_this.inputValueChange = function (e) {
			var value = e.target.value;
			// set value:
			_this.setState({ qInput_value: value });
		};

		_this.inputMultiplierChange = function (multiplier) {
			// set value:
			_this.setState({ qInput_multiplier: multiplier });
			// only act "onBlur"
			if (_this.refs.query_selector_dropdown.classList.contains("opened") && _this.refs.qInput.value) {
				_this.inputValueSubmit(multiplier); // pass multiplier, because setState is Async, and doesnt change fast enough
			}
			// DOM element:
			_this.refs.query_selector_dropdown.classList.toggle("opened");
		};

		_this.inputValueSubmit = function (multiplier) {
			_this.props.dispatch_filterAdd({ value: _this.refs.qInput.value, multiplier: multiplier || _this.state.qInput_multiplier, property: _this.props.queryProperty });
			_this.setState(constructInitialState(_this.props));
		};

		_this.state = constructInitialState(props);
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Query, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var multiplier = this.state.qInput_multiplier;
			var placeholder = "Search description...";
			if (this.props.queryProperty === "location") {
				placeholder = "Search city name...";
			} else if (this.props.queryProperty === "title") {
				placeholder = "Search title...";
			}
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_6__styled_Query_js__["a" /* Query */],
				{
					className: "query_group hasValue" + (this.state.qInput_value ? " hasValue" : ""),
					innerRef: function innerRef(e) {
						_this2.refs.query_group = e;
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 52
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", {
					className: "query_input",
					placeholder: placeholder,
					ref: "qInput",
					onChange: function onChange(e) {
						_this2.inputValueChange(e);
					},
					value: this.state.qInput_value,
					onKeyPress: function onKeyPress(e) {
						if ((e.charCode || e.keyCode) === 13) {
							_this2.inputValueSubmit();
						}
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 58
					}
				}),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ className: "query_select selected_ " + (multiplier > 0 ? "positive" : "negative"), __source: {
							fileName: _jsxFileName,
							lineNumber: 72
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"div",
						{ className: "dropdown", ref: "query_selector_dropdown", __source: {
								fileName: _jsxFileName,
								lineNumber: 73
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 10 ? "selected" : ""),
								onClick: function onClick() {
									_this2.inputMultiplierChange(10);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 74
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 80
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 81
									}
								},
								"10"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 3 ? "selected" : ""),
								onClick: function onClick() {
									_this2.inputMultiplierChange(3);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 83
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 89
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 90
									}
								},
								"3"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 2 ? "selected" : ""),
								onClick: function onClick() {
									_this2.inputMultiplierChange(2);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 92
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 98
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 99
									}
								},
								"2"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 1 ? "selected" : ""),
								onClick: function onClick() {
									_this2.inputMultiplierChange(1);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 101
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 107
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 108
									}
								},
								"1"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -1 ? "selected" : ""),
								onClick: function onClick() {
									_this2.inputMultiplierChange(-1);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 110
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 116
									}
								},
								"-"
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 117
									}
								},
								"1"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -2 ? "selected" : ""),
								onClick: function onClick() {
									_this2.inputMultiplierChange(-2);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 119
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 125
									}
								},
								"-"
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 126
									}
								},
								"2"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -3 ? "selected" : ""),
								onClick: function onClick() {
									_this2.inputMultiplierChange(-3);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 128
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 134
									}
								},
								"-"
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 135
									}
								},
								"3"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -10 ? "selected" : ""),
								onClick: function onClick() {
									_this2.inputMultiplierChange(-10);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 137
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 143
									}
								},
								"-"
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 144
									}
								},
								"10"
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"div",
						{
							className: "icon",
							onClick: function onClick() {
								_this2.inputValueSubmit();
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 147
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-plus", __source: {
								fileName: _jsxFileName,
								lineNumber: 153
							}
						})
					)
				)
			);
		}
	}]);

	return Query;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		filters: state.filters.length ? state.filters : ownProps.filters
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {
		dispatch_filterAdd: function dispatch_filterAdd(filter) {
			dispatch(__WEBPACK_IMPORTED_MODULE_8__data_actions__["a" /* filterAdd */](filter));
		}
	};
};
var ConnectedQuery = Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Query);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedQuery);

/***/ })

};
//# sourceMappingURL=0.bcbb2b4c0831683a07b7.hot-update.js.map