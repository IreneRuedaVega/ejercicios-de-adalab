"use strict";

class Square {
  perimeter(side) {
    let n = 4;
    const calculatePerimeter = side * n;
    console.log(calculatePerimeter);
  }
  area(side) {
    const calculateArea = Math.pow(side, 2);
    console.log(calculateArea);
  }
}

const perimeterSquare = new Square();
const areaSquare = new Square();

perimeterSquare.perimeter(9);
areaSquare.area(9);
