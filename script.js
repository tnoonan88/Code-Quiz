var quizContent = [
    {
        question: 'Which of the following is not a Javascript Data type?',
        answer1: "Number", 
        answer2: "Boolean", 
        answer3: "String", 
        answer4: "Letter", 
        correct: "Letter"
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answer1: "<callscript>", 
        answer2: "<script>", 
        answer3: "<js>", 
        answer4: "<javascript>", 
        correct: "<script>"
    },
    {
        question: 'API stands for ___?',
        answer1: "application programming interface", 
        answer2: "advanced program interaction", 
        answer3: "allocated product inquiry", 
        answer4: "applied programming interaction", 
        correct: "application programming interface"
    },
    {
        question: 'The ___ method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.',
        answer1: "clearInterval()", 
        answer2: "setInterval()", 
        answer3: "eval()", 
        answer4: "myArray()", 
        correct: "setInterval()"
    },
    {
        question: 'DOM stands for ___.',
        answer1: "dedicated operating mode", 
        answer2: "delineated object mode", 
        answer3: "document object model", 
        answer4: "digital operating model", 
        correct: "document object model"
    }
];
var startBtnEl = document.getElementById('start-btn');
var startContainerEl = document.getElementById('start-container');
var quizContainerEl = document.getElementById('quiz-container');
var scoreCardEl = document.getElementById('scorecard');
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answer-btns');
var timerEl = document.getElementById('timer');
var timeLeft = 60;
var timeRemainingEl = document.getElementById('time-remaining');

var btn1El = document.getElementById('btn1');
var btn2El = document.getElementById('btn2');
var btn3El = document.getElementById('btn3');
var btn4El = document.getElementById('btn4');
var quizNumber = 0;

function nextQuestion() {
    questionEl.textContent = quizContent[quizNumber].question
    btn1El.textContent = quizContent[quizNumber].answer1
    btn2El.textContent = quizContent[quizNumber].answer2
    btn3El.textContent = quizContent[quizNumber].answer3
    btn4El.textContent = quizContent[quizNumber].answer4
}

function endGame() {
        quizContainerEl.classList.add('hide');
        scoreCardEl.classList.remove('hide');
        var scoreHeadline = document.createElement('h2');
        scoreHeadline.textContent = 'Your Score: ' + timeLeft;
        scoreCardEl.append(scoreHeadline);
}

function startGame() {
    startContainerEl.classList.add('hide')
    var timer = setInterval(function() {
        timeLeft--
        timeRemainingEl.textContent = timeLeft
        if (quizNumber === 5 || timeLeft ===0) {
            clearInterval(timer)
            endGame()
        }
    }, 1000)
    quizContainerEl.classList.remove('hide')
    nextQuestion()
}

function checkAnswer(userChoice) {
    console.log(userChoice)
    if (userChoice === quizContent[quizNumber].correct) {
        alert('Correct!')
    }
    else {
        alert('Incorrect!')
        timeLeft=timeLeft-10
    }
}

startBtnEl.addEventListener('click', startGame)

btn1El.addEventListener('click', function(event){
    event.preventDefault()
    console.log(event.target.innerText)
    checkAnswer(event.target.innerText)
    quizNumber++
    nextQuestion()
})
btn2El.addEventListener('click', function(event){
    event.preventDefault()
    console.log(event.target.innerText)
    checkAnswer(event.target.innerText)
    quizNumber++
    nextQuestion()
})
btn3El.addEventListener('click', function(event){
    event.preventDefault()
    console.log(event.target.innerText)
    checkAnswer(event.target.innerText)
    quizNumber++
    nextQuestion()
})
btn4El.addEventListener('click', function(event){
    event.preventDefault()
    console.log(event.target.innerText)
    checkAnswer(event.target.innerText)
    quizNumber++
    nextQuestion()
})