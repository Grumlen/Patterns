var guessingGame = (function () {
  var privateNumber;
  var privateCounter;
  function reset() {
    privateCounter = 4;
    privateNumber = Math.ceil(Math.random()*10);
  }
  function guesser(g) {
    if (typeof g != number) return console.log("That wasn't a number, try again");
    if (g>10 || g<1) return console.log("Please pick a number between 1 and 10");
    if (g==privateNumber) {
      reset();
      return console.log("You guessed the number! Resetting for a new game . . .");
    }
    if (g>privateNumber) console.log("Too high!");
    if (g<privateNumber) console.log("Too low!");
    privateCounter--;
    if (privateCounter>1) return console.log("You have "+privateCounter+" guesses left.");
    else if (privateCounter==1) return console.log("You have 1 guess left.");
    else if (privateCounter===0) {
      reset();
      return console.log("You failed to guess the number. Resetting for a new game . . .");
    }
  }
  reset();
  return {
    guess: guesser
  };
})();
