var wordArray = [];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessArray = [];
var correct;
var randNum;
var currentWord;
var winCount = 0;
var lossCount = 0;
var lives;
var guessedLetters = [];


document.addEventListener("keypress", function (event) {
    var keyName = event.key.toLowerCase();
    correct = false;
    // Loop to make sure a-z
    for (i = 0; i < alphabet.length; i++) {
        if (keyName === alphabet[i]) {
            // loop to see if letter matches a letter in the word
            for (j = 0; j < currentWord.length; j++) {
                // check to see if its in the word
                if (keyName === currentWord.charAt(j)) {
                    guessArray[j] = keyName;
                    correct = true;
                }

            }
        }
    }
    // check to see if its been guessed before
    for (x = 0; x < guessedLetters.length; x++) {
        if (guessedLetters[x] === keyName) {
            correct = true;
        }
    }
    if (!correct)
        guessedLetters.push(keyName);
    updateGuess();
    checkWin();
});



function initialSetup() {
    randNum = Math.floor(Math.random() * wordArray.length);
    currentWord = wordArray[randNum];
    guessArray = [];
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    switch (difficulty) {
        case "e":
            lives = 4;
            break;
        case "n":
            lives = 6;
            break;
        case "h":
            lives = 8;
            break;
    }
    document.getElementById("lives").innerHTML = lives;
    console.log(currentWord);
    console.log(currentWord.length);
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === " ") {
            guessArray.push("&nbsp;  ");
        }
        else {
            guessArray.push("_ ");
        }
    }
    document.getElementById("blankSpaces").innerHTML = guessArray.join("");
    console.log("Initial setup guess array: ");
    console.log(guessArray);
}

function updateGuess() {
    document.getElementById("blankSpaces").innerHTML = guessArray.join("");
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(", ");
}

function checkWin() {
    var isGuessed = true;
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
        document.getElementById("prevWord").innerHTML = currentWord;
        initialSetup();
    }
    if (lives === 0) {
        lossCount++;
        document.getElementById("losses").innerHTML = lossCount;
        document.getElementById("prevWord").innerHTML = currentWord;
        initialSetup();
    }
}

function easyDiff() {
    document.getElementById("whatDiff").style.display = "none";
    document.getElementById("diffChosen").classList.remove("d-none");
    document.getElementById("diffTitle").innerHTML = "Guess the D&D class!";
    wordArray = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "wizard", "warlock"];
    difficulty = "e";
    initialSetup();
}
function normalDiff() {
    document.getElementById("whatDiff").style.display = "none";
    document.getElementById("diffChosen").classList.remove("d-none");
    document.getElementById("diffTitle").innerHTML = "Guess the D&D spell!";
    wordArray = ["acid arrow", "awaken", "banishment", "conjure animals", "dispel magic", "earthbind", "invisibility", "greater restoration", "moonbeam", "raise dead", "stoneskin", "wind walk"];
    difficulty = "n";
    initialSetup();
}
function hardDiff() {
    document.getElementById("whatDiff").style.display = "none";
    document.getElementById("diffChosen").classList.remove("d-none");
    document.getElementById("diffTitle").innerHTML = "Guess the D&D monster!";
    wordArray = ["adult dragon", "ancient dragon", "avatar of death", "beholder zombie", "bone devil", "death knight", "fire elemental", "winged kobold", "umber hulk", "drow priestess", "stone golem", "pit fiend"];
    difficulty = "h";
    initialSetup();

}

