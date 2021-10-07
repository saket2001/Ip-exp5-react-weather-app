import React from "react";
import styles from "./weatherCard.module.css";
import { Row, Col, Container, Image } from "react-bootstrap";

const WeatherCard = ({ Data }) => {
  return (
    <Container>
      <Row className="rounded">
        <Col className={styles.image}>
          <Row className="fs-5 my-2 pt-2">
            <Col sm="6" className="text-center">
              {new Date().toDateString()}
            </Col>
            <Col sm="6" className="text-center">
              Feels Like {Data?.current?.feelslike_c} &deg;C
            </Col>
          </Row>
          <Row className="mb-5 pt-4">
            <Col
              sm={12}
              className="fw-bold d-flex justify-content-center align-items-center fs-3"
            >
              <Image src={Data?.current?.condition?.icon} />
              {Data?.current?.condition?.text}
            </Col>
            <Col sm={12} className="text-center fs-5 text-light">
              {Data?.location?.name}, {Data.location?.country}
            </Col>
            <Col sm={12} className="text-center fw-medium fs-2">
              {Data?.current?.temp_c} &deg;C
            </Col>
          </Row>
          <Row className="my-2 pt-5">
            <Col className="text-center fs-6 text-light">
              Wind {Data?.current?.wind_kph} Kmph
            </Col>
            <Col className="text-center fs-6 text-light">
              Clouds {Data?.current?.cloud} %
            </Col>
            <Col className="text-center fs-6 text-light">
              Humidity {Data?.current?.humidity} %
            </Col>
            <Col className="text-center fs-6 text-light">
              Visibility {Data?.current?.vis_km} km
            </Col>
            <Col className="text-center fs-6 text-light">
              UV {Data?.current?.uv} %
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="bg-white py-2 h-50 rounded-bottom">
          {Data?.forecast?.forecastday?.map((item) => (
            <Col className="mx-1 px-2 fs-5 border-dark border-bottom d-flex align-items-center justify-content-between">
              <p>{new Date(item.date).toDateString()}</p>
              <p>Avg Temp {item.day.avgtemp_c} &deg;C</p>
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherCard;
