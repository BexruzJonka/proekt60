function updateTimer() {
    const now = new Date();
    const deadline = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

    const diff = deadline - now;

    if (diff <= 0) {
        clearInterval(timerId);
        return;
    }

    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    const format = (num) => num.toString().padStart(2, '0');

    document.getElementById('hours').innerText = format(h);
    document.getElementById('minutes').innerText = format(m);
    document.getElementById('seconds').innerText = format(s);
}

const timerId = setInterval(updateTimer, 1000);
updateTimer();