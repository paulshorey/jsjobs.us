exports.id = 0;
exports.modules = {

/***/ "./src/components/search/DropdownLink.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__styled_DropdownLink_js__ = __webpack_require__("./src/components/search/styled/DropdownLink.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_actions__ = __webpack_require__("./src/data/actions/index.js");






var _jsxFileName = "/www/jsjobs/app/src/components/search/DropdownLink.js";
/*jshint esversion: 6 */



/* redux */


/* custom */
// import UIDropdownLink from "components/ui/DropdownLink";

/* 
	Component 
*/

var DropdownLink = function (_React$Component) {
	__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_inherits___default()(DropdownLink, _React$Component);

	function DropdownLink() {
		__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, DropdownLink);

		var _this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (DropdownLink.__proto__ || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_prototype_of___default()(DropdownLink)).call(this));

		_this.toggleOpen = function (multiplier) {
			_this.refs.query_group.classList.toggle("opened");
		};

		_this.componentWillMount = function () {
			_this.setState({ option_selected: _this.state.options[_this.props.option] });
		};

		_this.renderOptions = function () {
			var Options = [];
			for (var url in _this.state.options) {
				var title = _this.state.options[url];
				Options.push(__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
					{ className: "option", to: url, key: url, __source: {
							fileName: _jsxFileName,
							lineNumber: 38
						}
					},
					title
				));
			}
		};

		_this.state = {
			option_placeholder: "DropdownLink region...",
			options: {
				"/in/la": "in LA (Southern California)",
				"/in/nyc": "in NYC (New York City)",
				"/in/denver": "in NYC (Colorado)"
			}
		};
		_this.refs = {}; // do not remove - need for Styled-Components
		return _this;
	}

	__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(DropdownLink, [{
		key: "render",
		value: function render() {
			var _this2 = this;

			return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_7__styled_DropdownLink_js__["a" /* DropdownLink */],
				__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.props, {
					innerRef: function innerRef(e) {
						_this2.refs.DropdownLink = e.target;
					},
					onClick: function onClick(e) {
						console.log("clicked", e.target);
					},
					__source: {
						fileName: _jsxFileName,
						lineNumber: 46
					}
				}),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"div",
					{ className: "dropdown", __source: {
							fileName: _jsxFileName,
							lineNumber: 55
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
						{ className: "option", to: "/in/la", __source: {
								fileName: _jsxFileName,
								lineNumber: 56
							}
						},
						"in LA (Southern California)"
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
						{ className: "option", to: "/in/nyc", __source: {
								fileName: _jsxFileName,
								lineNumber: 59
							}
						},
						"in NYC (New York City)"
					),
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_8_react_router_dom__["Link"],
						{ className: "option", to: "/in/denver", __source: {
								fileName: _jsxFileName,
								lineNumber: 62
							}
						},
						"in Denver (Colorado)"
					)
				),
				__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
					"span",
					{
						className: "button",
						onClick: function onClick(e) {
							console.log("clicked BUTTON", e.target);
						},
						__source: {
							fileName: _jsxFileName,
							lineNumber: 66
						}
					},
					__WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement("span", { className: "icon-top-select", __source: {
							fileName: _jsxFileName,
							lineNumber: 72
						}
					})
				)
			);
		}
	}]);

	return DropdownLink;
}(__WEBPACK_IMPORTED_MODULE_6_react___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
	return {
		filters: state.filters.length ? state.filters : ownProps.filters
	};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	return {
		dispatch_filterAdd: function dispatch_filterAdd(filter) {
			// dispatch(actions.filterAdd(filter));
		}
	};
};
var ConnectedDropdownLink = Object(__WEBPACK_IMPORTED_MODULE_9_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(DropdownLink);

/*
	Components
*/
/* harmony default export */ __webpack_exports__["a"] = (ConnectedDropdownLink);

/***/ })

};
//# sourceMappingURL=0.55ee0379fb3bef1be82e.hot-update.js.map