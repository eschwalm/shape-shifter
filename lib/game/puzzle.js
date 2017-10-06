class Puzzle {
  constructor(puzzle) {
    const polygon = this.SVG('polygon');


    $('.current').replaceWith(polygon);

  }

  SVG(tag) {
   return document.createElementNS('http://www.w3.org/2000/svg', tag);
  }

}

export default Puzzle;
