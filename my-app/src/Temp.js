import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import "./styles.css";

export default function WeatherDisplay() {
  return (
    <Container className="Temperature">
      <Row>
        <Col class="col temperature">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            id="IconEmoji"
          />
          <strong id="degrees">16</strong>
          <span class="celsius-Fahrenheit">
            <a href="" class="celsius">
              °C{" "}
            </a>
            <a href="" class="fahrenheit">
              {" "}
              °F
            </a>
          </span>
        </Col>
      </Row>
    </Container>
  );
}
