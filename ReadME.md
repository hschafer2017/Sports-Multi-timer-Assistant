THIS APPLICATION IS FOR EDUCATIONAL USE ONLY. 

THIS APPLICATION IS NOT FOR COMMERCIAL USE. 


The Javascript function running the stopwatch is modified from Coding with Sara's website for this application. 
Reset functions were modified for the reset button to reset all stopwatches instead of refreshing the page. 
Split functions were added. 
Start/Stop functions were modified for a style change in buttons using jQuery. 
Save Button to pass values to Flask and into MongoDB were added using Ajax. 



EXPLAIN WHY THIS DOESN'T/WOULDN'T WORK
var stopwatches = [];
    var i; 
    for (i=0; i<=1; i++) {
        var stopwatch = new timing("timerLabel" + i, "start" + i, "splitLabel" + i);
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
    
    
This does work: 

    document.getElementById("reset" + i).onclick = function() {
        stopwatches[0].reset();
    }

    document.getElementById("split" + i).onclick = function() {
        stopwatches[0].split();
    }

Attempted to pass the i through a function instead, but was unsuccessful: 

function choose_stopwatch(i) {
    if (i == 1) {
        stopwatches_one.start
    } 
    else if (i == 2) {
        stopwatches_one.start()
        stopwatches_two.start()
    } else {
        console.log('fail')
    }
    
}