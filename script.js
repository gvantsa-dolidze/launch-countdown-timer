const countdown = setInterval(() => {
  const result = document.querySelector(".show-result");
  const today = new Date().getTime();
  const countdownDay = new Date("Mar 29, 2025, 18:00:00").getTime();

  const daysLeft = countdownDay - today;

  const days = Math.floor(daysLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((daysLeft % (1000 * 60)) / 1000);
  //   console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
  result.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
