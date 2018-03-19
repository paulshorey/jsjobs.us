exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__items__ = __webpack_require__("./src/data/reducers/items.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filters__ = __webpack_require__("./src/data/reducers/filters.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_items__ = __webpack_require__("./src/data/reducers/new_items.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_items__ = __webpack_require__("./src/data/reducers/my_items.js");






var data = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
	items: __WEBPACK_IMPORTED_MODULE_1__items__["a" /* default */],
	filters: __WEBPACK_IMPORTED_MODULE_2__filters__["a" /* default */],
	new_items: __WEBPACK_IMPORTED_MODULE_3__new_items__["a" /* default */],
	my_items: __WEBPACK_IMPORTED_MODULE_4__my_items__["a" /* default */]
});

/* harmony default export */ __webpack_exports__["a"] = (data);

/***/ }),

/***/ "./src/data/reducers/my_items.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var initialState = {
	us: { filters: [], items: [] },
	la: { filters: [], items: [] },
	nyc: { filters: [], items: [] },
	denver: { filters: [], items: [] }
};
var my_items = function my_items() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "ADD_ITEMS":
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

/* harmony default export */ __webpack_exports__["a"] = (my_items);

/***/ })

};
//# sourceMappingURL=0.c852ee11f5122b1c4ea6.hot-update.js.map