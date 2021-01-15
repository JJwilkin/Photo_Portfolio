import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/about.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import "../stylesheets/contact.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import LoadingAnimation from "./LoadingAnimation";

export default function Contact() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 2100);

  return (
    <div className="App ">
      <Container fluid>
        <Row>
          <Col lg={1}>
            <Menu selectedOption="about" />
          </Col>

          <Col lg={10}>
            <Row style={{ height: "100vh" }}>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                lg={12}
              >
                <Fade opposite>
                  <div
                    style={{ display: loading ? "flex" : "none" }}
                    className="max-height center-content"
                  >
                    <LoadingAnimation />
                  </div>
                </Fade>
                <div style={{ display: loading ? "none" : "block" }}>
                  <Fade>
                    <Row>
                      <Col lg={4}></Col>

                      <Col className="contact-card" lg={4}>
                        <Fade bottom>
                          <p className="right-align remove-margin">CONTACT</p>
                          <h1 className="right-align">Joshua Wilkinson</h1>
                          {/* <h3 className="left-align">Let's collaborate</h3> */}
                          <div>
                            <p className="right-align small-margin">
                              <b>Email</b> &nbsp;
                              <a
                                target="_blank"
                                href="mailto:joshjeffreywilkinson@gmail.com"
                              >
                                joshjeffreywilkinson@gmail.com
                              </a>
                            </p>
                            <p className="right-align small-margin">
                              <b>Phone</b> &nbsp;
                              <a href="tel:6472194678">+1 (647) 219 4678</a>
                            </p>
                            <p className="right-align small-margin">
                              <b>Instagram</b> &nbsp;
                              <a
                                target="_blank"
                                href="https://www.instagram.com/jxshooter/"
                              >
                                @jxshooter
                              </a>
                            </p>
                          </div>
                        </Fade>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Fade>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg={1}>
            <RightMenu selectedOption="landscape" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
