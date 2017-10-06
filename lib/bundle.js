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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _canvas_util = __webpack_require__(464);

document.addEventListener("DOMContentLoaded", function () {
  (0, _canvas_util.draggable)();
  (0, _canvas_util.selector)();
  (0, _canvas_util.toggleSolution)();
  (0, _canvas_util.reset)();
});

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var draggable = exports.draggable = function draggable() {
  $('.shape').draggable({
    grid: [5, 5],
    containment: 'window',
    stack: '.shape'
    // snap: true,
    // snapMode: 'both',
    // snapTolerance: 13,
  });

  var angle = 45;

  $('.shape').click(function () {

    $(this).css({
      '-webkit-transform': 'rotate(' + angle + 'deg)',
      '-moz-transform': 'rotate(' + angle + 'deg)',
      '-o-transform': 'rotate(' + angle + 'deg)',
      '-ms-transform': 'rotate(' + angle + 'deg)'
    });
    angle += 45;
  });
};

var selector = exports.selector = function selector() {
  $('a').click(function (e) {
    var puzzle = e.target;
    var width = $(puzzle).css('max-width');

    $('#display-svg').attr('src', 'assets/images/' + puzzle.id + '.png').css('filter', 'contrast(0%) brightness(50%) opacity(10%)').css('max-width', width);
  });
};

var toggleSolution = exports.toggleSolution = function toggleSolution() {
  var current = $('#display-svg').css('filter');

  $('#solution-button').click(function () {
    $('#display-svg').css('filter', 'none');
  });
};

var reset = exports.reset = function reset() {
  $("#lg-triangle1").data({
    'originalLeft': $("#lg-triangle1").css('left'),
    'origionalTop': $("#lg-triangle1").css('top')
  });
  $("#lg-triangle2").data({
    'originalLeft': $("#lg-triangle2").css('left'),
    'origionalTop': $("#lg-triangle2").css('top')
  });

  $("#reset-button").click(function () {
    $("#lg-triangle1").css({
      'left': 0,
      'top': 0,
      'transform': 'rotate(0deg)'
    });
    $("#lg-triangle2").css({
      'left': 5,
      'top': -305,
      'transform': 'rotate(0deg)'
    });
    $("#sm-triangle1").css({
      'left': 75,
      'top': -380,
      'transform': 'rotate(0deg)'
    });
    $("#sm-triangle2").css({
      'left': 75,
      'top': -455,
      'transform': 'rotate(0deg)'
    });
    $("#rhomboid").css({
      'left': 0,
      'top': -385,
      'transform': 'rotate(0deg)'
    });
    $("#square").css({
      'left': 175,
      'top': -640,
      'transform': 'rotate(45deg)'
    });
    $("#med-triangle").css({
      'left': 50,
      'top': -540,
      'transform': 'rotate(0deg)'
    });
  });
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map