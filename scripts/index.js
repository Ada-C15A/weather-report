const state = {
    temperature: 1,
    sky: "sunny",
}

const increaseTemperature = () => {
    const temperature = document.getElementById("temperature");
    state.temperature += 1;
    temperature.innerHTML = state.temperature;

    const temperatureCount = document.querySelector("#temperature");
    temperatureCount.textContent = state.temperature;
}

const decreaseTemperature = () => {
    const temperature = document.getElementById("temperature");
    state.temperature -= 1;
    temperature.innerHTML = state.temperature;

    const temperatureCount = document.querySelector("#temperature");
    temperatureCount.textContent = state.temperature;
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
    console.log({skyColor})
    gardenContent.classList = `garden__content ${skyColor}`;
}

const registerEventHandlers = (event) => {
    const increaseTemp = document.querySelector("#increaseTemperature");
    increaseTemp.addEventListener("click", increaseTemperature);

    const decreaseTemp = document.querySelector("#decreaseTemperature");
    decreaseTemp.addEventListener("click", decreaseTemperature);

    updateSky();
    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", updateSky);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);