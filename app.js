let timerInterval;
let elapsedTime = 0; // in milliseconds

function start() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            elapsedTime += 10; // increment by 10 milliseconds
            updateDisplay();
        }, 10);
    }
}

function stop() {
    clearInterval(timerInterval);
    timerInterval = null; // reset the interval
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null; // reset the interval
    elapsedTime = 0; // reset the elapsed time
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    document.getElementById('milliseconds').textContent = String(milliseconds).padStart(2, '0');
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark-mode');
    const themeBtn = document.getElementById('themeBtn');
    if (document.documentElement.classList.contains('dark-mode')) {
        themeBtn.textContent = 'Light Mode';
    } else {
        themeBtn.textContent = 'Dark Mode';
    }
}