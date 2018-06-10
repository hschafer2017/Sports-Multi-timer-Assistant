THIS APPLICATION IS FOR EDUCATIONAL USE ONLY. 

THIS APPLICATION IS NOT FOR COMMERCIAL USE. 


The Javascript function running the stopwatch is modified from Coding with Sara's website for this application. 
Reset functions were modified. 
Split functions were added. 
Start/Stop functions were modified for a style change in buttons using jQuery. 

git reset --hard <tag/master/846bd1862502201c8cb909302153be5509430d46>



EXPLAIN WHY THIS DOESN'T/WOULDN'T WORK
var stopwatches = [];
    var i; 
    for (i=0; i<=1; i++) {
        var stopwatch = new Timer("timerLabel" + i, "start" + i, "splitLabel" + i);
        stopwatches.push(stopwatch);
        console.log(i)
        document.getElementById("start" + i).onclick = function() {
            stopwatches[i].start();
        }
        
        document.getElementById("reset" + i).onclick = function() {
            stopwatches[i].reset();
        }
    
        document.getElementById("split" + i).onclick = function() {
            stopwatches[i].split();
        }
        console.log(stopwatches)
    }
    
    
    
    
// var stopwatches = [];
    // var i;
    // for (i = 0; i <= 1; i++) {
    //     var stopwatch = new Timer("timerLabel" + i, "start" + i, "splitLabel" + i);
    //     stopwatches.push(stopwatch);
    //     console.log(i)
    //     document.getElementById("start" + i).onclick = function() {
    //         // stopwatches[0].start()
    //         chooseStopwatch(i)
    //     }

    //     document.getElementById("reset" + i).onclick = function() {
    //         stopwatches[0].reset();
    //     }

    //     document.getElementById("split" + i).onclick = function() {
    //         stopwatches[0].split();
    //     }
    //     console.log(stopwatches)
    // }



    // document.getElementById("start0").onclick = function() {
    //     stopwatches[0].start();
    // }

    // document.getElementById("reset0").onclick = function() {
    //     stopwatches[0].reset();
    // }

    // document.getElementById("split0").onclick = function() {
    //     stopwatches[0].split();
    // }


    // document.getElementById("start1").onclick = function() {
    //     stopwatches[1].start();

    // }
    // document.getElementById("reset1").onclick = function() {
    //     stopwatches[1].reset();
    // }

    // document.getElementById("split1").onclick = function() {
    //     stopwatches[1].split();
    // }





    // for (i = -1; i <= 2; i++) {
    //     console.log(i)
    //     while (i >= -1 && i <= 2) {
    //         i++
    //         console.log(i)

    //             var timer_label_id = "timerLabel" + (i);
    //             var start_button_id = "start" + (i);
    //             var reset_button_id = "reset" + (i);
    //             var split_button_id = "splitLabel" + (i);
    //             console.log(timer_label_id)
    //             stopwatches.push(new Timer(timer_label_id, start_button_id, split_button_id));

    //             document.getElementById("start" + (i)).onclick = function() {
    //                 stopwatches[i].start();

    //             }
    //             document.getElementById("reset" + (i)).onclick = function() {
    //                 stopwatches[i].reset();
    //             }

    //             // document.getElementById("splitLabel" + (i)).onclick = function() {
    //             //     stopwatches[i].split();
    //             // }


    //     }

    //     // var timer_label_id = "timerLabel" + (i);
    //     // var start_button_id = "start" + (i);
    //     // var split_button_id = "splitLabel" + (i);
    //     // stopwatches.push(new Timer(timer_label_id, start_button_id, split_button_id));

    //     // document.getElementById("start" + i).onclick = function() {
    //     //     stopwatches[i].start();

    //     // }
    //     // document.getElementById("reset" + i).onclick = function() {
    //     //     stopwatches[i].reset();
    //     // }

    //     // document.getElementById("split" + i).onclick = function() {
    //     //     stopwatches[i].split();
    //     // }
    // }


    // var timer_label_id = "timerLabel" + 2;
    // var start_button_id = "start" + 2;
    // var split_button_id = "splitLabel" + 2;

    // stopwatches.push(new Timer(timer_label_id, start_button_id, split_button_id));

    // document.getElementById("start2").onclick = function() {            stopwatches[2].start();
    // }
    // document.getElementById("reset2").onclick = function() {
    //     stopwatches[2].reset();
    // }
    
    
// var stopwatches = [];
    // var i;
    // for (i = 0; i <= 1; i++) {
    //     var stopwatch = new Timer("timerLabel" + i, "start" + i, "splitLabel" + i);
    //     stopwatches.push(stopwatch);
    //     console.log(i)
    //     document.getElementById("start" + i).onclick = function() {
    //         // stopwatches[0].start()
    //         chooseStopwatch(i)
    //     }

    //     document.getElementById("reset" + i).onclick = function() {
    //         stopwatches[0].reset();
    //     }

    //     document.getElementById("split" + i).onclick = function() {
    //         stopwatches[0].split();
    //     }
    //     console.log(stopwatches)
    // }



    // document.getElementById("start0").onclick = function() {
    //     stopwatches[0].start();
    // }

    // document.getElementById("reset0").onclick = function() {
    //     stopwatches[0].reset();
    // }

    // document.getElementById("split0").onclick = function() {
    //     stopwatches[0].split();
    // }


    // document.getElementById("start1").onclick = function() {
    //     stopwatches[1].start();

    // }
    // document.getElementById("reset1").onclick = function() {
    //     stopwatches[1].reset();
    // }

    // document.getElementById("split1").onclick = function() {
    //     stopwatches[1].split();
    // }





    // for (i = -1; i <= 2; i++) {
    //     console.log(i)
    //     while (i >= -1 && i <= 2) {
    //         i++
    //         console.log(i)

    //             var timer_label_id = "timerLabel" + (i);
    //             var start_button_id = "start" + (i);
    //             var reset_button_id = "reset" + (i);
    //             var split_button_id = "splitLabel" + (i);
    //             console.log(timer_label_id)
    //             stopwatches.push(new Timer(timer_label_id, start_button_id, split_button_id));

    //             document.getElementById("start" + (i)).onclick = function() {
    //                 stopwatches[i].start();

    //             }
    //             document.getElementById("reset" + (i)).onclick = function() {
    //                 stopwatches[i].reset();
    //             }

    //             // document.getElementById("splitLabel" + (i)).onclick = function() {
    //             //     stopwatches[i].split();
    //             // }


    //     }

    //     // var timer_label_id = "timerLabel" + (i);
    //     // var start_button_id = "start" + (i);
    //     // var split_button_id = "splitLabel" + (i);
    //     // stopwatches.push(new Timer(timer_label_id, start_button_id, split_button_id));

    //     // document.getElementById("start" + i).onclick = function() {
    //     //     stopwatches[i].start();

    //     // }
    //     // document.getElementById("reset" + i).onclick = function() {
    //     //     stopwatches[i].reset();
    //     // }

    //     // document.getElementById("split" + i).onclick = function() {
    //     //     stopwatches[i].split();
    //     // }
    // }


    // var timer_label_id = "timerLabel" + 2;
    // var start_button_id = "start" + 2;
    // var split_button_id = "splitLabel" + 2;

    // stopwatches.push(new Timer(timer_label_id, start_button_id, split_button_id));

    // document.getElementById("start2").onclick = function() {            stopwatches[2].start();
    // }
    // document.getElementById("reset2").onclick = function() {
    //     stopwatches[2].reset();
    // }

