"use strict";

const key = document.querySelector(".document");

function changeColor(event) {
  if (event.key === "r") {
    key.classList.add("color1");
    key.classList.remove("color2");
  } else if (event.key === "m") {
    key.classList.add("color2");
    key.classList.remove("color1");
  }
}

key.addEventListener("keydown", changeColor);
