"use strict";

const adalaber1 = {};

adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.profession = "periodista";
adalaber1.speak = (phrase) => phrase;

adalaber1.runAMarathon = (distance) =>
  `Estoy corriendo una maratón de ${distance} kilómetros.`;

console.log(adalaber1.speak("Estoy corriendo"));
console.log(adalaber1.runAMarathon(50));
