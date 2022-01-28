// Area to display high scores
var highscoreDisplay = document.querySelector("#highscore-display");

// Values from local storage
var initials = localStorage.getItem("initials");
var score = localStorage.getItem("score");

// Use text content to push grabbed data to display area
highscoreDisplay.textContent = initials + " " + score;