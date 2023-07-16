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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LanguageContext\": () => (/* binding */ LanguageContext),\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_layouts_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/layouts/Preloader */ \"./src/layouts/Preloader.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_hooks_useLanguages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/hooks/useLanguages */ \"./src/hooks/useLanguages.js\");\n\n\n\n\n// import LanguageProvider from '../src/context/LanguageProvider'\n\n\nconst LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nfunction App({ Component , pageProps  }) {\n    const { getLang  } = (0,_src_hooks_useLanguages__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [lenguage, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        let l = getLang(\"es\");\n        setLanguage(l);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setTimeout(()=>{\n            setLoading(false);\n        }, 1500);\n        setTimeout(()=>{\n            setContent(true);\n        }, 1000);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LanguageContext.Provider, {\n        value: [\n            lenguage,\n            setLanguage\n        ],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n            children: [\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_Preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/pages/_app.js\",\n                    lineNumber: 35,\n                    columnNumber: 21\n                }, this),\n                content && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/pages/_app.js\",\n                    lineNumber: 36,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/pages/_app.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lionel/Documentos/portfolio_2023/portfolio_2023_2.0/tony/pages/_app.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2xCO0FBQ3dCO0FBQ3RELGlFQUFpRTtBQUMzQjtBQUNjO0FBRTdDLE1BQU1NLGdDQUFrQkYsb0RBQWFBLEdBQUc7QUFFaEMsU0FBU0csSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBRXBELE1BQU0sRUFBQ0MsUUFBTyxFQUFDLEdBQUdMLG1FQUFZQTtJQUU5QixNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUMsSUFBSTtJQUMzQyxNQUFNLENBQUNVLFNBQVNDLFdBQVcsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUM1QyxNQUFNLENBQUNZLFVBQVVDLFlBQVksR0FBR2IsK0NBQVFBO0lBRXhDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSWUsSUFBSVAsUUFBUTtRQUNoQk0sWUFBWUM7SUFDZCxHQUFHLEVBQUU7SUFFTGYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkZ0IsV0FBVyxJQUFNO1lBQ2ZOLFdBQVcsS0FBSztRQUNsQixHQUFHO1FBQ0hNLFdBQVcsSUFBTTtZQUNmSixXQUFXLElBQUk7UUFDakIsR0FBRztJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUixnQkFBZ0JhLFFBQVE7UUFBQ0MsT0FBTztZQUFDTDtZQUFVQztTQUFZO2tCQUN0RCw0RUFBQ2YsMkNBQVFBOztnQkFDTlUseUJBQVcsOERBQUNYLDhEQUFTQTs7Ozs7Z0JBQ3JCYSx5QkFBVyw4REFBQ0w7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiQC9zcmMvbGF5b3V0cy9QcmVsb2FkZXJcIjtcbmltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IExhbmd1YWdlUHJvdmlkZXIgZnJvbSAnLi4vc3JjL2NvbnRleHQvTGFuZ3VhZ2VQcm92aWRlcidcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VMYW5ndWFnZXMgZnJvbSBcIi4uL3NyYy9ob29rcy91c2VMYW5ndWFnZXNcIlxuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc3Qge2dldExhbmd9ID0gdXNlTGFuZ3VhZ2VzKCk7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xlbmd1YWdlLCBzZXRMYW5ndWFnZV0gPSB1c2VTdGF0ZSgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IGwgPSBnZXRMYW5nKCdlcycpXG4gICAgc2V0TGFuZ3VhZ2UobClcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9LCAxNTAwKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldENvbnRlbnQodHJ1ZSk7XG4gICAgfSwgMTAwMCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxMYW5ndWFnZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tsZW5ndWFnZSwgc2V0TGFuZ3VhZ2VdfT5cbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge2xvYWRpbmcgJiYgPFByZWxvYWRlciAvPn1cbiAgICAgICAge2NvbnRlbnQgJiYgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPn1cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgPC9MYW5ndWFnZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJ1c2VMYW5ndWFnZXMiLCJMYW5ndWFnZUNvbnRleHQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJnZXRMYW5nIiwibG9hZGluZyIsInNldExvYWRpbmciLCJjb250ZW50Iiwic2V0Q29udGVudCIsImxlbmd1YWdlIiwic2V0TGFuZ3VhZ2UiLCJsIiwic2V0VGltZW91dCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/static/language/en.js":
/*!**************************************!*\
  !*** ./public/static/language/en.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    sidebar: {\n        home: \"home\",\n        about_me: \"about_me\",\n        services: \"services\",\n        portfolio: \"portfolio\",\n        blog: \"blog\",\n        contact: \"contact\",\n        setting: \"setting\"\n    },\n    home: {\n        name: \"Lionel\",\n        hello: \"hello\"\n    },\n    about_me: {\n        test: \"test ENGLISH\"\n    },\n    services: {\n        test_1: \"test_1 ENGLISH\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2VuLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtJQUNYQSxTQUFRO1FBQ0pDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFNBQVM7SUFDYjtJQUNBTixNQUFLO1FBQ0RPLE1BQU07UUFDTkMsT0FBTztJQUNYO0lBQ0FQLFVBQVU7UUFDTlEsTUFBTTtJQUNWO0lBQ0FQLFVBQVM7UUFDTFEsUUFBUTtJQUNaO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2VuLmpzPzI2NjMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIHNpZGViYXI6e1xuICAgICAgICBob21lOiBcImhvbWVcIixcbiAgICAgICAgYWJvdXRfbWU6IFwiYWJvdXRfbWVcIixcbiAgICAgICAgc2VydmljZXM6IFwic2VydmljZXNcIixcbiAgICAgICAgcG9ydGZvbGlvOiBcInBvcnRmb2xpb1wiLFxuICAgICAgICBibG9nOiBcImJsb2dcIixcbiAgICAgICAgY29udGFjdDogXCJjb250YWN0XCIsXG4gICAgICAgIHNldHRpbmc6IFwic2V0dGluZ1wiLFxuICAgIH0sXG4gICAgaG9tZTp7XG4gICAgICAgIG5hbWU6IFwiTGlvbmVsXCIsXG4gICAgICAgIGhlbGxvOiBcImhlbGxvXCJcbiAgICB9LFxuICAgIGFib3V0X21lOiB7XG4gICAgICAgIHRlc3Q6IFwidGVzdCBFTkdMSVNIXCJcbiAgICB9LFxuICAgIHNlcnZpY2VzOntcbiAgICAgICAgdGVzdF8xOiBcInRlc3RfMSBFTkdMSVNIXCJcbiAgICB9XG59Il0sIm5hbWVzIjpbInNpZGViYXIiLCJob21lIiwiYWJvdXRfbWUiLCJzZXJ2aWNlcyIsInBvcnRmb2xpbyIsImJsb2ciLCJjb250YWN0Iiwic2V0dGluZyIsIm5hbWUiLCJoZWxsbyIsInRlc3QiLCJ0ZXN0XzEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/static/language/en.js\n");

/***/ }),

/***/ "./public/static/language/es.js":
/*!**************************************!*\
  !*** ./public/static/language/es.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    sidebar: {\n        home: \"ACA\",\n        about_me: \"Sobre mi\",\n        services: \"servicios\",\n        portfolio: \"portfolio\",\n        blog: \"blog\",\n        contact: \"contacto\",\n        setting: \"setting\"\n    },\n    home: {\n        name: \"Lionel\",\n        hello: \"hello\"\n    },\n    about_me: {\n        test: \"test ESPA\\xd1OL\"\n    },\n    services: {\n        test_1: \"test_1 ESPA\\xd1OL\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtJQUNYQSxTQUFRO1FBQ0pDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFNBQVM7SUFDYjtJQUNBTixNQUFLO1FBQ0RPLE1BQU07UUFDTkMsT0FBTztJQUNYO0lBQ0FQLFVBQVU7UUFDTlEsTUFBTTtJQUNWO0lBQ0FQLFVBQVM7UUFDTFEsUUFBUTtJQUNaO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2VzLmpzP2YyNjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIHNpZGViYXI6e1xuICAgICAgICBob21lOiBcIkFDQVwiLFxuICAgICAgICBhYm91dF9tZTogXCJTb2JyZSBtaVwiLFxuICAgICAgICBzZXJ2aWNlczogXCJzZXJ2aWNpb3NcIixcbiAgICAgICAgcG9ydGZvbGlvOiBcInBvcnRmb2xpb1wiLFxuICAgICAgICBibG9nOiBcImJsb2dcIixcbiAgICAgICAgY29udGFjdDogXCJjb250YWN0b1wiLFxuICAgICAgICBzZXR0aW5nOiBcInNldHRpbmdcIixcbiAgICB9LFxuICAgIGhvbWU6e1xuICAgICAgICBuYW1lOiBcIkxpb25lbFwiLFxuICAgICAgICBoZWxsbzogXCJoZWxsb1wiXG4gICAgfSxcbiAgICBhYm91dF9tZToge1xuICAgICAgICB0ZXN0OiBcInRlc3QgRVNQQcORT0xcIlxuICAgIH0sXG4gICAgc2VydmljZXM6e1xuICAgICAgICB0ZXN0XzE6IFwidGVzdF8xIEVTUEHDkU9MXCJcbiAgICB9XG59Il0sIm5hbWVzIjpbInNpZGViYXIiLCJob21lIiwiYWJvdXRfbWUiLCJzZXJ2aWNlcyIsInBvcnRmb2xpbyIsImJsb2ciLCJjb250YWN0Iiwic2V0dGluZyIsIm5hbWUiLCJoZWxsbyIsInRlc3QiLCJ0ZXN0XzEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/static/language/es.js\n");

/***/ }),

/***/ "./public/static/language/fr.js":
/*!**************************************!*\
  !*** ./public/static/language/fr.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    sidebar: {\n        home: \"Accueil\",\n        about_me: \"Presentation\",\n        services: \"services\",\n        portfolio: \"portfolio\",\n        blog: \"blog\",\n        contact: \"contact\",\n        setting: \"setting\"\n    },\n    home: {\n        name: \"Lionel\",\n        hello: \"hello\"\n    },\n    about_me: {\n        test: \"test FRANCAIS\"\n    },\n    services: {\n        test_1: \"test_1 FRANCAIS\"\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2ZyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpRUFBZTtJQUNYQSxTQUFRO1FBQ0pDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFdBQVc7UUFDWEMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLFNBQVM7SUFDYjtJQUNBTixNQUFLO1FBQ0RPLE1BQU07UUFDTkMsT0FBTztJQUNYO0lBQ0FQLFVBQVU7UUFDTlEsTUFBTTtJQUNWO0lBQ0FQLFVBQVM7UUFDTFEsUUFBUTtJQUNaO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvbnktcmVhY3QvLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2ZyLmpzPzY2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAgIHNpZGViYXI6e1xuICAgICAgICBob21lOiBcIkFjY3VlaWxcIixcbiAgICAgICAgYWJvdXRfbWU6IFwiUHJlc2VudGF0aW9uXCIsXG4gICAgICAgIHNlcnZpY2VzOiBcInNlcnZpY2VzXCIsXG4gICAgICAgIHBvcnRmb2xpbzogXCJwb3J0Zm9saW9cIixcbiAgICAgICAgYmxvZzogXCJibG9nXCIsXG4gICAgICAgIGNvbnRhY3Q6IFwiY29udGFjdFwiLFxuICAgICAgICBzZXR0aW5nOiBcInNldHRpbmdcIixcbiAgICB9LFxuICAgIGhvbWU6e1xuICAgICAgICBuYW1lOiBcIkxpb25lbFwiLFxuICAgICAgICBoZWxsbzogXCJoZWxsb1wiXG4gICAgfSxcbiAgICBhYm91dF9tZToge1xuICAgICAgICB0ZXN0OiBcInRlc3QgRlJBTkNBSVNcIlxuICAgIH0sXG4gICAgc2VydmljZXM6e1xuICAgICAgICB0ZXN0XzE6IFwidGVzdF8xIEZSQU5DQUlTXCJcbiAgICB9XG59Il0sIm5hbWVzIjpbInNpZGViYXIiLCJob21lIiwiYWJvdXRfbWUiLCJzZXJ2aWNlcyIsInBvcnRmb2xpbyIsImJsb2ciLCJjb250YWN0Iiwic2V0dGluZyIsIm5hbWUiLCJoZWxsbyIsInRlc3QiLCJ0ZXN0XzEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./public/static/language/fr.js\n");

/***/ }),

/***/ "./src/hooks/useLanguages.js":
/*!***********************************!*\
  !*** ./src/hooks/useLanguages.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _public_static_language_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/static/language/es */ \"./public/static/language/es.js\");\n/* harmony import */ var _public_static_language_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/static/language/en */ \"./public/static/language/en.js\");\n/* harmony import */ var _public_static_language_fr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/static/language/fr */ \"./public/static/language/fr.js\");\n\n\n\nconst useLanguages = ()=>{\n    const map = {\n        es: _public_static_language_es__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n        en: _public_static_language_en__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        fr: _public_static_language_fr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    };\n    const getLang = (value)=>{\n        return map[value];\n    };\n    return {\n        getLang\n    };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLanguages);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTGFuZ3VhZ2VzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDQTtBQUNBO0FBRWpELE1BQU1HLGVBQWUsSUFBTTtJQUN2QixNQUFNQyxNQUFNO1FBQ1JKLElBQUlBLGtFQUFFQTtRQUNOQyxJQUFJQSxrRUFBRUE7UUFDTkMsSUFBSUEsa0VBQUVBO0lBQ1Y7SUFFQSxNQUFNRyxVQUFVLENBQUNDLFFBQVU7UUFDdkIsT0FBT0YsR0FBRyxDQUFDRSxNQUFNO0lBQ3JCO0lBRUYsT0FBTztRQUFDRDtJQUFPO0FBRWpCO0FBRUEsaUVBQWVGLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b255LXJlYWN0Ly4vc3JjL2hvb2tzL3VzZUxhbmd1YWdlcy5qcz9iNzQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlcyBmcm9tIFwiLi4vLi4vcHVibGljL3N0YXRpYy9sYW5ndWFnZS9lc1wiO1xuaW1wb3J0IGVuIGZyb20gXCIuLi8uLi9wdWJsaWMvc3RhdGljL2xhbmd1YWdlL2VuXCI7XG5pbXBvcnQgZnIgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdGF0aWMvbGFuZ3VhZ2UvZnJcIjtcblxuY29uc3QgdXNlTGFuZ3VhZ2VzID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hcCA9IHtcbiAgICAgICAgZXM6IGVzLFxuICAgICAgICBlbjogZW4sXG4gICAgICAgIGZyOiBmcixcbiAgICB9XG5cbiAgICBjb25zdCBnZXRMYW5nID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBtYXBbdmFsdWVdO1xuICAgIH1cblxuICByZXR1cm4ge2dldExhbmd9O1xuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTGFuZ3VhZ2VzOyJdLCJuYW1lcyI6WyJlcyIsImVuIiwiZnIiLCJ1c2VMYW5ndWFnZXMiLCJtYXAiLCJnZXRMYW5nIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useLanguages.js\n");

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