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

# UX

The idea for this Timing Assistant app came from my exposure to swimming throughout my childhood. I noticed that there needed to be a number of people involved in the timing process, as the touchpads in the pool don't always produce accurate or read-able times due to various reasons. Furthermore, the coach and the athletes can't see the final times or splits until after the meet is over, unless you have multiple people timing on deck for each lane writing times down on a clipboard. 

I saw this opportunity to create an application that would cut down on the number of people involved in the timing process, hoping to improve the efficiency of the meets and feedback to the athletes and coaches. This application could be optimised for any timed sport, and this version works with both swimming and track.

Coaches and timers alike can choose a sport, meet, event, heat, and lane numbers which all help them keep track of what's going on in a meet. It also allows them to give their atheletes instant feedback after a race, since the times show up after you've saved them and then hit 'view times.' I also wanted to make sure they were able to see cumulative results for the meet, instead of just one event at a time. 

No theme was used for this design, the modern design was chosen because with a lot of timers and data on a page, it can appear messy and unorganized. I didn't want this, so while I wanted the timers, times, and event options on one page, I thought splitting the page into thirds vertically would be the best way to do this, creating a noticable difference between each third. 

# Features  

Timing Assistant was built using the Flask Microframework in Python with a NoSQL (MongoDB) database on the backend, with HTML, CSS, Javascript, and jQuery on the frontend and for the stopwatch functionality, connected to the backend with AJAX. 

On the home page of the app, the user enters the sport they wish to time for, their team name, their username, and the meet name. This action takes them to the stopwatch page, where they can then choose the event and heat that they would like to time for. 

Once they click "submit," the event and heat will appear. They can then start timing for up to three lanes by pressing 'START' on the main stopwatch. This will start all four stopwatches, however, only the bottom three will be saved in the database. There is the option to collect split times for each lane individually with the 'SPLIT' button. Each timer can be stopped and started individually, with the main timer controlling all stopwatches (start, stop, and reset). 

By clicking 'SAVE TIMES,' the times will be saved by using the AJAX call in the Javascript file to push the times up to Flask, with Flask connected to MongoDB. Once the times have been saved, by clicking 'VIEW TIMES,' the times will appear below the stopwatches. 

## Features Left to Implement 
I would like to be able to give the coaches an opportunity to download the data in a PDF or other file format. In the long run, it would allow them to keep all manual timing for their records without having to rely on handwritten data or relying on this site every time they want to go back and look at old meets. 

I would also like to allow the coach to select the number of stopwatches they want to view based on the number of athletes in each heat. Currently, you can only time for 3 athletes at a time, and you can't choose to time for less than 3. 

# Testing 
All testing for this project was done manually. The Ajax function and Save Times button were tested via the console and verifying that the data had appeared correctly formatted in MongoDB. The data collected from the timers and the indended data structure were also tested. 

Testing for the stopwatches was done manually as well to make sure that the main reset button reset the stopwatch and cleared the splits from all timers, while each individual stopwatch only cleared its own time and splits. Furthermore, this was also tested for the start/stop function, as the main stopwatch controls all stopwatches, while the individual ones should only control their own start/stop functions. 

All Flask paths were also tested to make sure that all links worked and that it could handle any uncommon values in the input, and it would display inputs properly via Jinja in the HTML file. 

During the testing process, I realized that it would be possible for two users to have the same meet name or the same club name, therefore making it possible for the user to run into someone else's data. So, to view the times in the template, I have included the following to make sure that three input fields on the landing page must match up in order to display the corresponding times times. This requires the correct team name, username, and meet name to match to prevent the cross-saving or cross-viewing of times. 
```
{% if time.team == team %}
{% if time.username == username %}
{% if time.meet == meets %}
```


# Credits

The Javascript function running the stopwatch is modified from Coding with Sara's stopwatch [tutorial](https://codingwithsara.com/the-multiple-stopwatches-on-one-page-in-javascript-for-intermediates/) for this application. 
Reset functions were modified for the reset button to reset all stopwatches instead of refreshing the page. 
Split functions were also added. 
Start/Stop functions were modified for a style change in buttons using jQuery. 
Save Button to pass values to Flask and into MongoDB were added using Ajax. 

The Ajax function was modeled after this [post](https://stackoverflow.com/questions/37631388/how-to-get-data-in-flask-from-ajax-post) from Stack Overflow and modified to fit this project by looking at patterns of other Ajax uses and syntax. 

# Refactoring

The javascript function for the stopwatches was attempted to be refactored so that the user could decide how many stopwatches they wanted displayed on the screen based on the number of lanes chosen. 

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

When trying to write these in a for loop like this, the stopwatches[i].start() would not read i as a variable that could change, however, when it was hard coded, there was no issue: 
    
```javascript
    document.getElementById("reset" + i).onclick = function() {
        stopwatches[0].reset();
    }

    document.getElementById("split" + i).onclick = function() {
        stopwatches[0].split();
    }
```

I tried to approach it a different way, which involved if statements to get the corresponding stopwatches to appear. 

Attempted to pass the i through a function instead as an arguement taken from the for loop above, but was unsuccessful: 

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