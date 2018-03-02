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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_getAPI__ = __webpack_require__("./src/lib/getAPI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Query_js__ = __webpack_require__("./src/components/search/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_actions__ = __webpack_require__("./src/data/actions/index.js");







var _jsxFileName = "/www/ps-jobs/app/src/components/search/Results.js";
/*jshint esversion: 6 */





/* redux */



/* 
	Component 
*/

var Results = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Results, _Component);

	function Results() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Results);

		var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Results.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call(this));

		_this.state = {
			jobs: []
		};
		return _this;
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
								return fetch(Object(__WEBPACK_IMPORTED_MODULE_10__lib_getAPI__["a" /* getAPIHostname */])() + "/api/v1/jobs?text=&start=0&limit=10000");

							case 2:
								res = _context.sent;
								_context.next = 5;
								return res.json();

							case 5:
								json = _context.sent;

								this.setState({ jobs: json.data || [], jobs_count: json.data.length || 0 });

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
			jobs = jobs.map(function (item) {
				item.status = item.status || "new";
				return item;
			});
			return jobs;
		}
	}, {
		key: "render",
		value: function render() {
			var jobs_count = this.state.jobs_count; // not jobs.length on purpose
			var jobs = this.state.jobs.length ? this.state.jobs : this.props.jobs;
			jobs = this.filterJobs(jobs);
			// get on with it...
			var Jobs = [];
			if (jobs) {
				jobs.forEach(function (job, i) {
					Jobs.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ key: job._id, __source: {
								fileName: _jsxFileName,
								lineNumber: 43
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 44
								}
							},
							job.text
						),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"sup",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 45
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
						lineNumber: 51
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"h2",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 52
						}
					},
					"Query:"
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Query_js__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 53
					}
				}),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"h2",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 54
						}
					},
					" "
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"h2",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 56
						}
					},
					"Results: ",
					jobs_count
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 57
						}
					},
					Jobs
				)
			);
		}
	}]);

	return Results;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		active: ownProps.filter === state.visibilityFilter
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {
		onClick: function onClick() {
			// dispatch(actions.setVisibilityFilter(ownProps.filter));
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
//# sourceMappingURL=0.b13daa8efa79dce4e116.hot-update.js.map