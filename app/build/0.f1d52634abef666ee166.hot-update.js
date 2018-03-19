exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/new_items.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var initialState = {
	us: { route: "/", key: "us", label: "Select region...", filtersAuto: [], filters: [], items: [] },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)", filtersAuto: [], filters: [], items: [] },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)", filtersAuto: [], filters: [], items: [] },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)", filtersAuto: [], filters: [], items: [] }
};
var new_items = function new_items() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "ADD_RESULTS":
			/*
   	requires:
   	action._area,
   	action.items
   */
			var newItems = state[action.area_key].items.concat(action.items);
			// mutable array
			state[action.area_key].items = newItems;
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
		default:
			return state;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (new_items);

/***/ })

};
//# sourceMappingURL=0.f1d52634abef666ee166.hot-update.js.map