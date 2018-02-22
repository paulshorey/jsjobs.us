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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = '/www/ps-jobs/components/nav.js';

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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/images/banner.jpg', __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
              { prefetch: true, href: '/', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                }
              },
              '\xAB go home'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
              { prefetch: true, href: '/search/react', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                }
              },
              'search "react" \xBB'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
              { prefetch: true, href: '/search/node.js', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                }
              },
              'search "node.js" \xBB'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
              { prefetch: true, href: '/search/whatever', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                }
              },
              'search "whatever" \xBB'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
              { prefetch: true, href: '/adsfdfasdf', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              },
              'asdffdfasdf \xBB'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
              { prefetch: true, href: '/about', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                }
              },
              'about \xBB'
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),

/***/ "./pages/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_nav__ = __webpack_require__("./components/nav.js");
var _jsxFileName = '/www/ps-jobs/pages/search.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var MyPage = function (_React$Component) {
  _inherits(MyPage, _React$Component);

  function MyPage() {
    _classCallCheck(this, MyPage);

    return _possibleConstructorReturn(this, (MyPage.__proto__ || Object.getPrototypeOf(MyPage)).apply(this, arguments));
  }

  _createClass(MyPage, [{
    key: 'render',
    value: function render() {
      var Jobs = [];
      if (this.props.url && this.props.url.query && this.props.url.query.data) {
        this.props.url.query.data.forEach(function (job, i) {
          Jobs.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { key: job._id, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                }
              },
              job.text
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'sup',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                }
              },
              job.location
            )
          ));
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_nav__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          'SEARCH: ',
          this.props.jobs_count
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          },
          Jobs
        )
      );
    }
  }]);

  return MyPage;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (MyPage);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/search.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map