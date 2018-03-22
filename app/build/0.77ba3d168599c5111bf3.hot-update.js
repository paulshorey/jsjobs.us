exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/my.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var initialState = { filters: [], items: {}, items_status: "new", area: "us" };
var my = function my() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case "my_item_save":
			state.items[action.item._id] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, action.item);
			state.items = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state.items);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
		case "my_area":
			state.area_key = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, action.area_key);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
		case "my_items_status":
			state.items_status = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, action.items_status);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		case "my_filter_add":
			var _id = "";
			for (var prop in action.filter) {
				_id += action.filter[prop];
			}
			action.filter._id = _id;
			state.filters.push(action.filter);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		case "my_filter_remove":
			var f_index = state.filters.findIndex(function (filter) {
				return filter._id === action.filter._id;
			});
			state.filters.splice(f_index, 1);
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, state);
			break;
		default:
			return state;
			break;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (my);

/***/ })

};
//# sourceMappingURL=0.77ba3d168599c5111bf3.hot-update.js.map