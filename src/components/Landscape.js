import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Menu from "./Menu";

export default function Landscape() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col lg={1}>
            <Menu/>
          </Col>

          <Col lg={11}>
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                lg={12}
              >
                <Row className="page-title">
                  <Col></Col>

                  <Col lg={5}>
                    <h1 className="left-align">Landscape</h1>
                    <p className="left-align">
                      Landscape photography shows spaces within the world,
                      sometimes vast and unending, but other times microscopic.
                    </p>
                  </Col>
                  <Col></Col>
                </Row>
                <Fade bottom cascade>
                  <Row className="picture-spacing">
                    <Col></Col>

                    <Col lg={10}>
                      <img
                        className="d-block w-100"
                        src="./assets/rock.jpg"
                        alt="First slide"
                      />
                    </Col>
                    <Col></Col>
                  </Row>
                </Fade>
                <Fade bottom cascade>
                  <Row className="picture-spacing">
                    <Col></Col>
                    <Col lg={6}>
                      <img
                        className="d-block w-100"
                        src="./assets/rock.jpg"
                        alt="First slide"
                      />
                    </Col>
                    <Col></Col>
                    <Col lg={5}>
                      <img
                        className="d-block w-100"
                        src="./assets/rock.jpg"
                        alt="First slide"
                      />
                    </Col>
                  </Row>
                </Fade>
                <Fade bottom cascade>
                  <Row className="picture-spacing">
                    <Col></Col>
                    <Col lg={4}>
                      <img
                        className="d-block w-100"
                        src="./assets/toronto.jpg"
                        alt="First slide"
                      />
                    </Col>
                    <Col></Col>
                    <Col lg={6}>
                      <img
                        className="d-block w-100"
                        src="./assets/rock.jpg"
                        alt="First slide"
                      />
                    </Col>
                  </Row>
                </Fade>

                <Fade bottom cascade>
                  <Row className="picture-spacing">
                    <Col lg={8}>
                      <img
                        className="d-block w-100"
                        src="./assets/rock.jpg"
                        alt="First slide"
                      />
                    </Col>
                    <Col></Col>
                  </Row>
                </Fade>

                <Fade bottom cascade>
                  <Row className="picture-spacing">
                    <Col></Col>
                    <Col lg={9}>
                      <img
                        className="d-block w-100"
                        src="./assets/rock.jpg"
                        alt="First slide"
                      />
                    </Col>
                  </Row>
                </Fade>
              </Col>
            </Row>
            
          </Col>
          
        </Row>
      </Container>
    </div>
  );
}
