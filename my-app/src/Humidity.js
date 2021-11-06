import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import "./styles.css";

export default function WeatherDisplay() {
  return (
    <Container className="Humidity">
      <Row>
        <Col class="col humidity">
          Humidity: <span class="humidityLevel">5</span>%
        </Col>
      </Row>
    </Container>
  );
}
