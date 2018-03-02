exports.id = 0;
exports.modules = {

/***/ "./src/data/reducers/todos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);

var jobs = function jobs() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case "JOB_ADD":
			return state.push(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, action.job));
		case "JOB_STATUS":
			return state.map(function (job) {
				return job._id === action._id ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, job, { status: action._status }) : job;
			});
		default:
			return state;
	}
};

/* harmony default export */ __webpack_exports__["a"] = (jobs);

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
false

};
//# sourceMappingURL=0.45ca9ea304cf1cd63fb2.hot-update.js.map