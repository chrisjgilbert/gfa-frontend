webpackHotUpdate_N_E("pages/restaurants/[id]",{

/***/ "./pages/restaurants/[id].js":
/*!***********************************!*\
  !*** ./pages/restaurants/[id].js ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var _Users_chris_CodeProjects_gluten_free_advisor_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _components_ReviewList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ReviewList */ \"./components/ReviewList.js\");\n\n\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/pages/restaurants/[id].js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_chris_CodeProjects_gluten_free_advisor_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar Restaurant = function Restaurant(_ref) {\n  var eatery = _ref.eatery,\n      reviews = _ref.reviews;\n  var name = eatery.name,\n      address = eatery.address;\n  console.log(reviews);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      children: name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n      children: address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_ReviewList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread({}, reviews), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Restaurant;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Restaurant);\n\nvar _c;\n\n$RefreshReg$(_c, \"Restaurant\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVzdGF1cmFudHMvLmpzPzVlMTAiXSwibmFtZXMiOlsiUmVzdGF1cmFudCIsImVhdGVyeSIsInJldmlld3MiLCJuYW1lIiwiYWRkcmVzcyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUF5QjtBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFBQSxNQUNsQ0MsSUFEa0MsR0FDaEJGLE1BRGdCLENBQ2xDRSxJQURrQztBQUFBLE1BQzVCQyxPQUQ0QixHQUNoQkgsTUFEZ0IsQ0FDNUJHLE9BRDRCO0FBRzFDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosT0FBWjtBQUNBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFJQztBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLHFFQUFDLDhEQUFELG9CQUFnQkYsT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBT0QsQ0FYRDs7S0FBTUYsVTs7QUErQ1NBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcmVzdGF1cmFudHMvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUmV2aWV3TGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9SZXZpZXdMaXN0XCI7XG5cbmNvbnN0IFJlc3RhdXJhbnQgPSAoeyBlYXRlcnksIHJldmlld3MgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGFkZHJlc3MgfSA9IGVhdGVyeTtcblxuICBjb25zb2xlLmxvZyhyZXZpZXdzKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICA8cD57YWRkcmVzc308L3A+XG4gICAgICA8UmV2aWV3TGlzdCB7Li4ucmV2aWV3c30gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgLy8gZ2V0IGFsbCByZXN0YXVyYW50c1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9lYXRlcmllc1wiKTtcbiAgY29uc3QgcmVzdGF1cmFudHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gcmVzdGF1cmFudHNcbiAgY29uc3QgcGF0aHMgPSByZXN0YXVyYW50cy5kYXRhLm1hcChcbiAgICAocmVzdGF1cmFudCkgPT4gYC9yZXN0YXVyYW50cy8ke3Jlc3RhdXJhbnQuaWR9YFxuICApO1xuXG4gIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcztcbiAgY29uc3QgZWF0ZXJ5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9lYXRlcmllcy8ke2lkfWBcbiAgKTtcbiAgY29uc3QgcmV2aWV3c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGkvZWF0ZXJpZXMvJHtpZH0vcmV2aWV3c2BcbiAgKTtcbiAgY29uc3QgZWF0ZXJ5SnNvbiA9IGF3YWl0IGVhdGVyeVJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgcmV2aWV3c0pzb24gPSBhd2FpdCByZXZpZXdzUmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGVhdGVyeTogZWF0ZXJ5SnNvbi5kYXRhLmF0dHJpYnV0ZXMsXG4gICAgICByZXZpZXdzOiByZXZpZXdzSnNvbixcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN0YXVyYW50O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/restaurants/[id].js\n");

/***/ })

})