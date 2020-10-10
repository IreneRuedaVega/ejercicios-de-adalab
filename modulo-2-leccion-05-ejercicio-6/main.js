"use strict";

const input = document.querySelector(".input");

function paragraph(event) {
  const text = document.querySelector(".text");
  const input = event.currentTarget.value;
  text.innerHTML = input;
}

input.addEventListener("keyup", paragraph);
