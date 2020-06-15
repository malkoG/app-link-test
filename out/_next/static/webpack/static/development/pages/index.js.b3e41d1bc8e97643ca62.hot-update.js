webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nico/workspace/app-link-test/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('kodingwarrior'),\n      scheme = _useState[0],\n      setScheme = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('kodingwarrior.dev'),\n      host = _useState2[0],\n      setHost = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('detail'),\n      pathPrefix = _useState3[0],\n      setPathPrefix = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('1'),\n      parameter = _useState4[0],\n      setParameter = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])('app'),\n      projectName = _useState5[0],\n      setProjectName = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      marketLink = _useState6[0],\n      setMarketLink = _useState6[1];\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      appLink = _useState7[0],\n      setAppLink = _useState7[1];\n\n  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      customLink = _useState8[0],\n      setCustomLink = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      intentLink = _useState9[0],\n      setIntentLink = _useState9[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var _host$split = host.split('.'),\n        _host$split2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_host$split, 2),\n        domain1 = _host$split2[0],\n        domain2 = _host$split2[1];\n\n    var resultCustomLink = \"link://\".concat(host, \"/\").concat(pathPrefix, \"?id=\").concat(parameter);\n    var marketRewrittenUrl = encodeURI(resultCustomLink);\n    var resultMarketLink = \"market://details?id=\".concat(domain2, \".\").concat(domain1, \".\").concat(projectName, \"&link=\").concat(marketRewrittenUrl);\n    var resultIntentLink = \"intent://\".concat(host, \"/\").concat(pathPrefix, \"?id=\").concat(parameter);\n    setMarketLink(resultMarketLink);\n    setCustomLink(resultCustomLink);\n    setAppLink(\"https://\".concat(host, \"/\").concat(pathPrefix, \"?id=\").concat(parameter));\n  }, [scheme, host, pathPrefix, parameter, projectName]);\n  return __jsx(\"div\", {\n    className: \"jsx-3116958954\" + \" \" + \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Android App Link Test\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    placeholder: \"scheme\",\n    value: scheme,\n    onChange: function onChange(e) {\n      return setScheme(e.target.value);\n    },\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    placeholder: \"host\",\n    value: host,\n    onChange: function onChange(e) {\n      return setHost(e.target.value);\n    },\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    placeholder: \"host\",\n    value: pathPrefix,\n    onChange: function onChange(e) {\n      return setPathPrefix(e.target.value);\n    },\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    placeholder: \"parameter\",\n    value: parameter,\n    onChange: function onChange(e) {\n      return setParameter(e.target.value);\n    },\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    placeholder: \"project name\",\n    value: projectName,\n    onChange: function onChange(e) {\n      return setProjectName(e.target.value);\n    },\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }), __jsx(\"table\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(\"thead\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, __jsx(\"tr\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, __jsx(\"th\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 15\n    }\n  }, \"type of link\"), __jsx(\"th\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, \"link url\"))), __jsx(\"tbody\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(\"tr\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, \"Market Link\"), __jsx(\"td\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: marketLink,\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, marketLink))), __jsx(\"tr\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  }, \"App Link\"), __jsx(\"td\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: appLink,\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 17\n    }\n  }, appLink))), __jsx(\"tr\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(\"td\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 15\n    }\n  }, \"Custom Link\"), __jsx(\"td\", {\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: customLink,\n    className: \"jsx-3116958954\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 17\n    }\n  }, customLink)))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"4158932565\",\n    __self: this\n  }, \"\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNvL3dvcmtzcGFjZS9hcHAtbGluay10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGa0IiLCJmaWxlIjoiL1VzZXJzL25pY28vd29ya3NwYWNlL2FwcC1saW5rLXRlc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NjaGVtZSwgc2V0U2NoZW1lXSA9IHVzZVN0YXRlKCdrb2Rpbmd3YXJyaW9yJylcbiAgY29uc3QgW2hvc3QsIHNldEhvc3RdID0gdXNlU3RhdGUoJ2tvZGluZ3dhcnJpb3IuZGV2JylcbiAgY29uc3QgW3BhdGhQcmVmaXgsIHNldFBhdGhQcmVmaXhdID0gdXNlU3RhdGUoJ2RldGFpbCcpXG4gIGNvbnN0IFtwYXJhbWV0ZXIsIHNldFBhcmFtZXRlcl0gPSB1c2VTdGF0ZSgnMScpXG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoJ2FwcCcpXG5cbiAgY29uc3QgW21hcmtldExpbmssIHNldE1hcmtldExpbmtdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthcHBMaW5rLCBzZXRBcHBMaW5rXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY3VzdG9tTGluaywgc2V0Q3VzdG9tTGlua10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ludGVudExpbmssIHNldEludGVudExpbmtdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBbZG9tYWluMSwgZG9tYWluMl0gPSBob3N0LnNwbGl0KCcuJylcbiAgICBjb25zdCByZXN1bHRDdXN0b21MaW5rID0gYGxpbms6Ly8ke2hvc3R9LyR7cGF0aFByZWZpeH0/aWQ9JHtwYXJhbWV0ZXJ9YFxuICAgIGNvbnN0IG1hcmtldFJld3JpdHRlblVybCA9IGVuY29kZVVSSShyZXN1bHRDdXN0b21MaW5rKVxuICAgIGNvbnN0IHJlc3VsdE1hcmtldExpbmsgPSBgbWFya2V0Oi8vZGV0YWlscz9pZD0ke2RvbWFpbjJ9LiR7ZG9tYWluMX0uJHtwcm9qZWN0TmFtZX0mbGluaz0ke21hcmtldFJld3JpdHRlblVybH1gXG4gICAgY29uc3QgcmVzdWx0SW50ZW50TGluayA9IGBpbnRlbnQ6Ly8ke2hvc3R9LyR7cGF0aFByZWZpeH0/aWQ9JHtwYXJhbWV0ZXJ9YFxuXG4gICAgc2V0TWFya2V0TGluayhyZXN1bHRNYXJrZXRMaW5rKVxuICAgIHNldEN1c3RvbUxpbmsocmVzdWx0Q3VzdG9tTGluaylcbiAgICBzZXRBcHBMaW5rKGBodHRwczovLyR7aG9zdH0vJHtwYXRoUHJlZml4fT9pZD0ke3BhcmFtZXRlcn1gKVxuICB9LCBbc2NoZW1lLCBob3N0LCBwYXRoUHJlZml4LCBwYXJhbWV0ZXIsIHByb2plY3ROYW1lXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFuZHJvaWQgQXBwIExpbmsgVGVzdDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInNjaGVtZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT17c2NoZW1lfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2NoZW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiaG9zdFwiXG4gICAgICAgICAgICAgICB2YWx1ZT17aG9zdH1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhvc3QoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJob3N0XCJcbiAgICAgICAgICAgICAgIHZhbHVlPXtwYXRoUHJlZml4fVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGF0aFByZWZpeChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICB2YWx1ZT17cGFyYW1ldGVyfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFyYW1ldGVyKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwicHJvamVjdCBuYW1lXCJcbiAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFByb2plY3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+dHlwZSBvZiBsaW5rPC90aD5cbiAgICAgICAgICAgICAgPHRoPmxpbmsgdXJsPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5NYXJrZXQgTGluazwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXttYXJrZXRMaW5rfT57bWFya2V0TGlua308L2E+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+QXBwIExpbms8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YXBwTGlua30+e2FwcExpbmt9PC9hPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPkN1c3RvbSBMaW5rPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2N1c3RvbUxpbmt9PntjdXN0b21MaW5rfTwvYT5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/nico/workspace/app-link-test/pages/index.js */\"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    id: \"3106214966\",\n    __self: this\n  }, \"\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWNvL3dvcmtzcGFjZS9hcHAtbGluay10ZXN0L3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGeUIiLCJmaWxlIjoiL1VzZXJzL25pY28vd29ya3NwYWNlL2FwcC1saW5rLXRlc3QvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NjaGVtZSwgc2V0U2NoZW1lXSA9IHVzZVN0YXRlKCdrb2Rpbmd3YXJyaW9yJylcbiAgY29uc3QgW2hvc3QsIHNldEhvc3RdID0gdXNlU3RhdGUoJ2tvZGluZ3dhcnJpb3IuZGV2JylcbiAgY29uc3QgW3BhdGhQcmVmaXgsIHNldFBhdGhQcmVmaXhdID0gdXNlU3RhdGUoJ2RldGFpbCcpXG4gIGNvbnN0IFtwYXJhbWV0ZXIsIHNldFBhcmFtZXRlcl0gPSB1c2VTdGF0ZSgnMScpXG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoJ2FwcCcpXG5cbiAgY29uc3QgW21hcmtldExpbmssIHNldE1hcmtldExpbmtdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthcHBMaW5rLCBzZXRBcHBMaW5rXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY3VzdG9tTGluaywgc2V0Q3VzdG9tTGlua10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ludGVudExpbmssIHNldEludGVudExpbmtdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBbZG9tYWluMSwgZG9tYWluMl0gPSBob3N0LnNwbGl0KCcuJylcbiAgICBjb25zdCByZXN1bHRDdXN0b21MaW5rID0gYGxpbms6Ly8ke2hvc3R9LyR7cGF0aFByZWZpeH0/aWQ9JHtwYXJhbWV0ZXJ9YFxuICAgIGNvbnN0IG1hcmtldFJld3JpdHRlblVybCA9IGVuY29kZVVSSShyZXN1bHRDdXN0b21MaW5rKVxuICAgIGNvbnN0IHJlc3VsdE1hcmtldExpbmsgPSBgbWFya2V0Oi8vZGV0YWlscz9pZD0ke2RvbWFpbjJ9LiR7ZG9tYWluMX0uJHtwcm9qZWN0TmFtZX0mbGluaz0ke21hcmtldFJld3JpdHRlblVybH1gXG4gICAgY29uc3QgcmVzdWx0SW50ZW50TGluayA9IGBpbnRlbnQ6Ly8ke2hvc3R9LyR7cGF0aFByZWZpeH0/aWQ9JHtwYXJhbWV0ZXJ9YFxuXG4gICAgc2V0TWFya2V0TGluayhyZXN1bHRNYXJrZXRMaW5rKVxuICAgIHNldEN1c3RvbUxpbmsocmVzdWx0Q3VzdG9tTGluaylcbiAgICBzZXRBcHBMaW5rKGBodHRwczovLyR7aG9zdH0vJHtwYXRoUHJlZml4fT9pZD0ke3BhcmFtZXRlcn1gKVxuICB9LCBbc2NoZW1lLCBob3N0LCBwYXRoUHJlZml4LCBwYXJhbWV0ZXIsIHByb2plY3ROYW1lXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFuZHJvaWQgQXBwIExpbmsgVGVzdDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInNjaGVtZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT17c2NoZW1lfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2NoZW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiaG9zdFwiXG4gICAgICAgICAgICAgICB2YWx1ZT17aG9zdH1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhvc3QoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJob3N0XCJcbiAgICAgICAgICAgICAgIHZhbHVlPXtwYXRoUHJlZml4fVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGF0aFByZWZpeChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICB2YWx1ZT17cGFyYW1ldGVyfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFyYW1ldGVyKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwicHJvamVjdCBuYW1lXCJcbiAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFByb2plY3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+dHlwZSBvZiBsaW5rPC90aD5cbiAgICAgICAgICAgICAgPHRoPmxpbmsgdXJsPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5NYXJrZXQgTGluazwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXttYXJrZXRMaW5rfT57bWFya2V0TGlua308L2E+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+QXBwIExpbms8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YXBwTGlua30+e2FwcExpbmt9PC9hPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPkN1c3RvbSBMaW5rPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2N1c3RvbUxpbmt9PntjdXN0b21MaW5rfTwvYT5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\\n/*@ sourceURL=/Users/nico/workspace/app-link-test/pages/index.js */\"));\n}\n\n_s(Home, \"By/d9rd7WRjtxWb/tjg4F2kUd7g=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJ1c2VTdGF0ZSIsInNjaGVtZSIsInNldFNjaGVtZSIsImhvc3QiLCJzZXRIb3N0IiwicGF0aFByZWZpeCIsInNldFBhdGhQcmVmaXgiLCJwYXJhbWV0ZXIiLCJzZXRQYXJhbWV0ZXIiLCJwcm9qZWN0TmFtZSIsInNldFByb2plY3ROYW1lIiwibWFya2V0TGluayIsInNldE1hcmtldExpbmsiLCJhcHBMaW5rIiwic2V0QXBwTGluayIsImN1c3RvbUxpbmsiLCJzZXRDdXN0b21MaW5rIiwiaW50ZW50TGluayIsInNldEludGVudExpbmsiLCJ1c2VFZmZlY3QiLCJzcGxpdCIsImRvbWFpbjEiLCJkb21haW4yIiwicmVzdWx0Q3VzdG9tTGluayIsIm1hcmtldFJld3JpdHRlblVybCIsImVuY29kZVVSSSIsInJlc3VsdE1hcmtldExpbmsiLCJyZXN1bHRJbnRlbnRMaW5rIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxlQUFELENBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLG1CQUVMRixzREFBUSxDQUFDLG1CQUFELENBRkg7QUFBQSxNQUV0QkcsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBQUEsbUJBR09KLHNEQUFRLENBQUMsUUFBRCxDQUhmO0FBQUEsTUFHdEJLLFVBSHNCO0FBQUEsTUFHVkMsYUFIVTs7QUFBQSxtQkFJS04sc0RBQVEsQ0FBQyxHQUFELENBSmI7QUFBQSxNQUl0Qk8sU0FKc0I7QUFBQSxNQUlYQyxZQUpXOztBQUFBLG1CQUtTUixzREFBUSxDQUFDLEtBQUQsQ0FMakI7QUFBQSxNQUt0QlMsV0FMc0I7QUFBQSxNQUtUQyxjQUxTOztBQUFBLG1CQU9PVixzREFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBRUUsT0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJBLE9BQW5CLENBREYsQ0FGRixDQVBGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVFLFVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCQSxVQUF0QixDQURGLENBRkYsQ0FiRixDQVBGLENBakJGLENBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK3NJQURGO0FBOEREOztHQXRGdUJoQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3NjaGVtZSwgc2V0U2NoZW1lXSA9IHVzZVN0YXRlKCdrb2Rpbmd3YXJyaW9yJylcbiAgY29uc3QgW2hvc3QsIHNldEhvc3RdID0gdXNlU3RhdGUoJ2tvZGluZ3dhcnJpb3IuZGV2JylcbiAgY29uc3QgW3BhdGhQcmVmaXgsIHNldFBhdGhQcmVmaXhdID0gdXNlU3RhdGUoJ2RldGFpbCcpXG4gIGNvbnN0IFtwYXJhbWV0ZXIsIHNldFBhcmFtZXRlcl0gPSB1c2VTdGF0ZSgnMScpXG4gIGNvbnN0IFtwcm9qZWN0TmFtZSwgc2V0UHJvamVjdE5hbWVdID0gdXNlU3RhdGUoJ2FwcCcpXG5cbiAgY29uc3QgW21hcmtldExpbmssIHNldE1hcmtldExpbmtdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthcHBMaW5rLCBzZXRBcHBMaW5rXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY3VzdG9tTGluaywgc2V0Q3VzdG9tTGlua10gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2ludGVudExpbmssIHNldEludGVudExpbmtdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBbZG9tYWluMSwgZG9tYWluMl0gPSBob3N0LnNwbGl0KCcuJylcbiAgICBjb25zdCByZXN1bHRDdXN0b21MaW5rID0gYGxpbms6Ly8ke2hvc3R9LyR7cGF0aFByZWZpeH0/aWQ9JHtwYXJhbWV0ZXJ9YFxuICAgIGNvbnN0IG1hcmtldFJld3JpdHRlblVybCA9IGVuY29kZVVSSShyZXN1bHRDdXN0b21MaW5rKVxuICAgIGNvbnN0IHJlc3VsdE1hcmtldExpbmsgPSBgbWFya2V0Oi8vZGV0YWlscz9pZD0ke2RvbWFpbjJ9LiR7ZG9tYWluMX0uJHtwcm9qZWN0TmFtZX0mbGluaz0ke21hcmtldFJld3JpdHRlblVybH1gXG4gICAgY29uc3QgcmVzdWx0SW50ZW50TGluayA9IGBpbnRlbnQ6Ly8ke2hvc3R9LyR7cGF0aFByZWZpeH0/aWQ9JHtwYXJhbWV0ZXJ9YFxuXG4gICAgc2V0TWFya2V0TGluayhyZXN1bHRNYXJrZXRMaW5rKVxuICAgIHNldEN1c3RvbUxpbmsocmVzdWx0Q3VzdG9tTGluaylcbiAgICBzZXRBcHBMaW5rKGBodHRwczovLyR7aG9zdH0vJHtwYXRoUHJlZml4fT9pZD0ke3BhcmFtZXRlcn1gKVxuICB9LCBbc2NoZW1lLCBob3N0LCBwYXRoUHJlZml4LCBwYXJhbWV0ZXIsIHByb2plY3ROYW1lXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkFuZHJvaWQgQXBwIExpbmsgVGVzdDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInNjaGVtZVwiXG4gICAgICAgICAgICAgICB2YWx1ZT17c2NoZW1lfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2NoZW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiaG9zdFwiXG4gICAgICAgICAgICAgICB2YWx1ZT17aG9zdH1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldEhvc3QoZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJob3N0XCJcbiAgICAgICAgICAgICAgIHZhbHVlPXtwYXRoUHJlZml4fVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGF0aFByZWZpeChlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cInBhcmFtZXRlclwiXG4gICAgICAgICAgICAgICB2YWx1ZT17cGFyYW1ldGVyfVxuICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFyYW1ldGVyKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPVwicHJvamVjdCBuYW1lXCJcbiAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0TmFtZX1cbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFByb2plY3ROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+dHlwZSBvZiBsaW5rPC90aD5cbiAgICAgICAgICAgICAgPHRoPmxpbmsgdXJsPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZD5NYXJrZXQgTGluazwvdGQ+XG4gICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXttYXJrZXRMaW5rfT57bWFya2V0TGlua308L2E+XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQ+QXBwIExpbms8L3RkPlxuICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YXBwTGlua30+e2FwcExpbmt9PC9hPlxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkPkN1c3RvbSBMaW5rPC90ZD5cbiAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2N1c3RvbUxpbmt9PntjdXN0b21MaW5rfTwvYT5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})