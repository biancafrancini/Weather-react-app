import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
console.log(props.data);
    function maxTemperature(){
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}˚`;
    }

    function minTemperature(){
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}˚`;
    }

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day= date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];

    }
    return (
        <div className="Forecast-data-component">
        <div className="WeatherForecast-day">{day()}</div>
            <br />
            <WeatherIcon code={props.data.weather[0].icon} />
            <br />
            <div className="WeatherForecast-temperature">
              <span className="WeatherForecast-temp-max">{maxTemperature()}  </span>
              <span className="WeatherForecast-temp-min">{minTemperature()}</span>
            </div>
            </div>
    );
}