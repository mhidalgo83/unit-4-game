$(document).ready(function gameStart() {
// Number generator...

var randomNumber = randomNumberFromRange(19, 120);

var crystalOne = randomNumberFromRange(1, 12);

var crystalTwo = randomNumberFromRange(1, 12);

var crystalThree = randomNumberFromRange(1, 12);

var crystalFour = randomNumberFromRange(1, 12);

var wins = 0;
$("#wins").html("Wins: " + wins);

var losses = 0;
$("#losses").html("Losses: " + losses);

// Crystal total... 
var crystalTotal = 0;
var gameScore = crystalTotal;

function randomNumberFromRange(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

// Starting the game...
function gameStart () {
    randomNumber;
    $("#game-score").html = 0;
};



    // Crystal buttons...
    $("#crystal-1").click(function () {
        crystalOne = parseInt(crystalOne);
        crystalTotal = parseInt(crystalTotal);
        crystalTotal = crystalOne + crystalTotal;
        $("#game-score").html(crystalTotal);
    });
    $("#crystal-2").click(function () {
        crystalTwo = parseInt(crystalTwo);
        crystalTotal = parseInt(crystalTotal);
        crystalTotal = crystalTwo + crystalTotal;
        $("#game-score").html(crystalTotal);
    });
    $("#crystal-3").click(function () {
        crystalThree = parseInt(crystalThree);
        crystalTotal = parseInt(crystalTotal);
        crystalTotal = crystalThree + crystalTotal;
        $("#game-score").html(crystalTotal);
    });
    $("#crystal-4").click(function () {
        crystalFour = parseInt(crystalFour);
        crystalTotal = parseInt(crystalTotal);
        crystalTotal = crystalFour + crystalTotal;
        $("#game-score").html(crystalTotal);
    });
    

    
});



if (crystalTotal == randomNumber) {
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    gameStart();
}

else if (crystalTotal > randomNumber) {
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    gameStart();
};
