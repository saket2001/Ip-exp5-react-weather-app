import React from "react";
import styles from "./weatherCard.module.css";
import { Row, Col, Container, Image } from "react-bootstrap";

const WeatherCard = ({ Data }) => {
  return (
    <Container>
      <Row className="rounded">
        <Col className={styles.image}>
          <Row className="my-2 pt-2">
            <Col sm={6} xs={6} className="text-center p-1 fs-5">
              {new Date().toDateString()}
            </Col>
            <Col sm={6} xs={6} className="text-center p-1 fs-5">
              Feels Like {Data?.current?.feelslike_c} &deg;C
            </Col>
          </Row>
          <Row className="py-4">
            <Col
              sm={12}
              className="fw-bold text-white d-flex justify-content-center align-items-center fs-1"
            >
              <Image src={Data?.current?.condition?.icon} />
              {Data?.current?.condition?.text}
            </Col>
            <Col sm={12} className="text-center fs-5 text-light">
              {Data?.location?.name}, {Data.location?.country}
            </Col>
            <Col sm={12} className="text-center fw-bold display-5">
              {Data?.current?.temp_c} &deg;C
            </Col>
          </Row>
          <Row className="my-2">
            <Col
              md={3}
              xs={6}
              className="text-center fs-6 text-light my-1 py-1"
            >
              Wind {Data?.current?.wind_kph} Kmph
            </Col>
            <Col
              md={3}
              xs={6}
              className="text-center fs-6 text-light my-1 py-1"
            >
              Clouds {Data?.current?.cloud} %
            </Col>
            <Col
              md={3}
              xs={6}
              className="text-center fs-6 text-light my-1 py-1"
            >
              Humidity {Data?.current?.humidity} %
            </Col>
            <Col
              md={3}
              xs={6}
              className="text-center fs-6 text-light my-1 py-1"
            >
              Visibility {Data?.current?.vis_km} km
            </Col>
          </Row>
        </Col>
        <Col sm={12} className="bg-white py-2 h-50 rounded-bottom">
          {Data?.forecast?.forecastday?.map((item) => (
            <Row className="mx-1 px-2 fs-5 border-dark border-bottom d-flex align-items-center justify-content-between">
              <Col xs={6} className="fs-6 my-1">
                {new Date(item.date).toDateString()}
              </Col>
              <Col xs={6} className="text-end fs-6 my-1">
                Avg Temp{" "}
                <span className="fw-bold">{item.day.avgtemp_c} &deg;C</span>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default WeatherCard;
