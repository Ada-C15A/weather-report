const setTodaysTemperatureColor = () => {
  tempTodayP = document.getElementById("temp-today");
  todaysTemp = parseInt(tempTodayP.innerHTML);
  console.log({ tempTodayP, todaysTemp });
  if (todaysTemp >= 40 && todaysTemp < 50) {
    todaysColorCode = "#00b8b8";
  } else if (todaysTemp >= 50 && todaysTemp < 60) {
    todaysColorCode = "green";
  } else if (todaysTemp >= 60 && todaysTemp < 70) {
    todaysColorCode = "yellow";
  } else if (todaysTemp >= 70 && todaysTemp < 80) {
    todaysColorCode = "orange";
  } else if (todaysTemp >= 80 && todaysTemp < 90) {
    todaysColorCode = "red";
  } else if (todaysTemp >= 90 && todaysTemp < 100) {
    todaysColorCode = "darkred";
  } else if (todaysTemp >= 100) {
    todaysColorCode = "#831";
  }
  tempTodayP.style.color = todaysColorCode;
};

window.onload = () => {
  setTodaysTemperatureColor();
}