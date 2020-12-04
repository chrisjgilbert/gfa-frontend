module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/restaurants/[id].js");
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

/***/ "./components/ReviewList.js":
/*!**********************************!*\
  !*** ./components/ReviewList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ReviewListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewListItem */ \"./components/ReviewListItem.js\");\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/ReviewList.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst ReviewList = ({\n  data\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: data.map(review => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ReviewListItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _objectSpread({}, review.attributes), review.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldmlld0xpc3QuanM/YjdjNCJdLCJuYW1lcyI6WyJSZXZpZXdMaXN0IiwiZGF0YSIsIm1hcCIsInJldmlldyIsImF0dHJpYnV0ZXMiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFjO0FBQy9CLHNCQUNFO0FBQUEsY0FDR0EsSUFBSSxDQUFDQyxHQUFMLENBQVVDLE1BQUQsaUJBQ1IscUVBQUMsdURBQUQsb0JBQW9DQSxNQUFNLENBQUNDLFVBQTNDLEdBQXFCRCxNQUFNLENBQUNFLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQVJEOztBQVVlTCx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmV2aWV3TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXZpZXdMaXN0SXRlbSBmcm9tIFwiLi9SZXZpZXdMaXN0SXRlbVwiO1xuXG5jb25zdCBSZXZpZXdMaXN0ID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHVsPlxuICAgICAge2RhdGEubWFwKChyZXZpZXcpID0+IChcbiAgICAgICAgPFJldmlld0xpc3RJdGVtIGtleT17cmV2aWV3LmlkfSB7Li4ucmV2aWV3LmF0dHJpYnV0ZXN9IC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmV2aWV3TGlzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ReviewList.js\n");

/***/ }),

/***/ "./components/ReviewListItem.js":
/*!**************************************!*\
  !*** ./components/ReviewListItem.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/ReviewListItem.js\";\n\nconst ReviewListItem = ({\n  content,\n  rating,\n  glutenFreeRange,\n  value,\n  service\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: [\"Rating: \", rating]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: [\"Gluten free options: \", glutenFreeRange]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: [\"Value: \", value]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n      children: [\"Value: \", service]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Service: \", content]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReviewListItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jldmlld0xpc3RJdGVtLmpzPzU5ZDIiXSwibmFtZXMiOlsiUmV2aWV3TGlzdEl0ZW0iLCJjb250ZW50IiwicmF0aW5nIiwiZ2x1dGVuRnJlZVJhbmdlIiwidmFsdWUiLCJzZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQztBQUN0QkMsU0FEc0I7QUFFdEJDLFFBRnNCO0FBR3RCQyxpQkFIc0I7QUFJdEJDLE9BSnNCO0FBS3RCQztBQUxzQixDQUFELEtBTWpCO0FBQ0osc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDZCQUFhSCxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsMENBQTBCQyxlQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRTtBQUFBLDRCQUFZQyxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFO0FBQUEsNEJBQVlDLE9BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBS0U7QUFBQSw4QkFBYUosT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFTRCxDQWhCRDs7QUFrQmVELDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXZpZXdMaXN0SXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFJldmlld0xpc3RJdGVtID0gKHtcbiAgY29udGVudCxcbiAgcmF0aW5nLFxuICBnbHV0ZW5GcmVlUmFuZ2UsXG4gIHZhbHVlLFxuICBzZXJ2aWNlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxsaT5cbiAgICAgIDxoND5SYXRpbmc6IHtyYXRpbmd9PC9oND5cbiAgICAgIDxoNT5HbHV0ZW4gZnJlZSBvcHRpb25zOiB7Z2x1dGVuRnJlZVJhbmdlfTwvaDU+XG4gICAgICA8aDU+VmFsdWU6IHt2YWx1ZX08L2g1PlxuICAgICAgPGg1PlZhbHVlOiB7c2VydmljZX08L2g1PlxuICAgICAgPHA+U2VydmljZToge2NvbnRlbnR9PC9wPlxuICAgIDwvbGk+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXZpZXdMaXN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ReviewListItem.js\n");

/***/ }),

/***/ "./pages/restaurants/[id].js":
/*!***********************************!*\
  !*** ./pages/restaurants/[id].js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ReviewList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ReviewList */ \"./components/ReviewList.js\");\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/pages/restaurants/[id].js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nconst Restaurant = ({\n  eatery,\n  reviews\n}) => {\n  const {\n    name,\n    address\n  } = eatery;\n  console.log(reviews);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ReviewList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, reviews), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, undefined);\n};\n\nasync function getStaticPaths() {\n  // get all restaurants\n  const response = await fetch(\"http://localhost:8080/api/eateries\");\n  const restaurants = await response.json(); // Get the paths we want to pre-render based on restaurants\n\n  const paths = restaurants.data.map(restaurant => `/restaurants/${restaurant.id}`); // We'll pre-render only these paths at build time.\n  // { fallback: false } means other routes should 404.\n\n  return {\n    paths,\n    fallback: false\n  };\n}\nasync function getStaticProps({\n  params\n}) {\n  const {\n    id\n  } = params;\n  const eateryResponse = await fetch(`http://localhost:8080/api/eateries/${id}`);\n  const reviewsResponse = await fetch(`http://localhost:8080/api/eateries/${id}/reviews`);\n  const eateryJson = await eateryResponse.json();\n  const reviewsJson = await reviewsResponse.json();\n  return {\n    props: {\n      eatery: eateryJson.data.attributes,\n      reviews: reviewsJson\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Restaurant);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZXN0YXVyYW50cy8uanM/NWUxMCJdLCJuYW1lcyI6WyJSZXN0YXVyYW50IiwiZWF0ZXJ5IiwicmV2aWV3cyIsIm5hbWUiLCJhZGRyZXNzIiwiY29uc29sZSIsImxvZyIsImdldFN0YXRpY1BhdGhzIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3RhdXJhbnRzIiwianNvbiIsInBhdGhzIiwiZGF0YSIsIm1hcCIsInJlc3RhdXJhbnQiLCJpZCIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJlYXRlcnlSZXNwb25zZSIsInJldmlld3NSZXNwb25zZSIsImVhdGVyeUpzb24iLCJyZXZpZXdzSnNvbiIsInByb3BzIiwiYXR0cmlidXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLENBQUM7QUFBRUMsUUFBRjtBQUFVQztBQUFWLENBQUQsS0FBeUI7QUFDMUMsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBb0JILE1BQTFCO0FBRUFJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaO0FBQ0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSw0QkFDRTtBQUFBLGdCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLGdCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSxxRUFBQyw4REFBRCxvQkFBZ0JGLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQVhEOztBQWFPLGVBQWVLLGNBQWYsR0FBZ0M7QUFDckM7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLG9DQUFELENBQTVCO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLE1BQU1GLFFBQVEsQ0FBQ0csSUFBVCxFQUExQixDQUhxQyxDQUtyQzs7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLFdBQVcsQ0FBQ0csSUFBWixDQUFpQkMsR0FBakIsQ0FDWEMsVUFBRCxJQUFpQixnQkFBZUEsVUFBVSxDQUFDQyxFQUFHLEVBRGxDLENBQWQsQ0FOcUMsQ0FVckM7QUFDQTs7QUFDQSxTQUFPO0FBQUVKLFNBQUY7QUFBU0ssWUFBUSxFQUFFO0FBQW5CLEdBQVA7QUFDRDtBQUVNLGVBQWVDLGNBQWYsQ0FBOEI7QUFBRUM7QUFBRixDQUE5QixFQUEwQztBQUMvQyxRQUFNO0FBQUVIO0FBQUYsTUFBU0csTUFBZjtBQUNBLFFBQU1DLGNBQWMsR0FBRyxNQUFNWCxLQUFLLENBQy9CLHNDQUFxQ08sRUFBRyxFQURULENBQWxDO0FBR0EsUUFBTUssZUFBZSxHQUFHLE1BQU1aLEtBQUssQ0FDaEMsc0NBQXFDTyxFQUFHLFVBRFIsQ0FBbkM7QUFHQSxRQUFNTSxVQUFVLEdBQUcsTUFBTUYsY0FBYyxDQUFDVCxJQUFmLEVBQXpCO0FBQ0EsUUFBTVksV0FBVyxHQUFHLE1BQU1GLGVBQWUsQ0FBQ1YsSUFBaEIsRUFBMUI7QUFFQSxTQUFPO0FBQ0xhLFNBQUssRUFBRTtBQUNMdkIsWUFBTSxFQUFFcUIsVUFBVSxDQUFDVCxJQUFYLENBQWdCWSxVQURuQjtBQUVMdkIsYUFBTyxFQUFFcUI7QUFGSjtBQURGLEdBQVA7QUFNRDtBQUVjdkIseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZXN0YXVyYW50cy9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBSZXZpZXdMaXN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Jldmlld0xpc3RcIjtcblxuY29uc3QgUmVzdGF1cmFudCA9ICh7IGVhdGVyeSwgcmV2aWV3cyB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgYWRkcmVzcyB9ID0gZWF0ZXJ5O1xuXG4gIGNvbnNvbGUubG9nKHJldmlld3MpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgIDxwPnthZGRyZXNzfTwvcD5cbiAgICAgIDxSZXZpZXdMaXN0IHsuLi5yZXZpZXdzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAvLyBnZXQgYWxsIHJlc3RhdXJhbnRzXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2VhdGVyaWVzXCIpO1xuICBjb25zdCByZXN0YXVyYW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiByZXN0YXVyYW50c1xuICBjb25zdCBwYXRocyA9IHJlc3RhdXJhbnRzLmRhdGEubWFwKFxuICAgIChyZXN0YXVyYW50KSA9PiBgL3Jlc3RhdXJhbnRzLyR7cmVzdGF1cmFudC5pZH1gXG4gICk7XG5cbiAgLy8gV2UnbGwgcHJlLXJlbmRlciBvbmx5IHRoZXNlIHBhdGhzIGF0IGJ1aWxkIHRpbWUuXG4gIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zO1xuICBjb25zdCBlYXRlcnlSZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2VhdGVyaWVzLyR7aWR9YFxuICApO1xuICBjb25zdCByZXZpZXdzUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9lYXRlcmllcy8ke2lkfS9yZXZpZXdzYFxuICApO1xuICBjb25zdCBlYXRlcnlKc29uID0gYXdhaXQgZWF0ZXJ5UmVzcG9uc2UuanNvbigpO1xuICBjb25zdCByZXZpZXdzSnNvbiA9IGF3YWl0IHJldmlld3NSZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZWF0ZXJ5OiBlYXRlcnlKc29uLmRhdGEuYXR0cmlidXRlcyxcbiAgICAgIHJldmlld3M6IHJldmlld3NKc29uLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/restaurants/[id].js\n");

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