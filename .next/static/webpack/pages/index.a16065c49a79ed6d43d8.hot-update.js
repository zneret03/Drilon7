webpackHotUpdate_N_E("pages/index",{

/***/ "./css/GlobalStyles.tsx":
/*!******************************!*\
  !*** ./css/GlobalStyles.tsx ***!
  \******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    body {\\n        padding : 0;\\n        margin : 0;\\n        background: #0A192F;\\n\\n      &.blur {\\n      .container  {\\n          filter: blur(5px) brightness(0.7);\\n\\n        }\\n    }\\n\\n    }\\n\\n    button {\\n        padding: 15px 30px;\\n        border : solid 1px;\\n        border-radius : 3px;\\n        border-color : #FAF3F3;\\n        color : #FAF3F3;\\n        font-size : 15px;\\n        font-weight : lighter;\\n        font-family : var(--font-mono);\\n        background-color : #0A192F;\\n        cursor: pointer;\\n\\n        &:hover{\\n          background : #053041;\\n        }\\n    }\\n\\n    :root {\\n    --dark-navy: #020c1b;\\n    --navy: #0a192f;\\n    --light-navy: #172a45;\\n    --lightest-navy: #303C55;\\n    --navy-shadow: rgba(2, 12, 27, 0.7);\\n    --slate: #8690B0;\\n    --light-slate: #a8b2d1;\\n    --lightest-slate: #ccd6f6;\\n    --white: #e6f1ff;\\n    --green: #64ffda;\\n    --green-tint: rgba(100, 255, 218, 0.1);\\n\\n    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;\\n    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;\\n    \\n    --fz-xxs: 12px;\\n    --fz-xs: 13px;\\n    --fz-sm: 14px;\\n    --fz-md: 16px;\\n    --fz-lg: 18px;\\n    --fz-xl: 20px;\\n    --fz-xxl: 22px;\\n    --fz-heading: 32px;\\n\\n    --border-radius: 4px;\\n    --nav-height: 100px;\\n    --nav-scroll-height: 70px;\\n\\n    --tab-height: 42px;\\n    --tab-width: 120px;\\n\\n    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);\\n    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\\n\\n    --hamburger-width: 30px;\\n\\n    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;\\n    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;\\n    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\\n    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\\n  }\\n\\n  .container {\\n    padding: 45px 60px;\\n\\n    @media (max-width: 768px) {\\n      padding: 35px 30px;\\n    }\\n\\n    @media (max-width: 480px) {\\n      padding: 35px 27px;\\n    }\\n  }\\n\\n\\n  h1,\\n  h2,\\n  h3,\\n  h4,\\n  h5,\\n  h6 {\\n    margin: 0 0 10px 0;\\n    font-weight: 600;\\n    color: var(--lightest-slate);\\n    line-height: 1.1;\\n  }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3NzL0dsb2JhbFN0eWxlcy50c3g/NjE0NyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDJFQUFILG1CQUFqQjtBQXNHQSIsImZpbGUiOiIuL2Nzcy9HbG9iYWxTdHlsZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICBib2R5IHtcbiAgICAgICAgcGFkZGluZyA6IDA7XG4gICAgICAgIG1hcmdpbiA6IDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICMwQTE5MkY7XG5cbiAgICAgICYuYmx1ciB7XG4gICAgICAuY29udGFpbmVyICB7XG4gICAgICAgICAgZmlsdGVyOiBibHVyKDVweCkgYnJpZ2h0bmVzcygwLjcpO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG4gICAgICAgIGJvcmRlciA6IHNvbGlkIDFweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDNweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yIDogI0ZBRjNGMztcbiAgICAgICAgY29sb3IgOiAjRkFGM0YzO1xuICAgICAgICBmb250LXNpemUgOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodCA6IGxpZ2h0ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5IDogdmFyKC0tZm9udC1tb25vKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6ICMwQTE5MkY7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgIGJhY2tncm91bmQgOiAjMDUzMDQxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgOnJvb3Qge1xuICAgIC0tZGFyay1uYXZ5OiAjMDIwYzFiO1xuICAgIC0tbmF2eTogIzBhMTkyZjtcbiAgICAtLWxpZ2h0LW5hdnk6ICMxNzJhNDU7XG4gICAgLS1saWdodGVzdC1uYXZ5OiAjMzAzQzU1O1xuICAgIC0tbmF2eS1zaGFkb3c6IHJnYmEoMiwgMTIsIDI3LCAwLjcpO1xuICAgIC0tc2xhdGU6ICM4NjkwQjA7XG4gICAgLS1saWdodC1zbGF0ZTogI2E4YjJkMTtcbiAgICAtLWxpZ2h0ZXN0LXNsYXRlOiAjY2NkNmY2O1xuICAgIC0td2hpdGU6ICNlNmYxZmY7XG4gICAgLS1ncmVlbjogIzY0ZmZkYTtcbiAgICAtLWdyZWVuLXRpbnQ6IHJnYmEoMTAwLCAyNTUsIDIxOCwgMC4xKTtcblxuICAgIC0tZm9udC1zYW5zOiAnQ2FsaWJyZScsICdTYW4gRnJhbmNpc2NvJywgJ1NGIFBybyBUZXh0JywgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICAgIC0tZm9udC1tb25vOiAnU0YgTW9ubycsICdGaXJhIENvZGUnLCAnRmlyYSBNb25vJywgJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICAgIFxuICAgIC0tZnoteHhzOiAxMnB4O1xuICAgIC0tZnoteHM6IDEzcHg7XG4gICAgLS1mei1zbTogMTRweDtcbiAgICAtLWZ6LW1kOiAxNnB4O1xuICAgIC0tZnotbGc6IDE4cHg7XG4gICAgLS1mei14bDogMjBweDtcbiAgICAtLWZ6LXh4bDogMjJweDtcbiAgICAtLWZ6LWhlYWRpbmc6IDMycHg7XG5cbiAgICAtLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtLW5hdi1oZWlnaHQ6IDEwMHB4O1xuICAgIC0tbmF2LXNjcm9sbC1oZWlnaHQ6IDcwcHg7XG5cbiAgICAtLXRhYi1oZWlnaHQ6IDQycHg7XG4gICAgLS10YWItd2lkdGg6IDEyMHB4O1xuXG4gICAgLS1lYXNpbmc6IGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKTtcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjI1cyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG5cbiAgICAtLWhhbWJ1cmdlci13aWR0aDogMzBweDtcblxuICAgIC0taGFtLWJlZm9yZTogdG9wIDAuMXMgZWFzZS1pbiAwLjI1cywgb3BhY2l0eSAwLjFzIGVhc2UtaW47XG4gICAgLS1oYW0tYmVmb3JlLWFjdGl2ZTogdG9wIDAuMXMgZWFzZS1vdXQsIG9wYWNpdHkgMC4xcyBlYXNlLW91dCAwLjEycztcbiAgICAtLWhhbS1hZnRlcjogYm90dG9tIDAuMXMgZWFzZS1pbiAwLjI1cywgdHJhbnNmb3JtIDAuMjJzIGN1YmljLWJlemllcigwLjU1LCAwLjA1NSwgMC42NzUsIDAuMTkpO1xuICAgIC0taGFtLWFmdGVyLWFjdGl2ZTogYm90dG9tIDAuMXMgZWFzZS1vdXQsIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKSAwLjEycztcbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDQ1cHggNjBweDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgcGFkZGluZzogMzVweCAzMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgcGFkZGluZzogMzVweCAyN3B4O1xuICAgIH1cbiAgfVxuXG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNsYXRlKTtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG5cbmA7XG5cbmV4cG9ydCB7IEdsb2JhbFN0eWxlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./css/GlobalStyles.tsx\n");

/***/ })

})