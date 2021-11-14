import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function WeatherDisplay(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container-md displayWeatherCity">
        <div>
          <form class="row g-2" id="search-form">
            <div class="col-auto">
              <button id="searchCityButton">Search</button>
            </div>
            <div class="col-auto">
              <label for="inputPassword2" class="visually-hidden">
                Enter your city...
              </label>
              <input
                class="placeholderEnterCity"
                id="inputCity"
                placeholder="Enter a city..."
              />
            </div>
          </form>
        </div>
        <h1 id="city">{weatherData.city}</h1>
        <p class="todayDate">15 October, 23:00</p>
        <div className="container">
          <div className="row row-cols-2  row-weatherDetails">
            <div className="col weather-description">
              {weatherData.description}
            </div>
          </div>
          <div className="row">
            <div class="col temperature">
              <img
                src={weatherData.iconUrl}
                id="IconEmoji"
                alt={weatherData.description}
              />
              <strong id="degrees">
                {Math.round(weatherData.temperature)}
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
                {Math.round(weatherData.humidity)}
              </span>
              %
              <div className="col windSpeed">
                Wind:{" "}
                <span class="windSpeedNumber">
                  {Math.round(weatherData.wind)}
                </span>{" "}
                Km/h
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <p>
          Coded by{" "}
          <a href="https://github.com/biancafrancini">Bianca Francini</a>{" "}
        </p>
      </div>
    );
  } else {
    const apiKey = "15311e86ae668422281f7a4353f9243b";
    let city = "Paris";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
