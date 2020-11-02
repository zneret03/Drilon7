webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LandingPage.tsx":
/*!************************************!*\
  !*** ./components/LandingPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Social */ \"./components/Social.tsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./components/config.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.tsx\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/LandingPage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n //*\n\n\n\n\nvar DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"LandingPage__DivWrapper\",\n  componentId: \"keb21i-0\"\n})([\"height:100vh;width:100%;.Nav{position:fixed;top:0;left:0;cursor:pointer;background-color:var(--navy);box-shadow:-10px 0px 30px -15px var(--lightest-navy);padding:15px 30px;width:100%;z-index:10;.socialMedia{@media (max-width:768px){display:none;}}}.Menu{position:fixed;cursor:pointer;z-index:10;.socialMedia{@media (max-width:768px){display:none;}}}#curvedSvg{position:absolute;top:0;right:0;z-index:-1;@media (max-width:768px){display:none;}}section{padding:60px 100px;color:#dbcfcf;line-height:9;h3{font-family:var(--font-mono);margin:0px 0px 15px 4px;font-size:clamp(5px,5vw,20px);font-weight:normal;color:#fff;}h2{font-family:var(--font-sans);font-size:clamp(45px,5vw,80px);font-weight:600px;letter-spacing:2px;}h2:nth-child(2){color:var(--slate);}p{font-family:var(--font-sans);font-size:clamp(10px,5vw,20px);max-width:430px;line-height:27px;color:var(--slate);}@media (max-width:768px){padding:60px 35px;}@media (max-width:480px){padding:60px 10px;}}\"]);\n_c = DivWrapper;\n\nvar LandingPage = function LandingPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggle = _useState[0],\n      setToggle = _useState[1];\n\n  var redirectEmail = function redirectEmail(event) {\n    event.preventDefault();\n    window.location.href = \"mailto:iandrilon2@gmail.com\";\n  };\n\n  var _toggleSideBar = function toggleSideBar(event) {\n    event.preventDefault();\n\n    if (!toggle) {\n      setToggle(true);\n    } else {\n      setToggle(false);\n    }\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      sticky = _useState2[0],\n      setSticky = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var mountNavbar = function mountNavbar() {\n      var fixed = window.pageYOffset < 180;\n      var innerWidth = window.innerWidth < 763;\n\n      if (!fixed && innerWidth) {\n        setSticky(true);\n      } else {\n        setSticky(false);\n      }\n    };\n\n    window.addEventListener(\"scroll\", mountNavbar);\n    return function () {\n      return window.removeEventListener(\"scroll\", mountNavbar);\n    };\n  }, [sticky]);\n  console.log(sticky);\n  var animatedSidebar = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    transform: toggle ? \"translateX(0%)\" : \"translateX(-100%)\",\n    marginLeft: toggle ? \"0px\" : \"-400px\"\n  });\n  var animatedNavbar = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    // transform: sticky ? \"translateY(-0%)\" : \"translateY(-100%)\",\n    marginTop: toggle ? \"0px\" : \"-70px\"\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      animatedSidebar: animatedSidebar,\n      toogle: toggle,\n      toggleSideBar: function toggleSideBar(event) {\n        return _toggleSideBar(event);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DivWrapper, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            id: \"curvedSvg\",\n            width: \"579\",\n            height: \"575\",\n            viewBox: \"0 0 579 575\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z\",\n              fill: \"#292F4F\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 166,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 158,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 11\n        }, _this), !toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n          style: animatedNavbar,\n          className: \"\".concat(sticky ? \"Nav\" : \"Menu\"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: function onClick(event) {\n              return _toggleSideBar(event);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              width: \"30\",\n              height: \"29\",\n              viewBox: \"0 0 30 29\",\n              fill: \"none\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 187,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 191,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 195,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 180,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 179,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"socialMedia\",\n            children: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Social__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              socialMedia: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"],\n              toggle: toggle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 203,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 201,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 175,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Hi, my name is\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 210,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 209,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Ian A Drilon.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 213,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"I build things for web.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 214,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 212,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"I\\u2019m a student of Iloilo Science and Technology University, taking a Bachelor of Science in Computer Science.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 217,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 216,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              onClick: function onClick(event) {\n                return redirectEmail(event);\n              },\n              children: \"Get In Touch\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 223,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 222,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 208,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(LandingPage, \"P/kzgWyWrEIVM6EPLzF4xZqcvIY=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"], react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c2 = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DivWrapper\");\n$RefreshReg$(_c2, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3g/MGVkNSJdLCJuYW1lcyI6WyJEaXZXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGFuZGluZ1BhZ2UiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJlZGlyZWN0RW1haWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9nZ2xlU2lkZUJhciIsInN0aWNreSIsInNldFN0aWNreSIsInVzZUVmZmVjdCIsIm1vdW50TmF2YmFyIiwiZml4ZWQiLCJwYWdlWU9mZnNldCIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlZFNpZGViYXIiLCJ1c2VTcHJpbmciLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwiYW5pbWF0ZWROYXZiYXIiLCJtYXJnaW5Ub3AiLCJzb2NpYWxNZWRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG84QkFBaEI7S0FBTUYsVTs7QUF1Rk4sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEtBQUQsQ0FEWjtBQUFBLE1BQ2pCQyxNQURpQjtBQUFBLE1BQ1RDLFNBRFM7O0FBR3hCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDcEJDLEtBRG9CLEVBRWpCO0FBQ0hBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLDZCQUF2QjtBQUNELEdBTkQ7O0FBUUEsTUFBTUMsY0FBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUNwQkws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O0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBLGtCQURGO0FBb0ZELENBeElEOztHQUFNTCxXO1VBMENvQnVCLHNELEVBS0RBLHNEOzs7TUEvQ25CdkIsVztBQTBJU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbi8vKlxuaW1wb3J0IFNvY2lhbCBmcm9tIFwiLi9Tb2NpYWxcIjtcbmltcG9ydCB7IHNvY2lhbE1lZGlhIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9TaWRlYmFyXCI7XG5cbmNvbnN0IERpdldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcblxuICAuTmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDBweCAzMHB4IC0xNXB4IHZhcigtLWxpZ2h0ZXN0LW5hdnkpO1xuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDtcblxuICAgIC5zb2NpYWxNZWRpYSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuTWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcblxuICAgIC5zb2NpYWxNZWRpYSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjY3VydmVkU3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMTAwcHg7XG4gICAgY29sb3I6ICNkYmNmY2Y7XG4gICAgbGluZS1oZWlnaHQ6IDk7XG5cbiAgICBoMyB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAxNXB4IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoNXB4LCA1dncsIDIwcHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCg0NXB4LCA1dncsIDgwcHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB9XG5cbiAgICBoMjpudGgtY2hpbGQoMikge1xuICAgICAgY29sb3I6IHZhcigtLXNsYXRlKTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgxMHB4LCA1dncsIDIwcHgpO1xuICAgICAgbWF4LXdpZHRoOiA0MzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgY29sb3I6IHZhcigtLXNsYXRlKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMzVweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMTBweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJlZGlyZWN0RW1haWwgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwibWFpbHRvOmlhbmRyaWxvbjJAZ21haWwuY29tXCI7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2lkZUJhciA9IChcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD5cbiAgKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghdG9nZ2xlKSB7XG4gICAgICBzZXRUb2dnbGUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRvZ2dsZShmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFtzdGlja3ksIHNldFN0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb3VudE5hdmJhciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZpeGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IDwgMTgwO1xuICAgICAgY29uc3QgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzYzO1xuICAgICAgaWYgKCFmaXhlZCAmJiBpbm5lcldpZHRoKSB7XG4gICAgICAgIHNldFN0aWNreSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0aWNreShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG1vdW50TmF2YmFyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbW91bnROYXZiYXIpO1xuICB9LCBbc3RpY2t5XSk7XG5cbiAgY29uc29sZS5sb2coc3RpY2t5KTtcblxuICBjb25zdCBhbmltYXRlZFNpZGViYXIgPSB1c2VTcHJpbmcoe1xuICAgIHRyYW5zZm9ybTogdG9nZ2xlID8gXCJ0cmFuc2xhdGVYKDAlKVwiIDogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLFxuICAgIG1hcmdpbkxlZnQ6IHRvZ2dsZSA/IFwiMHB4XCIgOiBcIi00MDBweFwiLFxuICB9KTtcblxuICBjb25zdCBhbmltYXRlZE5hdmJhciA9IHVzZVNwcmluZyh7XG4gICAgLy8gdHJhbnNmb3JtOiBzdGlja3kgPyBcInRyYW5zbGF0ZVkoLTAlKVwiIDogXCJ0cmFuc2xhdGVZKC0xMDAlKVwiLFxuICAgIG1hcmdpblRvcDogdG9nZ2xlID8gXCIwcHhcIiA6IFwiLTcwcHhcIixcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNpZGViYXJcbiAgICAgICAgYW5pbWF0ZWRTaWRlYmFyPXthbmltYXRlZFNpZGViYXJ9XG4gICAgICAgIHRvb2dsZT17dG9nZ2xlfVxuICAgICAgICB0b2dnbGVTaWRlQmFyPXsoZXZlbnQpID0+IHRvZ2dsZVNpZGVCYXIoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxEaXZXcmFwcGVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGlkPVwiY3VydmVkU3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI1NzlcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI1NzVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3OSA1NzVcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTU3OSAwSDAuNjEzODMxQzE5LjE1MzUgNTcuMzA0MSA2MC4xMjM4IDEwMS41MDcgMTI5Ljk4NSAxMjAuMjA3QzI4My40ODYgMTYxLjI5NSAyODcuNTExIDI1OC4xNjUgMjkxLjQwOCAzNTEuOTMxQzI5Ni4xNzcgNDY2LjcgMzAwLjc1MiA1NzYuODIgNTc5IDU3NC4zMDlWMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMjkyRjRGXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHshdG9nZ2xlICYmIChcbiAgICAgICAgICAgIDxhbmltYXRlZC5kaXZcbiAgICAgICAgICAgICAgc3R5bGU9e2FuaW1hdGVkTmF2YmFyfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0aWNreSA/IFwiTmF2XCIgOiBcIk1lbnVcIn1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhldmVudCkgPT4gdG9nZ2xlU2lkZUJhcihldmVudCl9PlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjlcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAyOVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA3LjI0Mzk4QzIuNSA2LjU3OTQgMy4wNTc1IDYuMDQxNjkgMy43NDM3NSA2LjA0MTY5SDEzLjc1NjNDMTQuMDg2MSA2LjA0MTY5IDE0LjQwMjUgNi4xNjgzNiAxNC42MzU3IDYuMzkzODNDMTQuODY5IDYuNjE5MyAxNSA2LjkyNTExIDE1IDcuMjQzOThDMTUgNy41NjI4NSAxNC44NjkgNy44Njg2NSAxNC42MzU3IDguMDk0MTNDMTQuNDAyNSA4LjMxOTYgMTQuMDg2MSA4LjQ0NjI3IDEzLjc1NjMgOC40NDYyN0gzLjc0Mzc1QzMuNDEzODkgOC40NDYyNyAzLjA5NzUzIDguMzE5NiAyLjg2NDI5IDguMDk0MTNDMi42MzEwNCA3Ljg2ODY1IDIuNSA3LjU2Mjg1IDIuNSA3LjI0Mzk4WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSAxNC41QzIuNSAxMy44MzU0IDMuMDU3NSAxMy4yOTc3IDMuNzQzNzUgMTMuMjk3N0gyNi4yNTYzQzI2LjU4NjEgMTMuMjk3NyAyNi45MDI1IDEzLjQyNDQgMjcuMTM1NyAxMy42NDk5QzI3LjM2OSAxMy44NzUzIDI3LjUgMTQuMTgxMiAyNy41IDE0LjVDMjcuNSAxNC44MTg5IDI3LjM2OSAxNS4xMjQ3IDI3LjEzNTcgMTUuMzUwMkMyNi45MDI1IDE1LjU3NTYgMjYuNTg2MSAxNS43MDIzIDI2LjI1NjMgMTUuNzAyM0gzLjc0Mzc1QzMuNDEzODkgMTUuNzAyMyAzLjA5NzUzIDE1LjU3NTYgMi44NjQyOSAxNS4zNTAyQzIuNjMxMDQgMTUuMTI0NyAyLjUgMTQuODE4OSAyLjUgMTQuNVpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkFGQVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0zLjc0Mzc1IDIwLjU1MzhDMy40MTM4OSAyMC41NTM4IDMuMDk3NTMgMjAuNjgwNCAyLjg2NDI5IDIwLjkwNTlDMi42MzEwNCAyMS4xMzE0IDIuNSAyMS40MzcyIDIuNSAyMS43NTYxQzIuNSAyMi4wNzQ5IDIuNjMxMDQgMjIuMzgwNyAyLjg2NDI5IDIyLjYwNjJDMy4wOTc1MyAyMi44MzE3IDMuNDEzODkgMjIuOTU4NCAzLjc0Mzc1IDIyLjk1ODRIMTguNzU2M0MxOS4wODYxIDIyLjk1ODQgMTkuNDAyNSAyMi44MzE3IDE5LjYzNTcgMjIuNjA2MkMxOS44NjkgMjIuMzgwNyAyMCAyMi4wNzQ5IDIwIDIxLjc1NjFDMjAgMjEuNDM3MiAxOS44NjkgMjEuMTMxNCAxOS42MzU3IDIwLjkwNTlDMTkuNDAyNSAyMC42ODA0IDE5LjA4NjEgMjAuNTUzOCAxOC43NTYzIDIwLjU1MzhIMy43NDM3NVpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkFGQVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxNZWRpYVwiPlxuICAgICAgICAgICAgICAgIHtzb2NpYWxNZWRpYSAmJiAoXG4gICAgICAgICAgICAgICAgICA8U29jaWFsIHNvY2lhbE1lZGlhPXtzb2NpYWxNZWRpYX0gdG9nZ2xlPXt0b2dnbGV9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FuaW1hdGVkLmRpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPkhpLCBteSBuYW1lIGlzPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyPklhbiBBIERyaWxvbi48L2gyPlxuICAgICAgICAgICAgICA8aDI+SSBidWlsZCB0aGluZ3MgZm9yIHdlYi48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBJ4oCZbSBhIHN0dWRlbnQgb2YgSWxvaWxvIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgVW5pdmVyc2l0eSxcbiAgICAgICAgICAgICAgICB0YWtpbmcgYSBCYWNoZWxvciBvZiBTY2llbmNlIGluIENvbXB1dGVyIFNjaWVuY2UuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGV2ZW50KSA9PiByZWRpcmVjdEVtYWlsKGV2ZW50KX0+XG4gICAgICAgICAgICAgICAgR2V0IEluIFRvdWNoXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L0RpdldyYXBwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LandingPage.tsx\n");

/***/ })

})