const dayElement = document.getElementById("currentDay");

const timeElement = document.getElementById("currentTime");

function updateDayOfWeekAndTime() {

  const currentDate = new Date();

  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

  //const currentHours = currentDate.getHours().toString().padStart(2, "0");

  //const currentMinutes = currentDate.getMinutes().toString().padStart(2, "0");

  //const currentSeconds = currentDate.getSeconds().toString().padStart(2, "0");

//  const currentTimeMilliseconds = currentDate.getUTCMilliseconds(); // Get milliseconds part

  //const currentTime1 = `${currentHours}:${currentMinutes}:${currentSeconds}.${currentTimeMilliseconds}`; // Add milliseconds
  
  const currentTime = new Date().getTime();

  dayElement.textContent = currentDayOfWeek;

  timeElement.textContent = currentTime;

}

updateDayOfWeekAndTime();

setInterval(updateDayOfWeekAndTime, 1000);