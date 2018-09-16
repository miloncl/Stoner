var wins = 0;
var losses = 0;
var green, red, blue, yellow;
var total;
var randomNumber;
var gameOver = false;


function start() {
    randomNumber = Math.floor(Math.random() * 100)
    gameOver = false;

    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#random-number").html(randomNumber);
}

function win() {
    if (randomNumber == total) {
        alert("You Win!");
        wins++;
        $("#wins").html(wins);
        gameOver = true;
    }
}

function lose() {
    if (total > randomNumber) {
        alert("You Lost...");
        losses++;
        $("#losses").html(losses);
        gameOver = true;
    }
}

start();