function countdown() {
  // futuredate
  const futureDate = new Date("1 janunary 2021");
  //   presentdate
  const presentDate = new Date();
  //   difference between present and future
  const diffBetween = (futureDate - presentDate) / 1000;

  //   seconds
  const seconds = Math.floor(diffBetween) % 60;
  //   minutes
  const minutes = Math.floor(diffBetween / 60) % 60;
  //   hours
  const hours = Math.floor(diffBetween / 3600) % 24;
  //   days
  const days = Math.floor(diffBetween / 3600 / 24);

  //   accessing DOM elements
  const daysDOM = document.querySelector(".days");
  const hoursDOM = document.querySelector(".hours");
  const minutesDOM = document.querySelector(".minutes");
  const secondsDOM = document.querySelector(".seconds");

  daysDOM.innerHTML = days;
  hoursDOM.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesDOM.innerHTML = minutes;
  secondsDOM.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

countdown();

setInterval(countdown, 1000);
