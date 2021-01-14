import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/about.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import '../stylesheets/contact.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import Gallery from "react-photo-gallery";

export default function Contact() {
  const photos = [
    {
      src: "./assets/rock.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./assets/rock.jpg",
      width: 4,
      height: 3,
    },
    {
      src: "./assets/toronto.jpg",
      width: 1,
      height: 1,
    },
  ];
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
                <Fade>
                  <Row>
                    <Col></Col>

                    <Col lg={5}>
                      <Gallery photos={photos} />
                    </Col>
                    <Col lg={5}>
                      <Fade bottom>
                        <h1 className="left-align">Let's Work</h1>
                        <h3 className="left-align">Together</h3>
                        <div className="contact-card">
                            <p>Email</p>
                            <p>Phone</p>
                            <p>Instagram</p>
                            <p>Name</p>
                        </div>
                      </Fade>
                    </Col>
                    <Col></Col>
                  </Row>
                </Fade>
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
