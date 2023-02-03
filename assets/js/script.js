// const timer = document.getElementById('time');
const startTimer = document.getElementById("startStopwatch");
const stopTimer = document.getElementById("stopStopwatch");
const resetTimer = document.getElementById("resetStopwatch");
const timerBlock = document.getElementById("timerBlock");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timeout;

startTimer.onclick = function () {
  add();
};
stopTimer.onclick = function () {
  clearTimeout(timeout);
};
resetTimer.onclick = function () {
  timerBlock.textContent = "0:00:00";
  seconds = 0;
  minutes = 0;
  hours = 0;
};

function tick() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }
}

function add() {
  tick();
  timerBlock.textContent =
    +(hours > 9 ? hours : "0" + hours) +
    ":" +
    (minutes > 9 ? minutes : "0" + minutes) +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);
  timeout = setTimeout(add, 1000);
}
