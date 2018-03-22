exports.id = 0;
exports.modules = {

/***/ "./src/components/search/Links.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__("babel-runtime/helpers/extends");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_Links_js__ = __webpack_require__("./src/components/search/styled/Links.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_actions__ = __webpack_require__("./src/data/actions/index.js");






var _jsxFileName = "/www/jsjobs/app/src/components/search/Links.js";




/* redux */



/* 
	Component 
*/

var AreaLinks = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(AreaLinks, _React$Component);

	function AreaLinks() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, AreaLinks);

		return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AreaLinks.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(AreaLinks)).apply(this, arguments));
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(AreaLinks, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			var areas = this.props.areas; // from Redux connect
			var Links = [];

			var _loop = function _loop(key) {
				var area = areas[key];
				Links.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
					{
						className: "option " + (_this2.props.history.location.pathname === area.route ? " selected" : ""),
						to: area.route,
						key: area.route,
						onClick: function onClick(e) {
							if (area.route === _this2.props.history.location.pathname) {
								e.preventDefault();
							}
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 19
						}
					},
					area.label
				));
			};

			for (var key in areas) {
				_loop(key);
			}
			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_Links_js__["a" /* AreaLinks */],
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
					innerRef: function innerRef(el) {
						_this2.AreaLinks = el;
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 34
					}
				}),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("div", {
					className: "overlay",
					ref: "overlay",
					onClick: function onClick(e) {
						_this2.AreaLinks.classList.toggle("active");
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 40
					}
				}),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{
						className: "content",
						ref: "content",
						onClick: function onClick(e) {
							_this2.AreaLinks.classList.remove("active");
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 47
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"div",
						{
							className: "dropdown",
							onClick: function onClick(e) {
								e.stopPropagation();
								_this2.AreaLinks.classList.toggle("active");
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 54
							}
						},
						Links
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						"span",
						{
							className: "button",
							onClick: function onClick(e) {
								e.stopPropagation();
								_this2.AreaLinks.classList.toggle("active");
							},
							__source: {
								fileName: _jsxFileName,
								lineNumber: 63
							}
						},
						__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-ui-select-thin", __source: {
								fileName: _jsxFileName,
								lineNumber: 70
							}
						})
					)
				)
			);
		}
	}]);

	return AreaLinks;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

var mapStateToProps = function mapStateToProps(store, ownProps) {
	return {
		areas: store.areas
	};
};
var ConnectedAreaLinks = Object(__WEBPACK_IMPORTED_MODULE_10_react_redux__["connect"])(mapStateToProps)(AreaLinks);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_9_react_router__["withRouter"])(ConnectedAreaLinks));

/***/ })

};
//# sourceMappingURL=0.5fe3878d0039a8d7e60d.hot-update.js.map