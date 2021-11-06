import React from "react";
import Form from "./Form";
import WeatherDetails from "./WeatherDetails";

import "./styles.css";

export default function WeatherDisplay() {
  return (
    <div className="container-md displayWeatherCity">
      <Form />
      <h1 id="city">London</h1>
      <p class="todayDate">15 October, 23:00</p>
      <WeatherDetails />
    </div>
  );
}
