// when I click start button, timer begins and I am presented with question
// when I answer question, then presented with another question
// when I answer incorrectly, time is subtracted from the clock
// when all questions r answered or time runs out, then the game is over
// when the game is over, I can save my initials and score.

//append to main

// var mainPage = document.querySelector("#main-page");


//Timer
var timer = document.querySelector("#timer");

var countdown = 60;

var score = 0;
//thinking i'll do var SCORE = 0; and then some math shit to triple the score, but each time click correct or incorrect the SCORE = 0 will be added to or decreased from.


var startQuizButton = document.querySelector("#start-quiz-button");
var questionContainer = document.querySelector("#question-container"); //question 1
var questionLine = document.querySelector("#question"); //question 1
// var answerButtons = document.querySelector("#answer-buttons");
var answerOne = document.querySelector("#answer-1"); //question 1
var answerTwo = document.querySelector("#answer-2"); //question 1
var answerThree = document.querySelector("#answer-3"); //question 1

//question 2
var questionTwoContainer = document.querySelector("#question2-container");
var questionTwoLine = document.querySelector("#question2");
var answerTwoPointOne = document.querySelector("#answer-2-1");
var answerTwoPointTwo = document.querySelector("#answer-2-2");
var answerTwoPointThree = document.querySelector("#answer-2-3");

//Exit page
var gameOver = document.querySelector("#game-over");
var submitButton = document.querySelector("#submit-btn");


// var questions = [
//     // {
//     //     question: "what is my favourite fruit?",
//     //     answers: [
//     //         {text: "peach", correct: true},
//     //         {text: "grape", correct: false},                            //index[0]
//     //         {text: "apple", correct: false}
//     //     ]
//     // },
//     // {
//     //     question: "what colour are you?",
//     //     answers: [
//     //         {text: "blue", correct: false},
//     //         {text: "purple", correct: true},                            //index[1]
//     //         {text: "yellow", correct: false}
//     //     ]
//     // }
// ]

var questionOne = {
    question: "how do you link js to your html?",
    answers: ["link", "script", "href"],
};

var questionTwo = {
    question: "what could you use to select an element?",
    answers: ["querySelector", "getElementById", "both!"],
}

// var questionsGoHere = document.querySelector(".container");

// After start quiz button is clicked and the quiz has started, the start button will hide.
function startQuiz(){
    startQuizButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    startTimer();
    firstQuestion();
    
    // var index = 0;
    // var questions = [
    //     {
    //         question: "what is my favourite fruit?",
    //         correctAnswer: "peach",
    //         answerTwo: "grape",
    //         answerThree: "apple"
    //     },
    //     {
    //         question: "what colour are you?",
    //         answerOne: "blue",
    //         correctAnswer: "purple",
    //         answerThree: "yellow"
    //     }
    // ]

}

// Timer function after it is called by clicking start quiz, starts to count down from 60 secs. When time runs out, goes to game over page.
function startTimer(){
    var timerInterval = setInterval(function (){
        countdown--;
        timer.textContent = "Time: " + countdown;
        if(countdown === 0){
            clearInterval(timerInterval);
            Exit();
        }
    }, 1000);
}

function firstQuestion(){
    questionLine.textContent = questionOne.question;
    answerOne.textContent = questionOne.answers[0];
    answerTwo.textContent = questionOne.answers[1];
    answerThree.textContent = questionOne.answers[2];

    answerOne.addEventListener("click", function(){
        alert("incorrect :(");
        countdown -= 5;
        score -= 1 * 52000;
        secondQuestion();
    });
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

    // answerButtons.textContent = questions[0].answers;
    // var index = 0;
    // showQuestion()
}

function secondQuestion(){
    questionContainer.classList.add("hide");
    questionTwoContainer.classList.remove("hide");
    questionTwoLine.textContent = questionTwo.question;
    answerTwoPointOne.textContent = questionTwo.answers[0];
    answerTwoPointTwo.textContent = questionTwo.answers[1];
    answerTwoPointThree.textContent = questionTwo.answers[2];

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

function Exit(){
    timer.classList.add("hide");
    questionContainer.classList.add("hide");
    questionTwoContainer.classList.add("hide");
    gameOver.classList.remove("hide");
    document.querySelector("#user-score").textContent = "your score is: " + score;
}


startQuizButton.addEventListener("click", startQuiz)
    // startQuizButton.hidden = true;

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
    }
});