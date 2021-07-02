const state = {
    temperature: 1,
}

const increaseTemperature = () => {
    let temperature = document.getElementById("temperature");
    state.temperature += 1;
    temperature.innerHTML = state.temperature;

    const temperatureCount = document.querySelector("temperature");
    temperatureCount.textContent = state.temp;
}

const registerEventHandlers = (event) => {
    const increaseTemp = document.querySelector("#increaseTemperature");
    increaseTemp.addEventListener("click", increaseTemperature);

    const decreaseTemp = document.querySelector("#decreaseTemperature");
    decreaseTemp.addEventListener("click", decreaseTemperature);
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);