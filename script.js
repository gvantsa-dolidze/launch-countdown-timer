const countdown = setInterval(() => {
  const result = document.querySelector(".show-result");
  const today = new Date().getTime();
  const countdownDay = new Date("Mar 29, 2025, 18:00:00").getTime();
  const daysLeft = countdownDay - today;

  const days = String(Math.floor(daysLeft / (1000 * 60 * 60 * 24))).padStart(
    2,
    "0"
  );
  const hours = String(
    Math.floor((daysLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((daysLeft % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((daysLeft % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );
  result.innerHTML = `
    <div class='center'>
        <p class="number">${days}</p>
        <p class="text">DAYS</p>
      </div>
      <div class='center'>
        <p class="number">${hours}</p>
        <p class="text">HOURS</p>
      </div>
      <div class='center'>
        <p class="number">${minutes}</p>
        <p class="text">MINUTES</p>
      </div>
      <div class='center'>
        <p class="number">${seconds}</p>
        <p class="text">SECONDES</p>
      </div>
  `;
}, 1000);
