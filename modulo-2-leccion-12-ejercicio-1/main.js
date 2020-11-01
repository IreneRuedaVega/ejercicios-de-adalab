"use strict";

const numbers = [1, 2, 3];
const list = document.querySelector(".js-list");

function numbersArray() {
  for (let i = 0; i < numbers.length; i++) {
    const newItem = document.createElement("li");
    let newContent = document.TextNode(numbers[i]);
    li.appendChild(newContent);
    list.appendChild(li);
  }
}

numbersArray();
