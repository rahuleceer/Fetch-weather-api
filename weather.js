
export  async function generateWeather(city){
        const API_KEY= 'c832136cc3dca2cbc435e2d812f7a5c2' ;
        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data= await res.json();
        return data;
   };