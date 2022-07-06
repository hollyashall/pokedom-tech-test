
const containers =document.querySelector(".card-container")

import pokemonArray from "./data/pokemon.js";


// need to add in the second type of pokemon separated by & when this exists
// do a function for pokemonType which I can use in my literal template
const pokemonType = (type) =>{
  if (type.length == 1) {
    return type[0]
  } 
  else {return `${type[0]} & ${type[1]}`}  
}



const renderContainers = (pokemonObject) =>{
  
  pokemonArray.forEach(entry =>{
    containers.innerHTML +=  `<div class="card-container"> 
    <img class="images" src="${entry.sprite}"> </img>
    <h2>${entry.name.charAt(0).toUpperCase()}${entry.name.slice(1)}</h2>
   <p class="card__text"> ${entry.name.charAt(0).toUpperCase()}${entry.name.slice(1)}(#${entry.id}) is a ${pokemonType(entry.types)} pokemon</p>
     </div>`
   })
}

renderContainers(pokemonArray)

// using the forEach to loop through the array and put the pokemon details onto the container




