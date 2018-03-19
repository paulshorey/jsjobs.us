/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/***/ (function(module, exports) {

module.exports = {"client":{"js":"//d3lz21p2fiot8d.cloudfront.net/static/js/bundle.b1909bcc.js","css":"//d3lz21p2fiot8d.cloudfront.net/static/css/bundle.12da91b8.css"}}

/***/ }),

/***/ "./src/Document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jaredpalmer_after__ = __webpack_require__("@jaredpalmer/after");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jaredpalmer_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__jaredpalmer_after__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_error_PrimaryErrorBoundary_js__ = __webpack_require__("./src/components/error/PrimaryErrorBoundary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Document_styled_js__ = __webpack_require__("./src/Document.styled.js");






// ./src/Document.js






var Document = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Document, _React$Component);

	function Document() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Document);

		return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Document.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Document)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Document, [{
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

			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				"html",
				htmlAttrs,
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"head",
					null,
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", { charSet: "utf-8" }),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"title",
						null,
						"After.js | PS"
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
					helmet.title.toComponent(),
					helmet.meta.toComponent(),
					helmet.link.toComponent(),
					assets.client.css && __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("link", { rel: "stylesheet", href: assets.client.css }),
					styleTags,
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("link", { rel: "stylesheet", type: "text/css", href: "/assets/icomoon/style.css" }),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", { httpEquiv: "cache-control", content: "max-age=0" }),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", { httpEquiv: "cache-control", content: "no-cache" }),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", { httpEquiv: "expires", content: "0" }),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", { httpEquiv: "expires", content: "Tue, 01 Jan 1980 1:00:00 GMT" }),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", { httpEquiv: "pragma", content: "no-cache" })
				),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"body",
					bodyAttrs,
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_9__components_error_PrimaryErrorBoundary_js__["a" /* default */],
						null,
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__jaredpalmer_after__["AfterRoot"], null),
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__jaredpalmer_after__["AfterData"], { data: data }),
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("script", { type: "text/javascript", src: assets.client.js, defer: true, crossOrigin: "anonymous" })
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

			var sheet = new __WEBPACK_IMPORTED_MODULE_8_styled_components__["ServerStyleSheet"]();
			var page = renderPage(function (App) {
				return function (props) {
					return sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(App, props));
				};
			});
			var styleTags = sheet.getStyleElement();
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({ assets: assets, data: data }, page, { styleTags: styleTags });
		}
	}]);

	return Document;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Document);

/***/ }),

/***/ "./src/Document.styled.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\n\t/**************************************************\n\t\treset\n\t**************************************************/\n\thtml, body, #app, #pages {\n\t\theight:100%;\n\t\twidth:100%;\n\t}\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n        color:navy;      \n        background:lightblue;\n\t}\n\tpre {\n\t\tmargin:0;\n\t}\n\t::-webkit-input-placeholder {\n\t\t/* Chrome/Opera/Safari */\n\t\tcolor: #999;\n\t}\n\t::-moz-placeholder {\n\t\t/* Firefox 19+ */\n\t\tcolor: #999;\n\t}\n\t:-ms-input-placeholder {\n\t\t/* IE 10+ */\n\t\tcolor: #999;\n\t}\n\t:-moz-placeholder {\n\t\t/* Firefox 18- */\n\t\tcolor: #999;\n\t}\n\tul, li {list-style:none;padding:0;margin:0;text-indent: 0;}\n\n\t/**************************************************\n\t\tresponsive text\n\t**************************************************/\n\tbody {\n\t\tmargin: 0;\n\t}\n\thtml {\n\t\tfont-size:14px;\n\t}\n\t@media (max-width:950px), (max-height:750px) {\n\t\thtml {\n\t\t\tfont-size:14px;\n\t\t}\n\t}\n\t@media (max-width:750px), (max-height:650px) {\n\t\thtml {\n\t\t\tfont-size:14px;\n\t\t}\n\t}\n\t@media (max-width:380px), (max-height:380px) {\n\t\thtml {\n\t\t\tfont-size:12px;\n\t\t}\n\t}\n\t@media (max-width:330px), (max-height:330px) {\n\t\thtml {\n\t\t\tfont-size:10px;\n\t\t}\n\t}\n\th1,h2,h3,h4,h5,h6,p {\n\t\tmargin:0;\n\t\tpadding:0;\n\t\tline-height:1.5rem;\n\t}\n\tp {\n\t\tmargin:0.75rem 0;\n\t\tfont-size:1rem;\n\t}\n\th1 {\n\t\tfont-size:1.9rem;\n\t}\n\th2 {\n\t\tfont-size:1.75rem;\n\t}\n\th3 {\n\t\tfont-size:1.6rem;\n\t}\n\th4 {\n\t\tfont-size:1.45rem;\n\t}\n\th5 {\n\t\tfont-size:1.3rem;\n\t}\n\th6 {\n\t\tfont-size:1.15rem;\n\t}\n\n\t/**************************************************\n\t\tstyle\n\t**************************************************/\n\t* {\n\t\tfont-family: ", " !important;\n\t\tvertical-align:middle; /* hope this doesn't mess anything up - but in my experience, having vertical-align middle was always more useful than not - PS */\n\t}\n\tbody {\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t}\n\ta {\n\t\tcolor:", ";\n\t\ttext-decoration: none;\n\t}\n"], ["\n\n\t/**************************************************\n\t\treset\n\t**************************************************/\n\thtml, body, #app, #pages {\n\t\theight:100%;\n\t\twidth:100%;\n\t}\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n        color:navy;      \n        background:lightblue;\n\t}\n\tpre {\n\t\tmargin:0;\n\t}\n\t::-webkit-input-placeholder {\n\t\t/* Chrome/Opera/Safari */\n\t\tcolor: #999;\n\t}\n\t::-moz-placeholder {\n\t\t/* Firefox 19+ */\n\t\tcolor: #999;\n\t}\n\t:-ms-input-placeholder {\n\t\t/* IE 10+ */\n\t\tcolor: #999;\n\t}\n\t:-moz-placeholder {\n\t\t/* Firefox 18- */\n\t\tcolor: #999;\n\t}\n\tul, li {list-style:none;padding:0;margin:0;text-indent: 0;}\n\n\t/**************************************************\n\t\tresponsive text\n\t**************************************************/\n\tbody {\n\t\tmargin: 0;\n\t}\n\thtml {\n\t\tfont-size:14px;\n\t}\n\t@media (max-width:950px), (max-height:750px) {\n\t\thtml {\n\t\t\tfont-size:14px;\n\t\t}\n\t}\n\t@media (max-width:750px), (max-height:650px) {\n\t\thtml {\n\t\t\tfont-size:14px;\n\t\t}\n\t}\n\t@media (max-width:380px), (max-height:380px) {\n\t\thtml {\n\t\t\tfont-size:12px;\n\t\t}\n\t}\n\t@media (max-width:330px), (max-height:330px) {\n\t\thtml {\n\t\t\tfont-size:10px;\n\t\t}\n\t}\n\th1,h2,h3,h4,h5,h6,p {\n\t\tmargin:0;\n\t\tpadding:0;\n\t\tline-height:1.5rem;\n\t}\n\tp {\n\t\tmargin:0.75rem 0;\n\t\tfont-size:1rem;\n\t}\n\th1 {\n\t\tfont-size:1.9rem;\n\t}\n\th2 {\n\t\tfont-size:1.75rem;\n\t}\n\th3 {\n\t\tfont-size:1.6rem;\n\t}\n\th4 {\n\t\tfont-size:1.45rem;\n\t}\n\th5 {\n\t\tfont-size:1.3rem;\n\t}\n\th6 {\n\t\tfont-size:1.15rem;\n\t}\n\n\t/**************************************************\n\t\tstyle\n\t**************************************************/\n\t* {\n\t\tfont-family: ", " !important;\n\t\tvertical-align:middle; /* hope this doesn't mess anything up - but in my experience, having vertical-align middle was always more useful than not - PS */\n\t}\n\tbody {\n\t\tbackground: ", ";\n\t\tcolor: ", ";\n\t}\n\ta {\n\t\tcolor:", ";\n\t\ttext-decoration: none;\n\t}\n"]);




/**************************************************
THIS LOADS INLINE IN HEAD
Pro: It loads instantly before page is loaded - so, put any background colors, fonts, sizes, and noticeable styles here
Con: THIS BLOCKS ALL HTML - SO BE VERY BRIEF - PUT EVERYTHING POSSIBLE INTO /src/client.css
**************************************************/

Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["injectGlobal"])(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].fontFamily, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_bg1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_text1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_link1);

/***/ }),

/***/ "./src/Document.theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	fontFamily: "sans-serif",
	color_jsYellow: "#f6da1d",
	/* #1 - white background */
	color_bg1: "#fff",
	color_title1: "#111",
	color_text1: "rgb(173, 173, 173)",
	color_link1: "rgb(100,175,200)",
	color_border1: "rgb(188, 188, 188)",
	color_textGreen1: "rgb(57, 209, 3)",
	color_textRed1: "rgb(252, 101, 75)",
	/* #2 - grey background */
	color_bg2: "#ccc",
	color_title2: "#111",
	color_text2: "rgb(173, 173, 173)",
	color_link2: "rgb(100,175,200)",
	color_border2: "#999",
	color_textGreen2: "rgb(75,190,0)",
	color_textRed2: "rgb(252, 101, 75)",
	/* #3 - black background */
	color_bg3: "#111",
	color_title3: "rgb(173, 173, 173)",
	color_text3: "rgb(173, 173, 173)",
	color_link3: "rgb(100,175,200)",
	color_border3: "rgb(188, 188, 188)",
	color_textGreen3: "rgb(57, 209, 3)",
	color_textRed3: "rgb(252, 101, 75)"
});

/***/ }),

/***/ "./src/components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_Header_js__ = __webpack_require__("./src/components/header/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_reducers__ = __webpack_require__("./src/data/reducers/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_logger__ = __webpack_require__("redux-logger");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_redux_logger__);













var logger = Object(__WEBPACK_IMPORTED_MODULE_11_redux_logger__["createLogger"])({
	collapsed: true
});
var store = Object(__WEBPACK_IMPORTED_MODULE_8_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_10__data_reducers__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_8_redux__["applyMiddleware"])(logger));

var Layout = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Layout, _React$Component);

	function Layout() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Layout);

		return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Layout.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Layout)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Layout, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_9_react_redux__["Provider"],
				{ store: store },
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{ className: "Layout", style: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({ minHeight: "100vh" }, this.props.style || {}) },
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__header_Header_js__["a" /* default */], null),
					this.props.children || null
				)
			);
		}
	}]);

	return Layout;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./src/components/error/PrimaryErrorBoundary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PrimaryErrorBoundary */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
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








var PrimaryErrorBoundary = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(PrimaryErrorBoundary, _Component);

	function PrimaryErrorBoundary() {
		var _ref;

		var _temp, _this, _ret;

		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, PrimaryErrorBoundary);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = PrimaryErrorBoundary.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(PrimaryErrorBoundary)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			hasError: false
		}, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(PrimaryErrorBoundary, [{
		key: "componentDidCatch",
		value: function componentDidCatch(error, info) {
			this.setState(function (state) {
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state, { hasError: true });
			});
		}
	}, {
		key: "render",
		value: function render() {
			if (this.state.hasError) {
				return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{ style: { margin: 20 } },
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("br", null),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"h3",
						{ style: { color: "red" } },
						"Sorry, something went wrong."
					)
				);
			} else {
				return this.props.children;
			}
		}
	}]);

	return PrimaryErrorBoundary;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (PrimaryErrorBoundary);

/***/ }),

/***/ "./src/components/header/Header.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Header_js__ = __webpack_require__("./src/components/header/styled/Header.js");









var Header = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Header, _React$Component);

	function Header() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Header);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Header.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Header)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Header, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_Header_js__["a" /* Header */],
				{ className: "row" },
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ className: "row_left" },
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
						{ to: "/" },
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-top-logo" }),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"span",
							{ className: "caption" },
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								null,
								"JOBS"
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								{ className: "ext only-wide" },
								".US"
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ className: "row_right" },
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
						{ to: "/" },
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-top-dots" })
					)
				)
			);
		}
	}]);

	return Header;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/components/header/styled/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t&.row {\n\t\tposition: relative;\n\t\tpadding: 0.75rem;\n\t\tbackground: #111;\n\t\tdisplay: flex;\n\t\talign-items: baseline;\n\t\ta {\n\t\t\tcolor: ", ";\n\t\t}\n\t\t@media (max-width: 600px) {\n\t\t\t.only-wide {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 1080px) {\n\t\t\t.only-fullsize {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t}\n\t\t[class^=\"icon-\"] {\n\t\t\tfont-size: 2.1rem;\n\t\t\tline-height: 1.25rem;\n\t\t\t&.icon-ui-more {\n\t\t\t\tfont-size: 2.2rem;\n\t\t\t}\n\t\t}\n\t\t[class^=\"row_\"] {\n\t\t\tfont-size: 1.25rem;\n\t\t\tcolor: white;\n\t\t\ttext-align: center;\n\t\t\t/* vertical-align: bottom; */\n\t\t\t/* * {\n\t\t\t\tvertical-align: bottom;\n\t\t\t} */\n\t\t\t.caption {\n\t\t\t\tcolor: #fff;\n\t\t\t\tfont-size: 1.25rem;\n\t\t\t\tline-height: 1.25rem;\n\t\t\t\tpadding: 0.75rem 0.33rem 0;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\t.ext {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.row_left {\n\t\t\tflex-grow: 1;\n\t\t\ttext-align: left;\n\t\t\tcolor: ", ";\n\t\t}\n\t\t.row_center {\n\t\t\tflex-grow: 1;\n\t\t\twhite-space: nowrap;\n\t\t\t.caption {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t\tspan.icon-select {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t.row_right {\n\t\t\tflex-grow: 1;\n\t\t\tpadding-left: 0.75rem;\n\t\t\ttext-align: right;\n\t\t\t.icon-ui-thumbs-up {\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tline-height: 1rem;\n\t\t\t\tmargin-top: 0.4rem;\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\t&.row {\n\t\tposition: relative;\n\t\tpadding: 0.75rem;\n\t\tbackground: #111;\n\t\tdisplay: flex;\n\t\talign-items: baseline;\n\t\ta {\n\t\t\tcolor: ", ";\n\t\t}\n\t\t@media (max-width: 600px) {\n\t\t\t.only-wide {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 1080px) {\n\t\t\t.only-fullsize {\n\t\t\t\tdisplay: none !important;\n\t\t\t}\n\t\t}\n\t\t[class^=\"icon-\"] {\n\t\t\tfont-size: 2.1rem;\n\t\t\tline-height: 1.25rem;\n\t\t\t&.icon-ui-more {\n\t\t\t\tfont-size: 2.2rem;\n\t\t\t}\n\t\t}\n\t\t[class^=\"row_\"] {\n\t\t\tfont-size: 1.25rem;\n\t\t\tcolor: white;\n\t\t\ttext-align: center;\n\t\t\t/* vertical-align: bottom; */\n\t\t\t/* * {\n\t\t\t\tvertical-align: bottom;\n\t\t\t} */\n\t\t\t.caption {\n\t\t\t\tcolor: #fff;\n\t\t\t\tfont-size: 1.25rem;\n\t\t\t\tline-height: 1.25rem;\n\t\t\t\tpadding: 0.75rem 0.33rem 0;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\t.ext {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.row_left {\n\t\t\tflex-grow: 1;\n\t\t\ttext-align: left;\n\t\t\tcolor: ", ";\n\t\t}\n\t\t.row_center {\n\t\t\tflex-grow: 1;\n\t\t\twhite-space: nowrap;\n\t\t\t.caption {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t\tspan.icon-select {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t.row_right {\n\t\t\tflex-grow: 1;\n\t\t\tpadding-left: 0.75rem;\n\t\t\ttext-align: right;\n\t\t\t.icon-ui-thumbs-up {\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t\tline-height: 1rem;\n\t\t\t\tmargin-top: 0.4rem;\n\t\t\t\tdisplay: inline-block;\n\t\t\t}\n\t\t}\n\t}\n"]);




var Header = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_jsYellow, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_jsYellow, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_text1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_jsYellow);

/***/ }),

/***/ "./src/components/search/AreaLinks.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_AreaLinks_js__ = __webpack_require__("./src/components/search/styled/AreaLinks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_actions__ = __webpack_require__("./src/data/actions/index.js");










/* redux */



/* 
	Component 
*/

var AreaLinks = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(AreaLinks, _React$Component);

	function AreaLinks() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, AreaLinks);

		return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AreaLinks.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(AreaLinks)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(AreaLinks, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var areas = this.props.areas; // from Redux connect
			var Links = [];

			var _loop = function _loop(key) {
				var area = areas[key];
				Links.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
					{
						className: "option " + (_this2.props.history.location.pathname === area.route ? " selected" : ""),
						to: area.route,
						key: area.route,
						onClick: function onClick(e) {
							if (area.route === _this2.props.history.location.pathname) {
								e.preventDefault();
							}
						}
					},
					area.label
				));
			};

			for (var key in areas) {
				_loop(key);
			}
			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_AreaLinks_js__["a" /* AreaLinks */],
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
					innerRef: function innerRef(el) {
						_this2.AreaLinks = el;
					}
				}),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
					className: "overlay",
					ref: "overlay",
					onClick: function onClick(e) {
						_this2.AreaLinks.classList.toggle("active");
					}
				}),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{
						className: "content",
						ref: "content",
						onClick: function onClick(e) {
							_this2.AreaLinks.classList.remove("active");
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"div",
						{
							className: "dropdown",
							onClick: function onClick(e) {
								e.stopPropagation();
								_this2.AreaLinks.classList.toggle("active");
							}
						},
						Links
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"span",
						{
							className: "button",
							onClick: function onClick(e) {
								e.stopPropagation();
								_this2.AreaLinks.classList.toggle("active");
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-top-select" })
					)
				)
			);
		}
	}]);

	return AreaLinks;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

var mapStateToProps = function mapStateToProps(store, ownProps) {
	return {
		areas: store.areas
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {};
};
var ConnectedAreaLinks = Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(AreaLinks);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_9_react_router__["withRouter"])(ConnectedAreaLinks));

/***/ }),

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

			var filters = this.props.filters;
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
					{ key: fil, className: "filter" + (filter.multiplier > 0 ? " plus" : " minus") },
					filter.multiplier !== 0 ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						null,
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"span",
							{ className: "value" },
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"i",
								null,
								"\""
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"b",
								null,
								filter.value.replace(/\\\\/g, "\\").replace(/\\\\/g, "").replace(/\|/g, " | ")
							),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"i",
								null,
								"\""
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"span",
							{ className: "multiplier_text" },
							filter.multiplier > 0 ? __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up" }) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down" }),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"b",
								null,
								Math.abs(filter.multiplier)
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", {
							className: "delete icon-delete",
							onClick: function onClick() {
								_this2.props.dispatch_filterRemove(filter);
							}
						})
					) : __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"span",
						{ className: "value example" },
						filter.value
					)
				));
			};

			for (var fil in filters) {
				_loop(fil);
			}
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_Filters_js__["a" /* Filters */],
				null,
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ className: "filters" },
					Filters
				)
			);
		}
	}]);

	return Filters;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		filters: state.filters
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {
		dispatch_filterRemove: function dispatch_filterRemove(filter) {
			dispatch(__WEBPACK_IMPORTED_MODULE_9__data_actions__["b" /* filterRemove */](filter));
		}
	};
};
var ConnectedFilters = Object(__WEBPACK_IMPORTED_MODULE_8_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Filters);

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
			_this.props.dispatch_filterAdd({ value: _this.refs.qInput.value, multiplier: multiplier || _this.state.qInput_multiplier, property: _this.props.queryProperty });
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
					}
				}),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"div",
					{ className: "query_select selected_" + (multiplier > 0 ? "positive" : "negative") },
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("div", {
						className: "overlay",
						onClick: function onClick() {
							_this3.query_group.classList.remove("active");
						}
					}),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"div",
						{ className: "dropdown" },
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 10 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(10);
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up" }),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								null,
								"10"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 3 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(3);
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up" }),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								null,
								"3"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 2 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(2);
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up" }),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								null,
								"2"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "green " + (multiplier === 1 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(1);
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-up" }),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								null,
								"1"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -1 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-1);
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down" }),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								null,
								"-1"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -2 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-2);
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down" }),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								null,
								"-2"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -3 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-3);
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down" }),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								null,
								"-3"
							)
						),
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
							"div",
							{
								className: "red " + (multiplier === -10 ? "selected" : ""),
								onClick: function onClick() {
									_this3.multiplierClick(-10);
								}
							},
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-ui-thumbs-down" }),
							__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
								"span",
								null,
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
							}
						},
						__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("span", { className: "icon-top-add" })
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__AreaLinks__ = __webpack_require__("./src/components/search/AreaLinks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Filters__ = __webpack_require__("./src/components/search/Filters.js");










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

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Results.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.rateJobs = function (jobs) {
			/*
   	filter the filters (needs refactor?)
   */
			var filters = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, _this.props.filters);
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
			/*
   	iterate results
   */
			jobs = jobs.map(function (job) {
				job._status = job._status || "new";
				job._rating = 1000;
				// use filters
				for (var _fil in filters) {
					var _filter = filters[_fil];
					if (_filter.multiplier) {
						var reg = RegExp("" + _filter.value + "", "i");
						var match = reg.test(" " + job.location + " " + job.company + " " + job.name + " " + job.text + " ");
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
			return jobs;
		}, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Results, [{
		key: "render",

		/*
  	view
  */
		value: function render() {
			var _this2 = this;

			var area_key = this.props.area_key;
			var rated_jobs = this.rateJobs(this.props.jobs);
			// make Array
			var Jobs = [];
			if (rated_jobs) {
				var i = 0;
				// limit results on page - soon add pagination or auto-loading on scroll
				while (i < 100) {
					// job = current item
					var job = rated_jobs[i];
					if ((typeof job === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(job)) !== "object") {
						break;
					}
					// job.rating
					var rating = job._rating - 1000;
					var Rating = null;
					if (rating > 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating plus" },
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up" }),
							rating
						);
					}
					if (rating < 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating minus" },
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-down" }),
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
					Jobs.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ key: job._id + i, className: "result " + (i === 0 ? " first" : "") },
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							null,
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"a",
								{ href: job.link, target: "_blank" },
								job.name
							)
						),
						" ",
						"- ",
						job.text,
						" \xA0",
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "meta" },
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{ className: "rating" },
								Rating
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{ className: "location" },
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://www.google.com/maps/place/" + job.location + "", target: "_blank" },
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-navigation" }),
									" ",
									job.location
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{ className: "company" },
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://google.com/search?q=" + job.company + " company glassdoor", target: "_blank" },
									job.company
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{ className: "pills" },
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{ className: "pill" },
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-check" }),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text" },
										"applied"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{ className: "pill" },
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up" }),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text" },
										"intrigued"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{ className: "pill" },
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-delete" }),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text" },
										"ignored"
									)
								)
							)
						)
					));
					i++;
				}
			}
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__styled_Results_js__["a" /* Results */],
				{ className: "Results " + (this.props.className || "") },
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "queries" },
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__AreaLinks__["a" /* default */], { area_key: this.props.area_key }),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Query__["a" /* default */], { expanded: this.state.searchQueryExpanded, placeholder: "Search " + rated_jobs.length + " results..." }),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__Filters__["a" /* default */], null),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ className: "moreOptions", ref: "moreOptions" },
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "moreOptions_content" },
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"p",
								null,
								"Tip: use RegEx in search term. For example: ",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("br", null),
								"\"",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"b",
									null,
									"[^a-zA-Z]+C[^a-zA-Z]+"
								),
								"\" or \"",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"b",
									null,
									"java[^s]+ | JSP"
								),
								"\""
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"p",
								null,
								"Then, choose a +/- thumbs up/down value, to weigh its importance."
							)
						),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"p",
							{
								className: "moreOptions_link",
								onClick: function onClick(e) {
									_this2.refs.moreOptions.classList.toggle("active");
									_this2.setState({ searchQueryExpanded: !_this2.state.searchQueryExpanded });
								}
							},
							"..."
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "content" },
					Jobs
				)
			);
		}
	}]);

	return Results;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		filters: state.filters
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {
		dispatch_filterAdd: function dispatch_filterAdd(filter) {
			dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["a" /* filterAdd */](filter));
		}
	};
};
var ConnectedResults = Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Object(__WEBPACK_IMPORTED_MODULE_9_react_router__["withRouter"])(Results));

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedResults);

/***/ }),

/***/ "./src/components/search/styled/AreaLinks.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AreaLinks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\tposition: relative;\n\ttext-align: center;\n\t.overlay {\n\t\tdisplay: none;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t&.active .overlay {\n\t\tdisplay: block;\n\t}\n\t.content {\n\t\tposition: relative;\n\t\tmin-height: 2rem;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\t.button {\n\t\t\tmin-width: 2rem;\n\t\t\tspan {\n\t\t\t\tfont-size: 2.1rem;\n\t\t\t\tline-height: 1.25rem;\n\t\t\t\tcolor: #111;\n\t\t\t}\n\t\t}\n\t\t.dropdown {\n\t\t\t.option {\n\t\t\t\theight: 1.5rem;\n\t\t\t\tline-height: 1.5rem;\n\t\t\t\tfont-size: 1.25rem;\n\t\t\t\tpadding: 0.25rem;\n\t\t\t\tdisplay: none;\n\t\t\t\tcolor: ", ";\n\t\t\t\t&.selected {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t&.active .content {\n\t\t.dropdown {\n\t\t\tborder: solid 1px ", ";\n\t\t\tposition: absolute;\n\t\t\tbackground: #fff;\n\t\t\tpadding: 0.5rem 1.6rem 0.5rem 1.5rem;\n\t\t\tmargin: -0.75rem -1.5rem -0.75rem -1rem;\n\t\t\tborder-radius: 1rem;\n\t\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n\t\t\t.option {\n\t\t\t\tpadding: 0.5rem;\n\t\t\t\tdisplay: block;\n\t\t\t\t&.selected {\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\tposition: relative;\n\ttext-align: center;\n\t.overlay {\n\t\tdisplay: none;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\t&.active .overlay {\n\t\tdisplay: block;\n\t}\n\t.content {\n\t\tposition: relative;\n\t\tmin-height: 2rem;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\t.button {\n\t\t\tmin-width: 2rem;\n\t\t\tspan {\n\t\t\t\tfont-size: 2.1rem;\n\t\t\t\tline-height: 1.25rem;\n\t\t\t\tcolor: #111;\n\t\t\t}\n\t\t}\n\t\t.dropdown {\n\t\t\t.option {\n\t\t\t\theight: 1.5rem;\n\t\t\t\tline-height: 1.5rem;\n\t\t\t\tfont-size: 1.25rem;\n\t\t\t\tpadding: 0.25rem;\n\t\t\t\tdisplay: none;\n\t\t\t\tcolor: ", ";\n\t\t\t\t&.selected {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t&.active .content {\n\t\t.dropdown {\n\t\t\tborder: solid 1px ", ";\n\t\t\tposition: absolute;\n\t\t\tbackground: #fff;\n\t\t\tpadding: 0.5rem 1.6rem 0.5rem 1.5rem;\n\t\t\tmargin: -0.75rem -1.5rem -0.75rem -1rem;\n\t\t\tborder-radius: 1rem;\n\t\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n\t\t\t.option {\n\t\t\t\tpadding: 0.5rem;\n\t\t\t\tdisplay: block;\n\t\t\t\t&.selected {\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);




var AreaLinks = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_title2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2);

/***/ }),

/***/ "./src/components/search/styled/Filters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filters; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t.filter {\n\t\tdisplay: block;\n\t\ttext-align: center;\n\t\tmargin-bottom: 0.33rem;\n\t\tmargin: 0.5rem 0 0.33rem 0;\n\t\t> * {\n\t\t\tvertical-align: middle;\n\t\t\tdisplay: inline-block;\n\t\t\t&::after {\n\t\t\t\tcontent: \" \";\n\t\t\t}\n\t\t}\n\n\t\tcolor: #666;\n\t\t.value {\n\t\t\ti {\n\t\t\t\tcolor: #666;\n\t\t\t\t&::after {\n\t\t\t\t\tcontent: \" \";\n\t\t\t\t}\n\t\t\t}\n\t\t\tb {\n\t\t\t\tfont-weight: 600;\n\t\t\t\tletter-spacing: 0.25px;\n\t\t\t}\n\t\t\t&.example {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t}\n\t\t.multiplier {\n\t\t\tfont-size: 75%;\n\t\t\t.icon-plus {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t\t.icon-minus {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t.multiplier_text {\n\t\t\tpadding-left: 0.33rem;\n\t\t\tfont-weight: normal;\n\t\t}\n\t\t.delete {\n\t\t\tcursor: pointer;\n\t\t\tpadding-left: 0.5rem;\n\t\t\tfont-size: 1.25rem;\n\t\t\tmargin-top: 0.125rem;\n\t\t\tdisplay: inline-block;\n\t\t\tcolor: #666;\n\t\t}\n\t\t.x {\n\t\t\tcursor: pointer;\n\t\t\tpadding-left: 0.5rem;\n\t\t\tfont-size: 1.5rem;\n\t\t\tmargin-top: -0.175rem;\n\t\t}\n\t\t&.plus {\n\t\t\t.multiplier_text,\n\t\t\tb {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.minus {\n\t\t\t.multiplier_text,\n\t\t\tb {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\t.filter {\n\t\tdisplay: block;\n\t\ttext-align: center;\n\t\tmargin-bottom: 0.33rem;\n\t\tmargin: 0.5rem 0 0.33rem 0;\n\t\t> * {\n\t\t\tvertical-align: middle;\n\t\t\tdisplay: inline-block;\n\t\t\t&::after {\n\t\t\t\tcontent: \" \";\n\t\t\t}\n\t\t}\n\n\t\tcolor: #666;\n\t\t.value {\n\t\t\ti {\n\t\t\t\tcolor: #666;\n\t\t\t\t&::after {\n\t\t\t\t\tcontent: \" \";\n\t\t\t\t}\n\t\t\t}\n\t\t\tb {\n\t\t\t\tfont-weight: 600;\n\t\t\t\tletter-spacing: 0.25px;\n\t\t\t}\n\t\t\t&.example {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t}\n\t\t.multiplier {\n\t\t\tfont-size: 75%;\n\t\t\t.icon-plus {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t\t.icon-minus {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t.multiplier_text {\n\t\t\tpadding-left: 0.33rem;\n\t\t\tfont-weight: normal;\n\t\t}\n\t\t.delete {\n\t\t\tcursor: pointer;\n\t\t\tpadding-left: 0.5rem;\n\t\t\tfont-size: 1.25rem;\n\t\t\tmargin-top: 0.125rem;\n\t\t\tdisplay: inline-block;\n\t\t\tcolor: #666;\n\t\t}\n\t\t.x {\n\t\t\tcursor: pointer;\n\t\t\tpadding-left: 0.5rem;\n\t\t\tfont-size: 1.5rem;\n\t\t\tmargin-top: -0.175rem;\n\t\t}\n\t\t&.plus {\n\t\t\t.multiplier_text,\n\t\t\tb {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t\t&.minus {\n\t\t\t.multiplier_text,\n\t\t\tb {\n\t\t\t\tcolor: ", ";\n\t\t\t}\n\t\t}\n\t}\n"]);




var Filters = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed2);

/***/ }),

/***/ "./src/components/search/styled/Query.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Query; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\ttext-align: center;\n\tdisplay: block;\n\tmargin: 0.33rem auto;\n\tmax-width: 52rem;\n\t> * {\n\t\tbackground: #fff;\n\t}\n\t.query_go {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\twidth: 1.8rem;\n\t\tborder-radius: 50%;\n\t\tmargin-left: 0.2rem;\n\t\t> * {\n\t\t\tdisplay: block;\n\t\t\twhite-space: nowrap;\n\t\t\tpadding: 0.4rem 0.33rem;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.2rem;\n\t\t\tline-height: 1.2rem;\n\t\t\tcolor: #333;\n\t\t\tfont-weight: normal;\n\t\t}\n\t}\n\t.query_input,\n\t.query_select {\n\t\tline-height: 1.5rem;\n\t\tborder-radius: 1rem;\n\t}\n\t.query_input {\n\t\tfont-size: 1.2rem;\n\t\tpadding: 0.3rem 0.6rem 0.3rem 2rem;\n\t\tflex-grow: 1;\n\t\tmin-width: 21rem;\n\t\tmargin: 0 auto;\n\t\tborder: solid 1px ", ";\n\t\t&.isLoading {\n\t\t\tbackground:yellow;\n\t\t}\n\t}\n\t.query_select {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tborder-top-left-radius: 0;\n\t\tborder-bottom-left-radius: 0;\n\t\t/* border: solid 1px ", "; */\n\t\tborder-left: none;\n\t\twidth: 30%;\n\t\t.icon {\n\t\t\tposition: absolute;\n\t\t\tright: 0.175rem;\n\t\t\ttop: 0;\n\t\t\tpadding: 0.25rem 0.33rem;\n\t\t\tfont-size: 1.25rem;\n\t\t}\n\t\t.overlay {\n\t\t\tdisplay: none;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\t/* background: rgba(0, 0, 0, 0.25); */\n\t\t}\n\t\t.dropdown {\n\t\t\tposition: relative;\n\t\t\tpadding: 0.15rem 0.3rem 0.2rem 0.3rem;\n\t\t\twidth: calc(100% + 4px);\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: solid 1px ", ";\n\t\t\tborder-left: none;\n\t\t\tborder-radius: 1rem;\n\t\t\tborder-top-left-radius: 0;\n\t\t\tborder-bottom-left-radius: 0;\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: top;\n\t\t\t> * {\n\t\t\t\tpadding: 0.25rem;\n\t\t\t\tdisplay: none;\n\t\t\t\tvertical-align: baseline;\n\t\t\t\tline-height: 1rem;\n\t\t\t\tspan {\n\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t&:first-child {\n\t\t\t\t\t\tfont-size: 1.1rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.selected {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t&.green {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t\t&.red {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t&.active .query_input {\n\t\tborder-right:none;\n\t}\n\t&.active .query_select {\n\t\t.overlay {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.dropdown {\n\t\t\tz-index: 1000;\n\t\t\tpadding: 0.4rem 0.2rem;\n\t\t\tborder-bottom-left-radius: 1rem;\n\t\t\tposition: absolute;\n\t\t\tbackground: white;\n\t\t\tbox-shadow: 3px 3px 10px;\n\t\t\t> * {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-bottom: 0.33rem;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tpadding: 0.3rem;\n\t\t\t}\n\t\t}\n\t}\n\t&.selected_positive {\n\t\t/* background: #9ad35b;\n\t\tborder-color: #9ad35b; */\n\t\tbackground-image: linear-gradient(to bottom, #abde6f, #9ad35b, #64b40a);\n\t\tborder-top-color: #abde6f;\n\t\tborder-right-color: #9ad35b;\n\t\tborder-bottom-color: #64b40a;\n\t\t&:not(.active) {\n\t\t\t.dropdown {\n\t\t\t\tcolor: white;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-shadow: 0 0 2px #64b40a;\n\t\t\t}\n\t\t}\n\t}\n\t&.expanded {\n\t\tdisplay: flex;\n\t\t.query_input {\n\t\t\tborder-top-right-radius: 0;\n\t\t\tborder-bottom-right-radius: 0;\n\t\t}\n\t\t.query_select {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.query_go {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n"], ["\n\ttext-align: center;\n\tdisplay: block;\n\tmargin: 0.33rem auto;\n\tmax-width: 52rem;\n\t> * {\n\t\tbackground: #fff;\n\t}\n\t.query_go {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\twidth: 1.8rem;\n\t\tborder-radius: 50%;\n\t\tmargin-left: 0.2rem;\n\t\t> * {\n\t\t\tdisplay: block;\n\t\t\twhite-space: nowrap;\n\t\t\tpadding: 0.4rem 0.33rem;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1.2rem;\n\t\t\tline-height: 1.2rem;\n\t\t\tcolor: #333;\n\t\t\tfont-weight: normal;\n\t\t}\n\t}\n\t.query_input,\n\t.query_select {\n\t\tline-height: 1.5rem;\n\t\tborder-radius: 1rem;\n\t}\n\t.query_input {\n\t\tfont-size: 1.2rem;\n\t\tpadding: 0.3rem 0.6rem 0.3rem 2rem;\n\t\tflex-grow: 1;\n\t\tmin-width: 21rem;\n\t\tmargin: 0 auto;\n\t\tborder: solid 1px ", ";\n\t\t&.isLoading {\n\t\t\tbackground:yellow;\n\t\t}\n\t}\n\t.query_select {\n\t\tdisplay: none;\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tborder-top-left-radius: 0;\n\t\tborder-bottom-left-radius: 0;\n\t\t/* border: solid 1px ", "; */\n\t\tborder-left: none;\n\t\twidth: 30%;\n\t\t.icon {\n\t\t\tposition: absolute;\n\t\t\tright: 0.175rem;\n\t\t\ttop: 0;\n\t\t\tpadding: 0.25rem 0.33rem;\n\t\t\tfont-size: 1.25rem;\n\t\t}\n\t\t.overlay {\n\t\t\tdisplay: none;\n\t\t\tposition: fixed;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\t/* background: rgba(0, 0, 0, 0.25); */\n\t\t}\n\t\t.dropdown {\n\t\t\tposition: relative;\n\t\t\tpadding: 0.15rem 0.3rem 0.2rem 0.3rem;\n\t\t\twidth: calc(100% + 4px);\n\t\t\tbox-sizing: border-box;\n\t\t\tborder: solid 1px ", ";\n\t\t\tborder-left: none;\n\t\t\tborder-radius: 1rem;\n\t\t\tborder-top-left-radius: 0;\n\t\t\tborder-bottom-left-radius: 0;\n\t\t\tposition: relative;\n\t\t\tdisplay: inline-block;\n\t\t\tvertical-align: top;\n\t\t\t> * {\n\t\t\t\tpadding: 0.25rem;\n\t\t\t\tdisplay: none;\n\t\t\t\tvertical-align: baseline;\n\t\t\t\tline-height: 1rem;\n\t\t\t\tspan {\n\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\t&:first-child {\n\t\t\t\t\t\tfont-size: 1.1rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.selected {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t}\n\t\t\t\t&.green {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t\t&.red {\n\t\t\t\t\tcolor: ", ";\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\t&.active .query_input {\n\t\tborder-right:none;\n\t}\n\t&.active .query_select {\n\t\t.overlay {\n\t\t\tdisplay: block;\n\t\t}\n\t\t.dropdown {\n\t\t\tz-index: 1000;\n\t\t\tpadding: 0.4rem 0.2rem;\n\t\t\tborder-bottom-left-radius: 1rem;\n\t\t\tposition: absolute;\n\t\t\tbackground: white;\n\t\t\tbox-shadow: 3px 3px 10px;\n\t\t\t> * {\n\t\t\t\tdisplay: block;\n\t\t\t\tmargin-bottom: 0.33rem;\n\t\t\t\tfont-weight: bold;\n\t\t\t\tpadding: 0.3rem;\n\t\t\t}\n\t\t}\n\t}\n\t&.selected_positive {\n\t\t/* background: #9ad35b;\n\t\tborder-color: #9ad35b; */\n\t\tbackground-image: linear-gradient(to bottom, #abde6f, #9ad35b, #64b40a);\n\t\tborder-top-color: #abde6f;\n\t\tborder-right-color: #9ad35b;\n\t\tborder-bottom-color: #64b40a;\n\t\t&:not(.active) {\n\t\t\t.dropdown {\n\t\t\t\tcolor: white;\n\t\t\t\tfont-weight: bold;\n\t\t\t\ttext-shadow: 0 0 2px #64b40a;\n\t\t\t}\n\t\t}\n\t}\n\t&.expanded {\n\t\tdisplay: flex;\n\t\t.query_input {\n\t\t\tborder-top-right-radius: 0;\n\t\t\tborder-bottom-right-radius: 0;\n\t\t}\n\t\t.query_select {\n\t\t\tdisplay: flex;\n\t\t}\n\t\t.query_go {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n"]);




var Query = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed1);

/***/ }),

/***/ "./src/components/search/styled/Results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Results; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t&.Results {\n\t\t&.isLoading {\n\t\t\t.title {\n\t\t\t\tbackground: url(\"/assets/loading/3dots.gif\") center -13px no-repeat;\n\t\t\t\tspan {\n\t\t\t\t\topacity:0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.title {\n\t\t\tfont-size:1.25rem;\n\t\t\tline-height: 1.25rem;\n\t\t\ttext-align:center;\n\t\t\tcolor:#111;\n\t\t\tspan {\n\t\t\t\ttransition: opacity 0.2s;\n\t\t\t}\n\t\t}\n\t\t.content {\n\t\t\tmax-width: 53.8rem;\n\t\t\tmargin: 0.5rem auto;\n\t\t\t.result {\n\t\t\t\t/* display: flex; */\n\t\t\t\tmargin: 1.5rem 1rem;\n\t\t\t\ta {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t}\n\t\t\t\t.meta {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t\t* {\n\t\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\t}\n\t\t\t\t\t> * {\n\t\t\t\t\t\tmargin:0.2rem 0.2rem 0;\n\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t}\n\t\t\t\t\t.pills {\n\t\t\t\t\t\twhite-space:nowrap;\n\t\t\t\t\t\t.pill {\n\t\t\t\t\t\t\tborder: solid 1px #999;\n\t\t\t\t\t\t\tmargin:0 0 0 0.4rem;\n\t\t\t\t\t\t\tpadding: 0rem 0.5rem 0.1rem;\n\t\t\t\t\t\t\tborder-radius: 1rem;\n\t\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t\t\t[class^=\"icon-\"] {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\ttop:0.1rem;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.first {\n\t\t\t\t\t.meta {\n\t\t\t\t\t\t.pills {\n\t\t\t\t\t\t\tmargin-top:0.4rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&:not(.first) {\n\t\t\t\t\t.pill {\n\t\t\t\t\t\t.icon-check,\n\t\t\t\t\t\t.icon-ui-thumbs-up {\n\t\t\t\t\t\t\t/* margin:0 -0.2rem 0 0.2rem; */\n\t\t\t\t\t\t\ttop:0.05rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.text {\n\t\t\t\t\t\t\tdisplay:none;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.controls {\n\t\t\t\t\tmargin: 0.125rem;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tspan {\n\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\tmargin: 0.125rem 0.125rem 0.25rem 0.125rem;\n\t\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.content {\n\t\t\t\t}\n\t\t\t\t.location,\n\t\t\t\t.location a {\n\t\t\t\t\tcolor: salmon; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.company,\n\t\t\t\t.company a {\n\t\t\t\t\tcolor: slategrey; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.rating {\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tcolor:#999;\n\t\t\t\t\t&.plus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t\t&.minus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t[class^=\"icon-\"],\n\t\t\t[class*=\" icon-\"] {\n\t\t\t\tvertical-align: baseline;\n\t\t\t}\n\t\t}\n\t\t.queries {\n\t\t\tmargin-bottom: 1rem;\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\tbackground: #cccccc;\n\t\t\tborder-bottom: solid 1px ", ";\n\t\t\ttext-align: center;\n\t\t\toverflow: visible;\n\t\t\tcolor:#999;\n\t\t\t.moreOptions {\n\t\t\t\tp {\n\t\t\t\t\tmargin: 0.5rem 0 0.33rem;\n\t\t\t\t\tline-height: 1rem;\n\t\t\t\t}\n\t\t\t\tb {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t\tfont-weight:normal;\n\t\t\t\t}\n\t\t\t\t.moreOptions_link {\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t\tline-height: 0.5rem;\n\t\t\t\t\tpadding: 0 0 0.5rem;\n\t\t\t\t\tcursor:pointer;\n\t\t\t\t}\n\t\t\t\t.moreOptions_content {\n\t\t\t\t\tdisplay:none;\n\t\t\t\t}\n\t\t\t\t&.active {\n\t\t\t\t\t.moreOptions_content {\n\t\t\t\t\t\tdisplay:block;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\t&.Results {\n\t\t&.isLoading {\n\t\t\t.title {\n\t\t\t\tbackground: url(\"/assets/loading/3dots.gif\") center -13px no-repeat;\n\t\t\t\tspan {\n\t\t\t\t\topacity:0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.title {\n\t\t\tfont-size:1.25rem;\n\t\t\tline-height: 1.25rem;\n\t\t\ttext-align:center;\n\t\t\tcolor:#111;\n\t\t\tspan {\n\t\t\t\ttransition: opacity 0.2s;\n\t\t\t}\n\t\t}\n\t\t.content {\n\t\t\tmax-width: 53.8rem;\n\t\t\tmargin: 0.5rem auto;\n\t\t\t.result {\n\t\t\t\t/* display: flex; */\n\t\t\t\tmargin: 1.5rem 1rem;\n\t\t\t\ta {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t}\n\t\t\t\t.meta {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t\t* {\n\t\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\t}\n\t\t\t\t\t> * {\n\t\t\t\t\t\tmargin:0.2rem 0.2rem 0;\n\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t}\n\t\t\t\t\t.pills {\n\t\t\t\t\t\twhite-space:nowrap;\n\t\t\t\t\t\t.pill {\n\t\t\t\t\t\t\tborder: solid 1px #999;\n\t\t\t\t\t\t\tmargin:0 0 0 0.4rem;\n\t\t\t\t\t\t\tpadding: 0rem 0.5rem 0.1rem;\n\t\t\t\t\t\t\tborder-radius: 1rem;\n\t\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t\t\t[class^=\"icon-\"] {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\ttop:0.1rem;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.first {\n\t\t\t\t\t.meta {\n\t\t\t\t\t\t.pills {\n\t\t\t\t\t\t\tmargin-top:0.4rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&:not(.first) {\n\t\t\t\t\t.pill {\n\t\t\t\t\t\t.icon-check,\n\t\t\t\t\t\t.icon-ui-thumbs-up {\n\t\t\t\t\t\t\t/* margin:0 -0.2rem 0 0.2rem; */\n\t\t\t\t\t\t\ttop:0.05rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.text {\n\t\t\t\t\t\t\tdisplay:none;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.controls {\n\t\t\t\t\tmargin: 0.125rem;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tspan {\n\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\tmargin: 0.125rem 0.125rem 0.25rem 0.125rem;\n\t\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.content {\n\t\t\t\t}\n\t\t\t\t.location,\n\t\t\t\t.location a {\n\t\t\t\t\tcolor: salmon; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.company,\n\t\t\t\t.company a {\n\t\t\t\t\tcolor: slategrey; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.rating {\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tcolor:#999;\n\t\t\t\t\t&.plus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t\t&.minus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t[class^=\"icon-\"],\n\t\t\t[class*=\" icon-\"] {\n\t\t\t\tvertical-align: baseline;\n\t\t\t}\n\t\t}\n\t\t.queries {\n\t\t\tmargin-bottom: 1rem;\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\tbackground: #cccccc;\n\t\t\tborder-bottom: solid 1px ", ";\n\t\t\ttext-align: center;\n\t\t\toverflow: visible;\n\t\t\tcolor:#999;\n\t\t\t.moreOptions {\n\t\t\t\tp {\n\t\t\t\t\tmargin: 0.5rem 0 0.33rem;\n\t\t\t\t\tline-height: 1rem;\n\t\t\t\t}\n\t\t\t\tb {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t\tfont-weight:normal;\n\t\t\t\t}\n\t\t\t\t.moreOptions_link {\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t\tline-height: 0.5rem;\n\t\t\t\t\tpadding: 0 0 0.5rem;\n\t\t\t\t\tcursor:pointer;\n\t\t\t\t}\n\t\t\t\t.moreOptions_content {\n\t\t\t\t\tdisplay:none;\n\t\t\t\t}\n\t\t\t\t&.active {\n\t\t\t\t\t.moreOptions_content {\n\t\t\t\t\t\tdisplay:block;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);




var Results = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_mapsLink, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_mapsLink, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2);

/***/ }),

/***/ "./src/data/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export jobsAdd */
/* unused harmony export jobStatus */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filterAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return filterRemove; });
/* unused harmony export areaAddJobs */
var jobsAdd = function jobsAdd(jobs) {
	return {
		type: "JOBS_ADD",
		jobs: jobs.map ? jobs : []
	};
};
var jobStatus = function jobStatus(_id, _status) {
	return {
		type: "JOB_STATUS",
		_id: _id,
		_status: _status
	};
};

var filterAdd = function filterAdd(filter) {
	return {
		type: "FILTER_ADD",
		filter: filter
	};
};
var filterRemove = function filterRemove(filter) {
	return {
		type: "FILTER_REMOVE",
		filter: filter
	};
};

// export const areaSelect = area_route => ({
// 	type: "AREA_SELECT",
// 	area_route
// });
var areaAddJobs = function areaAddJobs(jobs, area_key) {
	return {
		type: "AREA_ADD_JOBS",
		jobs: jobs,
		area_key: area_key
	};
};

/***/ }),

/***/ "./src/data/reducers/areas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var initialState = {
	us: { route: "/", key: "us", label: "Select region...", filtersDefault: [], filters: [], jobs: [] },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)", filtersDefault: [], filters: [], jobs: [] },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)", filtersDefault: [], filters: [], jobs: [] },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)", filtersDefault: [], filters: [], jobs: [] }
};
var areas = function areas() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "AREA_ADD_JOBS":
			var newJobs = state[action.area_key].jobs.concat(action.jobs);
			// mutable array
			state[action.area_key].jobs = newJobs;
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
		default:
			return state;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (areas);

/***/ }),

/***/ "./src/data/reducers/filters.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);


var initialState = {
	// hint: {
	// 	_id: "hint",
	// 	value: "Use Regular Expressions in search. For example:",
	// 	property: "location",
	// 	multiplier: 0
	// },
	// example: {
	// 	_id: "example",
	// 	value: "c# | c++ | java[^s]+",
	// 	property: "text",
	// 	multiplier: 1
	// },
	// example2: {
	// 	_id: "example2",
	// 	value: "intern | junior | entry",
	// 	property: "text",
	// 	multiplier: -10
	// }
};

var filters = function filters() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "FILTER_ADD":
			delete state.hint;
			var _id = "";
			for (var prop in action.filter) {
				_id += action.filter[prop];
			}
			action.filter._id = _id;
			return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, state, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, _id, action.filter));
		case "FILTER_REMOVE":
			var newState = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, state);
			delete newState[action.filter._id];
			delete newState.hint;
			return newState;
		default:
			return state;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (filters);

/***/ }),

/***/ "./src/data/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jobs__ = __webpack_require__("./src/data/reducers/jobs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__("./src/data/reducers/filters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__areas__ = __webpack_require__("./src/data/reducers/areas.js");





var data = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
	jobs: __WEBPACK_IMPORTED_MODULE_1__jobs__["a" /* default */],
	filters: __WEBPACK_IMPORTED_MODULE_2__filters__["a" /* default */],
	areas: __WEBPACK_IMPORTED_MODULE_3__areas__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (data);

/***/ }),

/***/ "./src/data/reducers/jobs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);


var jobs = function jobs() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case "JOB_ADD":
			return [__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, action.job)].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(state));
		case "JOBS_ADD":
			return [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(action.jobs), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(state));
		case "JOB_STATUS":
			return state.map(function (job) {
				return job._id === action._id ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, job, { status: action._status }) : job;
			});
		default:
			return state;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (jobs);

/***/ }),

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__("./src/server.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);



var server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */]);

var currentApp = __WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */];

server.listen(3000 || 3000, function (error) {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

if (false) {
  console.log('✅  Server-side HMR Enabled!');

  module.hot.accept('./server', function () {
    console.log('🔁  HMR Reloading `./server`...');
    server.removeListener('request', currentApp);
    var newApp = require('./server').default;
    server.on('request', newApp);
    currentApp = newApp;
  });
}

/***/ }),

/***/ "./src/routes.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__ = __webpack_require__("@jaredpalmer/after");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__);




/* harmony default export */ __webpack_exports__["a"] = ([{
	path: "/",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/In.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				null,
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "/in/:area_key?",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/In.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				null,
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "/about",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/About.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				null,
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}, {
	path: "*",
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/404.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				null,
				"...Page Not Found..."
			);
		} // this is optional, just returns null by default
	})
}]);

/***/ }),

/***/ "./src/routes/404.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Page_js__ = __webpack_require__("./src/routes/styled/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");










var Home = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);

	function Home() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__components_Layout_js__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_7__styled_Page_js__["a" /* Page */],
					null,
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"h2",
						null,
						"Page Not Found"
					)
				)
			);
		}
	}]);

	return Home;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/routes/About.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Page_js__ = __webpack_require__("./src/routes/styled/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");










var Search = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Search, _Component);

	function Search() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Search);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Search.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Search)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Search, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__components_Layout_js__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_7__styled_Page_js__["a" /* Page */],
					null,
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
						"h2",
						null,
						"About us..."
					)
				)
			);
		}
	}]);

	return Search;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/routes/In.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__styled_Page_js__ = __webpack_require__("./src/routes/styled/Page.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_search_Results__ = __webpack_require__("./src/components/search/Results.js");












/*
    components
*/

var Search = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Search, _Component);

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Search, null, [{
		key: "getInitialProps",
		value: function () {
			var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
				var match = _ref.match;

				var props, res, data, _res, json;

				return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								/*
        	initial props - pass to page component by SSR
        */
								props = {
									area_key: match.params.area_key || "us",
									jobs: []
								};
								/*
        	fetch content - initial data
        */

								_context.prev = 1;
								_context.next = 4;
								return fetch("https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/" + props.area_key + "-50.json");

							case 4:
								res = _context.sent;
								_context.next = 7;
								return res.json();

							case 7:
								data = _context.sent;

								props.jobs = data || [];
								return _context.abrupt("return", props);

							case 12:
								_context.prev = 12;
								_context.t0 = _context["catch"](1);
								_context.prev = 14;
								_context.next = 17;
								return fetch("http://localhost:1080/api/v1/jobs/" + props.area_key + ".json?limit=50");

							case 17:
								_res = _context.sent;
								_context.next = 20;
								return _res.json();

							case 20:
								json = _context.sent;

								props.jobs = json.data || [];
								return _context.abrupt("return", props);

							case 25:
								_context.prev = 25;
								_context.t1 = _context["catch"](14);
								return _context.abrupt("return", props);

							case 28:
							case "end":
								return _context.stop();
						}
					}
				}, _callee, this, [[1, 12], [14, 25]]);
			}));

			function getInitialProps(_x) {
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
		/*
  	initial data in {this.props.jobs}, more complete data in {this.state.jobs}
  */

	}]);

	function Search() {
		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Search);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Search.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Search)).call(this));

		_this.state = {
			jobs: [],
			isLoading: false
		};
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Search, [{
		key: "updateContent",
		value: function () {
			var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
				var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var res, data, _res2, json;

				return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
					while (1) {
						switch (_context2.prev = _context2.next) {
							case 0:
								if (props.area_key) {
									_context2.next = 2;
									break;
								}

								return _context2.abrupt("return");

							case 2:
								this.setState({ isLoading: true });
								/*
        	fetch content - all data
        */
								_context2.prev = 3;
								_context2.next = 6;
								return fetch("https://d3rinrx0dlc7zz.cloudfront.net/api/v1/jobs/" + props.area_key + ".json");

							case 6:
								res = _context2.sent;
								_context2.next = 9;
								return res.json();

							case 9:
								data = _context2.sent;

								this.setState({ jobs: data || [], isLoading: false });
								_context2.next = 27;
								break;

							case 13:
								_context2.prev = 13;
								_context2.t0 = _context2["catch"](3);
								_context2.prev = 15;
								_context2.next = 18;
								return fetch("http://localhost:1080/api/v1/jobs/" + props.area_key + ".json");

							case 18:
								_res2 = _context2.sent;
								_context2.next = 21;
								return _res2.json();

							case 21:
								json = _context2.sent;

								this.setState({ jobs: json.data || [], isLoading: false });
								_context2.next = 27;
								break;

							case 25:
								_context2.prev = 25;
								_context2.t1 = _context2["catch"](15);

							case 27:
							case "end":
								return _context2.stop();
						}
					}
				}, _callee2, this, [[3, 13], [15, 25]]);
			}));

			function updateContent() {
				return _ref3.apply(this, arguments);
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
			if (props.jobs && props.jobs.length) {
				/*
    	first - throw out old state and replace with new props
    */
				this.setState({ jobs: props.jobs });
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
			if (!this.state.jobs.length && this.props.area_key) {
				this.updateContent(this.props);
			}
		}
	}, {
		key: "render",
		value: function render() {
			/*
   	this.props || this.state
   */
			var jobs = this.state.jobs.length ? this.state.jobs : this.props.jobs;
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_10__components_Layout_js__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_9__styled_Page_js__["a" /* Page */],
					{ className: "Page " + (this.state.isLoading ? " isLoading" : "") },
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__components_search_Results__["a" /* default */], { area_key: this.props.area_key || "us", jobs: jobs || [], className: this.state.isLoading ? " isLoading" : "" })
				)
			);
		}
	}]);

	return Search;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/routes/styled/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t&.isLoading {\n\t\t.query_input {\n\t\t\tbackground: #fff url(\"/assets/loading/3dots.gif\") center no-repeat;\n\t\t}\n\t}\n\t.bottom {\n\t\tbackground: #111;\n\t\tcolor: #fff;\n\t\tpadding: 1rem;\n\t\t* {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.queries {\n\t\tpadding: 0.5rem 0;\n\t\tbackground: #cccccc;\n\t}\n\t.page-title {\n\t\tmargin: 2rem auto 1rem;\n\t\ttext-align: center;\n\t\tcolor: ", ";\n\t\twhite-space: nowrap;\n\t\t> * {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n\t.home-map {\n\t\tmargin: 1.5rem 0 1.5rem 0;\n\t}\n\t.home-map-content {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tpadding: 30% 0;\n\t\tbackground: url(/images/map-outline-us-states.png) no-repeat;\n\t\tbackground-size: contain;\n\t}\n\t.ui-hotspot.home-map-hotspot {\n\t\twidth: 2rem;\n\t\theight: 2rem;\n\t\t&:before {\n\t\t\tbackground: #ffd700;\n\t\t}\n\t\t&:after {\n\t\t\t/* background-image: radial-gradient(circle, #ffd700, #ffca00, #ffbe00, #ffb100, #ffa505); */\n\t\t\tbackground: #ffbe00;\n\t\t}\n\t}\n\t.ui-hotspot {\n\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\tbox-shadow: 0 0 10px #ffffff;\n\t\t@keyframes pulse {\n\t\t\t0% {\n\t\t\t\ttransform: scale(1);\n\t\t\t\topacity: 0.5;\n\t\t\t}\n\t\t\t70%,\n\t\t\t100% {\n\t\t\t\ttransform: scale(2);\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t&:before {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: inline-block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0%;\n\t\t\tleft: 0%;\n\t\t\tbackground: rgb(222, 222, 222);\n\t\t\topacity: 0.5;\n\t\t\tanimation: pulse 3s ease-in-out infinite;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: inline-block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0%;\n\t\t\tleft: 0%;\n\t\t\tbackground: orange;\n\t\t\topacity: 1;\n\t\t}\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tlabel {\n\t\t\tcursor: pointer;\n\t\t\tposition: absolute;\n\t\t\ttop: -0.05rem;\n\t\t\tleft: 2.5rem;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 1.25rem;\n\t\t\tcolor: #ffa505;\n\t\t\ttext-shadow: 0 0 10px #ffffff;\n\t\t}\n\t}\n"], ["\n\t&.isLoading {\n\t\t.query_input {\n\t\t\tbackground: #fff url(\"/assets/loading/3dots.gif\") center no-repeat;\n\t\t}\n\t}\n\t.bottom {\n\t\tbackground: #111;\n\t\tcolor: #fff;\n\t\tpadding: 1rem;\n\t\t* {\n\t\t\tcolor: #fff;\n\t\t}\n\t}\n\t.queries {\n\t\tpadding: 0.5rem 0;\n\t\tbackground: #cccccc;\n\t}\n\t.page-title {\n\t\tmargin: 2rem auto 1rem;\n\t\ttext-align: center;\n\t\tcolor: ", ";\n\t\twhite-space: nowrap;\n\t\t> * {\n\t\t\tdisplay: inline-block;\n\t\t}\n\t}\n\t.home-map {\n\t\tmargin: 1.5rem 0 1.5rem 0;\n\t}\n\t.home-map-content {\n\t\tposition: relative;\n\t\twidth: 100%;\n\t\tpadding: 30% 0;\n\t\tbackground: url(/images/map-outline-us-states.png) no-repeat;\n\t\tbackground-size: contain;\n\t}\n\t.ui-hotspot.home-map-hotspot {\n\t\twidth: 2rem;\n\t\theight: 2rem;\n\t\t&:before {\n\t\t\tbackground: #ffd700;\n\t\t}\n\t\t&:after {\n\t\t\t/* background-image: radial-gradient(circle, #ffd700, #ffca00, #ffbe00, #ffb100, #ffa505); */\n\t\t\tbackground: #ffbe00;\n\t\t}\n\t}\n\t.ui-hotspot {\n\t\tcursor: pointer;\n\t\tposition: absolute;\n\t\tbox-shadow: 0 0 10px #ffffff;\n\t\t@keyframes pulse {\n\t\t\t0% {\n\t\t\t\ttransform: scale(1);\n\t\t\t\topacity: 0.5;\n\t\t\t}\n\t\t\t70%,\n\t\t\t100% {\n\t\t\t\ttransform: scale(2);\n\t\t\t\topacity: 0;\n\t\t\t}\n\t\t}\n\t\t&:before {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: inline-block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0%;\n\t\t\tleft: 0%;\n\t\t\tbackground: rgb(222, 222, 222);\n\t\t\topacity: 0.5;\n\t\t\tanimation: pulse 3s ease-in-out infinite;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: \"\";\n\t\t\tdisplay: inline-block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tposition: absolute;\n\t\t\ttop: 0%;\n\t\t\tleft: 0%;\n\t\t\tbackground: orange;\n\t\t\topacity: 1;\n\t\t}\n\t\twidth: 20px;\n\t\theight: 20px;\n\t\tlabel {\n\t\t\tcursor: pointer;\n\t\t\tposition: absolute;\n\t\t\ttop: -0.05rem;\n\t\t\tleft: 2.5rem;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 1.25rem;\n\t\t\tcolor: #ffa505;\n\t\t\ttext-shadow: 0 0 10px #ffffff;\n\t\t}\n\t}\n"]);




var Page = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_title1);

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__("babel-runtime/helpers/asyncToGenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jaredpalmer_after__ = __webpack_require__("@jaredpalmer/after");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jaredpalmer_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__jaredpalmer_after__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./src/routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Document__ = __webpack_require__("./src/Document.js");



var _this = this;






var assets = __webpack_require__("./build/assets.json");

var server = __WEBPACK_IMPORTED_MODULE_2_express___default()();
server.disable("x-powered-by").use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static("/www/jsjobs/app/build/public")).get("/*", function () {
	var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(req, res) {
		var html;
		return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return Object(__WEBPACK_IMPORTED_MODULE_3__jaredpalmer_after__["render"])({
							req: req,
							res: res,
							routes: __WEBPACK_IMPORTED_MODULE_4__routes__["a" /* default */],
							assets: assets,
							document: __WEBPACK_IMPORTED_MODULE_5__Document__["a" /* default */],
							// Anything else you add here will be made available
							// within getInitialProps(ctx)
							// e.g a redux store...
							customThing: "thing"
						});

					case 3:
						html = _context.sent;

						res.send(html);
						_context.next = 10;
						break;

					case 7:
						_context.prev = 7;
						_context.t0 = _context["catch"](0);

						res.json(_context.t0);

					case 10:
					case "end":
						return _context.stop();
				}
			}
		}, _callee, _this, [[0, 7]]);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

/* harmony default export */ __webpack_exports__["a"] = (server);

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/index.js");


/***/ }),

/***/ "@jaredpalmer/after":
/***/ (function(module, exports) {

module.exports = require("@jaredpalmer/after");

/***/ }),

/***/ "babel-runtime/core-js/object/assign":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/defineProperty":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/taggedTemplateLiteral":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ "babel-runtime/helpers/typeof":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/typeof");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map