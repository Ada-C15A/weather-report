let temp_num = 60;

const change_landscape = (if_temp) => {
  const earthContainer = document.getElementById("landscape");

  let landscape = "";
  if (if_temp >= 80) {
    landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if (if_temp >= 70 && if_temp <= 79) {
    landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  } else if (if_temp >= 60 && if_temp <= 69) {
    landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  } else if (if_temp <= 59) {
    landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  }
  earthContainer.textContent = landscape;
};

const tempChanges = (temp_num) => {
  const tempContainer = document.getElementById("temp_num");
  tempContainer.textContent = temp_num;
  change_landscape(temp_num);
};

const increase = () => {
  temp_num += 1;
  tempChanges(temp_num);
};

const decrease = () => {
  temp_num -= 1;
  tempChanges(temp_num);
};

const changeSky = () => {
  const skySelected = document.getElementById("sky_select").value;
  const skyOnEarth = document.getElementById("sky");
  const background = document.body;
  let sky = "";
  if (skySelected === "Sunny") {
    sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
  } else if (skySelected === "Cloudy") {
    sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
  } else if (skySelected === "Rainy") {
    sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
  } else if (skySelected === "Snowy") {
    sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
  }
  skyOnEarth.textContent = sky;
  background.className = skySelected;
};

const state = { location: "" };

const reset = (typed_city) => {
  //   state.location = "";
  typed_city = document.querySelector("#typed_city").value;
  const resetClick = document.querySelector("#typed_city");
  resetClick.textContent = typed_city;
};

const handleReset = () => {
  const resetClick = document.querySelector("#reset");
  resetClick.addEventListener("click", reset);
};

document.addEventListener("DOMContentLoaded", handleReset);

const registerEventHandlers = (e) => {
  tempChanges(temp_num);
  const someLikeItHot = document.querySelector("#temp_increase");
  temp_increase.addEventListener("click", increase);
  const someLikeItCold = document.querySelector("#temp_decrease");
  temp_decrease.addEventListener("click", decrease);
  changeSky();
  const updateSky = document.getElementById("sky_select");
  updateSky.addEventListener("change", changeSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
