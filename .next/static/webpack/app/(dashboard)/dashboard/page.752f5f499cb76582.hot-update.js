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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostItem\": function() { return /* binding */ PostItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.3.2-canary.13_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icons */ \"(app-client)/./components/icons.tsx\");\n/* harmony import */ var _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/checkbox */ \"(app-client)/./components/ui/checkbox.tsx\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-client)/./components/ui/use-toast.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/.pnpm/next@13.3.2-canary.13_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/skeleton */ \"(app-client)/./components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ PostItem auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function deleteTodo(todoId) {\n    const response = await fetch(\"/api/todos/\".concat(todoId), {\n        method: \"DELETE\"\n    });\n    if (!(response === null || response === void 0 ? void 0 : response.ok)) {\n        (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.toast)({\n            title: \"Something went wrong.\",\n            description: \"Your post was not deleted. Please try again.\",\n            variant: \"destructive\"\n        });\n    }\n    return true;\n}\nfunction PostItem(param) {\n    let { todo  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // const deleteTodo = async (todo: Todo) => {\n    //  const response =  await fetch(`/api/todo/${todo.id}`, {\n    //     method: \"DELETE\",\n    //     headers: {\n    //       \"Content-Type\": \"application/json\",\n    //     },\n    //     body: JSON.stringify({\n    //       id: todo.id,\n    //     }),\n    //   });\n    //   if (!response?.ok) {\n    //     console.log(response)\n    //     toast({\n    //       title: \"Something went wrong.\",\n    //       description: \"Your task was not deleted. Please try again.\",\n    //       variant: \"destructive\",\n    //     })\n    //   }\n    //   router.refresh();\n    //   return true\n    // }; \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"flex flex-1 gap-2 p-6\",\n                children: todo.complete ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                            defaultChecked: true\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this),\n                        \" \",\n                        todo.title\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {}, void 0, false, {\n                            fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        \" \",\n                        todo.title\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mr-3 text-slate-500 hover:text-slate-800\",\n                onClick: async (event)=>{\n                    event.preventDefault();\n                    // setIsDeleteLoading(true)\n                    const deleted = await deleteTodo(todo.id);\n                    if (deleted) {\n                        // setIsDeleteLoading(false)\n                        // setShowDeleteAlert(false)\n                        router.refresh();\n                    }\n                },\n                onClick: ()=>deleteTodo(todo.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.trash, {\n                    className: \"mr-2 h-4 w-4\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PostItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = PostItem;\nPostItem.Skeleton = function PostItemSkeleton() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                    className: \"h-5 w-2/5\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                    className: \"h-4 w-4/5\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n            lineNumber: 94,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n};\nvar _c;\n$RefreshReg$(_c, \"PostItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wb3N0LWl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkM7QUFDUztBQUVIO0FBQ0w7QUFDSDtBQU16QyxlQUFlSyxXQUFXQyxNQUFjLEVBQUU7SUFDeEMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGNBQXFCLE9BQVBGLFNBQVU7UUFDbkRHLFFBQVE7SUFDVjtJQUVBLElBQUksQ0FBQ0YsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVRyxFQUFFLEdBQUU7UUFDakJSLCtEQUFLQSxDQUFDO1lBQ0pTLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxTQUFTO1FBQ1g7SUFDRixDQUFDO0lBQ0QsT0FBTyxJQUFJO0FBQ2I7QUFHTyxTQUFTQyxTQUFTLEtBQXVCLEVBQUU7UUFBekIsRUFBRUMsS0FBSSxFQUFpQixHQUF2Qjs7SUFDdkIsTUFBTUMsU0FBU2IsMERBQVNBO0lBRXhCLDZDQUE2QztJQUM3QywyREFBMkQ7SUFDM0Qsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQiw0Q0FBNEM7SUFDNUMsU0FBUztJQUNULDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMscUVBQXFFO0lBQ3JFLGdDQUFnQztJQUNoQyxTQUFTO0lBQ1QsTUFBTTtJQUVOLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFFaEIsTUFBTTtJQUVOLHFCQUNFOzswQkFDRSw4REFBQ2M7Z0JBQUtDLFdBQVU7MEJBQ2JILEtBQUtJLFFBQVEsaUJBQ1o7O3NDQUNFLDhEQUFDbEIsNkRBQVFBOzRCQUFDbUIsY0FBYzs7Ozs7O3dCQUFHO3dCQUFFTCxLQUFLSixLQUFLOztpREFHekM7O3NDQUNFLDhEQUFDViw2REFBUUE7Ozs7O3dCQUFHO3dCQUFFYyxLQUFLSixLQUFLOztnQ0FFM0I7Ozs7OzswQkFFSCw4REFBQ1U7Z0JBQ0NILFdBQVU7Z0JBQ1ZJLFNBQVMsT0FBT0MsUUFBVTtvQkFDeEJBLE1BQU1DLGNBQWM7b0JBQ3BCLDJCQUEyQjtvQkFFM0IsTUFBTUMsVUFBVSxNQUFNcEIsV0FBV1UsS0FBS1csRUFBRTtvQkFFeEMsSUFBSUQsU0FBUzt3QkFDWCw0QkFBNEI7d0JBQzVCLDRCQUE0Qjt3QkFDNUJULE9BQU9XLE9BQU87b0JBQ2hCLENBQUM7Z0JBQ0g7Z0JBQ0FMLFNBQVMsSUFBTWpCLFdBQVdVLEtBQUtXLEVBQUU7MEJBRWpDLDRFQUFDMUIsMERBQVc7b0JBQUNrQixXQUFVOzs7Ozs7Ozs7Ozs7O0FBSS9CLENBQUM7R0E1RGVKOztRQUNDWCxzREFBU0E7OztLQURWVztBQThEaEJBLFNBQVNWLFFBQVEsR0FBRyxTQUFTeUIsbUJBQW1CO0lBQzlDLHFCQUNFLDhEQUFDQztRQUFJWixXQUFVO2tCQUNiLDRFQUFDWTtZQUFJWixXQUFVOzs4QkFDYiw4REFBQ2Qsa0RBQVFBO29CQUFDYyxXQUFVOzs7Ozs7OEJBQ3BCLDhEQUFDZCxrREFBUUE7b0JBQUNjLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdC1pdGVtLnRzeD80ODllIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvaWNvbnNcIjtcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jaGVja2JveFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCIuL3VpL3NrZWxldG9uXCI7XG5cbmludGVyZmFjZSBUb2RvSXRlbVByb3BzIHtcbiAgdG9kbzogUGljazxUb2RvLCBcImlkXCIgfCBcInRpdGxlXCIgfCBcImNvbXBsZXRlXCIgPjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlVG9kbyh0b2RvSWQ6IHN0cmluZykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3RvZG9zLyR7dG9kb0lkfWAsIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gIH0pXG5cbiAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICB0b2FzdCh7XG4gICAgICB0aXRsZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgcG9zdCB3YXMgbm90IGRlbGV0ZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgfSlcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBQb3N0SXRlbSh7IHRvZG8gfTogVG9kb0l0ZW1Qcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyBjb25zdCBkZWxldGVUb2RvID0gYXN5bmMgKHRvZG86IFRvZG8pID0+IHtcbiAgLy8gIGNvbnN0IHJlc3BvbnNlID0gIGF3YWl0IGZldGNoKGAvYXBpL3RvZG8vJHt0b2RvLmlkfWAsIHtcbiAgLy8gICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgLy8gICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIC8vICAgICB9LFxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAvLyAgICAgICBpZDogdG9kby5pZCxcbiAgLy8gICAgIH0pLFxuICAvLyAgIH0pO1xuICAvLyAgIGlmICghcmVzcG9uc2U/Lm9rKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgLy8gICAgIHRvYXN0KHtcbiAgLy8gICAgICAgdGl0bGU6IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcuXCIsXG4gIC8vICAgICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgdGFzayB3YXMgbm90IGRlbGV0ZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gIC8vICAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgLy8gICAgIH0pXG4gIC8vICAgfVxuXG4gIC8vICAgcm91dGVyLnJlZnJlc2goKTtcbiAgLy8gICByZXR1cm4gdHJ1ZVxuXG4gIC8vIH07IFxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZsZXggZmxleC0xIGdhcC0yIHAtNlwiPlxuICAgICAgICB7dG9kby5jb21wbGV0ZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPENoZWNrYm94IGRlZmF1bHRDaGVja2VkIC8+IHt0b2RvLnRpdGxlfVxuICAgICAgICAgIDwvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8Q2hlY2tib3ggLz4ge3RvZG8udGl0bGV9XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L3NwYW4+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cIm1yLTMgdGV4dC1zbGF0ZS01MDAgaG92ZXI6dGV4dC1zbGF0ZS04MDBcIlxuICAgICAgICBvbkNsaWNrPXthc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgLy8gc2V0SXNEZWxldGVMb2FkaW5nKHRydWUpXG5cbiAgICAgICAgICBjb25zdCBkZWxldGVkID0gYXdhaXQgZGVsZXRlVG9kbyh0b2RvLmlkKVxuXG4gICAgICAgICAgaWYgKGRlbGV0ZWQpIHtcbiAgICAgICAgICAgIC8vIHNldElzRGVsZXRlTG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgIC8vIHNldFNob3dEZWxldGVBbGVydChmYWxzZSlcbiAgICAgICAgICAgIHJvdXRlci5yZWZyZXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8odG9kby5pZCl9XG4gICAgICA+XG4gICAgICAgIDxJY29ucy50cmFzaCBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIiAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG5cblBvc3RJdGVtLlNrZWxldG9uID0gZnVuY3Rpb24gUG9zdEl0ZW1Ta2VsZXRvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgPFNrZWxldG9uIGNsYXNzTmFtZT1cImgtNSB3LTIvNVwiIC8+XG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTQgdy00LzVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiSWNvbnMiLCJDaGVja2JveCIsInRvYXN0IiwidXNlUm91dGVyIiwiU2tlbGV0b24iLCJkZWxldGVUb2RvIiwidG9kb0lkIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsIm9rIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJQb3N0SXRlbSIsInRvZG8iLCJyb3V0ZXIiLCJzcGFuIiwiY2xhc3NOYW1lIiwiY29tcGxldGUiLCJkZWZhdWx0Q2hlY2tlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZGVsZXRlZCIsImlkIiwicmVmcmVzaCIsInRyYXNoIiwiUG9zdEl0ZW1Ta2VsZXRvbiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/post-item.tsx\n"));

/***/ })

});