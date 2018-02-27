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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ })

/******/ });