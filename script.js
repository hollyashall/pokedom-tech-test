
const containers =document.querySelector(".card-container")

import pokemonArray from "./data/pokemon.js";



 pokemonArray.forEach(entry =>{
  containers.innerHTML +=  `<div class="container"> 
  <img> </img>
  <p>${entry.id}</p><p>${entry.name}</p><p>${entry.types}</p><p>${entry.sprite}</p>
   </div>`
 })


// containers.innerText += 
// "text"
// `<div class="container">
// <img></img>
// </div>`



{/* <p>${entry.id}</p><p>${entry.name}</p><p>${entry.types}</p><p>${entry.sprite}</p>'
  */}


// const findPokemon = (event) =>{

