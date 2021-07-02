const state = {
    temperature: 70,
    sky: "sunny",
    cityName: "Antioch, CA"
}

weather_info = {
    cool: {
        fontColor: "#57b3b5",
        color: "#8cd1ec",
        emojis: "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",
        temp: [69,60]
    },
    warm: {
        fontColor: "#d19419",
        color: "FFE1B4",
        emojis: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",
        temp: [79,70]
    },
    hot: {
        fontColor: "#ec0c0c",
        color: "#ec0c0c",
        emojis: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂",
        temp: [200, 80]
    },
    freezing: {
        fontColor: "#7f96b5",
        color: "#3f63c5",
        emojis: "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲",
        temp: [59, -100]
    }
}

sky_info = {
    sunny: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80",
    cloudy: "https://images.unsplash.com/photo-1479688895406-3f032f15f0ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    rainy: "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    snowy: "https://images.unsplash.com/photo-1518873890627-d4b177c06e51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
}

const changeTempColor = () => {
    const tempValue = document.querySelector("#tempValue");
    const tempDisplay = document.querySelector("#tempDisplay");

    if(state.temperature >= 80){
        tempDisplay.style.color = weather_info.hot.fontColor
        tempValue.style.color = weather_info.hot.fontColor
    }else if(state.temperature <= 79 && state.temperature >=70){
        tempDisplay.style.color = weather_info.warm.fontColor
        tempValue.style.color = weather_info.warm.fontColor
    }else if(state.temperature <= 69 && state.temperature >=60){
        tempDisplay.style.color = weather_info.cool.fontColor
        tempValue.style.color = weather_info.cool.fontColor
    }else if(state.temperature < 59){
        tempDisplay.style.color = weather_info.freezing.fontColor
        tempValue.style.color = weather_info.freezing.fontColor
    }
}

const changeLandscape = () => {
    const lanscapeContent = document.querySelector("#lanscapeContent");
    const landscapeContainer = document.querySelector("#landscapeContainer");
    if(state.temperature >= 80){
        landscapeContainer.style.color = weather_info.hot.color
        lanscapeContent.textContent = `${weather_info.hot.emojis}`;

    }else if(state.temperature <= 79 && state.temperature >=70){
        landscapeContainer.style.color = weather_info.warm.color
        lanscapeContent.textContent = `${weather_info.warm.emojis}`;

    }else if(state.temperature <= 69 && state.temperature >=60){
        landscapeContainer.style.color = weather_info.cool.color
        lanscapeContent.textContent = `${weather_info.cool.emojis}`;

    }else if(state.temperature < 59){
        landscapeContainer.style.color = weather_info.freezing.color
        lanscapeContent.textContent = `${weather_info.freezing.emojis}`;
    }
}

const changeTempValue = () => {
    const tempValue = document.querySelector("#tempValue");
    tempValue.textContent = `Temperature: ${state.temperature}F°`;
    const tempDisplay = document.querySelector("#tempDisplay");
    tempDisplay.textContent = `${state.temperature}F°`;
}

const decreaseTemp = (event) => {
    state.temperature -= 1;
    changeTempValue()
    changeTempColor()
    changeLandscape()
};

const increaseTemp = (event) => {
    state.temperature += 1;
    changeTempValue()
    changeTempColor()
    changeLandscape()
};

const changeSky = (event) => {
    const skyContent = document.querySelector("#skyContent");
    const mainBackground = document.querySelector("#mainBackground");
    const mainContent = document.querySelector(".mainContent");

    if(event.target.options.selectedIndex == 0){
        mainContent.style.backgroundColor = "#c9c9c3"
        mainBackground.style.backgroundImage = `url(${sky_info.sunny})`
        skyContent.textContent = `☁️ ☁️ ☁️ ☀️ ☁️ ☁️`;
    }else if(event.target.options.selectedIndex == 1){
        mainContent.style.backgroundColor = "#cadeed"
        mainBackground.style.backgroundImage = `url(${sky_info.cloudy})`
        skyContent.textContent = `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`;
    }else if(event.target.options.selectedIndex == 2){
        mainContent.style.backgroundColor = "#b7f6f7"
        mainBackground.style.backgroundImage = `url(${sky_info.rainy})`
        skyContent.textContent = `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`;
    }else if(event.target.options.selectedIndex == 3){
        mainContent.style.backgroundColor = "#e3e2de"
        mainBackground.style.backgroundImage = `url(${sky_info.snowy})`
        skyContent.textContent = `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`;
    }
}

const changeCityName = (event) => {
    state.cityName = event.target.value
    const cityName = document.querySelector("#cityName");
    cityName.textContent = state.cityName;
}

const clearCityName = () => {
    state.cityName = "Antioch, CA"
    const cityName = document.querySelector("#cityName");
    cityName.textContent = state.cityName;
    const cityNameSelect = document.querySelector("#cityNameSelect");
    cityNameSelect.value = ""
}

const registerEventHandlers = (event) => {
    const tempDownButton = document.querySelector("#tempDown");
    tempDownButton.addEventListener("click", decreaseTemp);
    const tempUpButton = document.querySelector("#tempUp");
    tempUpButton.addEventListener("click", increaseTemp);
    const skySelect = document.querySelector("#sky");
    skySelect.addEventListener("change", changeSky);
    const renameCity = document.querySelector("#cityNameSelect");
    renameCity.addEventListener("input", changeCityName);
    const resetCityName = document.querySelector("#resetButton");
    resetCityName.addEventListener("click", clearCityName);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);