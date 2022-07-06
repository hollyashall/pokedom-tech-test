
const containers =document.querySelector(".card-container")

import pokemonArray from "./data/pokemon.js";


// need to capitalise the first letter of the names
// function capitalizeWords(pokemonArray) {
//   return pokemonArray.map(name => {
//     return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
//   });
// }

  
const pokeContainer = (pokemon) => {

  const nameLowerCase = pokemon.name;
  upperName = nameLowerCase.charAt(0).toUpperCase() + nameLowerCase.substring(1).toLowerCase

}


// using the forEach to loop through the array and put the pokemon details onto the container
 pokemonArray.forEach(entry =>{
  containers.innerHTML +=  `<div class="container"> 
  <img class="images" src="${entry.sprite}"> </img>
 <p>${entry.name}</p><p>${entry.types}</p></p>
   </div>`
 })




