exports.id = 0;
exports.modules = {

/***/ "./src/data/actions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export jobAdd */
/* unused harmony export jobStatus */
/* unused harmony export setVisibilityFilter */
/* unused harmony export VisibilityFilters */
var nextTodoId = 0;

var jobAdd = function jobAdd(job) {
	return {
		type: "JOB_ADD",
		job: job
	};
};
var jobStatus = function jobStatus(_id, _status) {
	return {
		type: "JOB_STATUS",
		_id: _id,
		_status: _status
	};
};

var setVisibilityFilter = function setVisibilityFilter(filter) {
	return {
		type: "SET_VISIBILITY_FILTER",
		filter: filter
	};
};

var VisibilityFilters = {
	SHOW_ALL: "SHOW_ALL",
	SHOW_COMPLETED: "SHOW_COMPLETED",
	SHOW_ACTIVE: "SHOW_ACTIVE"
};

/***/ })

};
//# sourceMappingURL=0.efa39194a9bfd00a4991.hot-update.js.map