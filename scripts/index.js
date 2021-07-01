let tempValue = 70;

const updateTempStyles = (currentTemp) => {
    const tempValueContainer = document.getElementById("tempValue");
    let color = "teal";
    if ( currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    }
    tempValueContainer.classList = color;
}

const updateGarden = (currentTemp) => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "🌲______⛄️🌲🌲🏂🏻🌲__🌲";
    if ( currentTemp >= 80) {
        landscape = "🧗🏾____🌵🌵🌵__🐍__🌵🌵";
    } else if (currentTemp >= 70) {
        landscape = "🌻🌻🌻__🌻🌻_🐿_🌷__🌷🌷";
    } else if (currentTemp >= 60) {
        landscape = "💃🏿💃🏾💃🏽💃🏼💃🏻__🚴🏿_🚴🏾🚴🏽🚴🏼🚴🏻";
    }
    landscapeContainer.textContent = landscape;
}

const updateTemp = tempValue => {
    const tempValueContainer = document.getElementById("tempValue");
    tempValueContainer.textContent = tempValue;
    updateTempStyles(tempValue);
    updateGarden(tempValue);
}

const increaseTemp = () => {
    tempValue += 1;
    updateTemp(tempValue);
};

const decreaseTemp = () => {
    tempValue -= 1;
    updateTemp(tempValue);
};

const updateSky = () => {
    const inputSky = document.getElementById("skySelect").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    let skyColor = "";
    if (inputSky === "Cloudy") {
        sky = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
        skyColor = "cloudy";
    } else if (inputSky === "Sunny") {
        sky = "☁️   ☁️ ☁️  ☀️ ☁️   ☁️ ✈️ ";
        skyColor = "sunny";
    } else if (inputSky === "Rainy") {
        sky = "⛈🌧☁️☁️🌧🌧☁️🌧 🌦 🌧☁️☁️🌧";
        skyColor = "rainy";
    } else if (inputSky === "Snowy") {
        sky = "​🌬​🌨​☁️☁️❄️☁️🌨❄️🌨☁️🌨🌨☁️";
        skyColor = "snowy";
    }
    skyContainer.textContent = sky;
    const gardenContent = document.getElementById("gardenContent");
    gardenContent.classList = `garden__content ${skyColor}`;
};

const updateCityName = () => {
    const inputName = document.getElementById("cityNameInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = inputName;
};

const resetCityName = () => {
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.value = "Seattle";
    updateCityName();
};

const registerEventHandlers = () => {
    updateTemp(tempValue);
    const increaseTempControl = document.getElementById("increaseTempControl");
    increaseTempControl.addEventListener("click", increaseTemp);
    
    const decreaseTempControl = document.getElementById("decreaseTempControl");
    decreaseTempControl.addEventListener("click", decreaseTemp);

    updateSky();
    const skySelect = document.getElementById("skySelect");
    skySelect.addEventListener("change", updateSky);

    updateCityName();
    const cityNameInput = document.getElementById("cityNameInput");
    cityNameInput.addEventListener("input", updateCityName);

    const cityNameResetBtn = document.getElementById("cityNameReset");
    cityNameResetBtn.addEventListener("click", resetCityName);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);