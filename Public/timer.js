


let timerInterval = null;

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
    let timerInput = document.getElementById('timer')
    let TIME_LIMIT = timerInput.value;
    timerInterval = setInterval(()=> {
        let timeLeft= TIME_LIMIT -= 1;
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
document.getElementById("clock").innerHTML = `
    <div>
        <div id="label">
        </div>
        <button onclick= "countdown()" type= "button" class="btn btn-light">Start</button>
        <button onclick= "myStopFunction()" type= "button" class="btn btn-light">Pause</button>
    </div>
`