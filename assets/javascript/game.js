var wins = 0;
var losses = 0;
var green, red, blue, yellow;
var total = 0;
var randomNumber;
var gameOver = false;


function start() {
    randomNumber = Math.floor(Math.random() * 100)
    gameOver = false;
    total = 0;

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
        total = 0;
    }
}

function lose() {
    if (total > randomNumber) {
        alert("You Lost...");
        losses++;
        $("#losses").html(losses);
        gameOver = true;
        total = 0;
    }
}

if(!gameOver){
$(".sapphire").click( function () {
    blue = Math.floor(Math.random() * 25);
    total += blue;
    $("#score-total").html(total);
    win();
    lose();
})

$(".ruby").click(function() {
    red = Math.floor(Math.random() * 25);
    total += red;
    $("#score-total").html(total);
    win();
    lose();
})

$(".greenstone").click(function() {
    green = Math.floor(Math.random() * 25);
    total += green;
    $("#score-total").html(total);
    win();
    lose();
})

$(".yellowstone").click(function() {
    yellow = Math.floor(Math.random() * 25);
    total += yellow;
    $("#score-total").html(total);
    win();
    lose();
})
}
else
{
    start();
}

start();