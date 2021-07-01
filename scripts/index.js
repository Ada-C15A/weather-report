

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
    tempDisplay.textContent = state.temperature;
    if (state.temperature >= 56 && state.temperature <= 60) {
        tempDisplay.style.color = "#1e81b0";
    } else if (state.temperature >= 61 && state.temperature <= 70){
        tempDisplay.style.color = "#e28743"
    }
};

const tempDecrease = (event) => {
    state.temperature -= 1;
    const tempDisplay = document.querySelector("#number");
    tempDisplay.textContent = state.temperature;
    if (state.temperature >= 40 && state.temperature <= 55){
        tempDisplay.style.color = "#abdbe3"
    }
};
const registerEventHandlers = (event) => {
    const upArrow = document.querySelector("#up");
    upArrow.addEventListener("click", tempIncrease);
    const downArrow = document.querySelector("#down");
    downArrow.addEventListener("click", tempDecrease);
};

const changeColor = (event) => {
    const tempDisplay = document.querySelector("#number").textContent;
    if (state.temperature == 56) {
        tempDisplay.textContent.fontcolor = "green";
    }
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);