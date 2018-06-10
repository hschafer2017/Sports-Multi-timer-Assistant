function init() {
    // Main Stopwatch: 
    var stopwatch_main = new Timer("timerMain", "moveAllBtn");
    document.getElementById("moveAllBtn").onclick = function() {

        if (document.getElementById("moveAllBtn").value == 'START') {
            stopwatch_main.status = 0;
            stopwatch0.status = 0;
            stopwatch1.status = 0;
            console.log('start all')
            stopwatch3.status = 0;

        }
        else {
            stopwatch_main.status = 1;
            stopwatch0.status = 1;
            stopwatch1.status = 1;
            stopwatch3.status = 1;
        }
        stopwatch_main.start();
        stopwatch0.start();
        stopwatch1.start();
        stopwatch3.start();

    }
    document.getElementById("resetAllBtn").onclick = function() {
        stopwatch_main.reset()
        stopwatch0.reset();
        stopwatch1.reset();
        stopwatch3.reset();
        console.log('reset all')
    }

    // Stopwatch One 
    var stopwatch0 = new Timer("timerLabel0", "start0", "splitLabel0");
    document.getElementById("start0").onclick = function() {
        stopwatch0.start();

    }
    document.getElementById("reset0").onclick = function() {
        stopwatch0.reset();
    }

    document.getElementById("split0").onclick = function() {
        stopwatch0.split();
    }

    // Stopwatch Two 
    var stopwatch1 = new Timer("timerLabel1", "start1", "splitLabel1");
    document.getElementById("start1").onclick = function() {
        console.log("second timer")
        stopwatch1.start();
    }
    document.getElementById("reset1").onclick = function() {
        console.log('second timer reset')
        stopwatch1.reset();
    }
    document.getElementById("split1").onclick = function() {
        stopwatch1.split();
    }

    // Stopwatch Three  
    var stopwatch3 = new Timer("timerLabel3", "start3", "splitLabel3");
    document.getElementById("start3").onclick = function() {
        stopwatch3.start();
    }
    document.getElementById("reset3").onclick = function() {
        stopwatch3.reset();
    }
    document.getElementById("split3").onclick = function() {
        stopwatch3.split();
    }
}


// Loads timers on the page
function Timer(timerLabelId, startBtnId, splitLabelId) {
    this.status = 0;
    this.time = 0;
    this.timerLabel = document.getElementById(timerLabelId);
    this.startBtn = document.getElementById(startBtnId);
    this.splitLabel = document.getElementById(splitLabelId);
}

Timer.prototype.split = function() {
    let textSplit = document.createElement('ol')
    textSplit.append(this.timerLabel.innerHTML = getTime(this.time))
    this.splitLabel.appendChild(textSplit)
    console.log('split successful')

}

//  Starts the stopwatches, either through main start or individually
Timer.prototype.start = function() {
    if (this.status == 0) {
        this.status = 1;
        this.startBtn.value = "STOP";
        this.count();

    }
    else {
        this.status = 0;
        this.startBtn.value = "START";

    }
    $('#saveNotice').addClass('save')
}

//  Counts the stopwatch increments, both main and individual
Timer.prototype.count = function() {
    if (this.status == 1) {
        var that = this;
        setTimeout(function() {
            that.time++;
            that.timerLabel.innerHTML = getTime(that.time);
            that.count();
        }, 10);
        document.getElementById("moveAllBtn").value = 'STOP';

    }
    else {
        document.getElementById("moveAllBtn").value = 'START';
    }
}

// Resets stopwatches individually
Timer.prototype.reset = function() {
    console.log("reset")
    this.status = 0;
    this.time = 0;
    this.startBtn.value = "START";
    this.timerLabel.innerHTML = "00:00.00";
    $('ol').html("")
    $('#saveNotice').addClass('save')

}


function getTime(time) {

    var min = Math.floor(time / 100 / 60);
    var sec = Math.floor(time / 100);
    var mSec = time % 100;

    if (min < 10) {
        min = "0" + min;
    }
    if (sec >= 60) {
        sec = sec % 60;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    return min + ":" + sec + "." + mSec;

}

init();


// AJAX for timer.py

$(function() {
    var frm = $('#timer_form');
    frm.submit(function(ev) {
        var h1 = document.getElementsByTagName('h1')[0]
        console.log('try')
        $.ajax({
            url: '/time',
            data: { 'time': h1.textContent },
            type: 'POST',
            success: function(response) {
                console.log("success");
            },
            error: function(error) {
                console.log("error");
            }
        });

        ev.preventDefault();
        $('#saveNotice').removeClass('save')
    })
});