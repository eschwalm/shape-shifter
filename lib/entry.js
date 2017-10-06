// const Game = require('./game');
import Board from './game/board';
import Shape from './game/shape';
import Game from './game/game';
import Puzzle from './game/puzzle';
import { selector, draggable, toggleSolution, reset } from './util/canvas_util';

document.addEventListener("DOMContentLoaded", () => {
  draggable();
  selector();
  toggleSolution();
  reset();
});
