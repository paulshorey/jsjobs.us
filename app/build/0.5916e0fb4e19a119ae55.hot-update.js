exports.id = 0;
exports.modules = {

/***/ "./src/components/search/Results__my.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__ = __webpack_require__("babel-runtime/helpers/typeof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styled_Results_js__ = __webpack_require__("./src/components/search/styled/Results.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_actions__ = __webpack_require__("./src/data/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Query__ = __webpack_require__("./src/components/search/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Links__ = __webpack_require__("./src/components/search/Links.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Filters__ = __webpack_require__("./src/components/search/Filters.js");







var _jsxFileName = "/www/jsjobs/app/src/components/search/Results__my.js";




/* redux */


/* components */



/*
	lib
*/
var sort_items_object_to_array = function sort_items_object_to_array(items_object, filters_array) {
	/*
 	filter the filters (needs refactor!)
 */
	var filters = filters_array.map(function (filter) {
		filter.value = filter.value.replace(/ \| /g, "|");
		filter.value = filter.value.replace(/\?/g, "\\?");
		filter.value = filter.value.replace(/\+/g, "\\+");
		filter.value = filter.value.replace(/\]\\\+/g, "]+");
		filter.value = filter.value.replace(/\*/g, "\\*");
		filter.value = filter.value.replace(/\$/g, "\\$");
		return filter;
	});
	/*
 	iterate items
 */
	var items = [];
	for (var i in items_object) {
		var item = items_object[i];
		if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(item)) !== "object") {
			continue;
		}
		item._status = item._status || "new";
		item._rating = 1000;
		// use filters
		for (var fil in filters) {
			var filter = filters[fil];
			if (filter.multiplier) {
				var reg = RegExp("" + filter.value + "", "i");
				var match = reg.test(" " + item.location + " " + item.company + " " + item.name + " " + item.text + " ");
				if (match) {
					item._rating += filter.multiplier;
				}
			}
		}
		// except
		// if (item._status === this.props.items_status) {
		if (!filters.length || item._rating >= 1000 + filters.length) {
			items.push(item);
		}
		// }
	}
	// items.sort(function(a, b) {
	// 	return b.posted > a.posted;
	// });
	items.sort(function (a, b) {
		return b._rating > a._rating;
	});
	return items;
};
/* 
	component 
*/

var Results = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Results, _Component);

	function Results() {
		var _ref;

		var _temp, _this, _ret;

		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Results);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Results.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Results, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.props.dispatch(__WEBPACK_IMPORTED_MODULE_12__data_actions__["d" /* my_items_status */](this.props.items_status));
		}
		/*
  	view
  */

	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var area_key = this.props.area_key;
			var items_array = sort_items_object_to_array(this.props.items, this.props.filters);
			var results_length = /*Object.keys(this.props.items).length -*/items_array.length;
			// make Array
			var Items = [];
			if (items_array.length) {
				var i = 0;
				// limit items on page - soon add pagination or auto-loading on scroll

				var _loop = function _loop() {
					// item = current item
					var item = items_array[i];
					if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_typeof___default()(item)) !== "object") {
						i++;
						return "continue";
					}
					// item.rating
					var rating = item._rating - 1000;
					var Rating = null;
					if (rating > 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating plus", __source: {
									fileName: _jsxFileName,
									lineNumber: 97
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 98
								}
							}),
							rating
						);
					}
					if (rating < 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating minus", __source: {
									fileName: _jsxFileName,
									lineNumber: 105
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 106
								}
							}),
							rating
						);
					}
					// add to view
					Items.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ key: item._id + i, className: "item status--" + item._status, __source: {
								fileName: _jsxFileName,
								lineNumber: 113
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 114
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"a",
								{ href: item.link, target: "_blank", __source: {
										fileName: _jsxFileName,
										lineNumber: 115
									}
								},
								item.name
							)
						),
						" ",
						"- ",
						item.text,
						" \xA0",
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "meta", __source: {
									fileName: _jsxFileName,
									lineNumber: 120
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 121
									}
								},
								"#",
								i,
								" - ",
								item._status
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 124
									}
								},
								Rating
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "location", __source: {
										fileName: _jsxFileName,
										lineNumber: 125
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://www.google.com/maps/place/" + item.location + "", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 126
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-navigation", __source: {
											fileName: _jsxFileName,
											lineNumber: 127
										}
									}),
									" ",
									item.location
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "company", __source: {
										fileName: _jsxFileName,
										lineNumber: 130
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://google.com/search?q=" + item.company + " company glassdoor", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 131
										}
									},
									item.company
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "pills", __source: {
										fileName: _jsxFileName,
										lineNumber: 135
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill status--applied",
										onClick: function onClick() {
											// NOT immutable: immediately assigns to existing, rendered item - handle all immutability in Redux actions
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_12__data_actions__["c" /* my_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item, { _status: "applied" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 136
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-check", __source: {
											fileName: _jsxFileName,
											lineNumber: 143
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 143
											}
										},
										"applied"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill status--intrigued",
										onClick: function onClick() {
											// NOT immutable: immediately assigns to existing, rendered item - handle all immutability in Redux actions
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_12__data_actions__["c" /* my_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item, { _status: "intrigued" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 145
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
											fileName: _jsxFileName,
											lineNumber: 152
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 152
											}
										},
										"intrigued"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill status--ignored",
										onClick: function onClick() {
											// NOT immutable: immediately assigns to existing, rendered item - handle all immutability in Redux actions
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_12__data_actions__["c" /* my_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, item, { _status: "ignored" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 154
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-delete", __source: {
											fileName: _jsxFileName,
											lineNumber: 161
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 161
											}
										},
										"ignored"
									)
								)
							)
						)
					));
					i++;
				};

				while (i < 100) {
					var _ret2 = _loop();

					if (_ret2 === "continue") continue;
				}
			} else {
				Items.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 171
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 172
							}
						},
						"No results :("
					),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 173
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_10_react_router_dom__["Link"],
							{ to: "/", __source: {
									fileName: _jsxFileName,
									lineNumber: 174
								}
							},
							"Go back to homepage"
						),
						", and click some buttons!"
					),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 176
							}
						},
						"But, this functionality needs a lot of work! Please do check back in a week. Should be working then."
					)
				));
			}
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__styled_Results_js__["a" /* Results */],
				{ className: "Items " + (this.props.className || ""), __source: {
						fileName: _jsxFileName,
						lineNumber: 181
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "queries", __source: {
							fileName: _jsxFileName,
							lineNumber: 182
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"h1",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 183
							}
						},
						"This functionality needs a lot of work!"
					),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"p",
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 184
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_10_react_router_dom__["Link"],
							{ to: "/", __source: {
									fileName: _jsxFileName,
									lineNumber: 185
								}
							},
							"\xAB back to search page"
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "content", __source: {
							fileName: _jsxFileName,
							lineNumber: 188
						}
					},
					Items
				)
			);
		}
	}]);

	return Results;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/*
	Connect redux data
*/


var mapStateToProps = function mapStateToProps(data, ownProps) {
	var filters = data.my.filters || [];
	var items = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, ownProps.items, data.my.items);
	return {
		items: items,
		items_status: ownProps.items_status || "new",
		filters: filters
	};
};
var ConnectedResults = Object(__WEBPACK_IMPORTED_MODULE_11_react_redux__["connect"])(mapStateToProps)(Object(__WEBPACK_IMPORTED_MODULE_9_react_router__["withRouter"])(Results));

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedResults);

/***/ })

};
//# sourceMappingURL=0.5916e0fb4e19a119ae55.hot-update.js.map