const state = {
  city: "Berkeley",
  temp: 62
}
const setTemp = event => {
  if (event) {
    newVal = parseInt(event.target.value);
    state.temp += newVal;
  }
  let todaysTemp = document.getElementById("temp-today");
  todaysTemp.innerHTML = state.temp;
  setTodaysTemperatureColor();
}

const setTodaysTemperatureColor = () => {
  const temp = state.temp;
  const tempToday = document.getElementById("temp-today");
  if (temp >= 40 && temp < 50) {
    todaysColorCode = "#00b8b8";
  } else if (temp >= 50 && temp < 60) {
    todaysColorCode = "green";
  } else if (temp >= 60 && temp < 70) {
    todaysColorCode = "yellow";
  } else if (temp >= 70 && temp < 80) {
    todaysColorCode = "orange";
  } else if (temp >= 80 && temp < 90) {
    todaysColorCode = "red";
  } else if (temp >= 90 && temp < 100) {
    todaysColorCode = "darkred";
  } else if (temp >= 100) {
    todaysColorCode = "#831";
  }
  tempToday.style.color = todaysColorCode;
};

const setCity = () => {
  cityP = document.getElementById("city-display");
  cityP.innerHTML = state.city;
}
// check if button got pressed
// then either increase or decrease the 

const setHandlers = () => {
  document.getElementById("raise-temp")
          .addEventListener("click",setTemp);
  document.getElementById("lower-temp")
          .addEventListener("click",setTemp);
}

window.onload = () => {
  setHandlers();
  setTodaysTemperatureColor();
  setTemp();
  setCity();
}
