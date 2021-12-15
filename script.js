const quizData = [
   { 

    question: "What does HTML stand for?",
    a: "HyperText Markup Language",
    b: "HyperTone Markup Language",
    c: "HyperText Markup Log",
    d: "HiddenText Mark Language",
    correct: "a",
}
{
    question: "What does CSS stand for?",
    a:  "Code Style Sheets",
    b: "Cascading style sheets",
    c: "Colour Static Systems",
    d: "Computer Style Sheet",
    correct: "b",
}
 {
     question: "What is JavaScript?",
     a:"A font name",
     b:"A guide to css and HTML",
     c:"A server for hosting applications",
     d:"A scrypting language used to create and control dynamic web content",
     correct: "d",
 }

 {
    question: "Which language runs in a web browser?",
    a:"Java",
    b:"C",
    c:"Python",
    d:"javascript",
    correct: "d",
}
];

const quiz=document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false) 
}

function getSelected(){
    let answerEls
    answerEls.forEach(answerEl =>{
        if(answerEl.checked) {
            answer = answerEl.id
        }
     })
     return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHtml = `
            <h2> you answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()".reload</button>
            `
        }
    }
})








// let i = 0;
// let score = 0;
// let timerValue = 99;
// const timer = document.querySelector("#time");
// const newMessage = document.querySelector("#message");
// let localScores;
// let scoreLest = [];


// const choiceA = document.getElementById("choiceA");
// const choiceB = document.getElementById("choiceB");
// const choiceC = document.getElementById("choiceC");
// const choiceD = document.getElementById("choiceD");

// function setTimer() {
//   var countdown = setInterval(function () {
//     secondsLeft--;
//     timerElement.textContent = "Time: " + secondsLeft;

//     if (secondsLeft === 0 || questionNumber === questions.length) {
//       clearInterval(countdown);
//       setTimeout(displayScore, 500);
//     }
//   }, 1000);
// }

// function startTimer() {
//   timerInterval = setInterval(decreaseTimer, 1000);
// }

// function stopTimer() {
//   clearInterval(timerInterval);
// }

// function refreshQuiz() {
//   location.reload();
// }
// function questionInit() {
//   choiceA.hidden = false;
//   choiceB.hidden = false;
//   choiceC.hidden = false;
//   choiceD.hidden = false;
//   document.getElementById("startButton").hidden = true;
//   if (i === questions.length) {
//     questionEnder();
//   } else {
//     document.getElementById("question").textContent = questions[i]["title"];
//     document.getElementById("choiceA").textContent = questions[i]["choices"][0];
//     document.getElementById("choiceB").textContent = questions[i]["choices"][1];
//     document.getElementById("choiceC").textContent = questions[i]["choices"][2];
//     document.getElementById("choiceD").textContent = questions[i]["choices"][3];
//   }
// }
