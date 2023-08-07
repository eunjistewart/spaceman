# pseudocode

This document explains the JavaScript code for a Spaceman game, which is a word guessing game with a space-themed twist. The game involves selecting a random space-themed word and allowing the player to guess letters to reveal the word. If the player makes too many incorrect guesses, a "spaceman" image is gradually displayed. The game ends either when the player correctly guesses the word or when the spaceman image is fully displayed.

```js
/*----overall look----*/
//title of the game 'Save the Spaceman'
//quick description what to do to kickstart the game
//(this game is essentially a space-themed word game)
//background image
//picture of the spaceman (right)
//Underlines _ (left) on the screen to hold letters for words to be guessed
//26 letters - mirrors the keyboard (buttons)
//Reset Button to play the game again

/*------constants------*/
//`words`: An array containing space-themed words that the player will guess.
//`spacemanImages`: An array of URLs pointing to spaceman images representing the different stages of the game.
//`maxIncorrectGuesses`: The maximum number of incorrect guesses allowed.

/*---state variables---*/
//`randomWord`: Holds the current randomly selected word for the game.
//`incorrectGuesses`: Tracks the number of incorrect guesses made by the player.
//`isWin`: Indicates whether the player has won the game.
//`isLoss`: Indicates whether the player has lost the game.

/*---cached elements---*/
//Cached references to HTML elements that will be updated based on the game state:
//`wordDisplay`: Displays the word with underscores representing unguessed letters.
//`spacemanImage`: Displays the spaceman image corresponding to the current incorrect guesses.
//`winLossMessage`: Displays a message indicating the game outcome.
//`guessesLeftMessage`: Displays the number of remaining incorrect guesses.
//`letterButtons`: An array of letter buttons for user interaction.
//`letterKeys`: An array of letter key elements.
//`playAgainBtn`: A button to play the game again.

/*---event listeners---*/
//`letterButtons`: Each letter button is assigned a click event listener that calls the `handleGuess` function when clicked.
//`playAgainBtn`: Clicking this button triggers the `resetGame` function.

/*-----functions-----*/

//`getRandomWord()`: Returns a random word from the `words` array.
//`handleGuess(letter)`: Handles a guessed letter, updating the game state and elements accordingly.
//`updateWordDisplay(letter)`: Updates the displayed word to reveal correctly guessed letters.
//`revealCorrectWord(correctWord)`: Reveals the correct word when the game is lost.
//`updateSpacemanImage(incorrectGuesses)`: Updates the spaceman image based on the number of incorrect guesses.
//`disableLetterButtons()`: Disables all letter buttons.
//`enableLetterButtons()`: Enables all letter buttons.
//`enableLetterKeys()`: Enables all letter key elements.
//`resetGame()`: Resets the game state, elements, and enables buttons for a new game.

//The game progresses as the player guesses letters, updating the displayed word and spaceman image. If the player wins or loses, appropriate messages are displayed, and buttons are disabled. The player can choose to play again by clicking the "Play Again" button.
```
