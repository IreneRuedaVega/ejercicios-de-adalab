"use strict";

const inputValue = document.querySelector(".js-input");
const text = document.querySelector(".js-text");

function getText() {
  const inputText = inputValue.value;
  text.innerHTML = inputText;
  console.log(inputText);
  const infoLocalStorage = localStorage.getItem("text", inputText);
}

inputValue.addEventListener("keyup", getText);
