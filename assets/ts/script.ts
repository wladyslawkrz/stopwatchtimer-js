const startTimer: HTMLElement = document.getElementById("startStopwatch")!;
const stopTimer: HTMLElement = document.getElementById("stopStopwatch")!;
const resetTimer: HTMLElement = document.getElementById("resetStopwatch")!;
const timerBlock: HTMLElement = document.getElementById("timerBlock")!;

let seconds: number = 0;
let minutes: number = 0;
let hours: number = 0;
let timeout: number;

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
