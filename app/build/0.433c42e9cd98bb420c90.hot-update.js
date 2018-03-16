exports.id = 0;
exports.modules = {

/***/ "./src/components/search/DropdownLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_DropdownLink_js__ = __webpack_require__("./src/components/search/styled/DropdownLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_actions__ = __webpack_require__("./src/data/actions/index.js");






var _jsxFileName = "/www/jsjobs/app/src/components/search/DropdownLink.js";
/*jshint esversion: 6 */



/* redux */


/* custom */
// import UIDropdownLink from "components/ui/DropdownLink";

/* 
	Component 
*/

var DropdownLink = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(DropdownLink, _React$Component);

	function DropdownLink() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, DropdownLink);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DropdownLink.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(DropdownLink)).call(this));

		_this.toggleOpen = function (multiplier) {
			_this.refs.query_group.classList.toggle("opened");
		};

		_this.componentWillMount = function () {
			_this.setState({ option_selected: _this.state.options[_this.props.option] });
		};

		_this.renderOptions = function () {
			var Options = [];
			for (var url in _this.state.options) {
				var title = _this.state.options[url];
				Options.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
					{ className: "option", to: url, key: url, __source: {
							fileName: _jsxFileName,
							lineNumber: 37
						}
					},
					title
				));
			}
		};

		_this.state = {
			option_placeholder: "DropdownLink region...",
			options: {
				"/in/la": "in LA (Southern California)",
				"/in/nyc": "in NYC (New York City)",
				"/in/denver": "in NYC (Colorado)"
			}
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(DropdownLink, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_DropdownLink_js__["a" /* DropdownLink */],
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 45
					}
				}),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{
						className: "query_group",
						onClick: function onClick() {
							_this2.toggleOpen(1);
						},
						ref: "query_group",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 46
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"div",
						{ className: "query_select", __source: {
								fileName: _jsxFileName,
								lineNumber: 54
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
							"div",
							{ className: "option value", __source: {
									fileName: _jsxFileName,
									lineNumber: 55
								}
							},
							this.state.option_selected || this.state.option_placeholder
						),
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
							"div",
							{ className: "dropdown", __source: {
									fileName: _jsxFileName,
									lineNumber: 56
								}
							},
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
								{ className: "option", to: "/in/la", __source: {
										fileName: _jsxFileName,
										lineNumber: 57
									}
								},
								"in LA (Southern California)"
							),
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
								{ className: "option", to: "/in/nyc", __source: {
										fileName: _jsxFileName,
										lineNumber: 60
									}
								},
								"in NYC (New York City)"
							),
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
								{ className: "option", to: "/in/denver", __source: {
										fileName: _jsxFileName,
										lineNumber: 63
									}
								},
								"in Denver (Colorado)"
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"span",
						{ className: "query_button", __source: {
								fileName: _jsxFileName,
								lineNumber: 68
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-select", __source: {
								fileName: _jsxFileName,
								lineNumber: 69
							}
						})
					)
				)
			);
		}
	}]);

	return DropdownLink;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		filters: state.filters.length ? state.filters : ownProps.filters
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {
		dispatch_filterAdd: function dispatch_filterAdd(filter) {
			// dispatch(actions.filterAdd(filter));
		}
	};
};
var ConnectedDropdownLink = Object(__WEBPACK_IMPORTED_MODULE_9_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(DropdownLink);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedDropdownLink);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__DropdownLink__ = __webpack_require__("./src/components/search/DropdownLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Filters__ = __webpack_require__("./src/components/search/Filters.js");









var _jsxFileName = "/www/jsjobs/app/src/components/search/Results.js";
/*jshint esversion: 6 */



/* redux */


/* components */




// import SearchPlus from "./SearchPlus";
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
							lineNumber: 84
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
									lineNumber: 107
								}
							},
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 108
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
									lineNumber: 115
								}
							},
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 116
								}
							}),
							rating
						);
					}
					Jobs.push(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
						"div",
						{ key: job._id + i, className: "result " + (i === 0 ? " first" : ""), __source: {
								fileName: _jsxFileName,
								lineNumber: 122
							}
						},
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 123
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
									lineNumber: 124
								}
							},
							Rating,
							"\xA0",
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
								"span",
								{ className: "location", __source: {
										fileName: _jsxFileName,
										lineNumber: 127
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-navigation", __source: {
										fileName: _jsxFileName,
										lineNumber: 128
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
										lineNumber: 131
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-check", __source: {
										fileName: _jsxFileName,
										lineNumber: 132
									}
								}),
								" ",
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
									"span",
									{ className: "text", __source: {
											fileName: _jsxFileName,
											lineNumber: 132
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
										lineNumber: 135
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
										fileName: _jsxFileName,
										lineNumber: 136
									}
								}),
								" ",
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
									"span",
									{ className: "text", __source: {
											fileName: _jsxFileName,
											lineNumber: 136
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
										lineNumber: 139
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-delete", __source: {
										fileName: _jsxFileName,
										lineNumber: 140
									}
								}),
								" ",
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
									"span",
									{ className: "text", __source: {
											fileName: _jsxFileName,
											lineNumber: 140
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
						lineNumber: 150
					}
				},
				__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__header_Header2__["a" /* default */], { area: this.props.area, __source: {
						fileName: _jsxFileName,
						lineNumber: 158
					}
				}),
				__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
					"div",
					{ className: "queries", __source: {
							fileName: _jsxFileName,
							lineNumber: 159
						}
					},
					__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
						"div",
						{ className: "queries_content", __source: {
								fileName: _jsxFileName,
								lineNumber: 160
							}
						},
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__DropdownLink__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 161
							}
						}),
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__Query__["a" /* default */], { queryProperty: "title", __source: {
								fileName: _jsxFileName,
								lineNumber: 162
							}
						}),
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"p",
							{ className: "moreOptions", __source: {
									fileName: _jsxFileName,
									lineNumber: 163
								}
							},
							"more options, tips..."
						),
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_17__Filters__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 164
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
					"div",
					{ className: "results", __source: {
							fileName: _jsxFileName,
							lineNumber: 167
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

/***/ "./src/components/search/SelectLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_SelectLink_js__ = __webpack_require__("./src/components/search/styled/SelectLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);






var _jsxFileName = "/www/jsjobs/app/src/components/search/SelectLink.js";
/*jshint esversion: 6 */



/* redux */

// import * as actions from "data/actions";
/* custom */
// import UISelect from "components/ui/Select";

/* 
	Component 
*/

var Select = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Select, _React$Component);

	function Select() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Select);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Select.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Select)).call(this));

		_this.toggleOpen = function (multiplier) {
			_this.refs.query_group.classList.toggle("opened");
		};

		_this.componentWillMount = function () {
			_this.setState({ option_selected: _this.state.options[_this.props.option] });
		};

		_this.renderOptions = function () {
			var Options = [];
			for (var url in _this.state.options) {
				var title = _this.state.options[url];
				Options.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
					{ className: "option", to: url, key: url, __source: {
							fileName: _jsxFileName,
							lineNumber: 37
						}
					},
					title
				));
			}
		};

		_this.state = {
			option_placeholder: "Select region...",
			options: {
				"/in/la": "in LA (Southern California)",
				"/in/nyc": "in NYC (New York City)",
				"/in/denver": "in NYC (Colorado)"
			}
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Select, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_SelectLink_js__["a" /* Select */],
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 45
					}
				}),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{
						className: "query_group",
						onClick: function onClick() {
							_this2.toggleOpen(1);
						},
						ref: "query_group",
						__source: {
							fileName: _jsxFileName,
							lineNumber: 46
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"div",
						{ className: "query_select", __source: {
								fileName: _jsxFileName,
								lineNumber: 54
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
							"div",
							{ className: "option value", __source: {
									fileName: _jsxFileName,
									lineNumber: 55
								}
							},
							this.state.option_selected || this.state.option_placeholder
						),
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
							"div",
							{ className: "dropdown", __source: {
									fileName: _jsxFileName,
									lineNumber: 56
								}
							},
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
								{ className: "option", to: "/in/la", __source: {
										fileName: _jsxFileName,
										lineNumber: 57
									}
								},
								"in LA (Southern California)"
							),
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
								{ className: "option", to: "/in/nyc", __source: {
										fileName: _jsxFileName,
										lineNumber: 60
									}
								},
								"in NYC (New York City)"
							),
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
								{ className: "option", to: "/in/denver", __source: {
										fileName: _jsxFileName,
										lineNumber: 63
									}
								},
								"in Denver (Colorado)"
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"span",
						{ className: "query_button", __source: {
								fileName: _jsxFileName,
								lineNumber: 68
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-select", __source: {
								fileName: _jsxFileName,
								lineNumber: 69
							}
						})
					)
				)
			);
		}
	}]);

	return Select;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		filters: state.filters.length ? state.filters : ownProps.filters
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {
		dispatch_filterAdd: function dispatch_filterAdd(filter) {
			// dispatch(actions.filterAdd(filter));
		}
	};
};
var ConnectedSelect = Object(__WEBPACK_IMPORTED_MODULE_9_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Select);

/*
	Components
*/
/* unused harmony default export */ var _unused_webpack_default_export = (ConnectedSelect);

/***/ }),

/***/ "./src/components/search/styled/DropdownLink.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\ttext-align: center;\n"], ["\n\ttext-align: center;\n"]);




var DropdownLink = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);

/***/ })

};
//# sourceMappingURL=0.433c42e9cd98bb420c90.hot-update.js.map