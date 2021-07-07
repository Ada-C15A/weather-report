let tempStart = 71;

const updateCityName = () => {
  const updatedCityName = document.getElementById("cityName").value;
}

const resetCityName = () => {
  const cityName = document.getElementById("cityName");
  cityName.value = "Los Angeles";
  updateCityName();
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

  const cityNameResetBtn = document.getElementById("cityName");
  cityNameResetBtn.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);