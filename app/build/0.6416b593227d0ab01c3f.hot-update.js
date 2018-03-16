exports.id = 0;
exports.modules = {

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Query__ = __webpack_require__("./src/components/search/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__DropdownLink__ = __webpack_require__("./src/components/search/DropdownLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Filters__ = __webpack_require__("./src/components/search/Filters.js");









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
				return _this.props.jobs.length;
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
			// make Array
			var Jobs = [];
			if (jobs) {
				var i = 0;
				// limit results on page - soon add pagination or auto-loading on scroll
				while (i < 100) {
					// job = current item
					var job = jobs[i];
					if ((typeof job === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(job)) !== "object") {
						break;
					}
					// job.rating
					var rating = job._rating - 1000;
					var Rating = null;
					if (rating > 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"b",
							{ className: "rating plus", __source: {
									fileName: _jsxFileName,
									lineNumber: 109
								}
							},
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 110
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
									lineNumber: 117
								}
							},
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 118
								}
							}),
							rating
						);
					}
					// job.etc
					// let locArr = job.location.split(",");
					// job.location = locArr.reduce((a, b) => {
					// 	if (a.trim().length > 4 && a.length > b.length && !/[0-9]+/.test(a)) {
					// 		return a;
					// 	} else {
					// 		return b;
					// 	}
					// });
					// add to view
					Jobs.push(__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
						"div",
						{ key: job._id + i, className: "result " + (i === 0 ? " first" : ""), __source: {
								fileName: _jsxFileName,
								lineNumber: 134
							}
						},
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 135
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
									lineNumber: 136
								}
							},
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
								"span",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 137
									}
								},
								Rating
							),
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
								"span",
								{ className: "location", __source: {
										fileName: _jsxFileName,
										lineNumber: 138
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-navigation", __source: {
										fileName: _jsxFileName,
										lineNumber: 139
									}
								}),
								" ",
								job.location
							),
							__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
								"span",
								{ className: "pills", __source: {
										fileName: _jsxFileName,
										lineNumber: 141
									}
								},
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
									"span",
									{ className: "pill", __source: {
											fileName: _jsxFileName,
											lineNumber: 142
										}
									},
									__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-check", __source: {
											fileName: _jsxFileName,
											lineNumber: 143
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 143
											}
										},
										"applied"
									)
								),
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
									"span",
									{ className: "pill", __source: {
											fileName: _jsxFileName,
											lineNumber: 145
										}
									},
									__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
											fileName: _jsxFileName,
											lineNumber: 146
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 146
											}
										},
										"intrigued"
									)
								),
								__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
									"span",
									{ className: "pill", __source: {
											fileName: _jsxFileName,
											lineNumber: 148
										}
									},
									__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", { className: "icon-delete", __source: {
											fileName: _jsxFileName,
											lineNumber: 149
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 149
											}
										},
										"ignored"
									)
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
						lineNumber: 160
					}
				},
				__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
					"div",
					{ className: "queries", __source: {
							fileName: _jsxFileName,
							lineNumber: 168
						}
					},
					__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
						"div",
						{ className: "queries_content", __source: {
								fileName: _jsxFileName,
								lineNumber: 169
							}
						},
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__DropdownLink__["a" /* default */], { area: this.props.area, __source: {
								fileName: _jsxFileName,
								lineNumber: 170
							}
						}),
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__Query__["a" /* default */], { placeholder: "Search " + this.renderResultsCount() + " results...", __source: {
								fileName: _jsxFileName,
								lineNumber: 171
							}
						}),
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
							"p",
							{ className: "moreOptions", __source: {
									fileName: _jsxFileName,
									lineNumber: 172
								}
							},
							"..."
						),
						__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__Filters__["a" /* default */], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 173
							}
						})
					)
				),
				__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(
					"div",
					{ className: "results", __source: {
							fileName: _jsxFileName,
							lineNumber: 176
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

/***/ })

};
//# sourceMappingURL=0.6416b593227d0ab01c3f.hot-update.js.map