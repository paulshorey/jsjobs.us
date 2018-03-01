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

module.exports = {"client":{"js":"/static/js/bundle.eb6b4095.js"}}

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Document_styled_js__ = __webpack_require__("./src/Document.styled.js");






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
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("meta", {
						name: "viewport",
						content: "width=device-width, initial-scale=1"
					}),
					helmet.title.toComponent(),
					helmet.meta.toComponent(),
					helmet.link.toComponent()
				),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"body",
					bodyAttrs,
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__jaredpalmer_after__["AfterRoot"], null),
					styleTags,
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__jaredpalmer_after__["AfterData"], { data: data }),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("script", {
						type: "text/javascript",
						src: assets.client.js,
						defer: true,
						crossOrigin: "anonymous"
					})
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


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(['\n\n\t/**************************************************\n\t\treset\n\t**************************************************/\n\tinput:-webkit-autofill {\n\t\t\t-webkit-box-shadow: 0 0 0px 1000px white inset;\n\t}\n\t/* \n\t::-webkit-scrollbar {\n\t-webkit-appearance: none;\n\twidth: 7px;\n\t}\n\t::-webkit-scrollbar-thumb {\n\tborder-radius: 4px;\n\tbackground-color: rgba(0, 0, 0, .5);\n\t-webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n\t} \n\t*/\n\thtml, body, #app, #pages {\n\t\theight:100%;\n\t\twidth:100%;\n\t}\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n        color:navy;      \n        background:lightblue;\n\t}\n\n\n\t/**************************************************\n\t\tresponsive text\n\t**************************************************/\n\thtml {\n\t\tfont-size:16.5px;\n\t}\n\t@media (max-width:950px), (max-height:750px) {\n\t\thtml {\n\t\t\tfont-size:15.5px;\n\t\t}\n\t}\n\t@media (max-width:750px), (max-height:650px) {\n\t\thtml {\n\t\t\tfont-size:14.5px;\n\t\t}\n\t}\n\t@media (max-width:380px), (max-height:380px) {\n\t\thtml {\n\t\t\tfont-size:13.5px;\n\t\t}\n\t}\n\t@media (max-width:330px), (max-height:330px) {\n\t\thtml {\n\t\t\tfont-size:12.5px;\n\t\t}\n\t}\n\th1,h2,h3,h4,h5,h6,p {\n\t\tmargin:0;\n\t\tpadding:0;\n\t\tline-height:1.25rem;\n\t}\n\tp {\n\t\tmargin:0.75rem 0;\n\t\tfont-size:1rem;\n\t}\n\th1 {\n\t\tfont-size:1.9rem;\n\t}\n\th2 {\n\t\tfont-size:1.75rem;\n\t}\n\th3 {\n\t\tfont-size:1.6rem;\n\t}\n\th4 {\n\t\tfont-size:1.45rem;\n\t}\n\th5 {\n\t\tfont-size:1.3rem;\n\t}\n\th6 {\n\t\tfont-size:1.15rem;\n\t}\n\tli {\n\t\tpadding-bottom:0.5rem;\n\t}\n\n\n\t/**************************************************\n\t\tstyle\n\t**************************************************/\n\t* {\n\t\tfont-family: ', ' !important;\n\t\tvertical-align:middle; /* hope this doesn\'t mess anything up - but in my experience, having vertical-align middle was always more useful than not - PS */\n\t}\n\tbody {\n\t\tbackground: ', ';\n\t\tcolor: ', ';\n\t}\n\ta {\n\t\tcolor:rgb(100, 123, 146);\n\t\ttext-decoration: none;\n\t}\n\t.nav_left {\n\t\tmin-width:', ';\n\t\tmargin-right:1rem;\n\t}\n\t@media (min-width:751px) {\n\t\t.nav_left {\n\t\t\tmargin-left:1rem;\n\t\t}\n\t}\n\t.nav_center {\n\t\tflex-grow:1;\n\t}\n\t.nav_right {\n\t\ttext-align:right;\n\t}\n\t.color_success {\n\t\tcolor: ', ';\n\t}\n\t.color_error {\n\t\tcolor: ', ';\n\t}\n\t.fix_textWrap {\n\t\tdisplay: inline-block;\n\t}\n\n\t/**************************************************\n\t\ticon\n\t**************************************************/\n\t.utfIcon,\n\t.fontIcon,\n\t.fontIcon:before {\n\t\twidth:1em;\n\t\theight:1em;\n\t\tline-height:1em; \n\t\tfont-size:1em;\n\t\tpadding:0;\n\t\tmargin:0;\n\t\ttext-align:center;\n\t\tdisplay:inline-block;\n\t\tvertical-align:baseline;\n\t}\n\t.fontIcon.alignWithText,\n\t.fontIcon.alignWithText:before {\n\t\tvertical-align:top;\n\t}\n\t.fontIconText {\n\t\tpadding-top:0.25rem;\n\t\tdisplay:inline-block;\n\t}\n\n\n\t/**************************************************\n\t\tbutton loader ???\n\t**************************************************/\n\t@keyframes loader_button_opacitychange{\n\t\t10%, 100%{\n\t\t\topacity: 0;\n\t\t}\n\t\t60%{\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t.loader_button {\n\t\tborder-radius: 100%;\n\t\tposition: relative;\n\t\tmargin: 0 auto 0 auto !important;\n\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tz-index:100;\n\t\tbackground:none;\n\t\t\t> div {\n\t\t\t\twidth:100%;\n\t\t\t\ttext-align:center;\n\t\t\tfont-size:1em;\n\t\t\tline-height:1em;\n\t\t\tspan{\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 0.75rem;\n\t\t\t\theight: 0.75rem;\n\t\t\t\tborder-radius: 100%;\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t\tmargin: 0;\n\t\t\t\topacity: 0;\n\t\t\t\tfont-size:1em;\n\t\t\t\tline-height:1em;\n\t\t\t}\n\t\t\tspan:nth-child(1){\n\t\t\t\tanimation: loader_button_opacitychange 1s ease-in-out infinite;\n\t\t\t}\n\t\t\tspan:nth-child(2){\n\t\t\t\tanimation: loader_button_opacitychange 1s ease-in-out 0.3s infinite;\n\t\t\t\tmargin: 0 0.25rem;\n\t\t\t}\n\t\t\tspan:nth-child(3){\n\t\t\t\tanimation: loader_button_opacitychange 1s ease-in-out 0.6s infinite;\n\t\t\t}\n\t\t}\t\n\t}\n\n\n\n\t/**************************************************\n\t\t\n\t\tREAD THIS COMMENT:\n\n\t\t* do not remove this section\n\t\t* use this as a template - copy paste these rules, and remove everything except @media rules\n\t\t* also good to use as a demo to figure out screen size breakpoints - keep as is and simply remove the !important flag below\n\t**************************************************/\n\t.responsive_label {\n\t\tdisplay:none !important; /* !important to disable demo message */\n\t\tposition:fixed;\n\t\ttop:0;\n\t\tleft:0;\n\t\twidth:100%;\n\t\theight:0.9rem;\n\t\tfont-size:1.25rem;\n\t\tline-height:1.25rem;\n\t\ttext-align:center;\n\t\tbackground:orange;\n\t\tcolor:black;\n\t\topacity:0.5;\n\t}\n\t\n\t/* \n\t\tdesktop \n\t*/\n\t@media (min-width: 751px) and (min-height:601px) {\n\t\t#responsive_desktop {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\t\n\t/* \n\t\tNOT desktop \n\t*/\n\t@media (max-width: 750px), (max-height:600px) {\n\t}\n\n\t/* \n\t\ttablet portrait \n\t*/\n\t@media (min-width:601px) and (max-width: 750px) and (min-height: 601px) {\n\t\t#responsive_tablet_portrait {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\n\t/* \n\t\ttablet landscape \n\t*/\n\t@media (min-width: 750px) and (max-height: 600px) {\n\t\t#responsive_tablet_landscape {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\n\t/* \n\t\tphone portrait \n\t*/\n\t@media (max-width: 600px) {\n\t\t#responsive_phone_portrait {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\n\t/* \n\t\tphone landscape \n\t*/\n\t@media (min-width:601px) and (max-width: 750px) and (max-height: 600px) {\n\t\t#responsive_phone_landscape {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\n\t/* \n\t\tNOT phone\n\t*/\n\t@media (min-width: 751px), (min-width:601px) and (min-height: 601px) {\n\t}\n'], ['\n\n\t/**************************************************\n\t\treset\n\t**************************************************/\n\tinput:-webkit-autofill {\n\t\t\t-webkit-box-shadow: 0 0 0px 1000px white inset;\n\t}\n\t/* \n\t::-webkit-scrollbar {\n\t-webkit-appearance: none;\n\twidth: 7px;\n\t}\n\t::-webkit-scrollbar-thumb {\n\tborder-radius: 4px;\n\tbackground-color: rgba(0, 0, 0, .5);\n\t-webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n\t} \n\t*/\n\thtml, body, #app, #pages {\n\t\theight:100%;\n\t\twidth:100%;\n\t}\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n        color:navy;      \n        background:lightblue;\n\t}\n\n\n\t/**************************************************\n\t\tresponsive text\n\t**************************************************/\n\thtml {\n\t\tfont-size:16.5px;\n\t}\n\t@media (max-width:950px), (max-height:750px) {\n\t\thtml {\n\t\t\tfont-size:15.5px;\n\t\t}\n\t}\n\t@media (max-width:750px), (max-height:650px) {\n\t\thtml {\n\t\t\tfont-size:14.5px;\n\t\t}\n\t}\n\t@media (max-width:380px), (max-height:380px) {\n\t\thtml {\n\t\t\tfont-size:13.5px;\n\t\t}\n\t}\n\t@media (max-width:330px), (max-height:330px) {\n\t\thtml {\n\t\t\tfont-size:12.5px;\n\t\t}\n\t}\n\th1,h2,h3,h4,h5,h6,p {\n\t\tmargin:0;\n\t\tpadding:0;\n\t\tline-height:1.25rem;\n\t}\n\tp {\n\t\tmargin:0.75rem 0;\n\t\tfont-size:1rem;\n\t}\n\th1 {\n\t\tfont-size:1.9rem;\n\t}\n\th2 {\n\t\tfont-size:1.75rem;\n\t}\n\th3 {\n\t\tfont-size:1.6rem;\n\t}\n\th4 {\n\t\tfont-size:1.45rem;\n\t}\n\th5 {\n\t\tfont-size:1.3rem;\n\t}\n\th6 {\n\t\tfont-size:1.15rem;\n\t}\n\tli {\n\t\tpadding-bottom:0.5rem;\n\t}\n\n\n\t/**************************************************\n\t\tstyle\n\t**************************************************/\n\t* {\n\t\tfont-family: ', ' !important;\n\t\tvertical-align:middle; /* hope this doesn\'t mess anything up - but in my experience, having vertical-align middle was always more useful than not - PS */\n\t}\n\tbody {\n\t\tbackground: ', ';\n\t\tcolor: ', ';\n\t}\n\ta {\n\t\tcolor:rgb(100, 123, 146);\n\t\ttext-decoration: none;\n\t}\n\t.nav_left {\n\t\tmin-width:', ';\n\t\tmargin-right:1rem;\n\t}\n\t@media (min-width:751px) {\n\t\t.nav_left {\n\t\t\tmargin-left:1rem;\n\t\t}\n\t}\n\t.nav_center {\n\t\tflex-grow:1;\n\t}\n\t.nav_right {\n\t\ttext-align:right;\n\t}\n\t.color_success {\n\t\tcolor: ', ';\n\t}\n\t.color_error {\n\t\tcolor: ', ';\n\t}\n\t.fix_textWrap {\n\t\tdisplay: inline-block;\n\t}\n\n\t/**************************************************\n\t\ticon\n\t**************************************************/\n\t.utfIcon,\n\t.fontIcon,\n\t.fontIcon:before {\n\t\twidth:1em;\n\t\theight:1em;\n\t\tline-height:1em; \n\t\tfont-size:1em;\n\t\tpadding:0;\n\t\tmargin:0;\n\t\ttext-align:center;\n\t\tdisplay:inline-block;\n\t\tvertical-align:baseline;\n\t}\n\t.fontIcon.alignWithText,\n\t.fontIcon.alignWithText:before {\n\t\tvertical-align:top;\n\t}\n\t.fontIconText {\n\t\tpadding-top:0.25rem;\n\t\tdisplay:inline-block;\n\t}\n\n\n\t/**************************************************\n\t\tbutton loader ???\n\t**************************************************/\n\t@keyframes loader_button_opacitychange{\n\t\t10%, 100%{\n\t\t\topacity: 0;\n\t\t}\n\t\t60%{\n\t\t\topacity: 1;\n\t\t}\n\t}\n\t.loader_button {\n\t\tborder-radius: 100%;\n\t\tposition: relative;\n\t\tmargin: 0 auto 0 auto !important;\n\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tz-index:100;\n\t\tbackground:none;\n\t\t\t> div {\n\t\t\t\twidth:100%;\n\t\t\t\ttext-align:center;\n\t\t\tfont-size:1em;\n\t\t\tline-height:1em;\n\t\t\tspan{\n\t\t\t\tdisplay: inline-block;\n\t\t\t\twidth: 0.75rem;\n\t\t\t\theight: 0.75rem;\n\t\t\t\tborder-radius: 100%;\n\t\t\t\tbackground-color: #ffffff;\n\t\t\t\tmargin: 0;\n\t\t\t\topacity: 0;\n\t\t\t\tfont-size:1em;\n\t\t\t\tline-height:1em;\n\t\t\t}\n\t\t\tspan:nth-child(1){\n\t\t\t\tanimation: loader_button_opacitychange 1s ease-in-out infinite;\n\t\t\t}\n\t\t\tspan:nth-child(2){\n\t\t\t\tanimation: loader_button_opacitychange 1s ease-in-out 0.3s infinite;\n\t\t\t\tmargin: 0 0.25rem;\n\t\t\t}\n\t\t\tspan:nth-child(3){\n\t\t\t\tanimation: loader_button_opacitychange 1s ease-in-out 0.6s infinite;\n\t\t\t}\n\t\t}\t\n\t}\n\n\n\n\t/**************************************************\n\t\t\n\t\tREAD THIS COMMENT:\n\n\t\t* do not remove this section\n\t\t* use this as a template - copy paste these rules, and remove everything except @media rules\n\t\t* also good to use as a demo to figure out screen size breakpoints - keep as is and simply remove the !important flag below\n\t**************************************************/\n\t.responsive_label {\n\t\tdisplay:none !important; /* !important to disable demo message */\n\t\tposition:fixed;\n\t\ttop:0;\n\t\tleft:0;\n\t\twidth:100%;\n\t\theight:0.9rem;\n\t\tfont-size:1.25rem;\n\t\tline-height:1.25rem;\n\t\ttext-align:center;\n\t\tbackground:orange;\n\t\tcolor:black;\n\t\topacity:0.5;\n\t}\n\t\n\t/* \n\t\tdesktop \n\t*/\n\t@media (min-width: 751px) and (min-height:601px) {\n\t\t#responsive_desktop {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\t\n\t/* \n\t\tNOT desktop \n\t*/\n\t@media (max-width: 750px), (max-height:600px) {\n\t}\n\n\t/* \n\t\ttablet portrait \n\t*/\n\t@media (min-width:601px) and (max-width: 750px) and (min-height: 601px) {\n\t\t#responsive_tablet_portrait {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\n\t/* \n\t\ttablet landscape \n\t*/\n\t@media (min-width: 750px) and (max-height: 600px) {\n\t\t#responsive_tablet_landscape {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\n\t/* \n\t\tphone portrait \n\t*/\n\t@media (max-width: 600px) {\n\t\t#responsive_phone_portrait {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\n\t/* \n\t\tphone landscape \n\t*/\n\t@media (min-width:601px) and (max-width: 750px) and (max-height: 600px) {\n\t\t#responsive_phone_landscape {\n\t\t\tdisplay:block;\n\t\t}\n\t}\n\n\t/* \n\t\tNOT phone\n\t*/\n\t@media (min-width: 751px), (min-width:601px) and (min-height: 601px) {\n\t}\n']);




/*
	notes:
	* Built version (as in "npm run build") can't handle "%" height on a container layout element. So, using "vh" instead of "%" wherever possible
*/

Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["injectGlobal"])(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].fontFamily, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].colorDark2, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].colorOnDark3, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].sidebarNavWidth, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].colorGreen1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].colorWarn1);

/***/ }),

/***/ "./src/Document.theme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
	topHeight: '4.5rem',
	sidebarNavWidth: '244px',
	fontFamily: 'Agenda, Helvetica, sans-serif',
	containerMaxWidth: '1080px',
	colorNeutral: '#999999',
	colorGreen1: '#81c341',
	colorGreen2: '#6ab81c',
	colorGreen3: '#659520',
	colorBlue1: '#277a80',
	colorBlue2: '#39617a',
	colorBlue3: '#324E68',
	colorOrange1: '#fcca56',
	colorOrange2: '#fdb713',
	colorOrange3: '#f1a700',
	colorWarn1: 'rgb(244, 67, 54)',
	colorWarn2: '#d9534f',
	colorWarn3: '#bf4343',
	colorDark1: 'rgb(0, 0, 0)',
	colorDark2: 'rgb(30,30,30)',
	colorDark3: 'rgb(60,60,60)',
	colorLight1: 'rgb(255, 255, 255)',
	colorLight2: 'rgb(245,245,245)',
	colorLight3: 'rgb(230,230,230)',
	colorOnDark1: 'rgba(255, 255, 255, 0.9)',
	colorOnDark2: 'rgba(255, 255, 255, 0.6)',
	colorOnDark3: 'rgba(255, 255, 255, 0.3)',
	colorOnLight1: 'rgba(0, 0, 0, 0.8)',
	colorOnLight2: 'rgba(0, 0, 0, 0.5)',
	colorOnLight3: 'rgba(0, 0, 0, 0.2)'
});

/***/ }),

/***/ "./src/components/Layout.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_Header_js__ = __webpack_require__("./src/components/layout/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout_Footer_js__ = __webpack_require__("./src/components/layout/Footer.js");









var Layout = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Layout, _React$Component);

  function Layout() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Layout);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Layout.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Layout)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Layout, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'Layout' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__layout_Header_js__["a" /* default */], null),
        this.props.children || null,
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__layout_Footer_js__["a" /* default */], null)
      );
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./src/components/layout/Footer.js":
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






// import { Link } from 'react-router-dom'

var Footer = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Footer, _React$Component);

  function Footer() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Footer);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Footer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Footer)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        "div",
        { className: "Footer" },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          "h1",
          null,
          "FOOTER"
        )
      );
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./src/components/layout/Header.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Nav__ = __webpack_require__("./src/components/layout/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_Input__ = __webpack_require__("./src/components/search/Input.js");









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
				"div",
				{ className: "Header" },
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__search_Input__["a" /* default */], null),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"h1",
					null,
					"HEADER"
				),
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Nav__["a" /* default */], null)
			);
		}
	}]);

	return Header;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./src/components/layout/Nav.js":
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








var Nav = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Nav, _React$Component);

  function Nav() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Nav);

    return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Nav.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Nav)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Nav, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'div',
        { className: 'Nav' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'h1',
          null,
          'NAV'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'Nav_section' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
              { to: '/' },
              'home \xBB'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
              { to: '/about' },
              'about \xBB'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'div',
          { className: 'Nav_section' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
              { to: '/search/samsung' },
              'search "samsung" \xBB'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
              { to: '/search/apple' },
              'search "apple" \xBB'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
              { to: '/search/vaco' },
              'search "vaco" \xBB'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'div',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_6_react_router_dom__["Link"],
              { to: '/search/google' },
              'search "google" \xBB'
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./src/components/search/Input.js":
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







var SearchInput = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(SearchInput, _React$Component);

	function SearchInput() {
		__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, SearchInput);

		return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (SearchInput.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(SearchInput)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(SearchInput, [{
		key: "handleUsernameSubmission",
		value: function handleUsernameSubmission(e) {
			if (e) {
				e.preventDefault();
			}
			var name = this.refs.usernameItem.value;
			console.log("Your name is", name);
		}
	}, {
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
				"div",
				null,
				__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
					"form",
					{ onSubmit: this.handleUsernameSubmission },
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { placeholder: "enter username", ref: "usernameItem" }),
					__WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement("input", { type: "submit", value: "Submit username" })
				)
			);
		}
	}]);

	return SearchInput;
}(__WEBPACK_IMPORTED_MODULE_5_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (SearchInput);

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

/***/ "./src/modules/getAPI.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAPIHostname; });
var getAPIHostname = function getAPIHostname() {
	if (typeof window === "undefined") {
		console.log('getAPIHostname => http://localhost:1080');
		return "http://localhost:1080";
	} else {
		if (window.location.hostname === "localhost") {
			console.log("getAPIHostname => " + window.location.protocol + "//" + window.location.hostname + ":1080");
			return window.location.protocol + "//" + window.location.hostname + ":1080";
		} else {
			console.log("getAPIHostname => " + window.location.protocol + "//" + window.location.hostname);
			return window.location.protocol + "//" + window.location.hostname;
		}
	}
};

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
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/Home.js"));
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
	path: "/search/:search?",
	exact: true,
	component: Object(__WEBPACK_IMPORTED_MODULE_1__jaredpalmer_after__["asyncComponent"])({
		loader: function loader() {
			return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/routes/Search.js"));
		}, // required
		Placeholder: function Placeholder() {
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				"div",
				null,
				"...LOADING..."
			);
		} // this is optional, just returns null by default
	})
}]);

/***/ }),

/***/ "./src/routes/About.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_router_dom__);












var Home = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Home, _Component);

	function Home() {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Home);

		return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Home)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Home, [{
		key: "render",
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
				"div",
				{ className: "Home" },
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
					"div",
					{ className: "Home-header" },
					__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
						"h2",
						null,
						"Welcome to After.js ",
						this.props.whatever
					)
				),
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
					"p",
					{ className: "Home-intro" },
					"To get started, edit ",
					__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
						"code",
						null,
						"src/Home.js"
					),
					" or",
					" ",
					__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
						"code",
						null,
						"src/About.js"
					),
					"and save to reload."
				),
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_10_react_router_dom__["Link"],
					{ to: "/" },
					"Back to Home ->"
				)
			);
		}
	}], [{
		key: "getInitialProps",
		value: function () {
			var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
				var req = _ref.req,
				    res = _ref.res,
				    match = _ref.match,
				    history = _ref.history,
				    location = _ref.location,
				    ctx = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_objectWithoutProperties___default()(_ref, ["req", "res", "match", "history", "location"]);

				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								return _context.abrupt("return", { whatever: "stuff" });

							case 1:
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

/***/ }),

/***/ "./src/routes/Home.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_getAPI__ = __webpack_require__("./src/modules/getAPI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_Layout_js__ = __webpack_require__("./src/components/Layout.js");














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
						{ key: job._id },
						__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
							"div",
							null,
							job.text
						),
						__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
							"sup",
							null,
							job.location
						)
					));
				});
			}
			return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_12__components_Layout_js__["a" /* default */],
				null,
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_10__styled_Home_js__["a" /* Home */],
					null,
					__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
						"h2",
						null,
						"Home search=\"",
						this.props.match.params.search,
						"\" results:",
						" ",
						this.props.jobs_count
					),
					__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
						"div",
						null,
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
								return fetch(Object(__WEBPACK_IMPORTED_MODULE_11__modules_getAPI__["a" /* getAPIHostname */])() + "/api/v1/jobs?text=");

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

/***/ }),

/***/ "./src/routes/Search.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__styled_Search_js__ = __webpack_require__("./src/routes/styled/Search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_getAPI__ = __webpack_require__("./src/modules/getAPI.js");













var Search = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_7_babel_runtime_helpers_inherits___default()(Search, _Component);

	function Search() {
		__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_classCallCheck___default()(this, Search);

		return __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Search.__proto__ || __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_get_prototype_of___default()(Search)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_createClass___default()(Search, [{
		key: "render",
		value: function render() {
			// get on with it...
			var Jobs = [];
			if (this.props && this.props.jobs) {
				this.props.jobs.forEach(function (job, i) {
					Jobs.push(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
						"div",
						{ key: job._id },
						__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
							"div",
							null,
							job.text
						),
						__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
							"sup",
							null,
							job.location
						)
					));
				});
			}
			return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_10__styled_Search_js__["a" /* Search */],
				null,
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
					"h2",
					null,
					"Search \"",
					this.props.match.params.search,
					"\" results:",
					" ",
					this.props.jobs_count
				),
				__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
					"div",
					null,
					Jobs
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
								return fetch(Object(__WEBPACK_IMPORTED_MODULE_11__modules_getAPI__["a" /* getAPIHostname */])() + "/api/v1/jobs?text=" + match.params.search);

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

	return Search;
}(__WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/routes/styled/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(['\n\t/* background:yellow; */\n'], ['\n\t/* background:yellow; */\n']);



var Home = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);

/***/ }),

/***/ "./src/routes/styled/Search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(['\n\t/* background:yellow; */\n'], ['\n\t/* background:yellow; */\n']);



var Search = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);

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
server.disable("x-powered-by").use(__WEBPACK_IMPORTED_MODULE_2_express___default.a.static("/www/ps-jobs/app/build/public")).get("/*", function () {
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

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/objectWithoutProperties":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/helpers/taggedTemplateLiteral":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/taggedTemplateLiteral");

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

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map