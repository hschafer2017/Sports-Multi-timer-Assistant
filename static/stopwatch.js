var status_sw1 = 0;
var status_sw2 = 0;
var status_sw3 = 0;

var time_sw1 = 0;
var time_sw2 = 0;
var time_sw3 = 0;

var startBtn1 = document.getElementById("start1");
var startBtn2 = document.getElementById("start2");
var startBtn3 = document.getElementById("moveAllBtn");

var timerLabel1 = document.getElementById("timerLabel1");
var timerLabel2 = document.getElementById("timerLabel2");
var timerLabel3 = document.getElementById("timerLabel3");

var moveAllBtn = document.getElementById("moveAllBtn");

function moveAll(obj) {

    if (obj.value == 'START') {
        $('#saveNotice').addClass('save')
        status_sw1 = 1;
        status_sw2 = 1;
        status_sw3 = 1;
        timer1();
        timer2();
        timer3();
        startBtn1.value = "STOP";
        startBtn2.value = "STOP";
        startBtn3.value = "STOP";
        obj.value = "STOP";
        $('#moveAllBtn').removeClass('.btn btn-success')
        $('#moveAllBtn').addClass('.btn btn-danger')
        $('#start1').removeClass('.btn btn-success')
        $('#start1').addClass('.btn btn-danger')
        $('#start2').removeClass('.btn btn-success')
        $('#start2').addClass('.btn btn-danger')


    }
    else {
        status_sw1 = 0;
        status_sw2 = 0;
        status_sw3 = 0;
        startBtn1.value = "START";
        startBtn2.value = "START";
        startBtn3.value = "START";
        obj.value = "START";
        $('#moveAllBtn').removeClass('.btn btn-danger')
        $('#moveAllBtn').addClass('.btn btn-success')
        $('#start1').removeClass('.btn btn-danger')
        $('#start1').addClass('.btn btn-success')
        $('#start2').removeClass('.btn btn-danger')
        $('#start2').addClass('.btn btn-success')
    }

}

function resetAll(obj) {
    var stopwatch = obj.id;
    console.log('resetMain')
    if (stopwatch == 'resetMain') {
        console.log('reset if')
        status_sw1 = 0;
        time_sw1 = 0;
        timerLabel1.innerHTML = "00:00.00";
        startBtn1.value = "START";
        status_sw2 = 0;
        time_sw2 = 0;
        timerLabel2.innerHTML = "00:00.00";
        startBtn2.value = "START";
        status_sw3 = 0;
        time_sw3 = 0;
        timerLabel3.innerHTML = "00:00.00";
        startBtn3.value = "START";
        $("span").html("");
        $('#saveNotice').addClass('save')
    }

}

function start_stop(obj) {

    var stopwatch = obj.id;

    if (stopwatch == 'start1') {
        if (status_sw1 == 0) {
            status_sw1 = 1;
            timer1();
            $('#start1').removeClass('.btn btn-success')
            $('#start1').addClass('.btn btn-danger')
        }
        else {
            status_sw1 = 0;
            $('#start1').removeClass('.btn btn-danger')
            $('#start1').addClass('.btn btn-success')
        }
    }

    if (stopwatch == 'start2') {
        if (status_sw2 == 0) {
            status_sw2 = 1;
            timer2();
            $('#start2').removeClass('.btn btn-success')
            $('#start2').addClass('.btn btn-danger')
        }
        else {
            status_sw2 = 0;
            $('#start2').removeClass('.btn btn-danger')
            $('#start2').addClass('.btn btn-success')
        }
    }

    if (stopwatch == 'moveAllBtn') {
        console.log('stop all')
        if (status_sw3 == 0) {
            console.log('start all if')
            status_sw3 = 1;
            timer3();
        }
        else {
            status_sw3 = 0;
            console.log('stop all else')
        }
    }

    if (obj.value == "START") {
        obj.value = "STOP";
        $('#moveAllBtn').removeClass('.btn btn-success')
        $('#moveAllBtn').addClass('.btn btn-danger')
        $('#saveNotice').addClass('save')

    }
    else {
        obj.value = "START";
        $('#start2').removeClass('.btn btn-danger')
        $('#start2').addClass('.btn btn-success')
    }
}


function reset(obj) {
    var stopwatch = obj.id;
    $('#saveNotice').addClass('save')
    if (stopwatch == 'reset1') {
        status_sw1 = 0;
        time_sw1 = 0;
        timerLabel1.innerHTML = "00:00.00";
        startBtn1.value = "START";
        $("#splits1").html("");
    }

    if (stopwatch == 'reset2') {
        status_sw2 = 0;
        time_sw2 = 0;
        timerLabel2.innerHTML = "00:00.00";
        startBtn2.value = "START";
        $("#splits2").html("")
    }

    if (stopwatch == 'reset3') {
        status_sw3 = 0;
        time_sw3 = 0;
        timerLabel3.innerHTML = "00:00.00";
        startBtn3.value = "START";
    }

}


function timer1() {
    if (status_sw1 == 1) {
        setTimeout(function() {
            time_sw1++;
            timerLabel1.innerHTML = getTime(time_sw1);
            timer1();
        }, 10);
    }
    checkAllBtn();
}

function timer2() {
    if (status_sw2 == 1) {
        setTimeout(function() {
            time_sw2++;
            timerLabel2.innerHTML = getTime(time_sw2);
            timer2();
        }, 10);
    }
    checkAllBtn();
}

function timer3() {
    if (status_sw3 == 1) {
        setTimeout(function() {
            time_sw3++;
            timerLabel3.innerHTML = getTime(time_sw3);
            timer3();
        }, 10);
    }
    checkAllBtn();
}



function checkAllBtn() {

    if (status_sw1 == 1 || status_sw2 == 1 || status_sw3 == 1) {
        moveAllBtn.value = "STOP";
    }

    if (status_sw1 == 0 && status_sw2 == 0 && status_sw3 == 0) {
        moveAllBtn.value = "START";
    }

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


var splitLabel1 = document.getElementById("split1")

function split(obj) {

    var splits = obj.id;
    if (splits == 'split1') {
        splitLabel1.innerHTML = getTime(time_sw1);
        let blockDiv = document.getElementById("splits1");
        let textSpan = document.createElement("span");
        textSpan.append(getTime(time_sw1) + " ");
        blockDiv.appendChild(textSpan);
    }
    if (splits == 'split2') {
        splitLabel1.innerHTML = getTime(time_sw2);
        let blockDiv = document.getElementById("splits2");
        let textSpan = document.createElement("span");
        textSpan.append(getTime(time_sw1) + " ");
        blockDiv.appendChild(textSpan);
    }

}

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

// TEST ADDITION FOR GIT ROLLBACK