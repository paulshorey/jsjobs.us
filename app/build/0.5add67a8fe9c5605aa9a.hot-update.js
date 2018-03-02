exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/jobs.js":
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
		case "JOB_ADD":
			return [__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, action.job)].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(state));
		case "JOB_STATUS":
			return state.map(function (job) {
				return job._id === action._id ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, job, { status: action._status }) : job;
			});
		default:
			return state;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (jobs);

/***/ })

};
//# sourceMappingURL=0.5add67a8fe9c5605aa9a.hot-update.js.map