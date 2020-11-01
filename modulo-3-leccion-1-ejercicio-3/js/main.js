"use strict";

export class Polygon {
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
