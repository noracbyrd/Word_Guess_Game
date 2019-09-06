 //trying this first with no spaces between the underscores for the blank word
        //I didn't get a chance to look up the "query selector" syntax after class, so I had already built a way to choose a word
        //Granted, I hadn't yet figured out how to generate the next word, alas
        var disneyWords = ["ariel", "rapunzel", "cinderella", "snowwhite", "moana", "merida", "mulan", "pocahontas", "belle", "tiana", "aurora"];
        var turnCountdown = document.getElementById("turnCountdown-text");
        var currentWord = document.getElementById("currentWord-text");
        var lettersGuessed = document.getElementById("lettersGuessed-text");
        //this function generates the blanks that are the length of the mystery word that are visible on the page
        var blankSpace = function (princess) {
            for (var i = 0; i < princess.length; i++) {
                //skipping spaces for now, also using an X because it's easier to see how many there are
                currentWord.textContent += "X";
            }
        }

       
        var turns = 12;
        document.onkeyup = function (event) {
            //generating the mystery word
            var computerChoice = disneyWords[Math.floor(Math.random() * disneyWords.length)];
            //calling blankSpace function to display the concealed word
            blankSpace(computerChoice);
            //spaces2 grabs the X's and stores them as a string
            var spaces2 = $(".blankText").text();
            console.log(spaces2);
            var revealedWord = "";
            //starting the users guesses
            document.onkeyup = function (event) {
                var userGuess = event.key;
                //need line for only running code if alphabet key pressed
                //the following for loop compares the user letter to the computer's chosen word
                for (var i = 0; i < computerChoice.length; i++) {
                    if (userGuess === computerChoice[i]) {
                        //this is where everything goes to heck, sadly - I was hoping to rewrite the string at a certain index. what I wanted to do was, if userGuess equaled the computerChoice at that exact index, it would replace the X from spaces2 (the x's variable) and then display it in teh document. to get the "replace" method to work I had to add the new variable....buuuut...it's not working
                        revealedWord = spaces2[i].replace("X",userGuess);
                        console.log(revealedWord);
                        return revealedWord;
                    }
                }
                //adding letters to the letters guessed section
                lettersGuessed.textContent += " " + userGuess;
                turns--;
                turnCountdown.textContent = turns;
                if (turns===0){
                    alert("Game Over!");
                }
                if (revealedWord===computerChoice){
                    alert("Congrats you won!");
                }
                currentWord.textContent = revealedWord;
            }
        }

        //If I were to display a specific image or play a sound when the user gets the word right, I think I would probably include it at the end of the first overall on key up event - I might have made each princess an object with properties (I'm assuming you can attach files to an object via a property?) 