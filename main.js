let charName = document.querySelector("#charName")

fetch('https://swapi.co/api/people/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    charName.textContent = myJson.name
    console.log(JSON.stringify(myJson));
  }); 

import { films } from './assets/films.js'

console.log(films)

let cardList = document.querySelector("#cardList")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    cardList.appendChild(listItem)
    console.log(film.title)
}) //end of star wars API code