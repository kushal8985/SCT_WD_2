// LOADER

window.addEventListener("load", () => {

  const loader = document.getElementById("loader");

  setTimeout(() => {

    loader.style.display = "none";

  }, 1500);

});


// STOPWATCH

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

const display = document.getElementById("display");


// START

document.getElementById("startBtn").addEventListener("click", () => {

  if(timer !== null){

    clearInterval(timer);

  }

  timer = setInterval(stopwatch,1000);

});


// PAUSE

document.getElementById("pauseBtn").addEventListener("click", () => {

  clearInterval(timer);

});


// RESET

document.getElementById("resetBtn").addEventListener("click", () => {

  clearInterval(timer);

  seconds = 0;
  minutes = 0;
  hours = 0;

  display.innerHTML = "00 : 00 : 00";

  document.getElementById("laps").innerHTML = "";

});


// LAP

document.getElementById("lapBtn").addEventListener("click", () => {

  const lapTime = display.innerHTML;

  const li = document.createElement("li");

  li.innerHTML = lapTime;

  document.getElementById("laps").appendChild(li);

});


// STOPWATCH FUNCTION

function stopwatch(){

  seconds++;

  if(seconds == 60){

    seconds = 0;

    minutes++;

    if(minutes == 60){

      minutes = 0;

      hours++;

    }

  }

  let h = hours < 10 ? "0" + hours : hours;

  let m = minutes < 10 ? "0" + minutes : minutes;

  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${h} : ${m} : ${s}`;

}