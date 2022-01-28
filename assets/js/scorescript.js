var highscoreDisplay = document.querySelector("#highscore-display");
var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");

highscoreDisplay.textContent = initials + " " + score;