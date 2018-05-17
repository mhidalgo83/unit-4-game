$(document).ready(function () {

    // Number generator for crystals and score...
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

    // Random number generator
    function randomNumberFromRange(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    }

    // Starting the game...
    function gameStart() {
        $("#outcome").html("");
        crystalTotal = 0;
        randomNumber = $("#random-number").html(randomNumberFromRange(19, 120));
        parseInt(randomNumber);
    };

    document.onkeyup = function (event) {
        gameStart();
        // Crystal buttons...
        $("#crystal-1").click(function () {
            crystalOne = parseInt(crystalOne);
            crystalTotal = parseInt(crystalTotal);
            crystalTotal = crystalOne + crystalTotal;
            $("#game-score").html(crystalTotal);
            console.log(crystalOne);
        });
        $("#crystal-2").click(function () {
            crystalTwo = parseInt(crystalTwo);
            crystalTotal = parseInt(crystalTotal);
            crystalTotal = crystalTwo + crystalTotal;
            $("#game-score").html(crystalTotal);
            console.log(crystalTwo);
        });
        $("#crystal-3").click(function () {
            crystalThree = parseInt(crystalThree);
            crystalTotal = parseInt(crystalTotal);
            crystalTotal = crystalThree + crystalTotal;
            $("#game-score").html(crystalTotal);
            console.log(crystalThree);
        });
        $("#crystal-4").click(function () {
            crystalFour = parseInt(crystalFour);
            crystalTotal = parseInt(crystalTotal);
            crystalTotal = crystalFour + crystalTotal;
            $("#game-score").html(crystalTotal);
            console.log(crystalFour);
        });
        // Checking the game state...
        if (crystalTotal == randomNumber) {
            $("#outcome").html("You have won! Press any key to play again!");
            wins++;
            $("#wins").html("Wins: " + wins);
            gameStart();
        }
        else if (crystalTotal > randomNumber) {
            $("#outcome").html("You have lost! Press any key to play again!");
            losses++;
            $("#losses").html("Losses: " + losses);
            gameStart();
        };

    };

});

