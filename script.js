function updateCountdown() {
  const now = new Date();
  const nextShow = new Date(2025, 7, 17, 20, 0, 0, 0);

  if (now > nextShow) {
    nextShow.setDate(nextShow.getDate() + 1);
  }

  const timeLeft = nextShow - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById(
    "timer"
  ).textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
