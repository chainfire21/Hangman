var wordArray = ["music", "gaming", "soccer", "tennis", "origami"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessArray = [];
var randNum;
var currentWord;
var winCount = 0;
var lossCount = 0;

initialSetup();

document.addEventListener("keypress", function () {
    var keyName = event.key;
    console.log(currentWord);
    for (i = 0; i < alphabet.length; i++) {
        if (keyName === alphabet[i]) {
            for (j = 0; j < currentWord.length; j++) {
                if (keyName === currentWord.charAt(j)) {
                    guessArray[j] = keyName;
                    console.log(guessArray);
                    updateGuess();
                }
            }
        }
    }
    checkWin();
});



function initialSetup() {
    guessArray = ["_ "];
    randNum = Math.floor(Math.random() * wordArray.length);
    currentWord = wordArray[randNum];
    for (i = 0; i < currentWord.length - 1; i++) {
        guessArray.push("_ ");
    }
    document.getElementById("blankSpaces").innerHTML = guessArray.join("");
}

function updateGuess() {
    document.getElementById("blankSpaces").innerHTML = guessArray.join("");
}

function checkWin() {
    var isGuessed = true;
    console.log("BEFORE LOOP:");
    console.log(isGuessed);
    for (i = 0; i < guessArray.length; i++) {
        if (guessArray[i] === "_ ") {
            isGuessed = false;
            console.log("Current char: " + guessArray[i]);
        }
    }
    console.log("AFTER LOOP:");
    console.log(isGuessed);
    if (isGuessed) {
        winCount++;
        document.getElementById("wins").innerHTML = winCount;
        initialSetup();
    }
}