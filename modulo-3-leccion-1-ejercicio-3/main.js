"use strict";

let side;
let numberOfSides;
let base;
let height;

class Polygon {
  perimeter() {
    const calculatePerimeter = base * numberOfSides;
    return calculatePerimeter;
  }

  area() {
    const calculateArea = base * height;
  }
}

class Triangle extends Polygon {
  constructor(height, base) {
    super(height, 3);
    this.base = base;
  }
  side = base;
}

class Square extends Polygon {
  constructor(base, height) {
    super(base, 4);
    this.height = height;
  }
  areaSquare() {
    const areaSquare = super.area() / 2;
    return areaSquare;
  }
}

const square = new Polygon(4);
const triangle = new Polygon(4, 3);

square.perimeter();
