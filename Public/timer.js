const TIME_LIMIT = 1200;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;


document.getElementById("clock").innerHTML = `
    <div>
        hello there
        <div id="label">
        </div>
        <button onclick= "countdown()" type= "button" class="btn btn-light">Start</button>
        <button onclick= "myStopFunction()" type= "button" class="btn btn-light">Pause</button>
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
            document.getElementById("label").innerHTML =
                formatTime(timeLeft);
            if (timeLeft == 0) {
                myStopFunction()
            }
            
        },1000);
 
}

function myStopFunction() {
    clearInterval(timerInterval);
       
}
