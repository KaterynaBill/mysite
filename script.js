const targetDate = new Date('2025-08-25T09:45:50');

// Кешуємо DOM-елементи
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const timerEl = document.getElementById('timer');
const countdownEl = document.getElementById('Countdown');

function updateTimer() {
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        clearInterval(timerInterval);
        timerEl.innerHTML = "Подія почалася!";
        document.body.style.background = "linear-gradient(135deg, #ff6f61, #d83a56)";
        countdownEl.style.background = "rgba(0, 0, 0, 0.9)";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    hoursEl.textContent = hours.toString().padStart(2, '0');
    minutesEl.textContent = minutes.toString().padStart(2, '0');
    secondsEl.textContent = seconds.toString().padStart(2, '0');
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Викликаємо одразу, щоб не чекати 1 секунду
