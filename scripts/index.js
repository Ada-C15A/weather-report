const lookupTable = {
  110: ["#321", "☀️🔥☀️🐜🍂🔥🍂🦂🔥"],
  100: ["#731", "☀️🍂🌵🥀🦂🌵🍂🐜🍂"],
  90: ["drkred", "🌵🦎🍂🌴🐍🌵🦂🌵🥀"],
  80: ["red", "🏜🌴🌵🐍🌻🦂🌵🌺🌵🐍"],
  70: ["orange", "🌸🌿🌼🌷🌻🌿☘️🌱🌻🌷"],
  60: ["yellow", "🌾🌾🍃🌱🛤🌾☘️🌾🌾🍃"],
  50: ["#1b5", "🌲🍃🍄🌲🍁🌲🌲🍂🌲"],
  40: ["#00b8b8", "🌧🌲💨🍄🌲🌧🌲🍂🌲🌧"],
  32: ["#2de", "🌧💨⛄️🌲🌧⛄️🌧💨🌲🌧"],
  22: ["#29f", "❄️⛄️💨🌧⛄️❄️💨🌲💨🌨⛄️❄️"],
  21: ["#13d", "❄️💨🌨❄️💨❄️☃️❄️💨🌨"]
}
const state = {
  city: "Berkeley",
  temp: 110,
  sky: "sunny"
};
const setTemp = (event) => {
  if (event) {
    newVal = event.target.value ?
      parseInt(event.target.value) :
      parseInt(event.target.dataset.temp);
    state.temp += newVal;
  }
  updateUI();
};

const updateUI = () => {
  const temp = state.temp;
  let currentColorCode;
  let gardenContents;

  const temperatureSpan = document.getElementById("temp-today");
  const gardenPlot = document.getElementById("garden-plot");
  
  if (temp < 22) {
    currentColorCode = lookupTable[21][0];
    gardenContents = lookupTable[21][1];
  } else if (temp >= 22 && temp < 32) {
    currentColorCode = lookupTable[22][0];
    gardenContents = lookupTable[22][1];
  } else if (temp >= 32 && temp < 40) {
    currentColorCode = lookupTable[32][0];
    gardenContents = lookupTable[32][1];
  } else if (temp >= 40 && temp < 50) {
    currentColorCode = lookupTable[40][0];
    gardenContents = lookupTable[40][1];
  } else if (temp >= 50 && temp < 60) {
    currentColorCode = lookupTable[50][0];
    gardenContents = lookupTable[50][1];
  } else if (temp >= 60 && temp < 70) {
    currentColorCode = lookupTable[60][0];
    gardenContents = lookupTable[60][1];
  } else if (temp >= 70 && temp < 80) {
    currentColorCode = lookupTable[70][0];
    gardenContents = lookupTable[70][1];
  } else if (temp >= 80 && temp < 90) {
    currentColorCode = lookupTable[80][0];
    gardenContents = lookupTable[80][1];
  } else if (temp >= 90 && temp < 100) {
    currentColorCode = lookupTable[90][0];
    gardenContents = lookupTable[90][1];
  } else if (temp >= 100 && temp < 110) {
    currentColorCode = lookupTable[100][0];
    gardenContents = lookupTable[100][1];
  } else if (temp >= 110) {
    currentColorCode = lookupTable[110][0];
    gardenContents = lookupTable[110][1];
  }

  temperatureSpan.innerHTML = state.temp;
  temperatureSpan.style.color = currentColorCode;

  gardenPlot.innerHTML = gardenContents;
};

const setCity = event => {
  city = state.city;
  if (event) {
    city = event.target.value;
  }
  cityP = document.getElementById("city-display");
  cityP.innerHTML = city;
};

const resetCity = () => {
  state.city = "Berkeley";
}

const setSky = event => {
  console.log(event)
  let sky = state.sky;
  if (event) {
    sky = event.target.value;
    if (sky === "snowy") {
      state.temp = 32;
      updateUI();
    }
  }
  document.getElementById("container").className = sky;
}


const setHandlers = () => {
  document.getElementById("raise-temp").addEventListener("click", setTemp);
  document.getElementById("lower-temp").addEventListener("click", setTemp);
  document.getElementById("sky").addEventListener("change",setSky);
  document.getElementById("city").addEventListener("input",setCity);
  document.getElementById("city-reset").addEventListener("click",resetCity);
};

window.addEventListener("load", (event) => {
  setHandlers();
  setTemp();
  setCity();
  setSky();
});
