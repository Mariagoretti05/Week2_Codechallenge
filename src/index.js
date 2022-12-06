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

  function showAnimal(character) {
    const characterName = document.querySelector("p#name");
    characterName.innerHTML = character.name;
    const characterImg = document.querySelector("img#image");
    characterImg.src = character.image;
    const characterVotes = document.querySelector("span#vote-count");
    characterVotes.innerHTML = character.votes;
  }

  //adding votes
  const inputVotes = document.querySelector("input#votes");
  const animalVotes = document.querySelector("span#vote-count");
  const form = document.querySelector("form#votes-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(currentAnimal);
    currentAnimal.votes += parseInt(e.target.votes.value, 10);
    showAnimal(currentAnimal);
    form.reset();
  });

  //  the reset button
  const resetVotes = document.querySelector("button#reset-btn");
  resetVotes.style.cursor = "pointer";
  resetVotes.addEventListener("click", () => {
    currentAnimal.votes = 0;
    showAnimal(currentAnimal);
    form.reset();
  });