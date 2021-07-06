const state = {
  city: "Berkeley",
  temp: 101,
};
const setTemp = (event) => {
  if (event) {
    newVal = event.target.value ?
      parseInt(event.target.value) :
      parseInt(event.target.dataset.temp);
    state.temp += newVal;
  }
  let todaysTemp = document.getElementById("temp-today");
  todaysTemp.innerHTML = state.temp;
  updateUI();
};

const updateUI = () => {
  const temp = state.temp;
  const tempToday = document.getElementById("temp-today");
  if (temp < 22) {
    todaysColorCode = "#13d";
  } else if (temp >= 22 && temp < 32) {
    todaysColorCode = "#29f";
  } else if (temp >= 32 && temp < 40) {
    todaysColorCode = "#2de";
  } else if (temp >= 40 && temp < 50) {
    todaysColorCode = "#00b8b8";
  } else if (temp >= 50 && temp < 60) {
    todaysColorCode = "#1b5";
  } else if (temp >= 60 && temp < 70) {
    todaysColorCode = "yellow";
  } else if (temp >= 70 && temp < 80) {
    todaysColorCode = "orange";
  } else if (temp >= 80 && temp < 90) {
    todaysColorCode = "red";
  } else if (temp >= 90 && temp < 100) {
    todaysColorCode = "darkred";
  } else if (temp >= 100 && temp < 110) {//8b0100
    todaysColorCode = "#731";
  } else if (temp >= 110) {
    todaysColorCode = "#421";
  }
  console.log({ temp, todaysColorCode });
  tempToday.style.color = todaysColorCode;
};

const setCity = () => {
  cityP = document.getElementById("city-display");
  cityP.innerHTML = state.city;
};

const setHandlers = () => {
  document.getElementById("raise-temp").addEventListener("click", setTemp);
  document.getElementById("lower-temp").addEventListener("click", setTemp);
};

window.addEventListener("load", (event) => {
  setHandlers();
  setTemp();
  setCity();
});
