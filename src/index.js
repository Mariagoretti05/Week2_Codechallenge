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

  function menubar(character) {
    const bar = document.querySelector("#character-bar");
    const span = document.createElement("span");
    span.innerHTML = character.name;
    bar.appendChild(span);
    span.style.cursor = "pointer";
    span.addEventListener("click", () => {
      currentAnimal = character;
      showAnimal(character);
    });
  }

