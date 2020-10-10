"use strict";

const text = document.querySelector(".container");

function changeColor() {
  let scrollColor = window.scrollY;
  if (scrollColor < 250) {
    text.classList.add("color1");
    text.classList.remove("color2");
  } else {
    text.classList.add("color2");
    text.classList.remove("color1");
  }
}

window.addEventListener("scroll", changeColor);
