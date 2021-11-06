import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import "./styles.css";

export default function WeatherDisplay() {
  return (
    <Container className="Wind">
      <Row>
        <Col class="col windSpeed">
          Wind: <span class="windSpeedNumber"> 10 </span>Km/h
        </Col>
      </Row>
    </Container>
  );
}