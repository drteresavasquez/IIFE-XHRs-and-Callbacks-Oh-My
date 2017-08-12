console.log("iife-xhr.js, YO!");
let animals = document.getElementById("animals");

function showCarnivores(carnivores) {
    carnivores.forEach(function(){
        animals.innerHTML += `${carnivores}`
    })
  }

//   function showHerbivores () {
  
//   }
  
  Predator.loadCarnivores(showCarnivores);
  
