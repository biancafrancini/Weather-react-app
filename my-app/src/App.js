import logo from "./logo.svg";

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import WeatherDisplay from "./WeatherDisplay";

import "./styles.css";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <WeatherDisplay />
    </div>
  );
}
