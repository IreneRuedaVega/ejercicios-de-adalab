"use strict";

function parImpar(number) {
  if (number % 2 === 0) {
    return `El ${number} es par`;
  } else {
    return `El ${number} es impar`;
  }
}

console.log(parImpar(12));
