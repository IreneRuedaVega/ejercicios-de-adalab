"use strict";

class Square {
  constructor(side) {
    this.side = side;
  }
  perimeter() {
    const calculatePerimeter = this.side * 4;
    return calculatePerimeter;
  }
  area() {
    const calculateArea = Math.pow(this.side, 2);
    return calculateArea;
  }
}

const square1 = new Square(1);
const square2 = new Square(3);
const square3 = new Square(7);

console.log(
  `El primer cuadrado tiene ${
    square1.side
  } metro de lado, su área es de ${square1.area()} y su perímetro es de ${square1.perimeter()}
  }`
);

console.log(
  `El primer cuadrado tiene ${
    square2.side
  } metro de lado, su área es de ${square2.area()} y su perímetro es de ${square2.perimeter()}
  }`
);

console.log(
  `El primer cuadrado tiene ${
    square3.side
  } metro de lado, su área es de ${square3.area()} y su perímetro es de ${square3.perimeter()}
  }`
);
