const state = {
    temp: 82,
    sky: "Sunny",
    city: "Emerald City"
};

const skys = [`☁️ ☁️ ☁️ ☀️ ☁️ ☁️`,
    `☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️`,
    `🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧`,
    `🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨`
]

const landscapes = [
    `🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂`,
    `🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷`,
    `🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃`,
    `🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲`
]

const incrementTemp = () => {
    let temp = document.getElementById("temp");
    state.temp += 1;
    temp.innerHTML = state.temp;
    const landscapeIdx = getLandscapeIdx()

    const landscapeImg = document.getElementById("landscapeImg");
    landscapeImg.innerHTML = landscapes[landscapeIdx]
}

const decrementTemp = () => {
    const temp = document.getElementById("temp");
    state.temp -= 1;
    temp.innerHTML = state.temp;

    const landscapeIdx = getLandscapeIdx()
    const landscapeImg = document.getElementById("landscapeImg");
    landscapeImg.innerHTML = landscapes[landscapeIdx]
}

const getLandscapeIdx = () => {
    if (state.temp >= 80) {
        return 0
    } else if (state.temp >= 70) {
        return 1
    } else if (state.temp >= 60) {
        return 2
    } else {
        return 3
    }
}

const getSkyIdx = () => {
    switch (state.sky) {
        case 'Sunny':
            return 0
        case 'Cloudy':
            return 1
        case 'Rainy':
            return 2
        case 'Snowy':
            return 3
        default:
            break
    }
}

function setCity() {
    const newCity = document.getElementById("cityInput").value;
    state.city = newCity;
    document.getElementById("city").innerHTML = `for ✨${newCity}✨`;
}

function resetCity() {
    state.city = "Emerald City";
    document.getElementById("city").innerHTML = `for ✨${state.city}✨`;
    document.getElementById("cityInput").value = ""
}

function setSky() {
    let sky = document.getElementById("sky");
    let skyHTML = sky[this.selectedIndex].innerHTML;
    state.sky = skyHTML;

    const skyIdx = getSkyIdx()
    const skyImg = document.getElementById("skyImg");
    skyImg.innerHTML = skys[skyIdx]
}

const registerEventHandlers = () => {
    const incTemp = document.querySelector("#incrementTemp");
    incTemp.addEventListener("click", incrementTemp);

    const decTemp = document.querySelector("#decrementTemp");
    decTemp.addEventListener("click", decrementTemp);

    const sky = document.querySelector("#sky");
    sky.addEventListener("change", setSky);

    const cityInput = document.getElementById("cityInput");
    cityInput.addEventListener("keyup", setCity);
};

const setDefaults = () => {
    document.getElementById("temp").innerHTML = state.temp;
    document.getElementById("city").innerHTML = `for ✨${state.city}✨`;

    const landscapeIdx = getLandscapeIdx()
    const landscapeImg = document.getElementById("landscapeImg");
    landscapeImg.innerHTML = landscapes[landscapeIdx]

    const skyIdx = getSkyIdx()
    const skyImg = document.getElementById("skyImg");
    skyImg.innerHTML = skys[skyIdx]
}

setDefaults()
document.addEventListener("DOMContentLoaded", registerEventHandlers);