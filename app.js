// Clock Interface

var main = document.getElementById('main');
var smallCircleWidth = 20;
var circleRadius = 215 - smallCircleWidth;
var oneDeg = Math.PI / 180;

for (var i = 1; i <= 60; i++) {

    var theta = (i * 6 * oneDeg) - Math.PI / 2;
    var numbers = i / 5;
    var circle = document.createElement('div');
    var x = circle.x = circleRadius * Math.cos(theta);
    var y = circle.y = circleRadius * Math.sin(theta);

    if (i % 5 == 0) {
        circle.innerHTML = numbers;
        circle.setAttribute('class', 'numbers');
        circle.style.top = (225 - 10) + y + 'px';
        circle.style.left = (225 - 10) + x + 'px';
    }

    else {
        circle.setAttribute('class', 'dots');
        circle.style.top = (225 - 4) + y + 'px';
        circle.style.left = (225 - 4) + x + 'px';
    }

    main.appendChild(circle);

}

// clock rotation

var sec = document.getElementById("seconds");
var min = document.getElementById("minutes");
var hour = document.getElementById("hours");
var degree = 6;
var timer = null;
let isClock = true
var h = 0;
var m = 0;
var s = 0;

const [startDiv] = document.getElementsByClassName('start')
const [stopDiv] = document.getElementsByClassName('stop')

// console.log(startDiv)

// console.log(stopDiv)

function stopWatch() {

    s++;
    sec.style.transform = `rotate(${s * degree}deg)`

    if (s >= 60) {

        s = 0;
        m++;
        min.style.transform = `rotate(${m * degree}deg)`

        if (m >= 60) {
            m = 0;
            h++;
            hour.style.transform = `rotate(${h * degree}deg)`
        }

    }

}

// Start

function startButton() {

    // console.log(isClock, timer)

    if (isClock && timer) {
        timerNull()
        isClock = false;
    }

    // if (startDiv) {

        // Pause timer
        if (startDiv.className.includes('open') && timer) {
            clearInterval(timer)
        }

        // Start timer
        else {
            timer = setInterval(stopWatch, 1000);
        }

    // }

    startDiv.classList.toggle('open')

}

// Reset

function resetButton() {

    stopDiv.classList.add('open');
    startDiv.classList.remove('open');

    setTimeout(() => {
        stopDiv.classList.remove('open');
    }, 500)

    timerNull();

}

function timerNull() {

    // if (timer) {
    //     clearInterval(timer);
    // }

    clearInterval(timer)

    h = 0;
    m = 0;
    s = 0;

    hour.style.transform = `rotate(${0}deg)`
    sec.style.transform = `rotate(${0}deg)`
    min.style.transform = `rotate(${0}deg)`

}

// Clock 

function clock() {
    timer = setInterval(() => {
        var day = new Date;
        var ss = day.getSeconds() * degree;
        var mm = day.getMinutes() * degree;
        var hh = day.getHours() * 30 + mm / 12;
        sec.style.transform = `rotate(${ss}deg)`
        min.style.transform = `rotate(${mm}deg)`
        hour.style.transform = `rotate(${hh}deg)`
    }, 1000);
}

clock();