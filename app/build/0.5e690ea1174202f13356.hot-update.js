exports.id = 0;
exports.modules = {

/***/ "./src/components/search/Results.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__("babel-runtime/core-js/object/assign");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__ = __webpack_require__("babel-runtime/helpers/typeof");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__ = __webpack_require__("babel-runtime/helpers/classCallCheck");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__ = __webpack_require__("babel-runtime/helpers/createClass");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__("babel-runtime/helpers/inherits");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styled_Results_js__ = __webpack_require__("./src/components/search/styled/Results.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_actions__ = __webpack_require__("./src/data/actions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Query__ = __webpack_require__("./src/components/search/Query.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Links__ = __webpack_require__("./src/components/search/Links.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Filters__ = __webpack_require__("./src/components/search/Filters.js");







var _jsxFileName = "/www/jsjobs/app/src/components/search/Results.js";



/* redux */


/* components */



/* 
	component 
*/

var Results = function (_Component) {
	__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Results, _Component);

	function Results() {
		var _ref;

		var _temp, _this, _ret;

		__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_classCallCheck___default()(this, Results);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Results.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.rateItems = function (newItems) {
			/*
   	filter the filters (needs refactor?)
   */
			var filters = _this.props.area.filters.map(function (filter) {
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
			newItems.map(function (item) {
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
				if (!filters.length || item._rating > 1000) {
					items.push(item);
				}
			});
			items.sort(function (a, b) {
				return b._rating - a._rating;
			});
			return items;
		}, _temp), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
	}

	__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_createClass___default()(Results, [{
		key: "render",

		/*
  	view
  */
		value: function render() {
			var _this2 = this;

			var area_key = this.props.area_key;
			var rated_items = this.rateItems(this.props.area.items);
			// make Array
			var Items = [];
			if (rated_items) {
				var i = 0;
				// limit items on page - soon add pagination or auto-loading on scroll
				while (i < 100) {
					// item = current item
					var item = rated_items[i];
					if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(item)) !== "object") {
						break;
					}
					// item.rating
					var rating = item._rating - 1000;
					var Rating = null;
					if (rating > 0) {
						Rating = __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{ className: "rating plus", __source: {
									fileName: _jsxFileName,
									lineNumber: 78
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 79
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
									lineNumber: 86
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 87
								}
							}),
							rating
						);
					}
					// add to view
					Items.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ key: item._id + i, className: "item " + (i === 0 ? " first" : ""), __source: {
								fileName: _jsxFileName,
								lineNumber: 94
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 95
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"a",
								{ href: item.link, target: "_blank", __source: {
										fileName: _jsxFileName,
										lineNumber: 96
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
									lineNumber: 101
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 102
									}
								},
								Rating
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{ className: "location", __source: {
										fileName: _jsxFileName,
										lineNumber: 103
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://www.google.com/maps/place/" + item.location + "", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 104
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-navigation", __source: {
											fileName: _jsxFileName,
											lineNumber: 105
										}
									}),
									" ",
									item.location
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{ className: "company", __source: {
										fileName: _jsxFileName,
										lineNumber: 108
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://google.com/search?q=" + item.company + " company glassdoor", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 109
										}
									},
									item.company
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{ className: "pills", __source: {
										fileName: _jsxFileName,
										lineNumber: 113
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill",
										onClick: function onClick() {
											console.log("item", item);
											var addItem = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, { status: "applied" });
											console.log("addItem", addItem);
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["b" /* area_item_my */](addItem, _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 114
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-check", __source: {
											fileName: _jsxFileName,
											lineNumber: 123
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 123
											}
										},
										"applied"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill",
										onClick: function onClick() {
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["b" /* area_item_my */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, { status: "intrigued" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 125
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
											fileName: _jsxFileName,
											lineNumber: 131
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 131
											}
										},
										"intrigued"
									)
								),
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill",
										onClick: function onClick() {
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["b" /* area_item_my */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, { status: "ignored" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 133
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-delete", __source: {
											fileName: _jsxFileName,
											lineNumber: 139
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 139
											}
										},
										"ignored"
									)
								)
							)
						)
					));
					i++;
				}
			}
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__styled_Results_js__["a" /* Results */],
				{ className: "Items " + (this.props.className || ""), __source: {
						fileName: _jsxFileName,
						lineNumber: 149
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "queries", __source: {
							fileName: _jsxFileName,
							lineNumber: 150
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__Links__["a" /* default */], { area_key: this.props.area_key, __source: {
							fileName: _jsxFileName,
							lineNumber: 151
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Query__["a" /* default */], { area_key: this.props.area_key, expanded: this.state.searchQueryExpanded, placeholder: (this.props.area.filters.length ? "Filter" : "Search") + " " + rated_items.length + " ...", __source: {
							fileName: _jsxFileName,
							lineNumber: 152
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__Filters__["a" /* default */], { area_key: this.props.area_key, __source: {
							fileName: _jsxFileName,
							lineNumber: 153
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ className: "moreOptions", ref: "moreOptions", __source: {
								fileName: _jsxFileName,
								lineNumber: 154
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "moreOptions_content", __source: {
									fileName: _jsxFileName,
									lineNumber: 155
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"p",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 156
									}
								},
								"Tip: use RegEx in search term. For example: ",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("br", {
									__source: {
										fileName: _jsxFileName,
										lineNumber: 157
									}
								}),
								"\"",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"b",
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 157
										}
									},
									"[^a-zA-Z]+C[^a-zA-Z]+"
								),
								"\" or \"",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"b",
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 157
										}
									},
									"java[^s]+ | JSP"
								),
								"\""
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"p",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 159
									}
								},
								"Then, choose a +/- thumbs up/down value, to weigh its importance."
							)
						),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"p",
							{
								className: "moreOptions_link",
								onClick: function onClick(e) {
									_this2.refs.moreOptions.classList.toggle("active");
									_this2.setState({ searchQueryExpanded: !_this2.state.searchQueryExpanded });
								},
								__source: {
									fileName: _jsxFileName,
									lineNumber: 161
								}
							},
							"..."
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "content", __source: {
							fileName: _jsxFileName,
							lineNumber: 172
						}
					},
					Items
				)
			);
		}
	}]);

	return Results;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

var mapStateToProps = function mapStateToProps(data, ownProps) {
	console.log("Results.js mapStateToProps: ", data, ownProps);
	var myItems = data.my_areas[ownProps.area_key].items.length ? data.my_areas[ownProps.area_key].items : [];
	var myFilters = data.my_areas[ownProps.area_key].filters.length ? data.my_areas[ownProps.area_key].filters : [];
	var whatFilters = data.search_areas[ownProps.area_key].filters.length ? data.search_areas[ownProps.area_key].filters : [];
	return {
		area: {
			items: ownProps.items,
			filters: whatFilters
		}
	};
};
var ConnectedResults = Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps)(Object(__WEBPACK_IMPORTED_MODULE_9_react_router__["withRouter"])(Results));

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedResults);

/***/ })

};
//# sourceMappingURL=0.5e690ea1174202f13356.hot-update.js.map