
const containers =document.querySelector(".card-container")

import pokemonArray from "./data/pokemon.js";


const renderContainers = (pokemonObject) =>{
  
  pokemonArray.forEach(entry =>{
    containers.innerHTML +=  `<div class="card-container"> 
    <img class="images" src="${entry.sprite}"> </img>
   <p>${entry.name.charAt(0).toUpperCase()}${entry.name.slice(1)}(#${entry.id})</p><p> is a ${entry.types}   pokemon</p></p>
     </div>`
     
   })
   
}

renderContainers(pokemonArray)


// using the forEach to loop through the array and put the pokemon details onto the container

// need to add in the second type of pokemon separated by & when this exists



