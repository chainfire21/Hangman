var wordArray = ["music", "gaming", "soccer", "tennis", "origami"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessArray = [];
var correct;
var randNum;
var currentWord;
var winCount = 0;
var lossCount = 0;
var lives = 5;

initialSetup();

document.addEventListener("keypress", function () {
    var keyName = event.key;
    correct = false;
    console.log(currentWord);
    for (i = 0; i < alphabet.length; i++) {
        if (keyName === alphabet[i]) {
            for (j = 0; j < currentWord.length; j++) {
                if (keyName === currentWord.charAt(j)) {
                    guessArray[j] = keyName;
                    correct = true;
                }
            }
        }
    }
    updateGuess();
    checkWin();
});



function initialSetup() {
    guessArray = ["_ "];
    lives=5;
    document.getElementById("lives").innerHTML = lives;
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
    console.log(lives);
    if (!correct) {
        lives--;
    }
    document.getElementById("lives").innerHTML = lives;
    for (i = 0; i < guessArray.length; i++) {
        if (guessArray[i] === "_ ") {
            isGuessed = false;
        }
    }
    if (isGuessed) {
        winCount++;
        document.getElementById("wins").innerHTML = winCount;
        initialSetup();
    }
    if (lives === 0) {
        lossCount++;
        document.getElementById("losses").innerHTML = lossCount;
        initialSetup();
    }
}