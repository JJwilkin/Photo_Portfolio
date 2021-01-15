import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../stylesheets/App.css";
import "../stylesheets/about.css";
import "../stylesheets/HomePage.css";
import "../stylesheets/PicturePage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Menu from "./Menu";
import RightMenu from "./RightMenu";
import Lottie from "react-lottie";
import animationData from "./loading2.json";
import cacheImages from "../services/cacheImages";

export default function About() {
  const [isLoading, setIsLoading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const imgs = [
      "./assets/joshua4.jpg",
      "./assets/toronto.jpg",

      "./assets/james1.jpg",
      "./assets/james2.jpg",
      "./assets/james3.jpg",
      "./assets/james4.jpg",
      "./assets/toronto2.jpg",
    ];
    cacheImages(imgs, setIsLoading);
  }, []);
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
                className="center-content"
                lg={12}
              >
                {isLoading ? (
                  <Lottie options={defaultOptions} height={400} width={400} />
                ) : (
                  <Fade>
                    <Row>
                      <Col></Col>

                      <Col lg={3}>
                        <img
                          className="d-block w-100"
                          src="./assets/joshua4.jpg"
                          alt="First slide"
                        />
                      </Col>
                      <Col lg={5}>
                        <Fade bottom>
                          <h1 className="left-align">About</h1>
                          <h3 className="left-align">I'm Josh</h3>
                          <p className="left-align">
                            Landscape photography shows spaces within the world,
                            sometimes vast and unending, but other times
                            microscopic. Landscape photography shows spaces
                            within the world, sometimes vast and unending, but
                            other times microscopic.
                          </p>
                          <p className="left-align">
                            Landscape photography shows spaces within the world,
                            sometimes vast and unending, but other times
                            microscopic. Landscape photography shows spaces
                            within the world, sometimes vast and unending, but
                            other times microscopic.
                          </p>
                        </Fade>
                      </Col>
                      <Col></Col>
                    </Row>
                  </Fade>
                )}
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
