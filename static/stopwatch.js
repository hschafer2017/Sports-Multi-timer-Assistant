var h3 = document.getElementsByTagName('h3')[0],
     start = document.getElementById('start'),
     stop = document.getElementById('stop'),    
     clear = document.getElementById('reset'),
    milliseconds = 0, seconds = 0, minutes = 0,
    t;

/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
};

/* Clear button */
clear.onclick = function() {
    clearTimeout(t);
    h3.textContent = "00:00:00";
    milliseconds = 0;
    seconds = 0; minutes = 0;
};

function add() {
    milliseconds++;
    if (milliseconds >= 60) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
    }
    h3.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") + ":" + (milliseconds > 9 ? milliseconds : "0" + milliseconds);
    timer();
    
}

function timer() {
    t = setTimeout(add, 10);
}