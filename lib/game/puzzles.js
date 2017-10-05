class Puzzle {
  constructor() {
    this.polygon = this.SVG('polygon');


    $('.current').replaceWith(this.polygon);

  }

  SVG(tag) {
   return document.createElementNS('http://www.w3.org/2000/svg', tag);
  }

  drawPuzzle() {
    let polygon = this.SVG('polygon');
    return (
      '<polygon points="0,75 150,75 75,0 0,75" fill="rgb(155, 82, 5)"/>'
    );
  }
}

export default Puzzle;
