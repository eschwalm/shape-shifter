// const Game = require('./game');
import Board from './game/board';
import Shape from './game/shape';
import Game from './game/game';
import Puzzle from './game/puzzle';
import { draggable } from './util/canvas_util';

document.addEventListener("DOMContentLoaded", () => {
  draggable();

  $('a').click((e) => {
    let puzzle = e.target;
    let width = $(puzzle).css('max-width');
    
    $('#display-svg')
    .attr('src', `assets/images/${puzzle.id}.png`)
    .attr('filter', 'contrast(0%) brightness(50%) opacity(10%)')
    .css('max-width', width);

   });
});
