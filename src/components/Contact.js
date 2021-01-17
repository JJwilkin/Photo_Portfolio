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
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Contact(props) {
  const { showFade, setShowFade, showMenu } = props;
  const [loading, setLoading] = useState(true);
  const desktop = useMediaQuery("(min-width:1000px)");

  setTimeout(() => {
    setShowFade(true);
        setTimeout(() => {
          setLoading(false);
        }, 300);
  }, 2100);

  return (
    <div className="App ">
      <Container fluid>
      <Row style={!desktop && !loading ? null: {display:'none'}}>
          <Col lg={12}>
            {desktop ? null : (
              <div>
                <Fade when={!showMenu && !loading}>
                  <Link to="/">
                    <h2
                      className="logo mobile-homepage-title"
                      style={{ textAlign: "right" }}
                    >
                      jxshooter
                    </h2>
                  </Link>
                </Fade>
              </div>
            )}
          </Col>
        </Row>
        <Row>
          <Col lg={1}>
            {desktop ? (
              <Menu
                selectedOption="contact"
                showFade={showFade}
                setShowFade={setShowFade}
              />
            ) : null}
          </Col>

          <Col lg={10}>
            <Row style={desktop ? { height: "100vh" } : {height: "95vh"}}>
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
                            <p className="right-align small-margin small-text">
                              <b>Email</b> &nbsp;
                              <a
                                target="_blank"
                                href="mailto:jxshooter@outlook.com"
                              >
                                jxshooter@outlook.com
                              </a>
                            </p>
                            <p className="right-align small-margin small-text">
                              <b>Text</b> &nbsp;
                              <a href="sms:6472194678">+1 (647) 219 4678</a>
                            </p>
                            <p className="right-align small-margin small-text">
                              <b>IG</b> &nbsp;
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
          <Col lg={1} style={desktop ? null : { display: "none" }}>
            <RightMenu
              selectedOption="landscape"
              showFade={showFade}
              setShowFade={setShowFade}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
