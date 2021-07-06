const lookupTable = {
  110: ["#321", "☀️🔥☀️🐜🍂🔥🍂🦂🔥"],
  100: ["#731", "☀️🍂🌵🥀🦂🌵🍂🐜🍂"],
  90: ["darkred", "🌵🦎🍂🌴🐍🌵🦂🌵🥀"],
  80: ["red", "🏜🌴🌵🐍🌻🦂🌵🌺🌵🐍"],
  70: ["orange", "🌸🌿🌼🌷🌻🌿☘️🌱🌻🌷"],
  60: ["yellow", "🌾🌾🍃🌱🛤🌾☘️🌾🌾🍃"],
  50: ["#1b5", "🌲🍃🍄🌲🍁🌲🌲🍂🌲"],
  40: ["#00b8b8", "🌧🌲💨🍄🌲🌧🌲🍂🌲🌧"],
  32: ["#2de", "🌧💨⛄️🌲🌧⛄️🌧💨🌲🌧"],
  22: ["#29f", "❄️⛄️💨🌧⛄️❄️💨🌲💨🌨⛄️❄️"],
  21: ["#13d", "❄️💨🌨❄️💨❄️☃️❄️💨🌨"],
  sunny: "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",
  cloudy: "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",
  rainy: "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",
  snowy: "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨",
  windy: "🌬💨🌬💨🌬💨🌬💨",
  foggy: "🌫☁️🌫☁️🌫☁️🌫☁️🌫",
};
const state = {
  city: "Berkeley",
  temperature: 100,
  unit: "fahrenheit",
  sky: "sunny",
};
const setTemp = (event) => {
  console.log("setTemp\n",{state})
  if (event) {
    newVal = event.target.value
      ? parseInt(event.target.value)
      : parseInt(event.target.dataset.temp);

    state.temperature += newVal;
  }
  updateUI();
};

const updateUI = () => {
  const temperature = state.unit === "fahrenheit" ? state.temperature : Math.round((state.temperature * 9/5 + 32));

  let currentColorCode;
  let gardenContents;

  const temperatureSpan = document.getElementById("temp-today");
  const gardenPlot = document.getElementById("garden-plot");

  if (temperature < 22) {
    currentColorCode = lookupTable[21][0];
    gardenContents = lookupTable[21][1];
  } else if (temperature >= 22 && temperature < 32) {
    currentColorCode = lookupTable[22][0];
    gardenContents = lookupTable[22][1];
  } else if (temperature >= 32 && temperature < 40) {
    currentColorCode = lookupTable[32][0];
    gardenContents = lookupTable[32][1];
  } else if (temperature >= 40 && temperature < 50) {
    currentColorCode = lookupTable[40][0];
    gardenContents = lookupTable[40][1];
  } else if (temperature >= 50 && temperature < 60) {
    currentColorCode = lookupTable[50][0];
    gardenContents = lookupTable[50][1];
  } else if (temperature >= 60 && temperature < 70) {
    currentColorCode = lookupTable[60][0];
    gardenContents = lookupTable[60][1];
  } else if (temperature >= 70 && temperature < 80) {
    currentColorCode = lookupTable[70][0];
    gardenContents = lookupTable[70][1];
  } else if (temperature >= 80 && temperature < 90) {
    currentColorCode = lookupTable[80][0];
    gardenContents = lookupTable[80][1];
  } else if (temperature >= 90 && temperature < 100) {
    currentColorCode = lookupTable[90][0];
    gardenContents = lookupTable[90][1];
  } else if (temperature >= 100 && temperature < 110) {
    currentColorCode = lookupTable[100][0];
    gardenContents = lookupTable[100][1];
  } else if (temperature >= 110) {
    currentColorCode = lookupTable[110][0];
    gardenContents = lookupTable[110][1];
  }
  console.log("Update UI:\n",{state})
  temperatureSpan.innerHTML = state.temperature;
  temperatureSpan.style.color = currentColorCode;

  gardenPlot.innerHTML = gardenContents;
};

const setCity = (event) => {
  city = state.city;
  if (event) {
    city = event.target.value;
  }
  cityP = document.getElementById("city-display");
  cityP.innerHTML = city;
};

const resetCity = () => {
  state.city = "Berkeley";
};

const setSky = (event) => {
  let sky = state.sky;
  if (event) {
    sky = event.target.value;
    if (sky === "snowy") {
      state.temperature = state.unit === "fahrenheit" ? 32 : 0;
      updateUI();
    }
  }
  document.getElementById("container").className = sky;
  document.getElementById("garden-sky").innerHTML = lookupTable[sky];
};

const setUnit = (event) => {
  const fahrenheitLink = document.getElementById("fahrenheit");
  const celsiusLink = document.getElementById("celsius");

  if (!event) {
    state.unit = "fahrenheit";
    fahrenheitLink.classList.add("selected");
  } else {
    event.preventDefault();
    targetUnit = event.target.id;
    if (state.unit !== targetUnit) {
      state.unit = targetUnit;
      if (state.unit === "celsius") {
        state.temperature = Math.round((state.temperature - 32) * 5 / 9);
      } else {
        state.temperature = Math.round((state.temperature * 9/5 + 32));
      }
      console.log({ state });
      fahrenheitLink.classList.toggle("selected");
      celsiusLink.classList.toggle("selected");
    }
  }

  updateUI();
};

const setHandlers = () => {
  document.getElementById("raise-temp").addEventListener("click", setTemp);
  document.getElementById("lower-temp").addEventListener("click", setTemp);
  document.getElementById("sky").addEventListener("change", setSky);
  document.getElementById("city").addEventListener("input", setCity);
  document.getElementById("city-reset").addEventListener("click", resetCity);

  document.getElementById("fahrenheit").addEventListener("click", setUnit);
  document.getElementById("celsius").addEventListener("click", setUnit);
};

window.addEventListener("load", (event) => {
  setHandlers();
  setUnit();
  setTemp();
  setCity();
});
