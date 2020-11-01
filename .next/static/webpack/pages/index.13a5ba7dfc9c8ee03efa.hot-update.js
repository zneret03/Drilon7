webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Social.tsx":
/*!*******************************!*\
  !*** ./components/Social.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _icons_Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/Icons */ \"./components/icons/Icons.tsx\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/Social.tsx\",\n    _this = undefined;\n\n\n\n\nvar StyledSocialList = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ul.withConfig({\n  displayName: \"Social__StyledSocialList\",\n  componentId: \"sc-1eika1x-0\"\n})([\"display:flex;flex-direction:column;align-items:center;margin:0;padding:0;z-index:1;list-style:none;position:fixed;&:before{content:\\\"\\\";display:block;width:1px;height:150px;margin:20px 0px;background-color:var(--light-slate);}li{padding:30px 0px 0px;&:hover,&:focus{transform:translateY(-3px);}svg{&:hover,&focuse{fill:#fff;}fill:#8690b0;}}\"]);\n_c = StyledSocialList;\n\nvar Social = function Social(_ref) {\n  var socialMedia = _ref.socialMedia,\n      toggle = _ref.toggle;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: !toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(StyledSocialList, {\n      children: socialMedia.map(function (icon, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: icon.url,\n            \"aria-label\": icon.name,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_icons_Icons__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              name: icon.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 15\n          }, _this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false);\n};\n\n_c2 = Social;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Social);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledSocialList\");\n$RefreshReg$(_c2, \"Social\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Tb2NpYWwudHN4PzQyY2MiXSwibmFtZXMiOlsiU3R5bGVkU29jaWFsTGlzdCIsInN0eWxlZCIsInVsIiwiU29jaWFsIiwic29jaWFsTWVkaWEiLCJ0b2dnbGUiLCJtYXAiLCJpY29uIiwiaW5kZXgiLCJ1cmwiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsZ0JBQWdCLEdBQUdDLHlEQUFNLENBQUNDLEVBQVY7QUFBQTtBQUFBO0FBQUEsNFZBQXRCO0tBQU1GLGdCOztBQTJDTixJQUFNRyxNQUEyQixHQUFHLFNBQTlCQSxNQUE4QixPQUE2QjtBQUFBLE1BQTFCQyxXQUEwQixRQUExQkEsV0FBMEI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDL0Qsc0JBQ0U7QUFBQSxjQUNHLENBQUNBLE1BQUQsaUJBQ0MscUVBQUMsZ0JBQUQ7QUFBQSxnQkFDR0QsV0FBVyxDQUFDRSxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBWUMsS0FBWjtBQUFBLDRCQUNmO0FBQUEsaUNBQ0U7QUFBRyxnQkFBSSxFQUFFRCxJQUFJLENBQUNFLEdBQWQ7QUFBbUIsMEJBQVlGLElBQUksQ0FBQ0csSUFBcEM7QUFBQSxtQ0FDRSxxRUFBQyxvREFBRDtBQUFPLGtCQUFJLEVBQUVILElBQUksQ0FBQ0c7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFTRixLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGU7QUFBQSxPQUFoQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSixtQkFERjtBQWVELENBaEJEOztNQUFNTCxNO0FBa0JTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU29jaWFsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgSWNvbnMgZnJvbSBcIi4vaWNvbnMvSWNvbnNcIjtcblxuY29uc3QgU3R5bGVkU29jaWFsTGlzdCA9IHN0eWxlZC51bGBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB6LWluZGV4OiAxO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2xhdGUpO1xuICB9XG5cbiAgbGkge1xuICAgIHBhZGRpbmc6IDMwcHggMHB4IDBweDtcblxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmZm9jdXNlIHtcbiAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgZmlsbDogIzg2OTBiMDtcbiAgICB9XG4gIH1cbmA7XG5cbmludGVyZmFjZSBQcm9wVHlwZXMge1xuICBzb2NpYWxNZWRpYTogT2JqZWN0W107XG4gIHRvZ2dsZTogYm9vbGVhbjtcbn1cblxuY29uc3QgU29jaWFsOiBSZWFjdC5GQzxQcm9wVHlwZXM+ID0gKHsgc29jaWFsTWVkaWEsIHRvZ2dsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHshdG9nZ2xlICYmIChcbiAgICAgICAgPFN0eWxlZFNvY2lhbExpc3Q+XG4gICAgICAgICAge3NvY2lhbE1lZGlhLm1hcCgoaWNvbjogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2ljb24udXJsfSBhcmlhLWxhYmVsPXtpY29uLm5hbWV9PlxuICAgICAgICAgICAgICAgIDxJY29ucyBuYW1lPXtpY29uLm5hbWV9IC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU3R5bGVkU29jaWFsTGlzdD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Social.tsx\n");

/***/ })

})