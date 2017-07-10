var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking our wins, losses, and guesses.
var wins = 0;
var losses = 0;
var guesses = 10;

// Have the computer choose random letter.
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(computerChoice)

// When the user presses a key, it will run the following function...
document.onkeypress = function(event) {
    var userGuess = event.key;

    if(userGuess === computerChoice){
        wins++;
        // Re-initializing guesses to value of 10 to start over.
        guesses = 10;
        // Have the computer choose another random letter.
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice)
    }else{
        guesses--;
    }

    if(guesses == 0){
        losses++;
        // Re-initializing guesses to value of 10 to start over.
        guesses = 10;
        // Have the computer choose another random letter.
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice)
    }
  
    // Pushing our results for wins to the html to be displayed.
    var htmlWins = "<h3>Wins = " + wins + "</h3>";
    document.querySelector('#wins').innerHTML = htmlWins;

    // Pushing our results for losses to the html to be displayed.
    var htmlLosses = "<h3>Losses = " + losses + "</h3>";
    document.querySelector('#losses').innerHTML = htmlLosses;

    // Pushing our results for guesses to the html to be displayed.
    var htmlGuesses = "<h3>Guesses = " + guesses + "</h3>";
    document.querySelector('#guesses').innerHTML = htmlGuesses;
}