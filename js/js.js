/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval(" // import { $ } from '../js-libs/lib_pet';\n\nconsole.log('test'); // $('.dropdown-toggle').dropdown();\n\n$('.dropdown-toggle-mobile').dropdown();\nvar links = document.querySelectorAll('.dropdown__link');\nlinks.forEach(function (link) {\n  link.addEventListener('click', function (e) {\n    var langMenuButtonText = document.querySelectorAll('#dropdownLangButton').textContent;\n    langMenuButtonText = e.target.textContent; // Не змінюється мова у кнопці\n\n    $(\"[data-toggle-id=\\\"dropdownLangButton\\\"]\").fadeOut(300);\n  });\n});\n/* BURGER MENU ANIMATION */\n// document.querySelector('.burger').addEventListener('click', function () {\n//     this.classList.toggle('change');\n// });\n\nvar menuBars = document.getElementById('menu-bars');\nvar overlay = document.getElementById('overlay');\nvar nav1 = document.getElementById('nav-1');\nvar nav2 = document.getElementById('nav-2');\nvar nav3 = document.getElementById('nav-3');\nvar nav4 = document.getElementById('nav-4');\nvar nav5 = document.getElementById('nav-5');\nvar nav6 = document.getElementById('nav-6');\nvar navItems = [nav1, nav2, nav3, nav4, nav5, nav6]; // Control Navigation Animation\n\nfunction navAnimation(direction1, direction2) {\n  navItems.forEach(function (nav, i) {\n    nav.classList.replace(\"slide-\".concat(direction1, \"-\").concat(i + 1), \"slide-\".concat(direction2, \"-\").concat(i + 1));\n  });\n}\n\nfunction toggleNav() {\n  // Toggle: Menu Bars Open/Closed\n  menuBars.classList.toggle('change'); // Toggle: Menu Active\n\n  overlay.classList.toggle('overlay-active');\n\n  if (overlay.classList.contains('overlay-active')) {\n    // Animate In - Overlay\n    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right'); // Animate In - Nav Items\n\n    navAnimation('out', '');\n  } else {\n    // Animate Out - Overlay\n    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left'); // Animate Out - Nav Items\n\n    navAnimation('', 'out');\n  }\n} // Event Listeners\n\n\nmenuBars.addEventListener('click', toggleNav);\nnavItems.forEach(function (nav) {\n  nav.addEventListener('click', toggleNav);\n}); // $('[data-toggle=\"modal\"]').modal();\n// $('[data-tabpanel] .tab-item').tab();\n// $('.carousel').carousel();\n// $('.dropdown-toggle').dropdown();\n// const button = document.querySelector('.dropdown-toggle');\n// const langMenu = document.querySelector('.main-header__lang');\n// langMenu.addEventListener('click', (e) => {\n//     console.log(e.target);\n//     if (e.target.classList.contains('dropdown-toggle')) {\n//         console.log('1');\n//         const id = e.target.getAttribute('id');\n//         const menu = document.querySelector(`[data-toggle-id=\"${id}\"]`);\n//         console.log(menu);\n//         menu.style.display = 'block';\n//         menu.style.opacity = '1';\n//         menu.style.transition = 'all 2s';\n//         const links = document.querySelectorAll('.dropdown__link');\n//         links.forEach(link => {\n//             link.addEventListener('click', () => {\n//                 menu.style.display = 'none';\n//                 menu.style.opacity = '0';\n//                 menu.style.transition = 'all 2s';\n//             });\n//         });\n//     }\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xyXG4vLyBpbXBvcnQgeyAkIH0gZnJvbSAnLi4vanMtbGlicy9saWJfcGV0JztcclxuY29uc29sZS5sb2coJ3Rlc3QnKTtcclxuLy8gJCgnLmRyb3Bkb3duLXRvZ2dsZScpLmRyb3Bkb3duKCk7XHJcblxyXG4kKCcuZHJvcGRvd24tdG9nZ2xlLW1vYmlsZScpLmRyb3Bkb3duKCk7XHJcblxyXG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fbGluaycpO1xyXG5cclxubGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGxldCBsYW5nTWVudUJ1dHRvblRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjZHJvcGRvd25MYW5nQnV0dG9uJykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgbGFuZ01lbnVCdXR0b25UZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIC8vINCd0LUg0LfQvNGW0L3RjtGU0YLRjNGB0Y8g0LzQvtCy0LAg0YMg0LrQvdC+0L/RhtGWXHJcbiAgICAgICAgJChgW2RhdGEtdG9nZ2xlLWlkPVwiZHJvcGRvd25MYW5nQnV0dG9uXCJdYCkuZmFkZU91dCgzMDApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLyogQlVSR0VSIE1FTlUgQU5JTUFUSU9OICovXHJcblxyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ2NoYW5nZScpO1xyXG4vLyB9KTtcclxuXHJcbmNvbnN0IG1lbnVCYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtYmFycycpO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKTtcclxuY29uc3QgbmF2MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtMScpO1xyXG5jb25zdCBuYXYyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi0yJyk7XHJcbmNvbnN0IG5hdjMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LTMnKTtcclxuY29uc3QgbmF2NCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXYtNCcpO1xyXG5jb25zdCBuYXY1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdi01Jyk7XHJcbmNvbnN0IG5hdjYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2LTYnKTtcclxuY29uc3QgbmF2SXRlbXMgPSBbbmF2MSwgbmF2MiwgbmF2MywgbmF2NCwgbmF2NSwgbmF2Nl07XHJcblxyXG5cclxuLy8gQ29udHJvbCBOYXZpZ2F0aW9uIEFuaW1hdGlvblxyXG5mdW5jdGlvbiBuYXZBbmltYXRpb24oZGlyZWN0aW9uMSwgZGlyZWN0aW9uMikge1xyXG4gIG5hdkl0ZW1zLmZvckVhY2goKG5hdiwgaSkgPT4ge1xyXG4gICAgbmF2LmNsYXNzTGlzdC5yZXBsYWNlKGBzbGlkZS0ke2RpcmVjdGlvbjF9LSR7aSArIDF9YCwgYHNsaWRlLSR7ZGlyZWN0aW9uMn0tJHtpICsgMX1gKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xyXG4gIC8vIFRvZ2dsZTogTWVudSBCYXJzIE9wZW4vQ2xvc2VkXHJcbiAgbWVudUJhcnMuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XHJcbiAgLy8gVG9nZ2xlOiBNZW51IEFjdGl2ZVxyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheS1hY3RpdmUnKTtcclxuICBpZiAob3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ292ZXJsYXktYWN0aXZlJykpIHtcclxuICAgIC8vIEFuaW1hdGUgSW4gLSBPdmVybGF5XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZXBsYWNlKCdvdmVybGF5LXNsaWRlLWxlZnQnLCAnb3ZlcmxheS1zbGlkZS1yaWdodCcpO1xyXG4gICAgLy8gQW5pbWF0ZSBJbiAtIE5hdiBJdGVtc1xyXG4gICAgbmF2QW5pbWF0aW9uKCdvdXQnLCAnJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEFuaW1hdGUgT3V0IC0gT3ZlcmxheVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVwbGFjZSgnb3ZlcmxheS1zbGlkZS1yaWdodCcsICdvdmVybGF5LXNsaWRlLWxlZnQnKTtcclxuICAgIC8vIEFuaW1hdGUgT3V0IC0gTmF2IEl0ZW1zXHJcbiAgICBuYXZBbmltYXRpb24oJycsICdvdXQnKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEV2ZW50IExpc3RlbmVyc1xyXG5tZW51QmFycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdik7XHJcbm5hdkl0ZW1zLmZvckVhY2goKG5hdikgPT4ge1xyXG4gIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU5hdik7XHJcbn0pO1xyXG5cclxuXHJcbi8vICQoJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJykubW9kYWwoKTtcclxuLy8gJCgnW2RhdGEtdGFicGFuZWxdIC50YWItaXRlbScpLnRhYigpO1xyXG4vLyAkKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCgpO1xyXG4vLyAkKCcuZHJvcGRvd24tdG9nZ2xlJykuZHJvcGRvd24oKTtcclxuXHJcbi8vIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi10b2dnbGUnKTtcclxuLy8gY29uc3QgbGFuZ01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX2xhbmcnKTtcclxuXHJcbi8vIGxhbmdNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcclxuLy8gICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLXRvZ2dsZScpKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJzEnKTtcclxuLy8gICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKTtcclxuLy8gICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdG9nZ2xlLWlkPVwiJHtpZH1cIl1gKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhtZW51KTtcclxuLy8gICAgICAgICBtZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4vLyAgICAgICAgIG1lbnUuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuLy8gICAgICAgICBtZW51LnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDJzJztcclxuXHJcbi8vICAgICAgICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2xpbmsnKTtcclxuXHJcbi8vICAgICAgICAgbGlua3MuZm9yRWFjaChsaW5rID0+IHtcclxuLy8gICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIG1lbnUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuLy8gICAgICAgICAgICAgICAgIG1lbnUuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuLy8gICAgICAgICAgICAgICAgIG1lbnUuc3R5bGUudHJhbnNpdGlvbiA9ICdhbGwgMnMnO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuLy8gfSk7XHJcblxyXG5cclxuXHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ });