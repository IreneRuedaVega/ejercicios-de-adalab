"use strict";

const adalaber1 = {
  name: "María",
  age: 34,
  profession: "periodista",
};

const adalaber2 = {
  name: "Rocío",
  age: 25,
  profession: "actriz",
};

adalaber1.showBio = function () {
  return (
    "Mi nombre es " +
    this.name +
    ", tengo " +
    this.age +
    " años y soy " +
    this.profession
  );
};

adalaber2.showBio = function () {
  return (
    "Mi nombre es " +
    this.name +
    ", tengo " +
    this.age +
    " años y soy " +
    this.profession
  );
};

console.log(adalaber1.showBio());
console.log(adalaber2.showBio());
