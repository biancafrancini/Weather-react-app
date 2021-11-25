import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>
          <br />
          <WeatherIcon code="01d" />
          <br />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temp-max">19˚ </span>
            <span className="WeatherForecast-temp-min"> 10˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}