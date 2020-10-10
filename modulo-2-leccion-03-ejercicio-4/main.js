"use strict";

const dogAge = document.querySelector(".input__number");
const result = document.querySelector(".result");

const year1 = 15;
const year2 = 9;
const year3 = 5;

let multiply = function () {
  const dogAgeValue = parseInt(dogAge.value);

  if (dogAgeValue === 1) {
    result.innerHTML = `Este perro tiene ${year1} años humanos`;
  } else if (dogAgeValue === 2) {
    result.innerHTML = `Este perro tiene ${year1 + year2} años humanos`;
  } else if (dogAgeValue === 3) {
    result.innerHTML = `Este perro tiene ${year1 + year2 + year3} años humanos`;
  } else if (dogAgeValue > 3) {
    result.innerHTML = `Este perro tiene ${
      year1 + year2 + year3 * dogAgeValue
    } años humanos`;
  }
};

dogAge.addEventListener("change", multiply);
