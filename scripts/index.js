state = {
    'temp': 72,
}

input.oninput = () => {
    currentCity.innerHTML = input.value;
};

const increaseTemp = () => {
    state.temp += 1;
    temp.innerHTML = state.temp;
    changeTempColor();
    displayLandscape();
}

const decreaseTemp = () => {
    state.temp -= 1;
    temp.innerHTML = state.temp;
    changeTempColor();
    displayLandscape();
}

upArrow.addEventListener('click', increaseTemp)
downArrow.addEventListener('click', decreaseTemp)

const changeTempColor = () => {
    if (state.temp >= 80) {
        document.getElementById('temp').style.color = 'red';
    } else if (state.temp < 80 && state.temp >= 70) {
        document.getElementById('temp').style.color = 'orange';
    } else if (state.temp < 70 && state.temp >= 60) {
        document.getElementById('temp').style.color = 'yellow';
    } else if (state.temp < 60 && state.temp >= 50) {
        document.getElementById('temp').style.color = 'green';
    } else if (state.temp < 50) {
        document.getElementById('temp').style.color = 'teal';
    }
}

const displayLandscape = () => {
    const landscapes = {
        'hot': '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂',
        'fair': '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷',
        'cool': '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃',
        'cold': '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲',
        'freezing': '❄️🌨☃️⛷❄️🌨☃️🏂❄️🌨☃️⛷❄️🌨☃️'
    }

    let landscape

    if (state.temp >= 80) {
        landscape = landscapes['hot'];
    } else if (state.temp < 80 && state.temp >= 70) {
        landscape = landscapes['fair'];
    } else if (state.temp < 70 && state.temp >= 60) {
        landscape = landscapes['cool'];
    } else if (state.temp < 60 && state.temp >= 50) {
        landscape = landscapes['cold'];
    } else if (state.temp < 50) {
        landscape = landscapes['freezing'];
    }

    landscapeGraphics.innerHTML = landscape;
}

const displaySky = () => {
    const skies = {
        'cloudy': '☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️',
        'clear': '☀️☀️😎☀️☀️☀️😎☀️☀️☀️😎☀️',
        'snowy': '❄️🌨❄️❄️❄️🌨❄️❄️❄️🌨❄️❄️',
        'stormy': '⚡️⛈⚡️🌪⚡️⛈⚡️🌪⚡️⛈⚡️🌪',
        'fire': '🔥🌫☄️🔥🔥🌫☄️🔥🔥🌫☄️🔥'
    }
    const selectedSky = document.getElementById("skySelect").value;

    let sky = skies[selectedSky]

    skyGraphics.innerHTML = sky;
}

