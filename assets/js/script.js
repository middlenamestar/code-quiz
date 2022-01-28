// Assignments
// Timer
var timer = document.querySelector("#timer");
// Seconds remaining
var countdown = 60;
// Keeping track of score - added to and deducted from this variable
var score = 0;
// Start button
var startQuizButton = document.querySelector("#start-quiz-button");

// Question 1 container
var questionContainer = document.querySelector("#question-container");
var questionLine = document.querySelector("#question");
var answerOne = document.querySelector("#answer-1");
var answerTwo = document.querySelector("#answer-2");
var answerThree = document.querySelector("#answer-3");

// Question 2 container
var questionTwoContainer = document.querySelector("#question2-container");
var questionTwoLine = document.querySelector("#question2");
var answerTwoPointOne = document.querySelector("#answer-2-1");
var answerTwoPointTwo = document.querySelector("#answer-2-2");
var answerTwoPointThree = document.querySelector("#answer-2-3");

// The actual questions and answers
var questionOne = {
    question: "how do you link js to your html?",
    answers: ["link", "script", "href"],
};
var questionTwo = {
    question: "what could you use to select an element?",
    answers: ["querySelector", "getElementById", "both!"],
}

//Exit page
var gameOver = document.querySelector("#game-over");
var submitButton = document.querySelector("#submit-btn");

//Functions
// After start quiz button is clicked and the quiz has started, the start button will hide
function startQuiz(){
    startQuizButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    startTimer();
    firstQuestion();
}

// Timer function after it is called by clicking start quiz, starts to count down from 60 secs. When time runs out, goes to game over page
function startTimer(){
    var timerInterval = setInterval(function (){
        countdown--;
        timer.textContent = "time: " + countdown;
        if(countdown === 0){
            clearInterval(timerInterval);
            Exit();
        }
    }, 1000);
}

// First question
function firstQuestion(){
    // Pushes the actual question to the question line
    questionLine.textContent = questionOne.question;
    // Pushes the answers to the answer buttons
    answerOne.textContent = questionOne.answers[0];
    answerTwo.textContent = questionOne.answers[1];
    answerThree.textContent = questionOne.answers[2];
    // Answer is incorrect, alert, minus time, negative score, calls second question function
    answerOne.addEventListener("click", function(){
        alert("incorrect :(");
        countdown -= 5;
        score -= 1 * 52000;
        secondQuestion();
    });
    // Answer is correct, alert, adds time, adds score, calls second question function
    answerTwo.addEventListener("click", function(){
        alert("correct!");
        countdown += 5;
        score += 1 * 76000;
        secondQuestion();
    });
    answerThree.addEventListener("click", function(){
        alert("incorrect :(");
        countdown -= 5;
        score -= 1 * 52000;
        secondQuestion();
    });
}

// Second question
function secondQuestion(){
    // Hide first question
    questionContainer.classList.add("hide");
    // Make question 2 appear
    questionTwoContainer.classList.remove("hide");
    questionTwoLine.textContent = questionTwo.question;
    answerTwoPointOne.textContent = questionTwo.answers[0];
    answerTwoPointTwo.textContent = questionTwo.answers[1];
    answerTwoPointThree.textContent = questionTwo.answers[2];
    // Incorrect answer, alert, deducts time, deducts score, calls exit page function
    answerTwoPointOne.addEventListener("click", function(){
        alert("incorrect :(");
        countdown -= 5;
        score -= 1 * 52000;
        Exit();
    });
    answerTwoPointTwo.addEventListener("click", function(){
        alert("incorrect :(");
        countdown -= 5;
        score -= 1 * 52000;
        Exit();
    });
    answerTwoPointThree.addEventListener("click", function(){
        alert("correct!");
        countdown += 5;
        score += 76000;
        Exit();
    });
}

// Exit page / game over page
function Exit(){
    // Hides timer
    timer.classList.add("hide");
    // Hides question 1
    questionContainer.classList.add("hide");
    // Hides question 2
    questionTwoContainer.classList.add("hide");
    // Makes exit/game over page appear
    gameOver.classList.remove("hide");
    // Pushes final score to user score line
    document.querySelector("#user-score").textContent = "your score is: " + score;
}

// Start Button
startQuizButton.addEventListener("click", startQuiz)

// Submit initials button, sets user's initials and score values to local storage
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var initials = document.querySelector("#initials").value;
    score.value;
    if(initials === ""){
        alert("pls enter your name, whatever that may be :)<3");
    } else{
        alert("🏀🏀🏀 click the link to view highscores ;)");
        localStorage.setItem("initials", initials);
        localStorage.setItem("score", score);
        var initialsSubmit = document.querySelector("#initials");
        initialsSubmit.value = "";
    }
});


//MAKING NULL DISAPPEAR USING IF STATEMENT ON GETITEM PAGE