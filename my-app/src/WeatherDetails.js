import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherDetails(props) {
  return (
    <div className="weatherDetails">
      <h1 id="city">{props.details.city}</h1>
      <p class="todayDate">
        <FormattedDate date={props.details.date} />
      </p>
      <div className="container">
        <div className="row row-cols-2 row-weatherDetails">
          <div className="col weather-description">
            {props.details.description}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="clearfix">
              <div className="float-left">
                <WeatherIcon code={props.details.icon} />
              </div>

              <div className="float-left">
                <WeatherTemperature celsius={props.details.temperature} />
              </div>
            </div>
          </div>

          <div class="col-9 humidity">
            Humidity:{" "}
            <span class="humidityLevel">
              {Math.round(props.details.humidity)}
            </span>
            %
            <div className="col windSpeed">
              Wind:{" "}
              <span class="windSpeedNumber">
                {Math.round(props.details.wind)}
              </span>{" "}
              Km/h
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
