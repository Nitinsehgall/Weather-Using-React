import React, { useEffect, useState } from "react";
import Weather from "./Weather";
import './App.css'
// import Sider from "./Sider";
import Calendar from "./Calendar";


function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [searchValue, setSearchValue] = useState("yamunanagar");

  // let url=searchValue
  // if(url ==''){
  //   url='yamunanagar'
  // }else{
  //   url=searchValue
  // }
  
  const weatherResult = async () => {
    try{
      const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchValue||'yamunanagar'}&appid=9f522aa60779df90b025c7db7c3d3862`
      )
      const data = await result.json();
      console.log(data,'data');
      setWeatherData({
        temp: data?.main?.temp,
        country: data?.sys?.country,
      name: data?.name,
      description: data?.weather?.[0]?.description,
      humidity: data?.main?.humidity,
      speed: data?.wind?.speed,
      sunrise:data?.sys?.sunrise,
      sunset:data?.sys?.sunset,
      main:data?.weather?.[0]?.main,
      message:data?.message,
      cod: data?.cod,
       
    
    });
  }catch(err){
    // console.log(err);  
}

console.log(weatherData,'weather');
  };
  useEffect(() => {
    weatherResult();
  }, [searchValue]);
  // console.log(weatherData, "weather Data");
  const degree = parseInt(weatherData.temp) - 273.5;
  const speed = parseInt(weatherData.speed) * 3.6;
  const sunset=new Date(weatherData.sunset*1000).toLocaleTimeString()
  const sunrise=new Date(weatherData.sunrise*1000).toLocaleTimeString()
  console.log(degree);
  console.log(sunset);
  console.log(sunrise);

  const search = (e) => {
    const value = e.target.value;

    setSearchValue(value);
  };
  console.log(searchValue);
  console.log(weatherData.message);
  console.log(weatherData.cod,'cod');

  return (
    <div className="flex w-screen">

      <Weather
        temp={degree}
        description={weatherData.description}
        name={weatherData.name}
        humidity={weatherData.humidity}
        searchvalue={search}
        windSpeed={speed}
        sunrise={sunrise}
        main={weatherData.main}
        cod={weatherData.cod}
        />
      
        {/* <Sider/> */}
        
    </div>
  );
}

export default App;
