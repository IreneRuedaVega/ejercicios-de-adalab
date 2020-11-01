"use strict";

function getListCharacter() {
  const nameCharacter = document.querySelector(".js-character").value; //Luke
  console.log(nameCharacter);
  fetch(`https://swapi.dev/api/people/?search=${nameCharacter}`) //Luke
    .then((response) => response.json())
    .then((data) => {
      let characterFeatures = document.querySelector(".js-features"); //div
      console.log(data);
      for (const character of data.results) {
        characterFeatures.innerHTML += `<ul><li>Personaje: ${character.name}</li><li>Género: ${character.gender}</li></ul>`;
      }
    });
}

const btn = document.querySelector(".js-button");
btn.addEventListener("click", getListCharacter);
