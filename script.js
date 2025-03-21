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
       <div class="relative"> 
         <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
            <rect width="70" height="71" rx="8" fill="#191A23"/>
            <rect width="70" height="66.2667" rx="4" fill="#343650"/>
         </svg>
          <div class="absolute">
          <div class="dark"></div>
            <svg class="left-svg" xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
               <circle cy="3" r="3" fill="#191A23"/>
            </svg>
                <svg  class="right-svg" xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
  <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 6 0)" fill="#191A23"/>
</svg>
<hr>
            <p class="number">${days}</p>
        
          </div>
      </div>
       <p class="text">DAYS</p>
    </div>
      <div class='center'>
        <div class="relative"> 
         <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
            <rect width="70" height="71" rx="8" fill="#191A23"/>
            <rect width="70" height="66.2667" rx="4" fill="#343650"/>
         </svg>
       <div class="absolute">
       <div class="dark"></div>
          <svg class="left-svg" xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
               <circle cy="3" r="3" fill="#191A23"/>
            </svg>
                <svg  class="right-svg" xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
  <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 6 0)" fill="#191A23"/>
</svg>
<hr>
       <p class="number">${hours}</p>
       </div>
      </div>
        <p class="text">HOURS</p>
      </div>
      <div class='center'>
        <div class="relative"> 
         <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
            <rect width="70" height="71" rx="8" fill="#191A23"/>
            <rect width="70" height="66.2667" rx="4" fill="#343650"/>
         </svg>
       <div class="absolute">
       <div class="dark"></div>
          <svg class="left-svg" xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
               <circle cy="3" r="3" fill="#191A23"/>
            </svg>
                <svg  class="right-svg" xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
  <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 6 0)" fill="#191A23"/>
</svg>
<hr>
       <p class="number">${minutes}</p></div>
      </div>
        <p class="text">MINUTES</p>
      </div>
      <div class='center'>
       <div class="relative"> 
         <svg xmlns="http://www.w3.org/2000/svg" width="70" height="71" viewBox="0 0 70 71" fill="none">
            <rect width="70" height="71" rx="8" fill="#191A23"/>
            <rect width="70" height="66.2667" rx="4" fill="#343650"/>
         </svg>
       <div class="absolute">
       <div class="dark"></div>
          <svg class="left-svg" xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
               <circle cy="3" r="3" fill="#191A23"/>
            </svg>
                <svg  class="right-svg" xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" fill="none">
  <circle cx="3" cy="3" r="3" transform="matrix(-1 0 0 1 6 0)" fill="#191A23"/>
</svg>
<hr>
       <p class="number">${seconds}</p></div>
      </div>
        <p class="text">SECONDES</p>
      </div>
  `;
}, 1000);
