"use strict";

const button = document.querySelector(".btn");

function yourName() {
  const name = document.querySelector(".firstName").value;
  console.log(`Hola, ${name}`);
}

button.addEventListener("click", yourName);
