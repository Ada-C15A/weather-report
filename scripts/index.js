const state = {
    tempCount: 70
};

const increaseTemp = () => {
    state.tempCount += 1
    const count = document.querySelector("#temperature");
    count.textContent = state.tempCount;

    if (state.tempCount > 79) {
        red();
        hot();
    } else if (state.tempCount > 69) {
        orange();
        mild();
    } else if (state.tempCount > 59)  {
        yellow();
        regular();
    } else if (state.tempCount > 49) {
        green();
        cool();
    } else {
        blue();
        cold();
    };
};

const decreaseTemp = () => {
    state.tempCount -= 1
    const count = document.querySelector("#temperature");
    count.textContent = state.tempCount;

    if (state.tempCount > 79) {
        red();
        hot();
    } else if (state.tempCount > 69) {
        orange();
        mild();
    } else if (state.tempCount > 59)  {
        yellow();
        regular();
    } else if (state.tempCount > 49) {
        green();
        cool();
    } else {
        blue();
        cold();
    };
};

const blue = () => {
    const currentTemp = document.querySelector("#temperature");
    currentTemp.className = `blue`;
};
const green = () => {
    const currentTemp = document.querySelector("#temperature");
    currentTemp.className = `green`;
};  
const yellow = () => {
    const currentTemp = document.querySelector("#temperature");
    currentTemp.className = `yellow`;
};  
const orange = () => {
    const currentTemp = document.querySelector("#temperature");
    currentTemp.className = `orange`;
}; 
const red = () => {
    const currentTemp = document.querySelector("#temperature");
    currentTemp.className = `red`;
};

const updateName = (event) => {
    const cityName = document.querySelector("#sampleCity");
    cityName.textContent = event.target.value;
};

const resetName = () => {
    const cityName = document.querySelector("#sampleCity");
    cityName.textContent = "Seattle"
}

const cold = () => {
    const floorLevel = document.querySelector("#floor");
    floorLevel.textContent = "🌲______⛄️🌲🌲🏂🏻🌲__🌲";
};
const cool = () => {
    const floorLevel = document.querySelector("#floor");
    floorLevel.textContent = "🧗🏾____🌵🌻_🐿_🌷__🌷🌷";
};
const regular = () => {
    const floorLevel = document.querySelector("#floor");
    floorLevel.textContent = "🌻🌻🌻__🌻🌻_🐿_🌷__🌷🌷";
};
const mild = () => {
    const floorLevel = document.querySelector("#floor");
    floorLevel.textContent = "💃🏿💃🏾💃🏽💃🏼💃🏻__🚴🏿_🚴🏾🚴🏽🚴🏼🚴🏻";
};
const hot = () => {
    const floorLevel = document.querySelector("#floor");
    floorLevel.textContent = "🧗🏾____🌵🌵🌵__🐍__🌵🌵";
};

const pickSky = (event) => {
    const sky = document.querySelector("#sky");
    if (event.target.value === "snowy"){
        sky.textContent = "🌬​🌨​☁️☁️❄️☁️🌨❄️🌨☁️🌨🌨☁️";
    }else if (event.target.value === "rainy"){
        sky.textContent = "⛈🌧☁️☁️🌧🌧☁️🌧 🌦 🌧☁️☁️🌧";
    }else if (event.target.value === "cloudy") {
        sky.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    }else if (event.target.value === "sunny") {
        sky.textContent = "☁️   ☁️ ☁️  ☀️ ☁️   ☁️ ✈️ ";
    };
};

const registerEventhandlers = () => {
    const increaseButton = document.querySelector("#plusButton");
    increaseButton.addEventListener("click", increaseTemp);

    const decreaseButton = document.querySelector("#minusButton");
    decreaseButton.addEventListener("click", decreaseTemp);

    const textInput = document.querySelector("#cityName");
    textInput.addEventListener("input", updateName);

    const resetButton = document.querySelector("#resetButton");
    resetButton.addEventListener("click", resetName);

    const skySelect = document.querySelector("#skies");
    skySelect.addEventListener("change", pickSky);
};

document.addEventListener("DOMContentLoaded", registerEventhandlers);