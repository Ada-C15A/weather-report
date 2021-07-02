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
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (tempNum >= 70) {
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (tempNum >= 60) {
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (tempNum >= 50) {
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else{
        landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
    landscapeView.textContent = landscape;
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