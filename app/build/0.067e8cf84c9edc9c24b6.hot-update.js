exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/areas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("babel-runtime/helpers/defineProperty");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);



var initialState = {
	us: { route: "/", key: "us", label: "Select region...", filters: [], items: {}, status: "new" },
	la: { route: "/in/la", key: "la", label: "in LA (Southern California)", filters: [], items: {}, status: "new" },
	nyc: { route: "/in/nyc", key: "nyc", label: "in NYC (New York City)", filters: [], items: {}, status: "new" },
	denver: { route: "/in/denver", key: "denver", label: "in Denver (Northern Colorado)", filters: [], items: {}, status: "new" }
};
var areas = function areas() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "area_item_add":
			state[action.area_key].items[action.item._id] = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, action.item);
			return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state);
		case "area_item_edit":
			state[action.area_key].items = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default.a.apply(Object, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(state[action.area_key].items).concat([__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({}, action.item._id, action.item)]));
			return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state);
		case "area_items_set":
			state[action.area_key].items = action.items;
			return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state);
		case "area_filter_add":
			// requires: action.area_key, action.items
			var _id = "";
			for (var prop in action.filter) {
				_id += action.filter[prop];
			}
			action.filter._id = _id;
			state[action.area_key].filters.push(action.filter);
			return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		case "area_filter_remove":
			// requires: action.area_key, action.items
			var f_index = state[action.area_key].filters.findIndex(function (filter) {
				return filter._id === action.filter._id;
			});
			state[action.area_key].filters.splice(f_index, 1);
			return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		default:
			return state;
			break;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (areas);

/***/ }),

/***/ "babel-runtime/helpers/defineProperty":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ })

};
//# sourceMappingURL=0.067e8cf84c9edc9c24b6.hot-update.js.map