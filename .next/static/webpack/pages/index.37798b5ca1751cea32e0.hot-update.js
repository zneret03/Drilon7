webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ \"./components/config.tsx\");\n/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ \"./node_modules/react-feather/dist/index.js\");\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/Sidebar.tsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar SideBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"Sidebar__SideBarWrapper\",\n  componentId: \"sc-1abzn0a-0\"\n})([\"background:#172a45;list-style:none;position:fixed;height:100vh;width:100%;div{text-align:right;padding:30px 30px;cursor:pointer;}li{display:flex;align-items:center;justify-content:center;}\"]);\n_c = SideBarWrapper;\n\nvar Sidebar = function Sidebar(_ref) {\n  var animatedSidebar = _ref.animatedSidebar,\n      toggleSideBar = _ref.toggleSideBar;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n    style: animatedSidebar,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SideBarWrapper, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: function onClick(event) {\n          return toggleSideBar(event);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_feather__WEBPACK_IMPORTED_MODULE_5__[\"X\"], {\n          color: \"#fff\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), _config__WEBPACK_IMPORTED_MODULE_4__[\"sideLink\"].map(function (link) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: link.name\n        }, link.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"SideBarWrapper\");\n$RefreshReg$(_c2, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLnRzeD9lOGRmIl0sIm5hbWVzIjpbIlNpZGVCYXJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiU2lkZWJhciIsImFuaW1hdGVkU2lkZWJhciIsInRvZ2dsZVNpZGVCYXIiLCJldmVudCIsInNpZGVMaW5rIiwibWFwIiwibGluayIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0EsSUFBTUEsY0FBYyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9NQUFwQjtLQUFNRixjOztBQTBCTixJQUFNRyxPQUE0QixHQUFHLFNBQS9CQSxPQUErQixPQUF3QztBQUFBLE1BQXJDQyxlQUFxQyxRQUFyQ0EsZUFBcUM7QUFBQSxNQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9CO0FBQzNFLHNCQUNFLHFFQUFDLHFEQUFELENBQVUsR0FBVjtBQUFjLFNBQUssRUFBRUQsZUFBckI7QUFBQSwyQkFDRSxxRUFBQyxjQUFEO0FBQUEsOEJBQ0U7QUFBSyxlQUFPLEVBQUUsaUJBQUNFLEtBQUQ7QUFBQSxpQkFBV0QsYUFBYSxDQUFDQyxLQUFELENBQXhCO0FBQUEsU0FBZDtBQUFBLCtCQUNFLHFFQUFDLCtDQUFEO0FBQUcsZUFBSyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUlHQyxnREFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRDtBQUFBLDRCQUNaO0FBQUEsb0JBQW1CQSxJQUFJLENBQUNDO0FBQXhCLFdBQVNELElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYixDQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZCRCxDQTlCRDs7TUFBTVIsTztBQWdDU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgc2lkZUxpbmsgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCB7IFggfSBmcm9tIFwicmVhY3QtZmVhdGhlclwiO1xuXG5pbnRlcmZhY2UgUHJvcFR5cGVzIHtcbiAgYW5pbWF0ZWRTaWRlYmFyOiBhbnk7XG4gIHRvZ2dsZVNpZGVCYXI6IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD4pID0+IHZvaWQ7XG59XG5cbmNvbnN0IFNpZGVCYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzE3MmE0NTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcblxuICBkaXYge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDMwcHggMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICBsaSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLyogI2N1cnZlU3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gIH0gKi9cbmA7XG5cbmNvbnN0IFNpZGViYXI6IFJlYWN0LkZDPFByb3BUeXBlcz4gPSAoeyBhbmltYXRlZFNpZGViYXIsIHRvZ2dsZVNpZGVCYXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e2FuaW1hdGVkU2lkZWJhcn0+XG4gICAgICA8U2lkZUJhcldyYXBwZXI+XG4gICAgICAgIDxkaXYgb25DbGljaz17KGV2ZW50KSA9PiB0b2dnbGVTaWRlQmFyKGV2ZW50KX0+XG4gICAgICAgICAgPFggY29sb3I9XCIjZmZmXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzaWRlTGluay5tYXAoKGxpbms6IGFueSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2xpbmsuaWR9PntsaW5rLm5hbWV9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIHsvKiBcbiAgICAgICAgPGRpdiBpZD1cImN1cnZlU3ZnXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgd2lkdGg9XCI1MDNcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNDg3XCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTAzIDQ4N1wiXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgIGQ9XCJNLTEuMTExOTggNDkwLjI0TDUwMi4zNTMgNDg5LjMyN0M0ODYuOTM1IDQ3OS44NzQgNDY5LjMxIDQ3Mi4yNyA0NDkuMzI2IDQ2Ni44MTJDMjk1Ljc1MSA0MjQuODcxIDI5MS41NSAzMjUuMzIyIDI4Ny40ODMgMjI4Ljk2M0MyODIuNDk3IDExMC44MSAyNzcuNzEzIC0yLjU0NzQ5IC0xLjk5OTk0IDAuOTcyNDZMLTEuMTExOTggNDkwLjI0WlwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjMzgzRDVCXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PiAqL31cbiAgICAgIDwvU2lkZUJhcldyYXBwZXI+XG4gICAgPC9hbmltYXRlZC5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.tsx\n");

/***/ })

})