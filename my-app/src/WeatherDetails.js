import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherDetails(props) {
  return (
    <div className="weatherDetails">
      <h1 id="city">{props.details.city}</h1>
      <p class="todayDate">
        <FormattedDate date={props.details.date} />
      </p>
      <div className="container">
        <div className="row row-cols-2  row-weatherDetails">
          <div className="col weather-description">
            {props.details.description}
          </div>
        </div>
        <div className="row">
          <div class="col temperature">
            <img
              src={props.details.iconUrl}
              id="IconEmoji"
              alt={props.details.description}
            />
            <strong id="degrees">
              {Math.round(props.details.temperature)}
            </strong>
            <span class="celsius-Fahrenheit">
              <a href="#top" class="celsius">
                °C{" "}
              </a>
              <a href="#top" class="fahrenheit">
                {" "}
                °F
              </a>
            </span>
          </div>
          <div class="col humidity">
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
