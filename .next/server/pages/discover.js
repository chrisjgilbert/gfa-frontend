module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/discover.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/Container.js\";\n\nconst {\n  Children\n} = __webpack_require__(/*! react */ \"react\");\n\nconst Container = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbnRhaW5lci5qcz9hZDBkIl0sIm5hbWVzIjpbIkNoaWxkcmVuIiwicmVxdWlyZSIsIkNvbnRhaW5lciIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNO0FBQUVBO0FBQUYsSUFBZUMsbUJBQU8sQ0FBQyxvQkFBRCxDQUE1Qjs7QUFFQSxNQUFNQyxTQUFTLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDbEMsc0JBQU87QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLGNBQTRCQTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQUZEOztBQUllRCx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29udGFpbmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDaGlsZHJlbiB9ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntjaGlsZHJlbn08L2Rpdj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Container.js\n");

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ \"./components/Container.js\");\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/Layout.js\";\n\n\nconst Layout = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 10\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qcz9lNThhIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDL0Isc0JBQU8scUVBQUMsa0RBQUQ7QUFBQSxjQUFZQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELENBRkQ7O0FBSWVELHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuL0NvbnRhaW5lclwiO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIHJldHVybiA8Q29udGFpbmVyPntjaGlsZHJlbn08L0NvbnRhaW5lcj47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./components/RestaurantList.js":
/*!**************************************!*\
  !*** ./components/RestaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RestaurantListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestaurantListItem */ \"./components/RestaurantListItem.js\");\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/RestaurantList.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst data = [{\n  id: 1,\n  name: \"Pizza Express\",\n  description: \"Somewhere over the pizza\",\n  rating: 5,\n  cuisines: [\"Pizza\"],\n  reviews: [\"yep\", \"ok\"]\n}, {\n  id: 2,\n  name: \"Franco Manca\",\n  description: \"Somewhere over the rainbox\",\n  rating: 4.5,\n  cuisines: [\"Pizza\", \"Italian\"],\n  reviews: [\"nice\", \"not bad\"]\n}, {\n  id: 3,\n  name: \"Honest Burgers\",\n  description: \"Blah Blah Blah somewhere over the rainbox\",\n  rating: 4,\n  cuisines: [\"Burgers\"],\n  reviews: [\"average\"]\n}];\n\nconst RestaurantList = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: data.map(restaurant => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RestaurantListItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({}, restaurant), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RestaurantList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RhdXJhbnRMaXN0LmpzPzE2M2EiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicmF0aW5nIiwiY3Vpc2luZXMiLCJyZXZpZXdzIiwiUmVzdGF1cmFudExpc3QiLCJtYXAiLCJyZXN0YXVyYW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsZUFGUjtBQUdFQyxhQUFXLEVBQUUsMEJBSGY7QUFJRUMsUUFBTSxFQUFFLENBSlY7QUFLRUMsVUFBUSxFQUFFLENBQUMsT0FBRCxDQUxaO0FBTUVDLFNBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxJQUFSO0FBTlgsQ0FEVyxFQVNYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxjQUZSO0FBR0VDLGFBQVcsRUFBRSw0QkFIZjtBQUlFQyxRQUFNLEVBQUUsR0FKVjtBQUtFQyxVQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixDQUxaO0FBTUVDLFNBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFUO0FBTlgsQ0FUVyxFQWlCWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsZ0JBRlI7QUFHRUMsYUFBVyxFQUFFLDJDQUhmO0FBSUVDLFFBQU0sRUFBRSxDQUpWO0FBS0VDLFVBQVEsRUFBRSxDQUFDLFNBQUQsQ0FMWjtBQU1FQyxTQUFPLEVBQUUsQ0FBQyxTQUFEO0FBTlgsQ0FqQlcsQ0FBYjs7QUEyQkEsTUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDM0Isc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLGdCQUNHUCxJQUFJLENBQUNRLEdBQUwsQ0FBVUMsVUFBRCxpQkFDUixxRUFBQywyREFBRCxvQkFBd0JBLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBU0QsQ0FWRDs7QUFZZUYsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc3RhdXJhbnRMaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnRMaXN0SXRlbSBmcm9tIFwiLi9SZXN0YXVyYW50TGlzdEl0ZW1cIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiUGl6emEgRXhwcmVzc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWV3aGVyZSBvdmVyIHRoZSBwaXp6YVwiLFxuICAgIHJhdGluZzogNSxcbiAgICBjdWlzaW5lczogW1wiUGl6emFcIl0sXG4gICAgcmV2aWV3czogW1wieWVwXCIsIFwib2tcIl0sXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkZyYW5jbyBNYW5jYVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWV3aGVyZSBvdmVyIHRoZSByYWluYm94XCIsXG4gICAgcmF0aW5nOiA0LjUsXG4gICAgY3Vpc2luZXM6IFtcIlBpenphXCIsIFwiSXRhbGlhblwiXSxcbiAgICByZXZpZXdzOiBbXCJuaWNlXCIsIFwibm90IGJhZFwiXSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIG5hbWU6IFwiSG9uZXN0IEJ1cmdlcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJCbGFoIEJsYWggQmxhaCBzb21ld2hlcmUgb3ZlciB0aGUgcmFpbmJveFwiLFxuICAgIHJhdGluZzogNCxcbiAgICBjdWlzaW5lczogW1wiQnVyZ2Vyc1wiXSxcbiAgICByZXZpZXdzOiBbXCJhdmVyYWdlXCJdLFxuICB9LFxuXTtcblxuY29uc3QgUmVzdGF1cmFudExpc3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8dWw+XG4gICAgICAgIHtkYXRhLm1hcCgocmVzdGF1cmFudCkgPT4gKFxuICAgICAgICAgIDxSZXN0YXVyYW50TGlzdEl0ZW0gey4uLnJlc3RhdXJhbnR9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RestaurantList.js\n");

/***/ }),

/***/ "./components/RestaurantListItem.js":
/*!******************************************!*\
  !*** ./components/RestaurantListItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/RestaurantListItem.js\";\n\nconst RestaurantListItem = ({\n  id,\n  name,\n  rating,\n  cuisines,\n  reviews\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Rating: \", rating, \" (\", reviews.length, \" reviews)\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: cuisines.map((cuisine, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: cuisine\n      }, index, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined)]\n  }, id, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RestaurantListItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RhdXJhbnRMaXN0SXRlbS5qcz9mMTIzIl0sIm5hbWVzIjpbIlJlc3RhdXJhbnRMaXN0SXRlbSIsImlkIiwibmFtZSIsInJhdGluZyIsImN1aXNpbmVzIiwicmV2aWV3cyIsImxlbmd0aCIsIm1hcCIsImN1aXNpbmUiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTUEsa0JBQWtCLEdBQUcsQ0FBQztBQUFFQyxJQUFGO0FBQU1DLE1BQU47QUFBWUMsUUFBWjtBQUFvQkMsVUFBcEI7QUFBOEJDO0FBQTlCLENBQUQsS0FBNkM7QUFDdEUsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLGdCQUFLSDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDZCQUNXQyxNQURYLFFBQ3FCRSxPQUFPLENBQUNDLE1BRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUtFO0FBQUEsZ0JBQ0dGLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLENBQUNDLE9BQUQsRUFBVUMsS0FBVixrQkFDWjtBQUFBLGtCQUFpQkQ7QUFBakIsU0FBU0MsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLEtBQVNSLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBYUQsQ0FkRDs7QUFnQmVELGlGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXN0YXVyYW50TGlzdEl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZXN0YXVyYW50TGlzdEl0ZW0gPSAoeyBpZCwgbmFtZSwgcmF0aW5nLCBjdWlzaW5lcywgcmV2aWV3cyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpIGtleT17aWR9PlxuICAgICAgPGgzPntuYW1lfTwvaDM+XG4gICAgICA8cD5cbiAgICAgICAgUmF0aW5nOiB7cmF0aW5nfSAoe3Jldmlld3MubGVuZ3RofSByZXZpZXdzKVxuICAgICAgPC9wPlxuICAgICAgPHVsPlxuICAgICAgICB7Y3Vpc2luZXMubWFwKChjdWlzaW5lLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57Y3Vpc2luZX08L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9saT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RestaurantListItem.js\n");

/***/ }),

/***/ "./components/TopRestaurants.js":
/*!**************************************!*\
  !*** ./components/TopRestaurants.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RestaurantList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestaurantList */ \"./components/RestaurantList.js\");\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/TopRestaurants.js\";\n\n\nconst TopRestaurants = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Top restaurants in Clapham, London\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RestaurantList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopRestaurants);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvcFJlc3RhdXJhbnRzLmpzP2IxYmIiXSwibmFtZXMiOlsiVG9wUmVzdGF1cmFudHMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBQzNCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBTUQsQ0FQRDs7QUFTZUEsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcFJlc3RhdXJhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnRMaXN0IGZyb20gXCIuL1Jlc3RhdXJhbnRMaXN0XCI7XG5cbmNvbnN0IFRvcFJlc3RhdXJhbnRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uPlxuICAgICAgPGgxPlRvcCByZXN0YXVyYW50cyBpbiBDbGFwaGFtLCBMb25kb248L2gxPlxuICAgICAgPFJlc3RhdXJhbnRMaXN0IC8+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wUmVzdGF1cmFudHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TopRestaurants.js\n");

/***/ }),

/***/ "./pages/discover.js":
/*!***************************!*\
  !*** ./pages/discover.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_TopRestaurants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TopRestaurants */ \"./components/TopRestaurants.js\");\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/pages/discover.js\";\n\n\n\nconst Discover = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TopRestaurants__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discover);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kaXNjb3Zlci5qcz9jYzIzIl0sIm5hbWVzIjpbIkRpc2NvdmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFBTTtBQUNyQixzQkFDRSxxRUFBQywwREFBRDtBQUFBLDJCQUNFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFlQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Rpc2NvdmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBUb3BSZXN0YXVyYW50cyBmcm9tIFwiLi4vY29tcG9uZW50cy9Ub3BSZXN0YXVyYW50c1wiO1xuXG5jb25zdCBEaXNjb3ZlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPFRvcFJlc3RhdXJhbnRzIC8+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNjb3ZlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/discover.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });