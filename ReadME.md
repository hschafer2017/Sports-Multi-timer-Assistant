# Timing Assistant

Stream Three Project: Data Centric Development - Code Institute 
This project was built using the Flask Microframework, and it could be used as a manual stopwatch to time multiple athletes in swimming and track. The goal of this application is to improve efficency in sports timing by decreasing the number of people timing seperately and directly storing the times, as opposed to keeping a written documentation.  

**THIS APPLICATION IS FOR EDUCATIONAL USE ONLY. THIS APPLICATION IS NOT FOR COMMERCIAL USE.**

![Responsive Demo](https://raw.githubusercontent.com/hschafer2017/Sports-Multi-timer-Assistant/master/TimingDesign.gif "Responsive Demo")

# Live Demo 

A live demo of this project can be found at [here](https://timing-assistant.herokuapp.com/).

# Technologies

1. Flask Microframework (Python)
2. Javascript 
3. jQuery
4. AJAX 
5. MongoDB (NoSQL Database)
6. Bootstrap
7. HTML
8. CSS 

# Background


The idea for this Timing Assistant app came from my exposure to swimming throughout my childhood. I noticed that there needed to be a number of people involved in the timing process, as the touchpads in the pool don't always produce accurate or read-able times due to various reasons. Furthermore, the coach and the athletes can't see the final times or splits until after the meet is over, unless you have multiple people timing on deck for each lane writing times down on a clipboard. I saw this opportunity to create an application that would cut down on the number of people involved in the timing process, hoping to improve the efficiency of the meets and feedback to the athletes and coaches. This application could be optimised for any timed sport, and this version works with both swimming and track. 

# Code 


Timing Assistant was built using the Flask Microframework in Python with a NoSQL (MongoDB) database on the backend, with HTML, CSS, Javascript, and jQuery on the frontend and for the stopwatch functionality, connected to the backend with AJAX. On the home page of the app, the user enters the sport they wish to time for, their team name, their username, and the meet name. This action takes them to the stopwatch page, where they can then choose the event and heat that they would like to time for. Once they click "submit," the event and heat will appear. They can then start timing for up to three lanes by pressing 'START' on the main stopwatch. This will start all four stopwatches, however, only the bottom three will be saved in the database. There is the option to collect split times for each lane individually with the 'SPLIT' button. Each timer can be stopped and started individually, with the main timer controlling all stopwatches (start, stop, and reset). By clicking 'SAVE TIMES,' the times will be saved by using the AJAX call in the Javascript file to push the times up to Flask, with Flask connected to MongoDB. Once the times have been saved, by clicking 'VIEW TIMES,' the times will appear below the stopwatches. 

# Credits


The Javascript function running the stopwatch is modified from Coding with Sara's website for this application. 
Reset functions were modified for the reset button to reset all stopwatches instead of refreshing the page. 
Split functions were also added. 
Start/Stop functions were modified for a style change in buttons using jQuery. 
Save Button to pass values to Flask and into MongoDB were added using Ajax. 



EXPLAIN WHY THIS DOESN'T/WOULDN'T WORK

```javascript
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
 ```   
    
This does work: 

```javascript
    document.getElementById("reset" + i).onclick = function() {
        stopwatches[0].reset();
    }

    document.getElementById("split" + i).onclick = function() {
        stopwatches[0].split();
    }
```

Attempted to pass the i through a function instead, but was unsuccessful: 

```javascript
function choose_stopwatch(i) {
    if (i == 1) {
        stopwatches_one.start
    } 
    else if (i == 2) {
        stopwatches_one.start()
        stopwatches_two.start()
    } else {
        console.log('else')
    }
    
}
```