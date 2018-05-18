$(document).ready(function () {

    // Number generator for crystals and score...
    var randomNumber = randomNumberFromRange(19, 120);

    var crystalOne = randomNumberFromRange(1, 12);

    var crystalTwo = randomNumberFromRange(1, 12);

    var crystalThree = randomNumberFromRange(1, 12);

    var crystalFour = randomNumberFromRange(1, 12);

    // Logging wins and losses...
    var wins = 0;
    $("#wins").html("Wins: " + wins);

    var losses = 0;
    $("#losses").html("Losses: " + losses);

    // Crystal total... 
    var crystalTotal = 0;

    // Random number generator
    function randomNumberFromRange(minNumber, maxNumber) {
        return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    }

    // Starting the game...
    function gameStart() {
        crystalTotal = 0;
        randomNumber = randomNumberFromRange(19, 120);
        $("#random-number").html(randomNumber);
        crystalOne = randomNumberFromRange(1, 12);
        crystalTwo = randomNumberFromRange(1, 12);
        crystalThree = randomNumberFromRange(1, 12);
        crystalFour = randomNumberFromRange(1, 12);
    };

    // Checking the game state...
    function gameState() {
        console.log("total " + crystalTotal);
        console.log("random number: " + randomNumber);
        if (crystalTotal == randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            gameStart();
        }

        else if (crystalTotal > randomNumber) {
            losses++;
            $("#losses").html("Losses: " + losses);
            gameStart();
        }
    };
        gameStart() 
        // Crystal buttons...
        $("#crystal-1").click(function () {
            crystalOne = parseInt(crystalOne);
            crystalTotal = parseInt(crystalTotal);
            crystalTotal = crystalOne + crystalTotal;
            $("#game-score").html(crystalTotal);
            gameState();
            console.log(crystalOne);
            $("#outcome").html("");
        });
        $("#crystal-2").click(function () {
            crystalTwo = parseInt(crystalTwo);
            crystalTotal = parseInt(crystalTotal);
            crystalTotal = crystalTwo + crystalTotal;
            $("#game-score").html(crystalTotal);
            gameState();
            console.log(crystalTwo);
            $("#outcome").html("");
        });
        $("#crystal-3").click(function () {
            crystalThree = parseInt(crystalThree);
            crystalTotal = parseInt(crystalTotal);
            crystalTotal = crystalThree + crystalTotal;
            $("#game-score").html(crystalTotal);
            gameState();
            console.log(crystalThree);
            $("#outcome").html("");
        });
        $("#crystal-4").click(function () {
            crystalFour = parseInt(crystalFour);
            crystalTotal = parseInt(crystalTotal);
            crystalTotal = crystalFour + crystalTotal;
            $("#game-score").html(crystalTotal);
            gameState();
            console.log(crystalFour);
            $("#outcome").html("");
        });
});


/* Things to complete...
    1)If/else if statements aren't checking the game state. Is this due to scope?
    2)Crystal buttons are retaining the same value they had at the beginning of the game. How do I change this?
    3)CSS styling needs to be finished.
    4)Resetting the game.
     */
