const upClick = document.getElementsByClassName('upClick')[0];
const temperature = document.getElementsByClassName('temperature')[0];
const downClick = document.getElementsByClassName('downClick')[0];
let parseTemperature= parseInt(temperature.innerHTML)

const handleColorChange=()=>{
    const todayDisplay=document.getElementsByClassName("todayDisplay")[0];
    const landScape=document.getElementsByClassName("landScape")[0]
    if (parseTemperature >= 80){
        temperature.style.color="red" ;
        todayDisplay.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/02/68/48/90/240_F_268489083_Q5Vb8WaWyy3D5sYsmsheWq2cojgWDQ3T.jpg')";
        landScape.textContent='🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂'
    }
    else if(parseTemperature >=70 && parseTemperature <=79){
        temperature.style.color="orange"
        todayDisplay.style.backgroundImage = "url('https://www.parkview.com/media/Image/Dashboard_952_COVID_heat_5_20.jpg')";
        landScape.textContent="🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    }
    else if(parseTemperature >=60 && parseTemperature <=69 ){
  
        temperature.style.color="blue"
        todayDisplay.style.backgroundImage = "url('https://www.skymetweather.com/themes/skymet/images/gallery/toplists/10-ways-to-predict-weather-yourself/3.jpg')";
        landScape.textContent="🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    }
    else if(parseTemperature >=50 && parseTemperature <=59){
        temperature.style.color="green"
        todayDisplay.style.backgroundImage = "url('https://cdn.shopify.com/s/files/1/0847/5984/articles/winter_tips_blog_header_1600x.jpg?v=1608677258')";
        landScape.textContent="🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
    else{
        temperature.style.color="teal"
        todayDisplay.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmEOPhqiG5yG_yUSf48lanShE8P_Oi4Ev8sw&usqp=CAU')";
        landScape.textContent="🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    }
}

const increasedTemperature=()=>{
   parseTemperature+=1;
    handleColorChange()
    temperature.innerHTML = parseTemperature
}

const decreasedTemperature=()=>{
    parseTemperature-=1;
    handleColorChange()
    temperature.innerHTML = parseTemperature
}
upClick.addEventListener('click', increasedTemperature)
downClick.addEventListener('click', decreasedTemperature)

const handleSky=(event)=>{
    const skyIcon= document.getElementsByClassName("skyIcon")[0]
    const targetVal = event.target.value;
    
    if (targetVal === "Sunny")  {
        console.log("1")
        skyIcon.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️";
    } else if (targetVal === "Cloudy") {
        console.log("2")
        skyIcon.textContent = "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️";
    } else if (targetVal === "Rainy") {
        console.log("3")
        skyIcon.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧";
    } else if (targetVal === "Snowy") {
        console.log("4")
        skyIcon.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨";
    }
}
const skyWeather=document.getElementById("skyweather")
skyWeather.addEventListener("change",handleSky)

const form=document.getElementsByClassName("form")[0]
const handleCityName=(event)=>{
    event.preventDefault();
    const cityName=document.getElementById("cityName").value
    console.log(cityName)
    const cityNameDisplay =document.getElementsByClassName("cityNameDisplay")[0]
    console.log("dis",cityNameDisplay)
    cityNameDisplay.innerHTML=`For the lovely city of ${cityName}`
}
form.addEventListener('submit',handleCityName)
