exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/areas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var initialState = {
	us: { route: "/", key: "us", label: "Select region...", filters: [], items: [], status: "new" },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)", filters: [], items: [], status: "new" },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)", filters: [], items: [], status: "new" },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)", filters: [], items: [], status: "new" }
};
var areas = function areas() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "area_status_change":
			state[action.area_key].status = action.status;
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
		case "area_item_add":
			state[action.area_key].items.push(action.item);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
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

/* harmony default export */ __webpack_exports__["a"] = (areas);

/***/ })

};
//# sourceMappingURL=0.815d1e825b93daad3593.hot-update.js.map