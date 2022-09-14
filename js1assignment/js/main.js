let date = new Date();
date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
const weekDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let current_Date = "Today is" + " " + weekDay[date.getDay()-1] + ".";
let current_Time = "Current time:" + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let date_time = "<p>"+ current_Date + "</p><p>" + current_Time + "</p>";

document.getElementById("answer1").innerHTML = date_time;


let today = new Date ();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yy = today.getFullYear();

document.getElementById("answer2").innerHTML = "<p>"+ mm + "-" + dd + "-" + yy +"</p><p>" + mm + "/" + dd + "/" + yy + "<p>" + "<p>" + dd + "/" + mm + "/" + yy + "</p>";

function myFunction() {
    var text = document.documentElement.innerHTML;
    document.getElementById('answer3').innerText= text; 
};

$(document).ready(function() { 'use strict'; 
      console.log('main.js loaded');


    paper.install(window); 
    paper.setup(document.getElementById('mainCanvas'));

    var tool = new Tool();

    var c = Shape.Circle(200, 200, 80); 
    c.fillColor = 'black';
    var text = new PointText(200, 200); text.justification = 'center'; text.fillColor = 'white'; 
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20); c.fillColor = 'green';
    };

    paper.view.draw();
     });

