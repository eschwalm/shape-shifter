class Shape {
  constructor() {

  }

  SVG(tag) {
   return document.createElementNS('http://www.w3.org/2000/svg', tag);
  }
}

export default Shape;
