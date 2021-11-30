import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] =useState(false);
  let [forecast, setForecast]= useState(null);

  function handleResponseForecast(response){
    setForecast(response.data.daily);
    setLoaded(true);
  }
 

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function(dailyForecast, index){
            if (index < 5){
            return (
          <div className="col" key={index}>
            <WeatherForecastDay data={dailyForecast} />
          </div>
          );
        } else {
          return null;
        }
      })}
        </div>
      </div>
    );
    
  } else {
    let apiKey = "74730c7210af95983408c4811942f11b";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponseForecast);
    return null;
  
}
}
