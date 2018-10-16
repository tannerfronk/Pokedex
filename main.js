let charName = document.querySelector("#charName")

fetch('https://swapi.co/api/people/1')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    charName.textContent = myJson.name
    console.log(JSON.stringify(myJson));
  }); 

import { films } from './assets/main.js'