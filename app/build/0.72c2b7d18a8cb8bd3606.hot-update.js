exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/search_areas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var initialState = {
	us: { route: "/", key: "us", label: "Select region...", filters: [], items: [] },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)", filters: [], items: [] },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)", filters: [], items: [] },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)", filters: [], items: [] }
};
var search_areas = function search_areas() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "area_item_my":
			// requires: action.area_key, action.items
			var i_index = state[action.area_key].filters.findIndex(function (item) {
				return item._id === action.item._id;
			});
			console.log("action.area_key", action.area_key);
			console.warn("state[action.area_key].items", state[action.area_key].items);
			console.error("delete: ", state[action.area_key].items.length ? state[action.area_key].items[i_index] : state[action.area_key].items);
			// state[action.area_key].items.splice(i_index, 1);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		case "area_items_add":
			// requires: action.area_key, action.items
			var newItems = state[action.area_key].items.concat(action.items);
			state[action.area_key].items = newItems;
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		case "area_filter_add":
			// requires: action.area_key, action.items
			var _id = "";
			for (var prop in action.filter) {
				_id += action.filter[prop];
			}
			action.filter._id = _id;
			state[action.area_key].filters.push(action.filter);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		case "area_filter_remove":
			// requires: action.area_key, action.items
			var f_index = state[action.area_key].filters.findIndex(function (filter) {
				return filter._id === action.filter._id;
			});
			state[action.area_key].filters.splice(f_index, 1);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		default:
			return state;
			break;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (search_areas);

/***/ })

};
//# sourceMappingURL=0.72c2b7d18a8cb8bd3606.hot-update.js.map