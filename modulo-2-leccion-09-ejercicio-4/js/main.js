"use strict";

const listTitles = document.querySelectorAll(".list-title");
const listItems = document.querySelectorAll(".list-item");
const checked = document.querySelectorAll(".list-check");

const tasks = [
  {
    name: "Recoger setas en el campo",
    completed: true,
  },
  {
    name: "Comprar pilas",
    completed: false,
  },
  {
    name: "Poner una lavadora de blancos",
    completed: true,
  },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
  {
    name: "Aprender cosas",
    completed: true,
  },
];

//paint

function paintTasks() {
  const listElement = document.querySelector(".js-list");
  listElement.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    /* const completedClass = tasks[i].completed === true ? "completed" : ""; */
    let completedClass;
    let checkedAttr;
    if (tasks[i].completed === true) {
      completedClass = "completed";
      checkedAttr = "checked";
    } else {
      completedClass = "";
      checkedAttr = "";
    }

    listElement.innerHTML += `<li class="${completedClass}">
    <input type="checkbox" ${checkedAttr} class="js-list-check" id="${i}">
    <span>${tasks[i].name}</span>
    </li>`;
  }
}

//listen events

function toggleTask(event) {
  console.log("Me han clickado", event.target.id);
  const clickedId = event.target.id;
  tasks[clickedId].completed = !tasks[clickedId].completed;
  paintTasks();
  listenEvents();
}

function listenEvents() {
  const checkboxElements = document.querySelectorAll(".js-list-check");
  for (const checkboxElement of checkboxElements) {
    console.log(checkboxElement);
    checkboxElement.addEventListener("change", toggleTask);
  }
}

//start app

paintTasks();
listenEvents();
