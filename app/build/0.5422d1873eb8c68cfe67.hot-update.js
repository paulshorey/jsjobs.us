exports.id = 0;
exports.modules = {

/***/ "./src/routes/Search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styled_Page_js__ = __webpack_require__("./src/routes/styled/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_Results__ = __webpack_require__("./src/components/search/Results.js");







var _jsxFileName = "/www/jsjobs/app/src/routes/Search.js";





/*
    components
*/

var Search = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Search, _Component);

	// static async getInitialProps({ match }) {
	// 	/*
	// 		initial props - pass to page component by SSR
	// 	*/
	// 	const props = {
	// 		area_key: match.params.area_key || "us",
	// 		items: []
	// 	};
	// 	/*
	// 		fetch content - initial data
	// 	*/
	// 	try {
	// 		// fetch from CDN
	// 		const res = await fetch(`https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/${props.area_key}-50.json`); // Cloudfront CDN => data
	// 		const data = await res.json();
	// 		// convert to object
	// 		const items_object = {};
	// 		data.forEach(function(item) {
	// 			items_object[item._id] = item;
	// 		});
	// 		items_object.length = data.length;
	// 		// done converting, use {items_object}
	// 		props.items = items_object;
	// 		return props;
	// 	} catch (e) {
	// 		try {
	// 			// fetch from API (failover)
	// 			const res = await fetch(`http://localhost:1080/api/v1/jobs/${props.area_key}.json?limit=50`); // local API => json.data
	// 			const json = await res.json();
	// 			// convert to object
	// 			const items_object = {};
	// 			json.data.forEach(function(item) {
	// 				items_object[item._id] = item;
	// 			});
	// 			items_object.length = json.data.length;
	// 			// done converting, use {items_object}
	// 			props.items = items_object;
	// 			return props;
	// 		} catch (e) {
	// 			return props;
	// 		}
	// 	}
	// }
	/*
 	initial data in {this.props.items}, more complete data in {this.state.items}
 */
	function Search() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Search);

		var _this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Search.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Search)).call(this));

		_this.state = {
			items: [],
			isLoading: false
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Search, [{
		key: "updateContent",
		value: function () {
			var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
				var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var res, data, items_object, _res, json, _items_object;

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								if (props.area_key) {
									_context.next = 2;
									break;
								}

								return _context.abrupt("return");

							case 2:
								this.setState({ isLoading: true });
								/*
        	fetch content - all data
        */
								_context.prev = 3;
								_context.next = 6;
								return fetch("https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/" + props.area_key + ".json");

							case 6:
								res = _context.sent;
								_context.next = 9;
								return res.json();

							case 9:
								data = _context.sent;

								// convert to object
								items_object = {};

								data.forEach(function (item) {
									items_object[item._id] = item;
								});
								items_object.length = data.length;
								// done converting, use {items_object}
								this.setState({ items: items_object, isLoading: false });
								_context.next = 33;
								break;

							case 16:
								_context.prev = 16;
								_context.t0 = _context["catch"](3);
								_context.prev = 18;
								_context.next = 21;
								return fetch("http://localhost:1080/api/v1/jobs/" + props.area_key + ".json");

							case 21:
								_res = _context.sent;
								_context.next = 24;
								return _res.json();

							case 24:
								json = _context.sent;

								// convert to object
								_items_object = {};

								json.data.forEach(function (item) {
									_items_object[item._id] = item;
								});
								_items_object.length = json.data.length;
								// done converting, use {items_object}
								this.setState({ items: _items_object, isLoading: false });
								_context.next = 33;
								break;

							case 31:
								_context.prev = 31;
								_context.t1 = _context["catch"](18);

							case 33:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this, [[3, 16], [18, 31]]);
			}));

			function updateContent() {
				return _ref.apply(this, arguments);
			}

			return updateContent;
		}()
	}, {
		key: "componentWillReceiveProps",
		value: function componentWillReceiveProps() {
			var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			/*
   	update Content - when page route changed
   */
			if (props.items && props.items.length) {
				/*
    	first - throw out old state and replace with new props
    */
				this.setState({ items: props.items });
				/*
    	then - fetch the rest
    */
				this.updateContent(props);
			}
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			/*
   	update Content - only initial page load after page SSR'd with getInitialProps()
   */
			if (!this.state.items.length && this.props.area_key) {
				this.updateContent(this.props);
			}
		}
	}, {
		key: "render",
		value: function render() {
			/*
   	this.props || this.state
   */
			var items = this.state.items.length ? this.state.items : this.props.items;
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 129
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_9__styled_Page_js__["a" /* Page */],
					{ className: "Page " + (this.state.isLoading ? " isLoading" : ""), __source: {
							fileName: _jsxFileName,
							lineNumber: 130
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_search_Results__["a" /* default */], { area_key: this.props.area_key || "us", items: items || {}, className: this.state.isLoading ? " isLoading" : "", __source: {
							fileName: _jsxFileName,
							lineNumber: 131
						}
					})
				)
			);
		}
	}]);

	return Search;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

};
//# sourceMappingURL=0.5422d1873eb8c68cfe67.hot-update.js.map