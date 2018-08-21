var wordArray = ["music", "gaming", "soccer", "tennis", "origami"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessArray = [];
var randNum;
var currentWord;

initialSetup();

document.addEventListener("keypress", function () {
    var keyName = event.key;
    console.log(currentWord);
    var correctGuess = false;
    for (i = 0; i < alphabet.length; i++) {
        if (keyName === alphabet[i]) {
            for (j = 0; j < currentWord.length; j++) {
                if (keyName === currentWord.charAt(j)) {
                    correctGuess = true;
                    guessArray[j] = keyName;
                    console.log(guessArray);
                    updateGuess();

                }
            }
        }
    }
});

function initialSetup() {
    randNum = Math.floor(Math.random() * wordArray.length);
    currentWord = wordArray[randNum];
    for (i = 0; i < currentWord.length; i++) {
        guessArray.push("_ ");
    }
    console.log(guessArray);
    console.log(guessArray.join(""));
    document.getElementById("blankSpaces").innerHTML = guessArray.join("");
}

function updateGuess(){
    document.getElementById("blankSpaces").innerHTML = guessArray.join("");
}

