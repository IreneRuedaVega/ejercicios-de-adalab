"use strict";

const button = document.querySelector(".btn");

function showAlert() {
  document.querySelector(".paragraph").innerHTML =
    "Mi primer click, ¡ole yo y la mujer que me parió!";
}

button.addEventListener("click", showAlert);
