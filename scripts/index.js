

// function incrementValue() {
//     let value = parseInt(document.getElementById('number').value);
//     value++;
//     document.getElementById('number').value = value;
// }

// function decrementValue() {
//     let value = parseInt(document.getElementById('number').value);
//     value--;
//     document.getElementById('number').value = value;
// }
// function colorChange() {
//     let num = parseInt(document.getElementById('#number').textContent.value);
//     if (num.value === 56) {
//         num.style.color = 'red';
//     }
// }

const state = {
    temperature: 55
};

const tempIncrease = (event) => {
    console.log({ state });
    state.temperature += 1; 
    const tempDisplay = document.querySelector("#number");
    const photo = document.querySelector("#landscape");
    tempDisplay.textContent = state.temperature;
    if (state.temperature >= 56 && state.temperature <= 60) {
        tempDisplay.style.color = "#1e81b0";
    } else if (state.temperature >= 61 && state.temperature <= 70){
        tempDisplay.style.color = "#e28743";
        photo.src = ("assets/images/spring-sun-clouds.png");
    } else if (state.temperature >= 71 && state.temperature <= 80){
        tempDisplay.style.color = "#eab676";
        photo.src="assets/images/very-warm.png";
    }else if (state.temperature >= 81 && state.temperature <= 85){
        tempDisplay.style.color = "#F8D210;"
        photo.src="assets/images/beach.png";
    } else if (state.temperature >= 86 && state.temperature <= 95) {
        tempDisplay.style.color = "#FA26A0";
        photo.src="assets/images/hot.png";
    }
};

const tempDecrease = (event) => {
    state.temperature -= 1;
    const tempDisplay = document.querySelector("#number");
    const photo = document.querySelector("#landscape");
    tempDisplay.textContent = state.temperature;
    if (state.temperature >= 40 && state.temperature <= 55){
        tempDisplay.style.color = "#abdbe3";
        photo.src="assets/images/city-gentle-rain.png";
    } else if (state.temperature >= 33 && state.temperature <=39){
        tempDisplay.style.color = "#154c79";
        photo.src="assets/images/very-snowy-city.png";
    }
};

function changeSky() {
    const sky = document.querySelector("#sky-type");
    var img = document.getElementById("mySelect");
    var value = img.options[img.selectedIndex].value;
    sky.src=value;
}
const registerEventHandlers = (event) => {
    const upArrow = document.querySelector("#up");
    upArrow.addEventListener("click", tempIncrease);
    const downArrow = document.querySelector("#down");
    downArrow.addEventListener("click", tempDecrease);
    const skyChooser = document.querySelector("#mySelect");
    skyChooser.addEventListener("change", changeSky);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);