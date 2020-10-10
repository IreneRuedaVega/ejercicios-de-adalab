"use strict";

const button = document.querySelector(".btn");

const activeButton = function (event) {
  console.log(event);
};

button.addEventListener("click", activeButton);
