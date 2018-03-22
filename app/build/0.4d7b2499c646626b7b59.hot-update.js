exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/areas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var initialState = {
	us: { route: "/", key: "us", label: "Select region...", items: {} },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)", items: {} },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)", items: {} },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)", items: {} }
};
var areas = function areas() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		default:
			return state;
			break;
	}
};
/* harmony default export */ __webpack_exports__["a"] = (areas);

/***/ })

};
//# sourceMappingURL=0.4d7b2499c646626b7b59.hot-update.js.map