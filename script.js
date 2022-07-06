
//global variables
const containers =document.querySelector(".card-container")

//importing the array
import pokemonArray from "./data/pokemon.js";


//TYPE of pokemon
  // need to add in the second type of pokemon separated by & when this exists
  // do a function for pokemonType which I can use in my literal template

// const pokemonType = (type) =>{

//if has one type
//else has two types

// cards which render details

const renderContainers = (pokemonObject) =>{
  
  pokemonArray.forEach(entry =>{
    containers.innerHTML +=  `<div class="card-container"> 
    <img class="images" src="${entry.sprite}"> </img>
    <h2>${entry.name.charAt(0).toUpperCase()}${entry.name.slice(1)}</h2>
   <p class="card__text"> ${entry.name.charAt(0).toUpperCase()}${entry.name.slice(1)}(#${entry.id}) is a ${(entry.types)} pokemon</p>
     </div>`
   })
}

renderContainers(pokemonArray)

// using the forEach to loop through the array and put the pokemon details onto the container


// adding ability to search
const input = document.querySelector(".myInput")
const heaadings = document.querySelector("name")

//^ have not figured out how to get the names

//make a loop that looks through the names
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}