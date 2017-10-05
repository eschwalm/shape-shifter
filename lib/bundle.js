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

var _shapes = __webpack_require__(462);

var _shapes2 = _interopRequireDefault(_shapes);

var _game = __webpack_require__(463);

var _game2 = _interopRequireDefault(_game);

var _puzzles = __webpack_require__(465);

var _puzzles2 = _interopRequireDefault(_puzzles);

var _canvas_util = __webpack_require__(464);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener("DOMContentLoaded", function () {
  (0, _canvas_util.draggable)();

  $('a').click(function (e) {
    console.log(e);
    var a = e.target;
    new _puzzles2.default();
  });
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

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shapes = function Shapes() {
  _classCallCheck(this, Shapes);
};

exports.default = Shapes;

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _board = __webpack_require__(2);

var _board2 = _interopRequireDefault(_board);

var _shapes = __webpack_require__(462);

var _shapes2 = _interopRequireDefault(_shapes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function Game() {
  _classCallCheck(this, Game);

  var board = new _board2.default();
  var shapes = new _shapes2.default();
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
    // .bind('mousedown', function(event, ui){
    //   $(event.target.parentElement).append( event.target );
    // })
    // .bind('drag', function(event, ui){
    //   event.target.setAttribute('x', ui.position.left);
    //   event.target.setAttribute('y', ui.position.top);
    // });

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

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Puzzle = function () {
  function Puzzle() {
    _classCallCheck(this, Puzzle);

    this.polygon = this.SVG('polygon');

    $('.current').replaceWith(this.polygon);
  }

  _createClass(Puzzle, [{
    key: 'SVG',
    value: function SVG(tag) {
      return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }
  }, {
    key: 'drawPuzzle',
    value: function drawPuzzle() {
      var polygon = this.SVG('polygon');
      return '<polygon points="0,75 150,75 75,0 0,75" fill="rgb(155, 82, 5)"/>';
    }
  }]);

  return Puzzle;
}();

exports.default = Puzzle;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map