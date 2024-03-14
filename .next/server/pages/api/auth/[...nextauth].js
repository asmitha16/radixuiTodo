"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(api)/./lib/db.tsx\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_0__.PrismaAdapter)(_lib_db__WEBPACK_IMPORTED_MODULE_1__.db),\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/login\"\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_2___default()({\n            type: \"credentials\",\n            credentials: {},\n            authorize: async (credentials, req)=>{\n                const { email , password  } = credentials;\n                // Check if the user exists in the database\n                const existingUser = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findFirst({\n                    where: {\n                        email\n                    }\n                });\n                const saltRounds = 10;\n                // If user doesn't exist, create a new user\n                if (!existingUser) {\n                    const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().hash(password, saltRounds);\n                    const newUser = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.create({\n                        data: {\n                            email,\n                            password: hashedPassword\n                        }\n                    });\n                    // Return the newly created user's information\n                    return {\n                        id: newUser.id,\n                        email: newUser.email\n                    };\n                } else {\n                    // User exists, verify the credentials\n                    const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(password, existingUser.password);\n                    if (!passwordMatch || existingUser.email !== email) {\n                        throw new Error(\"Invalid credentials\");\n                    }\n                    // Return the verified user's information\n                    return {\n                        id: existingUser.id,\n                        email: existingUser.email\n                    };\n                }\n            }\n        })\n    ],\n    callbacks: {\n        // async session({ token, session }) {\n        //   if (token) {\n        //     session.user.id = token.id;\n        //     session.user.email = token.email;\n        //   }\n        //   return session;\n        // },\n        // async jwt({ token, user }) {\n        //   if (user) {\n        //     token.id = user.id;\n        //     token.email = user.email;\n        //   }\n        //   return token;\n        // },\n        async session ({ token , session  }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.email = token.email;\n            }\n            return session;\n        },\n        async jwt ({ token , user  }) {\n            const dbUser = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findFirst({\n                where: {\n                    email: token.email\n                }\n            });\n            if (!dbUser) {\n                if (user) {\n                    token.id = user?.id;\n                }\n                return token;\n            }\n            return {\n                id: dbUser.id,\n                email: dbUser.email\n            };\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXV0aC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5RDtBQUU1QjtBQUNxQztBQUN0QztBQUdyQixNQUFNSSxjQUErQjtJQUMxQ0MsU0FBU0wsd0VBQWFBLENBQUNDLHVDQUFFQTtJQUN6QkssU0FBUztRQUNQQyxVQUFVO0lBV2Q7SUFDRUMsT0FBTztRQUNMQyxRQUFRO0lBRVY7SUFDQUMsV0FBVztRQUNUUixzRUFBbUJBLENBQUM7WUFDbEJTLE1BQU07WUFDTkMsYUFBYSxDQUFDO1lBQ2RDLFdBQVcsT0FBT0QsYUFBYUUsTUFBUTtnQkFDckMsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHSjtnQkFJNUIsMkNBQTJDO2dCQUMzQyxNQUFNSyxlQUFlLE1BQU1oQixzREFBaUIsQ0FBQztvQkFDM0NtQixPQUFPO3dCQUNMTDtvQkFDRjtnQkFDRjtnQkFFQSxNQUFNTSxhQUFhO2dCQUVuQiwyQ0FBMkM7Z0JBQzNDLElBQUksQ0FBQ0osY0FBYztvQkFDbEIsTUFBTUssaUJBQWlCLE1BQU1uQixrREFBVyxDQUFDYSxVQUFVSztvQkFDbEQsTUFBTUcsVUFBVSxNQUFNdkIsbURBQWMsQ0FBQzt3QkFDbkN5QixNQUFNOzRCQUNKWDs0QkFDQUMsVUFBV007d0JBQ2I7b0JBQ0Y7b0JBRUEsOENBQThDO29CQUM5QyxPQUFPO3dCQUNMSyxJQUFJSCxRQUFRRyxFQUFFO3dCQUNkWixPQUFPUyxRQUFRVCxLQUFLO29CQUN0QjtnQkFDRixPQUFPO29CQUNMLHNDQUFzQztvQkFDdEMsTUFBTWEsZ0JBQWlCLE1BQU16QixxREFBYyxDQUFDYSxVQUFVQyxhQUFhRCxRQUFRO29CQUMzRSxJQUFJLENBQUNZLGlCQUFrQlgsYUFBYUYsS0FBSyxLQUFLQSxPQUFPO3dCQUNuRCxNQUFNLElBQUllLE1BQU0sdUJBQXVCO29CQUN6QyxDQUFDO29CQUVELHlDQUF5QztvQkFDekMsT0FBTzt3QkFDTEgsSUFBSVYsYUFBYVUsRUFBRTt3QkFDbkJaLE9BQU9FLGFBQWFGLEtBQUs7b0JBQzNCO2dCQUNGLENBQUM7WUFDSDtRQUNGO0tBQ0Q7SUFDRGdCLFdBQVc7UUFFVCxzQ0FBc0M7UUFDdEMsaUJBQWlCO1FBQ2pCLGtDQUFrQztRQUNsQyx3Q0FBd0M7UUFDeEMsTUFBTTtRQUVOLG9CQUFvQjtRQUNwQixLQUFLO1FBQ0wsK0JBQStCO1FBQy9CLGdCQUFnQjtRQUNoQiwwQkFBMEI7UUFDMUIsZ0NBQWdDO1FBQ2hDLE1BQU07UUFDTixrQkFBa0I7UUFDbEIsS0FBSztRQUVMLE1BQU16QixTQUFRLEVBQUUwQixNQUFLLEVBQUUxQixRQUFPLEVBQUUsRUFBRTtZQUNoQyxJQUFJMEIsT0FBTztnQkFDVDFCLFFBQVFZLElBQUksQ0FBQ1MsRUFBRSxHQUFHSyxNQUFNTCxFQUFFO2dCQUMxQnJCLFFBQVFZLElBQUksQ0FBQ0gsS0FBSyxHQUFHaUIsTUFBTWpCLEtBQUs7WUFDbEMsQ0FBQztZQUVELE9BQU9UO1FBQ1Q7UUFDQSxNQUFNMkIsS0FBSSxFQUFFRCxNQUFLLEVBQUVkLEtBQUksRUFBRSxFQUFFO1lBQ3pCLE1BQU1nQixTQUFTLE1BQU1qQyxzREFBaUIsQ0FBQztnQkFDckNtQixPQUFPO29CQUNMTCxPQUFPaUIsTUFBTWpCLEtBQUs7Z0JBQ3BCO1lBQ0Y7WUFFQSxJQUFJLENBQUNtQixRQUFRO2dCQUNYLElBQUloQixNQUFNO29CQUNSYyxNQUFNTCxFQUFFLEdBQUdULE1BQU1TO2dCQUNuQixDQUFDO2dCQUNELE9BQU9LO1lBQ1QsQ0FBQztZQUVELE9BQU87Z0JBQ0xMLElBQUlPLE9BQU9QLEVBQUU7Z0JBQ2JaLE9BQU9tQixPQUFPbkIsS0FBSztZQUNyQjtRQUNGO0lBQ0Y7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGF4b25vbXkvLi9saWIvYXV0aC50cz9iZjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUFkYXB0ZXIgfSBmcm9tIFwiQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlclwiXG5pbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCB7IGRiIH0gZnJvbSBcIkAvbGliL2RiXCJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyICBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5cblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIoZGIgYXMgYW55KSxcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICAvLyAgIGp3dDogdHJ1ZSwgXG4gIC8vICAgbWF4QWdlOiAyNCAqIDYwICogNjAsIFxuICAvLyAgIHVwZGF0ZUFnZTogMjQgKiA2MCAqIDYwLCBcbiAgLy8gICBjb29raWU6IHtcbiAgLy8gICAgIG1heEFnZTogMCwgXG4gIC8vICAgICBwYXRoOiAnLycsIFxuICAvLyAgICAgLy8gaHR0cE9ubHk6IHRydWUsIFxuICAvLyAgICAgLy8gc2FtZVNpdGU6ICdsYXgnLCBcbiAgLy8gICAgIC8vIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJywgXG4gIC8vIH0sXG59LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvbG9naW5cIixcbiAgICAvLyBuZXdVc2VyIDogIFwiL3JlZ2lzdGVyXCJcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgICB0eXBlOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICBjcmVkZW50aWFsczoge30sXG4gICAgICBhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWFscywgcmVxKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscyBhcyB7XG4gICAgICAgICAgZW1haWw6IHN0cmluZztcbiAgICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgICAgICB9O1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgdXNlciBleGlzdHMgaW4gdGhlIGRhdGFiYXNlXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2FsdFJvdW5kcyA9IDEwOyBcblxuICAgICAgICAvLyBJZiB1c2VyIGRvZXNuJ3QgZXhpc3QsIGNyZWF0ZSBhIG5ldyB1c2VyXG4gICAgICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCBzYWx0Um91bmRzKTtcbiAgICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgcGFzc3dvcmQgOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBSZXR1cm4gdGhlIG5ld2x5IGNyZWF0ZWQgdXNlcidzIGluZm9ybWF0aW9uXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBuZXdVc2VyLmlkLFxuICAgICAgICAgICAgZW1haWw6IG5ld1VzZXIuZW1haWwsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBVc2VyIGV4aXN0cywgdmVyaWZ5IHRoZSBjcmVkZW50aWFsc1xuICAgICAgICAgIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSAgYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIGV4aXN0aW5nVXNlci5wYXNzd29yZCk7XG4gICAgICAgICAgaWYgKCFwYXNzd29yZE1hdGNoIHx8ICBleGlzdGluZ1VzZXIuZW1haWwgIT09IGVtYWlsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJldHVybiB0aGUgdmVyaWZpZWQgdXNlcidzIGluZm9ybWF0aW9uXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBleGlzdGluZ1VzZXIuaWQsXG4gICAgICAgICAgICBlbWFpbDogZXhpc3RpbmdVc2VyLmVtYWlsLFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgXG4gICAgLy8gYXN5bmMgc2Vzc2lvbih7IHRva2VuLCBzZXNzaW9uIH0pIHtcbiAgICAvLyAgIGlmICh0b2tlbikge1xuICAgIC8vICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcbiAgICAvLyAgICAgc2Vzc2lvbi51c2VyLmVtYWlsID0gdG9rZW4uZW1haWw7XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIHJldHVybiBzZXNzaW9uO1xuICAgIC8vIH0sXG4gICAgLy8gYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgIC8vICAgaWYgKHVzZXIpIHtcbiAgICAvLyAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgIC8vICAgICB0b2tlbi5lbWFpbCA9IHVzZXIuZW1haWw7XG4gICAgLy8gICB9XG4gICAgLy8gICByZXR1cm4gdG9rZW47XG4gICAgLy8gfSxcblxuICAgIGFzeW5jIHNlc3Npb24oeyB0b2tlbiwgc2Vzc2lvbiB9KSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWRcbiAgICAgICAgc2Vzc2lvbi51c2VyLmVtYWlsID0gdG9rZW4uZW1haWxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlc3Npb25cbiAgICB9LFxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcbiAgICAgIGNvbnN0IGRiVXNlciA9IGF3YWl0IGRiLnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBlbWFpbDogdG9rZW4uZW1haWwsXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICBpZiAoIWRiVXNlcikge1xuICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgIHRva2VuLmlkID0gdXNlcj8uaWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGRiVXNlci5pZCxcbiAgICAgICAgZW1haWw6IGRiVXNlci5lbWFpbCxcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUFkYXB0ZXIiLCJkYiIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJwYWdlcyIsInNpZ25JbiIsInByb3ZpZGVycyIsInR5cGUiLCJjcmVkZW50aWFscyIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJleGlzdGluZ1VzZXIiLCJ1c2VyIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJzYWx0Um91bmRzIiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsImNyZWF0ZSIsImRhdGEiLCJpZCIsInBhc3N3b3JkTWF0Y2giLCJjb21wYXJlIiwiRXJyb3IiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImp3dCIsImRiVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/auth.ts\n");

/***/ }),

/***/ "(api)/./lib/db.tsx":
/*!********************!*\
  !*** ./lib/db.tsx ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.cachedPrisma) {\n        global.cachedPrisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.cachedPrisma;\n}\nconst db = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU85QyxJQUFJQztBQUNKLElBQUlDLEtBQXFDLEVBQUUsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0MsWUFBWSxFQUFFO1FBQ3hCRCxPQUFPQyxZQUFZLEdBQUcsSUFBSUosd0RBQVlBO0lBQ3hDLENBQUM7SUFDREMsU0FBU0UsT0FBT0MsWUFBWTtBQUM5QixDQUFDO0FBR00sTUFBTUMsS0FBS0osT0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RheG9ub215Ly4vbGliL2RiLnRzeD9iYTRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9ICBmcm9tIFwiQHByaXNtYS9jbGllbnRcIlxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgdmFyIGNhY2hlZFByaXNtYTogUHJpc21hQ2xpZW50XG59XG5cbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudFxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLmNhY2hlZFByaXNtYSkge1xuICAgIGdsb2JhbC5jYWNoZWRQcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwuY2FjaGVkUHJpc21hXG59XG5cblxuZXhwb3J0IGNvbnN0IGRiID0gcHJpc21hXG5cblxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb2Nlc3MiLCJnbG9iYWwiLCJjYWNoZWRQcmlzbWEiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/db.tsx\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(api)/./lib/auth.ts\");\n\n\n// @see ./lib/auth\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7QUFFUTtBQUV4QyxrQkFBa0I7QUFDbEIsaUVBQWVBLGdEQUFRQSxDQUFDQyxrREFBV0EsQ0FBQ0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RheG9ub215Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcblxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiXG5cbi8vIEBzZWUgLi9saWIvYXV0aFxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();