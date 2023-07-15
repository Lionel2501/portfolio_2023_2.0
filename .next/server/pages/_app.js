/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LanguageContext\": () => (/* binding */ LanguageContext),\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_layouts_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/layouts/Preloader */ \"./src/layouts/Preloader.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// import LanguageProvider from '../src/context/LanguageProvider'\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nfunction App({ Component , pageProps  }) {\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [lenguage, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"es\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoading(false);\n        }, 1500);\n        setTimeout(()=>{\n            setContent(true);\n        }, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: [\n            lenguage,\n            setLanguage\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n            children: [\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_Preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/pages/_app.js\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, this),\n                content && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/pages/_app.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/pages/_app.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/pages/_app.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDbEI7QUFDd0I7QUFDdEQsaUVBQWlFO0FBQzNCO0FBRS9CLE1BQU1LLGdDQUFrQkQsb0RBQWFBLEdBQUc7QUFFaEMsU0FBU0UsSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBRXBELE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV6Q0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkYSxXQUFXLElBQU07WUFDZkwsV0FBVyxLQUFLO1FBQ2xCLEdBQUc7UUFDSEssV0FBVyxJQUFNO1lBQ2ZILFdBQVcsSUFBSTtRQUNqQixHQUFHO0lBQ0wsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNQLGdCQUFnQlcsUUFBUTtRQUFDQyxPQUFPO1lBQUNKO1lBQVVDO1NBQVk7a0JBQ3RELDRFQUFDYiwyQ0FBUUE7O2dCQUNOUSx5QkFBVyw4REFBQ1QsOERBQVNBOzs7OztnQkFDckJXLHlCQUFXLDhEQUFDSjtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9ueS1yZWFjdC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJlbG9hZGVyIGZyb20gXCJAL3NyYy9sYXlvdXRzL1ByZWxvYWRlclwiO1xuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgTGFuZ3VhZ2VQcm92aWRlciBmcm9tICcuLi9zcmMvY29udGV4dC9MYW5ndWFnZVByb3ZpZGVyJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xlbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgnZXMnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfSwgMTUwMCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRDb250ZW50KHRydWUpO1xuICAgIH0sIDEwMDApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbbGVuZ3VhZ2UsIHNldExhbmd1YWdlXX0+XG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHtsb2FkaW5nICYmIDxQcmVsb2FkZXIgLz59XG4gICAgICAgIHtjb250ZW50ICYmIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIDwvTGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiTGFuZ3VhZ2VDb250ZXh0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb250ZW50Iiwic2V0Q29udGVudCIsImxlbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJzZXRUaW1lb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/layouts/Preloader.js":
/*!**********************************!*\
  !*** ./src/layouts/Preloader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Preloader = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"loading\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"load-circle\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"one\"\n            }, void 0, false, {\n                fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/src/layouts/Preloader.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/src/layouts/Preloader.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/src/layouts/Preloader.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9QcmVsb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLFlBQVksSUFBTTtJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUMsSUFBRztrQkFDTiw0RUFBQ0Q7WUFBSUUsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUtELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7QUFDQSxpRUFBZUgsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9zcmMvbGF5b3V0cy9QcmVsb2FkZXIuanM/MzUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcmVsb2FkZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImxvYWRpbmdcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1jaXJjbGVcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib25lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlcjtcbiJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Preloader.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();