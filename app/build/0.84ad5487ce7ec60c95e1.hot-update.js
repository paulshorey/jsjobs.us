exports.id = 0;
exports.modules = {

/***/ "./src/data/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export my_area_item_add */
/* unused harmony export area_items_add */
/* unused harmony export area_filter_add */
/* unused harmony export area_filter_remove */
var my_area_item_add = function my_area_item_add(item, area_key) {
	return {
		type: "my_area_item_add",
		item: item,
		area_key: area_key
	};
};
var area_items_add = function area_items_add(items, area_key) {
	return {
		type: "area_items_add",
		items: items,
		area_key: area_key
	};
};
var area_filter_add = function area_filter_add(filter, area_key) {
	return {
		type: "area_filter_add",
		filter: filter,
		area_key: area_key
	};
};
var area_filter_remove = function area_filter_remove(filter, area_key) {
	return {
		type: "area_filter_remove",
		filter: filter,
		area_key: area_key
	};
};

/***/ }),

/***/ "./src/data/reducers/my_areas.js":
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
var my_areas = function my_areas() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "my_area_item_add":
			/*
   	requires:
   	action.area_key,
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

/* harmony default export */ __webpack_exports__["a"] = (my_areas);

/***/ })

};
//# sourceMappingURL=0.84ad5487ce7ec60c95e1.hot-update.js.map