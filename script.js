// Get html elements
var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn");                                       
var timerEl = document.getElementById("timer");
var submitscoreEl = document.querySelector("#submit-score");
var userScoreEl = document.getElementById("user-score");
var userNameInput;
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
var questionNumber = -1;
var answer;

var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
        answer: "<script>"
    },

    {
        title: "What is the correct place to insert a JavaScript",
        choices: ["The <head> section", "Both the <head> and the <body> section", "The <body> section"],
        answer: "Both the <head> and the <body> section"
    },

    {
        title: "What is the correct syntax for reffering to an external script call 'xxx.js'",
        choices: ["<script name='xxx.js'>", "<script href='xxx.js'>", "<script src='xxx.js'>"],
        answer: "<script src='xxx.js'>"
    },

    {
        title: "What is the correct way to write a JavaScript array?",
        choices: ["var colors = (1:'red',2:'green', 3:'blue')", "var colors = 'red', 'green'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = ['red', 'green', 'blue']"],
        answer: "var colors = ['red', 'green', 'blue']"
    },
 
    {
        title: "JavaScript is case-sensitive?",
        choices: ["True", "False"],
        answer: "True"
    },
];

var secondsLeft = (questions.length * 20 + 1);  

//Start timer
function startTimer() {
 
    document.getElementById("home").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');

    setTimer();

    makeQuestions();
}

function setTimer() {

    var countdown = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

function makeQuestions() {
    questionNumber++;
    if (questions[questionNumber] != null) {
        answer = questions[questionNumber].answer
    

    questionHead.textContent = questions[questionNumber].title;
    answerChoices.innerHTML = "";

    var choices = questions[questionNumber].choices;

    for (var q = 0; q < choices.length; q++) {
        var nextChoice = document.createElement("button");

        nextChoice.textContent = choices[q]
        answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn btn-light btn-block");
    }
    }
}


function displayScore() {
    document.getElementById("quiz").classList.add('d-none');
    document.getElementById("submit-score").classList.remove('d-none');
    userScoreEl.textContent = "FINAL SCORE: " + secondsLeft + ".";
}


startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    addScore();
    
    window.location.href = './highscores.html'
});

function addScore () {
    userNameInput = document.getElementById("userName").value
    
//     // create a new object with name and score keys
var newScore = {
        name: userNameInput,
        score: secondsLeft
    };
    console.log(secondsLeft)
    // check if there are scores in local storage first and take value
    //if not, make a blank array
    var highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    // push object into score array
    highScores.push(newScore)
    // turn objects into an array of strings + put it into local storage
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function hideFeedback(){
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.style.display='none'
}

function showFeedback(){
    var pElement = document.getElementsByClassName("feedback")[0]
    pElement.removeAttribute('style');
}

answerChoices.addEventListener("click", function (event) {
    var pElement = document.getElementsByClassName("feedback")[0]
    
//     // evaluation of user's answer choices & feedback
    if (answer === event.target.textContent) {   
        pElement.innerHTML = "YES!";
        setTimeout(hideFeedback,1225);
        showFeedback();   
        
    } else {
        pElement.innerHTML = "WRONG.";
        setTimeout(hideFeedback,1225);
        secondsLeft = secondsLeft - 20;
        showFeedback();
    }    
    makeQuestions();
});


