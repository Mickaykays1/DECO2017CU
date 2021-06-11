// var minutes = 25;
// var seconds = "00";

// function template () {
// document.getElementById("minutes").innerHTML = minutes;
// document.getElementById("seconds").innerHTML = seconds;
// }

// function startPT() {
//     minutes = 24;
//     seconds = 59;

//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;

//     var minutes_interval = setInterval(minutesTimer, 60000);
//     var seconds_interval = setInterval(secondsTimer, 1000);

//     function minutesTimer() {
//      minutes = minutes -1;
//      document.getElementById("minutes").innerHTML = minutes;
    
//     }

//     function secondsTimer() {
//       seconds = seconds -1;
//       document.getElementById("seconds").innerHTML = seconds;

//       if (seconds <= 0) {
//         if (minutes<= 0) {
//             clearInterval(minutes_interval);
//             clearInterval(seconds_interval);

//             document.getElementById("done").innerHTML =
//                 "Session Completed!! Take a Break";
//             }

//             document.getElementById("done").classList.add("show_message");
//         }
//      seconds = 60;
//     } 
//  }

const TIME_LIMIT = 1200;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

document.getElementById("pomodoro-time").innerHTML = `
    <div>
        <div id="pomodoro-label">
        </div>
    </div>
`

function formatTime(time) {
    let minutes = Math.floor(time/60)
    let seconds = time%60
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    return `${minutes}: ${seconds}`
}




function countdown() {
        timerInterval = setInterval(()=> {
            timePassed += 1;
            timeLeft= TIME_LIMIT - timePassed;
            document.getElementById("pomodoro-label").innerHTML =
                formatTime(timeLeft);
            if (timeLeft == 0) {
                myStopFunction()
            }
            
        },1000);
 
}

function myStopFunction() {
    clearInterval(timerInterval);
       
}


