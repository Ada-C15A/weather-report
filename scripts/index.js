const state = {
    temperature: 65
}

const weather = {

    forties :  "⛄️⛄️⛄️⛄️⛄️⛄️",

    fifties : "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    ,
    sixties : "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃",

    seventies: "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷",

    eighties: "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
    
}

const updateTempValue = () => {
    const tempValue = document.querySelector("#tempValue");
    const landscape = document.querySelector('#landscape');
    let tempRange = ''
    tempValue.textContent = `${state.temperature}°`;
    if (state.temperature <= 49){
        tempRange = "forties";
    } else if (state.temperature <=59 && state.temperature >= 50){
        tempRange = "fifties"
    } else if (state.temperature <=69 && state.temperature >= 60){
        tempRange = "sixties"
    } else if (state.temperature <=79 && state.temperature >= 70){
        tempRange = "seventies"
    } else {
        tempRange = "eighties"
    }
    tempValue.className = tempRange;
    landscape.textContent = weather[tempRange];

}

const incrementTemp = (e) => {
    state.temperature += 1;
    updateTempValue()
};

const decrementTemp = (e) => {
    state.temperature -= 1;
    updateTempValue()
};

const sky = {

    sunny :  "☁️ ☁️ ☁️ ☀️ ☁️ ☁️",

    cloudy : "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️",

    rainy : "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧",

    snowy: 	"🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    
}

const changeSky = (e) => {
    const skySelection = document.querySelector("#selectSky").value;
    const skyDisplay = document.querySelector('#displaySky');
    skyDisplay.textContent = sky[skySelection];
} 

const registerEventHandlers = (event) => {
    const tempDownButton = document.querySelector("#tempDown");
    tempDownButton.addEventListener("click", decrementTemp);
    const tempUpButton = document.querySelector("#tempUp");
    tempUpButton.addEventListener("click", incrementTemp);
    const selectSky = document.querySelector("#selectSky");
    selectSky.addEventListener("change", changeSky);
    //event handler for sky
};

document.addEventListener("DOMContentLoaded", registerEventHandlers); 
