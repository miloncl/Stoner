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

start();