"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/levent/page",{

/***/ "(app-client)/./src/app/logicHandler.js":
/*!*********************************!*\
  !*** ./src/app/logicHandler.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LogicHandlerLevent; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/page */ \"(app-client)/./src/app/api/page.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ var _s = $RefreshSig$();\n\n\nfunction LogicHandlerLevent() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await (0,_api_page__WEBPACK_IMPORTED_MODULE_1__.getData)();\n            setData(response);\n        };\n        fetchData(); // Initial fetch\n        const interval = setInterval(fetchData, 2000); // Fetch data every 5 seconds\n        return ()=>{\n            clearInterval(interval); // Clean up the interval when the component unmounts\n        };\n    }, []);\n    const matrixData = {\n        firstSet: {\n            question: \"Do you want to slay?\",\n            firstUrl: \"https://www.youtube.com/watch?v=itoSgnv6Y9Y\",\n            firstStopTime: 50,\n            scenario1: {\n                choice: \"Yes\",\n                url: \"https://www.youtube.com/watch?v=3-6iAyHES3c\",\n                stopTime: 200\n            },\n            scenario2: {\n                choice: \"No\",\n                url: \"https://www.youtube.com/watch?v=awZUwBMculE\",\n                stopTime: 150\n            }\n        },\n        secondSet: {\n            question: \"What color?\",\n            scenario1: {\n                choice: \"Green\",\n                url: \"https://www.youtube.com/watch?v=OU-ekeecS4Y\",\n                stopTime: 300\n            },\n            scenario2: {\n                choice: \"Blue\",\n                url: \"https://www.youtube.com/watch?v=Ltpxk7L-bVg\",\n                stopTime: 60\n            }\n        },\n        thirdSet: {\n            question: \"What Angel?\",\n            scenario1: {\n                choice: \"Angelus\",\n                url: \"https://www.youtube.com/watch?v=N0dyIGkpMmg\",\n                stopTime: 120\n            },\n            scenario2: {\n                choice: \"Banki\",\n                url: \"https://www.youtube.com/watch?v=m2JRghbgeYw\",\n                stopTime: 190\n            }\n        },\n        provideChoice1: {\n            question: \"What Color?\",\n            choice1: \"Green\",\n            choice2: \"Blue\",\n            choice3: \"Red\"\n        },\n        provideChoice2: {\n            question: \"What Color?\",\n            choice1: \"Yellow\",\n            choice2: \"Purple\",\n            choice3: \"Black\"\n        }\n    };\n    // Determine the video URL to continue with based on the user's choice\n    const [stopTime, setStopTime] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(\"stopTime\") || matrixData.firstSet.firstStopTime);\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(\"url\") || matrixData.firstSet.firstUrl);\n    const [question, setQuestion] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(\"question\") || matrixData.firstSet.question);\n    const [choice1, setChoice1] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(\"choice1\") || matrixData.firstSet.scenario1.choice);\n    const [choice2, setChoice2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(\"choice2\") || matrixData.firstSet.scenario2.choice);\n    const [saveChoice, setSaveChoice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(\"saveChoice\") || \"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        localStorage.setItem(\"stopTime\", stopTime);\n        localStorage.setItem(\"url\", url);\n        localStorage.setItem(\"question\", question);\n        localStorage.setItem(\"choice1\", choice1);\n        localStorage.setItem(\"choice2\", choice2);\n        localStorage.setItem(\"saveChoice\", saveChoice);\n    }, [\n        stopTime,\n        url,\n        question,\n        choice1,\n        choice2,\n        saveChoice\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        switch(data === null || data === void 0 ? void 0 : data.choice){\n            case matrixData.firstSet.scenario1.choice:\n                setStopTime(matrixData.firstSet.scenario1.stopTime);\n                setUrl(matrixData.firstSet.scenario1.url);\n                setQuestion(matrixData.secondSet.question);\n                setChoice1(matrixData.secondSet.scenario1.choice);\n                setChoice2(matrixData.secondSet.scenario2.choice);\n                break;\n            case matrixData.firstSet.scenario2.choice:\n                setStopTime(matrixData.firstSet.scenario2.stopTime);\n                setUrl(matrixData.firstSet.scenario2.url);\n                setQuestion(matrixData.secondSet.question);\n                setChoice1(matrixData.secondSet.scenario1.choice);\n                setChoice2(matrixData.secondSet.scenario2.choice);\n                break;\n            case matrixData.secondSet.scenario1.choice:\n                setStopTime(matrixData.secondSet.scenario1.stopTime);\n                setUrl(matrixData.secondSet.scenario1.url);\n                setQuestion(matrixData.thirdSet.question);\n                setChoice1(matrixData.thirdSet.scenario1.choice);\n                setChoice2(matrixData.thirdSet.scenario2.choice);\n                break;\n            case matrixData.secondSet.scenario2.choice:\n                setStopTime(matrixData.secondSet.scenario2.stopTime);\n                setUrl(matrixData.secondSet.scenario2.url);\n                setQuestion(matrixData.thirdSet.question);\n                setChoice1(matrixData.thirdSet.scenario1.choice);\n                setChoice2(matrixData.thirdSet.scenario2.choice);\n                break;\n            case matrixData.provideChoice1.choice1:\n                setSaveChoice(matrixData.provideChoice1.choice1);\n                break;\n            case matrixData.provideChoice1.choice2:\n                setSaveChoice(matrixData.provideChoice1.choice2);\n                break;\n            case matrixData.provideChoice1.choice3:\n                setSaveChoice(matrixData.provideChoice1.choice3);\n                break;\n            case matrixData.provideChoice2.choice1:\n                setSaveChoice(matrixData.provideChoice2.choice1);\n                break;\n            case matrixData.provideChoice2.choice2:\n                setSaveChoice(matrixData.provideChoice2.choice2);\n                break;\n            case matrixData.provideChoice2.choice3:\n                setSaveChoice(matrixData.provideChoice2.choice3);\n                break;\n            default:\n                break;\n        }\n    }, [\n        data === null || data === void 0 ? void 0 : data.choice,\n        stopTime,\n        url,\n        question,\n        choice1,\n        choice2,\n        saveChoice\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const postDataAndUpdate = async ()=>{\n            const newData = {\n                choice1,\n                choice2,\n                question,\n                url,\n                stopTime,\n                saveChoice\n            };\n            await (0,_api_page__WEBPACK_IMPORTED_MODULE_1__.postData)(newData);\n            // Fetch the updated data\n            const response = await (0,_api_page__WEBPACK_IMPORTED_MODULE_1__.getData)();\n            setData(response);\n        };\n        // Call the function whenever any of these state variables changes\n        postDataAndUpdate();\n    }, [\n        stopTime,\n        url,\n        question,\n        choice1,\n        choice2,\n        saveChoice\n    ]);\n    return null;\n}\n_s(LogicHandlerLevent, \"FbTZ5CIQhQg4gzPIHRzhi/K39L4=\");\n_c = LogicHandlerLevent;\n;\nvar _c;\n$RefreshReg$(_c, \"LogicHandlerLevent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U1U7S0FBVztJQUV4RW5DLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNc0Msb0JBQW9CLFVBQVk7WUFDcEMsTUFBTUMsVUFBVTtnQkFDZGY7Z0JBQ0FDO2dCQUNBWjtnQkFDQUs7Z0JBQ0FDO2dCQUNBZ0I7WUFDRjtZQUNBLE1BQU1qQyxtREFBUUEsQ0FBQ3FDO1lBQ2YseUJBQXlCO1lBQ3pCLE1BQU1oQyxXQUFXLE1BQU1OLGtEQUFPQTtZQUM5QkksUUFBUUU7UUFDVjtRQUVBLGtFQUFrRTtRQUNsRStCO0lBQ0YsR0FBRztRQUFDbkI7UUFBVUQ7UUFBS0w7UUFBVVc7UUFBU0M7UUFBU1U7S0FBVztJQUkxRCxPQUNELElBQUk7QUFFTCxDQUFDO0dBNUt1QmhDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naWNIYW5kbGVyLmpzPzgxNzUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Z2V0RGF0YSwgcG9zdERhdGF9IGZyb20gJy4vYXBpL3BhZ2UnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2ljSGFuZGxlckxldmVudCAoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0RGF0YSgpO1xuICAgICAgc2V0RGF0YShyZXNwb25zZSk7XG4gICAgfTtcbiAgXG4gICAgZmV0Y2hEYXRhKCk7IC8vIEluaXRpYWwgZmV0Y2hcbiAgXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmZXRjaERhdGEsIDIwMDApOyAvLyBGZXRjaCBkYXRhIGV2ZXJ5IDUgc2Vjb25kc1xuICBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7IC8vIENsZWFuIHVwIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAgICB9O1xuICB9LCBbXSk7XG4gIFxuXG4gICAgY29uc3QgbWF0cml4RGF0YSA9IHtcbiAgICBmaXJzdFNldDoge1xuICAgICAgcXVlc3Rpb246IFwiRG8geW91IHdhbnQgdG8gc2xheT9cIixcbiAgICAgIGZpcnN0VXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9aXRvU2dudjZZOVlcIixcbiAgICAgIGZpcnN0U3RvcFRpbWU6NTAsXG4gICAgICBzY2VuYXJpbzE6IHtcbiAgICAgICAgY2hvaWNlOiBcIlllc1wiLFxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTMtNmlBeUhFUzNjJyxcbiAgICAgICAgc3RvcFRpbWU6IDIwMFxuICAgICAgfSxcbiAgICAgIHNjZW5hcmlvMjoge1xuICAgICAgICBjaG9pY2U6IFwiTm9cIixcbiAgICAgICAgdXJsOiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YXdaVXdCTWN1bEVcIixcbiAgICAgICAgc3RvcFRpbWU6IDE1MFxuICAgICAgfVxuICAgIH0sXG4gICAgc2Vjb25kU2V0OiB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IGNvbG9yP1wiLFxuICAgICAgc2NlbmFyaW8xOiB7XG4gICAgICAgIGNob2ljZTogXCJHcmVlblwiLFxuICAgICAgICB1cmw6ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU9VLWVrZWVjUzRZJyxcbiAgICAgICAgc3RvcFRpbWU6IDMwMFxuICAgICAgfSxcbiAgICAgIHNjZW5hcmlvMjoge1xuICAgICAgICBjaG9pY2U6IFwiQmx1ZVwiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1MdHB4azdMLWJWZ1wiLFxuICAgICAgICBzdG9wVGltZTogNjBcbiAgICAgIH1cbiAgICB9LFxuICAgIHRoaXJkU2V0OiB7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IEFuZ2VsP1wiLFxuICAgICAgc2NlbmFyaW8xOiB7XG4gICAgICAgIGNob2ljZTogXCJBbmdlbHVzXCIsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TjBkeUlHa3BNbWcnLFxuICAgICAgICBzdG9wVGltZTogMTIwXG4gICAgICB9LFxuICAgICAgc2NlbmFyaW8yOiB7XG4gICAgICAgIGNob2ljZTogXCJCYW5raVwiLFxuICAgICAgICB1cmw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1tMkpSZ2hiZ2VZd1wiLFxuICAgICAgICBzdG9wVGltZTogMTkwXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm92aWRlQ2hvaWNlMTp7XG4gICAgICBxdWVzdGlvbjogXCJXaGF0IENvbG9yP1wiLFxuICAgICAgY2hvaWNlMTogXCJHcmVlblwiLFxuICAgICAgY2hvaWNlMjogXCJCbHVlXCIsXG4gICAgICBjaG9pY2UzOiBcIlJlZFwiLFxuICAgIH0sXG4gICAgcHJvdmlkZUNob2ljZTI6e1xuICAgICAgcXVlc3Rpb246IFwiV2hhdCBDb2xvcj9cIixcbiAgICAgIGNob2ljZTE6IFwiWWVsbG93XCIsXG4gICAgICBjaG9pY2UyOiBcIlB1cnBsZVwiLFxuICAgICAgY2hvaWNlMzogXCJCbGFja1wiLFxuICAgIH1cbiAgfTtcblxuICAvLyBEZXRlcm1pbmUgdGhlIHZpZGVvIFVSTCB0byBjb250aW51ZSB3aXRoIGJhc2VkIG9uIHRoZSB1c2VyJ3MgY2hvaWNlXG4gIGNvbnN0IFtzdG9wVGltZSwgc2V0U3RvcFRpbWVdID0gdXNlU3RhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3BUaW1lJykgfHwgbWF0cml4RGF0YS5maXJzdFNldC5maXJzdFN0b3BUaW1lKTtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1cmwnKSB8fCBtYXRyaXhEYXRhLmZpcnN0U2V0LmZpcnN0VXJsKTtcbiAgY29uc3QgW3F1ZXN0aW9uLCBzZXRRdWVzdGlvbl0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncXVlc3Rpb24nKSB8fCBtYXRyaXhEYXRhLmZpcnN0U2V0LnF1ZXN0aW9uKTtcbiAgY29uc3QgW2Nob2ljZTEsIHNldENob2ljZTFdID0gdXNlU3RhdGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Nob2ljZTEnKSB8fCBtYXRyaXhEYXRhLmZpcnN0U2V0LnNjZW5hcmlvMS5jaG9pY2UpO1xuICBjb25zdCBbY2hvaWNlMiwgc2V0Q2hvaWNlMl0gPSB1c2VTdGF0ZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2hvaWNlMicpIHx8IG1hdHJpeERhdGEuZmlyc3RTZXQuc2NlbmFyaW8yLmNob2ljZSk7XG4gIGNvbnN0IFtzYXZlQ2hvaWNlLCBzZXRTYXZlQ2hvaWNlXSA9IHVzZVN0YXRlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlQ2hvaWNlJykgfHwgXCJcIik7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzdG9wVGltZScsIHN0b3BUaW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXJsJywgdXJsKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncXVlc3Rpb24nLCBxdWVzdGlvbik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nob2ljZTEnLCBjaG9pY2UxKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2hvaWNlMicsIGNob2ljZTIpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzYXZlQ2hvaWNlJywgc2F2ZUNob2ljZSk7XG4gIH0sIFtzdG9wVGltZSwgdXJsLCBxdWVzdGlvbiwgY2hvaWNlMSwgY2hvaWNlMiwgc2F2ZUNob2ljZV0pO1xuICBcblxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHN3aXRjaCAoZGF0YT8uY2hvaWNlKSB7XG4gICAgICAgIGNhc2UgbWF0cml4RGF0YS5maXJzdFNldC5zY2VuYXJpbzEuY2hvaWNlOlxuICAgICAgICAgIHNldFN0b3BUaW1lKG1hdHJpeERhdGEuZmlyc3RTZXQuc2NlbmFyaW8xLnN0b3BUaW1lKTtcbiAgICAgICAgICBzZXRVcmwobWF0cml4RGF0YS5maXJzdFNldC5zY2VuYXJpbzEudXJsKTtcbiAgICAgICAgICBzZXRRdWVzdGlvbihtYXRyaXhEYXRhLnNlY29uZFNldC5xdWVzdGlvbik7XG4gICAgICAgICAgc2V0Q2hvaWNlMShtYXRyaXhEYXRhLnNlY29uZFNldC5zY2VuYXJpbzEuY2hvaWNlKTtcbiAgICAgICAgICBzZXRDaG9pY2UyKG1hdHJpeERhdGEuc2Vjb25kU2V0LnNjZW5hcmlvMi5jaG9pY2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG1hdHJpeERhdGEuZmlyc3RTZXQuc2NlbmFyaW8yLmNob2ljZTpcbiAgICAgICAgICBzZXRTdG9wVGltZShtYXRyaXhEYXRhLmZpcnN0U2V0LnNjZW5hcmlvMi5zdG9wVGltZSk7XG4gICAgICAgICAgc2V0VXJsKG1hdHJpeERhdGEuZmlyc3RTZXQuc2NlbmFyaW8yLnVybCk7XG4gICAgICAgICAgc2V0UXVlc3Rpb24obWF0cml4RGF0YS5zZWNvbmRTZXQucXVlc3Rpb24pO1xuICAgICAgICAgIHNldENob2ljZTEobWF0cml4RGF0YS5zZWNvbmRTZXQuc2NlbmFyaW8xLmNob2ljZSk7XG4gICAgICAgICAgc2V0Q2hvaWNlMihtYXRyaXhEYXRhLnNlY29uZFNldC5zY2VuYXJpbzIuY2hvaWNlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBtYXRyaXhEYXRhLnNlY29uZFNldC5zY2VuYXJpbzEuY2hvaWNlOlxuICAgICAgICAgIHNldFN0b3BUaW1lKG1hdHJpeERhdGEuc2Vjb25kU2V0LnNjZW5hcmlvMS5zdG9wVGltZSk7XG4gICAgICAgICAgc2V0VXJsKG1hdHJpeERhdGEuc2Vjb25kU2V0LnNjZW5hcmlvMS51cmwpO1xuICAgICAgICAgIHNldFF1ZXN0aW9uKG1hdHJpeERhdGEudGhpcmRTZXQucXVlc3Rpb24pO1xuICAgICAgICAgIHNldENob2ljZTEobWF0cml4RGF0YS50aGlyZFNldC5zY2VuYXJpbzEuY2hvaWNlKTtcbiAgICAgICAgICBzZXRDaG9pY2UyKG1hdHJpeERhdGEudGhpcmRTZXQuc2NlbmFyaW8yLmNob2ljZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbWF0cml4RGF0YS5zZWNvbmRTZXQuc2NlbmFyaW8yLmNob2ljZTpcbiAgICAgICAgICBzZXRTdG9wVGltZShtYXRyaXhEYXRhLnNlY29uZFNldC5zY2VuYXJpbzIuc3RvcFRpbWUpO1xuICAgICAgICAgIHNldFVybChtYXRyaXhEYXRhLnNlY29uZFNldC5zY2VuYXJpbzIudXJsKTtcbiAgICAgICAgICBzZXRRdWVzdGlvbihtYXRyaXhEYXRhLnRoaXJkU2V0LnF1ZXN0aW9uKTtcbiAgICAgICAgICBzZXRDaG9pY2UxKG1hdHJpeERhdGEudGhpcmRTZXQuc2NlbmFyaW8xLmNob2ljZSk7XG4gICAgICAgICAgc2V0Q2hvaWNlMihtYXRyaXhEYXRhLnRoaXJkU2V0LnNjZW5hcmlvMi5jaG9pY2UpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG1hdHJpeERhdGEucHJvdmlkZUNob2ljZTEuY2hvaWNlMTpcbiAgICAgICAgICBzZXRTYXZlQ2hvaWNlKG1hdHJpeERhdGEucHJvdmlkZUNob2ljZTEuY2hvaWNlMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbWF0cml4RGF0YS5wcm92aWRlQ2hvaWNlMS5jaG9pY2UyOlxuICAgICAgICAgIHNldFNhdmVDaG9pY2UobWF0cml4RGF0YS5wcm92aWRlQ2hvaWNlMS5jaG9pY2UyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBtYXRyaXhEYXRhLnByb3ZpZGVDaG9pY2UxLmNob2ljZTM6XG4gICAgICAgICAgc2V0U2F2ZUNob2ljZShtYXRyaXhEYXRhLnByb3ZpZGVDaG9pY2UxLmNob2ljZTMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIG1hdHJpeERhdGEucHJvdmlkZUNob2ljZTIuY2hvaWNlMTpcbiAgICAgICAgICBzZXRTYXZlQ2hvaWNlKG1hdHJpeERhdGEucHJvdmlkZUNob2ljZTIuY2hvaWNlMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgbWF0cml4RGF0YS5wcm92aWRlQ2hvaWNlMi5jaG9pY2UyOlxuICAgICAgICAgIHNldFNhdmVDaG9pY2UobWF0cml4RGF0YS5wcm92aWRlQ2hvaWNlMi5jaG9pY2UyKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBtYXRyaXhEYXRhLnByb3ZpZGVDaG9pY2UyLmNob2ljZTM6XG4gICAgICAgICAgc2V0U2F2ZUNob2ljZShtYXRyaXhEYXRhLnByb3ZpZGVDaG9pY2UyLmNob2ljZTMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gIH0sIFtkYXRhPy5jaG9pY2UsIHN0b3BUaW1lLCB1cmwsIHF1ZXN0aW9uLCBjaG9pY2UxLCBjaG9pY2UyLCBzYXZlQ2hvaWNlXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwb3N0RGF0YUFuZFVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICAgIGNob2ljZTEsXG4gICAgICAgIGNob2ljZTIsXG4gICAgICAgIHF1ZXN0aW9uLFxuICAgICAgICB1cmwsXG4gICAgICAgIHN0b3BUaW1lLFxuICAgICAgICBzYXZlQ2hvaWNlXG4gICAgICB9O1xuICAgICAgYXdhaXQgcG9zdERhdGEobmV3RGF0YSk7XG4gICAgICAvLyBGZXRjaCB0aGUgdXBkYXRlZCBkYXRhXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldERhdGEoKTtcbiAgICAgIHNldERhdGEocmVzcG9uc2UpO1xuICAgIH1cbiAgXG4gICAgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gd2hlbmV2ZXIgYW55IG9mIHRoZXNlIHN0YXRlIHZhcmlhYmxlcyBjaGFuZ2VzXG4gICAgcG9zdERhdGFBbmRVcGRhdGUoKTtcbiAgfSwgW3N0b3BUaW1lLCB1cmwsIHF1ZXN0aW9uLCBjaG9pY2UxLCBjaG9pY2UyLCBzYXZlQ2hvaWNlXSk7XG4gIFxuXG5cbiAgcmV0dXJuIChcbiBudWxsXG4gICk7ICBcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldERhdGEiLCJwb3N0RGF0YSIsIkxvZ2ljSGFuZGxlckxldmVudCIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1hdHJpeERhdGEiLCJmaXJzdFNldCIsInF1ZXN0aW9uIiwiZmlyc3RVcmwiLCJmaXJzdFN0b3BUaW1lIiwic2NlbmFyaW8xIiwiY2hvaWNlIiwidXJsIiwic3RvcFRpbWUiLCJzY2VuYXJpbzIiLCJzZWNvbmRTZXQiLCJ0aGlyZFNldCIsInByb3ZpZGVDaG9pY2UxIiwiY2hvaWNlMSIsImNob2ljZTIiLCJjaG9pY2UzIiwicHJvdmlkZUNob2ljZTIiLCJzZXRTdG9wVGltZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRVcmwiLCJzZXRRdWVzdGlvbiIsInNldENob2ljZTEiLCJzZXRDaG9pY2UyIiwic2F2ZUNob2ljZSIsInNldFNhdmVDaG9pY2UiLCJzZXRJdGVtIiwicG9zdERhdGFBbmRVcGRhdGUiLCJuZXdEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/logicHandler.js\n"));

/***/ })

});