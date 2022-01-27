var startButtonEl = document.getElementById('start-btn');
var startContainerEl = document.getElementById('start-container');
var quizContainerEl = document.getElementById('quiz-container');
var questionEl = document.getElementById('question');
var answersEl = document.getElementById('answer-btns');
var timerEl = document.getElementById('timer');
var timeRemainingEl = document.getElementById('time-remaining');




var quizContent = [
    {
        question: 'Which of the following is not a Javascript Data type?',
        answers: [
            {text: 'Number', correct: false},
            {text: 'Boolean', correct: false},
            {text: 'String', correct: false},
            {text: 'Letter', correct: true}
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: '<callscript>', correct: false},
            {text: '<js>', correct: false},
            {text: '<javascript>', correct: false},
            {text: '<script>', correct: true}
        ]
    },
    {
        question: 'API stands for ___?',
        answers: [
            {text: 'application programming interface', correct: true},
            {text: 'advanced program interaction', correct: false},
            {text: 'allocated product inquiry', correct: false},
            {text: 'applied programming interface', correct: false}
        ]
    },
    {
        question: 'The ___ method repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.',
        answers: [
            {text: 'clearInterval()', correct: false},
            {text: 'setInterval()', correct: true},
            {text: 'eval()', correct: false},
            {text: 'myArray()', correct: false}
        ]
    },
    {
        question: 'DOM stands for ___.',
        answers: [
            {text: 'dedicated operating mode', correct: false},
            {text: 'delineated object mode', correct: false},
            {text: 'document object model', correct: true},
            {text: 'digital operating manager', correct: false}
        ]
    },
]