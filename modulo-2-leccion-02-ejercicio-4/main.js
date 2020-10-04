"use strict";

const people = 9;
const bill = 128;
const sake = 2;

const billWithoutSake = bill - sake;
const pay = billWithoutSake / people;
const ana = pay + sake;

console.log("Todo el mundo tiene que pagar " + pay + "€");
console.log("Ana tiene que pagar " + ana + "€");
