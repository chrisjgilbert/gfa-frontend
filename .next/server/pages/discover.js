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

/***/ "./components/RestaurantListItem.js":
/*!******************************************!*\
  !*** ./components/RestaurantListItem.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/RestaurantListItem.js\";\n\nconst RestaurantListItem = ({\n  name,\n  address,\n  cuisines\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: cuisines.map(cuisine => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: cuisine.name\n      }, cuisine.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RestaurantListItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jlc3RhdXJhbnRMaXN0SXRlbS5qcz9mMTIzIl0sIm5hbWVzIjpbIlJlc3RhdXJhbnRMaXN0SXRlbSIsIm5hbWUiLCJhZGRyZXNzIiwiY3Vpc2luZXMiLCJtYXAiLCJjdWlzaW5lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU1BLGtCQUFrQixHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxTQUFSO0FBQWlCQztBQUFqQixDQUFELEtBQWlDO0FBQzFELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQSxnQkFDR0MsUUFBUSxDQUFDQyxHQUFULENBQWNDLE9BQUQsaUJBQ1o7QUFBQSxrQkFBc0JBLE9BQU8sQ0FBQ0o7QUFBOUIsU0FBU0ksT0FBTyxDQUFDQyxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBWkQ7O0FBY2VOLGlGQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXN0YXVyYW50TGlzdEl0ZW0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZXN0YXVyYW50TGlzdEl0ZW0gPSAoeyBuYW1lLCBhZGRyZXNzLCBjdWlzaW5lcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPGgzPntuYW1lfTwvaDM+XG4gICAgICA8cD57YWRkcmVzc308L3A+XG4gICAgICA8dWw+XG4gICAgICAgIHtjdWlzaW5lcy5tYXAoKGN1aXNpbmUpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtjdWlzaW5lLmlkfT57Y3Vpc2luZS5uYW1lfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L2xpPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdGF1cmFudExpc3RJdGVtO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RestaurantListItem.js\n");

/***/ }),

/***/ "./components/TopRestaurants.js":
/*!**************************************!*\
  !*** ./components/TopRestaurants.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _RestaurantListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RestaurantListItem */ \"./components/RestaurantListItem.js\");\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/TopRestaurants.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst TopRestaurants = ({\n  eateries\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Top restaurants in Clapham, London\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: eateries.map(eatery => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RestaurantListItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({}, eatery.attributes), eatery.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopRestaurants);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RvcFJlc3RhdXJhbnRzLmpzP2IxYmIiXSwibmFtZXMiOlsiVG9wUmVzdGF1cmFudHMiLCJlYXRlcmllcyIsIm1hcCIsImVhdGVyeSIsImF0dHJpYnV0ZXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUN2QyxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSxnQkFDR0EsUUFBUSxDQUFDQyxHQUFULENBQWNDLE1BQUQsaUJBQ1oscUVBQUMsMkRBQUQsb0JBQXdDQSxNQUFNLENBQUNDLFVBQS9DLEdBQXlCRCxNQUFNLENBQUNFLEVBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBVUQsQ0FYRDs7QUFhZUwsNkVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvcFJlc3RhdXJhbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlc3RhdXJhbnRMaXN0SXRlbSBmcm9tIFwiLi9SZXN0YXVyYW50TGlzdEl0ZW1cIjtcblxuY29uc3QgVG9wUmVzdGF1cmFudHMgPSAoeyBlYXRlcmllcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8aDE+VG9wIHJlc3RhdXJhbnRzIGluIENsYXBoYW0sIExvbmRvbjwvaDE+XG4gICAgICA8dWw+XG4gICAgICAgIHtlYXRlcmllcy5tYXAoKGVhdGVyeSkgPT4gKFxuICAgICAgICAgIDxSZXN0YXVyYW50TGlzdEl0ZW0ga2V5PXtlYXRlcnkuaWR9IHsuLi5lYXRlcnkuYXR0cmlidXRlc30gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvcFJlc3RhdXJhbnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TopRestaurants.js\n");

/***/ }),

/***/ "./pages/discover.js":
/*!***************************!*\
  !*** ./pages/discover.js ***!
  \***************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_TopRestaurants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TopRestaurants */ \"./components/TopRestaurants.js\");\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/pages/discover.js\";\n\n\n\nconst Discover = ({\n  eateries\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_TopRestaurants__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      eateries: eateries\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getServerSideProps(context) {\n  const response = await fetch(\"http://localhost:8080/api/eateries\");\n  const json = await response.json();\n  return {\n    props: {\n      eateries: json.data\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Discover);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kaXNjb3Zlci5qcz9jYzIzIl0sIm5hbWVzIjpbIkRpc2NvdmVyIiwiZWF0ZXJpZXMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJwcm9wcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDakMsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRSxxRUFBQyxrRUFBRDtBQUFnQixjQUFRLEVBQUVBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFLRCxDQU5EOztBQVFPLGVBQWVDLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLG9DQUFELENBQTVCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0UsSUFBVCxFQUFuQjtBQUVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xOLGNBQVEsRUFBRUssSUFBSSxDQUFDRTtBQURWO0FBREYsR0FBUDtBQUtEO0FBRWNSLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZGlzY292ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFRvcFJlc3RhdXJhbnRzIGZyb20gXCIuLi9jb21wb25lbnRzL1RvcFJlc3RhdXJhbnRzXCI7XG5cbmNvbnN0IERpc2NvdmVyID0gKHsgZWF0ZXJpZXMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8VG9wUmVzdGF1cmFudHMgZWF0ZXJpZXM9e2VhdGVyaWVzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2VhdGVyaWVzXCIpO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGVhdGVyaWVzOiBqc29uLmRhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzY292ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/discover.js\n");

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