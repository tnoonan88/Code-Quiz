var startBtnEl = document.getElementById('start-btn');
var startContainerEl = document.getElementById('start-container');
var quizContainerEl = document.getElementById('quiz-container');
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

function startGame() {
    startContainerEl.classList.add('hide')
    var timer = setInterval(function() {
        timeLeft--
        timeRemainingEl.textContent = timeLeft
        if (quizNumber === 5) {
            clearInterval(timer)
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
        timeLeft=timeLeft-5
    }
}

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
        question: 'Which of the following is not a Javascript Data word?',
        answer1: "Number", 
        answer2: "Boolean", 
        answer3: "String", 
        answer4: "Letter", 
        correct: "Letter"
    },
    {
        question: 'Which of the following is not a Javascript Data things?',
        answer1: "Number", 
        answer2: "Boolean", 
        answer3: "String", 
        answer4: "Letter", 
        correct: "Letter"
    },
    {
        question: 'Which of the following is not a Javascript Data stuff?',
        answer1: "Number", 
        answer2: "Boolean", 
        answer3: "String", 
        answer4: "Letter", 
        correct: "Letter"
    },
    {
        question: 'Which of the following is not a Javascript Data do better?',
        answer1: "Number", 
        answer2: "Boolean", 
        answer3: "String", 
        answer4: "Letter", 
        correct: "Letter"
    }
    // {
    //     question: 'Inside which HTML element do we put the JavaScript?',
    //     answers: [
    //         {text: '<callscript>', correct: false},
    //         {text: '<js>', correct: false},
    //         {text: '<javascript>', correct: false},
    //         {text: '<script>', correct: true}
    //     ]
    // },
    // {
    //     question: 'API stands for ___?',
    //     answers: [
    //         {text: 'application programming interface', correct: true},
    //         {text: 'advanced program interaction', correct: false},
    //         {text: 'allocated product inquiry', correct: false},
    //         {text: 'applied programming interface', correct: false}
    //     ]
    // },
    // {
    //     question: 'The ___ method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.',
    //     answers: [
    //         {text: 'clearInterval()', correct: false},
    //         {text: 'setInterval()', correct: true},
    //         {text: 'eval()', correct: false},
    //         {text: 'myArray()', correct: false}
    //     ]
    // },
    // {
    //     question: 'DOM stands for ___.',
    //     answers: [
    //         {text: 'dedicated operating mode', correct: false},
    //         {text: 'delineated object mode', correct: false},
    //         {text: 'document object model', correct: true},
    //         {text: 'digital operating manager', correct: false}
    //     ]
    // },
]

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