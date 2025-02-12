let count = 0;

function updateCounter() {
    document.getElementById("count").innerText = count;
}

function getCurrentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
    document.getElementById("currentTime").innerText = getCurrentTime();
}


function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

// function timeUpdate() {
//     count = 0;
//     updateCounter();
// }

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("incrementBtn").addEventListener("click", increment);
    document.getElementById("decrementBtn").addEventListener("click", decrement);
    // document.getElementById("currentTime").innerText = getCurrentTime();
    updateCounter();
    updateTime();
    setInterval(updateTime, 1000);
});
