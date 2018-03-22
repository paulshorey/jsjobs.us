exports.id = 0;
exports.modules = {

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

/***/ })

};
//# sourceMappingURL=0.6c67c340db6f3096d5e9.hot-update.js.map