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


//generate words to guess and guess array
function initialSetup() {
    randNum = Math.floor(Math.random() * wordArray.length);
    currentWord = wordArray[randNum];
    guessArray = [];
    guessedLetters = [];
    document.getElementById("guessedLetters").innerHTML = guessedLetters;

    //reset lives based on difficulty
    switch (difficulty) {
        case "e":
            lives = 4;
            break;
        case "n":
            lives = 5;
            break;
        case "h":
            lives = 6;
            break;
    }
    document.getElementById("lives").innerHTML = lives;

    //generate array with _ for the word
    for (i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === " ") {
            guessArray.push("&nbsp;  ");
        }
        else {
            guessArray.push("_ ");
        }
    }

    //show scores and how many blanks
    document.getElementById("blankSpaces").innerHTML = guessArray.join("");
    document.getElementById("wins").innerHTML = winCount;
    document.getElementById("losses").innerHTML = lossCount;
}

//update html for guessed array and letters of words
function updateGuess() {
    document.getElementById("blankSpaces").innerHTML = guessArray.join("");
    document.getElementById("guessedLetters").innerHTML = guessedLetters.join(", ");
}

//see if won or lost
function checkWin() {
    var isGuessed = true;
    if (!correct) {
        lives--;
    }
    document.getElementById("lives").innerHTML = lives;

    //check to see if guess Array has a _
    for (i = 0; i < guessArray.length; i++) {
        if (guessArray[i] === "_ ") {
            isGuessed = false;
        }
    }

    //update based on if won or lost

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

//go back to menu, update high scores
function menu() {

    //move values depending on difficulty
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

//choose easy diff with easy array
function easyDiff() {
    document.getElementById("whatDiff").style.display = "none";
    document.getElementById("diffChosen").classList.remove("d-none");
    document.getElementById("diffTitle").innerHTML = "Guess the D&D class!";
    wordArray = ["barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "wizard", "warlock"];
    difficulty = "e";
    initialSetup();
}

//choose normal diff with normal array
function normalDiff() {
    document.getElementById("whatDiff").style.display = "none";
    document.getElementById("diffChosen").classList.remove("d-none");
    document.getElementById("diffTitle").innerHTML = "Guess the D&D spell!";
    wordArray = ["acid arrow", "awaken", "banishment", "conjure animals", "dispel magic", "earthbind", "invisibility", "greater restoration", "moonbeam", "raise dead", "stoneskin", "wind walk"];
    difficulty = "n";
    initialSetup();
}

//choose hard diff with hard array
function hardDiff() {
    document.getElementById("whatDiff").style.display = "none";
    document.getElementById("diffChosen").classList.remove("d-none");
    document.getElementById("diffTitle").innerHTML = "Guess the D&D monster!";
    wordArray = ["adult dragon", "ancient dragon", "avatar of death", "beholder zombie", "bone devil", "death knight", "fire elemental", "winged kobold", "umber hulk", "drow priestess", "stone golem", "pit fiend"];
    difficulty = "h";
    initialSetup();
}