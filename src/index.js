// Your code here
let articleAnimals;
document.addEventListener("DOMContentLoaded",()=>{getAnimals();});

function getAnimals() {
    fetch("http://localhost:3000/characters")
      .then((resp) => resp.json())
      .then(menuBarDisplay);
  }

  function menuBarDisplay(animal) {
    animal.forEach(menubar);
  }