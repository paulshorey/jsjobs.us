exports.id = 0;
exports.modules = {

/***/ "./src/components/search/styled/Results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Results; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__ = __webpack_require__("babel-runtime/helpers/taggedTemplateLiteral");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__ = __webpack_require__("./src/Document.theme.js");


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t.moreOptions {\n\t\tcolor:#666;\n\t\tmargin:0;\n\t\ttext-decoration:underline;\n\t}\n\t.results {\n\t\tmax-width: 53.8rem;\n\t\tmargin: 0.5rem auto;\n\t\t.result {\n\t\t\t/* display: flex; */\n\t\t\tmargin: 1.5rem 1rem;\n\t\t\tb {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t\t.meta {\n\t\t\t\tdisplay: block;\n\t\t\t\ttext-align: right;\n\t\t\t\t* {\n\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t}\n\t\t\t\t> * {\n\t\t\t\t\tmargin:0.2rem 0.2rem 0;\n\t\t\t\t}\n\t\t\t\t.pills {\n\t\t\t\t\twhite-space:nowrap;\n\t\t\t\t\t.pill {\n\t\t\t\t\t\tborder: solid 1px #999;\n\t\t\t\t\t\tmargin:0 0.33rem;\n\t\t\t\t\t\tpadding: 0rem 0.5rem 0.1rem;\n\t\t\t\t\t\tborder-radius: 1rem;\n\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t\t[class^=\"icon-\"] {\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\ttop:0.1rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t&.first {\n\t\t\t\t.meta {\n\t\t\t\t\t> *{\n\t\t\t\t\t\tmargin-top:0.4rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t&:not(.first) {\n\t\t\t\t.pill {\n\t\t\t\t\t.icon-check,\n\t\t\t\t\t.icon-ui-thumbs-up {\n\t\t\t\t\t\t/* margin:0 -0.2rem 0 0.2rem; */\n\t\t\t\t\t\ttop:0.05rem;\n\t\t\t\t\t}\n\t\t\t\t\t.text {\n\t\t\t\t\t\tdisplay:none;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.controls {\n\t\t\t\tmargin: 0.125rem;\n\t\t\t\tflex-direction: column;\n\t\t\t\tdiv {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tspan {\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\tmargin: 0.125rem 0.125rem 0.25rem 0.125rem;\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.content {\n\t\t\t}\n\t\t\t.location {\n\t\t\t\tcolor: salmon; /*", ";*/\n\t\t\t}\n\t\t\t.rating {\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tcolor:#999;\n\t\t\t\t&.plus {\n\t\t\t\t\t/* color: ", "; */\n\t\t\t\t}\n\t\t\t\t&.minus {\n\t\t\t\t\t/* color: ", "; */\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t[class^=\"icon-\"],\n\t\t[class*=\" icon-\"] {\n\t\t\tvertical-align: baseline;\n\t\t}\n\t}\n\t.title {\n\t\tbackground:#999;\n\t\ttext-align:center;\n\t\tcolor:#111;\n\t\tpadding:1rem;\n\t\tfont-size:1.25rem;\n\t\tfont-weight:bold;\n\t\t[class^=\"icon-\"] {\n\t\t\tfont-size:2rem;\n\t\t}\n\t}\n\t.queries {\n\t\tpadding: 0.5rem 1rem;\n\t\tbackground: #cccccc;\n\t\tborder-bottom: solid 1px ", ";\n\t\t.page-title {\n\t\t\tmargin-top: 0.5rem;\n\t\t}\n\t\t.queries_content {\n\t\t\ttext-align: center;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n"], ["\n\t.moreOptions {\n\t\tcolor:#666;\n\t\tmargin:0;\n\t\ttext-decoration:underline;\n\t}\n\t.results {\n\t\tmax-width: 53.8rem;\n\t\tmargin: 0.5rem auto;\n\t\t.result {\n\t\t\t/* display: flex; */\n\t\t\tmargin: 1.5rem 1rem;\n\t\t\tb {\n\t\t\t\tcolor: #666;\n\t\t\t}\n\t\t\t.meta {\n\t\t\t\tdisplay: block;\n\t\t\t\ttext-align: right;\n\t\t\t\t* {\n\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t}\n\t\t\t\t> * {\n\t\t\t\t\tmargin:0.2rem 0.2rem 0;\n\t\t\t\t}\n\t\t\t\t.pills {\n\t\t\t\t\twhite-space:nowrap;\n\t\t\t\t\t.pill {\n\t\t\t\t\t\tborder: solid 1px #999;\n\t\t\t\t\t\tmargin:0 0.33rem;\n\t\t\t\t\t\tpadding: 0rem 0.5rem 0.1rem;\n\t\t\t\t\t\tborder-radius: 1rem;\n\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t\t[class^=\"icon-\"] {\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\ttop:0.1rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t&.first {\n\t\t\t\t.meta {\n\t\t\t\t\t> *{\n\t\t\t\t\t\tmargin-top:0.4rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t&:not(.first) {\n\t\t\t\t.pill {\n\t\t\t\t\t.icon-check,\n\t\t\t\t\t.icon-ui-thumbs-up {\n\t\t\t\t\t\t/* margin:0 -0.2rem 0 0.2rem; */\n\t\t\t\t\t\ttop:0.05rem;\n\t\t\t\t\t}\n\t\t\t\t\t.text {\n\t\t\t\t\t\tdisplay:none;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.controls {\n\t\t\t\tmargin: 0.125rem;\n\t\t\t\tflex-direction: column;\n\t\t\t\tdiv {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tspan {\n\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\tmargin: 0.125rem 0.125rem 0.25rem 0.125rem;\n\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.content {\n\t\t\t}\n\t\t\t.location {\n\t\t\t\tcolor: salmon; /*", ";*/\n\t\t\t}\n\t\t\t.rating {\n\t\t\t\tfont-size: 1rem;\n\t\t\t\tcolor:#999;\n\t\t\t\t&.plus {\n\t\t\t\t\t/* color: ", "; */\n\t\t\t\t}\n\t\t\t\t&.minus {\n\t\t\t\t\t/* color: ", "; */\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t[class^=\"icon-\"],\n\t\t[class*=\" icon-\"] {\n\t\t\tvertical-align: baseline;\n\t\t}\n\t}\n\t.title {\n\t\tbackground:#999;\n\t\ttext-align:center;\n\t\tcolor:#111;\n\t\tpadding:1rem;\n\t\tfont-size:1.25rem;\n\t\tfont-weight:bold;\n\t\t[class^=\"icon-\"] {\n\t\t\tfont-size:2rem;\n\t\t}\n\t}\n\t.queries {\n\t\tpadding: 0.5rem 1rem;\n\t\tbackground: #cccccc;\n\t\tborder-bottom: solid 1px ", ";\n\t\t.page-title {\n\t\t\tmargin-top: 0.5rem;\n\t\t}\n\t\t.queries_content {\n\t\t\ttext-align: center;\n\t\t\toverflow: visible;\n\t\t}\n\t}\n"]);




var Results = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_mapsLink, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2);

/***/ })

};
//# sourceMappingURL=0.8a41e75e99e99f8e93b4.hot-update.js.map