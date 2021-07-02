// Change color
let counter = document.getElementById("counting");
let btnIncrement = document.getElementById("btn-increment");
let btnDecrement = document.getElementById("btn-decrement");

let number = 0;

function changeColor(number){
    let color = "";

    if (number === 0) {
        color = "color0"
    } else if (number < 15) {
        color = "color1";
    } else if (number < 25) {
        color = "color2";
    } else if (number < 30) {
        color = "color3"; 
    } else if (number < 45) {
        color = "color5";
    } else if (number < 50) {
        color = "color6";
    } else if (number < 65) {
        color = "color7";
    } else if (number < 75) {
        color = "color8";
    } else if (number < 85) {
        color = "color9";
    }
    else {
        color="color10";
    }
    return color;
}

// Change Sky
const changeSky = () => {
    const input = document.getElementById("sky-select").value;
    const skyconContainer =  document.getElementById("icon");
    let sky = "";
    
    if (input === 'Rainy') {
        const icon = "RAIN"
        // have get element and change the textContent the number of the temp you wnat const document.querySelector"temperature--degree" = 100
         // one line in each conditional...
        // Set Icon
            setIcons(document.querySelector("#icon"), icon);
        } else if (input === 'Cloudy') {
            const icon = "PARTLY_CLOUDY_NIGHT"
            setIcons(document.querySelector("#icon"), icon);
        }  else if (input === 'Sunny') {
            const icon = "CLEAR_DAY"
            setIcons(document.querySelector("#icon"), icon);
        }  else if (input === 'Winter') {
            const icon = "SNOW"
            setIcons(document.querySelector("#icon"), icon);
        } else if (input === 'Clear Night') {
            const icon = "CLEAR_NIGHT"
            setIcons(document.querySelector("#icon"), icon);
        } else if (input === 'Windy') {
            const icon = "WIND"
            setIcons(document.querySelector("#icon"), icon);
        }
    };

    function setIcons(iconID, icon) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "-").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

    // Select city
    function changeCity() {
        const input = document.getElementById("city-name").value;
        const result = document.getElementById("result");
        result.textContent=input;
    };

    //Reset cityName
    function resetCityName() {
        const input = document.getElementById("city-name");
        input.value = "Miami";
        changeCity();
    }

    //Change Temperature Color - Increment 
    const changeTempIncrease = () => {
        number++;
        const skyclass = changeColor(number)
        document.getElementById("counting").innerHTML = number;
        document.getElementById("counting").className = skyclass;
    };

    //Change Temperature Color - Decrement
    const changeTempDecrease = () => {
        number--;
        const skyclass = changeColor(number)
        document.getElementById("counting").innerHTML = number;
        document.getElementById("counting").className = skyclass;
    };

    let data = 0;

    document.getElementById("counting").innerText = data;

    const registerEventHandlers = () => {
        const city = document.querySelector("#city-name");
        city.addEventListener("input", changeCity);
        
        const skySelect = document.getElementById('sky-select');
        skySelect.addEventListener("change", changeSky);

        const resetBtn = document.querySelector("#resetBtn");
        resetBtn.addEventListener("click", resetCityName);

        const btnIncrementColor = document.getElementById("btn-increment");
        btnIncrementColor.addEventListener("click", changeTempIncrease);

        const btnDecrementColor = document.getElementById('btn-decrement');
        btnDecrementColor.addEventListener("click", changeTempDecrease);

    };

    document.addEventListener("DOMContentLoaded", registerEventHandlers);

    