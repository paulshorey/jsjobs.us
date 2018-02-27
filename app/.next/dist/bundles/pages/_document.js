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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(3)();

routes.add('about'), routes.add('search', '/search/:search?');

// routes
// .add('about')
// .add('blog', '/blog/:slug')
// .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony default export */ __webpack_exports__["default"] = ({
	topHeight: '4.5rem',
	sidebarNavWidth: '244px',
	fontFamily: 'Agenda, Helvetica, sans-serif',
	containerMaxWidth: '1080px',
	colorNeutral: '#999999',
	colorGreen1: '#81c341',
	colorGreen2: '#6ab81c',
	colorGreen3: '#659520',
	colorBlue1: '#277a80',
	colorBlue2: '#39617a',
	colorBlue3: '#324E68',
	colorOrange1: '#fcca56',
	colorOrange2: '#fdb713',
	colorOrange3: '#f1a700',
	colorWarn1: 'rgb(244, 67, 54)',
	colorWarn2: '#d9534f',
	colorWarn3: '#bf4343',
	colorDark1: 'rgb(0, 0, 0)',
	colorDark2: 'rgb(30,30,30)',
	colorDark3: 'rgb(60,60,60)',
	colorLight1: 'rgb(255, 255, 255)',
	colorLight2: 'rgb(245,245,245)',
	colorLight3: 'rgb(230,230,230)',
	colorOnDark1: 'rgba(255, 255, 255, 0.9)',
	colorOnDark2: 'rgba(255, 255, 255, 0.6)',
	colorOnDark3: 'rgba(255, 255, 255, 0.3)',
	colorOnLight1: 'rgba(0, 0, 0, 0.8)',
	colorOnLight2: 'rgba(0, 0, 0, 0.5)',
	colorOnLight3: 'rgba(0, 0, 0, 0.2)'
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/document"
var document_ = __webpack_require__(7);
var document__default = /*#__PURE__*/__webpack_require__.n(document_);

// EXTERNAL MODULE: external "styled-jsx/server"
var server_ = __webpack_require__(8);
var server__default = /*#__PURE__*/__webpack_require__.n(server_);

// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(2);
var routes_default = /*#__PURE__*/__webpack_require__.n(routes);

// EXTERNAL MODULE: ./pages/_document.theme.js
var _document_theme = __webpack_require__(4);

// CONCATENATED MODULE: ./pageHeader/header.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var header_Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'div',
        { className: 'nav' },
        external__react__default.a.createElement(
          'div',
          { className: 'nav_section' },
          external__react__default.a.createElement(
            'div',
            null,
            external__react__default.a.createElement(
              routes["Link"],
              { prefetch: true, route: '/' },
              external__react__default.a.createElement(
                'a',
                null,
                'home \xBB'
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            null,
            external__react__default.a.createElement(
              routes["Link"],
              { prefetch: true, route: 'about' },
              external__react__default.a.createElement(
                'a',
                null,
                'about \xBB'
              )
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'nav_section' },
          external__react__default.a.createElement(
            'div',
            null,
            external__react__default.a.createElement(
              routes["Link"],
              { prefetch: true, route: '/search/samsung' },
              external__react__default.a.createElement(
                'a',
                null,
                'search "samsung" \xBB'
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            null,
            external__react__default.a.createElement(
              routes["Link"],
              { prefetch: true, route: '/search/apple' },
              external__react__default.a.createElement(
                'a',
                null,
                'search "apple" \xBB'
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            null,
            external__react__default.a.createElement(
              routes["Link"],
              { prefetch: true, route: '/search/vaco' },
              external__react__default.a.createElement(
                'a',
                null,
                'search "vaco" \xBB'
              )
            )
          ),
          external__react__default.a.createElement(
            'div',
            null,
            external__react__default.a.createElement(
              routes["Link"],
              { prefetch: true, route: '/search/google' },
              external__react__default.a.createElement(
                'a',
                null,
                'search "google" \xBB'
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(external__react__default.a.Component);

/* harmony default export */ var header = (header_Header);
// CONCATENATED MODULE: ./pages/_document.js
var _document__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _document__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _document__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _document__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ./pages/_document.js




var _document_MyDocument = function (_Document) {
  _document__inherits(MyDocument, _Document);

  function MyDocument() {
    _document__classCallCheck(this, MyDocument);

    return _document__possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _document__createClass(MyDocument, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        'html',
        null,
        external__react__default.a.createElement(
          document_["Head"],
          null,
          external__react__default.a.createElement('meta', { httpEquiv: 'cache-control', content: 'max-age=0' }),
          external__react__default.a.createElement('meta', { httpEquiv: 'cache-control', content: 'no-cache' }),
          external__react__default.a.createElement('meta', { httpEquiv: 'expires', content: '0' }),
          external__react__default.a.createElement('meta', { httpEquiv: 'expires', content: 'Tue, 01 Jan 1980 1:00:00 GMT' }),
          external__react__default.a.createElement('meta', { httpEquiv: 'pragma', content: 'no-cache' }),
          external__react__default.a.createElement('link', { href: '/static/images/puzzle.ico', rel: 'shortcut icon', type: 'image/x-icon' })
        ),
        external__react__default.a.createElement(
          'body',
          { className: 'custom_class' },
          external__react__default.a.createElement(header, null),
          external__react__default.a.createElement(document_["Main"], null),
          external__react__default.a.createElement(document_["NextScript"], null)
        )
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks;

      var styles = server__default()();
      return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
    }
  }]);

  return MyDocument;
}(document__default.a);

/* harmony default export */ var _document = __webpack_exports__["default"] = (_document_MyDocument);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })
/******/ ]);