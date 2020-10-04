"use strict";

const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const firstDog = document.querySelector(".firstDog");

firstDog.innerHTML =
  "\
<div>\
  <li>" + firstDogName + " " + firstDogImage + "</li>\
</div>";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const secondDog = document.querySelector(".secondDog");

secondDog.innerHTML =
  "\
<div>\
  <li>" + secondDogName + " " + secondDogImage + "</li>\
</div>";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const thirdDog = document.querySelector(".thirdDog");

thirdDog.innerHTML =
  "\
<div>\
  <li>" + thirdDogName + " " + thirdDogImage + "</li>\
</div";
