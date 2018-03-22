exports.id = 0;
exports.modules = {

/***/ "./src/components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__("babel-runtime/helpers/objectWithoutProperties");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_Header_js__ = __webpack_require__("./src/components/header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_persist__ = __webpack_require__("redux-persist");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_persist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_redux_persist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__data_reducers__ = __webpack_require__("./src/data/reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_redux_logger__ = __webpack_require__("redux-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__data_actions__ = __webpack_require__("./src/data/actions/index.js");








var _jsxFileName = "/www/jsjobs/app/src/components/Layout.js";


/* redux initialize */





/* redux connect */


/* redux store */
var logger = Object(__WEBPACK_IMPORTED_MODULE_14_redux_logger__["createLogger"])({
	collapsed: true
});
var store = Object(__WEBPACK_IMPORTED_MODULE_10_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_13__data_reducers__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_10_redux__["applyMiddleware"])(logger));
// const store = createStore(reducer, compose(applyMiddleware(logger), autoRehydrate()));
/*
	Original layout template
*/

var Layout = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Layout, _React$Component);

	function Layout() {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Layout);

		return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Layout.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Layout)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Layout, [{
		key: "render",
		value: function render() {
			this.props.dispatch(__WEBPACK_IMPORTED_MODULE_15__data_actions__["a" /* my_area */](this.props.area_key));
			return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
				"div",
				{ className: "Layout", style: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ minHeight: "100vh" }, this.props.style || {}), __source: {
						fileName: _jsxFileName,
						lineNumber: 25
					}
				},
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__header_Header_js__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 26
					}
				}),
				this.props.children || null
			);
		}
	}]);

	return Layout;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);
/*
	Connect redux data
*/


var mapStateToProps = function mapStateToProps(data, ownProps) {
	return {};
};
var ConnectedLayout = Object(__WEBPACK_IMPORTED_MODULE_12_react_redux__["connect"])(mapStateToProps)(Layout);
/*
	Layout as the page component will receive it
*/

var LayoutExport = function (_React$Component2) {
	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(LayoutExport, _React$Component2);

	function LayoutExport() {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, LayoutExport);

		return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (LayoutExport.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(LayoutExport)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(LayoutExport, [{
		key: "render",
		value: function render() {
			// if (this.props.purge) {
			// 	persistStore(store)
			// 		.purge()
			// 		.then(function(what) {
			// 			console.info("PURGE", what);
			// 		})
			// 		.catch(function(what) {
			// 			console.error("PURGE", what);
			// 		});
			// } else {
			// 	persistStore(store);
			// }
			var _props = this.props,
			    children = _props.children,
			    props = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_props, ["children"]);

			return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_12_react_redux__["Provider"],
				{ store: store, __source: {
						fileName: _jsxFileName,
						lineNumber: 58
					}
				},
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
					ConnectedLayout,
					__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, props, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 59
						}
					}),
					children
				)
			);
		}
	}]);

	return LayoutExport;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (LayoutExport);

/***/ })

};
//# sourceMappingURL=0.677c3995d29ce6293f8a.hot-update.js.map