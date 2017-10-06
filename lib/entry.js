import { selector, draggable, toggleSolution, reset } from './util/canvas_util';

document.addEventListener("DOMContentLoaded", () => {
  draggable();
  selector();
  toggleSolution();
  reset();
});
