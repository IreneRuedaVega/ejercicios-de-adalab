'use strict';

const button = document.querySelector(".btn");
const input = document.querySelectorAll(".movies");


function whatMovie (input){
  const likeMovies = [input];
  for (const obra of likeMovies) {
    console.log (`¡A mi también me encantó ${obra}`);
  }
}

button.addEventListener("click",whatMovie );