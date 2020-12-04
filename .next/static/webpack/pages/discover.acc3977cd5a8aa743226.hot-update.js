webpackHotUpdate_N_E("pages/discover",{

/***/ "./components/RestaurantList.js":
/*!**************************************!*\
  !*** ./components/RestaurantList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_chris_CodeProjects_gluten_free_advisor_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RestaurantListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RestaurantListItem */ \"./components/RestaurantListItem.js\");\n\n\n\nvar _jsxFileName = \"/Users/chris/CodeProjects/gluten-free-advisor-frontend/components/RestaurantList.js\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_chris_CodeProjects_gluten_free_advisor_frontend_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar data = [{\n  id: 1,\n  name: \"Pizza Express\",\n  description: \"Somewhere over the pizza\",\n  rating: 5,\n  cuisines: [\"Pizza\"],\n  reviews: [\"yep\", \"ok\"]\n}, {\n  id: 2,\n  name: \"Franco Manca\",\n  description: \"Somewhere over the rainbox\",\n  rating: 4.5,\n  cuisines: [\"Pizza\", \"Italian\"],\n  reviews: [\"nice\", \"not bad\"]\n}, {\n  id: 3,\n  name: \"Honest Burgers\",\n  description: \"Blah Blah Blah somewhere over the rainbox\",\n  rating: 4,\n  cuisines: [\"Burgers\"],\n  reviews: [\"average\"]\n}];\n\nvar RestaurantList = function RestaurantList() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n      children: data.map(function (restaurant) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_RestaurantListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({}, restaurant), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = RestaurantList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RestaurantList);\n\nvar _c;\n\n$RefreshReg$(_c, \"RestaurantList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN0YXVyYW50TGlzdC5qcz8xNjNhIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInJhdGluZyIsImN1aXNpbmVzIiwicmV2aWV3cyIsIlJlc3RhdXJhbnRMaXN0IiwibWFwIiwicmVzdGF1cmFudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsZUFGUjtBQUdFQyxhQUFXLEVBQUUsMEJBSGY7QUFJRUMsUUFBTSxFQUFFLENBSlY7QUFLRUMsVUFBUSxFQUFFLENBQUMsT0FBRCxDQUxaO0FBTUVDLFNBQU8sRUFBRSxDQUFDLEtBQUQsRUFBUSxJQUFSO0FBTlgsQ0FEVyxFQVNYO0FBQ0VMLElBQUUsRUFBRSxDQUROO0FBRUVDLE1BQUksRUFBRSxjQUZSO0FBR0VDLGFBQVcsRUFBRSw0QkFIZjtBQUlFQyxRQUFNLEVBQUUsR0FKVjtBQUtFQyxVQUFRLEVBQUUsQ0FBQyxPQUFELEVBQVUsU0FBVixDQUxaO0FBTUVDLFNBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFUO0FBTlgsQ0FUVyxFQWlCWDtBQUNFTCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxNQUFJLEVBQUUsZ0JBRlI7QUFHRUMsYUFBVyxFQUFFLDJDQUhmO0FBSUVDLFFBQU0sRUFBRSxDQUpWO0FBS0VDLFVBQVEsRUFBRSxDQUFDLFNBQUQsQ0FMWjtBQU1FQyxTQUFPLEVBQUUsQ0FBQyxTQUFEO0FBTlgsQ0FqQlcsQ0FBYjs7QUEyQkEsSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQzNCLHNCQUNFO0FBQUEsMkJBQ0U7QUFBQSxnQkFDR1AsSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQ0MsVUFBRDtBQUFBLDRCQUNSLHFFQUFDLDJEQUFELG9CQUF3QkEsVUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBU0QsQ0FWRDs7S0FBTUYsYztBQVlTQSw2RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVzdGF1cmFudExpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdGF1cmFudExpc3RJdGVtIGZyb20gXCIuL1Jlc3RhdXJhbnRMaXN0SXRlbVwiO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgbmFtZTogXCJQaXp6YSBFeHByZXNzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU29tZXdoZXJlIG92ZXIgdGhlIHBpenphXCIsXG4gICAgcmF0aW5nOiA1LFxuICAgIGN1aXNpbmVzOiBbXCJQaXp6YVwiXSxcbiAgICByZXZpZXdzOiBbXCJ5ZXBcIiwgXCJva1wiXSxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIG5hbWU6IFwiRnJhbmNvIE1hbmNhXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU29tZXdoZXJlIG92ZXIgdGhlIHJhaW5ib3hcIixcbiAgICByYXRpbmc6IDQuNSxcbiAgICBjdWlzaW5lczogW1wiUGl6emFcIiwgXCJJdGFsaWFuXCJdLFxuICAgIHJldmlld3M6IFtcIm5pY2VcIiwgXCJub3QgYmFkXCJdLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCJIb25lc3QgQnVyZ2Vyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJsYWggQmxhaCBCbGFoIHNvbWV3aGVyZSBvdmVyIHRoZSByYWluYm94XCIsXG4gICAgcmF0aW5nOiA0LFxuICAgIGN1aXNpbmVzOiBbXCJCdXJnZXJzXCJdLFxuICAgIHJldmlld3M6IFtcImF2ZXJhZ2VcIl0sXG4gIH0sXG5dO1xuXG5jb25zdCBSZXN0YXVyYW50TGlzdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEubWFwKChyZXN0YXVyYW50KSA9PiAoXG4gICAgICAgICAgPFJlc3RhdXJhbnRMaXN0SXRlbSB7Li4ucmVzdGF1cmFudH0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3RhdXJhbnRMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RestaurantList.js\n");

/***/ })

})