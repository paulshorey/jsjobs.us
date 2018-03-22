exports.id = 0;
exports.modules = {

/***/ "./src/components/header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__("babel-runtime/core-js/object/keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styled_Header_js__ = __webpack_require__("./src/components/header/styled/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_actions__ = __webpack_require__("./src/data/actions/index.js");






var _jsxFileName = "/www/jsjobs/app/src/components/header/Header.js";



/* redux */



var Header = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(Header, _React$Component);

	function Header() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Header);

		return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Header.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(Header)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Header, [{
		key: "render",
		value: function render() {
			var RightIcons = [];
			if (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(this.props.items_my).length) {
				RightIcons.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Link"],
					{ to: "/my", __source: {
							fileName: _jsxFileName,
							lineNumber: 13
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"span",
						{ className: "caption", __source: {
								fileName: _jsxFileName,
								lineNumber: 14
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
							"span",
							{ className: "ext only-wide", __source: {
									fileName: _jsxFileName,
									lineNumber: 15
								}
							},
							"MY "
						),
						"JOBS"
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-user-check", __source: {
							fileName: _jsxFileName,
							lineNumber: 17
						}
					})
				));
			}
			// RightIcons.push(
			// 	<Link to="/about">
			// 		<span className="caption">Etc</span>
			// 		<span className="icon-delete" />
			// 	</Link>
			// );
			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_8__styled_Header_js__["a" /* Header */],
				{ className: "row", __source: {
						fileName: _jsxFileName,
						lineNumber: 28
					}
				},
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{ className: "row_left", __source: {
							fileName: _jsxFileName,
							lineNumber: 29
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_7_react_router_dom__["Link"],
						{ to: "/", __source: {
								fileName: _jsxFileName,
								lineNumber: 30
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-top-logo", __source: {
								fileName: _jsxFileName,
								lineNumber: 31
							}
						}),
						this.props.items_status === "new" ? __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
							"span",
							{ className: "caption", __source: {
									fileName: _jsxFileName,
									lineNumber: 33
								}
							},
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 34
									}
								},
								"JOBS"
							),
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								"span",
								{ className: "ext only-wide", __source: {
										fileName: _jsxFileName,
										lineNumber: 35
									}
								},
								".US"
							)
						) : __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
							"span",
							{ className: "caption", __source: {
									fileName: _jsxFileName,
									lineNumber: 38
								}
							},
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								"span",
								{
									__source: {
										fileName: _jsxFileName,
										lineNumber: 39
									}
								},
								"BACK"
							),
							__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
								"span",
								{ className: "ext only-wide", __source: {
										fileName: _jsxFileName,
										lineNumber: 40
									}
								},
								"TO HOMEPAGE"
							)
						)
					)
				),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{ className: "row_right", __source: {
							fileName: _jsxFileName,
							lineNumber: 60
						}
					},
					RightIcons
				)
			);
		}
	}]);

	return Header;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

/*
		Connect redux data
	*/


var mapStateToProps = function mapStateToProps(data, ownProps) {
	return {
		items_my: data.my.items,
		items_status: data.my.items_status || "new"
	};
};
var ConnectedHeader = Object(__WEBPACK_IMPORTED_MODULE_9_react_redux__["connect"])(mapStateToProps)(Header);

/*
		Components
	*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedHeader);

/***/ })

};
//# sourceMappingURL=0.26d35842d5a89a209a92.hot-update.js.map