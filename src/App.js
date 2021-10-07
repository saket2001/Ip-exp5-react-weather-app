import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import WeatherCard from "./components/WeatherCard";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState("");
  const [Data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(
        "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Mumbai&days=3",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": `${process.env.React_App_Api_Key}`,
          },
        }
      );

      const data = await res.json();
      console.log(data);
      setLoading(false);
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <Container
      fluid
      className="bg-secondary vw-100 min-vh-100 d-flex justify-content-center align-items-center overflow-hidden"
    >
      {loading && (
        <Spinner animation="border" size="lg" variant="light" role="status" />
      )}
      {!loading && (
        <Row>
          <Col md={12} sm={6}>
            <WeatherCard Data={Data} />
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default App;
