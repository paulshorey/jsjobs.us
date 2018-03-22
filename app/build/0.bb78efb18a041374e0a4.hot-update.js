exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/my_areas.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
		// case "area_item_add":
		// 	state[action.area_key].items.push(action.item);
		// 	return Object.assign({}, state);
		default:
			return state;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (my_areas);

/***/ })

};
//# sourceMappingURL=0.bb78efb18a041374e0a4.hot-update.js.map