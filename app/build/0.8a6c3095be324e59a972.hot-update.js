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

		return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Results.__proto__ || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_prototype_of___default()(Results)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.sort_items_object_to_array = function (items_object) {
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
			for (var i in items_object) {
				var item = items_object[i];
				if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(item)) !== "object") {
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
				if (item._status === _this.props.items_status) {
					if (!filters.length || item._rating >= 1000 + filters.length) {
						items.push(item);
					}
				}
			}
			items.sort(function (a, b) {
				return b.posted > a.posted;
			});
			items.sort(function (a, b) {
				return b._rating > a._rating;
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
			var items_array = this.sort_items_object_to_array(this.props.area.items);
			// make Array
			var Items = [];
			if (items_array) {
				var i = 0;
				// limit items on page - soon add pagination or auto-loading on scroll

				var _loop = function _loop() {
					// item = current item
					var item = items_array[i];
					if ((typeof item === "undefined" ? "undefined" : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_typeof___default()(item)) !== "object") {
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
									lineNumber: 89
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
									fileName: _jsxFileName,
									lineNumber: 90
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
									lineNumber: 97
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-down", __source: {
									fileName: _jsxFileName,
									lineNumber: 98
								}
							}),
							rating
						);
					}
					// add to view
					Items.push(__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ key: item._id + i, className: "item ", __source: {
								fileName: _jsxFileName,
								lineNumber: 105
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"b",
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 106
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"a",
								{ href: item.link, target: "_blank", __source: {
										fileName: _jsxFileName,
										lineNumber: 107
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
									lineNumber: 112
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "rating", __source: {
										fileName: _jsxFileName,
										lineNumber: 113
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
										lineNumber: 116
									}
								},
								Rating
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "location", __source: {
										fileName: _jsxFileName,
										lineNumber: 117
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://www.google.com/maps/place/" + item.location + "", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 118
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-navigation", __source: {
											fileName: _jsxFileName,
											lineNumber: 119
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
										lineNumber: 122
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"a",
									{ href: "https://google.com/search?q=" + item.company + " company glassdoor", target: "_blank", __source: {
											fileName: _jsxFileName,
											lineNumber: 123
										}
									},
									item.company
								)
							),
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"div",
								{ className: "pills", __source: {
										fileName: _jsxFileName,
										lineNumber: 127
									}
								},
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"span",
									{
										className: "pill",
										onClick: function onClick() {
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["c" /* area_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, { _status: "applied" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 128
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-check", __source: {
											fileName: _jsxFileName,
											lineNumber: 134
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 134
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
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["c" /* area_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, { _status: "intrigued" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 136
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-ui-thumbs-up", __source: {
											fileName: _jsxFileName,
											lineNumber: 142
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 142
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
											_this2.props.dispatch(__WEBPACK_IMPORTED_MODULE_11__data_actions__["c" /* area_item_save */](__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(item, { _status: "ignored" }), _this2.props.area_key));
										},
										__source: {
											fileName: _jsxFileName,
											lineNumber: 144
										}
									},
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("span", { className: "icon-delete", __source: {
											fileName: _jsxFileName,
											lineNumber: 150
										}
									}),
									" ",
									__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
										"span",
										{ className: "text", __source: {
												fileName: _jsxFileName,
												lineNumber: 150
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
			}
			return __WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__styled_Results_js__["a" /* Results */],
				{ className: "Items " + (this.props.className || ""), __source: {
						fileName: _jsxFileName,
						lineNumber: 160
					}
				},
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "queries", __source: {
							fileName: _jsxFileName,
							lineNumber: 161
						}
					},
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13__Links__["a" /* default */], { area_key: this.props.area_key, __source: {
							fileName: _jsxFileName,
							lineNumber: 162
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__Query__["a" /* default */], { area_key: this.props.area_key, expanded: this.state.searchQueryExpanded, placeholder: (this.props.area.filters.length ? "Filter" : "Search") + " " + items_array.length + " " + (this.props.area.filters.length ? "results" : "jobs") + "...", __source: {
							fileName: _jsxFileName,
							lineNumber: 163
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__Filters__["a" /* default */], { area_key: this.props.area_key, __source: {
							fileName: _jsxFileName,
							lineNumber: 164
						}
					}),
					__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
						"div",
						{ className: "moreOptions", ref: "moreOptions", __source: {
								fileName: _jsxFileName,
								lineNumber: 165
							}
						},
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"div",
							{ className: "moreOptions_content", __source: {
									fileName: _jsxFileName,
									lineNumber: 166
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"p",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 167
									}
								},
								"Tip: use RegEx in search term. For example: ",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("br", {
									__source: {
										fileName: _jsxFileName,
										lineNumber: 168
									}
								}),
								"\"",
								__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
									"b",
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 168
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
											lineNumber: 168
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
										lineNumber: 170
									}
								},
								"Then, choose a +/- thumbs up/down value, to weigh its importance."
							)
						),
						__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
							"p",
							{ className: "moreOptions_link", __source: {
									fileName: _jsxFileName,
									lineNumber: 172
								}
							},
							__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
								"span",
								{
									onClick: function onClick(e) {
										_this2.refs.moreOptions.classList.toggle("active");
										_this2.setState({ searchQueryExpanded: !_this2.state.searchQueryExpanded });
									},
									__source: {
										fileName: _jsxFileName,
										lineNumber: 173
									}
								},
								"..."
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(
					"div",
					{ className: "content", __source: {
							fileName: _jsxFileName,
							lineNumber: 184
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
	var data_area = data.areas[ownProps.area_key];
	var newProps = {
		area: {
			items: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, data.my.items, ownProps.items, data_area.items),
			items_status: "new",
			filters: data.my.filters
		}
	};
	return newProps;
};
var ConnectedResults = Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps)(Object(__WEBPACK_IMPORTED_MODULE_9_react_router__["withRouter"])(Results));

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedResults);

/***/ })

};
//# sourceMappingURL=0.8a6c3095be324e59a972.hot-update.js.map