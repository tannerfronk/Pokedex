//SWAPI PULL FUNCTION STARTS HERE
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
}) 
//end of star wars API code

// Pokemon Data Starts Here

import { pokemon } from "./assets/pokemon.js"
import { pokemonRan } from "./assets/pokeRandom.js"

console.log(pokemon)

const pokeContainer = document.querySelector("#pokeContent")

const frontFig = (element) => {
    let fig = document.createElement('figure')
    fig.className = "card__face card__face--front"
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    cap.textContent = element.ename
    img.src = `img/${element.id}${element.ename}.png`
    fig.appendChild(img)
    fig.appendChild(cap)
    return fig
}

const infoDiv = (element) => {
    let infoContainer = document.createElement('div')
    infoContainer.className = "card__face card__face--back"
    let infoName = document.createElement('p')
    let attack = document.createElement('p')
    let defense = document.createElement('p')
    let HP = document.createElement('p')
    infoName.textContent = element.ename
    attack.textContent = `Attack: ${element.base.Attack}`
    defense.textContent = `Defense: ${element.base.Defense}`
    HP.textContent = `Hit Points: ${element.base.HP}`
    infoContainer.appendChild(infoName)
    infoContainer.appendChild(attack)
    infoContainer.appendChild(defense)
    infoContainer.appendChild(HP)
    return infoContainer
}

const backFig = (element) => {
    let fig = document.createElement('figure')
    fig.className = "card__face card__face--back"
    let img = document.createElement('img')
    img.src = `img/pokeball.jpeg`
    fig.appendChild(img)
    return fig
}

pokemon.forEach(poke => {
    let card = document.createElement('div')
    card.className = "card"
    card.appendChild(frontFig(poke))
    card.appendChild(infoDiv(poke))
    pokeContainer.appendChild(card)
    card.addEventListener( 'click', function() {
        console.log(poke.ename)
        card.classList.toggle('is-flipped');
    });
})

// Add new random Pokemon functions below

let rand = pokemonRan[Math.floor(Math.random() * pokemonRan.length)];

const newC = rand;

console.log(newC)

let button = document.querySelector('#newCard')
button.addEventListener('click', () => {
    console.log("Thanks for Clicking")
    let card = document.createElement('div')
    card.className = "card"
    card.appendChild(frontFig(newC))
    card.appendChild(infoDiv(newC))
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
    });
    pokeContainer.appendChild(card)
})

let buttonDis = document.querySelector('#newCard')
    buttonDis.addEventListener( 'click', function() {
        buttonDis.classList.toggle('is-clicked');
});


pokemon.push.apply(rand)
console.log(rand)
// Pokemon Data ends