exports.id = 0;
exports.modules = {

/***/ "./src/components/search/Results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styled_Results_js__ = __webpack_require__("./src/components/search/styled/Results.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_getAPI__ = __webpack_require__("./src/modules/getAPI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mobx__ = __webpack_require__("mobx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_mobx__);







var _jsxFileName = "/www/ps-jobs/app/src/components/search/Results.js";






// const query = {
// 	start: 0,
// 	limit: 50
// };
// const queryAdvance = function() {
// 	query.start += query.limit;
// };

var Query = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Query, _React$Component);

	function Query() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Query);

		return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Query.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Query)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Query, [{
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
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				"div",
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 24
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"form",
					{ onSubmit: this.handleUsernameSubmission, __source: {
							fileName: _jsxFileName,
							lineNumber: 25
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("input", { placeholder: "skill...", ref: "skill", __source: {
							fileName: _jsxFileName,
							lineNumber: 26
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("input", { type: "submit", value: "Search", __source: {
							fileName: _jsxFileName,
							lineNumber: 27
						}
					})
				)
			);
		}
	}]);

	return Query;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

var Results = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Results, _Component);

	// static async getInitialProps({ match }) {
	// 	const res = await fetch(getAPIHostname() + `/api/v1/jobs?text=&start=${query.start}&limit=${query.limit}`);
	// 	const json = await res.json();
	// 	return { jobs_count: json.results, jobs: json.data || [] };
	// }
	function Results() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Results);

		var _this2 = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Results.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call(this));

		_this2.state = {
			jobs: []
		};
		return _this2;
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Results, [{
		key: "componentWillMount",
		value: function () {
			var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
				var res, json;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return fetch(Object(__WEBPACK_IMPORTED_MODULE_10__modules_getAPI__["a" /* getAPIHostname */])() + "/api/v1/jobs?text=&start=0&limit=10000");

							case 2:
								res = _context.sent;
								_context.next = 5;
								return res.json();

							case 5:
								json = _context.sent;

								this.setState({ jobs: json.data || [] });

							case 7:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function componentWillMount() {
				return _ref.apply(this, arguments);
			}

			return componentWillMount;
		}()
	}, {
		key: "filterJobs",
		value: function filterJobs(jobs) {
			return jobs;
		}
	}, {
		key: "render",
		value: function render() {
			var jobs = this.state.jobs || this.props.jobs;
			jobs = this.filterJobs(jobs);
			// get on with it...
			var Jobs = [];
			if (jobs) {
				jobs.forEach(function (job, i) {
					Jobs.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ key: job._id, __source: {
								fileName: _jsxFileName,
								lineNumber: 65
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 66
								}
							},
							job.text
						),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"sup",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 67
								}
							},
							job.location
						)
					));
				});
			}
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_9__styled_Results_js__["a" /* Results */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 73
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"h2",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 74
						}
					},
					"Query:"
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Query, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 75
					}
				}),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"h2",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 76
						}
					},
					" "
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"h2",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 78
						}
					},
					"Results: ",
					jobs.length
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 79
						}
					},
					Jobs
				)
			);
		}
	}]);

	return Results;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Results);

/***/ })

};
//# sourceMappingURL=0.2dddd9e673229c7affde.hot-update.js.map