var timer = document.getElementById('time');
var startTimer = document.getElementsByName('startStopwatch');
var stopTimer = document.getElementById('stopStopwatch');
var resetTimer = document.getElementById('resetStopwatch');
var timerBlock = document.getElementById('timerBlock')

var seconds = 0;
var minutes = 0;
var hours = 0;

var t;

function stopwatchTimer() {
  t = setTimeout(add, 1000);
}

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
  timerBlock.textContent() = (hours > 9 ? hours : "0" + hours) + ":" +
    (minutes > 9 ? minutes : "0" + minutes) + ":" +
    (seconds > 9 ? seconds : "0" + seconds);
  stopwatchTimer();
}

stopwatchTimer();

startTimer.click() = stopwatchTimer();
stopTimer.click() = function() {
    clearTimeout(t);
}

resetTimer.click() = function() {
    timer.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}