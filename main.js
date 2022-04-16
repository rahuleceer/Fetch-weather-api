import * as w from './weather.js'

const card=document.getElementById('card');
const place = document.getElementById('city');
const input = document.getElementById('val');
const coord = document.getElementById('coord');
const time = document.getElementById('time');
const temp = document.getElementById('temp');
const sky = document.getElementById('sky');
const img= document.getElementById('img');

card.style.display='none';

document.addEventListener("keyup",async function(e){
    e.preventDefault();
    if(e.keyCode===13){
        const city= input.value;
        //console.log(city);
        const data=await w.generateWeather(city);
        if(data.cod==='404') {
            alert('Enter the correct city name!');
            return;
        }
        console.log(data);
        card.style.display='flex';
        place.innerText=city;
        time.innerText=`${Date()}`;
        temp.innerText=`temp : ${data.main.temp}K`;
        coord.innerText=`coord : {lat: ${data.coord.lat}, lon:${data.coord.lon}}`;
        sky.innerText=`description : ${data.weather[0].description}`;
        var url = `http://openweathermap.org/img/w/`+data.weather[0].icon+`.png`;
        img.setAttribute('src',url);
        console.log(data.weather[0].icon);
    }
});
