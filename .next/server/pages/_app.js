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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LanguageContext\": () => (/* binding */ LanguageContext),\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_layouts_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/layouts/Preloader */ \"./src/layouts/Preloader.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_hooks_useLanguages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hooks/useLanguages */ \"./src/hooks/useLanguages.js\");\n\n\n\n\n// import LanguageProvider from '../src/context/LanguageProvider'\n\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nfunction App({ Component , pageProps  }) {\n    const { getLang  } = (0,_src_hooks_useLanguages__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [lenguage, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        let l = getLang(\"es\");\n        setLanguage(l);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoading(false);\n        }, 1500);\n        setTimeout(()=>{\n            setContent(true);\n        }, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: [\n            lenguage,\n            setLanguage\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n            children: [\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_Preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lione\\\\Documents\\\\portfolio\\\\portfolio_2023_2.0\\\\pages\\\\_app.js\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, this),\n                content && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lione\\\\Documents\\\\portfolio\\\\portfolio_2023_2.0\\\\pages\\\\_app.js\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\lione\\\\Documents\\\\portfolio\\\\portfolio_2023_2.0\\\\pages\\\\_app.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lione\\\\Documents\\\\portfolio\\\\portfolio_2023_2.0\\\\pages\\\\_app.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2xCO0FBQ3dCO0FBQ3RELGlFQUFpRTtBQUMzQjtBQUNjO0FBRTdDLE1BQU1NLGdDQUFrQkYsb0RBQWFBLEdBQUc7QUFFaEMsU0FBU0csSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBRXBELE1BQU0sRUFBQ0MsUUFBTyxFQUFDLEdBQUdMLG1FQUFZQTtJQUU5QixNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBO0lBRXhDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSWUsSUFBSVAsUUFBUTtRQUNoQk0sWUFBWUM7SUFDZCxHQUFHLEVBQUU7SUFFTGYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZ0IsV0FBVyxJQUFNO1lBQ2ZOLFdBQVcsS0FBSztRQUNsQixHQUFHO1FBQ0hNLFdBQVcsSUFBTTtZQUNmSixXQUFXLElBQUk7UUFDakIsR0FBRztJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUixnQkFBZ0JhLFFBQVE7UUFBQ0MsT0FBTztZQUFDTDtZQUFVQztTQUFZO2tCQUN0RCw0RUFBQ2YsMkNBQVFBOztnQkFDTlUseUJBQVcsOERBQUNYLDhEQUFTQTs7Ozs7Z0JBQ3JCYSx5QkFBVyw4REFBQ0w7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiQC9zcmMvbGF5b3V0cy9QcmVsb2FkZXJcIjtcclxuaW1wb3J0IFwiQC9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IExhbmd1YWdlUHJvdmlkZXIgZnJvbSAnLi4vc3JjL2NvbnRleHQvTGFuZ3VhZ2VQcm92aWRlcidcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlTGFuZ3VhZ2VzIGZyb20gXCIuLi9zcmMvaG9va3MvdXNlTGFuZ3VhZ2VzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBMYW5ndWFnZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblxyXG4gIGNvbnN0IHtnZXRMYW5nfSA9IHVzZUxhbmd1YWdlcygpO1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2xlbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGwgPSBnZXRMYW5nKCdlcycpXHJcbiAgICBzZXRMYW5ndWFnZShsKVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH0sIDE1MDApO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldENvbnRlbnQodHJ1ZSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGFuZ3VhZ2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbbGVuZ3VhZ2UsIHNldExhbmd1YWdlXX0+XHJcbiAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICB7bG9hZGluZyAmJiA8UHJlbG9hZGVyIC8+fVxyXG4gICAgICAgIHtjb250ZW50ICYmIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz59XHJcbiAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICA8L0xhbmd1YWdlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJQcmVsb2FkZXIiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUxhbmd1YWdlcyIsIkxhbmd1YWdlQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExhbmciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwibGVuZ3VhZ2UiLCJzZXRMYW5ndWFnZSIsImwiLCJzZXRUaW1lb3V0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/static/language/en.js":
/*!**************************************!*\
  !*** ./public/static/language/en.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    sidebar: {\n        home: \"home\",\n        about_me: \"about_me\",\n        services: \"services\",\n        portfolio: \"portfolio\",\n        blog: \"blog\",\n        contact: \"contact\",\n        setting: \"setting\"\n    },\n    home: {\n        name: \"Lionel\",\n        hello: \"hello\"\n    },\n    about_me: {\n        test: \"test ENGLISH\"\n    },\n    services: {\n        test_1: \"test_1 ENGLISH\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2VuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtJQUNYQSxTQUFRO1FBQ0pDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFNBQVM7SUFDYjtJQUNBTixNQUFLO1FBQ0RPLE1BQU07UUFDTkMsT0FBTztJQUNYO0lBQ0FQLFVBQVU7UUFDTlEsTUFBTTtJQUNWO0lBQ0FQLFVBQVM7UUFDTFEsUUFBUTtJQUNaO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2VuLmpzPzI2NjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2lkZWJhcjp7XHJcbiAgICAgICAgaG9tZTogXCJob21lXCIsXHJcbiAgICAgICAgYWJvdXRfbWU6IFwiYWJvdXRfbWVcIixcclxuICAgICAgICBzZXJ2aWNlczogXCJzZXJ2aWNlc1wiLFxyXG4gICAgICAgIHBvcnRmb2xpbzogXCJwb3J0Zm9saW9cIixcclxuICAgICAgICBibG9nOiBcImJsb2dcIixcclxuICAgICAgICBjb250YWN0OiBcImNvbnRhY3RcIixcclxuICAgICAgICBzZXR0aW5nOiBcInNldHRpbmdcIixcclxuICAgIH0sXHJcbiAgICBob21lOntcclxuICAgICAgICBuYW1lOiBcIkxpb25lbFwiLFxyXG4gICAgICAgIGhlbGxvOiBcImhlbGxvXCJcclxuICAgIH0sXHJcbiAgICBhYm91dF9tZToge1xyXG4gICAgICAgIHRlc3Q6IFwidGVzdCBFTkdMSVNIXCJcclxuICAgIH0sXHJcbiAgICBzZXJ2aWNlczp7XHJcbiAgICAgICAgdGVzdF8xOiBcInRlc3RfMSBFTkdMSVNIXCJcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJzaWRlYmFyIiwiaG9tZSIsImFib3V0X21lIiwic2VydmljZXMiLCJwb3J0Zm9saW8iLCJibG9nIiwiY29udGFjdCIsInNldHRpbmciLCJuYW1lIiwiaGVsbG8iLCJ0ZXN0IiwidGVzdF8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/static/language/en.js\n");

/***/ }),

/***/ "./public/static/language/es.js":
/*!**************************************!*\
  !*** ./public/static/language/es.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    sidebar: {\n        home: \"ACA\",\n        about_me: \"Sobre mi\",\n        services: \"servicios\",\n        portfolio: \"portfolio\",\n        blog: \"blog\",\n        contact: \"contacto\",\n        setting: \"setting\"\n    },\n    home: {\n        name: \"Lionel\",\n        hello: \"hello\"\n    },\n    about_me: {\n        test: \"test ESPA\\xd1OL\"\n    },\n    services: {\n        test_1: \"test_1 ESPA\\xd1OL\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtJQUNYQSxTQUFRO1FBQ0pDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFNBQVM7SUFDYjtJQUNBTixNQUFLO1FBQ0RPLE1BQU07UUFDTkMsT0FBTztJQUNYO0lBQ0FQLFVBQVU7UUFDTlEsTUFBTTtJQUNWO0lBQ0FQLFVBQVM7UUFDTFEsUUFBUTtJQUNaO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2VzLmpzP2YyNjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2lkZWJhcjp7XHJcbiAgICAgICAgaG9tZTogXCJBQ0FcIixcclxuICAgICAgICBhYm91dF9tZTogXCJTb2JyZSBtaVwiLFxyXG4gICAgICAgIHNlcnZpY2VzOiBcInNlcnZpY2lvc1wiLFxyXG4gICAgICAgIHBvcnRmb2xpbzogXCJwb3J0Zm9saW9cIixcclxuICAgICAgICBibG9nOiBcImJsb2dcIixcclxuICAgICAgICBjb250YWN0OiBcImNvbnRhY3RvXCIsXHJcbiAgICAgICAgc2V0dGluZzogXCJzZXR0aW5nXCIsXHJcbiAgICB9LFxyXG4gICAgaG9tZTp7XHJcbiAgICAgICAgbmFtZTogXCJMaW9uZWxcIixcclxuICAgICAgICBoZWxsbzogXCJoZWxsb1wiXHJcbiAgICB9LFxyXG4gICAgYWJvdXRfbWU6IHtcclxuICAgICAgICB0ZXN0OiBcInRlc3QgRVNQQcORT0xcIlxyXG4gICAgfSxcclxuICAgIHNlcnZpY2VzOntcclxuICAgICAgICB0ZXN0XzE6IFwidGVzdF8xIEVTUEHDkU9MXCJcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJzaWRlYmFyIiwiaG9tZSIsImFib3V0X21lIiwic2VydmljZXMiLCJwb3J0Zm9saW8iLCJibG9nIiwiY29udGFjdCIsInNldHRpbmciLCJuYW1lIiwiaGVsbG8iLCJ0ZXN0IiwidGVzdF8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/static/language/es.js\n");

/***/ }),

/***/ "./public/static/language/fr.js":
/*!**************************************!*\
  !*** ./public/static/language/fr.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    sidebar: {\n        home: \"Accueil\",\n        about_me: \"Presentation\",\n        services: \"services\",\n        portfolio: \"portfolio\",\n        blog: \"blog\",\n        contact: \"contact\",\n        setting: \"setting\"\n    },\n    home: {\n        name: \"Lionel\",\n        hello: \"hello\"\n    },\n    about_me: {\n        test: \"test FRANCAIS\"\n    },\n    services: {\n        test_1: \"test_1 FRANCAIS\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2ZyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtJQUNYQSxTQUFRO1FBQ0pDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFNBQVM7SUFDYjtJQUNBTixNQUFLO1FBQ0RPLE1BQU07UUFDTkMsT0FBTztJQUNYO0lBQ0FQLFVBQVU7UUFDTlEsTUFBTTtJQUNWO0lBQ0FQLFVBQVM7UUFDTFEsUUFBUTtJQUNaO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2ZyLmpzPzY2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2lkZWJhcjp7XHJcbiAgICAgICAgaG9tZTogXCJBY2N1ZWlsXCIsXHJcbiAgICAgICAgYWJvdXRfbWU6IFwiUHJlc2VudGF0aW9uXCIsXHJcbiAgICAgICAgc2VydmljZXM6IFwic2VydmljZXNcIixcclxuICAgICAgICBwb3J0Zm9saW86IFwicG9ydGZvbGlvXCIsXHJcbiAgICAgICAgYmxvZzogXCJibG9nXCIsXHJcbiAgICAgICAgY29udGFjdDogXCJjb250YWN0XCIsXHJcbiAgICAgICAgc2V0dGluZzogXCJzZXR0aW5nXCIsXHJcbiAgICB9LFxyXG4gICAgaG9tZTp7XHJcbiAgICAgICAgbmFtZTogXCJMaW9uZWxcIixcclxuICAgICAgICBoZWxsbzogXCJoZWxsb1wiXHJcbiAgICB9LFxyXG4gICAgYWJvdXRfbWU6IHtcclxuICAgICAgICB0ZXN0OiBcInRlc3QgRlJBTkNBSVNcIlxyXG4gICAgfSxcclxuICAgIHNlcnZpY2VzOntcclxuICAgICAgICB0ZXN0XzE6IFwidGVzdF8xIEZSQU5DQUlTXCJcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJzaWRlYmFyIiwiaG9tZSIsImFib3V0X21lIiwic2VydmljZXMiLCJwb3J0Zm9saW8iLCJibG9nIiwiY29udGFjdCIsInNldHRpbmciLCJuYW1lIiwiaGVsbG8iLCJ0ZXN0IiwidGVzdF8xIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./public/static/language/fr.js\n");

/***/ }),

/***/ "./src/hooks/useLanguages.js":
/*!***********************************!*\
  !*** ./src/hooks/useLanguages.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _public_static_language_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/language/es */ \"./public/static/language/es.js\");\n/* harmony import */ var _public_static_language_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/static/language/en */ \"./public/static/language/en.js\");\n/* harmony import */ var _public_static_language_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/static/language/fr */ \"./public/static/language/fr.js\");\n\n\n\nconst useLanguages = ()=>{\n    const map = {\n        es: _public_static_language_es__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        en: _public_static_language_en__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        fr: _public_static_language_fr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    };\n    const getLang = (value)=>{\n        return map[value];\n    };\n    return {\n        getLang\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLanguages);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTGFuZ3VhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDQTtBQUNBO0FBRWpELE1BQU1HLGVBQWUsSUFBTTtJQUN2QixNQUFNQyxNQUFNO1FBQ1JKLElBQUlBLGtFQUFFQTtRQUNOQyxJQUFJQSxrRUFBRUE7UUFDTkMsSUFBSUEsa0VBQUVBO0lBQ1Y7SUFFQSxNQUFNRyxVQUFVLENBQUNDLFFBQVU7UUFDdkIsT0FBT0YsR0FBRyxDQUFDRSxNQUFNO0lBQ3JCO0lBRUYsT0FBTztRQUFDRDtJQUFPO0FBRWpCO0FBRUEsaUVBQWVGLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b255LXJlYWN0Ly4vc3JjL2hvb2tzL3VzZUxhbmd1YWdlcy5qcz9iNzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlcyBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9sYW5ndWFnZS9lc1wiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvbGFuZ3VhZ2UvZW5cIjtcclxuaW1wb3J0IGZyIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2ZyXCI7XHJcblxyXG5jb25zdCB1c2VMYW5ndWFnZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSB7XHJcbiAgICAgICAgZXM6IGVzLFxyXG4gICAgICAgIGVuOiBlbixcclxuICAgICAgICBmcjogZnIsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0TGFuZyA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBtYXBbdmFsdWVdO1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4ge2dldExhbmd9O1xyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VMYW5ndWFnZXM7Il0sIm5hbWVzIjpbImVzIiwiZW4iLCJmciIsInVzZUxhbmd1YWdlcyIsIm1hcCIsImdldExhbmciLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useLanguages.js\n");

/***/ }),

/***/ "./src/layouts/Preloader.js":
/*!**********************************!*\
  !*** ./src/layouts/Preloader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Preloader = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"loading\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"load-circle\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"one\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lione\\\\Documents\\\\portfolio\\\\portfolio_2023_2.0\\\\src\\\\layouts\\\\Preloader.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\lione\\\\Documents\\\\portfolio\\\\portfolio_2023_2.0\\\\src\\\\layouts\\\\Preloader.js\",\n            lineNumber: 4,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\lione\\\\Documents\\\\portfolio\\\\portfolio_2023_2.0\\\\src\\\\layouts\\\\Preloader.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Preloader);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9QcmVsb2FkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLFlBQVksSUFBTTtJQUN0QixxQkFDRSw4REFBQ0M7UUFBSUMsSUFBRztrQkFDTiw0RUFBQ0Q7WUFBSUUsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQUtELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEI7QUFDQSxpRUFBZUgsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9zcmMvbGF5b3V0cy9QcmVsb2FkZXIuanM/MzUzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBQcmVsb2FkZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9XCJsb2FkaW5nXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZC1jaXJjbGVcIj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbmVcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFByZWxvYWRlcjtcclxuIl0sIm5hbWVzIjpbIlByZWxvYWRlciIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layouts/Preloader.js\n");

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