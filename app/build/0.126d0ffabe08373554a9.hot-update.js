exports.id = 0;
exports.modules = {

/***/ "./src/components/search/Filters.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Filters_js__ = __webpack_require__("./src/components/search/styled/Filters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_actions__ = __webpack_require__("./src/data/actions/index.js");





var _jsxFileName = "/www/jsjobs/app/src/components/search/Filters.js";
/*jshint esversion: 6 */



/* redux */


/* 
	Component 
*/

var Filters = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Filters, _Component);

	function Filters() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Filters);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Filters.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Filters)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Filters, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var filters = this.props.area.filters;
			// filter the filters
			var Filters = [];

			var _loop = function _loop(fil) {
				var filter = filters[fil];
				// const FilterMultipliers = [];
				// const FilterOperator = filter.multiplier > 0 ? <span className="icon-plus" /> : <span className="icon-minus" />;
				// console.log("fil", fil, FilterOperator);
				// let m = 0;
				// while (m < filter.multiplier) {
				// 	FilterMultipliers.push(<b key={"op" + m}>{FilterOperator}</b>);
				// 	m++;
				// }
				// filter.multiplier = parseInt(filter.multiplier);
				Filters.push(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ key: fil, className: "filter" + (filter.multiplier > 0 ? " plus" : " minus"), __source: {
							fileName: _jsxFileName,
							lineNumber: 28
						}
					},
					filter.multiplier !== 0 ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 30
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"span",
							{ className: "value", __source: {
									fileName: _jsxFileName,
									lineNumber: 31
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"i",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 32
									}
								},
								"\""
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"b",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 33
									}
								},
								filter.value.replace(/\\\\/g, "\\").replace(/\\\\/g, "").replace(/\|/g, " | ")
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"i",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 39
									}
								},
								"\""
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"span",
							{ className: "multiplier_text", __source: {
									fileName: _jsxFileName,
									lineNumber: 41
								}
							},
							filter.multiplier > 0 ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 42
								}
							}) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 42
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"b",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 43
									}
								},
								Math.abs(filter.multiplier)
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
							className: "delete icon-delete",
							onClick: function onClick() {
								_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_9__data_actions__["c" /* my_filter_remove */](filter, _this2.props.area_key));
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 45
							}
						})
					) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{ className: "value example", __source: {
								fileName: _jsxFileName,
								lineNumber: 53
							}
						},
						filter.value
					)
				));
			};

			for (var fil in filters) {
				_loop(fil);
			}
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_Filters_js__["a" /* Filters */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 59
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ className: "filters", __source: {
							fileName: _jsxFileName,
							lineNumber: 60
						}
					},
					Filters
				)
			);
		}
	}]);

	return Filters;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

var mapStateToProps = function mapStateToProps(data, ownProps) {
	var data_area = data.areas[ownProps.area_key];
	return {
		area: {
			filters: data.my.filters.length ? data.my.filters : []
		}
	};
};
var ConnectedFilters = Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__["connect"])(mapStateToProps)(Filters);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedFilters);

/***/ }),

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


/* redux */



// this will be useful to "reset" the setState
var constructInitialState = function constructInitialState() {
	return {
		qInput_value: "",
		qInput_multiplier: 1
	};
};

/* 
	Component 
*/

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

		_this.multiplierClick = function (multiplier) {
			// set value:
			_this.setState({ qInput_multiplier: multiplier });
			// on "closing", second click, submit value
			if (_this.query_group.classList.contains("active") && _this.refs.qInput.value) {
				_this.inputValueSubmit(multiplier); // pass multiplier, because setState is Async, and doesnt change fast enough
			}
			// on "opening", initial click, open the dropdown
			_this.query_group.classList.toggle("active");
		};

		_this.inputValueSubmit = function (multiplier) {
			// change it in multiplierClick, then call this to finalize, or just call this on its own, to send current value
			_this.props.dispatch(__WEBPACK_IMPORTED_MODULE_8__data_actions__["b" /* my_filter_add */]({ value: _this.refs.qInput.value, multiplier: multiplier || _this.state.qInput_multiplier, property: _this.props.queryProperty }, _this.props.area_key));
			_this.setState(constructInitialState(_this.props));
		};

		_this.state = constructInitialState();
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Query, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			// slight UX addition:
			setTimeout(function () {
				_this2.refs.qInput.focus();
			}, 300);
		}
	}, {
		key: "render",
		value: function render() {
			var _this3 = this;

			// value + multiplier
			var multiplier = this.state.qInput_multiplier;
			var placeholder = this.props.placeholder || "Search description...";
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_6__styled_Query_js__["a" /* Query */],
				{
					className: "query_group " + (this.state.qInput_value || this.props.expanded ? " expanded " : ""),
					innerRef: function innerRef(el) {
						_this3.query_group = el;
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 54
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", {
					className: "query_input " + (this.props.isLoading ? " isLoading" : ""),
					placeholder: placeholder,
					ref: "qInput",
					onChange: function onChange(e) {
						_this3.inputValueChange(e);
					},
					value: this.state.qInput_value,
					onKeyPress: function onKeyPress(e) {
						if ((e.charCode || e.keyCode) === 13) {
							_this3.inputValueSubmit();
						}
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 60
					}
				}),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ className: "query_select selected_" + (multiplier > 0 ? "positive" : "negative"), __source: {
							fileName: _jsxFileName,
							lineNumber: 74
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
						className: "overlay",
						onClick: function onClick() {
							_this3.query_group.classList.remove("active");
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 75
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"div",
						{ className: "dropdown", __source: {
								fileName: _jsxFileName,
								lineNumber: 81
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 10 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(10);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 82
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 88
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 89
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
									_this3.multiplierClick(3);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 91
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 97
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 98
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
									_this3.multiplierClick(2);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 100
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 106
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 107
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
									_this3.multiplierClick(1);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 109
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 115
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 116
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
									_this3.multiplierClick(-1);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 118
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 124
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 125
									}
								},
								"-1"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -2 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-2);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 127
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 133
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 134
									}
								},
								"-2"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -3 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-3);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 136
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 142
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 143
									}
								},
								"-3"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -10 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-10);
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 145
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 151
								}
							}),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 152
									}
								},
								"-10"
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"div",
						{
							className: "icon",
							onClick: function onClick() {
								_this3.inputValueSubmit();
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 155
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-top-add", __source: {
								fileName: _jsxFileName,
								lineNumber: 161
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
	return {};
};
var ConnectedQuery = Object(__WEBPACK_IMPORTED_MODULE_7_react_redux__["connect"])(mapStateToProps)(Query);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedQuery);

/***/ }),

/***/ "./src/components/search/Results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__("babel-runtime/helpers/typeof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styled_Results_js__ = __webpack_require__("./src/components/search/styled/Results.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_actions__ = __webpack_require__("./src/data/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Query__ = __webpack_require__("./src/components/search/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Links__ = __webpack_require__("./src/components/search/Links.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Filters__ = __webpack_require__("./src/components/search/Filters.js");







var _jsxFileName = "/www/jsjobs/app/src/components/search/Results.js";



/* redux */


/* components */



/* 
	component 
*/

var Results = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Results, _Component);

	function Results() {
		var _ref;

		var _temp, _this, _ret;

		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Results);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Results.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.sort_items_object_to_array = function (items_object) {
			/*
   	filter the filters (needs refactor?)
   */
			var filters = _this.props.filters.map(function (filter) {
				filter.value = filter.value.replace(/ \| /g, "|");
				filter.value = filter.value.replace(/\?/g, "\\?");
				filter.value = filter.value.replace(/\+/g, "\\+");
				filter.value = filter.value.replace(/\]\\\+/g, "]+");
				filter.value = filter.value.replace(/\*/g, "\\*");
				filter.value = filter.value.replace(/\$/g, "\\$");
				return filter;
			});
			/*
   	iterate items
   */
			var items = [];
			for (var i in items_object) {
				var item = items_object[i];
				if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(item)) !== "object") {
					continue;
				}
				item._status = item._status || "new";
				item._rating = 1000;
				// use filters
				for (var fil in filters) {
					var filter = filters[fil];
					if (filter.multiplier) {
						var reg = RegExp("" + filter.value + "", "i");
						var match = reg.test(" " + item.location + " " + item.company + " " + item.name + " " + item.text + " ");
						if (match) {
							item._rating += filter.multiplier;
						}
					}
				}
				// except
				if (item._status === _this.props.items_status) {
					if (!filters.length || item._rating >= 1000 + filters.length) {
						items.push(item);
					}
				}
			}
			items.sort(function (a, b) {
				return b.posted > a.posted;
			});
			items.sort(function (a, b) {
				return b._rating > a._rating;
			});
			return items;
		}, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Results, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["a" /* my_area */](this.props.area_key));
		}
		/*
  	view
  */

	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var area_key = this.props.area_key;
			var items_array = this.sort_items_object_to_array(this.props.items);
			// make Array
			var Items = [];
			if (items_array) {
				var i = 0;
				// limit items on page - soon add pagination or auto-loading on scroll

				var _loop = function _loop() {
					// item = current item
					var item = items_array[i];
					if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(item)) !== "object") {
						i++;
						return "continue";
					}
					// item.rating
					var rating = item._rating - 1000;
					var Rating = null;
					if (rating > 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating plus", __source: {
									fileName: _jsxFileName,
									lineNumber: 92
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 93
								}
							}),
							rating
						);
					}
					if (rating < 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating minus", __source: {
									fileName: _jsxFileName,
									lineNumber: 100
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 101
								}
							}),
							rating
						);
					}
					// add to view
					Items.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ key: item._id + i, className: "item ", __source: {
								fileName: _jsxFileName,
								lineNumber: 108
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 109
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"a",
								{ href: item.link, target: "_blank", __source: {
										fileName: _jsxFileName,
										lineNumber: 110
									}
								},
								item.name
							)
						),
						" ",
						"- ",
						item.text,
						" \xA0",
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "meta", __source: {
									fileName: _jsxFileName,
									lineNumber: 115
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 116
									}
								},
								"#",
								i,
								" - ",
								item._status
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 119
									}
								},
								Rating
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "location", __source: {
										fileName: _jsxFileName,
										lineNumber: 120
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://www.google.com/maps/place/" + item.location + "", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 121
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-navigation", __source: {
											fileName: _jsxFileName,
											lineNumber: 122
										}
									}),
									" ",
									item.location
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "company", __source: {
										fileName: _jsxFileName,
										lineNumber: 125
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://google.com/search?q=" + item.company + " company glassdoor", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 126
										}
									},
									item.company
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "pills", __source: {
										fileName: _jsxFileName,
										lineNumber: 130
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill",
										onClick: function onClick() {
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["d" /* my_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, { _status: "applied" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 131
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-check", __source: {
											fileName: _jsxFileName,
											lineNumber: 137
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 137
											}
										},
										"applied"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill",
										onClick: function onClick() {
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["d" /* my_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, { _status: "intrigued" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 139
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
											fileName: _jsxFileName,
											lineNumber: 145
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 145
											}
										},
										"intrigued"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill",
										onClick: function onClick() {
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["d" /* my_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, { _status: "ignored" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 147
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-delete", __source: {
											fileName: _jsxFileName,
											lineNumber: 153
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 153
											}
										},
										"ignored"
									)
								)
							)
						)
					));
					i++;
				};

				while (i < 100) {
					var _ret2 = _loop();

					if (_ret2 === "continue") continue;
				}
			}
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__styled_Results_js__["a" /* Results */],
				{ className: "Items " + (this.props.className || ""), __source: {
						fileName: _jsxFileName,
						lineNumber: 163
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "queries", __source: {
							fileName: _jsxFileName,
							lineNumber: 164
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__Links__["a" /* default */], { area_key: this.props.area_key, __source: {
							fileName: _jsxFileName,
							lineNumber: 165
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Query__["a" /* default */], { area_key: this.props.area_key, expanded: this.state.searchQueryExpanded, placeholder: (this.props.filters.length ? "Filter" : "Search") + " " + items_array.length + " " + (this.props.filters.length ? "results" : "jobs") + "...", __source: {
							fileName: _jsxFileName,
							lineNumber: 166
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__Filters__["a" /* default */], { area_key: this.props.area_key, __source: {
							fileName: _jsxFileName,
							lineNumber: 167
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ className: "moreOptions", ref: "moreOptions", __source: {
								fileName: _jsxFileName,
								lineNumber: 168
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "moreOptions_content", __source: {
									fileName: _jsxFileName,
									lineNumber: 169
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"p",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 170
									}
								},
								"Tip: use RegEx in search term. For example: ",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("br", {
									__source: {
										fileName: _jsxFileName,
										lineNumber: 171
									}
								}),
								"\"",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"b",
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 171
										}
									},
									"[^a-zA-Z]+C[^a-zA-Z]+"
								),
								"\" or \"",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"b",
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 171
										}
									},
									"java[^s]+ | JSP"
								),
								"\""
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"p",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 173
									}
								},
								"Then, choose a +/- thumbs up/down value, to weigh its importance."
							)
						),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"p",
							{ className: "moreOptions_link", __source: {
									fileName: _jsxFileName,
									lineNumber: 175
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{
									onClick: function onClick(e) {
										_this2.refs.moreOptions.classList.toggle("active");
										_this2.setState({ searchQueryExpanded: !_this2.state.searchQueryExpanded });
									},
									__source: {
										fileName: _jsxFileName,
										lineNumber: 176
									}
								},
								"..."
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "content", __source: {
							fileName: _jsxFileName,
							lineNumber: 187
						}
					},
					Items
				)
			);
		}
	}]);

	return Results;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/*
	Connect redux data
*/


var mapStateToProps = function mapStateToProps(data, ownProps) {
	var data_area = data.areas[ownProps.area_key || ""];
	var newProps = {
		items: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, data.my.items, ownProps.items, data_area.items) || {},
		items_status: data.my.items_status || "",
		filters: data.my.filters || []
	};
	return newProps;
};
var ConnectedResults = Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps)(Object(__WEBPACK_IMPORTED_MODULE_9_react_router__["withRouter"])(Results));

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedResults);

/***/ }),

/***/ "./src/data/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export area_status_change */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return my_area; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return my_item_save; });
/* unused harmony export area_item_add */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return my_filter_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return my_filter_remove; });
var area_status_change = function area_status_change(status, area_key) {
	return {
		type: "area_status_change",
		status: status,
		area_key: area_key
	};
};
// export const area_items_set = (items, area_key) => {
// 	return {
// 		type: "area_items_set",
// 		items,
// 		area_key
// 	};
// };
var my_area = function my_area(area_key) {
	return {
		type: "my_area",
		area_key: area_key
	};
};
var my_item_save = function my_item_save(item, area_key) {
	return {
		type: "my_item_save",
		item: item,
		area_key: area_key
	};
};
var area_item_add = function area_item_add(item, area_key) {
	return {
		type: "area_item_add",
		item: item,
		area_key: area_key
	};
};
var my_filter_add = function my_filter_add(filter, area_key) {
	return {
		type: "my_filter_add",
		filter: filter,
		area_key: area_key
	};
};
var my_filter_remove = function my_filter_remove(filter, area_key) {
	return {
		type: "my_filter_remove",
		filter: filter,
		area_key: area_key
	};
};

/***/ })

};
//# sourceMappingURL=0.126d0ffabe08373554a9.hot-update.js.map