let numLanes = 3;

function stopwatch_setup() {
    // Main Stopwatch: 
    let stopwatch_main =
        new timing("timerMain", "moveAllBtn");
    document.getElementById("moveAllBtn").onclick = function() {

        if (document.getElementById("moveAllBtn").value == "START") {
            stopwatch_main.status = 0;
            stopwatches_one.status = 0;
            stopwatches_two.status = 0;
            stopwatches_three.status = 0;

        }
        else {
            stopwatch_main.status = 1;
            stopwatches_one.status = 1;
            stopwatches_two.status = 1;
            stopwatches_three.status = 1;
        }
        stopwatch_main.start();
        stopwatches_one.start();
        stopwatches_two.start();
        stopwatches_three.start();

    };
    document.getElementById("resetAllBtn").onclick = function() {
        stopwatch_main.reset();
        stopwatches_one.reset();
        stopwatches_two.reset();
        stopwatches_three.reset();
    };

    // Save Times Button 
    document.getElementById("saveTimes").onclick = function() {
        stopwatches_one.saveTimes();

    };

    // Stopwatch One 
    let stopwatches_one =
        new timing("timerNumber1", "start1", "splitNumber1");
    document.getElementById("start1").onclick = function() {
        stopwatches_one.start();

    };
    document.getElementById("reset1").onclick = function() {
        stopwatches_one.reset();
    };

    document.getElementById("split1").onclick = function() {
        stopwatches_one.split();
    };

    // Stopwatch Two 
    let stopwatches_two =
        new timing("timerNumber2", "start2", "splitNumber2");
    document.getElementById("start2").onclick = function() {
        stopwatches_two.start();
    };
    document.getElementById("reset2").onclick = function() {
        stopwatches_two.reset();
    };
    document.getElementById("split2").onclick = function() {
        stopwatches_two.split();
    };

    // Stopwatch Three  
    let stopwatches_three =
        new timing("timerNumber3", "start3", "splitNumber3");
    document.getElementById("start3").onclick = function() {
        stopwatches_three.start();
    };
    document.getElementById("reset3").onclick = function() {
        stopwatches_three.reset();
    };
    document.getElementById("split3").onclick = function() {
        stopwatches_three.split();
    };
}


// Loads timers on the page
function timing(timerNumber, startNumber, splitNumber) {
    this.status = 0;
    this.time = 0;
    this.timerNBR = document.getElementById(timerNumber);
    this.startBTN = document.getElementById(startNumber);
    this.splitNBR = document.getElementById(splitNumber);
}

// Split Function
timing.prototype.split = function() {
    let textSplit = document.createElement("ol");
    textSplit.append(this.timerNBR.innerHTML = getTime(this.time));
    this.splitNBR.appendChild(textSplit);

};

//  Starts the stopwatches, either through main start or individually
timing.prototype.start = function() {
    if (this.status == 0) {
        this.status = 1;
        this.startBTN.value = "STOP";
        this.count();

    }
    else {
        this.status = 0;
        this.startBTN.value = "START";

    }
    $("#saveNotice").addClass("save");
};

//  Counts the stopwatch increments, both main and individual
timing.prototype.count = function() {
    if (this.status == 1) {
        let that = this;
        setTimeout(function() {
            that.time++;
            that.timerNBR.innerHTML = getTime(that.time);
            that.count();
        }, 10);
        document.getElementById("moveAllBtn").value = "STOP";

    }
    else {
        document.getElementById("moveAllBtn").value = "START";
    }
};

// Resets stopwatches individually
timing.prototype.reset = function() {
    this.status = 0;
    this.time = 0;
    this.startBTN.value = "START";
    this.timerNBR.innerHTML = "00:00.00";
    $(this.splitNBR).find("ol").html("");
    $("#saveNotice").addClass("save");

};


function getTime(time) {

    let min = Math.floor(time / 100 / 60);
    let sec = Math.floor(time / 100);
    let mSec = (time % 100);

    if (min < 10) {
        min = "0" + min;
    }
    if (sec >= 60) {
        sec = sec % 60;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (mSec < 10) {
        mSec = "0" + mSec;
    }

    return min + ":" + sec + "." + mSec;

}

stopwatch_setup();

// Ajax for database 


timing.prototype.saveTimes = function() {

    let race = {
        "team": $("#team_id").val(),
        "username": $("#username_id").val(),
        "meet": $("#meet_id").val(),
        "event": $("#event_id").val(),
        "heat": $("#heat_id").val(),
        "lanes1": $("#lanes1").val(),
        "lanes2": $("#lanes2").val(),
        "lanes3": $("#lanes3").val(),
        "final1": $("#timerNumber1").text(),
        "final2": $("#timerNumber2").text(),
        "final3": $("#timerNumber3").text(),
        "split1": $("#splitNumber1").text(),
        "split2": $("#splitNumber2").text(),
        "split3": $("#splitNumber3").text(),
    };

    $("#timer_form").submit(function(e) {
        $.ajax({
            type: "POST",
            url: "/time",

            data: race,
            success: function(response) {
                console.log(response);
            },
            error: function(error) {
                console.log("error");
            }
        });
        e.preventDefault();
        return true;
    });

    $("#saveNotice").removeClass("save");
    console.log(race);
    return true;
};

function getLane(laneNum) {
    laneNum = String(laneNum);
    let lane = {
        "id": $("#lanes" + laneNum).val(),
        "final": $("#timerNumber" + laneNum).text(),
        "split": $("#splitNumber" + laneNum).text(),
    };

    return lane;
}

function getLanesList() {
    let lanes = [];
    for (let i = 0; i < 3; i++) {
        lanes.push(getLane(i + 1));
    }
    return lanes;
}

// Modal for mobile 
function loadModal() {
    $("#rotateScreenModal").modal("show");

}
