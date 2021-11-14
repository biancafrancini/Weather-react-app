import React from "react";
import Form from "./Form";
import WeatherDetails from "./WeatherDetails";
import axios from "axios";

import "./styles.css";

export default function WeatherDisplay() {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "15311e86ae668422281f7a4353f9243b";
  let city = "Paris";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="container-md displayWeatherCity">
      <Form />
      <h1 id="city">London</h1>
      <p class="todayDate">15 October, 23:00</p>
      <WeatherDetails />
      <p>
        Coded by <a href="https://github.com/biancafrancini">Bianca Francini</a>{" "}
      </p>
    </div>
  );
}
