import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";

import "./styles.css";

export default function WeatherDisplay(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "74730c7210af95983408c4811942f11b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="container-md displayWeatherCity">
        <div>
          <form onSubmit={handleSubmit} class="row g-2" id="search-form">
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
                onChange={handleCityChange}
              />
            </div>
          </form>
          <WeatherDetails details={weatherData} />
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
    search();
    return "Loading...";
  }
}
