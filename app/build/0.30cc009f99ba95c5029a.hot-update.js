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
					className: "query_group" + (this.state.qInput_value ? " hasValue" : ""),
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

/***/ }),

/***/ "./src/components/search/Results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__ = __webpack_require__("babel-runtime/helpers/typeof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__styled_Results_js__ = __webpack_require__("./src/components/search/styled/Results.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_actions__ = __webpack_require__("./src/data/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_Header2__ = __webpack_require__("./src/components/header/Header2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Query__ = __webpack_require__("./src/components/search/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Filters__ = __webpack_require__("./src/components/search/Filters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__SearchPlus__ = __webpack_require__("./src/components/search/SearchPlus.js");









var _jsxFileName = "/www/jsjobs/app/src/components/search/Results.js";
/*jshint esversion: 6 */



/* redux */


/* components */




/* 
	Component 
*/

var Results = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_8_babel_runtime_helpers_inherits___default()(Results, _Component);

	function Results() {
		var _ref;

		var _temp, _this, _ret;

		__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, Results);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Results.__proto__ || __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call.apply(_ref, [this].concat(args))), _this), _this.rateJobs = function (jobs) {
			// filter the filters (needs refactor?)
			var filters = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()({}, _this.props.filters);
			for (var fil in filters) {
				var filter = filters[fil];
				var value = filter.value;
				value = value.replace(/ \| /g, "|");
				value = value.replace(/\?/g, "\\?");
				value = value.replace(/\+/g, "\\+");
				value = value.replace(/\]\\\+/g, "]+");
				value = value.replace(/\*/g, "\\*");
				value = value.replace(/\$/g, "\\$");
				filters[fil].value = value;
			}
			// iterate results
			// jobs = jobs.slice(0, 8);
			jobs = jobs.map(function (job) {
				job._status = job._status || "new";
				job._rating = 1000;
				// use filters
				for (var _fil in filters) {
					var _filter = filters[_fil];
					if (_filter.multiplier) {
						var reg = RegExp("" + _filter.value + "", "i");
						var match = reg.test(" " + job.name + " " + job.text + " ");
						if (match) {
							job._rating += _filter.multiplier;
						}
					}
				}

				return job;
			});
			jobs.sort(function (a, b) {
				return b._rating - a._rating;
			});
			jobs = jobs.slice(0, 100);
			return jobs;
		}, _this.renderResultsCount = function () {
			if (_this.props.jobs.length !== 0 && _this.props.jobs.length !== 50) {
				return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 83
						}
					},
					_this.props.jobs.length
				);
			} else {
				return null;
			}
		}, _temp), __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
	}

	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(Results, [{
		key: "componentDidMount",
		value: function () {
			var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
				var in_area, jobsUrl, jobsUrl_local, res, data, _res, json;

				return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								in_area = this.props.area || "us";
								// CDN => data
								// API => json.data

								jobsUrl = "https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/" + in_area + ".json"; // Cloudfront

								jobsUrl_local = "http://localhost:1080/api/v1/jobs/" + in_area + ".json"; // local API

								_context.prev = 3;
								_context.next = 6;
								return fetch(jobsUrl);

							case 6:
								res = _context.sent;
								_context.next = 9;
								return res.json();

							case 9:
								data = _context.sent;

								// console.log("componentDidMount fetched " + data.length + " results from " + jobsUrl);
								this.props.dispatch_jobsAdd(data || []);
								_context.next = 28;
								break;

							case 13:
								_context.prev = 13;
								_context.t0 = _context["catch"](3);
								_context.prev = 15;
								_context.next = 18;
								return fetch(jobsUrl_local);

							case 18:
								_res = _context.sent;
								_context.next = 21;
								return _res.json();

							case 21:
								json = _context.sent;

								// console.log("componentDidMount fetched " + json.data.length + " results from " + jobsUrl_local);
								this.props.dispatch_jobsAdd(json.data || []);
								_context.next = 28;
								break;

							case 25:
								_context.prev = 25;
								_context.t1 = _context["catch"](15);

								// console.error("componentDidMount fetch failed: " + jobsUrl_local + "");
								this.props.dispatch_jobsAdd([]);

							case 28:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this, [[3, 13], [15, 25]]);
			}));

			function componentDidMount() {
				return _ref2.apply(this, arguments);
			}

			return componentDidMount;
		}()
	}, {
		key: "render",
		value: function render() {
			var jobs = this.props.jobs;
			if (jobs) {
				jobs = this.rateJobs(jobs);
			}
			// get on with it...
			var Jobs = [];
			if (jobs) {
				var i = 0;
				while (i < 100) {
					var job = jobs[i];
					if ((typeof job === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(job)) !== "object") {
						break;
					}
					var rating = job._rating - 1000;
					var Rating = null;
					if (rating > 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"b",
							{ className: "rating plus", __source: {
									fileName: _jsxFileName,
									lineNumber: 106
								}
							},
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 107
								}
							}),
							rating
						);
					}
					if (rating < 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"b",
							{ className: "rating minus", __source: {
									fileName: _jsxFileName,
									lineNumber: 114
								}
							},
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 115
								}
							}),
							rating
						);
					}
					Jobs.push(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
						"div",
						{ key: job._id + i, className: "result " + (i === 0 ? " first" : ""), __source: {
								fileName: _jsxFileName,
								lineNumber: 121
							}
						},
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 122
								}
							},
							job.name
						),
						" - ",
						job.text,
						" \xA0",
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"div",
							{ className: "meta", __source: {
									fileName: _jsxFileName,
									lineNumber: 123
								}
							},
							Rating,
							"\xA0",
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
								"span",
								{ className: "location", __source: {
										fileName: _jsxFileName,
										lineNumber: 126
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-navigation", __source: {
										fileName: _jsxFileName,
										lineNumber: 127
									}
								}),
								" ",
								job.location
							),
							" ",
							"\xA0",
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
								"span",
								{ className: "pill", __source: {
										fileName: _jsxFileName,
										lineNumber: 130
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-check", __source: {
										fileName: _jsxFileName,
										lineNumber: 131
									}
								}),
								" ",
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
									"span",
									{ className: "text", __source: {
											fileName: _jsxFileName,
											lineNumber: 131
										}
									},
									"applied"
								)
							),
							"\xA0",
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
								"span",
								{ className: "pill", __source: {
										fileName: _jsxFileName,
										lineNumber: 134
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
										fileName: _jsxFileName,
										lineNumber: 135
									}
								}),
								" ",
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
									"span",
									{ className: "text", __source: {
											fileName: _jsxFileName,
											lineNumber: 135
										}
									},
									"intrigued"
								)
							),
							"\xA0",
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
								"span",
								{ className: "pill", __source: {
										fileName: _jsxFileName,
										lineNumber: 138
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-delete", __source: {
										fileName: _jsxFileName,
										lineNumber: 139
									}
								}),
								" ",
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
									"span",
									{ className: "text", __source: {
											fileName: _jsxFileName,
											lineNumber: 139
										}
									},
									"ignored"
								)
							)
						)
					));
					i++;
				}
			}
			console.log("new Results ", this.props.area);
			return __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_11__styled_Results_js__["a" /* Results */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 149
					}
				},
				__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__header_Header2__["a" /* default */], { area: this.props.area, __source: {
						fileName: _jsxFileName,
						lineNumber: 157
					}
				}),
				__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
					"div",
					{ className: "queries", __source: {
							fileName: _jsxFileName,
							lineNumber: 158
						}
					},
					__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
						"div",
						{ className: "queries_content", __source: {
								fileName: _jsxFileName,
								lineNumber: 159
							}
						},
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__Query__["a" /* default */], { queryProperty: "title", __source: {
								fileName: _jsxFileName,
								lineNumber: 160
							}
						}),
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"p",
							{ className: "moreOptions", __source: {
									fileName: _jsxFileName,
									lineNumber: 161
								}
							},
							"more options..."
						),
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__Filters__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 162
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
					"div",
					{ className: "results", __source: {
							fileName: _jsxFileName,
							lineNumber: 165
						}
					},
					Jobs
				)
			);
		}
	}]);

	return Results;
}(__WEBPACK_IMPORTED_MODULE_9_react__["Component"]);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		jobs: state.jobs.length ? state.jobs : ownProps.jobs,
		filters: state.filters
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {
		dispatch_jobsAdd: function dispatch_jobsAdd(jobs) {
			dispatch(__WEBPACK_IMPORTED_MODULE_13__data_actions__["c" /* jobsAdd */](jobs));
		}
	};
};
var ConnectedResults = Object(__WEBPACK_IMPORTED_MODULE_12_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Results);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedResults);

/***/ }),

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
			selectedOption: 1
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(App, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var options = [100, 10, 1, -1, -10, -100];
			var Options = [];
			options.forEach(function (value) {
				Options.push(__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						key: value,
						onClick: function onClick() {
							console.log("label clicked");
							_this2.setState({ selectedOption: value });
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 21
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-" + (value > 0 ? "up" : "down"), __source: {
							fileName: _jsxFileName,
							lineNumber: 28
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 29
							}
						},
						value
					)
				));
			});
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_SearchPlus_js__["a" /* SearchPlus */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 34
					}
				},
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { type: "text", placeholder: "Search...", __source: {
						fileName: _jsxFileName,
						lineNumber: 35
					}
				}),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 36
						}
					},
					this.state.selectedOption
				),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"span",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 37
						}
					},
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{ className: "dropdown", __source: {
								fileName: _jsxFileName,
								lineNumber: 38
							}
						},
						Options
					)
				)
			);
		}
	}]);

	return App;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* unused harmony default export */ var _unused_webpack_default_export = (App);

/***/ })

};
//# sourceMappingURL=0.30cc009f99ba95c5029a.hot-update.js.map