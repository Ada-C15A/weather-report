let tempStart = 71;

const headerCityName = () => {
  const currentCityHeader = document.getElementById("currentCityHeader");
  currentCityHeader.textContent = updateCityName;
}

const updateCityName = () => {
  const updatedCityName = document.getElementById("cityName").value;
  headerCityName();
}

const resetCityName = () => {
  const cityName = document.getElementById("cityName");
  cityName.value = "Los Angeles";
  updateCityName();
  headerCityName();
}

const updateSky = () => {
  const skyValue = document.getElementById("skyReflection").value;
  const skyCurrent = document.getElementById("sky")

  let sky = "";
  let skyColor = "";
  if (skyValue === "Cloudy") {
    sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    skyColor = "cloudy"
  } else if (skyValue === "Sunny") {
    sky = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
    skyColor = "sunny"
  } else if (skyValue ==="Rainy") {
    sky = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    skyColor = "rainy"
  } else if (skyValue === "Snowy") {
    sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    skyColor = "snowy"
  }
  skyCurrent.textContent = sky;
  const gardenContent = document.getElementById("gardenContent");
  gardenContent.classList = `garden_content ${skyColor}`
};

const updateTempColoring = currentTemp => {
  const tempStartValue = document.getElementById("tempStart");
  let color = "teal";
  if (currentTemp >= 80) {
    color = "red";
  } else if (currentTemp >= 70) {
    color = "orange";
  } else if (currentTemp >= 60) {
    color = "yellow";
  } else if (currentTemp >= 50) {
    color = "green";
  }
  tempStartValue.classList = color;
}

const updateGarden = currentTemp => {
  const emojiWeather = document.getElementById("emoji");
  let emoji = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
  if (currentTemp >= 80) {
    emoji = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if (currentTemp >= 70) {
    emoji = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  } else if (currentTemp >= 70) {
    emoji = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  }
  emojiWeather.textContent = emoji;
}

const updateTemp = tempStart => {
  const tempCounter = document.getElementById("tempStart");
  tempCounter.textContent = tempStart;
  updateTempColoring(tempStart);
  updateGarden(tempStart);
}

const increaseTemp = () => {
  tempStart += 1;
  updateTemp(tempStart)
}

const decreaseTemp = () => {
  tempStart -= 1;
  updateTemp(tempStart)
}

const registerEventHandlers = () => {
  updateTemp(tempStart);

  const increaseTempBtn = document.getElementById("increaseTempBtn");
  increaseTempBtn.addEventListener("click", increaseTemp);

  const decreaseTempBtn = document.getElementById("decreaseTempBtn");
  decreaseTempBtn.addEventListener("click", decreaseTemp);

  updateCityName();
  const cityName = document.getElementById("cityName");
  cityName.addEventListener("input", updateCityName)

  const cityNameResetBtn = document.getElementById("cityName");
  cityNameResetBtn.addEventListener("click", resetCityName);

  updateSky();
  const skyReflection = document.getElementById("skyReflection");
  skyReflection.addEventListener("change", updateSky)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);