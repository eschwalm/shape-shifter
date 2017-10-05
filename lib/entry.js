// const Game = require('./game');
import Board from './game/board';
import Shapes from './game/shapes';
import Game from './game/game';
import Puzzle from './game/puzzles';
import { draggable } from './util/canvas_util';

document.addEventListener("DOMContentLoaded", () => {
  draggable();

  $('a').click((e) => {
    console.log(e);
    let a = e.target;
    new Puzzle();
   });
});
