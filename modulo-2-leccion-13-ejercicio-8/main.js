"use strict";

const runners = [
  { name: "Gregory Goyle", time: 56 },
  { name: "Nymphadora Tonks", time: 9 },
  { name: "Luna Lovegood", time: 45 },
  { name: "Cedric Diggory", time: 28 },
  { name: "Cho Chang", time: 35 },
];

//runner es cada uno de los corredores (objetos).
//faster es un objeto que contiene quien es el ganador.

const winnerRunner = function (faster, runner) {
  //quien ha sido más rápido.
  if (runner.time < faster.time) {
    return runner;
  } else {
    return faster;
  }
};

const winner = runners.reduce(winnerRunner);
