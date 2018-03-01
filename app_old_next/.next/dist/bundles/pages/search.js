module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
var _jsxFileName = '/www/ps-jobs/app/components/nav.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2087749581' + ' ' + 'nav',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2087749581' + ' ' + 'nav_section',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2087749581',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
              { prefetch: true, route: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2087749581',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                  }
                },
                'home \xBB'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2087749581',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
              { prefetch: true, route: 'about', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2087749581',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                  }
                },
                'about \xBB'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2087749581' + ' ' + 'nav_section',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2087749581',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
              { prefetch: true, route: '/search/samsung', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2087749581',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  }
                },
                'search "samsung" \xBB'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2087749581',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
              { prefetch: true, route: '/search/apple', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2087749581',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  }
                },
                'search "apple" \xBB'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2087749581',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
              { prefetch: true, route: '/search/vaco', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2087749581',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  }
                },
                'search "vaco" \xBB'
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2087749581',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
              { prefetch: true, route: '/search/google', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'a',
                {
                  className: 'jsx-2087749581',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  }
                },
                'search "google" \xBB'
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2087749581',
          css: '.nav.jsx-2087749581{padding:2rem;}.nav_section.jsx-2087749581{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFFZ0IsQUFHQSxhQUhDLDZEQUdBIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2LmpzIiwic291cmNlUm9vdCI6Ii93d3cvcHMtam9icy9hcHAiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyb3V0ZXMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X3NlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2PjxMaW5rIHByZWZldGNoIHJvdXRlPScvJz48YT5ob21lICZyYXF1bzs8L2E+PC9MaW5rPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PExpbmsgcHJlZmV0Y2ggcm91dGU9J2Fib3V0Jz48YT5hYm91dCAmcmFxdW87PC9hPjwvTGluaz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X3NlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2PjxMaW5rIHByZWZldGNoIHJvdXRlPScvc2VhcmNoL3NhbXN1bmcnPjxhPnNlYXJjaCBcInNhbXN1bmdcIiAmcmFxdW87PC9hPjwvTGluaz48L2Rpdj5cbiAgICAgICAgICA8ZGl2PjxMaW5rIHByZWZldGNoIHJvdXRlPScvc2VhcmNoL2FwcGxlJz48YT5zZWFyY2ggXCJhcHBsZVwiICZyYXF1bzs8L2E+PC9MaW5rPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PExpbmsgcHJlZmV0Y2ggcm91dGU9Jy9zZWFyY2gvdmFjbyc+PGE+c2VhcmNoIFwidmFjb1wiICZyYXF1bzs8L2E+PC9MaW5rPjwvZGl2PlxuICAgICAgICAgIDxkaXY+PExpbmsgcHJlZmV0Y2ggcm91dGU9Jy9zZWFyY2gvZ29vZ2xlJz48YT5zZWFyY2ggXCJnb29nbGVcIiAmcmFxdW87PC9hPjwvTGluaz48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubmF2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6MnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hdl9zZWN0aW9uIHtcbiAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il19 */\n/*@ sourceURL=components/nav.js */'
        })
      );
    }
  }]);

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nav__ = __webpack_require__("./components/nav.js");

var _jsxFileName = '/www/ps-jobs/app/pages/search.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// this **** is NOT ok:
var getAPIHostname = function getAPIHostname() {
	if (typeof window === "undefined") {
		console.log('getAPIHostname => http://localhost:1080');
		return "http://localhost:1080";
	} else {
		if (window.location.hostname === "localhost") {
			console.log("getAPIHostname => " + window.location.protocol + "//" + window.location.hostname + ":1080");
			return window.location.protocol + "//" + window.location.hostname + ":1080";
		} else {
			console.log("getAPIHostname => " + window.location.protocol + "//" + window.location.hostname);
			return window.location.protocol + "//" + window.location.hostname;
		}
	}
};
getAPIHostname();

var MyPage = function (_React$Component) {
	_inherits(MyPage, _React$Component);

	function MyPage() {
		_classCallCheck(this, MyPage);

		var _this = _possibleConstructorReturn(this, (MyPage.__proto__ || Object.getPrototypeOf(MyPage)).call(this));

		_this.state = {
			jobs: [],
			jobs_count: 0
		};
		return _this;
	}

	_createClass(MyPage, [{
		key: 'render',
		value: function render() {
			// this is NOT an alternative for this.setState, but a way to use values from getInitialProps() 
			this.state = Object.assign(this.state, this.props);
			// get on with it...
			var Jobs = [];
			if (this.state && this.state.jobs) {
				this.state.jobs.forEach(function (job, i) {
					Jobs.push(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'div',
						{ key: job._id, __source: {
								fileName: _jsxFileName,
								lineNumber: 47
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							'div',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 48
								}
							},
							job.text
						),
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							'sup',
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 49
								}
							},
							job.location
						)
					));
				});
			}
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 55
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_nav__["a" /* default */], {
					__source: {
						fileName: _jsxFileName,
						lineNumber: 56
					}
				}),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'h2',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 57
						}
					},
					'Search "',
					this.state.url.query.search,
					'" results: ',
					this.state.jobs_count
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'div',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 58
						}
					},
					Jobs
				)
			);
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(params) {
				var res, json;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								console.log('search params', params);
								// eslint-disable-next-line no-undef
								_context.next = 3;
								return fetch(getAPIHostname() + '/api/v1/jobs?text=' + (params.query.search || ''));

							case 3:
								res = _context.sent;
								_context.next = 6;
								return res.json();

							case 6:
								json = _context.sent;
								return _context.abrupt('return', { jobs_count: json.results || 0, jobs: json.data || [] });

							case 8:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return MyPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MyPage);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__("next-routes")();

routes.add('about'), routes.add('search', '/search/:search?');

// routes
// .add('about')
// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/search.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map