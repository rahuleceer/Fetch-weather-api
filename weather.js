
export  async function generateWeather(city){
        const API_KEY=;// put your API_KEY of your openweather account;
        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        const data= await res.json();
        return data;
   };
