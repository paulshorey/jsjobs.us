exports.id = 0;
exports.modules = {

/***/ "./src/Document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after__ = __webpack_require__("@jaredpalmer/after");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_error_PrimaryErrorBoundary_js__ = __webpack_require__("./src/components/error/PrimaryErrorBoundary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Document_styled_js__ = __webpack_require__("./src/Document.styled.js");







var _jsxFileName = "/www/ps-jobs/app/src/Document.js";
// ./src/Document.js






var Document = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Document, _React$Component);

	function Document() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Document);

		return __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Document.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Document)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Document, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    helmet = _props.helmet,
			    assets = _props.assets,
			    data = _props.data,
			    styleTags = _props.styleTags;
			// get attributes from React Helmet

			var htmlAttrs = helmet.htmlAttributes.toComponent();
			var bodyAttrs = helmet.bodyAttributes.toComponent();

			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				"html",
				__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, htmlAttrs, {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 28
					}
				}),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"head",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 29
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge", __source: {
							fileName: _jsxFileName,
							lineNumber: 30
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { charSet: "utf-8", __source: {
							fileName: _jsxFileName,
							lineNumber: 31
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"title",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 32
							}
						},
						"After.js | PS"
					),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
							fileName: _jsxFileName,
							lineNumber: 33
						}
					}),
					helmet.title.toComponent(),
					helmet.meta.toComponent(),
					helmet.link.toComponent(),
					"assets.client.css && (",
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("link", { rel: "stylesheet", href: assets.client.css, __source: {
							fileName: _jsxFileName,
							lineNumber: 38
						}
					}),
					")",
					styleTags
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"body",
					__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, bodyAttrs, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 42
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_10__components_error_PrimaryErrorBoundary_js__["a" /* default */],
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 43
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after__["AfterRoot"], {
							__source: {
								fileName: _jsxFileName,
								lineNumber: 44
							}
						}),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__jaredpalmer_after__["AfterData"], { data: data, __source: {
								fileName: _jsxFileName,
								lineNumber: 46
							}
						}),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("script", { type: "text/javascript", src: assets.client.js, defer: true, crossOrigin: "anonymous", __source: {
								fileName: _jsxFileName,
								lineNumber: 47
							}
						})
					)
				)
			);
		}
	}], [{
		key: "getInitialProps",

		// without styled-components:
		// static getInitialProps({ assets, data, renderPage }) {
		//   const page = renderPage();
		//   return { assets, data, ...page };
		// }
		value: function getInitialProps(_ref) {
			var assets = _ref.assets,
			    data = _ref.data,
			    renderPage = _ref.renderPage;

			var sheet = new __WEBPACK_IMPORTED_MODULE_9_styled_components__["ServerStyleSheet"]();
			var page = renderPage(function (App) {
				return function (props) {
					return sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(App, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, props, {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 16
						}
					})));
				};
			});
			var styleTags = sheet.getStyleElement();
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({ assets: assets, data: data }, page, { styleTags: styleTags });
		}
	}]);

	return Document;
}(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Document);

/***/ })

};
//# sourceMappingURL=0.cfa545060c93ac7e7ce6.hot-update.js.map