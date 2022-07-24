import dogsData from "./data.js";
import Dog from "./dog.js";

let currentDogIndex = 0;
const lastDogIndex = dogsData.length - 1;
let currentDog = new Dog(dogsData[currentDogIndex]);
document.getElementById("like").addEventListener("click", like);
document.getElementById("nope").addEventListener("click", nope);
let isClicked = false;

render();

function render() {
  document.getElementById("card").innerHTML = currentDog.getDogHtml();
}

function getNewDog() {
  isClicked = false;
  if (currentDogIndex !== lastDogIndex) {
    currentDogIndex += 1;
    currentDog = new Dog(dogsData[currentDogIndex]);
    render();
  } else {
    endDog();
  }
}

function like() {
  if (!isClicked) {
    currentDog.setMatchStatus(true);
    document.getElementById(
      "badge-img"
    ).innerHTML = `<img class="badge" src="images/like-image.png">`;
    setTimeout(() => {
      getNewDog();
    }, 1000);

    isClicked = true;
  }
}

function nope() {
  if (!isClicked) {
    currentDog.setMatchStatus(false);
    document.getElementById("badge-img").innerHTML = `
            <img class="badge" src="images/nope-image.png">`;
    setTimeout(() => {
      getNewDog();
    }, 1000);
    isClicked = true;
  }
}

function endDog() {
  document.getElementById("card").innerHTML = `<div class="card-end-message">
                <h2>No more dogs in this area</h2>
                <p class="emoji">↑</p>
                <p class="click">Click on the paw to check out the dogs again</p>
            </div>`;
}
