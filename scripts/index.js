let temp = 75;

const updateTempColor = (tempNum) => {
    const tempVal = document.getElementById("temp");
    if (tempNum >= 80) {
        color = "red";
    } else if (tempNum >= 70) {
        color = "orange";
    } else if (tempNum >= 60) {
        color = "yellow";
    } else if (tempNum >= 50) {
        color = "green";
    } else{
        color = "blue";
    }
    tempVal.classList = color;
}

const updateLandscape = (tempNum) => {
    const landscapeView = document.getElementById("landscape");
    if (tempNum >= 80) {
        landscapeView.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (tempNum >= 70) {
        landscapeView.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (tempNum >= 60) {
        landscapeView.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (tempNum >= 50) {
        landscapeView.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else{
        landscapeView.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
}
const updateTemp = temp => {
    const tempVal = document.getElementById("temp");
    tempVal.textContent = temp;
    updateTempColor(temp);
    updateLandscape(temp);
}

const onIncreaseClick = () => {
    temp += 1;
    document.getElementById("temp").innerHTML = temp;
    updateTemp(temp);
};
const onDecreaseClick = () => {
    temp -= 1;
    document.getElementById("temp").innerHTML = temp;
    updateTemp(temp);
};

//let skyChoice = $("#skyChoice option:selected").val();
selectElement.addEventListener('change', (event) => {
    const updateSky = () => {
        // const skyChoice = document.querySelector("skyChoice").value;
        // const skyVal = document.getElementById("sky");

    //     if (skyChoice === "Sunny") {
    //         skyVal.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";   
    //     } else if (skyChoice === "Cloudy") {
    //         skyVal.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    //     } else if (skyChoice === "Rainy") {
    //         skyVal.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";    
    //     } else if (skyChoice === "Snowy") {
    //         skyVal.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    //     }
        const skyChoice = document.querySelector(`${event.target.value}`);
        const skyVal = document.getElementById("sky");
        switch (skyChoice) {
            case "Sunny":
                skyVal.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
                break;
            case "Cloudy":
                skyVal.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
                break;
            case "Rainy":
                skyVal.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
                break;
            case "Snowy":
                skyVal.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
                break;
            default:
                skyVal.textContent = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️";
        }
    }
});

const updateCity = () => {
    const newCity = document.getElementById("city").value;
    const updatedCity = document.getElementById("header-city");
    updatedCity.textContent = newCity;
}

const registerEventHandlers = () => {
    updateTemp(temp);
    const onIncreaseClick = document.getElementById("increase");
    onIncreaseClick.addEventListener("click", increaseTemp);
    const onDecreaseClick = document.getElementById("decrease");
    onDecreaseClick.addEventListener("click", decreaseTemp);
    updateSky();
    const skySelect = document.querySelector("sky");
    skySelect.addEventListener("change", updateSky);
    updateCity();
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);