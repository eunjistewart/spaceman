/*----- Save the Spaceman JS file -----*/

/*----- Constants -----*/

//define an array of space-themed words that the player will guess.
const words = [
  "moon",
  "star",
  "planet",
  "rocket",
  "astronaut",
  "galaxy",
  "orbit",
  "comet",
  "nebula",
  "telescope",
  "shuttle",
  "spacesuit",
  "alien",
  "gravity",
  "sun",
  "earth",
  "mars",
  "venus",
  "jupiter",
  "saturn",
  "mercury",
  "uranus",
  "neptune",
  "meteor",
  "crater",
  "lunar",
  "spacewalk",
  "cosmos",
  "spacecraft",
  "exploration",
  "meteorite",
  "constellation",
  "interstellar",
  "eclipse",
  "lunar",
  "astronomy",
  "interplanetary",
  "galactic",
  "quasar",
  "observatory",
  "spaceship",
  "asteroid",
  "blackhole",
  "supernova",
  "starlight",
  "cosmonaut",
  "rover",
  "mission",
  "solar",
  "extraterrestrial",
];

// define Spaceman Image URLs.
const spacemanImages = [
  "./images/spaceman-0.png",
  "./images/spaceman-1.png",
  "./images/spaceman-2.png",
  "./images/spaceman-3.png",
  "./images/spaceman-4.png",
  "./images/spaceman-5.png",
];

const maxIncorrectGuesses = 6;

/*----- State Variables -----*/

//Define the initial state
let randomWord = getRandomWord(); //word
let incorrectGuesses = 0;
let isWin = false;
let isLoss = false;

/*
let initialWinLossMessage = ""; //winner
let initialSpacemanImage = "./images/spaceman-0.png"; //spaceman
let initialGuessesLeftMessage = "6 guesses left";
*/

/*----- Cached Elements -----*/

//to display the initial state of the game, select elements from the HTML document and update their content.

//Get references to the elements that I want to update.
const wordDisplay = document.querySelector(".js-word-underline p");
const spacemanImage = document.querySelector(".js-spaceman-image img");
const winLossMessage = document.querySelector(".js-win-loss-mssg");
const guessesLeftMessage = document.querySelector("#num-of-guesses"); //cached msg El.
const letterButtons = document.querySelectorAll(".keys");
const letterKeys = document.querySelectorAll(".letter-key");
const playAgainBtn = document.querySelector(".js-play-again-btn");

//generate a random word from the words array
//let randomWord = getRandomWord();
//console.log("Random word:", randomWord);

//create the placeholder string with underscores
const placeholder = "_ ".repeat(randomWord.length).trim();

// Update the elements with the initial state
wordDisplay.textContent = placeholder; //update word display with underscores
//spacemanImage.src = initialSpacemanImage;
//winLossMessage.textContent = initialWinLossMessage;
//guessesLeftMessage.textContent = initialGuessesLeftMessage;

/*----- Event Listeners -----*/

letterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const guessedLetter = button.value; //get the value(letter) of the clicked button
    handleGuess(guessedLetter); //call the handleGuess function with the guessed letter
  });
});

playAgainBtn.addEventListener("click", function () {
  resetGame();
});

/*----- Functions -----*/

//function to select a random word from the words array.
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

//this function will be called when a letter button is clicked.
function handleGuess(letter) {
  //console.log(`User guessed: ${letter}`);

  // Disable the clicked letter key for both incorrect and correct guesses
  const key = document.querySelector(`.letter-key[value="${letter}"]`);
  key.disabled = true;

  //check if the guessed letter is correct
  let isCorrectGuess = randomWord.includes(letter);

  //check if the guessed letter is incorrect
  if (!isCorrectGuess) {
    incorrectGuesses++;
    updateSpacemanImage(incorrectGuesses);
    guessesLeftMessage.textContent = `${
      maxIncorrectGuesses - incorrectGuesses
    } guesses left`;
  }

  updateWordDisplay(letter);

  isWin = !wordDisplay.textContent.includes("_ ");
  isLoss = incorrectGuesses >= maxIncorrectGuesses;

  //check if the game is over (win or loss)
  if (isWin || isLoss) {
    playAgainBtn.classList.add("play-again-win-or-loss");
    disableLetterButtons();
  }

  if (isWin) {
    winLossMessage.textContent = "Congratulations! You saved the spaceman!";
  } else if (isLoss) {
    winLossMessage.textContent = "Oh no! The spaceman is lost in space!";
    //Reveal the correct word
    revealCorrectWord(randomWord);
  }
}

function updateWordDisplay(letter) {
  const wordArray = wordDisplay.textContent.split(" "); // Split the displayed word into an array of letters
  // Iterate through the random word and update the word array with the correctly guessed letter(s)
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter) {
      wordArray[i] = letter;
    }
  }

  // Update the word display with the updated word array
  wordDisplay.textContent = wordArray.join(" ");
}

function revealCorrectWord(correctWord) {
  const wordArray = correctWord.split("");
  wordDisplay.innerHTML = wordArray
    .map((letter) => {
      return `<span class="revealed-word">${letter}</span>`;
    })
    .join(" ");
}

function updateSpacemanImage(incorrectGuesses) {
  // Update the spaceman image source
  if (incorrectGuesses < spacemanImages.length) {
    spacemanImage.src = spacemanImages[incorrectGuesses];
  } else {
    spacemanImage.style.display = "none";
  }
}

function disableLetterButtons() {
  letterButtons.forEach((button) => {
    button.disabled = true;
  });
}

function resetGame() {
  randomWord = getRandomWord();
  incorrectGuesses = 0;
  isWin = false;
  isLoss = false;
  winLossMessage.textContent = "";
  guessesLeftMessage.textContent = `${maxIncorrectGuesses} guesses left`;
  wordDisplay.textContent = "_ ".repeat(randomWord.length).trim();
  enableLetterButtons();
  enableLetterKeys();

  spacemanImage.style.display = "block";
  spacemanImage.src = spacemanImages[0];

  console.log(playAgainBtn.classList.contains("play-again-win-or-loss"));
  // Remove background color class from "Play Again" button
  playAgainBtn.classList.remove("play-again-win-or-loss");
}

function enableLetterButtons() {
  letterButtons.forEach((button) => {
    button.disabled = false;
  });
}

function enableLetterKeys() {
  letterKeys.forEach((key) => {
    key.disabled = false;
  });
}

//Initialize the game
resetGame();
