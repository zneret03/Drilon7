webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./components/config.tsx\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/Sidebar.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar SideBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Sidebar__SideBarWrapper\",\n  componentId: \"sc-1abzn0a-0\"\n})([\"background:#172a45;list-style:none;position:fixed;height:100vh;width:25%;section{text-align:right;padding:35px 35px;cursor:pointer;}li{display:flex;flex-direction:column;align-items:center;font-family:var(--font-sans);color:var(--lightest-slate);line-height:100px;font-size:50px;}\"]);\n_c = SideBarWrapper;\n\nvar Sidebar = function Sidebar(_ref) {\n  var animatedSidebar = _ref.animatedSidebar,\n      toggleSideBar = _ref.toggleSideBar;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n    style: animatedSidebar,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SideBarWrapper, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        onClick: function onClick(event) {\n          return toggleSideBar(event);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_feather__WEBPACK_IMPORTED_MODULE_5__[\"X\"], {\n          color: \"#fff\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), _config__WEBPACK_IMPORTED_MODULE_4__[\"sideLink\"].map(function (link) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: link.name\n        }, link.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SideBarWrapper\");\n$RefreshReg$(_c2, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLnRzeD9lOGRmIl0sIm5hbWVzIjpbIlNpZGVCYXJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiU2lkZWJhciIsImFuaW1hdGVkU2lkZWJhciIsInRvZ2dsZVNpZGVCYXIiLCJldmVudCIsInNpZGVMaW5rIiwibWFwIiwibGluayIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdTQUFwQjtLQUFNRixjOztBQXdCTixJQUFNRyxPQUE0QixHQUFHLFNBQS9CQSxPQUErQixPQUF3QztBQUFBLE1BQXJDQyxlQUFxQyxRQUFyQ0EsZUFBcUM7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9CO0FBQzNFLHNCQUNFLHFFQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLFNBQUssRUFBRUQsZUFBckI7QUFBQSwyQkFDRSxxRUFBQyxjQUFEO0FBQUEsOEJBQ0U7QUFBUyxlQUFPLEVBQUUsaUJBQUNFLEtBQUQ7QUFBQSxpQkFBV0QsYUFBYSxDQUFDQyxLQUFELENBQXhCO0FBQUEsU0FBbEI7QUFBQSwrQkFDRSxxRUFBQywrQ0FBRDtBQUFHLGVBQUssRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFJR0MsZ0RBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSw0QkFDWjtBQUFBLG9CQUFtQkEsSUFBSSxDQUFDQztBQUF4QixXQUFTRCxJQUFJLENBQUNFLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEWTtBQUFBLE9BQWIsQ0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWJEOztNQUFNUixPO0FBZVNBLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWRlYmFyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHNpZGVMaW5rIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgeyBYIH0gZnJvbSBcInJlYWN0LWZlYXRoZXJcIjtcblxuaW50ZXJmYWNlIFByb3BUeXBlcyB7XG4gIGFuaW1hdGVkU2lkZWJhcjogYW55O1xuICB0b2dnbGVTaWRlQmFyOiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB2b2lkO1xufVxuXG5jb25zdCBTaWRlQmFyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQ6ICMxNzJhNDU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDI1JTtcblxuICBzZWN0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAzNXB4IDM1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgIGNvbG9yOiB2YXIoLS1saWdodGVzdC1zbGF0ZSk7XG4gICAgbGluZS1oZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgfVxuYDtcblxuY29uc3QgU2lkZWJhcjogUmVhY3QuRkM8UHJvcFR5cGVzPiA9ICh7IGFuaW1hdGVkU2lkZWJhciwgdG9nZ2xlU2lkZUJhciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFuaW1hdGVkLmRpdiBzdHlsZT17YW5pbWF0ZWRTaWRlYmFyfT5cbiAgICAgIDxTaWRlQmFyV3JhcHBlcj5cbiAgICAgICAgPHNlY3Rpb24gb25DbGljaz17KGV2ZW50KSA9PiB0b2dnbGVTaWRlQmFyKGV2ZW50KX0+XG4gICAgICAgICAgPFggY29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICB7c2lkZUxpbmsubWFwKChsaW5rOiBhbnkpID0+IChcbiAgICAgICAgICA8bGkga2V5PXtsaW5rLmlkfT57bGluay5uYW1lfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC9TaWRlQmFyV3JhcHBlcj5cbiAgICA8L2FuaW1hdGVkLmRpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Sidebar.tsx\n");

/***/ })

})