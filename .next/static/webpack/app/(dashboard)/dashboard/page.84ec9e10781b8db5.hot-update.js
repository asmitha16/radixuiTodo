"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(dashboard)/dashboard/page",{

/***/ "(app-client)/./components/post-item.tsx":
/*!**********************************!*\
  !*** ./components/post-item.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostItem\": function() { return /* binding */ PostItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.3.2-canary.13_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icons */ \"(app-client)/./components/icons.tsx\");\n/* harmony import */ var _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/checkbox */ \"(app-client)/./components/ui/checkbox.tsx\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-client)/./components/ui/use-toast.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/.pnpm/next@13.3.2-canary.13_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/skeleton */ \"(app-client)/./components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ PostItem auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function deleteTodo(todoId) {\n    const response = await fetch(\"/api/todos/\".concat(todoId), {\n        method: \"DELETE\"\n    });\n    if (!(response === null || response === void 0 ? void 0 : response.ok)) {\n        (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.toast)({\n            title: \"Something went wrong.\",\n            description: \"Your post was not deleted. Please try again.\",\n            variant: \"destructive\"\n        });\n    }\n    return true;\n}\nasync function updateTodo(todo) {\n    const response = await fetch(\"/api/todos/\".concat(todo.id), {\n        method: \"PATCH\",\n        body: JSON.stringify({\n            complete: !todo.complete\n        })\n    });\n    if (!(response === null || response === void 0 ? void 0 : response.ok)) {\n        (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.toast)({\n            title: \"Something went wrong.\",\n            description: \"Your post was not deleted. Please try again.\",\n            variant: \"destructive\"\n        });\n    }\n    return true;\n}\nfunction PostItem(param) {\n    let { todo  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // const update = async (todo: Todo) => {\n    //   await fetch(`/api/todos/${todo.id}`, {\n    //     method: \"PATCH\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //     },\n    //     body: JSON.stringify({\n    //       complete: !todo.complete,\n    //     }),\n    //   });\n    //   router.refresh();\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"flex flex-1 gap-2 p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                        onCheckedChange: async (event)=>{\n                            const edited = await updateTodo(todo);\n                            if (edited) {\n                                router.refresh();\n                            }\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 1\n                    }, this),\n                    \" \",\n                    todo.title\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mr-3 text-slate-500 hover:text-slate-800\",\n                onClick: async (event)=>{\n                    event.preventDefault();\n                    const deleted = await deleteTodo(todo.id);\n                    if (deleted) {\n                        router.refresh();\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.trash, {\n                    className: \"mr-2 h-4 w-4\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PostItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = PostItem;\nPostItem.Skeleton = function PostItemSkeleton() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                    className: \"h-5 w-2/5\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                    className: \"h-4 w-4/5\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                    lineNumber: 113,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n};\nvar _c;\n$RefreshReg$(_c, \"PostItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wb3N0LWl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkM7QUFDUztBQUVIO0FBQ0w7QUFDSDtBQVl6QyxlQUFlSyxXQUFXQyxNQUFjLEVBQUU7SUFDeEMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGNBQXFCLE9BQVBGLFNBQVU7UUFDbkRHLFFBQVE7SUFDVjtJQUVBLElBQUksQ0FBQ0YsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVRyxFQUFFLEdBQUU7UUFDakJSLCtEQUFLQSxDQUFDO1lBQ0pTLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxTQUFTO1FBQ1g7SUFDRixDQUFDO0lBQ0QsT0FBTyxJQUFJO0FBQ2I7QUFFQSxlQUFlQyxXQUFXQyxJQUFVLEVBQUU7SUFDcEMsTUFBTVIsV0FBVyxNQUFNQyxNQUFNLGNBQXNCLE9BQVJPLEtBQUtDLEVBQUUsR0FBSTtRQUNwRFAsUUFBUTtRQUNSUSxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDbkJDLFVBQVUsQ0FBQ0wsS0FBS0ssUUFBUTtRQUMxQjtJQUNGO0lBRUEsSUFBSSxDQUFDYixDQUFBQSxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVHLEVBQUUsR0FBRTtRQUNqQlIsK0RBQUtBLENBQUM7WUFDSlMsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFNBQVM7UUFDWDtJQUNGLENBQUM7SUFDRCxPQUFPLElBQUk7QUFDYjtBQUlPLFNBQVNRLFNBQVMsS0FBdUIsRUFBRTtRQUF6QixFQUFFTixLQUFJLEVBQWlCLEdBQXZCOztJQUN2QixNQUFNTyxTQUFTbkIsMERBQVNBO0lBRXhCLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQiw0Q0FBNEM7SUFDNUMsU0FBUztJQUNULDZCQUE2QjtJQUM3QixrQ0FBa0M7SUFDbEMsVUFBVTtJQUNWLFFBQVE7SUFDUixzQkFBc0I7SUFDdEIsS0FBSztJQUVMLHFCQUNFOzswQkFDRSw4REFBQ29CO2dCQUFLQyxXQUFVOztrQ0FHdEIsOERBQUN2Qiw2REFBUUE7d0JBQ1J3QixpQkFBaUIsT0FBT0MsUUFBVTs0QkFFekIsTUFBTUMsU0FBUyxNQUFNYixXQUFXQzs0QkFFaEMsSUFBSVksUUFBUTtnQ0FDVkwsT0FBT00sT0FBTzs0QkFDaEIsQ0FBQzt3QkFDSDs7Ozs7O29CQUdFO29CQUFFYixLQUFLSixLQUFLOzs7Ozs7OzBCQUloQiw4REFBQ2tCO2dCQUNDTCxXQUFVO2dCQUNWTSxTQUFTLE9BQU9KLFFBQVU7b0JBQ3hCQSxNQUFNSyxjQUFjO29CQUVwQixNQUFNQyxVQUFVLE1BQU0zQixXQUFXVSxLQUFLQyxFQUFFO29CQUV4QyxJQUFJZ0IsU0FBUzt3QkFDWFYsT0FBT00sT0FBTztvQkFDaEIsQ0FBQztnQkFDSDswQkFFQSw0RUFBQzVCLDBEQUFXO29CQUFDd0IsV0FBVTs7Ozs7Ozs7Ozs7OztBQUkvQixDQUFDO0dBcERlSDs7UUFDQ2xCLHNEQUFTQTs7O0tBRFZrQjtBQXNEaEJBLFNBQVNqQixRQUFRLEdBQUcsU0FBUzhCLG1CQUFtQjtJQUM5QyxxQkFDRSw4REFBQ0M7UUFBSVgsV0FBVTtrQkFDYiw0RUFBQ1c7WUFBSVgsV0FBVTs7OEJBQ2IsOERBQUNwQixrREFBUUE7b0JBQUNvQixXQUFVOzs7Ozs7OEJBQ3BCLDhEQUFDcEIsa0RBQVFBO29CQUFDb0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wb3N0LWl0ZW0udHN4PzQ4OWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IEljb25zIH0gZnJvbSBcIkAvY29tcG9uZW50cy9pY29uc1wiO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2NoZWNrYm94XCI7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvdXNlLXRvYXN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIi4vdWkvc2tlbGV0b25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbGVydERpYWxvZywgQWxlcnREaWFsb2dBY3Rpb24sIEFsZXJ0RGlhbG9nQ2FuY2VsLCBBbGVydERpYWxvZ0NvbnRlbnQsIEFsZXJ0RGlhbG9nRGVzY3JpcHRpb24sIEFsZXJ0RGlhbG9nVGl0bGUgfSBmcm9tIFwiQHJhZGl4LXVpL3JlYWN0LWFsZXJ0LWRpYWxvZ1wiO1xuaW1wb3J0IHsgQWxlcnREaWFsb2dIZWFkZXIsIEFsZXJ0RGlhbG9nRm9vdGVyIH0gZnJvbSBcIi4vdWkvYWxlcnQtZGlhbG9nXCI7XG5pbXBvcnQgeyBidXR0b25WYXJpYW50cyB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuXG5pbnRlcmZhY2UgVG9kb0l0ZW1Qcm9wcyB7XG4gIHRvZG86IFBpY2s8VG9kbywgXCJpZFwiIHwgXCJ0aXRsZVwiIHwgXCJjb21wbGV0ZVwiIHwgXCJjcmVhdGVkQXRcIiB8IFwidXBkYXRlZEF0XCIgfCBcInVzZXJJZFwiID47XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kb0lkOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS90b2Rvcy8ke3RvZG9JZH1gLCB7XG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICB9KVxuXG4gIGlmICghcmVzcG9uc2U/Lm9rKSB7XG4gICAgdG9hc3Qoe1xuICAgICAgdGl0bGU6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJZb3VyIHBvc3Qgd2FzIG5vdCBkZWxldGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiLFxuICAgICAgdmFyaWFudDogXCJkZXN0cnVjdGl2ZVwiLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlVG9kbyh0b2RvOiBUb2RvKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdG9kb3MvJHt0b2RvLmlkfWAsIHtcbiAgICBtZXRob2Q6IFwiUEFUQ0hcIixcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBjb21wbGV0ZTogIXRvZG8uY29tcGxldGUsXG4gICAgfSksXG4gIH0pXG5cbiAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICB0b2FzdCh7XG4gICAgICB0aXRsZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgcG9zdCB3YXMgbm90IGRlbGV0ZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgfSlcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RJdGVtKHsgdG9kbyB9OiBUb2RvSXRlbVByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIGNvbnN0IHVwZGF0ZSA9IGFzeW5jICh0b2RvOiBUb2RvKSA9PiB7XG4gIC8vICAgYXdhaXQgZmV0Y2goYC9hcGkvdG9kb3MvJHt0b2RvLmlkfWAsIHtcbiAgLy8gICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAvLyAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgLy8gICAgIH0sXG4gIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gIC8vICAgICAgIGNvbXBsZXRlOiAhdG9kby5jb21wbGV0ZSxcbiAgLy8gICAgIH0pLFxuICAvLyAgIH0pO1xuICAvLyAgIHJvdXRlci5yZWZyZXNoKCk7XG4gIC8vIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZ2FwLTIgcC02XCI+XG5cblxuPENoZWNrYm94IFxuIG9uQ2hlY2tlZENoYW5nZT17YXN5bmMgKGV2ZW50KSA9PiB7XG5cbiAgICAgICAgICBjb25zdCBlZGl0ZWQgPSBhd2FpdCB1cGRhdGVUb2RvKHRvZG8pXG5cbiAgICAgICAgICBpZiAoZWRpdGVkKSB7XG4gICAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpXG4gICAgICAgICAgfVxuICAgICAgICB9fSBcbi8vIG9uQ2hlY2tlZENoYW5nZT17KCkgPT4gdXBkYXRlKHRvZG8pfVxuICAgICAgICAvL2NoZWNrZWQ9e3RvZG8uY29tcGxldGV9IFxuICAgICAgICAvPiB7dG9kby50aXRsZX1cbiAgICAgIDwvc3Bhbj5cblxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1zbGF0ZS04MDBcIlxuICAgICAgICBvbkNsaWNrPXthc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgICBjb25zdCBkZWxldGVkID0gYXdhaXQgZGVsZXRlVG9kbyh0b2RvLmlkKVxuXG4gICAgICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlci5yZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxJY29ucy50cmFzaCBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG5cblBvc3RJdGVtLlNrZWxldG9uID0gZnVuY3Rpb24gUG9zdEl0ZW1Ta2VsZXRvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cImgtNSB3LTIvNVwiIC8+XG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTQgdy00LzVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiSWNvbnMiLCJDaGVja2JveCIsInRvYXN0IiwidXNlUm91dGVyIiwiU2tlbGV0b24iLCJkZWxldGVUb2RvIiwidG9kb0lkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJ1cGRhdGVUb2RvIiwidG9kbyIsImlkIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21wbGV0ZSIsIlBvc3RJdGVtIiwicm91dGVyIiwic3BhbiIsImNsYXNzTmFtZSIsIm9uQ2hlY2tlZENoYW5nZSIsImV2ZW50IiwiZWRpdGVkIiwicmVmcmVzaCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImRlbGV0ZWQiLCJ0cmFzaCIsIlBvc3RJdGVtU2tlbGV0b24iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/post-item.tsx\n"));

/***/ })

});