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


var _board = __webpack_require__(2);

var _board2 = _interopRequireDefault(_board);

var _shape = __webpack_require__(466);

var _shape2 = _interopRequireDefault(_shape);

var _game = __webpack_require__(463);

var _game2 = _interopRequireDefault(_game);

var _puzzle = __webpack_require__(467);

var _puzzle2 = _interopRequireDefault(_puzzle);

var _canvas_util = __webpack_require__(464);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  (0, _canvas_util.draggable)();
  (0, _canvas_util.selector)();
  (0, _canvas_util.toggleSolution)();
  (0, _canvas_util.reset)();
}); // const Game = require('./game');

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function Board() {
  _classCallCheck(this, Board);
};

exports.default = Board;

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _board = __webpack_require__(2);

var _board2 = _interopRequireDefault(_board);

var _shape = __webpack_require__(466);

var _shape2 = _interopRequireDefault(_shape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game() {
  _classCallCheck(this, Game);

  var board = new _board2.default();
  var shape = new _shape2.default();
};

exports.default = Game;

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
      'top': 0
    });
    $("#lg-triangle2").css({
      'left': 5,
      'top': -305
    });
    $("#sm-triangle1").css({
      'left': 75,
      'top': -380
    });
    $("#sm-triangle2").css({
      'left': 75,
      'top': -455
    });
    $("#rhomboid").css({
      'left': 0,
      'top': -385
    });
    $("#square").css({
      'left': 175,
      'top': -640,
      'transform': 'rotate(45deg)'
    });
    $("#med-triangle").css({
      'left': 50,
      'top': -540
    });
  });
};

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
  function Shape() {
    _classCallCheck(this, Shape);
  }

  _createClass(Shape, [{
    key: 'SVG',
    value: function SVG(tag) {
      return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }
  }]);

  return Shape;
}();

exports.default = Shape;

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Puzzle = function () {
  function Puzzle(puzzle) {
    _classCallCheck(this, Puzzle);

    var polygon = this.SVG('polygon');

    $('.current').replaceWith(polygon);
  }

  _createClass(Puzzle, [{
    key: 'SVG',
    value: function SVG(tag) {
      return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }
  }]);

  return Puzzle;
}();

exports.default = Puzzle;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map