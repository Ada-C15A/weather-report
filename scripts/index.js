const upClick = document.getElementsByClassName('upClick')[0];
const temperature = document.getElementsByClassName('temperature')[0];
const downClick = document.getElementsByClassName('downClick')[0];

const increasedTemperature=()=>{

    temperature.innerHTML = parseInt(temperature.innerHTML) +1;


}

const decreasedTemperature=()=>{
    temperature.innerHTML = parseInt(temperature.innerHTML) -1;
}
upClick.addEventListener('click', increasedTemperature)
downClick.addEventListener('click', decreasedTemperature)