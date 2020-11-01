"use strict";

class Polygon {
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  perimeter() {
    const calculatePerimeter = this.base * this.numberOfSides;
    return calculatePerimeter;
  }

  area() {
    const calculateArea = this.base * this.height;
    return calculateArea;
  }
}

class Square extends Polygon {
  constructor(side) {
    super(4, side, side);
    this.side = side;
  }
}

class Triangle extends Polygon {
  constructor(base, height) {
    super(3, base, height);
  }
  area() {
    return super.area() / 2;
  }
}

const square = new Square(4);
const triangle = new Triangle(4, 3);

console.log(triangle.area());
console.log(square.area());
console.log(triangle.perimeter());
console.log(square.perimeter());
