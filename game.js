var mysteryWord = ["A", "R", "I", "E", "L"];
var blankWord = ["_","_","_","_","_"];
var turnCount = 0;
console.log(blankWord);
console.log(turnCount);

var myGuess = function(guess) {
    for (var i = 0; i < mysteryWord.length; i++) {
        if (guess === mysteryWord[i] && blankWord[i] === "_") {
            blankWord[i] = guess;
            console.log(blankWord);
            console.log(turnCount);
            turnCount += 1;
            return blankWord;
            return turnCount;
        } else if (blankWord[i] != "_") {
            continue;
        } else {
            console.log("Wrong guess!");
        }
    }
}

console.log(myGuess("A"));
console.log(myGuess("R"));
