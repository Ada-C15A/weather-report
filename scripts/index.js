input.oninput = () => {
    currentCity.innerHTML = input.value;
};

const displaySky = () => {
    const skies = {
        'cloudy': '☁️☁️☁️☁️',
        'clear': '☀️☀️😎☀️',
        'snowy': '❄️🌨❄️❄️',
        'stormy': '⚡️⛈⚡️🌪',
        'fire': '🔥🌫☄️🔥'
    }
    const selectedSky = document.getElementById("skySelect").value;

    let sky = skies[selectedSky]

    skyGraphics.innerHTML = sky;
}

