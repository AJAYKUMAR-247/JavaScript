// Timer - SetInterval

let seconds = 0;

// setInterval is a function that takes in a function, the setInterval function will execute repetedly based on the time is given.
setInterval(function () {
  const minutes = Math.floor((seconds % 3600) / 60);

  const hours = Math.floor(seconds / 3600);

  const remSec = seconds % 60;
  seconds++;
  console.clear();
  console.log(
    `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remSec.toString().padStart(2, "0")}`
  );
}, 1000);

//cover all set{}

