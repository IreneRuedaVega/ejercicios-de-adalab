"use strict";

const text = document.querySelector(".text");

function addParagraph() {
  text.innerHTML = text.innerHTML + " Hola ¿qué tal estas? ";
}

text.addEventListener("mouseover", addParagraph);
