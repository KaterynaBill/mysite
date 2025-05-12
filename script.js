const currentDate = new Date();
console.log("Current Date:", currentDate);

const targetDate = new Date('2025-08-25T09:45:50');
console.log("Target Date:", targetDate);

function updateTimer() {
    const now = new Date();
    const timeDiff = targetDate - now;

    if (timeDiff <= 0) {
        clearInterval(timerInterval);
        document.getElementById('timer').innerHTML = "Подія почалася!";
        document.body.style.background = "linear-gradient(135deg, #ff6f61, #d83a56)";
        document.getElementById('countdown').style.background = "rgba(0, 0, 0, 0.9)";
        return;
    }

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
}

// Оновлюємо таймер кожну секунду
const timerInterval = setInterval(updateTimer, 1000);