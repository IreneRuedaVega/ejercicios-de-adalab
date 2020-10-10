"use strict";

const currentYear = 12;
const yearsSinceLeapYear = currentYear % 4;
let nextLeapYear = " ";

switch (yearsSinceLeapYear) {
  case 1:
    nextLeapYear = currentYear + 3;
    console.log(`El próximo año bisiesto es el ${nextLeapYear}`);
    break;
  case 2:
    nextLeapYear = currentYear + 2;
    console.log(`El próximo año bisiesto es el ${nextLeapYear}`);
    break;
  case 3:
    nextLeapYear = currentYear + 1;
    console.log(`El próximo año bisiesto es el ${nextLeapYear}`);
    break;
  default:
    console.log("Este año es un año bisiesto");
}
