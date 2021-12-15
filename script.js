let i = 0;
let score = 0;
let timerValue = 99;
const timer = document.querySelector("#time");
const newMessage = document.querySelector("#message");
let localScores;
let scoreLest = [];

const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");

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

function startTimer() {
  timerInterval = setInterval(decreaseTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function refreshQuiz() {
  location.reload();
}
function questionInit() {
  choiceA.hidden = false;
  choiceB.hidden = false;
  choiceC.hidden = false;
  choiceD.hidden = false;
  document.getElementById("startButton").hidden = true;
  if (i === questions.length) {
    questionEnder();
  } else {
    document.getElementById("question").textContent = questions[i]["title"];
    document.getElementById("choiceA").textContent = questions[i]["choices"][0];
    document.getElementById("choiceB").textContent = questions[i]["choices"][1];
    document.getElementById("choiceC").textContent = questions[i]["choices"][2];
    document.getElementById("choiceD").textContent = questions[i]["choices"][3];
  }
}
