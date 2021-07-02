const state = {
    temperature: 80,
    sky: "sunny",
}

const increaseTemperature = () => {
    const temperature = document.getElementById("temperature");
    state.temperature += 1;
    temperature.innerHTML = state.temperature;

    const temperatureCount = document.querySelector("#temperature");
    temperatureCount.textContent = `${state.temperature}º`;
    updateGarden();
}

const decreaseTemperature = () => {
    const temperature = document.getElementById("temperature");
    state.temperature -= 1;
    temperature.innerHTML = state.temperature;

    const temperatureCount = document.querySelector("#temperature");
    temperatureCount.textContent = `${state.temperature}º`;
    updateGarden();
}

const updateSky = () => {
    const inputSky = document.getElementById("skySelect").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    let skyColor = "";
    if (inputSky === "cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
        skyColor = "cloudy";
    } else if (inputSky === "sunny") {
        sky = "☁️☁️☁️🌞☁️☁️";
        skyColor = "sunny"
    } else if (inputSky === "rainy"){
        sky = "🌧️🌈⛈️🌧️🌧️💧⛈️🌧️⛅🌧️💧🌧️🌧️";
        skyColor = "rainy"
    } else if (inputSky === "snowy") {
        sky = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️🌨🌨"
        skyColor = "snowy"
    }
    skyContainer.textContent = sky;
    const gardenContent = document.getElementById("gardenContent");
    gardenContent.classList = `garden__content ${skyColor}`;
}

const updateGarden = () => {
    const currentTemp = state.temperature;
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    if (currentTemp >= 80) {
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currentTemp >= 70) {
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (currentTemp >= 60) {
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }
    landscapeContainer.textContent = landscape;
}

const updateCityName = () => {
    const inputName = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = inputName;
}

const resetCityName = () => {
    const cityNameInput = document.getElementById('cityNameInput');
    cityNameInput.value = "Phoenix";
    updateCityName();
}

const registerEventHandlers = (event) => {
    updateGarden();
    const increaseTemp = document.querySelector("#increaseTemperature");
    increaseTemp.addEventListener("click", increaseTemperature);

    const decreaseTemp = document.querySelector("#decreaseTemperature");
    decreaseTemp.addEventListener("click", decreaseTemperature);

    updateSky();
    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", updateSky);

    updateCityName();
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName)

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click", resetCityName);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);