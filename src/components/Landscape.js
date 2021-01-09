import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Landscape() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col lg={2}>
            <div className="menu">
              <Fade bottom>
                <h2>JXSHOOTER</h2>
              </Fade>
              <Fade bottom>
                <div>
                  <Link to="/portrait">
                    <h2>Portrait</h2>
                  </Link>
                  <Link to="/landscape">
                    <h2>Landscape</h2>
                  </Link>
                  <Link to="/street">
                    <h2>Street</h2>
                  </Link>
                </div>
              </Fade>

              <Fade bottom>
                <h2>About Me</h2>
              </Fade>
            </div>
          </Col>

          <Col lg={8}>
            <Row>
              <Col
                style={{ display: "flex", justifyContent: "center" }}
                lg={12}
              >
                <h1>Landscape</h1>
              </Col>
            </Row>
            <Row
            class="hidenScroll"
              style={{
                height: "auto",
                // overflow: "scroll",
                // display: "flex",
                // justifyContent: "center",
              }}
            >
              {/* <div > */}
                <img
                  style={{ objectFit: "contain", height: "100%" }}
                  src="./assets/rock.jpg"
                  alt="Third slide"
                />
                <img
                  style={{ objectFit: "contain", height: "100%" }}
                  src="./assets/rock.jpg"
                  alt="Third slide"
                />
                <img
                  style={{ objectFit: "contain", height: "100%" }}
                  src="./assets/rock.jpg"
                  alt="Third slide"
                />
              {/* </div> */}
            </Row>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </Container>
    </div>
  );
}
