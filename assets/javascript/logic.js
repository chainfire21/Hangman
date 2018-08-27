var wordArray = [];
var guessArray = [];
var correct;
var randNum;
var currentWord;
var winCount = 0;
var lossCount = 0;
var lives;
var guessedLetters = [];
var difficulty;

document.onkeyup = function (event) {
    var keyName = event.key.toLowerCase();
    correct = false;
    // Make sure a-z
    console.log(event.keyCode);
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        // loop to see if letter matches a letter in the word
        for (j = 0; j < currentWord.length; j++) {
            if (keyName === currentWord.charAt(j)) {
                guessArray[j] = keyName;
                correct = true;
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
    }
}



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
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === " ") {
            guessArray.push("&nbsp;  ");
        }
        else {
            guessArray.push("_ ");
        }
    }
    document.getElementById("blankSpaces").innerHTML = guessArray.join("");
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = lossCount;
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

function menu() {
    switch (difficulty) {
        case "e":
            document.getElementById("easyScores").innerHTML = "W- " + winCount + " L- " + lossCount;
            winCount = 0;
            lossCount = 0;
            break;
        case "n":
            document.getElementById("normalScores").innerHTML = "W- " + winCount + " L- " + lossCount;
            winCount = 0;
            lossCount = 0;
            break;
        case "h":
            document.getElementById("hardScores").innerHTML = "W- " + winCount + " L- " + lossCount;
            winCount = 0;
            lossCount = 0;
            break;
    }
    document.getElementById("whatDiff").style.display = "block";
    document.getElementById("diffChosen").classList.add("d-none");
    document.getElementById("prevWord").innerHTML = "N/A";
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