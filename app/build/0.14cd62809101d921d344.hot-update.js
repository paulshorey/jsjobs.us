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


var _templateObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_taggedTemplateLiteral___default()(["\n\t&.Items {\n\t\t&.isLoading {\n\t\t\t.title {\n\t\t\t\tbackground: url(\"/assets/loading/3dots.gif\") center -13px no-repeat;\n\t\t\t\tspan {\n\t\t\t\t\topacity:0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.title {\n\t\t\tfont-size:1.25rem;\n\t\t\tline-height: 1.25rem;\n\t\t\ttext-align:center;\n\t\t\tcolor:#111;\n\t\t\tspan {\n\t\t\t\ttransition: opacity 0.2s;\n\t\t\t}\n\t\t}\n\t\t.content {\n\t\t\tmax-width: 53.8rem;\n\t\t\tmargin: 0.5rem auto;\n\t\t\t.item {\n\t\t\t\t/* display: flex; */\n\t\t\t\tmargin: 1.5rem 1rem;\n\t\t\t\ta {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t}\n\t\t\t\t.meta {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t\t* {\n\t\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\t}\n\t\t\t\t\t> * {\n\t\t\t\t\t\tmargin:0.2rem 0.2rem 0;\n\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t}\n\t\t\t\t\t.pills {\n\t\t\t\t\t\twhite-space:nowrap;\n\t\t\t\t\t\t.pill {\n\t\t\t\t\t\t\tborder: solid 1px #999;\n\t\t\t\t\t\t\tmargin:0 0 0 0.4rem;\n\t\t\t\t\t\t\tpadding: 0rem 0.5rem 0.1rem;\n\t\t\t\t\t\t\tborder-radius: 1rem;\n\t\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t\t\t[class^=\"icon-\"] {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\ttop:0.1rem;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.first {\n\t\t\t\t\t.meta {\n\t\t\t\t\t\t.pills {\n\t\t\t\t\t\t\tmargin-top:0.4rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&:not(.first) {\n\t\t\t\t\t.pill {\n\t\t\t\t\t\t.icon-check,\n\t\t\t\t\t\t.icon-ui-thumbs-up {\n\t\t\t\t\t\t\t/* margin:0 -0.2rem 0 0.2rem; */\n\t\t\t\t\t\t\ttop:0.05rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.text {\n\t\t\t\t\t\t\tdisplay:none;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.controls {\n\t\t\t\t\tmargin: 0.125rem;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tspan {\n\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\tmargin: 0.125rem 0.125rem 0.25rem 0.125rem;\n\t\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.content {\n\t\t\t\t}\n\t\t\t\t.location,\n\t\t\t\t.location a {\n\t\t\t\t\tcolor: salmon; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.company,\n\t\t\t\t.company a {\n\t\t\t\t\tcolor: slategrey; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.rating {\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tcolor:#999;\n\t\t\t\t\t&.plus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t\t&.minus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t[class^=\"icon-\"],\n\t\t\t[class*=\" icon-\"] {\n\t\t\t\tvertical-align: baseline;\n\t\t\t}\n\t\t}\n\t\t.queries {\n\t\t\tmargin-bottom: 1rem;\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\tbackground: #cccccc;\n\t\t\tborder-bottom: solid 1px ", ";\n\t\t\ttext-align: center;\n\t\t\toverflow: visible;\n\t\t\tcolor:#999;\n\t\t\t.moreOptions {\n\t\t\t\tp {\n\t\t\t\t\tmargin: 0.5rem 0 0.33rem;\n\t\t\t\t\tline-height: 1rem;\n\t\t\t\t}\n\t\t\t\tb {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t\tfont-weight:normal;\n\t\t\t\t}\n\t\t\t\t.moreOptions_link {\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t\tline-height: 0.5rem;\n\t\t\t\t\tpadding: 0 0 0.5rem;\n\t\t\t\t\tspan {\n\t\t\t\t\t\tpadding:0 2rem;\n\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.moreOptions_content {\n\t\t\t\t\tdisplay:none;\n\t\t\t\t}\n\t\t\t\t&.active {\n\t\t\t\t\t.moreOptions_content {\n\t\t\t\t\t\tdisplay:block;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"], ["\n\t&.Items {\n\t\t&.isLoading {\n\t\t\t.title {\n\t\t\t\tbackground: url(\"/assets/loading/3dots.gif\") center -13px no-repeat;\n\t\t\t\tspan {\n\t\t\t\t\topacity:0;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.title {\n\t\t\tfont-size:1.25rem;\n\t\t\tline-height: 1.25rem;\n\t\t\ttext-align:center;\n\t\t\tcolor:#111;\n\t\t\tspan {\n\t\t\t\ttransition: opacity 0.2s;\n\t\t\t}\n\t\t}\n\t\t.content {\n\t\t\tmax-width: 53.8rem;\n\t\t\tmargin: 0.5rem auto;\n\t\t\t.item {\n\t\t\t\t/* display: flex; */\n\t\t\t\tmargin: 1.5rem 1rem;\n\t\t\t\ta {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t}\n\t\t\t\t.meta {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t\t* {\n\t\t\t\t\t\tvertical-align: baseline;\n\t\t\t\t\t}\n\t\t\t\t\t> * {\n\t\t\t\t\t\tmargin:0.2rem 0.2rem 0;\n\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t}\n\t\t\t\t\t.pills {\n\t\t\t\t\t\twhite-space:nowrap;\n\t\t\t\t\t\t.pill {\n\t\t\t\t\t\t\tborder: solid 1px #999;\n\t\t\t\t\t\t\tmargin:0 0 0 0.4rem;\n\t\t\t\t\t\t\tpadding: 0rem 0.5rem 0.1rem;\n\t\t\t\t\t\t\tborder-radius: 1rem;\n\t\t\t\t\t\t\tdisplay:inline-block;\n\t\t\t\t\t\t\t[class^=\"icon-\"] {\n\t\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t\t\ttop:0.1rem;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&.first {\n\t\t\t\t\t.meta {\n\t\t\t\t\t\t.pills {\n\t\t\t\t\t\t\tmargin-top:0.4rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t&:not(.first) {\n\t\t\t\t\t.pill {\n\t\t\t\t\t\t.icon-check,\n\t\t\t\t\t\t.icon-ui-thumbs-up {\n\t\t\t\t\t\t\t/* margin:0 -0.2rem 0 0.2rem; */\n\t\t\t\t\t\t\ttop:0.05rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t\t.text {\n\t\t\t\t\t\t\tdisplay:none;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.controls {\n\t\t\t\t\tmargin: 0.125rem;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\tspan {\n\t\t\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t\t\tmargin: 0.125rem 0.125rem 0.25rem 0.125rem;\n\t\t\t\t\t\t\tfont-size: 1.25rem;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.content {\n\t\t\t\t}\n\t\t\t\t.location,\n\t\t\t\t.location a {\n\t\t\t\t\tcolor: salmon; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.company,\n\t\t\t\t.company a {\n\t\t\t\t\tcolor: slategrey; /*", ";*/\n\t\t\t\t}\n\t\t\t\t.rating {\n\t\t\t\t\tfont-size: 1rem;\n\t\t\t\t\tcolor:#999;\n\t\t\t\t\t&.plus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t\t&.minus {\n\t\t\t\t\t\t/* color: ", "; */\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t[class^=\"icon-\"],\n\t\t\t[class*=\" icon-\"] {\n\t\t\t\tvertical-align: baseline;\n\t\t\t}\n\t\t}\n\t\t.queries {\n\t\t\tmargin-bottom: 1rem;\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\tbackground: #cccccc;\n\t\t\tborder-bottom: solid 1px ", ";\n\t\t\ttext-align: center;\n\t\t\toverflow: visible;\n\t\t\tcolor:#999;\n\t\t\t.moreOptions {\n\t\t\t\tp {\n\t\t\t\t\tmargin: 0.5rem 0 0.33rem;\n\t\t\t\t\tline-height: 1rem;\n\t\t\t\t}\n\t\t\t\tb {\n\t\t\t\t\tcolor:#666;\n\t\t\t\t\tfont-weight:normal;\n\t\t\t\t}\n\t\t\t\t.moreOptions_link {\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\ttext-decoration: underline;\n\t\t\t\t\tline-height: 0.5rem;\n\t\t\t\t\tpadding: 0 0 0.5rem;\n\t\t\t\t\tspan {\n\t\t\t\t\t\tpadding:0 2rem;\n\t\t\t\t\tcursor:pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\t.moreOptions_content {\n\t\t\t\t\tdisplay:none;\n\t\t\t\t}\n\t\t\t\t&.active {\n\t\t\t\t\t.moreOptions_content {\n\t\t\t\t\t\tdisplay:block;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]);




var Results = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_mapsLink, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_mapsLink, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textGreen1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_textRed1, __WEBPACK_IMPORTED_MODULE_2__Document_theme_js__["a" /* default */].color_border2);

/***/ })

};
//# sourceMappingURL=0.14cd62809101d921d344.hot-update.js.map