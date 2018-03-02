exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/todos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__("babel-runtime/helpers/toConsumableArray");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);


var jobs = function jobs() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case "ADD_JOB":
			return [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(state), [{
				id: action.id,
				text: action.text,
				completed: false
			}]);
		case "TOGGLE_JOB":
			return state.map(function (job) {
				return job.id === action.id ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, job, { completed: !job.completed }) : job;
			});
		default:
			return state;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (jobs);

/***/ })

};
//# sourceMappingURL=0.747ac3fbfa22e7213790.hot-update.js.map