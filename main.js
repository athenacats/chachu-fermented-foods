/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homepage */ \"./src/modules/homepage.js\");\n\n\n/* function component() {\n  const content = document.getElementById(\"content\");\n  content.appendChild(header);\n} */\n\nconst content = document.getElementById(\"content\");\ncontent.appendChild(_modules_homepage__WEBPACK_IMPORTED_MODULE_0__.header);\ncontent.appendChild(_modules_homepage__WEBPACK_IMPORTED_MODULE_0__.container);\n\n\n//# sourceURL=webpack://chachu-fermented-foods/./src/index.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"container\": () => (/* binding */ container),\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nconst header = document.createElement(\"div\");\nconst title = document.createElement(\"h1\");\ntitle.textContent = \"Chachu Fermented Foods\";\ntitle.classList.add(\"title\");\nheader.classList.add(\"header\");\nheader.appendChild(title);\n\nconst navigation = document.createElement(\"div\");\nnavigation.classList.add(\"navigation\");\nconst ul = document.createElement(\"ul\");\nnavigation.appendChild(ul);\nconst li1 = document.createElement(\"li\");\nconst li2 = document.createElement(\"li\");\nconst li3 = document.createElement(\"li\");\nconst text1 = document.createTextNode(\"Home\");\nconst text2 = document.createTextNode(\"Menu\");\nconst text3 = document.createTextNode(\"Contact\");\nli1.appendChild(text1);\nli2.appendChild(text2);\nli3.appendChild(text3);\nul.appendChild(li1);\nul.appendChild(li2);\nul.appendChild(li3);\nheader.appendChild(navigation);\n\nconst container = document.createElement(\"div\");\ncontainer.classList.add(\"container\");\nconst about = document.createElement(\"div\");\nabout.classList.add(\"about\");\nconst aboutTitle = document.createElement(\"h3\");\naboutTitle.classList.add(\"aboutTitle\");\naboutTitle.textContent = \"Why Eat Fermented Foods?\";\nabout.appendChild(aboutTitle);\nconst aboutText1 = document.createElement(\"p\");\naboutText1.classList.add(\"aboutText1\");\naboutText1.textContent =\n  \"Fermented foods are packed with probiotics—the good bacteria grow during the fermentation process—and eating them is one way to boost your gut health (eating more foods that are high in fiber, particularly prebiotic-rich foods, is important for gut health, too).\";\nabout.appendChild(aboutText1);\nconst aboutText2 = document.createElement(\"p\");\naboutText2.classList.add(\"aboutText2\");\naboutText2.textContent =\n  \"Check out the different gut friendly foods we have below!\";\nabout.appendChild(aboutText2);\ncontainer.appendChild(about);\n\n\n\n\n//# sourceURL=webpack://chachu-fermented-foods/./src/modules/homepage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;