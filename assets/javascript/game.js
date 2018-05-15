// Score generator...
var minNumber = 19;

var maxNumber = 120;

var randomNumber = randomNumberFromRange();

function randomNumberFromRange() {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}


// Crystal number generator...
var mnNumber = 1;

var mxNumber = 12;

var rndmNumber = rndmNumberFromRange();

function rndmNumberFromRange() {
    return Math.floor(Math.random() * (mxNumber - mnNumber + 1) + mnNumber);
}

$(document).ready(function gameStart() {
    // Crystal buttons...
    $("#crystal-1").click(function () {
        rndmNumberFromRange();
        alert(rndmNumber);
    });
    $("#crystal-2").click(function () {
        rndmNumberFromRange();
        alert(rndmNumber);
    });
    $("#crystal-3").click(function () {
        rndmNumberFromRange();
        alert(rndmNumber);
    });
    $("#crystal-4").click(function () {
        rndmNumberFromRange();
        alert(rndmNumber);

    });
    // Keeping score...

    var wins = 0;
    $("#wins").html("Wins: " + wins);
    var losses = 0;
    $("#losses").html("Losses: " + losses);
    // Crystal total... 
    var crystalTotal = 0;

    $("#random-number").onkeyup (function randomNumberFromRange() {
        $("#random-number").html(randomNumberFromRange());
    });

});










// Crystal buttons...


if (crystalTotal == randomNumber) {
    wins++;
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    startGame();
}

else if (crystalTotal > randomNumber) {
    losses++;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    startGame();
}
