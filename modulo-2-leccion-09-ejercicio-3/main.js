"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

const pairNumbersArray = [];

const multiplicity3 = [];
("");
function bestLostNumber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      pairNumbersArray.push(lostNumbers[i]);
    }
  }
  console.log(pairNumbersArray);

  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      multiplicity3.push(lostNumbers[i]);
    }
  }
  console.log(multiplicity3);
}

bestLostNumber();

const numbers = lostNumbers.concat(pairNumbersArray, multiplicity3);
console.log(numbers);
