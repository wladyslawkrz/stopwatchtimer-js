var startTimer = document.getElementById("startStopwatch");
var stopTimer = document.getElementById("stopStopwatch");
var resetTimer = document.getElementById("resetStopwatch");
var timerBlock = document.getElementById("timerBlock");
var seconds = 0;
var minutes = 0;
var hours = 0;
var timeout;
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
