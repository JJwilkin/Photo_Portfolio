import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/HomePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Street() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col lg={1}>
            <div className="menu">
              <Fade bottom>
                <h2 className="logo">jxshooter</h2>
              </Fade>
              <Fade bottom cascade>
                <div>
                  <table>
                    <tr>
                      <Link to="/portrait">
                        <td className="num-col">
                          <b>01</b>
                        </td>
                        <td>
                          <h6>
                            <b>PORTRAIT</b>
                          </h6>
                        </td>
                      </Link>
                    </tr>
                    <tr>
                      <Link to="/landscape">
                        <td className="num-col">02</td>
                        <td>
                          <h6>LANDSCAPE</h6>
                        </td>
                      </Link>
                    </tr>
                    <tr>
                      <Link to="/street">
                        <td className="num-col">03</td>
                        <td>
                          <h6>STREET</h6>
                        </td>
                      </Link>
                    </tr>
                  </table>
                </div>
              </Fade>

              <Fade bottom>
                <h6>About Me &nbsp;&#10230;</h6>
              </Fade>
            </div>
          </Col>

          <Col lg={10}>
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
                    <h1 style={{ textAlign: "center" }}>Street</h1>
                    {/* <p style={{ textAlign: "left" }}>
                      Street photography, also sometimes called candid
                      photography, is photography conducted for art or enquiry
                      that features unmediated chance encounters and random
                      incidents within public places.
                    </p> */}
                  </Col>
                  <Col></Col>
                </Row>
                <Fade  >
                  <Row style={{ marginBottom: "30%" }}>
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
                <Fade  >
                  <Row style={{ marginBottom: "30%" }}>
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
                <Fade  >
                  <Row style={{ marginBottom: "30%" }}>
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

                <Fade  >
                  <Row style={{ marginBottom: "30%" }}>
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

                <Fade  >
                  <Row style={{ marginBottom: "30%" }}>
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
            {/*             
              <div >
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
              </div> */}
          </Col>
          <Col className="last-col" lg={1}>
            <h6 className="contact">Contact for Collaboration &nbsp;+</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
