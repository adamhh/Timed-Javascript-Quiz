// Get html elements
var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("button.submitBtn");
var secondsLeft = (questions.length * 20 + 1);                                          
var timerEl = document.getElementById("timer");
var submitscoreEl = document.querySelector("#submit-score");
var userScoreEl = document.getElementById("user-score");
var userNameInput;
var questionHead = document.getElementById("questions");
var answerChoices = document.getElementById("answers");

var questionNumber = -1;
var answer;
//Add questions for quiz
var questions = [
    {
        title: "t",
        choices: ["t"],
        answer: ""
    },

    {
        title: "t",
        choices: ["t"],
        answer: "t"
    },

    {
        title: "t",
        choices: ["t"],
        answer: "t"
    },

    {
        title: "t",
        choices: ["t"],
        answer: "t"
    },
 
    {
        title: "t",
        choices: ["t"],
        answer: "t"
    },

  console.log(questions)
];


//Start timer

// function startTimer() {
//     document.getElementById("home").classList.add("d-none");
//     document.getElementById("quiz").classList.remove("d-none");

//     setTimer();

//     makeQuestions();
// }

// function setTimer() {
//     var countDown = setInterval(function () {
//         secondsLeft--;
//         timerEl.textContent = "secondsLeft";
        
//         if (secondsLeft === 0 || questionNumber === questions.length) {
//             clearInterval(countDown);
//             setTimeout(displayScore, 500);
//         }
//     }, 1000)
// }

// function makeQuestions() {
//     questionNumber++;
//     answer = questions[questionNumber].answer;

//     questionHead.textContent = questions[questionNumber].title;
//     answerChoices.innerHTML = "";

//     var choices = questions[questionNumber].choices;

//     for (var q= 0; q < choices.length; q++) {
//         var nextChoice = document.createElement("button");

//         nextChoice.textContent = choices[q];
//         answerBtn = answerChoices.appendChild(nextChoice).setAttribute("class", "p-3 m-1 btn-light btn-block");
//     }
// }

// function displayScore() {
//     document.getElementById("quiz").classList.add("d-none");
//     document.getElementById("submit-score").classList.remove("d-none");
//     userScoreEl.textContent = "Your Score:" + secondsLeft + ".";
// }

// startBtn.addEventListener("click", startTimer);
// submitBtn.addEventListener("click", function (event) {
//     event.stopPropagation();
//     addScore();

//     window.location.href = "highscores.html"
// });

// function addScore () {
//     userNameInput = document.getElementById("userName").nodeValue

//     var newScore = {
//         name: userNameInput,
//         score: secondsLeft
//     }

//     var highScores = JSON.parse(localStorage.getItem("highscores") || "[]");

//     highScores.push(newScore);

//     localStorage.setItem("highScores", JSON.stringify(highScores));
// }

// function hideFeedback() {
//     var pElement = document.getElementsByClassName("feedback")[0]
//     pElement.getElementsByClassName.display="none"
// }

// function showFeedBack() {
//     var pElement = getElementsByClassName("feedback")[0]
//     pElement.removeAttribute("style")
// }

// answerChoices.addEventListener("click", function (event){
//     var pElement = document.getElementsByClassName("feedback")[0]

//     if (answer === event.target.textContent){
//         pElement.innerHTML = "Correct!";
//         setTimeout(hideFeedback,1225);
//         showFeedBack();
//     } else{
//         pElement.innerHTML = "Incorrect!"
//         setTimeout(hideFeedback,1225);
//         secondsLeft = secondsLeft - 20;
//         showFeedBack();
//     }
//     makeQuestions();
// })

function startTimer() {
 
    document.getElementById("home").classList.add('d-none');
    document.getElementById("quiz").classList.remove('d-none');

    // timer set and begins 120 second countdown
    setTimer();

    // create questions to display
    makeQuestions();
}

function setTimer() {

    var countdown = setInterval(function () {
        secondsLeft--;
        timerElement.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || questionNumber === questions.length) {
            clearInterval(countdown);
            setTimeout(displayScore, 500);
        }
    }, 1000);
}

function makeQuestions() {
    questionNumber++;
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

// display option to enter name to scoreboard
function displayScore() {
    document.getElementById("quiz").classList.add('d-none');
    document.getElementById("submit-score").classList.remove('d-none');
    userScoreElement.textContent = "FINAL SCORE: " + secondsLeft + ".";
}

// Event Listeners for Main Buttons
startBtn.addEventListener("click", startTimer);
submitBtn.addEventListener("click", function (event) {
    event.stopPropagation();
    addScore();
    
    window.location.href = './highscores.html'
});

function addScore () {
    userNameInput = document.getElementById("userName").value
    
    // create a new object with name and score keys
var newScore = {
        name: userNameInput,
        score: secondsLeft
    };
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
    
    // evaluation of user's answer choices & feedback
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

