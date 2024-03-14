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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostItem\": function() { return /* binding */ PostItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/.pnpm/next@13.3.2-canary.13_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/icons */ \"(app-client)/./components/icons.tsx\");\n/* harmony import */ var _components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/checkbox */ \"(app-client)/./components/ui/checkbox.tsx\");\n/* harmony import */ var _components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/use-toast */ \"(app-client)/./components/ui/use-toast.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/.pnpm/next@13.3.2-canary.13_@babel+core@7.21.4_@opentelemetry+api@1.1.0_react-dom@18.2.0_react@18.2.0/node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/skeleton */ \"(app-client)/./components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ PostItem auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function deleteTodo(todoId) {\n    const response = await fetch(\"/api/todos/\".concat(todoId), {\n        method: \"DELETE\"\n    });\n    if (!(response === null || response === void 0 ? void 0 : response.ok)) {\n        (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.toast)({\n            title: \"Something went wrong.\",\n            description: \"Your post was not deleted. Please try again.\",\n            variant: \"destructive\"\n        });\n    }\n    return true;\n}\nasync function updateTodo(todo) {\n    const response = await fetch(\"/api/todos/\".concat(todo.id), {\n        method: \"PATCH\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            complete: !todo.complete\n        })\n    });\n    if (!(response === null || response === void 0 ? void 0 : response.ok)) {\n        (0,_components_ui_use_toast__WEBPACK_IMPORTED_MODULE_3__.toast)({\n            title: \"Something went wrong.\",\n            description: \"Your post was not deleted. Please try again.\",\n            variant: \"destructive\"\n        });\n    }\n    return true;\n}\nfunction PostItem(param) {\n    let { todo  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const update = async (todo)=>{\n        await fetch(\"/api/todos/\".concat(todo.id), {\n            method: \"PATCH\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                complete: !todo.complete\n            })\n        });\n        router.refresh();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"flex flex-1 gap-2 p-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {\n                        //  onCheckedChange={async (event) => {\n                        //           const edited = await updateTodo(todo)\n                        //           if (edited) {\n                        //             router.refresh()\n                        //           }\n                        //         }} \n                        onCheckedChange: ()=>update(todo),\n                        checked: todo.complete\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 1\n                    }, this),\n                    \" \",\n                    todo.title\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"mr-3 text-slate-500 hover:text-slate-800\",\n                onClick: async (event)=>{\n                    event.preventDefault();\n                    const deleted = await deleteTodo(todo.id);\n                    if (deleted) {\n                        router.refresh();\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_icons__WEBPACK_IMPORTED_MODULE_1__.Icons.trash, {\n                    className: \"mr-2 h-4 w-4\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(PostItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = PostItem;\nPostItem.Skeleton = function PostItemSkeleton() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                    className: \"h-5 w-2/5\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {\n                    className: \"h-4 w-4/5\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Volumes/Projects/radixTODO/radixuiTodo/components/post-item.tsx\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n};\nvar _c;\n$RefreshReg$(_c, \"PostItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9wb3N0LWl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMkM7QUFDUztBQUVIO0FBQ0w7QUFDSDtBQVl6QyxlQUFlSyxXQUFXQyxNQUFjLEVBQUU7SUFDeEMsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGNBQXFCLE9BQVBGLFNBQVU7UUFDbkRHLFFBQVE7SUFDVjtJQUVBLElBQUksQ0FBQ0YsQ0FBQUEscUJBQUFBLHNCQUFBQSxLQUFBQSxJQUFBQSxTQUFVRyxFQUFFLEdBQUU7UUFDakJSLCtEQUFLQSxDQUFDO1lBQ0pTLE9BQU87WUFDUEMsYUFBYTtZQUNiQyxTQUFTO1FBQ1g7SUFDRixDQUFDO0lBQ0QsT0FBTyxJQUFJO0FBQ2I7QUFFQSxlQUFlQyxXQUFXQyxJQUFVLEVBQUU7SUFDcEMsTUFBTVIsV0FBVyxNQUFNQyxNQUFNLGNBQXNCLE9BQVJPLEtBQUtDLEVBQUUsR0FBSTtRQUNwRFAsUUFBUTtRQUNSUSxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO1FBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNuQkMsVUFBVSxDQUFDTixLQUFLTSxRQUFRO1FBQzFCO0lBQ0Y7SUFFQSxJQUFJLENBQUNkLENBQUFBLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVUcsRUFBRSxHQUFFO1FBQ2pCUiwrREFBS0EsQ0FBQztZQUNKUyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsU0FBUztRQUNYO0lBQ0YsQ0FBQztJQUNELE9BQU8sSUFBSTtBQUNiO0FBSU8sU0FBU1MsU0FBUyxLQUF1QixFQUFFO1FBQXpCLEVBQUVQLEtBQUksRUFBaUIsR0FBdkI7O0lBQ3ZCLE1BQU1RLFNBQVNwQiwwREFBU0E7SUFFeEIsTUFBTXFCLFNBQVMsT0FBT1QsT0FBZTtRQUNuQyxNQUFNUCxNQUFNLGNBQXNCLE9BQVJPLEtBQUtDLEVBQUUsR0FBSTtZQUNuQ1AsUUFBUTtZQUNSUSxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ25CQyxVQUFVLENBQUNOLEtBQUtNLFFBQVE7WUFDMUI7UUFDRjtRQUNBRSxPQUFPRSxPQUFPO0lBQ2hCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBS0MsV0FBVTs7a0NBR3RCLDhEQUFDMUIsNkRBQVFBO3dCQUNULHVDQUF1Qzt3QkFFdkMsa0RBQWtEO3dCQUVsRCwwQkFBMEI7d0JBQzFCLCtCQUErQjt3QkFDL0IsY0FBYzt3QkFDZCxjQUFjO3dCQUNkMkIsaUJBQWlCLElBQU1KLE9BQU9UO3dCQUN0QmMsU0FBU2QsS0FBS00sUUFBUTs7Ozs7O29CQUNwQjtvQkFBRU4sS0FBS0osS0FBSzs7Ozs7OzswQkFJaEIsOERBQUNtQjtnQkFDQ0gsV0FBVTtnQkFDVkksU0FBUyxPQUFPQyxRQUFVO29CQUN4QkEsTUFBTUMsY0FBYztvQkFFcEIsTUFBTUMsVUFBVSxNQUFNN0IsV0FBV1UsS0FBS0MsRUFBRTtvQkFFeEMsSUFBSWtCLFNBQVM7d0JBQ1hYLE9BQU9FLE9BQU87b0JBQ2hCLENBQUM7Z0JBQ0g7MEJBRUEsNEVBQUN6QiwwREFBVztvQkFBQzJCLFdBQVU7Ozs7Ozs7Ozs7Ozs7QUFJL0IsQ0FBQztHQXBEZUw7O1FBQ0NuQixzREFBU0E7OztLQURWbUI7QUFzRGhCQSxTQUFTbEIsUUFBUSxHQUFHLFNBQVNnQyxtQkFBbUI7SUFDOUMscUJBQ0UsOERBQUNDO1FBQUlWLFdBQVU7a0JBQ2IsNEVBQUNVO1lBQUlWLFdBQVU7OzhCQUNiLDhEQUFDdkIsa0RBQVFBO29CQUFDdUIsV0FBVTs7Ozs7OzhCQUNwQiw4REFBQ3ZCLGtEQUFRQTtvQkFBQ3VCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcG9zdC1pdGVtLnRzeD80ODllIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBJY29ucyB9IGZyb20gXCJAL2NvbXBvbmVudHMvaWNvbnNcIjtcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9jaGVja2JveFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3VzZS10b2FzdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBTa2VsZXRvbiB9IGZyb20gXCIuL3VpL3NrZWxldG9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWxlcnREaWFsb2csIEFsZXJ0RGlhbG9nQWN0aW9uLCBBbGVydERpYWxvZ0NhbmNlbCwgQWxlcnREaWFsb2dDb250ZW50LCBBbGVydERpYWxvZ0Rlc2NyaXB0aW9uLCBBbGVydERpYWxvZ1RpdGxlIH0gZnJvbSBcIkByYWRpeC11aS9yZWFjdC1hbGVydC1kaWFsb2dcIjtcbmltcG9ydCB7IEFsZXJ0RGlhbG9nSGVhZGVyLCBBbGVydERpYWxvZ0Zvb3RlciB9IGZyb20gXCIuL3VpL2FsZXJ0LWRpYWxvZ1wiO1xuaW1wb3J0IHsgYnV0dG9uVmFyaWFudHMgfSBmcm9tIFwiLi91aS9idXR0b25cIjtcbmltcG9ydCB7IGNuIH0gZnJvbSBcIkAvbGliL3V0aWxzXCI7XG5cblxuaW50ZXJmYWNlIFRvZG9JdGVtUHJvcHMge1xuICB0b2RvOiBQaWNrPFRvZG8sIFwiaWRcIiB8IFwidGl0bGVcIiB8IFwiY29tcGxldGVcIiB8IFwiY3JlYXRlZEF0XCIgfCBcInVwZGF0ZWRBdFwiIHwgXCJ1c2VySWRcIiA+O1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG9JZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvdG9kb3MvJHt0b2RvSWR9YCwge1xuICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgfSlcblxuICBpZiAoIXJlc3BvbnNlPy5vaykge1xuICAgIHRvYXN0KHtcbiAgICAgIHRpdGxlOiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiWW91ciBwb3N0IHdhcyBub3QgZGVsZXRlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgIHZhcmlhbnQ6IFwiZGVzdHJ1Y3RpdmVcIixcbiAgICB9KVxuICB9XG4gIHJldHVybiB0cnVlXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRvZG8odG9kbzogVG9kbykge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3RvZG9zLyR7dG9kby5pZH1gLCB7XG4gICAgbWV0aG9kOiBcIlBBVENIXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBjb21wbGV0ZTogIXRvZG8uY29tcGxldGUsXG4gICAgfSksXG4gIH0pXG5cbiAgaWYgKCFyZXNwb25zZT8ub2spIHtcbiAgICB0b2FzdCh7XG4gICAgICB0aXRsZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZy5cIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgcG9zdCB3YXMgbm90IGRlbGV0ZWQuIFBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICB2YXJpYW50OiBcImRlc3RydWN0aXZlXCIsXG4gICAgfSlcbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5cblxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RJdGVtKHsgdG9kbyB9OiBUb2RvSXRlbVByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHVwZGF0ZSA9IGFzeW5jICh0b2RvOiBUb2RvKSA9PiB7XG4gICAgYXdhaXQgZmV0Y2goYC9hcGkvdG9kb3MvJHt0b2RvLmlkfWAsIHtcbiAgICAgIG1ldGhvZDogXCJQQVRDSFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGNvbXBsZXRlOiAhdG9kby5jb21wbGV0ZSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIHJvdXRlci5yZWZyZXNoKCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmxleCBmbGV4LTEgZ2FwLTIgcC02XCI+XG5cblxuPENoZWNrYm94IFxuLy8gIG9uQ2hlY2tlZENoYW5nZT17YXN5bmMgKGV2ZW50KSA9PiB7XG5cbi8vICAgICAgICAgICBjb25zdCBlZGl0ZWQgPSBhd2FpdCB1cGRhdGVUb2RvKHRvZG8pXG5cbi8vICAgICAgICAgICBpZiAoZWRpdGVkKSB7XG4vLyAgICAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9fSBcbm9uQ2hlY2tlZENoYW5nZT17KCkgPT4gdXBkYXRlKHRvZG8pfVxuICAgICAgICBjaGVja2VkPXt0b2RvLmNvbXBsZXRlfSBcbiAgICAgICAgLz4ge3RvZG8udGl0bGV9XG4gICAgICA8L3NwYW4+XG5cblxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJtci0zIHRleHQtc2xhdGUtNTAwIGhvdmVyOnRleHQtc2xhdGUtODAwXCJcbiAgICAgICAgb25DbGljaz17YXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgICAgY29uc3QgZGVsZXRlZCA9IGF3YWl0IGRlbGV0ZVRvZG8odG9kby5pZClcblxuICAgICAgICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpXG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SWNvbnMudHJhc2ggY2xhc3NOYW1lPVwibXItMiBoLTQgdy00XCIgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuXG5Qb3N0SXRlbS5Ta2VsZXRvbiA9IGZ1bmN0aW9uIFBvc3RJdGVtU2tlbGV0b24oKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0zXCI+XG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTUgdy0yLzVcIiAvPlxuICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwiaC00IHctNC81XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbIkljb25zIiwiQ2hlY2tib3giLCJ0b2FzdCIsInVzZVJvdXRlciIsIlNrZWxldG9uIiwiZGVsZXRlVG9kbyIsInRvZG9JZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJvayIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ2YXJpYW50IiwidXBkYXRlVG9kbyIsInRvZG8iLCJpZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbXBsZXRlIiwiUG9zdEl0ZW0iLCJyb3V0ZXIiLCJ1cGRhdGUiLCJyZWZyZXNoIiwic3BhbiIsImNsYXNzTmFtZSIsIm9uQ2hlY2tlZENoYW5nZSIsImNoZWNrZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRlbGV0ZWQiLCJ0cmFzaCIsIlBvc3RJdGVtU2tlbGV0b24iLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/post-item.tsx\n"));

/***/ })

});