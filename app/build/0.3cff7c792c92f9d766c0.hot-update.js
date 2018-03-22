exports.id = 0;
exports.modules = {

/***/ "./src/data/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export area_status_change */
/* unused harmony export area_items_set */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return area_item_edit; });
/* unused harmony export area_item_add */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return area_filter_add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return area_filter_remove; });
var area_status_change = function area_status_change(status, area_key) {
	return {
		type: "area_status_change",
		status: status,
		area_key: area_key
	};
};
var area_items_set = function area_items_set(items_array, area_key) {
	var items_object = {};
	items_array.forEach(function (item) {
		items_object[item._id] = item;
	});
	return {
		type: "area_items_set",
		items_object: items_object,
		area_key: area_key
	};
};
var area_item_edit = function area_item_edit(item, area_key) {
	return {
		type: "area_item_edit",
		item: item,
		area_key: area_key
	};
};
var area_item_add = function area_item_add(item, area_key) {
	return {
		type: "area_item_add",
		item: item,
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

/***/ })

};
//# sourceMappingURL=0.3cff7c792c92f9d766c0.hot-update.js.map