import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/HomePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Landscape() {
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
                        <td className="num-col">01</td>
                        <td>
                          <h6>PORTRAIT</h6>
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
                {/* <svg width="100" height="100">
                <circle cx="50" cy="50" r="42" stroke="white" stroke-width="2" fill="black"/>
                <text x="43%" y="50%" text-anchor="middle" stroke="white" fill="white" stroke-width="0.8px" font-size="15px" dy="-5px">About</text>
                <text x="45%" y="50%" text-anchor="middle" stroke="white" fill="white" stroke-width="1px" font-size="15px" dy="15px">Me&nbsp;&nbsp;&#8594;</text>
              </svg>  */}
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
                    <h1 style={{ textAlign: "left" }}>Landscape</h1>
                    <p style={{ textAlign: "left" }}>
                      Landscape photography shows spaces within the world,
                      sometimes vast and unending, but other times microscopic.
                    </p>
                  </Col>
                  <Col></Col>
                </Row>
                <Fade bottom cascade>
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
                <Fade bottom cascade>
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
                <Fade bottom cascade>
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

                <Fade bottom cascade>
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

                <Fade bottom cascade>
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
