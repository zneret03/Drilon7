webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LandingPage.tsx":
/*!************************************!*\
  !*** ./components/LandingPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Social */ \"./components/Social.tsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./components/config.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.tsx\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/LandingPage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n//*\n\n\n\nvar DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"LandingPage__DivWrapper\",\n  componentId: \"keb21i-0\"\n})([\"height:100vh;width:100%;#Menu{position:fixed;z-index:2;cursor:pointer;.socialMedia{@media (max-width:768px){display:none;}}}#curvedSvg{position:absolute;top:0;right:0;@media (max-width:768px){display:none;}}section{padding:60px 100px;color:#dbcfcf;line-height:9;h3{font-family:var(--font-mono);margin:0px 0px 15px 4px;font-size:clamp(5px,5vw,20px);font-weight:normal;color:#fff;}h2{font-family:var(--font-sans);font-size:clamp(35px,5vw,80px);font-weight:600px;letter-spacing:2px;}h2:nth-child(2){color:var(--slate);}p{font-family:var(--font-sans);font-size:clamp(10px,5vw,20px);max-width:430px;line-height:27px;color:var(--slate);}@media (max-width:768px){padding:60px 35px;}@media (max-width:480px){padding:60px 35px;}}\"]);\n_c = DivWrapper;\n\nvar LandingPage = function LandingPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggle = _useState[0],\n      setToggle = _useState[1];\n\n  var redirectEmail = function redirectEmail(event) {\n    event.preventDefault();\n    window.location.href = \"mailto:iandrilon2@gmail.com\";\n  };\n\n  var _toggleSideBar = function toggleSideBar(event) {\n    event.preventDefault();\n\n    if (!toggle) {\n      setToggle(true);\n    } else {\n      setToggle(false);\n    }\n  };\n\n  var animatedSidebar = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    transform: toggle ? \"translateX(0%)\" : \"translateX(-100%)\",\n    opacity: toggle ? 1 : 0\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      animatedSidebar: animatedSidebar,\n      toggleSideBar: function toggleSideBar(event) {\n        return _toggleSideBar(event);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DivWrapper, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            id: \"curvedSvg\",\n            width: \"579\",\n            height: \"575\",\n            viewBox: \"0 0 579 575\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z\",\n              fill: \"#292F4F\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this), !toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: \"Menu\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: function onClick(event) {\n              return _toggleSideBar(event);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              width: \"30\",\n              height: \"29\",\n              viewBox: \"0 0 30 29\",\n              fill: \"none\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 141,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 145,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 149,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"socialMedia\",\n            children: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Social__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              socialMedia: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"],\n              toggle: toggle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 157,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Hi, my name is\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 164,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 163,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Ian A. Drilon.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"I build things for web.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 168,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 166,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"I\\u2019m a student of Iloilo Science and Technology University, taking a Bachelor of Science in Computer Science.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 171,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 170,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              onClick: function onClick(event) {\n                return redirectEmail(event);\n              },\n              children: \"Get In Touch\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 177,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 176,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(LandingPage, \"Xv1HnMOfur0YFwP/B47l3SMo+0M=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c2 = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DivWrapper\");\n$RefreshReg$(_c2, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3g/MGVkNSJdLCJuYW1lcyI6WyJEaXZXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGFuZGluZ1BhZ2UiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJlZGlyZWN0RW1haWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9nZ2xlU2lkZUJhciIsImFuaW1hdGVkU2lkZWJhciIsInVzZVNwcmluZyIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJzb2NpYWxNZWRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3dEJBQWhCO0tBQU1GLFU7O0FBb0VOLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxLQUFELENBRFo7QUFBQSxNQUNqQkMsTUFEaUI7QUFBQSxNQUNUQyxTQURTOztBQUd4QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQ3BCQyxLQURvQixFQUVqQjtBQUNIQSxTQUFLLENBQUNDLGNBQU47QUFFQUMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1Qiw2QkFBdkI7QUFDRCxHQU5EOztBQVFBLE1BQU1DLGNBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDcEJMLEtBRG9CLEVBRWpCO0FBQ0hBLFNBQUssQ0FBQ0MsY0FBTjs7QUFFQSxRQUFJLENBQUNKLE1BQUwsRUFBYTtBQUNYQyxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsTUFBTVEsZUFBZSxHQUFHQyw4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QUE7QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBLGtCQURGO0FBZ0ZELENBNUdEOztHQUFNTCxXO1VBdUJvQlksc0Q7OztNQXZCcEJaLFc7QUE4R1NBLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNwcmluZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBIZWxtZXQgfSBmcm9tIFwicmVhY3QtaGVsbWV0XCI7XG4vLypcbmltcG9ydCBTb2NpYWwgZnJvbSBcIi4vU29jaWFsXCI7XG5pbXBvcnQgeyBzb2NpYWxNZWRpYSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4vU2lkZWJhclwiO1xuXG5jb25zdCBEaXZXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgI01lbnUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5zb2NpYWxNZWRpYSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjY3VydmVkU3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMTAwcHg7XG4gICAgY29sb3I6ICNkYmNmY2Y7XG4gICAgbGluZS1oZWlnaHQ6IDk7XG5cbiAgICBoMyB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAxNXB4IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoNXB4LCA1dncsIDIwcHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgzNXB4LCA1dncsIDgwcHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB9XG5cbiAgICBoMjpudGgtY2hpbGQoMikge1xuICAgICAgY29sb3I6IHZhcigtLXNsYXRlKTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgxMHB4LCA1dncsIDIwcHgpO1xuICAgICAgbWF4LXdpZHRoOiA0MzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgY29sb3I6IHZhcigtLXNsYXRlKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMzVweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMzVweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJlZGlyZWN0RW1haWwgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwibWFpbHRvOmlhbmRyaWxvbjJAZ21haWwuY29tXCI7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2lkZUJhciA9IChcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD5cbiAgKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghdG9nZ2xlKSB7XG4gICAgICBzZXRUb2dnbGUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRvZ2dsZShmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFuaW1hdGVkU2lkZWJhciA9IHVzZVNwcmluZyh7XG4gICAgdHJhbnNmb3JtOiB0b2dnbGUgPyBcInRyYW5zbGF0ZVgoMCUpXCIgOiBcInRyYW5zbGF0ZVgoLTEwMCUpXCIsXG4gICAgb3BhY2l0eTogdG9nZ2xlID8gMSA6IDAsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTaWRlYmFyXG4gICAgICAgIGFuaW1hdGVkU2lkZWJhcj17YW5pbWF0ZWRTaWRlYmFyfVxuICAgICAgICB0b2dnbGVTaWRlQmFyPXsoZXZlbnQpID0+IHRvZ2dsZVNpZGVCYXIoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxEaXZXcmFwcGVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGlkPVwiY3VydmVkU3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI1NzlcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI1NzVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3OSA1NzVcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTU3OSAwSDAuNjEzODMxQzE5LjE1MzUgNTcuMzA0MSA2MC4xMjM4IDEwMS41MDcgMTI5Ljk4NSAxMjAuMjA3QzI4My40ODYgMTYxLjI5NSAyODcuNTExIDI1OC4xNjUgMjkxLjQwOCAzNTEuOTMxQzI5Ni4xNzcgNDY2LjcgMzAwLjc1MiA1NzYuODIgNTc5IDU3NC4zMDlWMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMjkyRjRGXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHshdG9nZ2xlICYmIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJNZW51XCI+XG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGV2ZW50KSA9PiB0b2dnbGVTaWRlQmFyKGV2ZW50KX0+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyOVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwIDI5XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDcuMjQzOThDMi41IDYuNTc5NCAzLjA1NzUgNi4wNDE2OSAzLjc0Mzc1IDYuMDQxNjlIMTMuNzU2M0MxNC4wODYxIDYuMDQxNjkgMTQuNDAyNSA2LjE2ODM2IDE0LjYzNTcgNi4zOTM4M0MxNC44NjkgNi42MTkzIDE1IDYuOTI1MTEgMTUgNy4yNDM5OEMxNSA3LjU2Mjg1IDE0Ljg2OSA3Ljg2ODY1IDE0LjYzNTcgOC4wOTQxM0MxNC40MDI1IDguMzE5NiAxNC4wODYxIDguNDQ2MjcgMTMuNzU2MyA4LjQ0NjI3SDMuNzQzNzVDMy40MTM4OSA4LjQ0NjI3IDMuMDk3NTMgOC4zMTk2IDIuODY0MjkgOC4wOTQxM0MyLjYzMTA0IDcuODY4NjUgMi41IDcuNTYyODUgMi41IDcuMjQzOThaXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDE0LjVDMi41IDEzLjgzNTQgMy4wNTc1IDEzLjI5NzcgMy43NDM3NSAxMy4yOTc3SDI2LjI1NjNDMjYuNTg2MSAxMy4yOTc3IDI2LjkwMjUgMTMuNDI0NCAyNy4xMzU3IDEzLjY0OTlDMjcuMzY5IDEzLjg3NTMgMjcuNSAxNC4xODEyIDI3LjUgMTQuNUMyNy41IDE0LjgxODkgMjcuMzY5IDE1LjEyNDcgMjcuMTM1NyAxNS4zNTAyQzI2LjkwMjUgMTUuNTc1NiAyNi41ODYxIDE1LjcwMjMgMjYuMjU2MyAxNS43MDIzSDMuNzQzNzVDMy40MTM4OSAxNS43MDIzIDMuMDk3NTMgMTUuNTc1NiAyLjg2NDI5IDE1LjM1MDJDMi42MzEwNCAxNS4xMjQ3IDIuNSAxNC44MTg5IDIuNSAxNC41WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTMuNzQzNzUgMjAuNTUzOEMzLjQxMzg5IDIwLjU1MzggMy4wOTc1MyAyMC42ODA0IDIuODY0MjkgMjAuOTA1OUMyLjYzMTA0IDIxLjEzMTQgMi41IDIxLjQzNzIgMi41IDIxLjc1NjFDMi41IDIyLjA3NDkgMi42MzEwNCAyMi4zODA3IDIuODY0MjkgMjIuNjA2MkMzLjA5NzUzIDIyLjgzMTcgMy40MTM4OSAyMi45NTg0IDMuNzQzNzUgMjIuOTU4NEgxOC43NTYzQzE5LjA4NjEgMjIuOTU4NCAxOS40MDI1IDIyLjgzMTcgMTkuNjM1NyAyMi42MDYyQzE5Ljg2OSAyMi4zODA3IDIwIDIyLjA3NDkgMjAgMjEuNzU2MUMyMCAyMS40MzcyIDE5Ljg2OSAyMS4xMzE0IDE5LjYzNTcgMjAuOTA1OUMxOS40MDI1IDIwLjY4MDQgMTkuMDg2MSAyMC41NTM4IDE4Ljc1NjMgMjAuNTUzOEgzLjc0Mzc1WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbE1lZGlhXCI+XG4gICAgICAgICAgICAgICAge3NvY2lhbE1lZGlhICYmIChcbiAgICAgICAgICAgICAgICAgIDxTb2NpYWwgc29jaWFsTWVkaWE9e3NvY2lhbE1lZGlhfSB0b2dnbGU9e3RvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+SGksIG15IG5hbWUgaXM8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+SWFuIEEuIERyaWxvbi48L2gyPlxuICAgICAgICAgICAgICA8aDI+SSBidWlsZCB0aGluZ3MgZm9yIHdlYi48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBJ4oCZbSBhIHN0dWRlbnQgb2YgSWxvaWxvIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgVW5pdmVyc2l0eSxcbiAgICAgICAgICAgICAgICB0YWtpbmcgYSBCYWNoZWxvciBvZiBTY2llbmNlIGluIENvbXB1dGVyIFNjaWVuY2UuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGV2ZW50KSA9PiByZWRpcmVjdEVtYWlsKGV2ZW50KX0+XG4gICAgICAgICAgICAgICAgR2V0IEluIFRvdWNoXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L0RpdldyYXBwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LandingPage.tsx\n");

/***/ }),

/***/ "./node_modules/react-fast-compare/index.js":
false,

/***/ "./node_modules/react-helmet/es/Helmet.js":
false,

/***/ "./node_modules/react-side-effect/lib/index.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false

})