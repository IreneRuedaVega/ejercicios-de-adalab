"use strict";

const arr = [];

function getNumbersArray() {
  for (let i = 1; i < 100 + 1; i++) {
    arr.push(i);
  }
  console.log(arr);
}

getNumbersArray();
