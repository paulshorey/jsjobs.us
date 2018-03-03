exports.id = 0;
exports.modules = {

/***/ "./src/routes/404.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styled_Home_js__ = __webpack_require__("./src/routes/styled/Home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lib_getAPI__ = __webpack_require__("./src/lib/getAPI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");








var _jsxFileName = "/www/ps-jobs/app/src/routes/404.js";






var Home = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Home, _Component);

	function Home() {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Home);

		return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Home, [{
		key: "render",
		value: function render() {
			// get on with it...
			var Jobs = [];
			if (this.props && this.props.jobs) {
				this.props.jobs.forEach(function (job, i) {
					Jobs.push(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
						"div",
						{ key: job._id, __source: {
								fileName: _jsxFileName,
								lineNumber: 21
							}
						},
						__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
							"div",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 22
								}
							},
							job.text
						),
						__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
							"sup",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 23
								}
							},
							job.location
						)
					));
				});
			}
			return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_12__components_Layout_js__["a" /* default */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 29
					}
				},
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_10__styled_Home_js__["a" /* Home */],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 30
						}
					},
					__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
						"h2",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 31
							}
						},
						"Home search=\"",
						this.props.match.params.search,
						"\" results: ",
						this.props.jobs_count
					),
					__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
						"div",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 34
							}
						},
						Jobs
					)
				)
			);
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
				var request = _ref.request,
				    response = _ref.response,
				    match = _ref.match,
				    history = _ref.history,
				    location = _ref.location,
				    ctx = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["request", "response", "match", "history", "location"]);

				var res, json;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								_context.next = 2;
								return fetch(Object(__WEBPACK_IMPORTED_MODULE_11__lib_getAPI__["a" /* getAPIHostname */])() + "/api/v1/jobs?text=");

							case 2:
								res = _context.sent;
								_context.next = 5;
								return res.json();

							case 5:
								json = _context.sent;
								return _context.abrupt("return", { jobs_count: json.results, jobs: json.data || [] });

							case 7:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=0.3f6db79a98022591fcaf.hot-update.js.map